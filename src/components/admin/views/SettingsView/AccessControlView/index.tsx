'use client'

import { useMemo, useState } from 'react'
import styles from '../styles.module.scss'

import { Table } from 'evergreen-ui'

import { Button } from '@/components/inputs/Button'

// import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'

import { getAccessLevelById } from '@/functions/getAccessLevelById'
import { accessLevel, permissionsData, usersData } from '@/data/usersData'
import { Input } from '@/components/inputs/Input'
import MultiSelect from '@/components/inputs/MultiSelect'
import { Select } from '@/components/inputs/Select'

export default function AccessControlView() {
  const [isActiveNewUserModal, setIsActiveNewUserModal] = useState(false)
  const [isActivePermissModal, setIsActivePermissModal] = useState(false)

  return (
    <>
      <div className={styles.admin_view__settings__panel_header}>
        <span></span>
        <span>
          <Button
            label="Novo usuário"
            onClick={() => setIsActiveNewUserModal(true)}
          />
          <Button
            label="Gerenciar Permissões"
            onClick={() => setIsActivePermissModal(true)}
          />
        </span>
      </div>

      <div className={styles.admin_view__settings__panel_content}>
        <Table height="100%">
          <Table.Head height={40}>
            <Table.TextHeaderCell>Nome</Table.TextHeaderCell>
            <Table.TextHeaderCell>E-mail</Table.TextHeaderCell>
            <Table.TextHeaderCell>Nível de Acesso</Table.TextHeaderCell>
          </Table.Head>
          <Table.Body height={`calc(100% - 40px)`}>
            {usersData.map((user) => {
              const accessLevel: any = getAccessLevelById(user.userAccess)
              return (
                <Table.Row
                  key={user.userId}
                  isSelectable
                  height={36}
                  // onSelect={() => alert(user.userName)}
                >
                  <Table.TextCell>{user.userName}</Table.TextCell>
                  <Table.TextCell>{user.userEmail}</Table.TextCell>
                  <Table.TextCell>
                    {accessLevel.accessLevelIdentifier}
                  </Table.TextCell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </div>

      <NewUserModal
        isActive={isActiveNewUserModal}
        handleClose={() => setIsActiveNewUserModal(false)}
      />
      <PermissionsModal
        isActive={isActivePermissModal}
        handleClose={() => setIsActivePermissModal(false)}
      />
    </>
  )
}

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

interface INewUserModalProps {
  isActive: boolean
  handleClose: () => void
}

function NewUserModal({ isActive, handleClose }: INewUserModalProps) {
  const [newUserNameValue, setNewUserNameValue] = useState('')
  const [newUserEmailValue, setNewUserEmailValue] = useState('')
  const [newUserPasswordValue, setNewUserPasswordValue] = useState('')
  const [newUserPermissionsValue, setNewUserPermissionsValue] = useState({})

  const handleChangeName = (value: string) => {
    setNewUserNameValue(value)
  }

  const handleChangeEmail = (value: string) => {
    setNewUserEmailValue(value)
  }

  const handleChangePassword = (value: string) => {
    setNewUserPasswordValue(value)
  }

  const handleChangePermissions = (value: any) => {
    setNewUserPermissionsValue(value)
  }

  const formattedPermissions = useMemo(() => {
    return accessLevel.map((accessLevel: any) => ({
      valueId: accessLevel.accessLevelId,
      valueLabel: accessLevel.accessLevelIdentifier
    }))
  }, [])

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
        <Input
          inputId="new_uer_input_email"
          label="E-mail"
          placeholder="E-mail"
          value={newUserEmailValue}
          onChange={handleChangeEmail}
        />
        <Input
          inputId="new_uer_input_password"
          isPassword
          label="Senha"
          placeholder="Senha"
          value={newUserPasswordValue}
          onChange={handleChangePassword}
        />
        <Select
          placeholder="Permissões do usuário"
          label="Permissões"
          labelId="user_permissions_select"
          options={formattedPermissions}
          selectedValue={newUserPermissionsValue}
          onChange={handleChangePermissions}
        />
      </DialogContent>
      <DialogActions>
        <Button label="Criar" onClick={handleClose} />
      </DialogActions>
    </BootstrapDialog>
  )
}

// ==================================================== PERMISSIONS CONFIGS MODAL

interface IPermissionsModalProps {
  isActive: boolean
  handleClose: () => void
}

function PermissionsModal({ isActive, handleClose }: IPermissionsModalProps) {
  const [newIdentifierValue, setNewIdentifierValue] = useState('')
  const [newPermissionsValue, setNewPermissionsValue] = useState([])

  const handleChangeIdentifier = (value: string) => {
    setNewIdentifierValue(value)
  }

  const handleChangePermissions = (value: any) => {
    setNewPermissionsValue(value)
  }

  const formattedPermissions = useMemo(() => {
    return permissionsData.map((permission: any) => ({
      valueId: permission.permissionId,
      valueLabel: permission.permissionLabel
    }))
  }, [])

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="permissions-modal"
      open={isActive}
      className={styles.admin_view__settings__modal__permissions}
    >
      <BootstrapDialogTitle id="permissions-modal" onClose={handleClose}>
        Gerenciar Permissões
      </BootstrapDialogTitle>
      <DialogContent>
        <Input
          inputId="permissions_input_identifier"
          label="Identificador"
          placeholder="Ex. Administrador"
          value={newIdentifierValue}
          onChange={handleChangeIdentifier}
        />
        <MultiSelect
          activeValue={newPermissionsValue}
          values={formattedPermissions}
          onChange={handleChangePermissions}
        />
      </DialogContent>
      <DialogActions>
        <Button label="Salvar" onClick={handleClose} />
      </DialogActions>
    </BootstrapDialog>
  )
}
