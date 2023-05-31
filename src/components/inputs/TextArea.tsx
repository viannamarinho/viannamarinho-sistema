'use client'

import TextField from '@mui/material/TextField'

interface IputProps {
  label?: string
  placeholder?: string
  isPassword?: boolean
  value: string
  error?: boolean
  helperText?: string
  onChange?: (e: any) => void
}

export function TextArea(props: IputProps) {
  const {
    label,
    placeholder,
    error = false,
    helperText,
    value,
    onChange
  } = props

  return (
    <TextField
      multiline
      rows={4}
      label={label}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      variant="outlined"
      size="small"
      fullWidth
      value={value}
      onChange={(e: any) => onChange && onChange(e.target.value)}
    />
  )
}
