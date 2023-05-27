'use client'

import styles from './styles.module.scss'

import { Avatar } from '@mui/material'

import { stringAvatar } from '@/functions/stringifyName'

export default function UserDatails() {
  const userName = 'Henrique Garcia'
  return (
    <div className={styles.user_details}>
      <p>
        Olá, <b>{userName}</b>
      </p>
      <Avatar
        {...stringAvatar(userName)}
        sx={{ width: 29, height: 29, fontSize: 13, paddingTop: 0.3 }}
      />
    </div>
  )
}
