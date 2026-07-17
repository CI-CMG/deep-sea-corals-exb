import type { ImmutableObject } from 'jimu-core'

export interface Config {
  serviceUrl: string;
}

export type IMConfig = ImmutableObject<Config>;
