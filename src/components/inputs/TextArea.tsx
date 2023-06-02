'use client'

import TextField from '@mui/material/TextField'

interface IputProps {
  label?: string
  placeholder?: string
  isPassword?: boolean
  value: string
  error?: boolean
  helperText?: string
  onlyRead?: boolean
  onChange?: (e: any) => void
}

export function TextArea(props: IputProps) {
  const {
    label,
    placeholder,
    error = false,
    helperText,
    value,
    onlyRead,
    onChange
  } = props

  return (
    <TextField
      disabled={onlyRead}
      multiline
      rows={8}
      label={label}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      variant="outlined"
      size="small"
      fullWidth
      value={value}
      onChange={(e: any) => onChange && onChange(e.target.value)}
      InputLabelProps={{ shrink: true }}
      inputProps={{ style: { fontSize: '14px', lineHeight: '17px' } }}
    />
  )
}
