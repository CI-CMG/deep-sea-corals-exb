/** @jsx jsx */
import {
  type AllWidgetProps,
  jsx, DataSourceComponent,
  type QueriableDataSource, type DataSource, MessageManager, DataSourceFilterChangeMessage
} from 'jimu-core'
import React, { useState } from 'react'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import FilterStringInput from './filter-string-input'
import { type IMConfig } from '../config'

export default function Widget (props: AllWidgetProps<IMConfig>) {
  const [dataSource, setDataSource] = useState(null)
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
      console.warn('verbatim-name-filter: DataSource and/or MapView not yet set. QueryParams cannot updated')
      return
    }

    let q = null
    if (filterString) {
      // find pattern anywhere in verbatimscientificname
      q = { where: `VerbatimScientificName like '%${filterString}%'` }
    }
    // const oldQuery = (dataSource as QueriableDataSource).getCurrentQueryParams()

    // leading parens in this statement can confuse any preceeding statement w/o semicolon
    (dataSource as QueriableDataSource).updateQueryParams(q, props.id)

    // const newQuery = (dataSource as QueriableDataSource).getCurrentQueryParams()

    MessageManager.getInstance().publishMessage(new DataSourceFilterChangeMessage(props.id, dataSource.id))
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
        <FilterStringInput applyFilter={applyFilter}/>
    </div>
  )
}
