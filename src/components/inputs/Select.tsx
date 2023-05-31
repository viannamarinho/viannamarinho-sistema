'use client'

import FormControl from '@mui/material/FormControl'

import MUISelect from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'

interface SelectOptionsProps {
  valueId: string
  valueLabel: string
}

interface SelectProps {
  placeholder: string
  label: string
  labelId: string
  options?: SelectOptionsProps[]
  selectedValue?: SelectOptionsProps | object
  onChange: (e: any) => void
}

export function Select(props: SelectProps) {
  const { label, placeholder, labelId, options, selectedValue, onChange } =
    props

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
