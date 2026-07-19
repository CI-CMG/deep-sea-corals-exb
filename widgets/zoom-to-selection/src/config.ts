import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  erddapBaseUrl: string
  csvFileUrl: string
  standardFieldsList?: string
}

export type IMConfig = ImmutableObject<Config>
