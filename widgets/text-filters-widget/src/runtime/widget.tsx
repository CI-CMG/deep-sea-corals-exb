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
  console.log('rendering text-filters-widget with props', props)
  const [dataSource, setDataSource] = useState<QueriableDataSource | null>(null)
  const [aphiaIdFilterString, setAphiaIdFilterString] = useState<string | null>(null)
  const [datasetIdFilterString, setDatasetIdFilterString] = useState<string | null>(null)
  const [synonymFilterString, setSynonymFilterString] = useState<string | null>(null)
  const [verbatimNameFilterString, setVerbatimNameFilterString] = useState<string | null>(null)

  // runs once
  function onDataSourceCreated (ds: DataSource) {
    if (ds) {
      const dataSource = ds as QueriableDataSource
      setDataSource(dataSource)
    } else {
      console.error('unable to create DataSource')
    }
  }


  if (dataSource) {
    const filterString = [aphiaIdFilterString, datasetIdFilterString, synonymFilterString, verbatimNameFilterString].filter(v => !!v).join(' AND ')
    const q:ArcGISQueryParams = { where: filterString || null }
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
      {dataSource ?
      <div>
        <AphiaIdFilter setFilterString={setAphiaIdFilterString}></AphiaIdFilter>
        <DatasetIdFilter setFilterString={setDatasetIdFilterString}></DatasetIdFilter>
        <SynonymFilter setFilterString={setSynonymFilterString}></SynonymFilter>
        <VerbatimNameFilter setFilterString={setVerbatimNameFilterString}></VerbatimNameFilter>
      </div>
      : <div>DataSource not yet created</div>}
    </div>
  )
}


function AphiaIdFilter (props: {setFilterString: (filterString: string | null) => void}) {
  const { setFilterString } = props

  function onChangeHandler (evt:CustomEvent) {
    const value = (evt.target as HTMLCalciteInputTextElement).value
    if (value) {
      setFilterString(`AphiaID = '${value}'`)
    } else {
      setFilterString(null)
    }
  }

  return(
    <div style={{marginTop: '15px'}}>
      <calcite-input-text scale='s'
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


function DatasetIdFilter (props: {setFilterString: (filterString: string | null) => void}) {
  const { setFilterString } = props

  function onChangeHandler (evt:CustomEvent) {
    const value = (evt.target as HTMLCalciteInputTextElement).value
    if (value) {
      setFilterString(`DatasetID = '${value}'`)
    } else {
      setFilterString(null)
    }
  }

  return(
    <div style={{marginTop: '15px'}}>
      <calcite-input-text scale='s'
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

function SynonymFilter (props: {setFilterString: (filterString: string | null) => void}) {
  const { setFilterString } = props

  function onChangeHandler (evt:CustomEvent) {
    const value = (evt.target as HTMLCalciteInputTextElement).value
    if (value) {
      setFilterString(`Synonyms like '%${value}%'`)
    } else {
      setFilterString(null)
    }
  }

  return(
    <div style={{marginTop: '15px'}}>
      <calcite-input-text scale='s'
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


function VerbatimNameFilter (props: {setFilterString: (filterString: string | null) => void}) {
  const { setFilterString } = props

  function onChangeHandler (evt:CustomEvent) {
    const value = (evt.target as HTMLCalciteInputTextElement).value
    if (value) {
      setFilterString(`VerbatimScientificName like '%${value}%'`)
    } else {
      setFilterString(null)
    }
  }

  return(
    <div style={{marginTop: '15px'}}>
      <calcite-input-text scale='s'
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
