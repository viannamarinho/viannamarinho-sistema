'use client'

import { useMemo, useState } from 'react'
import styles from './styles.module.scss'

import { Table } from 'evergreen-ui'

import { useBaseAJ } from '@/contexts/BaseAJContext'

export function TableAJ() {
  const { formattedBaseAJData } = useBaseAJ()

  return (
    <div className={styles.table_listing_aj}>
      <Table height="100%" width="fit-content">
        <Table.Head height={60}>
          <Table.TextHeaderCell>Nome do Credor</Table.TextHeaderCell>
          <Table.TextHeaderCell>CPF ou CNPJ do Credor</Table.TextHeaderCell>
          <Table.TextHeaderCell>Classe de Credor</Table.TextHeaderCell>
          <Table.TextHeaderCell>Moeda</Table.TextHeaderCell>
          <Table.TextHeaderCell>Informe o Valor Pleiteado</Table.TextHeaderCell>
          <Table.TextHeaderCell>
            Habilitação ou Divergência?
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>A Origem do Meu Crédito é</Table.TextHeaderCell>
          <Table.TextHeaderCell>Tipo de Crédito</Table.TextHeaderCell>
          <Table.TextHeaderCell>
            Número do Processo de Origem
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>Vara</Table.TextHeaderCell>
          <Table.TextHeaderCell>Comarca</Table.TextHeaderCell>
          <Table.TextHeaderCell>Estado</Table.TextHeaderCell>
          <Table.TextHeaderCell>Fase do Processo</Table.TextHeaderCell>
          <Table.TextHeaderCell>
            A decisão proferida na impugnação ao cumprimento de sentença
            transitou em julgado?
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>
            CPF/CNPJ - Lista de Credores Retificada Oi
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>
            Classe - Lista de Credores Retificada Oi
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>
            Valor do crédito - Lista de Credores Retificada Oi
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>Origem do Crédito Listado</Table.TextHeaderCell>
          <Table.TextHeaderCell>
            É o mesmo processo da Lista de Credores Retificada Oi?
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>Resposta Oi</Table.TextHeaderCell>
          <Table.TextHeaderCell>Resposta Oi Valor</Table.TextHeaderCell>
          <Table.TextHeaderCell>Resposta Oi Classe</Table.TextHeaderCell>
          <Table.TextHeaderCell>Observação Oi</Table.TextHeaderCell>
          <Table.TextHeaderCell>Matéria</Table.TextHeaderCell>
          <Table.TextHeaderCell>Estratégico</Table.TextHeaderCell>
          <Table.TextHeaderCell>Parecer Preliminar Wald</Table.TextHeaderCell>
          {/* <Table.TextHeaderCell>Tem certidão de crédito</Table.TextHeaderCell>
          <Table.TextHeaderCell>Data certidão de crédito</Table.TextHeaderCell> */}
          <Table.TextHeaderCell>Observação</Table.TextHeaderCell>
          <Table.TextHeaderCell>Apto para Cálculo?</Table.TextHeaderCell>
          <Table.TextHeaderCell>Conclusão K2</Table.TextHeaderCell>
          <Table.TextHeaderCell>Orientação para Edital AJ</Table.TextHeaderCell>
          <Table.TextHeaderCell>Valor para Edital AJ</Table.TextHeaderCell>
          <Table.TextHeaderCell>Classe para Edital AJ</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={`calc(100% - 60px)`} overflow="auto">
          {formattedBaseAJData?.map((data: any) => (
            <Table.Row
              key={data.id}
              height={38}
              isSelectable
              // onSelect={() => alert(data.name)}
            >
              <Table.TextCell>{data.nome_credor}</Table.TextCell>
              <Table.TextCell>{data.cpf_cnpj_credor}</Table.TextCell>
              <Table.TextCell>{data.classe}</Table.TextCell>
              <Table.TextCell>{data.moeda}</Table.TextCell>
              <Table.TextCell>{data.valor_pleiteado}</Table.TextCell>
              <Table.TextCell>{data.hab_ou_div}</Table.TextCell>
              <Table.TextCell>{data.origem_credito}</Table.TextCell>
              <Table.TextCell>{data.tp_credito}</Table.TextCell>
              <Table.TextCell>{data.nr_processo_origem}</Table.TextCell>
              <Table.TextCell>{data.vara}</Table.TextCell>
              <Table.TextCell>{data.comarca}</Table.TextCell>
              <Table.TextCell>{data.estado}</Table.TextCell>
              <Table.TextCell>{data.fases_processo}</Table.TextCell>
              <Table.TextCell>{data.decisao_proferida}</Table.TextCell>
              <Table.TextCell>{data.cpf_cnpj_credores_retif_oi}</Table.TextCell>
              <Table.TextCell>{data.classe_credores_retif_oi}</Table.TextCell>
              <Table.TextCell>{data.vlr_cdt_credores_retif_oi}</Table.TextCell>
              <Table.TextCell>{data.origem_credito_listado}</Table.TextCell>
              <Table.TextCell>{data.msm_proc_lt_cred_retif_oi}</Table.TextCell>
              <Table.TextCell>{data.resposta_oi}</Table.TextCell>
              <Table.TextCell>{data.resposta_oi_valor}</Table.TextCell>
              <Table.TextCell>{data.resposta_oi_classe}</Table.TextCell>
              <Table.TextCell>{data.obs_oi}</Table.TextCell>
              <Table.TextCell>{data.materia}</Table.TextCell>
              <Table.TextCell>{data.estrategico}</Table.TextCell>
              <Table.TextCell>{data.parecer_prelim_wald}</Table.TextCell>
              {/* <Table.TextCell>{data.name}</Table.TextCell>
              <Table.TextCell>{data.name}</Table.TextCell> */}
              <Table.TextCell>{data.observacao}</Table.TextCell>
              <Table.TextCell>{data.apto_calculo}</Table.TextCell>
              <Table.TextCell>{data.conclusao_k2}</Table.TextCell>
              <Table.TextCell>{data.orientacao_edital_aj}</Table.TextCell>
              <Table.TextCell>{data.valor_edital_aj}</Table.TextCell>
              <Table.TextCell>{data.classe_edital_aj}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
