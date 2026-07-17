/** @jsx jsx */
import { React, jsx, DataSourceTypes, Immutable, ImmutableObject, type UseDataSource } from 'jimu-core'
import type { AllWidgetSettingProps } from 'jimu-for-builder'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
// import {JimuMapViewSelector} from 'jimu-ui/advanced/setting-components'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import type { IMConfig } from '../config'


export default function Setting (props: AllWidgetSettingProps<IMConfig>) {
  const supportedTypes = Immutable([DataSourceTypes.FeatureLayer])


  const onDataSourceChange = (useDataSources: UseDataSource[]) => {
    props.onSettingChange({
      id: props.id,
      useDataSources: useDataSources
    })
  }


  return (
    <div className='widget-setting-demo p-3'>
      <SettingSection title="DataSource to filter">
        <SettingRow>
          <DataSourceSelector
            mustUseDataSource
            types={supportedTypes}
            useDataSources={props.useDataSources}
            onChange={onDataSourceChange}
            widgetId={props.id}
          />
        </SettingRow>
      </SettingSection>

    </div>
  )
}
