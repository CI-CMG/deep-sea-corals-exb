/** @jsx jsx */

/*
 * there are two runtime events which impact this widget:
 *
 * 1) mapClick
 * this only requires that the hexbin summary be updated
 *
 * 2) filter changes (i.e. DataSource queryParams)
 * this requires that the graphics layer be updated (both boundaries and symbology)
 *
 * Both are handled (indirectly) via respective useEffect hooks, i.e.
 * event changes state -> triggers re-render -> useEffect runs
 *
 * Note that if a individual hexbin was selected at the time the queryParams
 * change, it will be deselected and the summary cleared. This is necessary
 * since a change in queryParams may cause a hexbin which was formerly displayed
 * to no longer be drawn
 */
import {
  React,
  jsx,
  type AllWidgetProps,
  type IMState,
  ReactRedux
} from 'jimu-core'

import { type IMConfig } from '../config'
import DataDisplay from '../ocis-display'

export interface ExtraProps {
  h3: string
}
const { useSelector } = ReactRedux

export default function Widget (props: AllWidgetProps<IMConfig> & ExtraProps) {
  console.log('inside OCIS widget with props: ', props)

  // get state for this widget
  const widgetState = useSelector((state: IMState) => {
    return state.widgetsState[props.widgetId]
  })
  console.log(`inside OCIS: h3 = ${widgetState?.h3}`)

  if (!widgetState?.h3) {
    return (
      <div>
        <div>
          <p style={{ fontSize: 'medium' }}>Please select a hexagon to summarize.</p>
        </div>
    </div>
    )
  }

  return (
    <div style={{ overflowY: 'auto' }}>
      {widgetState.h3 ? <DataDisplay h3={widgetState.h3} /> : <p style={{ fontSize: 'medium' }}>Please select a hexagon to summarize</p>}
    </div>
  )
}

Widget.mapExtraStateProps = (state: IMState, ownProps: AllWidgetProps<IMConfig>): ExtraProps => {
  return {
    h3: state.widgetsState[ownProps.widgetId]?.h3 || null
  }
}
