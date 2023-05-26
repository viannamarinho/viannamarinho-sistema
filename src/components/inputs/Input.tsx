'use client'

import { useState } from 'react'

import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface IputProps {
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
    label,
    placeholder,
    isPassword,
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
          // endAdornment={
          //   <InputAdornment position="end">
          //     <IconButton
          //       aria-label="toggle password visibility"
          //       onClick={handleClickShowPassword}
          //       onMouseDown={handleMouseDownPassword}
          //       edge="end"
          //     >
          //       {showPassword ? <VisibilityOff /> : <Visibility />}
          //     </IconButton>
          //   </InputAdornment>
          // }
        />
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
        />
      )}
    </>
  )
}
