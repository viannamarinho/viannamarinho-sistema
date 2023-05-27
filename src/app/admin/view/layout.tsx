import styles from '@/styles/pages/admin/admin.module.scss'

import { AdminProviders } from './providers'
import Menu from '@/components/admin/Menu'
import Header from '@/components/admin/Header'

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <AdminProviders>
          <div className={`window ${styles.admin_page}`}>
            <div className={styles.admin_page__container}>
              <div className={styles.admin_page__menu}>
                <Menu />
              </div>
              <div className={styles.admin_page__views_container}>
                <div className={styles.admin_page__header}>
                  <Header />
                </div>
                <div className={styles.admin_page__views_wrapper}>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </AdminProviders>
      </body>
    </html>
  )
}
