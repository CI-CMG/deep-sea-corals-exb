

interface DepthRangeResponse {
  MinDepth: number
  MaxDepth: number
}

export const fetchDepthRange = async (url:string, h3:string, whereClause = '1=1'): Promise<DepthRangeResponse> => {
  const searchParams = new URLSearchParams()
  searchParams.set('where', `${whereClause} and h3_2='${h3}'`)
  searchParams.set('outFields', 'DepthInMeters')
  searchParams.set('outStatistics', '[{"statisticType":"Min","onStatisticField":"DepthInMeters","outStatisticFieldName":"MinDepth"},{"statisticType":"Max","onStatisticField":"DepthInMeters","outStatisticFieldName":"MaxDepth"}]')
  searchParams.set('returnGeometry', 'false')
  searchParams.set('f', 'json')

  const response = await fetch(url, { method: 'POST', body: searchParams })
  if (!response.ok) { throw new Error('Error fetching depth range data from: ' + url) }
  const payload = await response.json()
  return payload.features[0].attributes
}

/* no longer needed

// TODO type return Promise
export const fetchSpeciesCount = async (url:string, h3:string, whereClause = '1=1'): Promise<any> => {
  const searchParams = new URLSearchParams()
  searchParams.set('where', `${whereClause} and h3_2='${h3}'`)
  searchParams.set('outFields', 'ScientificName')
  searchParams.set('returnCountOnly', 'true')
  searchParams.set('returnDistinctValues', 'true')
  searchParams.set('returnGeometry', 'false')
  searchParams.set('f', 'json')

  const response = await fetch(url, { method: 'POST', body: searchParams })

  if (!response.ok) { throw new Error('Error fetching species data from: ' + url) }
  const payload = await response.json()
  if (!payload?.count) { throw new Error('species count payload incorrect') }

  // calculate normalized value (0-100). counts range from 1 to 279 (w/o criteria applied)
  const min = 1
  const max = 279
  const normalizedValue = Math.round((payload.count - min) / (max - min) * 100)
  return { rawCount: payload.count, normalizedCount: normalizedValue }
}
*/

export const fetchScientificNameCount = async (url:string, h3:string, whereClause = '1=1'): Promise<any> => {
  const searchParams = new URLSearchParams()
  searchParams.set('where', `${whereClause} and h3_2='${h3}'`)
  searchParams.set('groupByFieldsForStatistics', 'ScientificName')
  searchParams.set('outStatistics', '[{"statisticType":"Count","onStatisticField":"ScientificName","outStatisticFieldName":"Count"}]')
  searchParams.set('orderByFields', 'Count DESC')
  searchParams.set('returnGeometry', 'false')
  searchParams.set('f', 'json')

  const response = await fetch(url, { method: 'POST', body: searchParams })
  if (!response.ok) { throw new Error('Error fetching data from: ' + url) }
  const payload = await response.json()
  if (!payload?.features) { throw new Error('ScientificName counts payload incorrect') }
  return payload.features.map(it => it.attributes)
}



// TODO type return Promise
export const fetchPhylumCount = async (url:string, h3:string, whereClause = '1=1'): Promise<any> => {
  const searchParams = new URLSearchParams()
  searchParams.set('where', `${whereClause} and h3_2='${h3}'`)
  searchParams.set('groupByFieldsForStatistics', 'Phylum')
  searchParams.set('outStatistics', '[{"statisticType":"Count","onStatisticField":"Phylum","outStatisticFieldName":"Count"}]')
  searchParams.set('returnGeometry', 'false')
  searchParams.set('f', 'json')

  const response = await fetch(url, { method: 'POST', body: searchParams })
  if (!response.ok) { throw new Error('Error fetching data from: ' + url) }
  const payload = await response.json()
  if (!payload?.features) { throw new Error('phylum counts payload incorrect') }
  return payload.features.map(it => it.attributes)
}


/**
 * retrieve environmental variables (oxygen, salinity, temperature) for specified H3 hexbin
 * uses a different feature service than corals and does not change with filter parameters
 */
export const fetchEnvironmentalData = async (h3:string): Promise<any> => {
  // WARNING: hardcoded feature service URL
  const url = 'https://services2.arcgis.com/C8EMgrsFcRFL6LrL/ArcGIS/rest/services/Deep_Sea_Corals_and_Sponges_summarized_in_level_4_hexbins/FeatureServer/0/query'
  const searchParams = new URLSearchParams()
  searchParams.set('where', `h3='${h3}'`)
  searchParams.set('outFields', '*')
  searchParams.set('returnGeometry', 'false')
  searchParams.set('f', 'json')
  const response = await fetch(url, { method: 'POST', body: searchParams })
  if (!response.ok) { throw new Error('Error fetching data from: ' + url) }
  const payload = await response.json()
  // should always be exactly 1 feature returned
  return payload.features[0].attributes
} 