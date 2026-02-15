import { React, jsx } from 'jimu-core'
import { useState, useEffect, useRef } from 'react'
import {
  getDepthRange,
  getPhylumCounts,
  getScientificNameCounts,
  getEnvironmentalStatistics
} from '../h3-utils'
import PhylumChart from './PhylumChart'

import {
  type EnvironmentalStats,
  type HexbinSummary,
  type ScientificNameCount
} from '../h3-widget-types'
import './hexbin-info.css'

interface HexbinInfoProps {
  h3: string
  pointCount?: number
  whereClause?: string
}

export default function HexbinInfo ({ h3, pointCount, whereClause = '1=1' }: HexbinInfoProps) {
  // console.log(`rendering HexbinInfo with h3: ${h3}, pointCount: ${pointCount}`)
  const [hexbinSummary, setHexbinSummary] = useState<HexbinSummary>()
  const [serverError, setServerError] = useState(false)
  const speciesCountRef = useRef<number>()

  useEffect(() => {
    Promise.all([
      getDepthRange(h3, whereClause),
      getPhylumCounts(h3, whereClause),
      getScientificNameCounts(h3, whereClause),
      getEnvironmentalStatistics(h3, 'Temperature', whereClause),
      getEnvironmentalStatistics(h3, 'Salinity', whereClause),
      getEnvironmentalStatistics(h3, 'Oxygen', whereClause)
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
      // console.log('promises completed: ', depthRange, phylumCounts, scientificNameCounts, temperature, salinity, oxygen)
      speciesCountRef.current = scientificNameCounts.reduce(
        (accumulator: number, currentValue: ScientificNameCount) => accumulator + currentValue.Count, 0
      )
    }).catch((reason) => {
      console.error('Error getting HexbinSummary. ', reason)
      setServerError(reason)
    })
  }, [h3, whereClause])

  // console.log('hexbinSummary: ', hexbinSummary)

  function calcSpeciesPercentage (count: number) {
    if (!speciesCountRef.current || count === 0) return 'N/A'
    const pct = Math.round((count / speciesCountRef.current) * 100)
    return (pct || '<1')
  }

  function getScientificNameCountsText () {
    const textAreaContent: string[] = []
    hexbinSummary?.scientificNameCounts.forEach(it => {
      textAreaContent.push(
        `<${it.VernacularNameCategory}>\n${it.ScientificName}: ${it.Count} (${calcSpeciesPercentage(it.Count)}%)\n\n`
      )
    })
    return textAreaContent.join('')
  }

  function formatSalinity (stats: EnvironmentalStats) {
    if (stats.count) {
      const str = `${stats.min} / ${stats.avg.toFixed(1)} / ${stats.max} / ${stats.count.toLocaleString()}`
      return (
        <li>salinity(PSU): {str}</li>
      )
    } else {
      return (<li>salinity: not available</li>)
    }
  }

  function formatTemperature (stats: EnvironmentalStats) {
    if (stats.count) {
      const str = `${stats.min} / ${stats.avg.toFixed(1)} / ${stats.max} / ${stats.count.toLocaleString()}`
      return (
        <li>temperature(&#8451;): {str}</li>
      )
    } else {
      return (<li>temperature: not available</li>)
    }
  }

  function formatOxygen (stats: EnvironmentalStats) {
    if (stats.count) {
      const str = `${stats.min} / ${stats.avg.toFixed(1)} / ${stats.max} / ${stats.count.toLocaleString()}`
      return (
        <li>oxygen(mL/L): {str}</li>
      )
    } else {
      return (<li>oxygen: not available</li>)
    }
  }

  if (!h3) {
    return (
      <p style={{ fontSize: 'medium', padding: '15px' }}>Please select a hexagonal area to summarize</p>
    )
  }

  if (serverError) {
    return (
      <div>
        <span>Server Error - currently unable to collect statistics, please try again</span>
      </div>
    )
  }

  // should always have h3, pointCount. The hexbinSummary may have error or take a while to load, but we want to show the point count immediately since that's a quick query and important for users to know
  return (
    <>
    <p style={{ paddingLeft: '10px' }}> Hexbin <span className='text-with-emphasis'>{h3}</span> has <span className='text-with-emphasis'>{pointCount.toLocaleString()}</span> {pointCount > 1 ? 'samples' : 'sample'}</p>
    {hexbinSummary
      ? <div style={{ paddingLeft: '10px' }}>
          <p style={{ fontSize: 'medium' }}>depths range from <span className='text-with-emphasis'>{hexbinSummary.minDepth}</span> to <span className='text-with-emphasis'>{hexbinSummary.maxDepth}</span> m</p>
          <div>
            <p style={{ fontSize: 'medium' }}>Phylum Counts:</p>
            <PhylumChart data={hexbinSummary.phylumCounts}/>
          </div>
          <div>
            <p style={{ fontSize: 'medium' }}><span className='text-with-emphasis'>{hexbinSummary.speciesCount.rawCount}</span> unique scientific name(s)</p>
            <textarea readOnly rows={5} wrap="off"
              style={{ width: '90%', marginLeft: '10px', marginRight: '15px', resize: 'vertical', overflow: 'auto' }}
              value={getScientificNameCountsText()}>
            </textarea>
          </div>
          <div style={{ marginTop: '5px' }}>
            <span style={{ fontWeight: 'bold' }}>Environmental Variables</span> (min / avg / max / count):
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              {formatSalinity(hexbinSummary.salinity)}
              {formatTemperature(hexbinSummary.temperature)}
              {formatOxygen(hexbinSummary.oxygen)}
            </ul>
          </div>
        </div>
      : <p style={{ padding: '10px' }}>gathering summary information...</p>}
    </>
  )
}
