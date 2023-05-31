import styles from './styles.module.scss'

import { TableAJ } from '../../tables/TableAJ'
import { TableVMA } from '../../tables/TableVMA'
import { TableOI } from '../../tables/TableOI'
import { TableDigitalForm } from '../../tables/TableDigitalForm'

interface IBaseViewProps {
  tableId: string
  viewHeader: React.ReactNode
}

export default function BaseView({ tableId, viewHeader }: IBaseViewProps) {
  return (
    <div className={styles.view_base}>
      <nav className={styles.view_base__header}>{viewHeader}</nav>
      <nav className={styles.view_base__content}>
        {tableId === 'base_aj' && <TableAJ />}
        {tableId === 'base_vma' && <TableVMA />}
        {tableId === 'base_oi' && <TableOI />}
        {/* {tableId === 'base_digital_form' && <TableDigitalForm />} */}
      </nav>
      {/* POSSIBILIDADE DE IMPLEMENTAR A PAGINAÇÃO AQUI */}
    </div>
  )
}
