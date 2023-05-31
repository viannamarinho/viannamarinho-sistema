'use client'

import { useState } from 'react'
import styles from './styles.module.scss'
import { HiOutlineRefresh, HiOutlineFilter } from 'react-icons/hi'

import BaseView from '../BaseView'

import { InputSearch } from '@/components/inputs/InputSearch'
import { ButtonIcon } from '@/components/inputs/ButtonIcon'

import { useBaseDigitalForm } from '@/contexts/BaseDigitalFormContext'

export default function BaseDigitalFormView() {
  const { searchedValue, handleChangeSearch } = useBaseDigitalForm()

  return (
    <div className={styles.admin_view__digital_form}>
      <BaseView
        tableId="base_digital_form"
        viewHeader={
          <BaseDigitalFormViewHeader
            searchedValue={searchedValue}
            handleSearch={handleChangeSearch}
          />
        }
      />
    </div>
  )
}

interface IBaseDigitalFormViewHeaderProps {
  searchedValue: string
  handleSearch: (searchValue: string) => void
}

function BaseDigitalFormViewHeader({
  searchedValue,
  handleSearch
}: IBaseDigitalFormViewHeaderProps) {
  return (
    <>
      <div className={styles.view_digital_form__header__search}>
        <InputSearch
          placeholder="Pesquisar em Base DigitalForm"
          value={searchedValue}
          onChange={handleSearch}
        />
      </div>

      <div className={styles.view_digital_form__header__inputs}>
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
        {/* <span>
          <Button
            label="Criar"
            size="medium"
            onClick={() => console.log('Abrindo modal de criação...')}
          />
        </span> */}
      </div>
    </>
  )
}
