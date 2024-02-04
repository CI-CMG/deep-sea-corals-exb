/** @jsx jsx */
import {
  type AllWidgetProps,
  jsx,
  // type QueriableDataSource,
  type DataSource,
  DataSourceComponent,
  type IMState,
  ReactRedux,
  appActions
} from 'jimu-core'
import {
  type JimuMapView,
  JimuMapViewComponent,
  type FeatureLayerDataSource,
  type MapDataSource
} from 'jimu-arcgis'
import MapView from '@arcgis/core/views/MapView'
import SceneView from '@arcgis/core/views/SceneView'
import GraphicsLayer from 'esri/layers/GraphicsLayer'
// import type Graphic from 'esri/Graphic'
// import FeatureLayer from 'esri/layers/FeatureLayer'
// import reactiveUtils from 'esri/core/reactiveUtils'
import {
  getGraphics,
  // toggleOutlineColor,
  // getHighlightedGraphic,
  // setDataSource
} from '../h3-utils'
import { useState, useRef } from 'react'
import { type IMConfig } from '../config'
import './widget.css'

const { useSelector } = ReactRedux

// user-defined type guard using type predicate
function isMapDataSourceType (obj: DataSource): obj is MapDataSource {
  return (obj as MapDataSource).type === 'WEB_MAP' && (obj as MapDataSource).isDataSourceSet
}

function isFeatureLayerDataSourceType (obj: DataSource): obj is FeatureLayerDataSource {
  return (obj as FeatureLayerDataSource).type === 'FEATURE_LAYER'
}

function isMapViewType(obj: MapView|SceneView): obj is MapView {
  return (obj as MapView).type === '2d'
}

//TODO why does widget render twice on filter action (i.e. widget props change)?
export default function Widget (props: AllWidgetProps<IMConfig>) {
  console.log(`rendering hexbin-layer widget (${props.widgetId})...`)
  const [activeDs, setActiveDs] = useState<FeatureLayerDataSource>()
  // const [mapView, setMapView] = useState<MapView>()
  const graphicsLayerRef = useRef<GraphicsLayer>()
  // const [queryParams, setQueryParams] = useState<string>()
  const where = activeDs ?  activeDs.getCurrentQueryParams().where : '1=1'

  // get state for this widget
  const widgetState = useSelector((state: IMState) => {
    return state.widgetsState[props.widgetId]
  })
  // console.log({ widgetState })

  if (graphicsLayerRef.current) {
    getGraphics(widgetState?.queryParams).then(graphics => {
      graphicsLayerRef.current.removeAll()
      graphicsLayerRef.current.graphics.addMany(graphics)
    })
  }

  // runs once
  function onDataSourceCreated (ds: DataSource) {
    // better way to get reference to Map?
    // const mapDs = isMapDataSourceType(ds.parentDataSource) ? ds.parentDataSource : undefined
    // console.log('Map: ', mapDs.map)
    const featureLayerDataSource = isFeatureLayerDataSourceType(ds) ? ds : undefined
    setActiveDs(featureLayerDataSource)
  }


  // runs once
  const activeViewChangeHandler = (jmv: JimuMapView) => {
    // should always be a MapView but the typeguard allows TS to determine type w/o explicit cast
    if (! isMapViewType(jmv.view)) { return }
    // setMapView(jmv.view)

    const hexbinLayerTitle = 'Hexbins'
    const graphicsLayer = new GraphicsLayer({
      title: 'Hexbins',
      listMode: 'show'
    })
    graphicsLayerRef.current = graphicsLayer
    jmv.view.map.add(graphicsLayer)
    // notify hexbin-info widget
    props.dispatch(appActions.widgetStatePropChange(props.config.hexbinInfoWidgetId, 'hexbinLayerTitle', hexbinLayerTitle))
  }


  return (
    <div style={{ paddingLeft: '10px' }}>
      <DataSourceComponent
        useDataSource={props.useDataSources?.[0]}
        widgetId={props.id}
        onDataSourceCreated={onDataSourceCreated}
      />
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={activeViewChangeHandler}
      />
      <p>Hexbin Layer</p>
      <p>{activeDs ? activeDs.layer.title : ''}</p>
      <p>{activeDs ? activeDs.getCurrentQueryParams().where : ''}</p>
    </div>
  )
}
