'use client'

import TextField from '@mui/material/TextField'
import { useMemo, useRef } from 'react'

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

  const textareaRef = useRef<HTMLInputElement>(null)

  const currentValue = useMemo(() => {
    if (textareaRef.current) return

    return value.replace(/\\n/g, '\n')
  }, [value])

  return (
    <TextField
      inputRef={textareaRef}
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
      value={currentValue}
      onChange={(e: any) => onChange && onChange(e.target.value)}
      InputLabelProps={{ shrink: true }}
      inputProps={{ style: { fontSize: '14px', lineHeight: '17px' } }}
    />
  )
}
