import React, { useState, useId } from 'react'
import { Tooltip } from 'jimu-ui'

import './filter-string-input.css'

interface Props {
  applyFilter: (value: string) => void
}

export default function FilterStringInput (props: Props) {
  const { applyFilter } = props
  const [filterString, setFilterString] = useState<string>('')
  const filterStringInputId = useId()

  function onChangeHandler (evt: React.ChangeEvent<HTMLInputElement>) {
    // causes component to render with each keypress
    setFilterString(evt.target.value)
  }

  function onBlurHandler (evt: React.FocusEvent<HTMLInputElement>) {
    // triggers datasource update
    applyFilter(evt.target.value)
  }

  function onKeyDownHander (evt: React.KeyboardEvent<HTMLInputElement>) {
    // triggers datasource update
    if (evt.key === 'Enter') {
      const value = (evt.target as HTMLInputElement).value
      applyFilter(value)
    }
  }
  const toolTipText = 'synonym search string'

  return (
    <div id="filter-string-container">
      <label id="filter-string-label" htmlFor={filterStringInputId}>Synonym</label>
      <br/>
      <Tooltip placement="top" title={toolTipText}>
        <input id={filterStringInputId} type="search" value={filterString} size={30}
          aria-label={toolTipText}
          // title={toolTipText}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHander}
        />
      </Tooltip>
    </div>
  )
}
