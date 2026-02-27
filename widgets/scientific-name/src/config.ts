import type { ImmutableObject } from 'jimu-core'

export interface Config {
  scientificNamesUrl: string
}

export type IMConfig = ImmutableObject<Config>
