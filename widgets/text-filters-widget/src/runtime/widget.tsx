/** @jsx jsx */
import {
  type AllWidgetProps,
  jsx, DataSourceComponent,
  type QueriableDataSource, type DataSource, MessageManager, DataSourceFilterChangeMessage,
  type ArcGISQueryParams
} from 'jimu-core'
import React, { useState } from 'react'
// import FilterStringInput from './filter-string-input'
// import {Button, Dropdown, TextInput} from 'jimu-ui'
import type { IMConfig } from '../config'

export default function Widget (props: AllWidgetProps<IMConfig>) {
  const [dataSource, setDataSource] = useState<QueriableDataSource | null>(null)

  // runs once
  function onDataSourceCreated (ds: DataSource) {
    if (ds) {
      const dataSource = ds as QueriableDataSource
      setDataSource(dataSource)
    } else {
      console.error('unable to create DataSource')
    }
  }


  // handle changes to filter string. update map and publish new values
  function applyFilter (filterString: string) {
    if (!dataSource) {
      console.warn('DataSource is not yet set. QueryParams cannot updated')
      return
    }

    const q:ArcGISQueryParams = filterString ? { where: filterString } : null
    console.log('applyFilter: updating query params with', q)
    dataSource.updateQueryParams(q, props.id)
    MessageManager.getInstance().publishMessage(new DataSourceFilterChangeMessage(props.id, [dataSource.id]))
  }

  return (
    <div className="jimu-widget" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <DataSourceComponent
        useDataSource={props.useDataSources?.[0]}
        widgetId={props.id}
        onDataSourceCreated={onDataSourceCreated}
      />
      <div>
        <AphiaIdFilter applyFilter={applyFilter}></AphiaIdFilter>
        <DatasetIdFilter applyFilter={applyFilter}></DatasetIdFilter>
        <SynonymFilter applyFilter={applyFilter}></SynonymFilter>
        <VerbatimNameFilter applyFilter={applyFilter}></VerbatimNameFilter>
      </div>
    </div>
  )
}


function AphiaIdFilter (props: { applyFilter: (value: string) => void }) {
  const { applyFilter } = props

  function onChangeHandler (evt:CustomEvent) {
    const value = (evt.target as HTMLCalciteInputTextElement).value
    if (value) {
      applyFilter(`AphiaID = '${value}'`)
    } else {
      applyFilter(null)
    }
  }

  return(
    <div style={{marginTop: '15px'}}>
      <calcite-input-text
        id="aphia-id-tooltip" clearable
        style={{width: '80%'}} label-text="Aphia ID"
        oncalciteInputTextChange={onChangeHandler}>
      </calcite-input-text>
      <calcite-tooltip reference-element="aphia-id-tooltip">
            <span>filter data by Aphia ID</span>
        </calcite-tooltip>
    </div>
  )
}

function DatasetIdFilter (props: { applyFilter: (value: string) => void }) {
  const { applyFilter } = props

  function onChangeHandler (evt:CustomEvent) {
    const value = (evt.target as HTMLCalciteInputTextElement).value
    if (value) {
      applyFilter(`DatasetID = '${value}'`)
    } else {
      applyFilter(null)
    }
  }

  return(
    <div style={{marginTop: '15px'}}>
      <calcite-input-text
        id="dataset-id-tooltip" clearable
        style={{width: '80%'}} label-text="Dataset ID"
        oncalciteInputTextChange={onChangeHandler}>
      </calcite-input-text>
      <calcite-tooltip reference-element="dataset-id-tooltip">
            <span>filter data by Dataset ID</span>
        </calcite-tooltip>
    </div>
  )
}

function SynonymFilter (props: { applyFilter: (value: string) => void }) {
  const { applyFilter } = props

  function onChangeHandler (evt:CustomEvent) {
    const value = (evt.target as HTMLCalciteInputTextElement).value
    if (value) {
      applyFilter(`Synonyms like '%${value}%'`)
    } else {
      applyFilter(null)
    }
  }

  return(
    <div style={{marginTop: '15px'}}>
      <calcite-input-text
        id="synonym-tooltip" clearable
        style={{width: '80%'}} label-text="Synonyms"
        oncalciteInputTextChange={onChangeHandler}>
      </calcite-input-text>
      <calcite-tooltip reference-element="synonym-tooltip">
            <span>filter data by Synonyms</span>
        </calcite-tooltip>
    </div>
  )
}


function VerbatimNameFilter (props: { applyFilter: (value: string) => void }) {
  const { applyFilter } = props

  function onChangeHandler (evt:CustomEvent) {
    const value = (evt.target as HTMLCalciteInputTextElement).value
    if (value) {
      applyFilter(`VerbatimScientificName like '%${value}%'`)
    } else {
      applyFilter(null)
    }
  }

  return(
    <div style={{marginTop: '15px'}}>
      <calcite-input-text
        id="verbatim-name-tooltip" clearable
        style={{width: '80%'}} label-text="Verbatim Scientific Name"
        oncalciteInputTextChange={onChangeHandler}>
      </calcite-input-text>
      <calcite-tooltip reference-element="verbatim-name-tooltip">
          <span>filter data by Verbatim Scientific Name</span>
        </calcite-tooltip>
    </div>
  )
}
