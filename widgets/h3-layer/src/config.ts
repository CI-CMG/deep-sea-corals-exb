import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  layerName: string
  ocisWidgetId: string
  sidePanelId: string
  sectionId: string
  summaryViewId: string
  detailsViewId: string
}

export type IMConfig = ImmutableObject<Config>
