import styles from '@/styles/pages/auth/auth.module.scss'

import { AuthProviders } from './providers'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <AuthProviders>
          <main className={`window ${styles.auth_page}`}>
            <section className={styles.auth_page__form_container}>
              <div className={styles.auth_page__form_header}>
                <img src="/teste_logo.png" alt="" />
              </div>
              <div className={styles.auth_page__form_content}>{children}</div>
            </section>
          </main>
        </AuthProviders>
      </body>
    </html>
  )
}
