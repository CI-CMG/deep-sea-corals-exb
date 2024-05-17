/** @jsx jsx */
import {
  type AllWidgetProps,
  jsx,
  // type QueriableDataSource,
  type DataSource,
  DataSourceComponent,
  // type FeatureLayerQueryParams,
  type IMState,
  ReactRedux
} from 'jimu-core'
import {
  type JimuMapView,
  // type JimuFeatureLayerView,
  JimuMapViewComponent,
  type FeatureLayerDataSource
  // type MapDataSource
} from 'jimu-arcgis'
// import { useState, useEffect, useRef } from 'react'
import webMercatorUtils from 'esri/geometry/support/webMercatorUtils'
import type Extent from 'esri/geometry/Extent'
import { type IMConfig } from '../config'
import type FeatureLayerView from 'esri/views/layers/FeatureLayerView'
import FeatureLayer from 'esri/layers/FeatureLayer'
import reactiveUtils from 'esri/core/reactiveUtils'
// import Query from 'esri/rest/support/Query'
import './widget.css'
// import Feature from '@arcgis/core/widgets/Feature'
import { useEffect, useState, useRef } from 'react'
// import type MapView from 'esri/views/MapView'
const { useSelector } = ReactRedux

// user-defined type guard using type predicate
function isFeatureLayerDataSourceType (obj: DataSource): obj is FeatureLayerDataSource {
  return (obj as FeatureLayerDataSource).type === 'FEATURE_LAYER'
}

function formatExtent (mercExtent: Extent) {
  const geoExtent = webMercatorUtils.webMercatorToGeographic(mercExtent, false) as Extent
  return `${geoExtent.xmin.toFixed(3)}, ${geoExtent.ymin.toFixed(3)}, ${geoExtent.xmax.toFixed(3)}, ${geoExtent.ymax.toFixed(3)}`
}

export default function Widget (props: AllWidgetProps<IMConfig>) {
  // console.info('rendering record-count...')
  const [activeDs, setActiveDs] = useState<FeatureLayerDataSource>()
  const [totalRecordCount, setTotalRecordCount] = useState<number>()
  const [filteredRecordCount, setFilteredRecordCount] = useState<number>()
  const abortControllerRef = useRef<AbortController>()
  const layerViewRef = useRef<FeatureLayerView>()
  const [serverError, setServerError] = useState(false)

  // const [whereClause, setWhereClause] = useState<string>()
  const [mapExtent, setMapExtent] = useState<Extent>()

  // get state for this widget.
  const widgetState = useSelector((state: IMState) => {
    return state.widgetsState[props.widgetId]
  })

  useEffect(() => {
    // console.log('inside useEffect. FilterChangeMessage: ', widgetState?.filterChangeMessage)
    setFilteredRecordCount(null)
    if (layerViewRef.current && layerViewRef.current.suspended) {
      getServerSideCount()
    } else {
      getClientSideCount()
    }
    // TODO get queryParams from message (i.e. widgetState) or from DataSource
    // if (widgetState?.filterChangeMessage) {
    //   console.log('filterChangeMessage: ', widgetState.filterChangeMessage)
    // }
  }, [widgetState, mapExtent])

  // const messageDataSourceId = widgetState?.filterChangeMessage?.dataSourceIds[0]
  // if (activeDs && activeDs.id === messageDataSourceId) {
  //   setWhereClause(activeDs.getCurrentQueryParams().where)
  //   console.log('DataSourceFilterChangeMessage received for this datasource. QueryParams: ', activeDs.getCurrentQueryParams().where)
  // }

  // runs once
  function onDataSourceCreated (ds: DataSource) {
    const featureLayerDataSource = isFeatureLayerDataSourceType(ds) ? ds : undefined
    // const dsTitle = featureLayerDataSource.layer.title
    setActiveDs(featureLayerDataSource)
    getTotalRecordCount(featureLayerDataSource.layer)
  }

  // runs once
  const activeViewChangeHandler = (jmv: JimuMapView) => {
    // TODO better to watch updating or stationary property?
    reactiveUtils.watch(
      () => jmv.view.stationary,
      (stationary) => {
        if (stationary) {
          // console.log('extent: ', formatExtent(jmv.view.extent))
          setMapExtent(jmv.view.extent)
        }
      }
    )

    // grab the LayerView associated with the points layer (defined in config.json). layer
    // title could be obtained from DataSource but cannot guarantee it is yet available
    jmv.whenAllJimuLayerViewLoaded().then((views) => {
      // JimuLayerViews appears to be a simple Object w/ one property per JimuLayerView
      const pointsLayerView = Object.entries(views).find(kvp => {
        return kvp[1].layer.title === props.config.featureLayerTitle
      })[1]
      if (!(pointsLayerView.layer instanceof FeatureLayer)) {
        throw new Error(`Layer "${props.config.featureLayerTitle}" expected to be a FeatureLayer`)
      }
      layerViewRef.current = pointsLayerView.view as FeatureLayerView
    })
  }

  function getClientSideCount () {
    if (!(layerViewRef.current && activeDs)) { return }
    const startTime = new Date()
    const query = layerViewRef.current.createQuery()
    if (activeDs.getCurrentQueryParams().where) {
      query.where = activeDs.getCurrentQueryParams().where
    }
    query.geometry = mapExtent
    layerViewRef.current.queryFeatureCount(query).then(count => {
      console.log(`clientSideFeatureCount complete in ${(new Date().getTime() - startTime.getTime()) / 1000} seconds`)
      setFilteredRecordCount(count)
    }).catch((reason) => {
      console.log('clientSideFeatureCount error: ', reason)
    })
  }

  function getServerSideCount () {
    if (!activeDs) { return }

    // cancel any running request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    // async request timeout idea taken from  Faraz K. Kelhini, "Modern Asynchronous JavaScript"
    const timeOutMilliseconds = 20000
    const failure = new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(`server failed to respond in ${timeOutMilliseconds / 1000} seconds`))
      }, timeOutMilliseconds)
    })

    const layer: FeatureLayer = activeDs.layer
    const query = layer.createQuery()
    if (activeDs.getCurrentQueryParams().where) {
      query.where = activeDs.getCurrentQueryParams().where
    }
    query.geometry = mapExtent

    abortControllerRef.current = new AbortController()
    const startTime = new Date()
    Promise.race([
      layer.queryFeatureCount(query, { signal: abortControllerRef.current.signal }),
      failure
    ])
      .then(count => {
        setFilteredRecordCount(count)
      })
      .catch((reason) => {
        if (reason.name !== 'AbortError') {
          console.error('Server Side Count failed: ', reason)
          setServerError(true)
        }
      }).finally(() => {
        abortControllerRef.current = null
        console.log(`Server Side Count complete in ${(new Date().getTime() - startTime.getTime()) / 1000} seconds`)
      })
  }

  // should only execute once
  function getTotalRecordCount (layer: FeatureLayer) {
    if (!layer) { return }

    layer.queryFeatureCount()
      .then((results: number) => {
        setTotalRecordCount(results)
      })
      .catch((error) => { console.error(error) })
  }

  function formatCounts () {
    if (totalRecordCount !== null && filteredRecordCount !== null) {
      return <span>{filteredRecordCount?.toLocaleString('en-US')} out of {totalRecordCount?.toLocaleString('en-US')} records in view</span>
    } else if (serverError) {
      return <span>Server Error - please try again</span>
    } else {
      return <span>updating...</span>
    }
  }

  return (
    <div>
      <DataSourceComponent
        useDataSource={props.useDataSources?.[0]}
        widgetId={props.id}
        onDataSourceCreated={onDataSourceCreated}
      />
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={activeViewChangeHandler}
      />
      <div style={{ paddingLeft: '10px' }}>
        {formatCounts()}
      </div>
    </div>
  )
}
