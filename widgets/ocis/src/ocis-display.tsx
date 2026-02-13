import { React, jsx } from 'jimu-core'
import { useLoadJSON } from './useLoadJson'

const fields = [
  { index: 0, display: 'Hex Grid ID', name: 'grid_id' },
  { index: 1, display: 'Area of Blue Carbon Habitat (sq. km)', name: 'b_carb_km2' },
  { index: 2, display: 'Maxp (OBIS)', name: 'obis_maxp' },
  { index: 3, display: 'Count of OBIS Records', name: 'obis_n' },
  { index: 4, display: 'Shannon Biodiversity Index (OBIS)', name: 'obis_shannon' },
  { index: 5, display: 'Species Richness (OBIS)', name: 'obis_sp' },
  { index: 6, display: 'Count of Marine Protected Areas', name: 'mpa_count' },
  { index: 7, display: 'Count of Marine Managed Areas', name: 'prosea_count' },
  { index: 8, display: 'Weighted Level of Fishing Protection', name: 'prosea_lvl' },
  { index: 9, display: 'Minimum Depth (meters)', name: 'bathy_min' },
  { index: 10, display: 'Maximum Depth (meters)', name: 'bathy_max' },
  { index: 11, display: 'Mean of Depth (meters)', name: 'bathy_mean' },
  { index: 12, display: 'Minimum Slope', name: 'slope_min' },
  { index: 13, display: 'Maximum Slope', name: 'slope_max' },
  { index: 14, display: 'Mean Slope', name: 'slope_mean' },
  { index: 15, display: 'Predominant Seafloor Lithology Type', name: 'lithology' },
  { index: 16, display: 'Count of Hydrographic Surveys', name: 'survey_count' },
  { index: 17, display: 'Total Area of Hydrographic Surveys (sq. km)', name: 'survey_area_km' },
  { index: 18, display: 'Count of Expedition Tracklines', name: 'oer_track_count' },
  { index: 19, display: 'Total Length of Expedition Tracklines (sq. km)', name: 'oer_track_km' },
  { index: 20, display: 'Global Vessel Density', name: 'ship_global' },
  { index: 21, display: 'Commercial Vessel Density', name: 'ship_comm' },
  { index: 22, display: 'Fishing Vessel Density', name: 'ship_fish' },
  { index: 23, display: 'Leisure Vessel Density', name: 'ship_leisure' },
  { index: 24, display: 'Oil and Gas Vessel Density', name: 'ship_oil_gas' },
  { index: 25, display: 'Passenger Vessel Density', name: 'ship_pass' },
  { index: 26, display: 'Global Fishing Watch - Fishing Hours (2020)', name: 'gfw_fishhours' },
  { index: 27, display: 'Global Fishing Watch - Hours (2020)', name: 'gfw_hours' },
  { index: 28, display: 'Count of Oil and Gas Platforms', name: 'platform_count' },
  { index: 29, display: 'Count of Submarine Cables', name: 'cable_count' }
]

function buildUrl (h3: string) {
  const ocisFeatureServiceUrl = 'https://services.arcgis.com/bDAhvQYMG4WL8O5o/ArcGIS/rest/services/ocis_sde_ocis_master_view_h4_view/FeatureServer/1/query'
  const searchParams = new URLSearchParams()
  searchParams.set('where', `grid_id='${h3}'`)
  searchParams.set('returnGeometry', 'false')
  searchParams.set('outFields', fields.map(f => f.name).join(','))
  searchParams.set('f', 'pjson')
  return (`${ocisFeatureServiceUrl}?${searchParams.toString()}`)
}

function formatFloatValue (str: string): string {
  const num = parseFloat(str)
  if (Number.isNaN(num)) {
    return ''
  }
  // round *up* to 2 decimal places for display purposes. Always use positive values
  return (Math.abs(Math.ceil(num * 100) / 100)).toLocaleString()
}

function formatIntValue (str: string): string {
  const num = parseInt(str)
  // if string cannot be parsed to a number, return empty string to avoid displaying "NaN"
  if (Number.isNaN(num)) {
    return ''
  }
  return num.toLocaleString()
}

export default function DataDisplay ({ h3 }: { h3: string }) {
  const url = buildUrl(h3)
  console.log('OCIS query URL: ', url)
  const { data, loading, error } = useLoadJSON<any>(url)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  console.log('data from OCIS query: ', data)
  if (data.features.length === 0) {
    return <div>No data available for grid ID {h3}.</div>
  }

  return (
    <div style={{paddingLeft: '10px', overflowY: 'auto' }}>
      <table>
        <tbody>
          <tr><td>{fields[0].display}</td><td>{data.features[0].attributes[fields[0].name]}</td></tr>
          <tr><td colSpan={2} style={{ fontWeight: 'bold' }}>Biodiversity</td></tr>
          <tr><td>{fields[1].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[1].name])}</td></tr>
          <tr><td>{fields[2].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[2].name])}</td></tr>
          <tr><td>{fields[3].display}</td><td>{formatIntValue(data.features[0].attributes[fields[3].name])}</td></tr>
          <tr><td>{fields[4].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[4].name])}</td></tr>
          <tr><td>{fields[5].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[5].name])}</td></tr>
          <tr><td colSpan={2} style={{ fontWeight: 'bold' }}>Resource Management</td></tr>
          <tr><td>{fields[6].display}</td><td>{formatIntValue(data.features[0].attributes[fields[6].name])}</td></tr>
          <tr><td>{fields[7].display}</td><td>{formatIntValue(data.features[0].attributes[fields[7].name])}</td></tr>
          <tr><td>{fields[8].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[8].name])}</td></tr>
          <tr><td colSpan={2} style={{ fontWeight: 'bold' }}>Bathymetry & Seafloor</td></tr>
          <tr><td>{fields[9].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[9].name])}</td></tr>
          <tr><td>{fields[10].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[10].name])}</td></tr>
          <tr><td>{fields[11].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[11].name])}</td></tr>
          <tr><td>{fields[12].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[12].name])}</td></tr>
          <tr><td>{fields[13].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[13].name])}</td></tr>
          <tr><td>{fields[14].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[14].name])}</td></tr>
          <tr><td>{fields[15].display}</td><td>{formatIntValue(data.features[0].attributes[fields[15].name])}</td></tr>
          <tr><td colSpan={2} style={{ fontWeight: 'bold' }}>Surveys & Exploration</td></tr>
          <tr><td>{fields[16].display}</td><td>{formatIntValue(data.features[0].attributes[fields[16].name])}</td></tr>
          <tr><td>{fields[17].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[17].name])}</td></tr>
          <tr><td>{fields[18].display}</td><td>{formatIntValue(data.features[0].attributes[fields[18].name])}</td></tr>
          <tr><td>{fields[19].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[19].name])}</td></tr>
          <tr><td colSpan={2} style={{ fontWeight: 'bold' }}>Human Activity (Shipping, Fishing & Infrastructure)</td></tr>
          <tr><td>{fields[20].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[20].name])}</td></tr>
          <tr><td>{fields[21].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[21].name])}</td></tr>
          <tr><td>{fields[22].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[22].name])}</td></tr>
          <tr><td>{fields[23].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[23].name])}</td></tr>
          <tr><td>{fields[24].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[24].name])}</td></tr>
          <tr><td>{fields[25].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[25].name])}</td></tr>
          <tr><td>{fields[26].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[26].name])}</td></tr>
          <tr><td>{fields[27].display}</td><td>{formatFloatValue(data.features[0].attributes[fields[27].name])}</td></tr>
          <tr><td>{fields[28].display}</td><td>{formatIntValue(data.features[0].attributes[fields[28].name])}</td></tr>
          <tr><td>{fields[29].display}</td><td>{formatIntValue(data.features[0].attributes[fields[29].name])}</td></tr>
      </tbody>
      </table>
    </div>
  )
}
