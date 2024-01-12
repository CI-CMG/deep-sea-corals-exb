/** @jsx jsx */
import {
  type AllWidgetProps,
  jsx,
  // type QueriableDataSource,
  type DataSource,
  DataSourceComponent,
  type IMState,
  ReactRedux
} from 'jimu-core'
import {
  type JimuMapView,
  JimuMapViewComponent,
  type FeatureLayerDataSource,
  type MapDataSource
} from 'jimu-arcgis'
// import { useState, useEffect, useRef } from 'react'
import webMercatorUtils from 'esri/geometry/support/webMercatorUtils'
import type Extent from 'esri/geometry/Extent'
import { type IMConfig } from '../config'
// import type FeatureLayerView from 'esri/views/layers/FeatureLayerView'
import FeatureLayer from 'esri/layers/FeatureLayer'
import reactiveUtils from 'esri/core/reactiveUtils'
import './widget.css'
// import Feature from '@arcgis/core/widgets/Feature'
import { useState } from 'react'
const { useSelector } = ReactRedux

// user-defined type guard using type predicate
function isMapDataSourceType (obj: DataSource): obj is MapDataSource {
  return (obj as MapDataSource).type === 'WEB_MAP' && (obj as MapDataSource).isDataSourceSet
}

function isFeatureLayerDataSourceType (obj: DataSource): obj is FeatureLayerDataSource {
  return (obj as FeatureLayerDataSource).type === 'FEATURE_LAYER'
}

function formatExtent (mercExtent: Extent) {
  const geoExtent = webMercatorUtils.webMercatorToGeographic(mercExtent, false) as Extent
  return `${geoExtent.xmin.toFixed(3)}, ${geoExtent.ymin.toFixed(3)}, ${geoExtent.xmax.toFixed(3)}, ${geoExtent.ymax.toFixed(3)}`
}

export default function Widget (props: AllWidgetProps<IMConfig>) {
  console.info('rendering demo-widget...')
  const [activeDs, setActiveDs] = useState<FeatureLayerDataSource>()

  // get state for this widget
  const widgetState = useSelector((state: IMState) => {
    return state.widgetsState[props.widgetId]
  })

  // console.log({ widgetState })
  const messageDataSourceId = widgetState?.filterChangeMessage?.dataSourceIds[0]
  if (activeDs && activeDs.id === messageDataSourceId) {
    const incomingMsg = widgetState?.filterChangeMessage
    console.log({incomingMsg})
    console.log('QueryParams: ', activeDs.getCurrentQueryParams())
    console.log('DataSourceFilterChangeMessage received for this datasource. QueryParams: ', activeDs.getCurrentQueryParams().where)
  }

  // runs once
  function onDataSourceCreated (ds: DataSource) {
    console.log('DataSource has been created...', ds)

    const mapDs = isMapDataSourceType(ds.parentDataSource) ? ds.parentDataSource : undefined
    mapDs.childDataSourcesReady().then(childDataSources => {
      console.log(`${childDataSources.length} child datasources are ready:`)
      // childDataSources.forEach(it => {
      //   console.log(it.getLabel())
      // })
    })

    const featureLayerDataSource = isFeatureLayerDataSourceType(ds) ? ds : undefined
    setActiveDs(featureLayerDataSource)
  }

  // runs once
  const activeViewChangeHandler = (jmv: JimuMapView) => {
    console.log('ActiveView has changed...')

    // fires for each change so zoom/pan operations trigger many executions between start and end of move
    // reactiveUtils.when(
    //   () => !jmv.view.updating,
    //   () => {
    //     console.log('extent: ', formatExtent(jmv.view.extent))
    //   }
    // )

    reactiveUtils.watch(
      () => jmv.view.stationary,
      (stationary) => {
        if (stationary) {
          // do something with the new extent
          console.log('extent: ', formatExtent(jmv.view.extent))
        }
      }
    )

    // grab the LayerView associated with the points layer (defined in config.json)
    jmv.whenAllJimuLayerViewLoaded().then((views) => {
      console.log('all mapviews loaded')
      // JimuLayerViews is not documented but appears to be a simple Object with one property per JimuLayerView
      const pointsLayerView = Object.entries(views).find(kvp => {
        return kvp[1].layer.title === props.config.featureLayerTitle
      })[1]
      if (!(pointsLayerView.layer instanceof FeatureLayer)) {
        throw new Error(`Layer "${props.config.featureLayerTitle}" expected to be a FeatureLayer`)
      }
      const pointsLayer = pointsLayerView.layer
      console.log({ pointsLayer })
      console.log({ pointsLayerView })
    })
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
      <p>Demo Widget</p>
      <p>{activeDs ? activeDs.layer.title : ''}</p>
      <p>{activeDs ? activeDs.getCurrentQueryParams().where : ''}</p>
      <p>{widgetState?.extent ? formatExtent(widgetState.extent) : ''}</p>
    </div>
  )
}
