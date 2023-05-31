'use client'

import styles from './styles.module.scss'
import { HiOutlineRefresh, HiOutlineFilter } from 'react-icons/hi'

import BaseView from '../BaseView'

import { InputSearch } from '@/components/inputs/InputSearch'
import { ButtonIcon } from '@/components/inputs/ButtonIcon'

import { useBaseDigitalForm } from '@/contexts/BaseDigitalFormContext'

export default function BaseDigitalFormView() {
  const { searchedValue, handleChangeSearch, handleSearch } =
    useBaseDigitalForm()

  return (
    <div className={styles.admin_view__digital_form}>
      <BaseView
        tableId="base_digital_form"
        viewHeader={
          <BaseDigitalFormViewHeader
            searchedValue={searchedValue}
            handleChangeSearch={handleChangeSearch}
            handleSearch={handleSearch}
          />
        }
      />
    </div>
  )
}

interface IBaseDigitalFormViewHeaderProps {
  searchedValue: string
  handleChangeSearch: (searchValue: string) => void
  handleSearch: () => void
}

function BaseDigitalFormViewHeader({
  searchedValue,
  handleChangeSearch,
  handleSearch
}: IBaseDigitalFormViewHeaderProps) {
  return (
    <>
      <div className={styles.view_digital_form__header__search}>
        <InputSearch
          placeholder="Pesquisar em Base DigitalForm"
          value={searchedValue}
          onChange={handleChangeSearch}
          onClick={handleSearch}
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
      </div>
    </>
  )
}
