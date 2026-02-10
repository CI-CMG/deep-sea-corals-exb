import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  h3: string
}

export type IMConfig = ImmutableObject<Config>
