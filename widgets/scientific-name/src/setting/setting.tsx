import { React, Immutable, type UseDataSource, DataSourceTypes } from 'jimu-core'
import type { AllWidgetSettingProps } from 'jimu-for-builder'
import { TextInput } from 'jimu-ui'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import type { IMConfig } from '../config'


export default function Setting(props: AllWidgetSettingProps<IMConfig>) {

  const onToggleUseDataEnabled = (useDataSourcesEnabled: boolean) => {
    props.onSettingChange({
      id: props.id,
      useDataSourcesEnabled
    })
  }

  const onDataSourceChange = (useDataSources: UseDataSource[]) => {
    props.onSettingChange({
      id: props.id,
      useDataSources: useDataSources
    })
  }

  const onServiceUrlChange = (value: string) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('scientificNamesUrl', value)
    })
  }

  return (
    <div>
      <div className="use-feature-layer-setting p-2">
        <DataSourceSelector
          types={Immutable([DataSourceTypes.FeatureLayer])}
          useDataSources={props.useDataSources}
          useDataSourcesEnabled={props.useDataSourcesEnabled}
          onToggleUseDataEnabled={onToggleUseDataEnabled}
          onChange={onDataSourceChange}
          widgetId={props.id}
        />
        <SettingSection title="Scientific Names URL">
        <SettingRow>
          <TextInput placeholder="URL for names list" value={props.config.scientificNamesUrl} onAcceptValue={onServiceUrlChange}/>
        </SettingRow>
      </SettingSection>
      </div>
  </div>
  )
}
