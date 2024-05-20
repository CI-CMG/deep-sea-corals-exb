import { EnvironmentalVariables } from "./h3-layer-types"
import { useState, useEffect, useRef, useMemo } from 'react'

export function useEnvironmentalData(h3: string) {
  if ( !h3 ) { return }

  const serviceUrl = 'https://services2.arcgis.com/C8EMgrsFcRFL6LrL/ArcGIS/rest/services/Deep_Sea_Corals_and_Sponges_summarized_in_level_4_hexbins/FeatureServer/0/query'

  return fetchData(h3)

  function fetchData(h3:string) {
    const startTime = new Date()
    const searchParams = new URLSearchParams()
    searchParams.set('where', `h3='${h3}'`)
    searchParams.set('outFields', '*')
    searchParams.set('returnGeometry', 'false')
    searchParams.set('f', 'json')
    
    fetch(serviceUrl, { method: 'POST', body: searchParams})
      .then(response => response.json())
      .then(json => {
          const endTime = new Date()
          console.debug(`retrieved environmental variables for h3 ${h3} in ${(endTime.getTime() - startTime.getTime()) / 1000} seconds`)

          const environmentalVariables = {} as EnvironmentalVariables
          // should always be exactly 1 feature returned
          const attributes = json.features[0].attributes
          
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
          console.log('setting data: ', environmentalVariables)
          return environmentalVariables
      })
  }       
}