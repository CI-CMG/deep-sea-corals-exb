/** @jsx jsx */
import {
  type AllWidgetProps,
  jsx, DataSourceComponent,
  type QueriableDataSource, type DataSource, MessageManager, DataSourceFilterChangeMessage,
  type ArcGISQueryParams
} from 'jimu-core'
import React, { useState } from 'react'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
// import FilterStringInput from './filter-string-input'
// import {Button, Dropdown, TextInput} from 'jimu-ui'
import type { IMConfig } from '../config'

export default function Widget (props: AllWidgetProps<IMConfig>) {
  const [dataSource, setDataSource] = useState<QueriableDataSource | null>(null)
  const [view, setView] = useState(null)

  // runs once
  function onDataSourceCreated (ds: DataSource) {
    if (ds) {
      const dataSource = ds as QueriableDataSource
      setDataSource(dataSource)
    } else {
      console.error('unable to create DataSource')
    }
  }

  // runs once
  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (!jmv) {
      console.warn('no MapView')
      return
    }
    setView(jmv.view)
  }

  // handle changes to filter string. update map and publish new values
  function applyFilter (filterString: string) {
    if (!dataSource || !view) {
      console.warn('DataSource and/or MapView not yet set. QueryParams cannot updated')
      return
    }

    const q:ArcGISQueryParams = filterString ? { where: `AphiaID = '${filterString}'` } : null
    dataSource.updateQueryParams(q, props.id)
    MessageManager.getInstance().publishMessage(new DataSourceFilterChangeMessage(props.id, [dataSource.id]))
  }

  return (
    <div className="jimu-widget" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <div>
        <DataSourceComponent
            useDataSource={props.useDataSources?.[0]}
            widgetId={props.id}
            onDataSourceCreated={onDataSourceCreated}
          />
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds?.[0]}
          onActiveViewChange={activeViewChangeHandler}></JimuMapViewComponent>
      </div>
        {/* <FilterStringInput applyFilter={applyFilter}/>
        <TextInput
          onAcceptValue={value => { console.log('onAcceptValue: ', value) }}
          onPressEnter={(value) => { console.log('onPressEnter: ', value) }}
          type="search"
          style={{ width: '90%' }}
        /> */}
        <calcite-input-text
          style={{width: '80%'}} label-text="Aphia ID"
          oncalciteInputTextChange={(evt) => { applyFilter(evt.target.value) }}>
        </calcite-input-text>
    </div>
  )
}
