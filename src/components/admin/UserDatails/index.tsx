'use client'

import { useState } from 'react'
import styles from './styles.module.scss'

import { Avatar, Menu, MenuItem } from '@mui/material'

import { stringAvatar } from '@/functions/stringifyName'

export default function UserDatails() {
  const userName = 'Henrique Garcia'

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={styles.user_details}>
      <div
        className={styles.user_details__container}
        id="user_datails__menu__button"
        aria-controls={open ? 'user_datails__menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <p>
          Olá, <b>{userName}</b>
        </p>
        <Avatar
          {...stringAvatar(userName)}
          sx={{ width: 29, height: 29, fontSize: 13, paddingTop: 0.3 }}
        />
      </div>

      <Menu
        id="user_datails__menu"
        aria-labelledby="user_datails__menu__button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: 'auto',
            marginTop: '12px'
          }
        }}
      >
        <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
        <MenuItem onClick={handleClose}>Configurações</MenuItem>
        <MenuItem onClick={handleClose}>Sair</MenuItem>
      </Menu>
    </div>
  )
}
