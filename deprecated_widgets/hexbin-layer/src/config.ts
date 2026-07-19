import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  hexbinInfoWidgetId: string
}

export type IMConfig = ImmutableObject<Config>
