'use client'

import MUIButton from '@mui/material/Button'

interface ButtonProps {
  label: string
  startIcon?: any
  endIcon?: any
  variant?: 'contained' | 'outlined'
  isLoading?: boolean
  disabled?: boolean
  onClick?: () => void
}

export function Button(props: ButtonProps) {
  const { label, variant = 'contained', isLoading, onClick } = props

  return (
    <MUIButton
      // isLoading={isLoading}
      variant={variant}
      size="small"
      disableElevation
      onClick={onClick}
    >
      {label}
    </MUIButton>
  )
}
