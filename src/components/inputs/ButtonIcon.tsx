'use client'

import IconButton from '@mui/material/IconButton'

interface IconButtonProps {
  icon?: any
  ariaLabel: string
  onClick?: () => void
}

export function ButtonIcon(props: IconButtonProps) {
  const { icon, ariaLabel, onClick } = props

  return (
    <IconButton aria-label={ariaLabel} size="small" onClick={onClick}>
      {icon}
    </IconButton>
  )
}
