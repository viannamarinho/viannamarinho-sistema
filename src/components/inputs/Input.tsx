'use client'

import { useState } from 'react'

import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface IputProps {
  inputId: string
  label?: string
  placeholder?: string
  isPassword?: boolean
  value: string
  error?: boolean
  helperText?: string
  onChange: (e: any) => void
}

export function Input(props: IputProps) {
  const {
    inputId,
    label,
    placeholder,
    isPassword = false,
    error = false,
    helperText,
    value,
    onChange
  } = props

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (e: any) => {
    e.preventDefault()
  }

  return (
    <>
      {isPassword ? (
        <>
          <FormControl variant="outlined" error={error}>
            <InputLabel shrink htmlFor={inputId} className="input_label">
              {label}
            </InputLabel>
            <OutlinedInput
              id={inputId}
              label={label}
              placeholder={placeholder}
              type={showPassword ? 'text' : 'password'}
              size="small"
              fullWidth
              value={value}
              onChange={(e: any) => onChange(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="small"
                    style={{ marginRight: -10 }}
                  >
                    {showPassword ? (
                      <VisibilityOff fontSize="small" />
                    ) : (
                      <Visibility fontSize="small" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            {error && <FormHelperText>{helperText}</FormHelperText>}
          </FormControl>
        </>
      ) : (
        <TextField
          label={label}
          placeholder={placeholder}
          error={error}
          helperText={helperText}
          variant="outlined"
          size="small"
          fullWidth
          value={value}
          onChange={(e: any) => onChange(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      )}
    </>
  )
}
