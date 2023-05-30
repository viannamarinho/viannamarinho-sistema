import styles from '../styles.module.scss'

import { Button } from '@/components/inputs/Button'

export default function GeneralSettingsView() {
  return (
    <>
      {/* <div className={styles.admin_view__settings__panel_header}>
        <span></span>
        <span>
          <Button label="Novo usuário" />
          <Button label="Gerenciar Acessos" />
        </span>
      </div> */}

      <div className={styles.admin_view__settings__panel_content}></div>
    </>
  )
}
