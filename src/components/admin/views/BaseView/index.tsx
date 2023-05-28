import styles from './styles.module.scss'

import { TableListing } from '../../TableListing'

interface IBaseViewProps {
  tableData: any
  viewHeader: React.ReactNode
}

export default function BaseView({ tableData, viewHeader }: IBaseViewProps) {
  return (
    <div className={styles.view_base}>
      <nav className={styles.view_base__header}>{viewHeader}</nav>
      <nav className={styles.view_base__content}>
        <TableListing tableData={tableData} />
      </nav>
      {/* POSSIBILIDADE DE IMPLEMENTAR A PAGINAÇÃO AQUI */}
    </div>
  )
}
