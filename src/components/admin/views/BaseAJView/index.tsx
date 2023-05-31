'use client'

import styles from './styles.module.scss'
import { HiOutlineRefresh, HiOutlineFilter } from 'react-icons/hi'

import BaseView from '../BaseView'

import { InputSearch } from '@/components/inputs/InputSearch'
import { ButtonIcon } from '@/components/inputs/ButtonIcon'

import { useBaseAJ } from '@/contexts/BaseAJContext'

export default function BaseAJView() {
  const { searchedValue, handleChangeSearch, handleSearch } = useBaseAJ()

  return (
    <div className={styles.admin_view__base_aj}>
      <BaseView
        tableId="base_aj"
        viewHeader={
          <BaseAJViewHeader
            searchedValue={searchedValue}
            handleChangeSearch={handleChangeSearch}
            handleSearch={handleSearch}
          />
        }
      />
    </div>
  )
}

// ============================================================ BASE AJ HEADER

interface IBaseAJViewHeaderProps {
  searchedValue: string
  handleChangeSearch: (searchValue: string) => void
  handleSearch: () => void
}

function BaseAJViewHeader({
  searchedValue,
  handleChangeSearch,
  handleSearch
}: IBaseAJViewHeaderProps) {
  return (
    <>
      <div className={styles.view_base_aj__header__search}>
        <InputSearch
          placeholder="Pesquisar em Base AJ"
          value={searchedValue}
          onChange={handleChangeSearch}
          onClick={handleSearch}
        />
      </div>

      <div className={styles.view_base_aj__header__inputs}>
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
