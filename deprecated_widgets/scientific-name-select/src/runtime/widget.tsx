import type { IMConfig } from '../config'
import {
  React,
  type IMDataSourceInfo,
  type DataSource,
  type DataSourceStatus,
  type QueriableDataSource,
  type FeatureLayerQueryParams,
  type AllWidgetProps,
  DataSourceComponent,
  MessageManager,
  DataSourceFilterChangeMessage,
  type SqlQueryParams
} from 'jimu-core'
// import 'calcite-components'
import {
  CalciteButton,
  CalciteIcon,
  CalciteAutocomplete,
  CalciteAction
} from 'calcite-components'
// which is better?
// import { useState, useEffect, useRef } from 'react'
const { useState, useEffect, useRef } = React

/**
 * construct SQL clause based on name selection
  * Note that other filter criteria are managed independently by the Filter widget
  */
function getQuery (selectedName): SqlQueryParams {
  if (selectedName) {
    return ({ where: `ScientificName = '${selectedName}'` })
  } else {
    return null
  }
}


const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [names, setNames] = useState<string[]>([])
  const [dataSource, setDataSource] = useState<QueriableDataSource>(null)
  const [selectedName, setSelectedName] = useState<string>(null)
  console.log('re-rendering widget. selectedName: ', selectedName)
  const autocompleteRef = useRef(null)

  if (dataSource) {
    console.log(dataSource.getCurrentQueryParams())
  }
  // useEffect(() => {
  //   console.log('inside useEffect with ', selectedName)
  //   if (!selectedName) { return }
  //   console.log({selectedName})
  //   console.log(dataSource.getCurrentQueryParams())
  // }, [selectedName, dataSource])

  // load the list of unique scientific names. Should only happen on component mount
  useEffect(() => {
    console.log('inside useEffect loading list of unique scientific names')
    fetch(props.config.scientificNamesUrl).then()
      .then((res) => {
        if (!res.ok) {
          console.warn(`Error reading configuration file from ${props.config.scientificNamesUrl}: `, res.statusText)
          return
        }
        return res.json()
      })
      .then((nameslist) => {
        if (!nameslist || nameslist.length === 0) {
          console.error('configuration file improperly formatted: no names found')
          return
        }
        console.log(`${nameslist.length} unique scientific names loaded from ${props.config.scientificNamesUrl}`)
        setNames(nameslist)
      })
      .catch((err) => {
        console.error('error fetching configuration file: ', err)
      })
  }, [props.config.scientificNamesUrl])


  function getSuggestions(data) {
    // cannot add items until AutoComplete is constructed
    if (!autocompleteRef.current) { return }
    if (names.length === 0) { return }

    autocompleteRef.current.replaceChildren()

    if (data.length === 0) {
      console.log("no data")
      const noResults = document.createElement("calcite-notice")
      noResults.slot = "content-top"
      noResults.open = true
      noResults.icon = "information"
      noResults.innerHTML = `
      <div slot="title">No results</div>
      <div slot="message">Try something else</div>`
      autocompleteRef.current.appendChild(noResults)
    } else {
      data.forEach((name) => {
        const item = document.createElement("calcite-autocomplete-item")
        item.value = name
        item.label = name
        item.heading = name
        autocompleteRef.current.appendChild(item)
      })
    }
  }


  function textInputHandler(event) {
    console.log('inside textInputHandler with ', event.target.inputValue)
    const inputValue = event.target.inputValue
    if (!inputValue) {
      event.target.value = ""
      event.target.innerHTML = ""
      console.log("reset list...")
      const q = getQuery(event.target.value)
      dataSource.updateQueryParams(q, props.id)
      MessageManager.getInstance().publishMessage(new DataSourceFilterChangeMessage(props.id, [dataSource.id]))
      setSelectedName(null)
      return
    }
    getSuggestions(names.filter((name) => name.toLowerCase().search(inputValue.toLowerCase()) > -1))
    // await getSuggestions(data.filter(({value, heading}) => heading.toLowerCase().search(inputValue.toLowerCase()) > -1))
  }

  // calciteAutocompleteChange event
  function changeHandler(event) {
    console.log('inside changeHandler with ', event.target.value)
    // set inputValue to match value of item
    autocompleteRef.current.inputValue = event.target.value
    const q = getQuery(event.target.value)
    dataSource.updateQueryParams(q, props.id)
    MessageManager.getInstance().publishMessage(new DataSourceFilterChangeMessage(props.id, [dataSource.id]))
    // triggers widget re-render
    setSelectedName(autocompleteRef.current.value)
  }

  function keyDownHandler(event) {
    if (event.key === "Enter") {
      // triggers the changeHandler
      autocompleteRef.current.value = autocompleteRef.current.inputValue
      autocompleteRef.current.open = false
      // console.log("Enter key detected: value: ", autocompleteRef.current.value)
    }
  }

  // runs once
  function onDataSourceCreated (ds: QueriableDataSource) { // QueriableDataSource extends DataSource
    console.log('inside onDataSourceCreated...')
    if (!ds) {
      console.error('onDataSourceCreated called with null DataSource')
      return
    }
    setDataSource(ds)
  }

  function onAllChildDataSourcesCreated(ds:DataSource) {
    console.log('inside onAllChildDataSourcesCreated...')
  }

  function onCreateDataSourceFailed(err) {
    console.error('inside onCreateDataSourceFailed with ', err)
  }

  function onDataSourceStatusChange(status:DataSourceStatus, preStatus:DataSourceStatus) {
    console.log('inside onDataSourceStatusChange with ', status, preStatus)
  }

  return (
    <div className="widget-calcite jimu-widget m-2">
       <DataSourceComponent
          useDataSource={props.useDataSources?.[0]}
          widgetId={props.id}
          onDataSourceCreated={onDataSourceCreated}
          onAllChildDataSourcesCreated={onAllChildDataSourcesCreated}
          onCreateDataSourceFailed={onCreateDataSourceFailed}
          onDataSourceStatusChange={onDataSourceStatusChange}
      />

      <CalciteAutocomplete
          ref={autocompleteRef}
          autocomplete='off'
          scale="m" placeholder="Where to?"
          className="locator-autocomplete"
          name="location"
          onCalciteAutocompleteTextInput={textInputHandler}
          onCalciteAutocompleteChange={changeHandler}
          onKeyDown={keyDownHandler}
          >
            {/* what does this do? */}
          <CalciteAction appearance="transparent" scale="s" icon="ellipsis" slot="trigger" text="testme"></CalciteAction>
        </CalciteAutocomplete>
    </div>
  )
}

export default Widget
