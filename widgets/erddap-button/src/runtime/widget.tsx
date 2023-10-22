import { type AllWidgetProps, React, jimuHistory } from 'jimu-core'
import { Tooltip } from 'jimu-ui'
import { useRef } from 'react'
import { type IMConfig } from '../config'
import { CalciteButton } from 'calcite-components'
import './widget.css'

export default function Widget (props: AllWidgetProps<IMConfig>) {
  const buttonRef = useRef()
  function onClickHandler (e: React.MouseEvent<HTMLElement>) {
    jimuHistory.changeDialog(props.config.dialogId)
  }

  return (
    <>
    {/* <CalciteButton id="downloadButton" onClick={onClickHandler}><CalciteIcon id="buttonIcon" ref={buttonRef} icon="download" /></CalciteButton> */}
    <Tooltip title='download data via ERDDAP'>
    <CalciteButton className="primaryColorOverride" id="downloadButton" ref={buttonRef} name="download" onClick={onClickHandler} iconEnd='download'>Download</CalciteButton>
    </Tooltip>
    </>
  )
}
