'use client'

import styles from './styles.module.scss'
import { HiOutlineFilter, HiOutlineRefresh } from 'react-icons/hi'

import { InputSearch } from '@/components/inputs/InputSearch'
import { ButtonIcon } from '@/components/inputs/ButtonIcon'
import { TableSearch } from '../../tables/TableSearch'

import { useBaseSearch } from '@/contexts/BaseSearchContext'

export default function SearchView() {
  const { searchedValue, handleChangeSearch, handleSearch } = useBaseSearch()

  return (
    <div className={styles.admin_view__search}>
      <div className={styles.admin_view__search__header}>
        <SearchViewHeader
          searchedValue={searchedValue}
          handleChangeSearch={handleChangeSearch}
          handleSearch={handleSearch}
        />
      </div>
      <div className={styles.admin_view__search__content}>
        <TableSearch />
      </div>
    </div>
  )
}

// ============================================================ SEARCH VIEW HEADER
interface ISearchViewHeaderProps {
  searchedValue: string
  handleChangeSearch: (searchValue: string) => void
  handleSearch: () => void
}

function SearchViewHeader({
  searchedValue,
  handleChangeSearch,
  handleSearch
}: ISearchViewHeaderProps) {
  return (
    <>
      <div className={styles.view_base_search__header__search}>
        <InputSearch
          placeholder="Pesquisar em todas as bases"
          value={searchedValue}
          onChange={handleChangeSearch}
          onClick={handleSearch}
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
