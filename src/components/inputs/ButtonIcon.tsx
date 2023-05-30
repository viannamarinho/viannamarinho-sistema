'use client'

import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const CustomIconButton = styled(Button)({
  width: '37px',
  minWidth: '37px',
  height: '37px',
  padding: 0,
  '& svg': {
    fontSize: '19px'
  }
})

interface IconButtonProps {
  icon?: any
  size: 'small' | 'medium' | 'large'
  ariaLabel: string
  onClick?: () => void
}

export function ButtonIcon(props: IconButtonProps) {
  const { icon, size = 'small', ariaLabel, onClick } = props

  return (
    <CustomIconButton
      aria-label={ariaLabel}
      size={size}
      variant="outlined"
      onClick={onClick}
    >
      {icon}
    </CustomIconButton>
  )
}
