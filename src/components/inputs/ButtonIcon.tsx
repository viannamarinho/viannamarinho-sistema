'use client'

import IconButton from '@mui/material/IconButton'

interface IconButtonProps {
  icon?: any
  size: 'small' | 'medium' | 'large'
  ariaLabel: string
  onClick?: () => void
}

export function ButtonIcon(props: IconButtonProps) {
  const { icon, size = 'small', ariaLabel, onClick } = props

  return (
    <IconButton aria-label={ariaLabel} size={size} onClick={onClick}>
      {icon}
    </IconButton>
  )
}
