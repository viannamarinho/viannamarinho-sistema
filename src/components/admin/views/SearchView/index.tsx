'use client'

import { useState } from 'react'
import styles from './styles.module.scss'
import { HiOutlineFilter, HiOutlineRefresh } from 'react-icons/hi'

import { InputSearch } from '@/components/inputs/InputSearch'
import { ButtonIcon } from '@/components/inputs/ButtonIcon'
import { TableListing } from '../../TableListing'

import { tableData } from '@/data/tableData'

export default function SearchView() {
  const [searchedValue, setSearchedValue] = useState('')

  const handleChangeSearch = (searchValue: string) => {
    setSearchedValue(searchValue)
  }

  return (
    <div className={styles.admin_view__search}>
      <div className={styles.admin_view__search__header}>
        <SearchViewHeader
          searchedValue={searchedValue}
          handleSearch={handleChangeSearch}
        />
      </div>
      <div className={styles.admin_view__search__content}>
        <SearchViewTableList />
      </div>
    </div>
  )
}

// ============================================================ SEARCH VIEW HEADER
interface ISearchViewHeaderProps {
  searchedValue: string
  handleSearch: (searchValue: string) => void
}

function SearchViewHeader({
  searchedValue,
  handleSearch
}: ISearchViewHeaderProps) {
  return (
    <>
      <div className={styles.view_base_search__header__search}>
        <InputSearch
          placeholder="Pesquisar em todas as bases"
          value={searchedValue}
          onChange={handleSearch}
        />
      </div>

      <div className={styles.view_base_search__header__inputs}>
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

// ============================================================ SEARCH VIEW TABLE LIST

function SearchViewTableList() {
  return (
    <>
      <TableListing tableData={tableData} />
    </>
  )
}
