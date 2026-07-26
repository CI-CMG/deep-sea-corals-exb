import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  featureLayerTitle: string
}

export type IMConfig = ImmutableObject<Config>
