import React, { createContext, useContext, useMemo, useState } from 'react'

import { baseVMAData } from '@/data/bases/baseVMA'

interface BaseVMAContextData {
  formattedBaseVMAData: any
  searchedValue: string
  handleChangeSearch: (searchValue: string) => void
}

interface BaseVMAProviderProps {
  children: React.ReactNode
}

export const BaseVMAContext = createContext<BaseVMAContextData>(
  {} as BaseVMAContextData
)

const BaseVMAProvider = ({ children }: BaseVMAProviderProps) => {
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

  const formattedBaseVMAData = useMemo(() => {
    if (searchedValue !== '') {
      return baseVMAData.filter((item) => {
        return Object.values(item).some((value) => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchedValue.toLowerCase())
          }
          return false
        })
      })
    }

    return baseVMAData
  }, [searchedValue])

  return (
    <BaseVMAContext.Provider
      value={{
        formattedBaseVMAData,
        searchedValue,
        handleChangeSearch
      }}
    >
      {children}
    </BaseVMAContext.Provider>
  )
}

function useBaseVMA(): BaseVMAContextData {
  const context = useContext(BaseVMAContext)

  if (!context) throw new Error('useBaseVMA must be used within a UserProvider')

  return context
}

export { BaseVMAProvider, useBaseVMA }
