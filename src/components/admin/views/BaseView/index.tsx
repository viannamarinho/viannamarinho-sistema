'use client'

import { useState } from 'react'
import styles from './styles.module.scss'

import { InputSearch } from '@/components/inputs/InputSearch'
import { TableListing } from '../../TableListing'

interface IBaseViewProps {
  baseId: string
}

export default function BaseView({ baseId }: IBaseViewProps) {
  const [searchedValue, setSearchedValue] = useState('')

  const handleChangeSearch = (searchValue: string) => {
    setSearchedValue(searchValue)
  }

  return (
    <div className={styles.admin_view__base}>
      <nav className="view__header">
        <div className="view__header__search">
          <InputSearch
            placeholder="Pesquisar em Base AJ"
            value={searchedValue}
            onChange={handleChangeSearch}
          />
        </div>
      </nav>
      <nav className="view__content">{/* <TableListing /> */}</nav>
    </div>
  )
}
