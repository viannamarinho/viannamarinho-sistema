'use client'

import styles from './styles.module.scss'

import MUIButton from '@mui/material/Button'

interface ButtonProps {
  label: string
  icon?: JSX.Element
  isActive?: boolean
  onClick?: () => void
}

export default function MenuButton(props: ButtonProps) {
  const { label, icon, isActive, onClick } = props

  return (
    <MUIButton
      size="medium"
      startIcon={icon}
      variant={isActive ? 'contained' : 'outlined'}
      fullWidth
      disableElevation
      onClick={onClick}
      className={styles.menu_button}
      // className={
      //   isActive
      //     ? `${styles.menu_button} ${styles.active}`
      //     : `${styles.menu_button}`
      // }
    >
      {label}
    </MUIButton>
  )
}
