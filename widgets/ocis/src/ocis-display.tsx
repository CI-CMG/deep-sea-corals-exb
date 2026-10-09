import { React, jsx } from 'jimu-core'
import { useLoadJSON } from './useLoadJson'
import { formatNumberValue } from '../src/utils'


function buildUrl (h3: string) {
  const ocisFeatureServiceUrl = 'https://services.arcgis.com/bDAhvQYMG4WL8O5o/ArcGIS/rest/services/ocis_sde_ocis_master_view_h4_view/FeatureServer/1/query'
  const searchParams = new URLSearchParams()
  searchParams.set('where', `grid_id='${h3}'`)
  searchParams.set('returnGeometry', 'false')
  searchParams.set('outFields', '*')
  // searchParams.set('outFields', fields.map(f => f.name).join(','))
  searchParams.set('f', 'pjson')
  return (`${ocisFeatureServiceUrl}?${searchParams.toString()}`)
}


export default function DataDisplay ({ h3 }: { h3: string }) {
  const url = buildUrl(h3)
  // console.log('OCIS query URL: ', url)
  const { data, loading, error } = useLoadJSON<any>(url)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  // console.log('data from OCIS query: ', data)
  if (data.features.length === 0) {
    return <div>OCIS data are not available for hexagon {h3}. The  OCIS only covers the United States EEZ.</div>
  }

  return (
    <div style={{ paddingLeft: '10px', overflowY: 'auto' }}>
      <p id='ocis-field-1' style={{ fontWeight: 'bold', fontSize: 'small' }}>{data.fields[1].alias}: {data.features[0].attributes[data.fields[1].name]}</p>
      <calcite-tooltip reference-element='ocis-field-1'>
      <span>{JSON.parse(data.fields[1].description).value}</span>
      </calcite-tooltip>

      <calcite-accordion>
        <calcite-accordion-item heading="Physical Oceanography & Hydrography">
          <calcite-accordion-item heading="Sea Surface Salinity">
          {
              [17,18,19].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Salinity at 30m Depth">
            {
              [20,21,22].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Salinity at 50m Depth">
            {
              [23,24,25].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Salinity at 100m Depth">
            {
              [26,27,28].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Salinity at 200m Depth">
            {
              [29,30,31].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Salinity at 500m Depth">
            {
              [32,33,34].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Bottom Salinity">
            {
              [35,36,37].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Sea Surface Temperature">
            {
              [38,39,40].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Temperature at 30m Depth">
            {
              [41,42,43].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Temperature at 50m Depth">
            {
              [44,45,46].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Temperature at 100m Depth">
            {
              [47,48,49].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Temperature at 200m Depth">
            {
              [50,51,52].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Temperature at 500m Depth">
            {
              [53,54,55].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Bottom Temperature">
            {
              [56,57,58].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
        </calcite-accordion-item>
        <calcite-accordion-item heading="Chemical Oceanography & Acidification">
          <calcite-accordion-item heading="Aragonite Saturation State (10m)">
            {
              [2,3,4].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Dissolved Inorganic Carbon">
            {
              [5,6,7].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Dissolved Oxygen">
            {
              [8,9,10].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Seawater pH">
            {
              [11,12,13].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
        </calcite-accordion-item>
        <calcite-accordion-item heading="Marine Renewable Energy & Metocean Dynamics">
            <calcite-accordion-item heading="Significant Wave Height">
            {
              [90,91,92,93,94,95,96,97,98,99,100,101,102].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
            </calcite-accordion-item>
            <calcite-accordion-item heading="Wave Power Density">
            {
              [103,104,105,106,107,108,109,110,111,112,113,114,115].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
            </calcite-accordion-item>
            <calcite-accordion-item heading="Wave Energy Period">
            {
              [116,117,118,119,120,121,122,123,124,125,126,127,128].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
            </calcite-accordion-item>
            <calcite-accordion-item heading="Tidal Dynamics">
            {
              [129,130].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
            </calcite-accordion-item>
            <calcite-accordion-item heading="Windspeed by Altitude">
            {
              [131,132,133,134,135,136,137,138,139].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
            </calcite-accordion-item>
        </calcite-accordion-item>
        <calcite-accordion-item heading="Bathymetry, Geomorphology & Substrate">
            <calcite-accordion-item heading="Bathymetric Depth">
            {
              [67,68,69].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
            </calcite-accordion-item>
            <calcite-accordion-item heading="Distance from Shore">
            {
              [71,72,73].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
            </calcite-accordion-item>
            <calcite-accordion-item heading="Seafloor Slope">
            {
              [89,90,91].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
            </calcite-accordion-item>
            <calcite-accordion-item heading="Seafloor Lithology">
            {
              [78].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
            </calcite-accordion-item>
        </calcite-accordion-item>
        <calcite-accordion-item heading="Biodiversity, Benthic Ecology & Blue Carbon">
          <calcite-accordion-item heading="Blue Carbon Habitat">
            {
              [70].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Deep Sea Corals">
            {
              [74,75].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="OBIS Species Diversity & Records">
            {
              [83,84,85,86].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Primary Productivity">
            {
              [14,15,16].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
        </calcite-accordion-item>
        <calcite-accordion-item heading="Maritime Human Activity & Ocean Infrastructure">
          <calcite-accordion-item heading="AIS Vessel Density">
            {
              [59,60,61,62,63,64].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Global Fishing Watch Activity">
            {
              [65,66].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Offshore Infrastructure">
            {
              [82,92].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
        </calcite-accordion-item>
        <calcite-accordion-item heading="Ocean Governance, Marine Protection & Grid Topography">
          <calcite-accordion-item heading="Marine Protected & Managed Areas">
            {
              [79,87,88].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Hydrographic Surveys">
            {
              [76,77].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
          <calcite-accordion-item heading="Ocean Exploration Tracklines">
            {
              [80,81].map(i => {
                return (
                  <div key={i}>
                    <p id={`ocis-field-${i}`} style={{ fontSize: 'x-small' }}>{data.fields[i].alias}: {formatNumberValue(data.features[0].attributes[data.fields[i].name])}</p>
                    <calcite-tooltip reference-element={`ocis-field-${i}`}>
                      <span>{JSON.parse(data.fields[i].description).value}</span>
                    </calcite-tooltip>
                  </div>
                )
              })
            }
          </calcite-accordion-item>
        </calcite-accordion-item>
      </calcite-accordion>
    </div>
  )
}
