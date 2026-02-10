/** @jsx jsx */
import { React, jsx, Immutable, DataSourceTypes, type UseDataSource } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
// import {JimuMapViewSelector} from 'jimu-ui/advanced/setting-components'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import { MapWidgetSelector, SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { TextInput } from 'jimu-ui'
import { type IMConfig } from '../config'

export default function Setting (props: AllWidgetSettingProps<IMConfig>) {
  const onLayerUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('layerUrl', event.target.value)
    })
  }

  return (
    <div className='widget-setting-demo p-3'>
    <SettingSection title="FeatureLayer URL">
      <SettingRow>
        <TextInput type="text" placeholder="layer URL" htmlSize={28} value={props.config.layerUrl} onChange={onLayerUrlChange}/>
      </SettingRow>
    </SettingSection>
  </div>
  )
}
