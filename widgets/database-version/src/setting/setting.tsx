/** @jsx jsx */
/**
  Licensing

  Copyright 2022 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/
import { React, FormattedMessage, css, jsx } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import {
  MapWidgetSelector,
  SettingSection,
  SettingRow
} from 'jimu-ui/advanced/setting-components'
import { TextInput, TextArea } from 'jimu-ui'
import { type IMConfig } from '../config'
import defaultI18nMessages from './translations/default'

export default function (props: AllWidgetSettingProps<IMConfig>) {
  
  const style = css`
      .widget-setting-simple {
        .textinput-row {
        }
        .textinput {
        }
      }
    `
  
  function configUrlPropertyChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('configUrl', event.target.value)
    })
  }

  return (
    <div css={style}>
      <div className="widget-setting-simple">
      <SettingSection>
          <SettingRow>
           <div className="textinput-row">
              <label>Configuration File URL</label>
              <TextInput 
                className={"textinput"} 
                type="text" 
                onChange={configUrlPropertyChange} value={props.config && props.config.configUrl} 
                htmlSize={30}
              />
            </div>
          </SettingRow>
        </SettingSection>
        </div>
    </div>
  )
};
