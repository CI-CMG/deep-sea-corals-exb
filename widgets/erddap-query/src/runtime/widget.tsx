/** @jsx jsx */
import {
  type AllWidgetProps,
  jsx,
  type IMState,
  ReactRedux,
  type DataSource,
  DataSourceComponent
} from 'jimu-core'
import {
  type JimuMapView,
  // type JimuFeatureLayerView,
  JimuMapViewComponent,
  type FeatureLayerDataSource
  // type MapDataSource
} from 'jimu-arcgis'
import { Button, Icon, Tooltip } from 'jimu-ui'
import type Extent from 'esri/geometry/Extent'
import type MapView from '@arcgis/core/views/MapView'
// import SpatialReference from 'esri/geometry/SpatialReference'
import webMercatorUtils from 'esri/geometry/support/webMercatorUtils'
import reactiveUtils from 'esri/core/reactiveUtils'
import { useState, useRef } from 'react'

// import { Label, Radio, defaultMessages as jimuUIMessages } from 'jimu-ui'
import { type IMConfig } from '../config'
// import { URLSearchParams } from 'url'
import './widget.css'
// import { element } from 'prop-types'

const { useSelector } = ReactRedux

// interface CoordsObject {
//   xmin: number
//   ymin: number
//   xmax: number
//   ymax: number
// }

function findOceanNameByCode (code: string): string {
  const values = {
    0: 'Arctic',
    1: 'Indian',
    2: 'North Atlantic',
    3: 'North Pacific',
    4: 'South Atlantic',
    5: 'South Pacific',
    6: 'Southern'
  }
  return values[code] ? values[code] : ''
}

function findFisheryRegionByCode (code: string): string {
  const values = {
    0: 'NA',
    1: 'Caribbean',
    2: 'Gulf of Mexico',
    3: 'Mid-Atlantic',
    4: 'New England',
    5: 'Nort Pacific',
    6: 'Pacific',
    7: 'South Atlantic',
    8: 'Western Pacific'
  }
  return values[code] ? values[code] : ''
}

// user-defined type guard using type predicate
function isFeatureLayerDataSourceType (obj: DataSource): obj is FeatureLayerDataSource {
  return (obj as FeatureLayerDataSource).type === 'FEATURE_LAYER'
}

// mutates the provided array
function convertSqlToErddapParams (sql: string, searchParams: string[]) {
  // console.log('inside convertSqlToErddapParams with ', sql)

  // manipulate SQL string into list of 3-element lists (field, operator, value)
  const clauses = sql
    .replace(/\(+?/g, '') // replace left parens
    .replace(/\)+?/g, '') // replace right parens
    .replace(/LOWER/g, '') // remove the LOWER() function
    .split(/ and /i)
    .map(elem => {
      const t = elem.split(/\s+/)
      // construct 3-element array with field, operator, value. Value may have multiple words which need
      // to be rejoined and replace single quotes with double quotes
      return t.slice(0, 2).concat(t.slice(2).join(' ').replace(/'/g, '"'))
    })
  console.log(clauses)

  // build key/value pairs for specified parameters
  clauses.filter(elem => elem[0].toLowerCase() === 'vernacularnamecategory').forEach(elem => {
    searchParams.push(`VernacularNameCategory=${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'imageurl').forEach(elem => {
    searchParams.push('ImageURL=~"http.+"')
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'depthinmeters').forEach(elem => {
    searchParams.push(`DepthInMeters ${elem[1]} ${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'scientificname').forEach(elem => {
    searchParams.push(`ScientificName=${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'observationyear').forEach(elem => {
    searchParams.push(`ObservationYear ${elem[1]} ${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'fishcouncilregion').forEach(elem => {
    searchParams.push(`FishCouncilRegion="${findFisheryRegionByCode(elem[2])}"`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'ocean').forEach(elem => {
    searchParams.push(`Ocean="${findOceanNameByCode(elem[2])}"`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'phylum').forEach(elem => {
    searchParams.push(`Phylum=${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'class').forEach(elem => {
    searchParams.push(`Class=${elem[2]}`)
  })

  // Order is a reserved word and renamed in the hosted feature layer
  clauses.filter(elem => elem[0].toLowerCase() === 'order_').forEach(elem => {
    searchParams.push(`Order=${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'family').forEach(elem => {
    searchParams.push(`Family=${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'genus').forEach(elem => {
    searchParams.push(`Genus=${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'synonyms').forEach(elem => {
    // e.g. "%paradox%" -> ".*paradox.*"
    const regex = /["%]/g
    const str = elem[2].replace(regex, '')
    // mark as case-insensitive pattern match
    searchParams.push(`Synonyms=~"(?i).*${str}.*"`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'verbatimscientificname').forEach(elem => {
    const regex = /["%]/g
    const str = elem[2].replace(regex, '')
    searchParams.push(`VerbatimScientificName=~"(?i).*${str}.*"`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'aphiaid').forEach(elem => {
    searchParams.push(`AphiaID=${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'identificationqualifier').forEach(elem => {
    searchParams.push(`IdentificationQualifier=${elem[2]}`)
  })
}

// function formatExtent (mercExtent: Extent) {
//   const geoExtent = webMercatorUtils.webMercatorToGeographic(mercExtent, false) as Extent
//   return `${geoExtent.xmin.toFixed(3)}, ${geoExtent.ymin.toFixed(3)}, ${geoExtent.xmax.toFixed(3)}, ${geoExtent.ymax.toFixed(3)}`
// }

export default function Widget (props: AllWidgetProps<IMConfig>) {
  console.log('rendering erddap-query...')
  const [activeDs, setActiveDs] = useState<FeatureLayerDataSource>()
  const [geographicMapExtent, setGeographicMapExtent] = useState<Extent>()
  const [mapView, setMapView] = useState<MapView>()
  const validBboxRef = useRef(false)

  // get state for this widget.
  const widgetState = useSelector((state: IMState) => {
    return state.widgetsState[props.widgetId]
  })

  // build ERDDAP Url. Note that uses a non-standard pattern for search parameters
  const stdFields = 'ShallowFlag,DatasetID,CatalogNumber,SampleID,ImageURL,Repository,ScientificName,VernacularNameCategory,TaxonRank,IdentificationQualifier,Locality,latitude,longitude,DepthInMeters,DepthMethod,ObservationDate,SurveyID,Station,EventID,SamplingEquipment,LocationAccuracy,RecordType,DataProvider'
  const searchParams: string[] = []

  if (mapView && mapView.extent) {
    const mapExtent = webMercatorUtils.webMercatorToGeographic(mapView.extent) as Extent
    // flag for antimeridian-crossing extent
    validBboxRef.current = (mapExtent.xmin < mapExtent.xmax)
    searchParams.push(`latitude>=${mapExtent.ymin.toFixed(4)}`)
    searchParams.push(`latitude<=${mapExtent.ymax.toFixed(4)}`)
    searchParams.push(`longitude>=${mapExtent.xmin.toFixed(4)}`)
    searchParams.push(`longitude<=${mapExtent.xmax.toFixed(4)}`)
  }
  if (activeDs && activeDs.getCurrentQueryParams().where) {
    // augments provided object w/ key/value pairs from SQL where clause
    convertSqlToErddapParams(activeDs.getCurrentQueryParams().where, searchParams)
  }
  const erddapUrl = `${props.config.erddapBaseUrl}.html?${stdFields}&${searchParams.join('&')}`
  // console.log({ erddapUrl })

  function copyUrlBtn () {
    // TODO add message to toaster
    navigator.clipboard.writeText(generateErddapUrl()).then(() => { console.debug('copied to clipboard') })
  }

  function generateErddapUrl (type = 'html') {
    console.log(type)
    if (type === 'html') {
      return erddapUrl
    } else {
      return erddapUrl?.replace('deep_sea_corals.html', 'deep_sea_corals.csvp')
    }
  }

  // runs once
  function onDataSourceCreated (ds: DataSource) {
    const featureLayerDataSource = isFeatureLayerDataSourceType(ds) ? ds : undefined
    // const dsTitle = featureLayerDataSource.layer.title
    setActiveDs(featureLayerDataSource)
  }

  // runs once
  const activeViewChangeHandler = (jmv: JimuMapView) => {
    setMapView(jmv.view as MapView)
    // TODO why does this not fire when widget is in Window but works normally when directly in layout?
    // 'updating' property fires multiple times during zoom/pan so using 'stationary' property reduces unnecessary re-renders
    reactiveUtils.watch(
      () => jmv.view.stationary,
      (stationary) => {
        if (stationary) {
          // console.log('ERDDAP extent: ', formatExtent(jmv.view.extent))
          const extent = webMercatorUtils.webMercatorToGeographic(jmv.view.extent) as Extent
          setGeographicMapExtent(extent)
        }
      }
    )
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
      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'right' }}>
        <TextArea style={{width:"85%"}} readOnly="true" value={erddapUrl} />
        <textarea value={erddapUrl} style={{ width: '85%', height: '250px', overflowY: 'scroll' }} readOnly={true}/>
        <Tooltip placement="top" title="Copy URL to clipboard">
          <Button aria-label="Button" icon onClick={copyUrlBtn} style={{ marginRight: '10px', marginBottom: '10px' }}>
            <Icon icon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 10H8.723l1.602 1.602-.707.707L6.808 9.5l2.81-2.81.707.708L8.723 9H16zM3 13h4v-1H3zm8-12v1h2v6h-1V3h-1v1H3V3H2v12h10v-4h1v5H1V2h2V1h2.277a1.984 1.984 0 0 1 3.446 0zm-1 1H8v-.318A.682.682 0 0 0 7.318 1h-.636A.682.682 0 0 0 6 1.682V2H4v1h6zM7 6H3v1h4zm-4 4h2V9H3z"/><path fill="none" d="M0 0h16v16H0z"/></svg>'
            />
          </Button>
        </Tooltip>
      </div> */}
      <div style={{ position: 'absolute', right: '15px' }}>
          <Tooltip placement="top" title="Copy URL to clipboard">
          <Button aria-label="Button" icon onClick={copyUrlBtn}>
            <Icon icon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 10H8.723l1.602 1.602-.707.707L6.808 9.5l2.81-2.81.707.708L8.723 9H16zM3 13h4v-1H3zm8-12v1h2v6h-1V3h-1v1H3V3H2v12h10v-4h1v5H1V2h2V1h2.277a1.984 1.984 0 0 1 3.446 0zm-1 1H8v-.318A.682.682 0 0 0 7.318 1h-.636A.682.682 0 0 0 6 1.682V2H4v1h6zM7 6H3v1h4zm-4 4h2V9H3z"/><path fill="none" d="M0 0h16v16H0z"/></svg>'
            />
          </Button>
        </Tooltip>
      </div>
      {validBboxRef.current
        ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Tooltip placement="top" title="open ERDDAP console to customize output">
          <Button type="primary" role="button" href={generateErddapUrl('html')} target="_blank" style={{ marginRight: '20px', textDecoration: 'none', color: 'white' }}>Customize</Button>
        </Tooltip>
        <Tooltip placement="top" title="Download standard CSV file with current filters applied">
          <Button type="primary" role="button" href={generateErddapUrl('csvp')} target="_blank" style={{ textDecoration: 'none', color: 'white' }}>Download</Button>
        </Tooltip>
      </div>
        : <div style={{ width: '80%', alignContent: 'center' }}>
            <p>Warning: missing or invalid spatial extent. Please ensure area of interest does not cross the antimeridian
              (i.e. international date line)</p>
          </div>
      }
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Tooltip placement="top" title="Download the entire database in a CSV format">
          <Button type="primary" role="button" href={props.config.csvFileUrl} target="_blank" style={{ width: '230px', marginTop: '20px', textDecoration: 'none', color: 'white' }}>Download Entire Database</Button>
        </Tooltip>
      </div>

      <div style={{ margin: '20px' }}>
        <span>Note that ERDDAP may take a few minutes to respond to your request</span>
      </div>
    </div>
  )
}
