/** @jsx jsx */
import {
  type AllWidgetProps,
  jsx,
  type IMState,
  ReactRedux,
  type DataSource,
  DataSourceComponent,
  type FeatureLayerDataSource
} from 'jimu-core'
import {
  type JimuMapView,
  // type JimuFeatureLayerView,
  JimuMapViewComponent,
} from 'jimu-arcgis'
// import { Button, Icon, Tooltip } from 'jimu-ui'
// import type Extent from 'esri/geometry/Extent'
import Extent from "@arcgis/core/geometry/Extent"
import type MapView from '@arcgis/core/views/MapView'
import { geographicToWebMercator } from "@arcgis/core/geometry/support/webMercatorUtils"
import { useState, useEffect } from 'react'

// import { Label, Radio, defaultMessages as jimuUIMessages } from 'jimu-ui'
import type { IMConfig } from '../config'
// import { URLSearchParams } from 'url'
import './widget.css'
// import { element } from 'prop-types'

const { useSelector } = ReactRedux


// user-defined type guard using type predicate
function isFeatureLayerDataSourceType (obj: unknown): obj is FeatureLayerDataSource {
  return (obj as FeatureLayerDataSource).type === 'FEATURE_LAYER'
}

const featureServiceUrl = 'https://services2.arcgis.com/C8EMgrsFcRFL6LrL/ArcGIS/rest/services/DSCRTP_NatDB/FeatureServer/0/query'

const searchParams = new URLSearchParams([
  ['returnGeometry', 'false'],
  ['outSR', '4326'],
  ['returnExtentOnly', 'true'],
  ['f', 'pjson']
])

export default function Widget (props: AllWidgetProps<IMConfig>) {
  console.log('rendering zoom-to-selection...')
  const [activeDs, setActiveDs] = useState<FeatureLayerDataSource>()
  const [mapView, setMapView] = useState<MapView>()
  const [extent, setExtent] = useState<Extent>()


  // get state for this widget.
  const widgetState = useSelector((state: IMState) => {
    return state.widgetsState[props.widgetId]
  })

  if (activeDs) {
    console.log('inside zoom-to-selection widget, where:', activeDs?.getCurrentQueryParams().where)
  }
  const whereClause = activeDs?.getCurrentQueryParams().where

  useEffect(() => {
    // const filter = activeDs?.getCurrentQueryParams().whereClause
    console.log('inside useEffect, whereClause:  ', whereClause)
    if (whereClause === '1=1') {
      console.log('no where clause, skipping fetch')
      return
    }
    console.log({whereClause})

    const fetchExtent = async () => {
      const mySearchParams = new URLSearchParams(searchParams)
      mySearchParams.set('where', whereClause)
      try {
        const response = await fetch(`${featureServiceUrl}?${mySearchParams.toString()}`)
          if (!response.ok) { throw new Error('Network response failed') }
          const result = await response.json()
          console.log({result})
          setExtent(Extent.fromJSON(result.extent)) // Update state to trigger re-render
        } catch (err) {
          console.error(err.message)
        }
      }
    fetchExtent()

  }, [whereClause])

  // const featureServiceUrl = activeDs?.getLayer().url
  console.log({extent})


  // runs once
  function onDataSourceCreated (ds: DataSource) {
    // TODO: which is better?
    //const featureLayerDataSource = isFeatureLayerDataSourceType(ds) ? ds : undefined
    //setActiveDs(featureLayerDataSource)
    if (isFeatureLayerDataSourceType(ds)) {
      setActiveDs(ds)
    } else {
      console.error('zoom-to-selection: DataSource is not a FeatureLayerDataSource')
    }
    // const dsTitle = featureLayerDataSource.layer.title
  }


  // runs once
  const activeViewChangeHandler = (jmv: JimuMapView) => {
    setMapView(jmv.view as MapView)
  }


  const onClickHandler = () => {
    if (!mapView || !extent) {
      console.error('zoom-to-selection: MapView and/or extent not yet set. Cannot zoom to selection')
      return
    }
    const webMercatorExtent = geographicToWebMercator(extent) as Extent

    if (webMercatorExtent.width < 50000 || webMercatorExtent.height < 50000) {
      // use centerpoint and fixed zoom level to avoid zooming in too far on small selections
      mapView.goTo({ center: webMercatorExtent.center, zoom: 10 }, { duration: 1000 })
      console.log('clicked, zooming to centerpoint')
      return
    }

    mapView.goTo(webMercatorExtent.expand(1.5), { duration: 1000 })
    console.log('clicked')
  }

  return (
    <div className="erddap-query jimu-widget m-2">
      <DataSourceComponent
        useDataSource={props.useDataSources?.[0]}
        widgetId={props.id}
        onDataSourceCreated={onDataSourceCreated}
      />
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={activeViewChangeHandler}
      />
      <div style={{ position: 'absolute', right: '15px' }}>
        <calcite-button
          label="Zoom to Selection"
          onClick={onClickHandler}
          disabled={whereClause === '1=1'}
          kind='neutral'
          scale='s'
          round
        >
            Zoom to Selection
        </calcite-button>

          {/* <Tooltip placement="top" title="Copy URL to clipboard">
          <Button aria-label="Button" icon onClick={onClickHandler} active={buttonActive}>
            <Icon icon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 10H8.723l1.602 1.602-.707.707L6.808 9.5l2.81-2.81.707.708L8.723 9H16zM3 13h4v-1H3zm8-12v1h2v6h-1V3h-1v1H3V3H2v12h10v-4h1v5H1V2h2V1h2.277a1.984 1.984 0 0 1 3.446 0zm-1 1H8v-.318A.682.682 0 0 0 7.318 1h-.636A.682.682 0 0 0 6 1.682V2H4v1h6zM7 6H3v1h4zm-4 4h2V9H3z"/><path fill="none" d="M0 0h16v16H0z"/></svg>'
            />
          </Button>
        </Tooltip> */}
      </div>
    </div>
  )
}
