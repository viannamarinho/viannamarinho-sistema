'use client'

// import { useMemo, useState } from 'react'
import styles from './styles.module.scss'

import { Table } from 'evergreen-ui'

import { useBaseOI } from '@/contexts/BaseOIContext'

import { baseOITableWidth } from '@/data/basesTableWidth'

export function TableOI() {
  const { currentBaseOIData } = useBaseOI()

  return (
    <div className={styles.table_listing_oi}>
      <Table height="100%" width="fit-content">
        <Table.Head height={60}>
          <Table.TextHeaderCell
            width={baseOITableWidth.id_base_proc}
            flexBasis={baseOITableWidth.id_base_proc}
            flexShrink={0}
            flexGrow={0}
          >
            ID
          </Table.TextHeaderCell>
          <Table.TextHeaderCell
            width={baseOITableWidth.id_aj}
            flexBasis={baseOITableWidth.id_aj}
            flexShrink={0}
            flexGrow={0}
          >
            ID AJ
          </Table.TextHeaderCell>
          <Table.TextHeaderCell
            width={baseOITableWidth.cont_se}
            flexBasis={baseOITableWidth.cont_se}
            flexShrink={0}
            flexGrow={0}
          >
            cont_se
          </Table.TextHeaderCell>
          <Table.TextHeaderCell
            width={baseOITableWidth.id_sisjur}
            flexBasis={baseOITableWidth.id_sisjur}
            flexShrink={0}
            flexGrow={0}
          >
            sisjur
          </Table.TextHeaderCell>
          <Table.TextHeaderCell
            width={baseOITableWidth.nr_proc}
            flexBasis={baseOITableWidth.nr_proc}
            flexShrink={0}
            flexGrow={0}
          >
            nr_proc
          </Table.TextHeaderCell>
          <Table.TextHeaderCell
            width={baseOITableWidth.vara}
            flexBasis={baseOITableWidth.vara}
            flexShrink={0}
            flexGrow={0}
          >
            Vara
          </Table.TextHeaderCell>
          <Table.TextHeaderCell
            width={baseOITableWidth.comarca}
            flexBasis={baseOITableWidth.comarca}
            flexShrink={0}
            flexGrow={0}
          >
            Comarca
          </Table.TextHeaderCell>
          <Table.TextHeaderCell
            width={baseOITableWidth.estado}
            flexBasis={baseOITableWidth.estado}
            flexShrink={0}
            flexGrow={0}
          >
            Estado
          </Table.TextHeaderCell>
          <Table.TextHeaderCell
            width={baseOITableWidth.nome_rz_social}
            flexBasis={baseOITableWidth.nome_rz_social}
            flexShrink={0}
            flexGrow={0}
          >
            Nome da Razão Social
          </Table.TextHeaderCell>
          <Table.TextHeaderCell
            width={baseOITableWidth.cpf_cnpj}
            flexBasis={baseOITableWidth.cpf_cnpj}
            flexShrink={0}
            flexGrow={0}
          >
            CPF ou CNPJ
          </Table.TextHeaderCell>
          <Table.TextHeaderCell
            width={baseOITableWidth.valor}
            flexBasis={baseOITableWidth.valor}
            flexShrink={0}
            flexGrow={0}
          >
            Valor
          </Table.TextHeaderCell>
          <Table.TextHeaderCell
            width={baseOITableWidth.area}
            flexBasis={baseOITableWidth.area}
            flexShrink={0}
            flexGrow={0}
          >
            Área
          </Table.TextHeaderCell>
          <Table.TextHeaderCell
            width={baseOITableWidth.classe_credito}
            flexBasis={baseOITableWidth.classe_credito}
            flexShrink={0}
            flexGrow={0}
          >
            Classe do Cŕedito
          </Table.TextHeaderCell>
        </Table.Head>
        <Table.Body
          width="fit-content"
          height={`calc(100% - 60px)`}
          overflowY="auto"
          overflowX="hidden"
        >
          {currentBaseOIData?.map((data: any) => (
            <Table.Row
              key={data.id_base_proc}
              height={38}
              isSelectable
              display="flex"
              // onSelect={() => alert(data.name)}
            >
              <Table.TextCell
                width={baseOITableWidth.id_base_proc}
                flexBasis={baseOITableWidth.id_base_proc}
                flexShrink={0}
                flexGrow={0}
              >
                {data.id_base_proc}
              </Table.TextCell>
              <Table.TextCell
                width={baseOITableWidth.id_aj}
                flexBasis={baseOITableWidth.id_aj}
                flexShrink={0}
                flexGrow={0}
              >
                {data.id_aj}
              </Table.TextCell>
              <Table.TextCell
                width={baseOITableWidth.cont_se}
                flexBasis={baseOITableWidth.cont_se}
                flexShrink={0}
                flexGrow={0}
              >
                {data.cont_se}
              </Table.TextCell>
              <Table.TextCell
                width={baseOITableWidth.id_sisjur}
                flexBasis={baseOITableWidth.id_sisjur}
                flexShrink={0}
                flexGrow={0}
              >
                {data.id_sisjur}
              </Table.TextCell>
              <Table.TextCell
                width={baseOITableWidth.nr_proc}
                flexBasis={baseOITableWidth.nr_proc}
                flexShrink={0}
                flexGrow={0}
              >
                {data.nr_proc}
              </Table.TextCell>
              <Table.TextCell
                width={baseOITableWidth.vara}
                flexBasis={baseOITableWidth.vara}
                flexShrink={0}
                flexGrow={0}
              >
                {data.vara}
              </Table.TextCell>
              <Table.TextCell
                width={baseOITableWidth.comarca}
                flexBasis={baseOITableWidth.comarca}
                flexShrink={0}
                flexGrow={0}
              >
                {data.comarca}
              </Table.TextCell>
              <Table.TextCell
                width={baseOITableWidth.estado}
                flexBasis={baseOITableWidth.estado}
                flexShrink={0}
                flexGrow={0}
              >
                {data.estado}
              </Table.TextCell>
              <Table.TextCell
                width={baseOITableWidth.nome_rz_social}
                flexBasis={baseOITableWidth.nome_rz_social}
                flexShrink={0}
                flexGrow={0}
              >
                {data.nome_rz_social}
              </Table.TextCell>
              <Table.TextCell
                width={baseOITableWidth.cpf_cnpj}
                flexBasis={baseOITableWidth.cpf_cnpj}
                flexShrink={0}
                flexGrow={0}
              >
                {data.cpf_cnpj}
              </Table.TextCell>
              <Table.TextCell
                width={baseOITableWidth.valor}
                flexBasis={baseOITableWidth.valor}
                flexShrink={0}
                flexGrow={0}
              >
                {data.valor}
              </Table.TextCell>
              <Table.TextCell
                width={baseOITableWidth.area}
                flexBasis={baseOITableWidth.area}
                flexShrink={0}
                flexGrow={0}
              >
                {data.area}
              </Table.TextCell>
              <Table.TextCell
                width={baseOITableWidth.classe_credito}
                flexBasis={baseOITableWidth.classe_credito}
                flexShrink={0}
                flexGrow={0}
              >
                {data.classe_credito}
              </Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
