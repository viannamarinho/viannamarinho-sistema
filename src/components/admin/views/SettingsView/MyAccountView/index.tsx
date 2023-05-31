'use client'

import { useState } from 'react'
import styles from '../styles.module.scss'

import { Table } from 'evergreen-ui'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

import { Button } from '@/components/inputs/Button'
import { BootstrapDialog, BootstrapDialogTitle } from '@/components/admin/Modal'

import { getAccessLevelById } from '@/functions/getAccessLevelById'
import { activeUser } from '@/data/usersData'
import { Input } from '@/components/inputs/Input'

export default function MyAccountView() {
  const [activeChangePasswordModal, setActiveChangePasswordModal] =
    useState(false)

  const handleChangePassword = () => {
    // FUNÇÃO DE TROCA DE SENHA
  }

  const accessLevel: any = getAccessLevelById(activeUser.userAccess)
  return (
    <>
      <div className={styles.admin_view__settings__panel_content}>
        <Table height="100%">
          <Table.Head height={40}>
            <Table.TextHeaderCell>Nome</Table.TextHeaderCell>
            <Table.TextHeaderCell>E-mail</Table.TextHeaderCell>
            <Table.TextHeaderCell>Nível de Acesso</Table.TextHeaderCell>
            <Table.TextHeaderCell>Senha</Table.TextHeaderCell>
            <div className={styles.admin_view__settings__my_account__header}>
              <Button
                label="Editar Senha"
                onClick={() => setActiveChangePasswordModal(true)}
              />
            </div>
          </Table.Head>
          <Table.Body height={`calc(100% - 40px)`}>
            <Table.Row
              key={activeUser.userId}
              isSelectable
              height={36}
              // onSelect={() => alert(user.userName)}
            >
              <Table.TextCell>{activeUser.userName}</Table.TextCell>
              <Table.TextCell>{activeUser.userEmail}</Table.TextCell>
              <Table.TextCell>
                {accessLevel.accessLevelIdentifier}
              </Table.TextCell>
              <Table.TextCell>
                **************
                {/* {activeUser.userPassoword} */}
              </Table.TextCell>
              <div
                className={styles.admin_view__settings__my_account__header}
              ></div>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <EditPasswordModal
        isActive={activeChangePasswordModal}
        handleClose={() => setActiveChangePasswordModal(false)}
        handleChangePassword={handleChangePassword}
      />
    </>
  )
}

// ==================================================== PERMISSIONS CONFIGS MODAL

interface IEditPasswordModalProps {
  isActive: boolean
  handleClose: () => void
  handleChangePassword?: () => void
}

function EditPasswordModal({
  isActive,
  handleClose,
  handleChangePassword
}: IEditPasswordModalProps) {
  const [newCurrentPasswordValue, setNewCurrentPasswordValue] = useState('')
  const [newNewPasswordValue, setNewNewPasswordValue] = useState('')
  const [newConfirmPasswordValue, setNewConfirmPasswordValue] = useState('')

  const handleChangeCurrentPassword = (value: string) => {
    setNewCurrentPasswordValue(value)
  }

  const handleChangeNewPassword = (value: string) => {
    setNewNewPasswordValue(value)
  }

  const handleChangeConfirmPassword = (value: string) => {
    setNewConfirmPasswordValue(value)
  }

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="permissions-modal"
      open={isActive}
      className={styles.admin_view__settings__modal__permissions}
    >
      <BootstrapDialogTitle id="permissions-modal" onClose={handleClose}>
        Alterar Senha da Conta
      </BootstrapDialogTitle>
      <DialogContent>
        <Input
          inputId="change_password__current"
          isPassword
          label="Senha Atual"
          placeholder="Sua senha atual"
          value={newCurrentPasswordValue}
          onChange={handleChangeCurrentPassword}
        />
        <Input
          inputId="change_password__new"
          isPassword
          label="Nova Senha"
          placeholder="Digite a nova senha"
          value={newNewPasswordValue}
          onChange={handleChangeNewPassword}
        />
        <Input
          inputId="change_password__confirm_new"
          isPassword
          label="Confirmar Nova Senha"
          placeholder="Confirme a nova senha"
          value={newConfirmPasswordValue}
          onChange={handleChangeConfirmPassword}
        />
      </DialogContent>
      <DialogActions>
        <Button label="Cancelar" variant="outlined" onClick={handleClose} />
        <Button label="Confirmar Alteração" onClick={handleChangePassword} />
      </DialogActions>
    </BootstrapDialog>
  )
}
