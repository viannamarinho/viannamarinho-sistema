import styles from '../styles.module.scss'
import {
  HiOutlinePencilAlt,
  HiOutlineXCircle,
  HiOutlineCheckCircle
} from 'react-icons/hi'

import { Table } from 'evergreen-ui'

import { Button } from '@/components/inputs/Button'
import { ButtonIcon } from '@/components/inputs/ButtonIcon'

import { settingsData } from '@/data/settingsData'
import { InputImage } from '@/components/inputs/InputImage'
import { Input } from '@/components/inputs/Input'
import { useState } from 'react'

export default function GeneralSettingsView() {
  const handleChangeCompanyLogo = () => {
    // FUNÇÃO DE TROCA DA LOGO DA COMPANHIA
  }

  const handleChangeCompanyName = () => {
    // FUNÇÃO DE TROCA DO NOME DA COMPANHIA
  }

  return (
    <>
      <div className={styles.admin_view__settings__panel_content}>
        <Table height="100%">
          <Table.Head height={40}>
            <Table.TextHeaderCell flexBasis={280} flexShrink={0} flexGrow={0}>
              Valor
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>Configuração</Table.TextHeaderCell>
          </Table.Head>
          <Table.Body height={`calc(100% - 40px)`}>
            {settingsData.map((setting) => {
              return (
                <SettingTableRow key={setting.settingId} setting={setting} />
              )
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}

// ======================================================== SETTING ROW

interface ISettingTableRowProps {
  setting: any
}

function SettingTableRow({ setting }: ISettingTableRowProps) {
  const [isOnEditMode, setIsOnEditMode] = useState(false)

  const toogleEditMode = () => setIsOnEditMode(!isOnEditMode)

  const handleConfirmSettingEdition = () => {
    // FUNÇÃO QUE CONFIRMA EDIÇÃO
  }

  const handleCancelSettingEdition = () => {
    // FUNÇÃO QUE CANCELA EDIÇÃO
    setIsOnEditMode(false)
  }

  return (
    <Table.Row
      isSelectable
      height={40}
      // onSelect={() => alert(setting.settingName)}
    >
      <Table.TextCell flexBasis={280} flexShrink={0} flexGrow={0}>
        {setting.settingValue}
      </Table.TextCell>
      <Table.TextCell>{setting.settingLabel}</Table.TextCell>
      <div className={styles.admin_view__settings__general_settings__menu}>
        {isOnEditMode && (
          <>
            <div
              className={
                styles.admin_view__settings__general_settings__edit_input
              }
            >
              <ReturnSettingEditInput inputType={setting.settingType} />
            </div>
            <ButtonIcon
              icon={<HiOutlineXCircle />}
              size="small"
              color="error"
              ariaLabel="Cancelar Edição"
              onClick={handleCancelSettingEdition}
            />

            <ButtonIcon
              icon={<HiOutlineCheckCircle />}
              size="small"
              color="success"
              ariaLabel="Confirmar Edição"
              onClick={handleConfirmSettingEdition}
            />
          </>
        )}
        <ButtonIcon
          icon={<HiOutlinePencilAlt />}
          size="small"
          ariaLabel="Editar Configuração"
          onClick={toogleEditMode}
        />
      </div>
    </Table.Row>
  )
}

// ======================================================== RETURN EDIT INPUT

interface IReturnSettingEditInputProps {
  inputType: string
}

function ReturnSettingEditInput({ inputType }: IReturnSettingEditInputProps) {
  const [inputValue, setInputValue] = useState('')

  const handleChangeInputText = (value: string) => {
    setInputValue(value)
  }

  if (inputType === 'image') {
    return <InputImage />
  }

  return (
    <Input
      placeholder="Teste"
      inputId="Teste"
      value={inputValue}
      onChange={handleChangeInputText}
    />
  )
}
