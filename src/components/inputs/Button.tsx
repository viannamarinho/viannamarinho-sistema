'use client'

import MUIButton from '@mui/material/Button'

interface ButtonProps {
  label: string
  size?: 'small' | 'medium' | 'large'
  startIcon?: any
  endIcon?: any
  variant?: 'contained' | 'outlined'
  isLoading?: boolean
  disabled?: boolean
  onClick?: () => void
}

export function Button(props: ButtonProps) {
  const {
    label,
    size = 'small',
    variant = 'contained',
    isLoading,
    onClick
  } = props

  return (
    <MUIButton
      // isLoading={isLoading}
      variant={variant}
      size={size}
      fullWidth
      disableElevation
      onClick={onClick}
    >
      {label}
    </MUIButton>
  )
}
