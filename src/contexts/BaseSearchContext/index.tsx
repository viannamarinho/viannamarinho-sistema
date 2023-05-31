import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { baseAJData } from '@/data/bases/baseAJ'
import { baseVMAData } from '@/data/bases/baseVMA'
import { baseOIData } from '@/data/bases/baseOI'
import { baseDigitalFormData } from '@/data/bases/baseDigitalForm'

interface BaseSearchContextData {
  currentBaseSearchData: any
  searchedValue: string
  handleChangeSearch: (searchValue: string) => void
  handleSearch: () => void
}

interface BaseSearchProviderProps {
  children: React.ReactNode
}

interface ObjectItem {
  id: number
  [key: string]: string | number
}

interface SearchResultItem {
  id: number
  baseId: string
  obj: ObjectItem
  keyValue: string
  baseName: string
}

export const BaseSearchContext = createContext<BaseSearchContextData>(
  {} as BaseSearchContextData
)

const BaseSearchProvider = ({ children }: BaseSearchProviderProps) => {
  // const [order, setOrder] = useState<Order>('asc')
  // const [orderBy, setOrderBy] = useState<keyof Data>('calories')
  // const [selected, setSelected] = useState<readonly string[]>([])
  // const [page, setPage] = useState(0)
  // const [dense, setDense] = useState(false)
  // const [rowsPerPage, setRowsPerPage] = useState(5)

  const [currentBaseSearchData, setCurrentBaseSearchData] = useState<
    SearchResultItem[]
  >([])

  const [searchedValue, setSearchedValue] = useState('')

  const handleChangeSearch = (searchValue: string) => {
    setSearchedValue(searchValue)
  }

  const searchResult = useMemo(() => {
    const result: SearchResultItem[] = []

    baseAJData.filter((obj: any) => {
      for (const key in obj) {
        if (
          typeof obj[key] === 'string' &&
          obj[key].toLowerCase().includes(searchedValue.toLowerCase())
        ) {
          const randomId = Math.floor(Math.random() * 1000)
          result.push({
            id: randomId,
            baseId: 'base_aj',
            obj,
            keyValue: obj[key],
            baseName: 'Base AJ'
          })
          return true
        }
      }
      return false
    })

    baseVMAData.filter((obj: any) => {
      for (const key in obj) {
        if (
          typeof obj[key] === 'string' &&
          obj[key].toLowerCase().includes(searchedValue.toLowerCase())
        ) {
          const randomId = Math.floor(Math.random() * 1000)
          result.push({
            id: randomId,
            baseId: 'base_vma',
            obj,
            keyValue: obj[key],
            baseName: 'Base VMA'
          })
          return true
        }
      }
      return false
    })

    baseOIData.filter((obj: any) => {
      for (const key in obj) {
        if (
          typeof obj[key] === 'string' &&
          obj[key].toLowerCase().includes(searchedValue.toLowerCase())
        ) {
          const randomId = Math.floor(Math.random() * 1000)
          result.push({
            id: randomId,
            baseId: 'base_oi',
            obj,
            keyValue: obj[key],
            baseName: 'Base OI'
          })
          return true
        }
      }
      return false
    })

    return result
  }, [searchedValue])

  const handleSearch = () => {
    if (searchedValue !== '') {
      setCurrentBaseSearchData(searchResult)
    } else {
      setCurrentBaseSearchData([])
    }
  }

  // useEffect(() => {
  //   console.log(currentBaseSearchData)
  // }, [currentBaseSearchData])

  return (
    <BaseSearchContext.Provider
      value={{
        currentBaseSearchData,
        searchedValue,
        handleChangeSearch,
        handleSearch
      }}
    >
      {children}
    </BaseSearchContext.Provider>
  )
}

function useBaseSearch(): BaseSearchContextData {
  const context = useContext(BaseSearchContext)

  if (!context)
    throw new Error('useBaseSearch must be used within a UserProvider')

  return context
}

export { BaseSearchProvider, useBaseSearch }
