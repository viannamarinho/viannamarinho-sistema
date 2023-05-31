import React, { createContext, useContext, useMemo, useState } from 'react'

import { baseAJData } from '@/data/bases/baseAJ'

interface BaseAJContextData {
  formattedBaseAJData: any
  searchedValue: string
  handleChangeSearch: (searchValue: string) => void
}

interface BaseAJProviderProps {
  children: React.ReactNode
}

export const BaseAJContext = createContext<BaseAJContextData>(
  {} as BaseAJContextData
)

const BaseAJProvider = ({ children }: BaseAJProviderProps) => {
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

  const formattedBaseAJData = useMemo(() => {
    if (searchedValue !== '') {
      return baseAJData.filter((item) => {
        return Object.values(item).some((value) => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchedValue.toLowerCase())
          }
          return false
        })
      })
    }

    return baseAJData
  }, [searchedValue])

  return (
    <BaseAJContext.Provider
      value={{
        formattedBaseAJData,
        searchedValue,
        handleChangeSearch
      }}
    >
      {children}
    </BaseAJContext.Provider>
  )
}

function useBaseAJ(): BaseAJContextData {
  const context = useContext(BaseAJContext)

  if (!context) throw new Error('useBaseAJ must be used within a UserProvider')

  return context
}

export { BaseAJProvider, useBaseAJ }
