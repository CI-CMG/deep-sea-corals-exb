/** @jsx jsx */
import {
  type AllWidgetProps,
  // type ArcGISQueriableDataSource,
  type DataSource,
  DataSourceComponent,
  type IMState,
  ReactRedux,
  type FeatureLayerDataSource
} from 'jimu-core'
// import { React, type IMDataSourceInfo, type DataSource, DataSourceStatus, type FeatureLayerQueryParams, type AllWidgetProps, DataSourceComponent } from 'jimu-core'

// import { useState, useEffect, useRef } from 'react'
import type { IMConfig } from '../config'
// import type FeatureLayerView from 'esri/views/layers/FeatureLayerView'
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"

import "calcite-components"
import './widget.css'
// import Feature from '@arcgis/core/widgets/Feature'
import { useState } from 'react'
const { useSelector } = ReactRedux

// user-defined type guard using type predicate
function isFeatureLayerDataSourceType (obj: unknown): obj is FeatureLayerDataSource {
  return (obj as FeatureLayerDataSource).type === 'FEATURE_LAYER'
}


export default function Widget (props: AllWidgetProps<IMConfig>) {
  console.log('filter-status: rendering...')
  const [activeDs, setActiveDs] = useState<FeatureLayerDataSource>()

  // get state for this widget
  const widgetState = useSelector((state: IMState) => {
    return state.widgetsState[props.widgetId]
  })

  // console.log({ widgetState })
  const messageDataSourceId = widgetState?.filterChangeMessage?.dataSourceIds[0]
  if (activeDs && activeDs.id === messageDataSourceId) {
    const incomingMsg = widgetState?.filterChangeMessage
    console.log({incomingMsg})
    console.log('QueryParams: ', activeDs.getCurrentQueryParams())
    console.log('DataSourceFilterChangeMessage received for this datasource. QueryParams: ', activeDs.getCurrentQueryParams().where)
  }

  const queryParams = activeDs ? activeDs.getCurrentQueryParams().where : 'Datasource not yet available'
  // const description = activeDs && activeDs.getCurrentQueryParams().where !== '1=1' ? 'Datasource filter is active' : 'All data are displayed'
  const heading = activeDs && activeDs.getCurrentQueryParams().where !== '1=1' ? 'Data Filtered' : 'Data Not Filtered'

  // runs once
  function onDataSourceCreated (ds: DataSource) {
    console.log('DataSource has been created...', ds)
    const featureLayerDataSource = isFeatureLayerDataSourceType(ds) ? ds : undefined
    setActiveDs(featureLayerDataSource)
  }

  return (
    <div style={{ paddingLeft: '10px' }}>
      <DataSourceComponent
        useDataSource={props.useDataSources?.[0]}
        widgetId={props.id}
        onDataSourceCreated={onDataSourceCreated}
      />
      {/* <p>Demo Widget</p>
      <p>{activeDs ? activeDs.layer.title : ''}</p>
      <p>{activeDs ? activeDs.getCurrentQueryParams().where : ''}</p>
      <p>{widgetState?.extent ? formatExtent(widgetState.extent) : ''}</p> */}
      {/* <calcite-popover heading={'SQL query expression'} label="SQL query expression" referenceElement="popover-button" closable>
        <textarea readOnly cols={30}>{queryParams}</textarea>
      </calcite-popover>
      <calcite-button id="popover-button">{heading}</calcite-button> */}
      <calcite-accordion icon-position="end" icon-type="chevron" selection-mode="single" style={{width: '200px'}}>
        <calcite-accordion-item heading={heading} icon-start="filter"
            heading-level="6">
            <calcite-notice open>
                <div slot="message" className='scroll-vertical'>{queryParams}</div>
            </calcite-notice>
        </calcite-accordion-item>
      </calcite-accordion>
    </div>
  )
}
