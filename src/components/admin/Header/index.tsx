import styles from './styles.module.scss'

import UserDatails from '../UserDatails'

export default function Header() {
  return (
    <header className={styles.admin_header}>
      <span></span>
      <UserDatails />
    </header>
  )
}
