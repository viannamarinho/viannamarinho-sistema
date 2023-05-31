import React, { createContext, useContext, useMemo, useState } from 'react'

import { baseDigitalFormData } from '@/data/bases/baseDigitalForm'

interface BaseDigitalFormContextData {
  formattedBaseDigitalFormData: any
  searchedValue: string
  handleChangeSearch: (searchValue: string) => void
}

interface BaseDigitalFormProviderProps {
  children: React.ReactNode
}

export const BaseDigitalFormContext = createContext<BaseDigitalFormContextData>(
  {} as BaseDigitalFormContextData
)

const BaseDigitalFormProvider = ({
  children
}: BaseDigitalFormProviderProps) => {
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

  const formattedBaseDigitalFormData = useMemo(() => {
    if (searchedValue !== '') {
      return baseDigitalFormData.filter((item) => {
        return Object.values(item).some((value) => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchedValue.toLowerCase())
          }
          return false
        })
      })
    }

    return baseDigitalFormData
  }, [searchedValue])

  return (
    <BaseDigitalFormContext.Provider
      value={{
        formattedBaseDigitalFormData,
        searchedValue,
        handleChangeSearch
      }}
    >
      {children}
    </BaseDigitalFormContext.Provider>
  )
}

function useBaseDigitalForm(): BaseDigitalFormContextData {
  const context = useContext(BaseDigitalFormContext)

  if (!context)
    throw new Error('useBaseDigitalForm must be used within a UserProvider')

  return context
}

export { BaseDigitalFormProvider, useBaseDigitalForm }
