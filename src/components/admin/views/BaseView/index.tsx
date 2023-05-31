import styles from './styles.module.scss'

import { TableAJ } from '../../tables/TableAJ'
import { TableVMA } from '../../tables/TableVMA'
import { TableOI } from '../../tables/TableOI'
import { TableDigitalForm } from '../../tables/TableDigitalForm'

interface IBaseViewProps {
  tableId: string
  tableData: any
  viewHeader: React.ReactNode
}

export default function BaseView({
  tableId,
  tableData,
  viewHeader
}: IBaseViewProps) {
  return (
    <div className={styles.view_base}>
      <nav className={styles.view_base__header}>{viewHeader}</nav>
      <nav className={styles.view_base__content}>
        {tableId === 'base_aj' && <TableAJ tableData={tableData} />}
        {tableId === 'base_vma' && <TableVMA tableData={tableData} />}
        {tableId === 'base_oi' && <TableOI tableData={tableData} />}
        {tableId === 'base_digital_form' && (
          <TableDigitalForm tableData={tableData} />
        )}
      </nav>
      {/* POSSIBILIDADE DE IMPLEMENTAR A PAGINAÇÃO AQUI */}
    </div>
  )
}
