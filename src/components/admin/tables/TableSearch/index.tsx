'use client'

import { useState } from 'react'
import styles from './styles.module.scss'
import { HiOutlineSearchCircle } from 'react-icons/hi'

import { Table } from 'evergreen-ui'

import { useBaseSearch } from '@/contexts/BaseSearchContext'
import { Button } from '@/components/inputs/Button'
import { BootstrapDialog, BootstrapDialogTitle } from '../../Modal'
import { DialogActions, DialogContent } from '@mui/material'

export function TableSearch() {
  const { currentBaseSearchData, searchedValue } = useBaseSearch()

  const [isOpenBaseAJModal, setIsOpenBaseAJModal] = useState(false)
  const [isOpenBaseVMAModal, setIsOpenBaseVMAModal] = useState(false)
  const [isOpenBaseOIModal, setIsOpenBaseOIModal] = useState(false)

  const [baseObjectSelected, setBaseObjectSelected] = useState({})

  const handleOpenObjectBaseModal = (baseId: string, object: any) => {
    setBaseObjectSelected(object)
    if (baseId === 'base_aj') {
      setIsOpenBaseAJModal(true)
    } else if (baseId === 'base_vma') {
      setIsOpenBaseVMAModal(true)
    } else if (baseId === 'base_oi') {
      setIsOpenBaseOIModal(true)
    }
  }

  const handleCloseObjectBaseModal = () => {
    setIsOpenBaseAJModal(false)
    setIsOpenBaseVMAModal(false)
    setIsOpenBaseOIModal(false)

    setBaseObjectSelected({})
  }

  return (
    <>
      <div className={styles.table_listing_search}>
        <Table height="100%" width="100%">
          <Table.Head height={60}>
            <Table.TextHeaderCell
              width={480}
              flexBasis={480}
              flexShrink={0}
              flexGrow={0}
            >
              TERMO ENCONTRADO
            </Table.TextHeaderCell>
            <Table.TextHeaderCell
              width={180}
              flexBasis={180}
              flexShrink={0}
              flexGrow={0}
            >
              TERMO ENCONTRADO EM
            </Table.TextHeaderCell>
            <div className={styles.table_listing_search__menu}></div>
          </Table.Head>
          <Table.Body
            width="100%"
            height={`calc(100% - 60px)`}
            overflowY="auto"
            overflowX="hidden"
          >
            {currentBaseSearchData.length === 0 && (
              <div className={styles.table_listing_search__message}>
                <p>
                  Nenhum resultado encontrado, pesquise por um termo na barra de
                  pesquisa acima <HiOutlineSearchCircle />
                </p>
              </div>
            )}
            {currentBaseSearchData.length !== 0 &&
              currentBaseSearchData?.map((data: any) => (
                <Table.Row
                  key={data.id}
                  height={38}
                  isSelectable
                  className={styles.table_listing_search__table_row}
                  // onSelect={() => alert(data.name)}
                >
                  <Table.TextCell
                    width={480}
                    flexBasis={480}
                    flexShrink={0}
                    flexGrow={0}
                  >
                    {data.keyValue}
                  </Table.TextCell>
                  <Table.TextCell
                    width={180}
                    flexBasis={180}
                    flexShrink={0}
                    flexGrow={0}
                  >
                    {data.baseName}
                  </Table.TextCell>
                  <div className={styles.table_listing_search__menu}>
                    <Button
                      label="Visualizar Objeto Completo"
                      onClick={() =>
                        handleOpenObjectBaseModal(data.baseId, data.obj)
                      }
                    />
                  </div>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>

      <ViewBaseAJObjectModal
        isActive={isOpenBaseAJModal}
        handleClose={handleCloseObjectBaseModal}
        selectedObject={baseObjectSelected}
      />
      <ViewBaseVMAObjectModal
        isActive={isOpenBaseVMAModal}
        handleClose={handleCloseObjectBaseModal}
        selectedObject={baseObjectSelected}
      />
      <ViewBaseOIObjectModal
        isActive={isOpenBaseOIModal}
        handleClose={handleCloseObjectBaseModal}
        selectedObject={baseObjectSelected}
      />
    </>
  )
}

// ==================================================== VIEW BASE AJ OBJECT MODAL

interface IViewBaseAJObjectModalProps {
  isActive: boolean
  handleClose: () => void
  selectedObject: any
}

function ViewBaseAJObjectModal({
  isActive,
  handleClose,
  selectedObject
}: IViewBaseAJObjectModalProps) {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="new-user-modal"
      open={isActive}
    >
      <BootstrapDialogTitle id="new-user-modal" onClose={handleClose}>
        Visualizando item da Base AJ
      </BootstrapDialogTitle>
      <DialogContent>
        <div className={styles.table_listing_search__modal__value}>
          <p>Nome do Credor</p>
          <b>{selectedObject.nome_credor}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>CPF ou CNPJ do Credor</p>
          <b>{selectedObject.cpf_cnpj_credor}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Classe de Credor</p>
          <b>{selectedObject.classe}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Moeda</p>
          <b>{selectedObject.moeda}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Valor Pleiteado</p>
          <b>{selectedObject.valor_pleiteado}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Habilitação ou Divergência?</p>
          <b>{selectedObject.hab_ou_div}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>A Origem do Meu Crédito é</p>
          <b>{selectedObject.origem_credito}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Tipo de Crédito</p>
          <b>{selectedObject.tp_credito}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Número do Processo de Origem</p>
          <b>{selectedObject.nr_processo_origem}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Vara</p>
          <b>{selectedObject.vara}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Comarca</p>
          <b>{selectedObject.comarca}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Estado</p>
          <b>{selectedObject.estado}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Fase do Processo</p>
          <b>{selectedObject.fases_processo}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>
            A decisão proferida na impugnação ao cumprimento de sentença
            transitou em julgado?
          </p>
          <b>{selectedObject.decisao_proferida}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>CPF/CNPJ - Lista de Credores Retificada Oi</p>
          <b>{selectedObject.cpf_cnpj_credores_retif_oi}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Classe - Lista de Credores Retificada Oi</p>
          <b>{selectedObject.classe_credores_retif_oi}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Valor do crédito - Lista de Credores Retificada Oi</p>
          <b>{selectedObject.vlr_cdt_credores_retif_oi}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Origem do Crédito Listado</p>
          <b>{selectedObject.origem_credito_listado}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>É o mesmo processo da Lista de Credores Retificada Oi?</p>
          <b>{selectedObject.msm_proc_lt_cred_retif_oi}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Resposta Oi</p>
          <b>{selectedObject.resposta_oi}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Resposta Oi Valor</p>
          <b>{selectedObject.resposta_oi_valor}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Resposta Oi Classe</p>
          <b>{selectedObject.resposta_oi_classe}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Observação Oi</p>
          <b>{selectedObject.obs_oi}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Matéria</p>
          <b>{selectedObject.materia}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Estratégico</p>
          <b>{selectedObject.estrategico}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Parecer Preliminar Wald</p>
          <b>{selectedObject.parecer_prelim_wald}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Observação</p>
          <b>{selectedObject.observacao}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Apto para Cálculo?</p>
          <b>{selectedObject.apto_calculo}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Conclusão K2</p>
          <b>{selectedObject.conclusao_k2}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Orientação para Edital AJ</p>
          <b>{selectedObject.orientacao_edital_aj}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Valor para Edital AJ</p>
          <b>{selectedObject.valor_edital_aj}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Classe para Edital AJ</p>
          <b>{selectedObject.classe_edital_aj}</b>
        </div>
      </DialogContent>
      <DialogActions>
        <Button label="Fechar" variant="outlined" onClick={handleClose} />
      </DialogActions>
    </BootstrapDialog>
  )
}

// ==================================================== VIEW BASE VMA OBJECT MODAL

interface IViewBaseVMAObjectModalProps {
  isActive: boolean
  handleClose: () => void
  selectedObject: any
}

function ViewBaseVMAObjectModal({
  isActive,
  handleClose,
  selectedObject
}: IViewBaseVMAObjectModalProps) {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="new-user-modal"
      open={isActive}
    >
      <BootstrapDialogTitle id="new-user-modal" onClose={handleClose}>
        Visualizando item da Base VMA
      </BootstrapDialogTitle>
      <DialogContent>
        <div className={styles.table_listing_search__modal__value}>
          <p>ID</p>
          <b>{selectedObject.id}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Usuário</p>
          <b>{selectedObject.user}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Data</p>
          <b>{selectedObject.data}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Data AJ</p>
          <b>{selectedObject.data_aj}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Protocolo</p>
          <b>{selectedObject.protocolo}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Nome do Credor</p>
          <b>{selectedObject.nome_credor}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>CPF ou CNPJ do Credor</p>
          <b>{selectedObject.cpf_cnpj}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Classe de Credor</p>
          <b>{selectedObject.classe_credor}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Valor Pleiteado</p>
          <b>{selectedObject.valor_pleiteado}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Habilitação ou Divergência?</p>
          <b>{selectedObject.hab_ou_div_credor}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Número do Processo de Origem</p>
          <b>{selectedObject.nr_processo_origem}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>A Origem do Crédito é</p>
          <b>{selectedObject.origem_credito}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Habilitação ou Divergência?</p>
          <b>{selectedObject.hab_ou_div}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Pasta Intralinks</p>
          <b>{selectedObject.pasta_intralinks}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Área Interna</p>
          <b>{selectedObject.area_interna}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Análise de Mérito</p>
          <b>{selectedObject.analise_merito}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Valor</p>
          <b>{selectedObject.valor}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Clase</p>
          <b>{selectedObject.classe}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Texto Intralinks</p>
          <b>{selectedObject.texto_intralinks}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Justificativa Intralinks</p>
          <b>{selectedObject.justificativa_intralinks}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Documentos</p>
          <b>{selectedObject.documentos}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Pergunta ID</p>
          <b>{selectedObject.pergunta_id}</b>
        </div>
      </DialogContent>
      <DialogActions>
        <Button label="Fechar" variant="outlined" onClick={handleClose} />
      </DialogActions>
    </BootstrapDialog>
  )
}

// ==================================================== VIEW BASE OI OBJECT MODAL

interface IViewBaseOIObjectModalProps {
  isActive: boolean
  handleClose: () => void
  selectedObject: any
}

function ViewBaseOIObjectModal({
  isActive,
  handleClose,
  selectedObject
}: IViewBaseOIObjectModalProps) {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="new-user-modal"
      open={isActive}
    >
      <BootstrapDialogTitle id="new-user-modal" onClose={handleClose}>
        Visualizando item da Base OI
      </BootstrapDialogTitle>
      <DialogContent>
        <div className={styles.table_listing_search__modal__value}>
          <p>ID</p>
          <b>{selectedObject.id_base_proc}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>ID AJ</p>
          <b>{selectedObject.id_aj}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>cont_se</p>
          <b>{selectedObject.cont_se}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>sisjur</p>
          <b>{selectedObject.id_sisjur}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>nr_proc</p>
          <b>{selectedObject.nr_proc}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Vara</p>
          <b>{selectedObject.vara}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Comarca</p>
          <b>{selectedObject.comarca}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Estado</p>
          <b>{selectedObject.estado}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Nome da Razão Social</p>
          <b>{selectedObject.nome_rz_social}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>CPF ou CNPJ</p>
          <b>{selectedObject.cpf_cnpj}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Valor</p>
          <b>{selectedObject.valor}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Área</p>
          <b>{selectedObject.area}</b>
        </div>
        <div className={styles.table_listing_search__modal__value}>
          <p>Classe do Cŕedito</p>
          <b>{selectedObject.classe_credito}</b>
        </div>
      </DialogContent>
      <DialogActions>
        <Button label="Fechar" variant="outlined" onClick={handleClose} />
      </DialogActions>
    </BootstrapDialog>
  )
}
