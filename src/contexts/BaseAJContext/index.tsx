import React, { createContext, useContext, useMemo, useState } from 'react'

import { baseAJData } from '@/data/bases/baseAJ'

interface BaseAJContextData {
  currentBaseAJData: any
  searchedValue: string
  handleChangeSearch: (searchValue: string) => void
  handleSearch: () => void
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

  const [currentBaseAJData, setCurrentBaseAJData] = useState(baseAJData)

  const [searchedValue, setSearchedValue] = useState('')

  const handleChangeSearch = (searchValue: string) => {
    setSearchedValue(searchValue)
  }

  const filteredBaseAJData = useMemo(() => {
    return baseAJData.filter((item) => {
      return Object.values(item).some((value) => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(searchedValue.toLowerCase())
        }
        return []
      })
    })
  }, [searchedValue])

  const handleSearch = () => {
    if (searchedValue !== '') {
      setCurrentBaseAJData(filteredBaseAJData)
    } else {
      setCurrentBaseAJData(baseAJData)
    }
  }

  return (
    <BaseAJContext.Provider
      value={{
        currentBaseAJData,
        searchedValue,
        handleChangeSearch,
        handleSearch
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
