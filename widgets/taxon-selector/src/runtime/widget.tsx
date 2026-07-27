/** @jsx jsx */
import {
  type AllWidgetProps,
  jsx, DataSourceComponent,
  type SqlQueryParams,
  type QueriableDataSource, type DataSource, MessageManager, DataSourceFilterChangeMessage
} from 'jimu-core'
import React, { useState, useEffect } from 'react'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import { Select, Option, Button } from 'jimu-ui'
import type { IMConfig } from '../config'

export default function Widget (props: AllWidgetProps<IMConfig>) {
  console.log('rendering taxon-selector...')
  const [dataSource, setDataSource] = useState(null)
  const [view, setView] = useState(null)
  const [phylumList, setPhylumList] = useState<string[]>([])
  const [classList, setClassList] = useState<string[]>([])
  const [orderList, setOrderList] = useState<string[]>([])
  const [familyList, setFamilyList] = useState<string[]>([])
  const [genusList, setGenusList] = useState<string[]>([])
  const [selectedPhylum, setSelectedPhylum] = useState<string|string[]>()
  const [selectedClass, setSelectedClass] = useState<string|string[]>()
  const [selectedOrder, setSelectedOrder] = useState<string|string[]>()
  const [selectedFamily, setSelectedFamily] = useState<string|string[]>()
  const [selectedGenus, setSelectedGenus] = useState<string|string[]>()
  const featureServiceUrl = 'https://services2.arcgis.com/C8EMgrsFcRFL6LrL/ArcGIS/rest/services/DSCRTP_NatDB/FeatureServer/0/query?'
  //TODO read from configuration
  // const serviceUrl = (props.config.serviceUrl) ? props.config.serviceUrl : 'https://services2.arcgis.com/C8EMgrsFcRFL6LrL/ArcGIS/rest/services/DSCRTP_NatDB/FeatureServer/0/query?'
  // console.log('rendering TaxonSelector widget', selectedPhylum, selectedClass, selectedOrder, selectedFamily, selectedGenus)
  // handle changes to taxon selections. update map and publish new values

  useEffect(() => {
    console.log('taxon-selector: inside useEffect...')
    // console.log('phylum: ' + selectedPhylum + '; class: ' + selectedClass + '; order: ' + selectedOrder + '; genus: ' + selectedGenus)
    if (!dataSource || !view) {
      // console.warn('taxon-selector: DataSource and/or MapView not yet set. QueryParams cannot updated')
      return
    }

    const selectedTaxon = []
    if (selectedPhylum) { selectedTaxon.push(selectedPhylum) }
    if (selectedClass) { selectedTaxon.push(selectedClass) }
    if (selectedFamily) { selectedTaxon.push(selectedFamily) }
    if (selectedOrder) { selectedTaxon.push(selectedOrder) }
    if (selectedGenus) { selectedTaxon.push(selectedGenus) }

    const q = getQuery();
    (dataSource as QueriableDataSource).updateQueryParams(q, props.id)
    sendMessage()
  }, [selectedPhylum, selectedClass, selectedFamily, selectedOrder, selectedGenus])


  // run once when widget is loaded
  useEffect(() => {
    // list of phylums does not change
    const startTime = new Date()
    const searchParams = new URLSearchParams([
      ['where', '1=1'],
      ['outFields', 'Phylum'],
      ['orderByFields', 'Phylum']
    ])
    getDataFromFeatureService(searchParams)
    .then(data => {
      const phylums = data.features.map(feature => feature.attributes.Phylum)
      // represent null values w/ 'NA' in the pull-down list
      // const phylums = data.features.map(feature => feature.attributes.Phylum).map(name => name || 'NA')
      setPhylumList(phylums)
      const endTime = new Date()
      console.debug(`Phylum data loaded from FeatureService in ${(endTime.getTime() - startTime.getTime()) / 1000} seconds`)
    })
  }, [])

  async function getDataFromFeatureService (incomingSearchParams: URLSearchParams) {
    //clone incoming
    const searchParams = new URLSearchParams(incomingSearchParams)
    // params shared be every request
    searchParams.set('returnGeometry', 'false')
    searchParams.set('returnDistinctValues', 'true')
    searchParams.set('f', 'json')
    const response = await fetch(featureServiceUrl, {
      method: 'POST',
      body: searchParams
    })
    //TODO better error handling
    if (!response.ok) {
      console.warn('Error fetching Taxon data from: ' + featureServiceUrl)
      return
    }
    return await response.json()
  }

  async function updateClassList (phylumName: string) {
    const searchParams = new URLSearchParams([
      ['where', `Phylum='${phylumName}' and Class is not null`],
      ['outFields', 'Class'],
      ['orderByFields', 'Class']
    ])
    const data = await getDataFromFeatureService(searchParams)
    const classes = data.features.map(feature => feature.attributes.Class)
    setClassList(classes)
  }

  // 'Order' is reserved word in SQL so renamed to 'Order_ in FeatureService'
  async function updateOrderList (className: string) {
    const searchParams = new URLSearchParams([
      ['where', `Class='${className}' and Order_ is not null`],
      ['outFields', 'Order_'],
      ['orderByFields', 'Order_']
    ])
    const data = await getDataFromFeatureService(searchParams)
    const orders = data.features.map(feature => feature.attributes.Order_)
    setOrderList(orders)
  }

  async function updateFamilyList (orderName: string) {
    const searchParams = new URLSearchParams([
      ['where', `Order_='${orderName}' and Family is not null`],
      ['outFields', 'Family'],
      ['orderByFields', 'Family']
    ])
    const data = await getDataFromFeatureService(searchParams)
    const families = data.features.map(feature => feature.attributes.Family)
    setFamilyList(families)
  }

  async function updateGenusList (familyName: string) {
    const searchParams = new URLSearchParams([
      ['where', `Family='${familyName}' and Genus is not null`],
      ['outFields', 'Genus'],
      ['orderByFields', 'Genus']
    ])
    const data = await getDataFromFeatureService(searchParams)
    const genera = data.features.map(feature => feature.attributes.Genus)
    setGenusList(genera)
  }

  /**
   * construct SQL clause based on taxon selections
   * Note that other filter criteria are managed independently by the Filter widget
   */
  function getQuery (): SqlQueryParams {
    const clauses = []

    // Feature Layer used different column names than map service
    if (selectedPhylum) { clauses.push(`Phylum = '${selectedPhylum}'`) }
    if (selectedClass) { clauses.push(`Class = '${selectedClass}'`) }
    if (selectedFamily) { clauses.push(`Family = '${selectedFamily}'`) }
    // Order is a SQL reserved word
    if (selectedOrder) { clauses.push(`Order_ = '${selectedOrder}'`) }
    if (selectedGenus) { clauses.push(`Genus = '${selectedGenus}'`) }

    if (clauses?.length) {
      return ({ where: clauses.join(' AND ') })
    } else {
      return null
    }
  }

  function resetButtonHandler (evt: React.MouseEvent<HTMLButtonElement>) {
    console.log('reset button clicked',selectedPhylum, selectedClass, selectedOrder, selectedFamily, selectedGenus)

    setSelectedPhylum('')
    setSelectedClass('')
    setSelectedOrder('')
    setSelectedFamily('')
    setSelectedGenus('')
    setClassList([])
    setOrderList([])
    setFamilyList([])
    setGenusList([])
  }

  // changing phylum resets all other Select elements in hierarchy
  function phylumSelectHandler (evt: CustomEvent) {
    const target = evt.target as HTMLCalciteComboboxElement
    setSelectedPhylum(target.value)
    // value will always be a string and not an array because selection-mode="single-persist"
    updateClassList(target.value as string)

    // reset dependent values
    setSelectedClass('')
    setSelectedOrder('')
    setSelectedFamily('')
    setSelectedGenus('')
    setOrderList([])
    setFamilyList([])
    setGenusList([])
  }

  function classSelectHandler (evt: any) {
    setSelectedClass(evt.target.value)
    updateOrderList(evt.target.value)

    // reset dependent values
    setSelectedOrder('')
    setSelectedFamily('')
    setSelectedGenus('')
    setFamilyList([])
    setGenusList([])
  }

  function orderSelectHandler (evt: CustomEvent) {
    const target = evt.target as HTMLCalciteComboboxElement
    setSelectedOrder(target.value)
    updateFamilyList(target.value as string)

    // reset dependent values
    setSelectedFamily('')
    setSelectedGenus('')
    setGenusList([])
  }

  function familySelectHandler (evt: CustomEvent) {
    const target = evt.target as HTMLCalciteComboboxElement
    setSelectedFamily(target.value)
    updateGenusList(target.value as string)

    // reset dependent values
    setSelectedGenus('')
  }

  function genusSelectHandler (evt: CustomEvent) {
    const target = evt.target as HTMLCalciteComboboxElement
    setSelectedGenus(target.value as string)
  }

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

  function sendMessage () {
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
      <calcite-combobox label="Phylum" placeholder="Select a Phylum..."
        selection-display="fit" selection-appearance="highlight"
        selection-mode="single-persist" scale='s'
        value={selectedPhylum} disabled={!phylumList.length}
        oncalciteComboboxChange={phylumSelectHandler}
        style={{ paddingLeft: '10px', paddingBottom: '10px', width: 200 }}
      >
          {phylumList?.map(item => <calcite-combobox-item value={item} heading={item}></calcite-combobox-item>)}
      </calcite-combobox>
      <calcite-combobox label="Class" placeholder="Select a Class..."
        selection-display="fit" selection-appearance="highlight"
        selection-mode="single-persist" scale='s'
        value={selectedClass} disabled={!classList.length}
        oncalciteComboboxChange={classSelectHandler}
        style={{ paddingLeft: '10px', paddingBottom: '10px', width: 200 }}
      >
          {classList?.map(item => <calcite-combobox-item value={item} heading={item}></calcite-combobox-item>)}
      </calcite-combobox>

      <calcite-combobox label="Order" placeholder="Select an Order..."
        selection-display="fit" selection-appearance="highlight"
        selection-mode="single-persist" scale='s'
        value={selectedOrder} disabled={!orderList.length}
        oncalciteComboboxChange={orderSelectHandler}
        style={{ paddingLeft: '10px', paddingBottom: '10px', width: 200 }}
      >
          {orderList?.map(item => <calcite-combobox-item value={item} heading={item}></calcite-combobox-item>)}
      </calcite-combobox>

      <calcite-combobox label="Family" placeholder="Select a Family..."
        selection-display="fit" selection-appearance="highlight"
        selection-mode="single-persist" scale='s'
        value={selectedFamily} disabled={!familyList.length}
        oncalciteComboboxChange={familySelectHandler}
        style={{ paddingLeft: '10px', paddingBottom: '10px', width: 200 }}
      >
          {familyList?.map(item => <calcite-combobox-item value={item} heading={item}></calcite-combobox-item>)}
      </calcite-combobox>
      <calcite-combobox label="Genus" placeholder="Select a Genus..."
        selection-display="fit" selection-appearance="highlight"
        selection-mode="single-persist" scale='s'
        value={selectedGenus} disabled={!genusList.length}
        oncalciteComboboxChange={genusSelectHandler}
        style={{ paddingLeft: '10px', paddingBottom: '10px', width: 200 }}
      >
        {genusList.map(item => <calcite-combobox-item value={item} heading={item}></calcite-combobox-item>)}
      </calcite-combobox>

      <Button size='sm' style={{ marginLeft: '10px' }} onClick={resetButtonHandler}>Reset</Button>

    </div>
  )
}
