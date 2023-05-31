import styles from './styles.module.scss'

export default function MethodAnalysisView() {
  return (
    <div className={styles.admin_view__method_analysis}>
      <div className={styles.admin_view__method_analysis__chat_container}></div>
      <div className={styles.admin_view__method_analysis__form_container}></div>
    </div>
  )
}
