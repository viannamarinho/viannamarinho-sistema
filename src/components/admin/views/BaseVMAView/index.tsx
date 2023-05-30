'use client'

import { useState } from 'react'
import styles from './styles.module.scss'
import { HiOutlineRefresh, HiOutlineFilter } from 'react-icons/hi'

import BaseView from '../BaseView'

import { styled } from '@mui/material/styles'
import { InputSearch } from '@/components/inputs/InputSearch'
import { ButtonIcon } from '@/components/inputs/ButtonIcon'
import { Button } from '@/components/inputs/Button'
import { Input } from '@/components/inputs/Input'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import { tableData } from '@/data/tableData'

export default function BaseVMAView() {
  const [isActiveNewUserModal, setIsActiveNewUserModal] = useState(false)
  const [searchedValue, setSearchedValue] = useState('')

  const handleChangeSearch = (searchValue: string) => {
    setSearchedValue(searchValue)
  }

  return (
    <div className={styles.admin_view__base_vma}>
      <BaseView
        tableData={tableData}
        viewHeader={
          <BaseVMAViewHeader
            searchedValue={searchedValue}
            handleSearch={handleChangeSearch}
            handleOpenCreateModal={() => setIsActiveNewUserModal(true)}
          />
        }
      />
      <BaseVMACreateModal
        isActive={isActiveNewUserModal}
        handleClose={() => setIsActiveNewUserModal(false)}
      />
    </div>
  )
}

interface IBaseVMAViewHeaderProps {
  searchedValue: string
  handleSearch: (searchValue: string) => void
  handleOpenCreateModal: () => void
}

function BaseVMAViewHeader({
  searchedValue,
  handleSearch,
  handleOpenCreateModal
}: IBaseVMAViewHeaderProps) {
  return (
    <>
      <div className={styles.view_base_vma__header__search}>
        <InputSearch
          placeholder="Pesquisar em Base VMA"
          value={searchedValue}
          onChange={handleSearch}
        />
      </div>

      <div className={styles.view_base_vma__header__inputs}>
        <ButtonIcon
          icon={<HiOutlineRefresh />}
          size="medium"
          ariaLabel="Recarregar Data"
          onClick={() => console.log('Recarregando...')}
        />
        <ButtonIcon
          icon={<HiOutlineFilter />}
          size="medium"
          ariaLabel="Filtrar Data"
          onClick={() => console.log('Abrindo modal de filtro...')}
        />
        <span>
          <Button label="Criar" size="medium" onClick={handleOpenCreateModal} />
        </span>
      </div>
    </>
  )
}

// =========================================================== BASE VMA FORM

// ==================================================== MODAIS

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    width: '100%',
    maxWidth: '420px'
  },
  '& .MuiDialogContent-root': {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 15,
    padding: '8px 15px'
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root button': {
    width: 'fit-content'
  }
}))

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

// ==================================================== NEW USER MODAL

interface IBaseVMACreateModalProps {
  isActive: boolean
  handleClose: () => void
}

function BaseVMACreateModal({
  isActive,
  handleClose
}: IBaseVMACreateModalProps) {
  const [newUserNameValue, setNewUserNameValue] = useState('')

  const handleChangeName = (value: string) => {
    setNewUserNameValue(value)
  }

  // const formattedPermissions = useMemo(() => {
  //   return accessLevel.map((accessLevel: any) => ({
  //     valueId: accessLevel.accessLevelId,
  //     valueLabel: accessLevel.accessLevelIdentifier
  //   }))
  // }, [])

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="new-user-modal"
      open={isActive}
      className={styles.admin_view__settings__modal__new_user}
    >
      <BootstrapDialogTitle id="new-user-modal" onClose={handleClose}>
        Cadastro de Usuário
      </BootstrapDialogTitle>
      <DialogContent>
        <Input
          inputId="new_uer_input_name"
          label="Nome"
          placeholder="Nome"
          value={newUserNameValue}
          onChange={handleChangeName}
        />
        {/* <Select
          placeholder="Permissões do usuário"
          label="Permissões"
          labelId="user_permissions_select"
          options={formattedPermissions}
          selectedValue={newUserPermissionsValue}
          onChange={handleChangePermissions}
        /> */}
      </DialogContent>
      <DialogActions>
        <Button label="Criar" onClick={handleClose} />
      </DialogActions>
    </BootstrapDialog>
  )
}
