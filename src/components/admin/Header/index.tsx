'use client'

import styles from './styles.module.scss'

import UserDatails from '../UserDatails'

import { useViews } from '@/contexts/ViewsContext'

export default function Header() {
  const { activeViewLabels } = useViews()

  return (
    <header className={styles.admin_header}>
      <div className={styles.admin_header__label}>
        <div className={styles.admin_header__label_icon}>
          {activeViewLabels?.viewLabelIcon}
        </div>
        <div className={styles.admin_header__label_content}>
          <h2>{activeViewLabels?.viewLabelTitle}</h2>
          <p>{activeViewLabels?.viewLabelLegend}</p>
        </div>
      </div>
      <UserDatails />
    </header>
  )
}
