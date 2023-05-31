'use client'

import { useMemo, useState } from 'react'
import styles from '../styles.module.scss'
import { HiOutlinePencilAlt } from 'react-icons/hi'

import { Table } from 'evergreen-ui'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

import { Button } from '@/components/inputs/Button'
import { Input } from '@/components/inputs/Input'
import MultiSelect from '@/components/inputs/MultiSelect'
import { Select } from '@/components/inputs/Select'
import { BootstrapDialog, BootstrapDialogTitle } from '@/components/admin/Modal'
import { ButtonIcon } from '@/components/inputs/ButtonIcon'

import { getAccessLevelById } from '@/functions/getAccessLevelById'
import { accessLevel, permissionsData, usersData } from '@/data/usersData'

export default function AccessControlView() {
  const [isActiveNewUserModal, setIsActiveNewUserModal] = useState(false)
  const [isActivePermissModal, setIsActivePermissModal] = useState(false)

  const [isActiveEditUserModal, setIsActiveEditUserModal] = useState(false)

  const handleCreateUser = () => {
    // FUNÇÃO DE CRIAR USUÁRIO AQUI
  }

  const handleCreatePermission = () => {
    // FUNÇÃO DE CRIAR PERMISSÃO AQUI
  }

  const handleEditUser = () => {
    // FUNÇÃO DE EDITAR USUÁRIO AQUI
  }

  return (
    <>
      <div className={styles.admin_view__settings__panel_content}>
        <Table height="100%">
          <Table.Head height={40} padding={0}>
            <Table.TextHeaderCell>Nome</Table.TextHeaderCell>
            <Table.TextHeaderCell>E-mail</Table.TextHeaderCell>
            <Table.TextHeaderCell>Nível de Acesso</Table.TextHeaderCell>
            <div
              className={styles.admin_view__settings__access_control__header}
            >
              <Button
                label="Novo usuário"
                onClick={() => setIsActiveNewUserModal(true)}
              />
              <Button
                label="Gerenciar Permissões"
                onClick={() => setIsActivePermissModal(true)}
              />
            </div>
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
                  <div
                    className={
                      styles.admin_view__settings__access_control__header
                    }
                  >
                    <span>
                      <ButtonIcon
                        icon={<HiOutlinePencilAlt />}
                        size="small"
                        ariaLabel="Editar Configuração"
                        onClick={() => setIsActiveEditUserModal(true)}
                      />
                    </span>
                  </div>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </div>

      <NewUserModal
        isActive={isActiveNewUserModal}
        handleClose={() => setIsActiveNewUserModal(false)}
        handleCreateUser={handleCreateUser}
      />
      <PermissionsModal
        isActive={isActivePermissModal}
        handleClose={() => setIsActivePermissModal(false)}
        handleCreatePermission={handleCreatePermission}
      />
      <EditUserModal
        isActive={isActiveEditUserModal}
        handleClose={() => setIsActiveEditUserModal(false)}
        handleEditUser={handleEditUser}
      />
    </>
  )
}

// ==================================================== NEW USER MODAL

interface INewUserModalProps {
  isActive: boolean
  handleClose: () => void
  handleCreateUser?: () => void
}

function NewUserModal({
  isActive,
  handleClose,
  handleCreateUser
}: INewUserModalProps) {
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
        <Button label="Cancelar" variant="outlined" onClick={handleClose} />
        <Button label="Cadastrar Usuário" onClick={handleCreateUser} />
      </DialogActions>
    </BootstrapDialog>
  )
}

// ==================================================== PERMISSIONS CONFIGS MODAL

interface IPermissionsModalProps {
  isActive: boolean
  handleClose: () => void
  handleCreatePermission?: () => void
}

function PermissionsModal({
  isActive,
  handleClose,
  handleCreatePermission
}: IPermissionsModalProps) {
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
        <p className={styles.admin_view__settings__modal__label}>
          Criar nova permissão
        </p>
        <span className={styles.admin_view__settings__modal__inputs_wrapper}>
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
          <Button label="Criar Permissão" onClick={handleCreatePermission} />
        </span>

        <p className={styles.admin_view__settings__modal__label}>
          Lista de permissões criadas
        </p>
        <span className={styles.admin_view__settings__modal__inputs_wrapper}>
          <PermissionsList />
        </span>
      </DialogContent>
      <DialogActions>
        <Button label="Concluir" variant="outlined" onClick={handleClose} />
      </DialogActions>
    </BootstrapDialog>
  )
}

// ==================================================== PERMISSIONS LIST

function PermissionsList() {
  return (
    <Table height="100%">
      <Table.Head height={40}>
        <Table.TextHeaderCell>Identificador</Table.TextHeaderCell>
        <Table.TextHeaderCell>Permissões</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={`calc(100% - 40px)`}>
        {accessLevel.map((accessLevel) => {
          return (
            <Table.Row
              key={accessLevel.accessLevelId}
              isSelectable
              height={36}
              // onSelect={() => alert(accessLevel.accessLevelName)}
            >
              <Table.TextCell>
                {accessLevel.accessLevelIdentifier}
              </Table.TextCell>
              <Table.TextCell>{accessLevel.accessLevelId}</Table.TextCell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}

// ==================================================== EDIT USER MODAL

interface IEditUserModalProps {
  isActive: boolean
  handleClose: () => void
  handleEditUser?: () => void
}

function EditUserModal({
  isActive,
  handleClose,
  handleEditUser
}: IEditUserModalProps) {
  const [newUserNameValue, setNewUserNameValue] = useState('')
  const [newUserEmailValue, setNewUserEmailValue] = useState('')
  const [newUserPermissionsValue, setNewUserPermissionsValue] = useState({})

  const handleChangeName = (value: string) => {
    setNewUserNameValue(value)
  }

  const handleChangeEmail = (value: string) => {
    setNewUserEmailValue(value)
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
        Editar Cadastro de Usuário
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
        <Button label="Cancelar" variant="outlined" onClick={handleClose} />
        <Button label="Editar Cadastro" onClick={handleEditUser} />
      </DialogActions>
    </BootstrapDialog>
  )
}
