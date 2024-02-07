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
import {
  useQuery,
  // useQueryClient,
  useQueries,
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from '@tanstack/react-query'
import {
  setCoralsUrl,
  fetchDepthRange,
  fetchEnvironmentalData,
  fetchPhylumCount,
  fetchScientificNameCount
} from '../queries'
import PhylumChart from './PhylumChart'
import {
  toggleOutlineColor,
  deselectPreviousHexbin
} from '../h3-utils'
import { type IMConfig } from '../config'
// import type FeatureLayerView from 'esri/views/layers/FeatureLayerView'
import FeatureLayer from 'esri/layers/FeatureLayer'
import './widget.css'
// import Feature from '@arcgis/core/widgets/Feature'
import { useState, useRef, useEffect, ReactNode } from 'react'
import MapView from '@arcgis/core/views/MapView'
import SceneView from '@arcgis/core/views/SceneView'
import GraphicsLayer from 'esri/layers/GraphicsLayer'
import type Graphic from 'esri/Graphic'
import PopupTemplate from 'esri/PopupTemplate'

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


export default function Widget (props: AllWidgetProps<IMConfig>) {
  // console.info(`rendering hexbin-info (${props.widgetId})...`)
  const [activeDs, setActiveDs] = useState<FeatureLayerDataSource>()
  const [mapView, setMapView] = useState<MapView>()
  const [initialized, setInitialized] = useState(false)
  const [selectedGraphic, setSelectedGraphic] = useState<Graphic>(null)
  const graphicsLayerRef = useRef<GraphicsLayer>()
  const where = activeDs && activeDs.getCurrentQueryParams().where ?  activeDs.getCurrentQueryParams().where : '1=1'

  // for convenience in JSX. cannot destruct from object because selectedGraphic may be null
  const h3 = selectedGraphic?.attributes.h3
  const pointCount = selectedGraphic?.attributes.count

  // get state for this widget
  const widgetState = useSelector((state: IMState) => {
    return state.widgetsState[props.widgetId]
  })
  // console.log({ widgetState })
  
  // datasource filter changed and widget notified via Action, i.e. change in widget state
  useEffect(() => {
    setSelectedGraphic(null)
  }, [widgetState?.queryParams])


  const hexbinLayerTitle = widgetState?.config?.hexbinLayerTitle ? widgetState.config.hexbinLayerTitle : 'Hexbins' 
  if (!graphicsLayerRef.current) {
    const hexbinLayer = mapView ? mapView.map.allLayers.find(element => element.title === hexbinLayerTitle) as GraphicsLayer: null
    if (hexbinLayer) { 
      graphicsLayerRef.current = hexbinLayer 
    }
  }

  if (activeDs && graphicsLayerRef.current && !initialized) {
    // const coralsLayer = activeDs.layer
    const coralsLayer = mapView.map.allLayers.find(lyr => lyr.title === activeDs.layer.title) as FeatureLayer
    const graphicsLayer = graphicsLayerRef.current
    
    // override popupTemplate provided via WebMap. TS wants explicit instance
    const popupTemplate = new PopupTemplate({
      title: '{ScientificName}',
      content: 'Catalog Number: {CatalogNumber}'
    })
    // popupTemplate only works when attached to FeatureLayer derived from MapView
    coralsLayer.popupTemplate = popupTemplate

    const hitTestOptions = {
      include: [coralsLayer, graphicsLayer]
    }

    mapView.on('click', (evt) => {
      // console.log('mapclick detected: ', evt)
      // const startTimeForPopup = new Date()
      // TODO this is where flow stops when it fails to handle map click
      mapView
        .hitTest(evt, hitTestOptions)
        .then((response) => { mapClickHandler(response) })
        .finally(() => {
          // const elapsedMillisecsForPopup = new Date().getTime() - startTimeForPopup.getTime()
          // console.log(`popup completed in ${elapsedMillisecsForPopup / 1000} seconds`)
        })
    }) // end view on click
    // setCoralsUrl(activeDs.url)
    setInitialized(true)
  }


  function mapClickHandler (hitTestResult: __esri.HitTestResult) {
    // console.log('inside mapClickHandler with : ', hitTestResult)

    // hitTest options ensure that only Corals layer and Graphics layer tested
    const featureHits = hitTestResult.results?.filter(hitResult =>
      hitResult.type === 'graphic' && hitResult.layer.type === 'feature'
    ) as __esri.GraphicHit[]
    const graphicHits = hitTestResult.results?.filter(hitResult =>
      hitResult.type === 'graphic' && hitResult.layer.type === 'graphics'
    ) as __esri.GraphicHit[]
    console.log(`${featureHits?.length || 0} features; ${graphicHits?.length || 0} hexbins`)

    if (graphicHits?.length === 1) {
      // console.log('hexbin clicked: ', graphicHits[0].graphic.attributes.h3)
      deselectPreviousHexbin(graphicsLayerRef.current)
      toggleOutlineColor(graphicHits[0].graphic)
      setSelectedGraphic(graphicHits[0].graphic)
    } else if (graphicHits?.length === 0) {
      // console.log('outside hexbin')
      setSelectedGraphic(null)
    } else {
      // when click lands on hexbin boundary, arbitrarily use the first element in array
      setSelectedGraphic(graphicHits[0].graphic)
    }
    /*
    // open side panel and select view. featureHits takes priority
    if (featureHits.length) {
      handleExpandSidebar(props.config.sectionId, props.config.detailsViewId)
      mapViewRef.current.popup.visible = true
    } else if (graphicHits.length) {
      handleExpandSidebar(props.config.sectionId, props.config.summaryViewId)
      mapViewRef.current.popup.visible = false
    } else {
      // no hits - leave sidepanel in current state
      mapViewRef.current.popup.visible = false
    }
    */
  }

  // runs once
  function onDataSourceCreated (ds: DataSource) {
    // const mapDs = isMapDataSourceType(ds.parentDataSource) ? ds.parentDataSource : undefined
    const featureLayerDataSource = isFeatureLayerDataSourceType(ds) ? ds : undefined
    setActiveDs(featureLayerDataSource)
    const fl = featureLayerDataSource.layer
  }

  // runs once
  const activeViewChangeHandler = (jmv: JimuMapView) => {
    // does this ever happen?
    if (!jmv.view.ready) { console.warn('MapView is not ready!') }
    if (isMapViewType(jmv.view)) { setMapView(jmv.view) }
    
    // TODO hardcoded value for graphics layer title. TODO get from widget properties
    const graphicsLayer = jmv.view.map.allLayers.find(element => element.title === hexbinLayerTitle) as GraphicsLayer
    if (graphicsLayer) { graphicsLayerRef.current = graphicsLayer }

    // necessary or will JimuMapView and MapView always be ready when ActiveViewChange event fires?
    // jmv.view.when((item:MapView|SceneView) => {
    //   if (isMapViewType(item)) { setMapView(item) }
    // })
  }

  const queryClient = new QueryClient()
  
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
      <QueryClientProvider client={queryClient}>
        { h3 ?
        <div>
        <HexbinInfoContainer url={activeDs.url + '/query'} h3={h3} where={where} pointCount={pointCount} />
        </div>
        : 'Please select a hexbin...'}
      </QueryClientProvider>
    </div>
  )
}

type HexbinInfoContainerProps = {
  h3:string
  where: string
  url: string
  pointCount: number
  children?: ReactNode
}
function HexbinInfoContainer({h3, url, where, pointCount}:HexbinInfoContainerProps) {
  const timerRef = useRef()
  if (!timerRef.current) { timerRef.current = new Date() }

  const queryClient = useQueryClient()  
  const queries = useQueries({
    queries: [
      {
        queryKey: ['depthRange', h3, where],
        queryFn: () => fetchDepthRange(url, h3, where)
      },
      {
        queryKey: ['phylumCount', h3, where],
        queryFn:() => fetchPhylumCount(url, h3, where)
      },
      {
        queryKey: ['scientificNameCount', h3, where],
        queryFn:() => fetchScientificNameCount(url, h3, where)
      },
      {
        queryKey: ['environmentalData', h3],
        queryFn:() => fetchEnvironmentalData(h3)
      }
    ]
  }, queryClient)
  // console.log('Status: ', queries.map(query => { return query.status }))
  let data = null
  let isError = false
  if (queries.every((query) => query.isSuccess)) {
    const queriesEndTime = new Date()
    console.log(`all queries complete for h3 ${h3} in ${(queriesEndTime.getTime() - timerRef.current.getTime())} milliseconds`)
    timerRef.current = null
    data = queries.map(query => { return query.data })
  }

  if (queries.find((query) => query.isError)) { isError = true }

  return (
    <div>
    {data ? 
      <div>
      <TitleComponent h3={h3} pointCount={pointCount} />
      <DepthRangeComponent pointCount={pointCount} data={data[0]} />
      <PhylumChart data={data[1]}/>
      {/* <PhylumCountComponent data={data[1]} /> */}
      <ScientificNamesComponent data={data[2]} />
      <EnvironmentalDataComponent data={data[3]} />
      </div>
    : '' }
    { isError ?
      <h4 style={{color: 'red'}}>Error retrieving data from server<br/>Please try again</h4>
    : '' }
    </div>
  )
}

function TitleComponent({h3, pointCount}) {
  return (
    <div>
    { h3 ?
    <p style={{ fontSize: 'medium' }}>Hexbin {h3} has <span style={{ fontSize: 'large', fontWeight: 'bold' }}>{pointCount.toLocaleString()}</span> {pointCount > 1 ? 'samples': 'sample'}</p>
    : <p>Please select a hexbin...</p>
    }
    </div>
  )
}

interface DepthRangeResponse {
  MinDepth: number
  MaxDepth: number
}

function DepthRangeComponent({pointCount, data}) {
  const styles = {
    emphasis: {
      fontSize: 'large', 
      fontWeight: 'bold' 
    },
    bodyText: {
      fontSize: 'medium'
    }
  }
/*
  //
  // example of using embedded query rather than having data passed in as props
  //
  const queryUrl = url + '/query'
  // const queryClient = useQueryClient()

  const searchParams = new URLSearchParams()
  searchParams.set('where', `${queryParams} and h3_2='${h3}'`)
  searchParams.set('outFields', 'DepthInMeters')
  searchParams.set('outStatistics', '[{"statisticType":"Min","onStatisticField":"DepthInMeters","outStatisticFieldName":"MinDepth"},{"statisticType":"Max","onStatisticField":"DepthInMeters","outStatisticFieldName":"MaxDepth"}]')
  searchParams.set('returnGeometry', 'false')
  searchParams.set('f', 'json')

  const fetchDepthRange = async (mySearchParams: URLSearchParams): Promise<DepthRangeResponse> => {
    const res = await fetch(queryUrl, { method: 'POST', body: mySearchParams })
    const payload = await res.json()
    return payload.features[0].attributes
  }

  const depthRangeQuery = {
    queryKey: ['depthRange', h3, queryParams],
    queryFn: () => fetchDepthRange(searchParams)
  }

  const query = useQuery(depthRangeQuery)
  
  if (query.error) { return <div>Request Failed</div> }
*/
  return (
    <div>
      { pointCount > 1 ? 
       <p style={styles.bodyText}>depths range from <span style={styles.emphasis}>{data.MinDepth}</span> to <span style={styles.emphasis}>{data.MaxDepth}</span> m</p>
       : ''
      }
      { pointCount === 1 ? 
       <p style={styles.bodyText}>depth is <span style={styles.emphasis}>{data.MinDepth}</span> m</p>
       : ''
      }
    </div>
  )
}


function ScientificNamesComponent({data}) {  
  const styles = {
    emphasis: {
      fontSize: 'large', 
      fontWeight: 'bold' 
    },
    bodyText: {
      fontSize: 'medium'
    },
    nameList: {
      width: '90%',
      marginLeft: '10px', 
      marginRight: '15px' 
    }
  }

  const totalNumberOfSpecies = data?.reduce(
    (accumulator: number, currentValue: ScientificNameCount) => accumulator + currentValue.Count, 0
  )

  const calcSpeciesPercentage = (count: number) => {
    const pct = Math.round((count / totalNumberOfSpecies) * 100)
    return (pct || '<1')
  }

  let textAreaContent = ''
  // list of scientificNameCounts guaranteed to have unique 'ScientificName'. Sorted in descending order by count
  data?.forEach(it => {
    textAreaContent += `${it.ScientificName}: ${it.Count} (${calcSpeciesPercentage(it.Count)}%)\n`
  })
  return (
    <div style={{marginTop: '10px'}}>
      <p style={styles.bodyText}><span style={styles.emphasis}>{data.length}</span> unique scientific name(s)</p>
      <textarea readOnly rows={5} style={styles.nameList}>
          {textAreaContent}
      </textarea>
    </div>
  )
}

function EnvironmentalDataComponent({data}) {
  console.log('inside EnvironmentalDataComponent with ', data)
  
  function salinity (data) {
    if (data?.salinity) {
      const str = `${data.min_salinity} / ${data.salinity} / ${data.max_salinity}`
      return (
        <li>salinity(PSU): {str}</li>
      )
    } else {
      return (<li>salinity: not available</li>)
    }
  }
  
  function temperature (data) {
    if (data?.temperature) {
      const str = `${data.min_temperature} / ${data.temperature} / ${data.max_temperature}`
      return (
        <li>temperature(&#8451;): {str}</li>
      )
    } else {
      return (<li>temperature: not available</li>)
    }
  }
  
  function oxygen (data) {
    if (data?.oxygen) {
      const str = `${data.min_oxygen} / ${data.oxygen} / ${data.max_oxygen}`
      return (
        <li>oxygen(mL/L): {str}</li>
      )
    } else {
      return (<li>oxygen: not available</li>)
    }
  }

  return (
    <div style={{ marginTop: '5px' }}>
      <span style={{ fontWeight: 'bold' }}>Environmental Variables</span> (min / median / max):
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {salinity(data)}
        {temperature(data)}
        {oxygen(data)}
      </ul>
    </div>
  )
}