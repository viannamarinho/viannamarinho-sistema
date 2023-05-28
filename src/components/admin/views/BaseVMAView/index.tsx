'use client'

import { useState } from 'react'
import styles from './styles.module.scss'
import { HiOutlineRefresh, HiOutlineFilter } from 'react-icons/hi'

import BaseView from '../BaseView'

import { tableData } from '@/data/tableData'
import { InputSearch } from '@/components/inputs/InputSearch'
import { ButtonIcon } from '@/components/inputs/ButtonIcon'
import { Button } from '@/components/inputs/Button'

export default function BaseVMAView() {
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
          />
        }
      />
    </div>
  )
}

interface IBaseVMAViewHeaderProps {
  searchedValue: string
  handleSearch: (searchValue: string) => void
}

function BaseVMAViewHeader({
  searchedValue,
  handleSearch
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
          <Button
            label="Criar"
            size="medium"
            onClick={() => console.log('Abrindo modal de criação...')}
          />
        </span>
      </div>
    </>
  )
}
