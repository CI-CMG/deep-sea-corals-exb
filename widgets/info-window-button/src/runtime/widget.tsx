import { type AllWidgetProps, React, jimuHistory } from 'jimu-core'
import { Tooltip } from 'jimu-ui'
import { type IMConfig } from '../config'
import { CalciteButton, CalciteIcon } from 'calcite-components'

export default function Widget (props: AllWidgetProps<IMConfig>) {
  function onClickHandler (e: React.MouseEvent<HTMLElement>) {
    jimuHistory.changeDialog(props.config.dialogId)
  }

  return (
    <>
    {/* <CalciteButton id="downloadButton" onClick={onClickHandler}><CalciteIcon id="buttonIcon" ref={buttonRef} icon="download" /></CalciteButton> */}
    <Tooltip title='open info window'>
    <CalciteButton id="infoButton" scale="s" onClick={onClickHandler} appearance='transparent'>
      <CalciteIcon id="buttonIcon" icon="information" scale='s'/>
    </CalciteButton>
    </Tooltip>
    </>
  )
}
