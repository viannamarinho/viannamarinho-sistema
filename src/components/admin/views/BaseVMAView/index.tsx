'use client'

import styles from './styles.module.scss'
import { HiOutlineRefresh, HiOutlineFilter } from 'react-icons/hi'

import BaseView from '../BaseView'

import { InputSearch } from '@/components/inputs/InputSearch'
import { ButtonIcon } from '@/components/inputs/ButtonIcon'

import { useBaseVMA } from '@/contexts/BaseVMAContext'

export default function BaseVMAView() {
  const { searchedValue, handleChangeSearch, handleSearch } = useBaseVMA()

  return (
    <div className={styles.admin_view__base_vma}>
      <BaseView
        tableId="base_vma"
        viewHeader={
          <BaseVMAViewHeader
            searchedValue={searchedValue}
            handleChangeSearch={handleChangeSearch}
            handleSearch={handleSearch}
          />
        }
      />
    </div>
  )
}

interface IBaseVMAViewHeaderProps {
  searchedValue: string
  handleChangeSearch: (searchValue: string) => void
  handleSearch: () => void
}

function BaseVMAViewHeader({
  searchedValue,
  handleChangeSearch,
  handleSearch
}: IBaseVMAViewHeaderProps) {
  return (
    <>
      <div className={styles.view_base_vma__header__search}>
        <InputSearch
          placeholder="Pesquisar em Base VMA"
          value={searchedValue}
          onChange={handleChangeSearch}
          onClick={handleSearch}
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
      </div>
    </>
  )
}
