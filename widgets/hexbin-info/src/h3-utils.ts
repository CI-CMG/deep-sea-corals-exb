import type GraphicsLayer from 'esri/layers/GraphicsLayer'
import Graphic from 'esri/Graphic'
import type SimpleFillSymbol from 'esri/symbols/SimpleFillSymbol'
import Color from 'esri/Color'
import { type FeatureLayerDataSource } from 'jimu-arcgis'

// TODO derive from settings.tsx
const featureServiceUrl = 'https://services2.arcgis.com/C8EMgrsFcRFL6LrL/ArcGIS/rest/services/DSCRTP_NatDB_FeatureLayer/FeatureServer/0/query'
const stdColor = new Color('whitesmoke')
const highlightColor = new Color('yellow')
const hexbinBoundaryWidth = 0

// cache the h3 counts when there are no filters applied
let noFiltersH3Counts = null

let coralsDataSource: FeatureLayerDataSource

export function setDataSource(dataSource: FeatureLayerDataSource) {
  coralsDataSource = dataSource
}

function deselectPreviousHexbin (graphicsLayer: GraphicsLayer) {
  // finds only the *first* highlighted graphic but there should never be > 1
  const highlightedGraphic = getHighlightedGraphic(graphicsLayer)
  if (highlightedGraphic) {
    toggleOutlineColor(highlightedGraphic)
  }
}

function getHighlightedGraphic (graphicsLayer: GraphicsLayer) {
  if (!graphicsLayer) {
    return
  }
  // finds only the *first* highlighted graphic but there should only be 0 or 1
  return graphicsLayer.graphics.find(graphic => {
    return stdColor.toHex() !== (graphic.symbol as SimpleFillSymbol).outline.color.toHex()
  })
}


function toggleOutlineColor (graphic: Graphic) {
  if (!graphic) { return }
  const symbolCopy = (graphic.symbol as SimpleFillSymbol).clone()

  if (stdColor.toHex() === graphic.symbol.outline.color.toHex()) {
    symbolCopy.outline.color = highlightColor
    symbolCopy.outline.width = 1.5
  } else {
    symbolCopy.outline.color = stdColor
    symbolCopy.outline.width = hexbinBoundaryWidth
  }
  graphic.symbol = symbolCopy
}


async function getDepthRange (h3, whereClause = '1=1') {
  const startTime = new Date()
  const searchParams = new URLSearchParams()
  searchParams.set('where', `${whereClause} and h3_2='${h3}'`)
  searchParams.set('outFields', 'DepthInMeters')
  searchParams.set('outStatistics', '[{"statisticType":"Min","onStatisticField":"DepthInMeters","outStatisticFieldName":"MinDepth"},{"statisticType":"Max","onStatisticField":"DepthInMeters","outStatisticFieldName":"MaxDepth"}]')
  searchParams.set('returnGeometry', 'false')
  searchParams.set('f', 'json')

  const response = await fetch(featureServiceUrl, {
    method: 'POST',
    body: searchParams
  })
  if (!response.ok) {
    console.warn('Error fetching data from: ' + featureServiceUrl)
    return
  }
  const data = await response.json()

  const endTime = new Date()
  console.debug(`retrieved depthRange for h3 ${h3} in ${(endTime.getTime() - startTime.getTime()) / 1000} seconds`)
  return data.features[0].attributes
}

async function getSpeciesCount (h3, whereClause = '1=1') {
  const startTime = new Date()
  const searchParams = new URLSearchParams()
  searchParams.set('where', `${whereClause} and h3_2='${h3}'`)
  searchParams.set('outFields', 'ScientificName')
  searchParams.set('returnCountOnly', 'true')
  searchParams.set('returnDistinctValues', 'true')
  searchParams.set('returnGeometry', 'false')
  searchParams.set('f', 'json')

  const response = await fetch(featureServiceUrl, {
    method: 'POST',
    body: searchParams
  })
  if (!response.ok) {
    console.warn('Error fetching data from: ' + featureServiceUrl)
    return
  }
  const data = await response.json()
  if (!data?.count) { throw new Error('species count payload incorrect') }

  const endTime = new Date()
  console.debug(`retrieved species count for h3 ${h3} in ${(endTime.getTime() - startTime.getTime()) / 1000} seconds`)
  // calculate normalized value (0-100). counts range from 1 to 279 (w/o criteria applied)
  const min = 1
  const max = 279
  const normalizedValue = Math.round((data.count - min) / (max - min) * 100)
  return { rawCount: data.count, normalizedCount: normalizedValue }
}

async function getPhylumCounts (h3, whereClause = '1=1') {
  const startTime = new Date()
  const searchParams = new URLSearchParams()
  searchParams.set('where', `${whereClause} and h3_2='${h3}'`)
  // searchParams.set('outFields', 'Phylum')
  searchParams.set('groupByFieldsForStatistics', 'Phylum')
  searchParams.set('outStatistics', '[{"statisticType":"Count","onStatisticField":"Phylum","outStatisticFieldName":"Count"}]')
  searchParams.set('returnGeometry', 'false')
  searchParams.set('f', 'json')

  const response = await fetch(featureServiceUrl, {
    method: 'POST',
    body: searchParams
  })
  if (!response.ok) {
    throw new Error('Error fetching data from: ' + featureServiceUrl)
  }
  const data = await response.json()

  const endTime = new Date()
  console.debug(`retrieved Phylum counts for h3 ${h3} in ${(endTime.getTime() - startTime.getTime()) / 1000} seconds`)
  if (!data?.features) { throw new Error('phylum counts payload incorrect') }
  return data.features.map(it => it.attributes)
}

async function getScientificNameCounts (h3, whereClause = '1=1') {
  const startTime = new Date()
  const searchParams = new URLSearchParams()
  searchParams.set('where', `${whereClause} and h3_2='${h3}'`)
  searchParams.set('groupByFieldsForStatistics', 'ScientificName')
  searchParams.set('outStatistics', '[{"statisticType":"Count","onStatisticField":"ScientificName","outStatisticFieldName":"Count"}]')
  searchParams.set('orderByFields', 'Count DESC')
  searchParams.set('returnGeometry', 'false')
  searchParams.set('f', 'json')

  const response = await fetch(featureServiceUrl, {
    method: 'POST',
    body: searchParams
  })
  if (!response.ok) {
    throw new Error('Error fetching data from: ' + featureServiceUrl)
  }
  const data = await response.json()
  const endTime = new Date()
  console.debug(`retrieved ScientificName counts for h3 ${h3} in ${(endTime.getTime() - startTime.getTime()) / 1000} seconds`)
  if (!data?.features) { throw new Error('ScientificName counts payload incorrect') }
  return data.features.map(it => it.attributes)
}

interface EnvironmentalVariables {
  oxygen?: number
  min_oxygen?: number
  max_oxygen?: number
  salinity?: number
  min_salinity?: number
  max_salinity?: number
  temperature?: number
  min_temperature?: number
  max_temperature?: number
}

// does not consider filter criteria
// uses hardcoded URL different from points layer
async function getEnvironmentalVariables(h3) {
  const hexbinFeatureServiceUrl = 'https://services2.arcgis.com/C8EMgrsFcRFL6LrL/ArcGIS/rest/services/Deep_Sea_Corals_and_Sponges_summarized_in_level_4_hexbins/FeatureServer/0/query'
  const startTime = new Date()
  const searchParams = new URLSearchParams()
  searchParams.set('where', `h3='${h3}'`)
  searchParams.set('outFields', '*')
  searchParams.set('returnGeometry', 'false')
  searchParams.set('f', 'json')
  const response = await fetch(hexbinFeatureServiceUrl, {
    method: 'POST',
    body: searchParams
  })
  if (!response.ok) {
    throw new Error('Error fetching data from: ' + hexbinFeatureServiceUrl)
  }
  const data = await response.json()
  const endTime = new Date()
  const environmentalVariables = {} as EnvironmentalVariables
  // should always be exactly 1 feature returned
  const attributes = data.features[0].attributes
  if (attributes.oxygen) {
    environmentalVariables.oxygen = attributes.oxygen
    environmentalVariables.min_oxygen = attributes.min_oxygen
    environmentalVariables.max_oxygen = attributes.max_oxygen
  }
  if (attributes.salinity) {
    environmentalVariables.salinity = attributes.salinity
    environmentalVariables.min_salinity = attributes.min_salinity
    environmentalVariables.max_salinity = attributes.max_salinity
  }
  if (attributes.temperature) {
    environmentalVariables.temperature = attributes.temperature
    environmentalVariables.min_temperature = attributes.min_temperature
    environmentalVariables.max_temperature = attributes.max_temperature
  }
  // console.debug(`retrieved environmental variables for h3 ${h3} in ${(endTime.getTime() - startTime.getTime()) / 1000} seconds`)
  return (environmentalVariables)
}

function getSimpleFillSymbol (fillColor = [227, 139, 79, 0.8]) {
  // default to Orange, opacity 80%
  // var randomColor = Math.floor(Math.random()*16777215).toString(16);
  return {
    type: 'simple-fill',
    color: fillColor,
    outline: {
      color: stdColor,
      width: hexbinBoundaryWidth
    }
  }
}


export {
  getDepthRange,
  getPhylumCounts,
  getScientificNameCounts,
  toggleOutlineColor,
  stdColor,
  highlightColor,
  getHighlightedGraphic,
  deselectPreviousHexbin,
  getSpeciesCount,
  getEnvironmentalVariables
}
