import {
  React,
  type AllWidgetProps,
  DataSourceComponent,
  type QueriableDataSource,
  type DataSource,
  // type IMDataSourceInfo,
  type SqlQueryParams,
  MessageManager,
  DataSourceFilterChangeMessage
} from 'jimu-core'
import { useEffect, useState, useRef } from 'react'
import type { IMConfig } from '../config'
import type { TargetedEvent } from "@esri/calcite-components"
import {
  CalciteAutocomplete,
  CalciteAutocompleteItem
} from 'calcite-components'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  // console.log('rendering widget with props: ', props)

  const [names, setNames] = useState<string[]>([])
  const [filteredNames, setFilteredNames] = useState(names)
  const [selectedName, setSelectedName] = useState<string | null>(null)
  const autocompleteRef = useRef(null)
  const [dataSource, setDataSource] = useState<QueriableDataSource>(null)

  const handleAutocompleteChange = (event: TargetedEvent<HTMLCalciteAutocompleteElement>) => {
    // console.log(`inside handleAutocompleteChange with an ${event.type} event. value: ${event.target.value}, inputValue: ${event.target.inputValue}`)
    // update the inputValue to match the value of the selected item
    autocompleteRef.current.inputValue = event.target.value

    // setSelectedName(event.target.value)
  }

  const handleAutocompleteTextInput = (event: TargetedEvent<HTMLCalciteAutocompleteElement>) => {
    // console.log(`inside handleAutocompleteTextInput with an ${event.type} event. value: ${event.target.value}, inputValue: ${event.target.inputValue}`)
    const query = event.target.inputValue.toLowerCase()
    setFilteredNames( names.filter((name) => name.toLowerCase().startsWith(query)))
  }

  const handleAutocompleteClose = (event: TargetedEvent<HTMLCalciteAutocompleteElement>) => {
    // console.log(`inside handleAutocompleteClose with an ${event.type} event. value: ${event.target.value}, inputValue: ${event.target.inputValue}`)
    // only allow valid selections - if inputValue doesn't match an existing name, clear the input
    if (names.includes(event.target.inputValue)) {
      setSelectedName(event.target.inputValue)
    } else {
      autocompleteRef.current.inputValue = ''
      setSelectedName(null)
      console.warn(`value ${event.target.inputValue} not found in names list`)
    }
  }

  useEffect(() => {
    if (!dataSource) {
      // console.warn('no DataSource - cannot update queryParams')
      return
    }

    function buildQuery(selectedName:string):SqlQueryParams {
      if (selectedName) {
        return ({ where: `ScientificName = '${selectedName}'` })
      } else {
        return null
      }
    }
    // console.log('updating queryParams with: ', buildQuery(selectedName))
    dataSource.updateQueryParams(buildQuery(selectedName), props.id)
    MessageManager.getInstance().publishMessage(new DataSourceFilterChangeMessage(props.id, [dataSource.id]))

  }, [selectedName, dataSource, props.id])

  // should only run on initial load
  useEffect(() => {
    console.info('fetching names from: ', props.config.scientificNamesUrl)
    fetch(props.config.scientificNamesUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error reading configuration file from ${props.config.scientificNamesUrl}: ${res.statusText}`)
        }
        return res.json()
      })
      .then((nameslist) => {
        if (!nameslist) {
          throw new Error('configuration file improperly formatted: no names found')
        }
        if (nameslist.length > 0) {
          console.info(`${nameslist.length} unique scientific names loaded from ${props.config.scientificNamesUrl}`)
        }
        setNames(nameslist)
        setFilteredNames(nameslist)
      })
      .catch((err) => {
        console.error('error fetching configuration file: ', err)
      })
  }, [props.config.scientificNamesUrl])

  function handleDataSourceCreated(ds:DataSource) {
    if (!ds) {
      console.error('unable to create DataSource')
      return
    }
    setDataSource(ds as QueriableDataSource)
  }

  function handleDataSourceFailed(error:any) {
    console.error('DataSource creation failed: ', error)
  }

  // function handleDataSourceChange(info:IMDataSourceInfo) {
  //   // console.log('DataSource info changed: ', info)
  // }

  // const isDsConfigured = () => {
  //   if (props.useDataSources &&
  //     props.useDataSources.length === 1 ) {
  //     return true
  //   }
  //   return false
  // }

  return (
    <div className="jimu-widget p-2">
      <CalciteAutocomplete ref={autocompleteRef}
        // style={{ "-calcite-autocomplete-menu-max-size-y": "300px" }}
        name="scientific-names"
        placeholder="Select a scientific name"
        autocomplete='off'
        onCalciteAutocompleteChange={ handleAutocompleteChange }
        onCalciteAutocompleteTextChange={(evt)=> { console.log(evt) }}
        onCalciteAutocompleteTextInput={ handleAutocompleteTextInput }
        onCalciteAutocompleteBeforeClose={(evt)=> { console.log(evt) }}
        onCalciteAutocompleteBeforeOpen={(evt)=> { console.log(evt) }}
        onCalciteAutocompleteClose={ handleAutocompleteClose }
        onCalciteAutocompleteOpen={(evt)=> { console.log(evt) }}
      >
        {filteredNames.map((name) => (
          <CalciteAutocompleteItem
            key={name}
            value={name}
            heading={name}
          />
        ))}
    </CalciteAutocomplete>
    <DataSourceComponent useDataSource={props.useDataSources[0]} widgetId={props.id}
      onDataSourceCreated={handleDataSourceCreated}
      onCreateDataSourceFailed={handleDataSourceFailed}
      // onDataSourceInfoChange={handleDataSourceChange}
    />
    </div>
  )
}

export default Widget
