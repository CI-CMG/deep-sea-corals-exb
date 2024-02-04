

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