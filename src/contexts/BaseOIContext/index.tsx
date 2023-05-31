import React, { createContext, useContext, useMemo, useState } from 'react'

import { baseOIData } from '@/data/bases/baseOI'

interface BaseOIContextData {
  formattedBaseOIData: any
  searchedValue: string
  handleChangeSearch: (searchValue: string) => void
}

interface BaseOIProviderProps {
  children: React.ReactNode
}

export const BaseOIContext = createContext<BaseOIContextData>(
  {} as BaseOIContextData
)

const BaseOIProvider = ({ children }: BaseOIProviderProps) => {
  // const [order, setOrder] = useState<Order>('asc')
  // const [orderBy, setOrderBy] = useState<keyof Data>('calories')
  // const [selected, setSelected] = useState<readonly string[]>([])
  // const [page, setPage] = useState(0)
  // const [dense, setDense] = useState(false)
  // const [rowsPerPage, setRowsPerPage] = useState(5)

  const [searchedValue, setSearchedValue] = useState('')

  const handleChangeSearch = (searchValue: string) => {
    setSearchedValue(searchValue)
  }

  const formattedBaseOIData = useMemo(() => {
    if (searchedValue !== '') {
      return baseOIData.filter((item) => {
        return Object.values(item).some((value) => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchedValue.toLowerCase())
          }
          return false
        })
      })
    }

    return baseOIData
  }, [searchedValue])

  return (
    <BaseOIContext.Provider
      value={{
        formattedBaseOIData,
        searchedValue,
        handleChangeSearch
      }}
    >
      {children}
    </BaseOIContext.Provider>
  )
}

function useBaseOI(): BaseOIContextData {
  const context = useContext(BaseOIContext)

  if (!context) throw new Error('useBaseOI must be used within a UserProvider')

  return context
}

export { BaseOIProvider, useBaseOI }
