'use client'

import styles from '@/styles/pages/admin/view.module.scss'

interface Props {
  params: {
    id: string
  }
}

export default function View({ params }: Props) {
  console.log('params', params.id)

  return <main className={styles.view}>Resume</main>
}
