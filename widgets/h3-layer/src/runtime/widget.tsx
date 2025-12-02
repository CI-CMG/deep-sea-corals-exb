/** @jsx jsx */

/*
 * there are two runtime events which impact this widget:
 *
 * 1) mapClick
 * this only requires that the hexbin summary be updated
 *
 * 2) filter changes (i.e. DataSource queryParams)
 * this requires that the graphics layer be updated (both boundaries and symbology)
 *
 * Both are handled (indirectly) via respective useEffect hooks, i.e.
 * event changes state -> triggers re-render -> useEffect runs
 *
 * Note that if a individual hexbin was selected at the time the queryParams
 * change, it will be deselected and the summary cleared. This is necessary
 * since a change in queryParams may cause a hexbin which was formerly displayed
 * to no longer be drawn
 */
import {
  React,
  jsx,
  type AllWidgetProps,
  type IMState,
  ReactRedux,
  appActions,
  getAppStore,
  jimuHistory,
  type DataSource,
  DataSourceComponent
} from 'jimu-core'

import { type JimuMapView, JimuMapViewComponent, type FeatureLayerDataSource } from 'jimu-arcgis'
import GraphicsLayer from 'esri/layers/GraphicsLayer'
import type FeatureLayer from 'esri/layers/FeatureLayer'
import type Graphic from 'esri/Graphic'
import type MapView from 'esri/views/MapView'
import PopupTemplate from 'esri/PopupTemplate'
// import TileLayer from 'esri/layers/TileLayer'
// import * as reactiveUtils from 'esri/core/reactiveUtils'
import { useState, useEffect, useRef } from 'react'
import PhylumChart from './PhylumChart'
import { type IMConfig } from '../config'
import {
  getGraphics,
  getDepthRange,
  getPhylumCounts,
  getScientificNameCounts,
  toggleOutlineColor,
  getHighlightedGraphic,
  // getEnvironmentalVariables,
  getEnvironmentalStatistics,
  setDataSource
} from '../h3-utils'

import {
  type EnvironmentalStats,
  type HexbinSummary,
  type ScientificNameCount
} from '../h3-layer-types'
const { useSelector } = ReactRedux

// user-defined type guard using type predicate
function isFeatureLayerDataSourceType (obj: DataSource): obj is FeatureLayerDataSource {
  return (obj as FeatureLayerDataSource).type === 'FEATURE_LAYER'
}

export default function H3Layer (props: AllWidgetProps<IMConfig>) {
  // console.log('inside h3-layer')
  const graphicsLayerRef = useRef<GraphicsLayer>()
  const [selectedGraphic, setSelectedGraphic] = useState<Graphic | null>(null)
  const [hexbinSummary, setHexbinSummary] = useState<HexbinSummary>()
  const [serverError, setServerError] = useState(false)
  const queryParamsRef = useRef(null)
  const mapViewRef = useRef<MapView>(null)
  // const [activeDs, setActiveDs] = useState<FeatureLayerDataSource>()

  // for convenience in JSX. cannot destruct from object because selectedGraphic may be null
  const h3 = selectedGraphic?.attributes.h3
  const pointCount = selectedGraphic?.attributes.count

  // get state for this widget
  const widgetState = useSelector((state: IMState) => {
    return state.widgetsState[props.widgetId]
  })
  // console.log({widgetState})
  queryParamsRef.current = widgetState?.queryParams
  // console.log('queryParams: ', queryParamsRef.current)

  // console.log(`re-rendering H3Layer. h3 = ${h3}; queryParams = ${widgetState?.queryParams}`)

  // Get the widget state - because the sidebar state may change in the runtime, via Redux's useSelector hook
  const sidebarWidgetState = useSelector((state: IMState) => {
    const widgetState = state.widgetsState[props.config.sidePanelId]
    return widgetState
  })

  // runs once
  function onDataSourceCreated (ds: DataSource) {
    const featureLayerDataSource = isFeatureLayerDataSourceType(ds) ? ds : undefined
    //const dsTitle = featureLayerDataSource.layer.title
    // set DataSource in h3-utils module
    setDataSource(featureLayerDataSource)
    // setActiveDs(featureLayerDataSource)
  }

  const handleExpandSidebar = (sectionId: string, viewId: string): void => {
    if (!sidebarWidgetState) {
      console.warn(`Sidebar ${props.config.sidePanelId} not available`)
      return
    }

    // counterintuitive naming convention: "collapse=true" means panel is expanded
    if (!sidebarWidgetState.collapse) {
      getAppStore().dispatch(appActions.widgetStatePropChange(
        props.config.sidePanelId,
        'collapse',
        true
      ))
    }
    jimuHistory.changeView(sectionId, viewId)
  }

  useEffect(() => {
    // console.log('queryParams changed, updating graphics layer: ', widgetState?.queryParams)
    resetHexbinSummary()
    if (!graphicsLayerRef.current) {
      // console.warn('GraphicsLayer not yet available')
      return
    }

    getGraphics(widgetState?.queryParams).then(graphics => {
      graphicsLayerRef.current.removeAll()
      graphicsLayerRef.current.graphics.addMany(graphics)
    })
  }, [widgetState?.queryParams])

  useEffect(() => {
    if (selectedGraphic) {
      const h3 = selectedGraphic.attributes.h3
      // console.log('selected hexbin changed: ', h3)
      deselectPreviousHexbin()
      toggleOutlineColor(selectedGraphic)

      // reset hexbin summary
      setHexbinSummary(null)
      setServerError(null)

      // use queryParamsRef to avoid having to add widgetState.queryParams to dependency array
      const whereClause = `(${queryParamsRef.current || '1=1'})`
      Promise.all([
        getDepthRange(h3, whereClause),
        getPhylumCounts(h3, whereClause),
        getScientificNameCounts(h3, whereClause),
        getEnvironmentalStatistics(h3, 'Temperature', whereClause),
        getEnvironmentalStatistics(h3, 'Salinity', whereClause),
        getEnvironmentalStatistics(h3, 'Oxygen', whereClause)
        // getEnvironmentalVariables(h3)
        // getSpeciesCount(h3, whereClause)
      ]).then(([depthRange, phylumCounts, scientificNameCounts, temperature, salinity, oxygen]) => {
        setHexbinSummary({
          minDepth: depthRange.MinDepth,
          maxDepth: depthRange.MaxDepth,
          phylumCounts,
          scientificNameCounts,
          speciesCount: { rawCount: scientificNameCounts.length },
          temperature: temperature,
          salinity: salinity,
          oxygen: oxygen
        })
        // console.log('promises completed: ', depthRange, phylumCounts, scientificNameCounts, environmentalVariables)
      }).catch((reason) => {
        console.error('Error getting HexbinSummary. ', reason)
        setServerError(reason)
      })
    } else {
      // console.log('no selected hexbin...')
      resetHexbinSummary()
      deselectPreviousHexbin()
    }
  }, [selectedGraphic])

  function mapClickHandler (hitTestResult: __esri.HitTestResult) {
    // console.log('inside mapClickHandler with : ', hitTestResult)

    // hitTest options ensure that only Corals layer and Graphics layer tested
    const featureHits = hitTestResult.results?.filter(hitResult =>
      hitResult.type === 'graphic' && hitResult.layer.type === 'feature'
    ) as __esri.GraphicHit[]
    const graphicHits = hitTestResult.results?.filter(hitResult =>
      hitResult.type === 'graphic' && hitResult.layer.type === 'graphics'
    ) as __esri.GraphicHit[]
    // console.log(`${featureHits?.length || 0} features; ${graphicHits?.length || 0} hexbins`)

    if (graphicHits?.length === 1) {
      // console.log('hexbin clicked: ', graphicHits[0].graphic.attributes.h3)
      setSelectedGraphic(graphicHits[0].graphic)
    } else if (graphicHits?.length === 0) {
      // console.log('outside hexbin')
      setSelectedGraphic(null)
    } else {
      // when click lands on hexbin boundary, arbitrarily use the first element in array
      setSelectedGraphic(graphicHits[0].graphic)
    }
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
  }

  function deselectPreviousHexbin () {
    // finds only the *first* highlighted graphic but there should never be > 1
    const highlightedGraphic = getHighlightedGraphic(graphicsLayerRef.current)
    if (highlightedGraphic) {
      toggleOutlineColor(highlightedGraphic)
    }
  }

  function resetHexbinSummary () {
    setSelectedGraphic(null)
    setHexbinSummary(null)
  }

  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (!jmv) {
      console.warn('no MapView')
      return
    }
    mapViewRef.current = jmv.view as MapView

    const graphicsLayer = new GraphicsLayer({
      title: 'Hexbins',
      listMode: 'show'
    })
    graphicsLayerRef.current = graphicsLayer

    jmv.view.when(() => {
      const coralsLayer = jmv.view.map.allLayers.filter(lyr => lyr.title === props.config.layerName).at(0) as FeatureLayer

      // define new simple popupTemplate to override one provided via WebMap
      // construct an explicit instance to make TypeScript happy
      const popupTemplate = new PopupTemplate({
        title: '{ScientificName}',
        content: 'Catalog Number: {CatalogNumber}'
      })
      coralsLayer.popupTemplate = popupTemplate

      jmv.view.map.add(graphicsLayer)
      // queryParams not needed since initial draw is for all features
      getGraphics().then(graphics => {
        graphicsLayerRef.current.removeAll()
        graphicsLayerRef.current.graphics.addMany(graphics)
      })

      const hitTestOptions = {
        include: [coralsLayer, graphicsLayer]
      }

      jmv.view.on('click', (evt) => {
        // console.log('mapclick detected: ', evt)
        // const startTimeForPopup = new Date()
        // TODO this is where flow stops when it fails to handle map click
        jmv.view
          .hitTest(evt, hitTestOptions)
          .then((response) => { mapClickHandler(response) })
          .finally(() => {
            // const elapsedMillisecsForPopup = new Date().getTime() - startTimeForPopup.getTime()
            // console.log(`popup completed in ${elapsedMillisecsForPopup / 1000} seconds`)
          })
      }) // end view on click
    }) // end MapView#when
  } // end activeViewChangeHandler

  function formatHexbinSummary () {
    const totalNumberOfSpecies = hexbinSummary?.scientificNameCounts.reduce(
      (accumulator: number, currentValue: ScientificNameCount) => accumulator + currentValue.Count,
      0
    )

    const calcSpeciesPercentage = (count: number) => {
      const pct = Math.round((count / totalNumberOfSpecies) * 100)
      return (pct || '<1')
    }

    let textAreaContent = ''
    // list of scientificNameCounts guaranteed to have unique 'ScientificName'
    // hexbinSummary?.scientificNameCounts.sort((a, b) => a.ScientificName > b.ScientificName ? 1 : -1).forEach(it => {
    hexbinSummary?.scientificNameCounts.forEach(it => {
      // textAreaContent += `${it.ScientificName}: ${it.Count} (${calcSpeciesPercentage(it.Count)}%) | ${it.VernacularNameCategory}\n`
      textAreaContent += `<${it.VernacularNameCategory}>\n${it.ScientificName}: ${it.Count} (${calcSpeciesPercentage(it.Count)}%)\n\n`
    })

    function salinity (stats: EnvironmentalStats) {
      if (stats.count) {
        const str = `${stats.min} / ${stats.avg.toFixed(1)} / ${stats.max} / ${stats.count.toLocaleString()}`
        return (
          <li>salinity(PSU): {str}</li>
        )
      } else {
        return (<li>salinity: not available</li>)
      }
    }
    function temperature (stats: EnvironmentalStats) {
      if (stats.count) {
        const str = `${stats.min} / ${stats.avg.toFixed(1)} / ${stats.max} / ${stats.count.toLocaleString()}`
        return (
          <li>temperature(&#8451;): {str}</li>
        )
      } else {
        return (<li>temperature: not available</li>)
      }
    }
    function oxygen (stats: EnvironmentalStats) {
      if (stats.count) {
        const str = `${stats.min} / ${stats.avg.toFixed(1)} / ${stats.max} / ${stats.count.toLocaleString()}`
        return (
          <li>oxygen(mL/L): {str}</li>
        )
      } else {
        return (<li>oxygen: not available</li>)
      }
    }

    if (serverError) {
      return (
        <div>
          <p>Hexbin {h3} has {pointCount.toLocaleString()} sample(s)</p>
          <span>Server Error - currently unable to collect statistics, please try again</span>
        </div>
      )
    } else {
      return (
      <div>
        {/* <p>Extent: {widgetState?.extent ? convertAndFormatCoordinates(widgetState.extent, 3) : ''}</p> */}
        {/* <p>Filter: {widgetState?.queryParams ? widgetState.queryParams : 'none'}</p> */}
        <p style={{ fontSize: 'medium' }}> Hexbin {h3} has <span style={{ fontSize: 'large', fontWeight: 'bold' }}>{pointCount.toLocaleString()}</span> sample(s)</p>

        {hexbinSummary
          ? <div>
              <p style={{ fontSize: 'medium' }}>depths range from <span style={{ fontSize: 'large', fontWeight: 'bold' }}>{hexbinSummary.minDepth}</span> to <span style={{ fontSize: 'large', fontWeight: 'bold' }}>{hexbinSummary.maxDepth}</span> m</p>
              <div>
                <p style={{ fontSize: 'medium' }}>Phylum Counts:</p>
                {/* <ul>
                  {hexbinSummary.phylumCounts.map(el => { return <li>{el.Phylum}: {el.Count}</li> })}
                </ul> */}
                <PhylumChart data={hexbinSummary.phylumCounts}/>
              </div>
              <br/>
              <p style={{ fontSize: 'medium' }}><span style={{ fontSize: 'large', fontWeight: 'bold' }}>{hexbinSummary.speciesCount.rawCount}</span> unique scientific name(s)</p>
              {/* <ul>
              {hexbinSummary.scientificNameCounts.map(it => {
                return <li>{it.ScientificName}: {it.Count} ({calcSpeciesPercentage(it.Count)}%)</li>
              })}
              </ul> */}
              <textarea readOnly rows={5} wrap="off" style={{ width: '90%', marginLeft: '10px', marginRight: '15px', resize: 'vertical', overflow: 'auto' }}>
              {textAreaContent}
              </textarea>
              <div style={{ marginTop: '5px' }}>
                <span style={{ fontWeight: 'bold' }}>Environmental Variables</span> (min / avg / max / count):
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                  {salinity(hexbinSummary.salinity)}
                  {temperature(hexbinSummary.temperature)}
                  {oxygen(hexbinSummary.oxygen)}
                </ul>
              </div>
            </div>
          : 'gathering summary information...'
        }
      </div>
      )
    }
  }
  // console.log('leaving h3-layer')
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
      <div>
        {h3 ? formatHexbinSummary() : <p>Please select a hexagonal area to summarize</p>}
      </div>
    </div>

  )
}
