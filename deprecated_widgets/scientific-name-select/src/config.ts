import type { ImmutableObject } from 'seamless-immutable'

export interface Config {
  text?: string
  scientificNamesUrl: string
}

export type IMConfig = ImmutableObject<Config>
