'use client'

import { useState } from 'react'
import styles from './styles.module.scss'
import { HiOutlineRefresh, HiOutlineFilter } from 'react-icons/hi'

import BaseView from '../BaseView'

import { InputSearch } from '@/components/inputs/InputSearch'
import { ButtonIcon } from '@/components/inputs/ButtonIcon'

import { useBaseOI } from '@/contexts/BaseOIContext'

export default function BaseOIView() {
  const { searchedValue, handleChangeSearch, handleSearch } = useBaseOI()

  return (
    <div className={styles.admin_view__base_oi}>
      <BaseView
        tableId="base_oi"
        viewHeader={
          <BaseOIViewHeader
            searchedValue={searchedValue}
            handleChangeSearch={handleChangeSearch}
            handleSearch={handleSearch}
          />
        }
      />
    </div>
  )
}

interface IBaseOIViewHeaderProps {
  searchedValue: string
  handleChangeSearch: (searchValue: string) => void
  handleSearch: () => void
}

function BaseOIViewHeader({
  searchedValue,
  handleChangeSearch,
  handleSearch
}: IBaseOIViewHeaderProps) {
  return (
    <>
      <div className={styles.view_base_oi__header__search}>
        <InputSearch
          placeholder="Pesquisar em Base OI"
          value={searchedValue}
          onChange={handleChangeSearch}
          onClick={handleSearch}
        />
      </div>

      <div className={styles.view_base_oi__header__inputs}>
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
