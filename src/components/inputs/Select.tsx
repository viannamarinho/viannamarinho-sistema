'use client'

import { useMemo } from 'react'

import FormControl from '@mui/material/FormControl'
import MUISelect from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'

interface SelectOptionsProps {
  valueId: string
  valueLabel: string
  valueObject?: any
}

interface SelectProps {
  placeholder: string
  label: string
  labelId: string
  options: SelectOptionsProps[]
  selectedValue: SelectOptionsProps | any
  onChange: (e: any) => void
}

export function Select(props: SelectProps) {
  const { label, placeholder, labelId, options, selectedValue, onChange } =
    props

  // console.log('---------------------', selectedValue)

  return (
    <FormControl fullWidth>
      <InputLabel shrink id={labelId} className="input_label">
        {label}
      </InputLabel>
      <MUISelect
        placeholder={placeholder}
        labelId={labelId}
        value={selectedValue}
        size="small"
        onChange={(e) => onChange(e.target.value)}
      >
        {options?.map((option: any) => (
          <MenuItem key={option.valueId} value={option.valueId}>
            {option.valueLabel}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  )
}
