'use client'

import FormControl from '@mui/material/FormControl'

import MUISelect from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'

type SelectOptionsProps = [
  {
    value: string
    label: string
  }
][]

interface SelectProps {
  placeholder: string
  label: string
  labelId: string
  options?: SelectOptionsProps
  selectedValue?: SelectOptionsProps
  onChange: (e: any) => void
}

export function Select(props: SelectProps) {
  const { label, placeholder, labelId, options, selectedValue, onChange } =
    props

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <MUISelect
        placeholder={placeholder}
        labelId={labelId}
        value={selectedValue}
        // size="small"
        onChange={(e) => onChange(e.target.value)}
      >
        {options?.map((option: any) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  )
}
