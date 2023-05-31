'use client'

import { useMemo, useState } from 'react'
import styles from './styles.module.scss'

import { Table } from 'evergreen-ui'

export function TableOI() {
  // const [order, setOrder] = useState<Order>('asc')
  // const [orderBy, setOrderBy] = useState<keyof Data>('calories')
  // const [selected, setSelected] = useState<readonly string[]>([])
  // const [page, setPage] = useState(0)
  // const [dense, setDense] = useState(false)
  // const [rowsPerPage, setRowsPerPage] = useState(5)

  return (
    <div className={styles.table_listing}>
      <Table height="100%">
        <Table.Head height={40}>
          <Table.TextHeaderCell>Activity</Table.TextHeaderCell>
          <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
          <Table.TextHeaderCell>ltv</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={`calc(100% - 40px)`} overflow="auto">
          {/* {tableData?.map((data: any) => (
            <Table.Row
              key={data.id}
              height={36}
              isSelectable
              onSelect={() => alert(data.name)}
            >
              <Table.TextCell>{data.name}</Table.TextCell>
              <Table.TextCell>{data.lastActivity}</Table.TextCell>
              <Table.TextCell isNumber>{data.ltv}</Table.TextCell>
            </Table.Row>
          ))} */}
        </Table.Body>
      </Table>
    </div>
  )
}
