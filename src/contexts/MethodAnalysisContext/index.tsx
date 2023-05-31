import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { baseAJData } from '@/data/bases/baseAJ'

interface MethodAnalysisContextData {
  getBaseAJDataToForm: any
}

interface MethodAnalysisProviderProps {
  children: React.ReactNode
}

export const MethodAnalysisContext = createContext<MethodAnalysisContextData>(
  {} as MethodAnalysisContextData
)

const MethodAnalysisProvider = ({ children }: MethodAnalysisProviderProps) => {
  // const [order, setOrder] = useState<Order>('asc')
  // const [orderBy, setOrderBy] = useState<keyof Data>('calories')
  // const [selected, setSelected] = useState<readonly string[]>([])
  // const [page, setPage] = useState(0)
  // const [dense, setDense] = useState(false)
  // const [rowsPerPage, setRowsPerPage] = useState(5)

  // useEffect(() => {
  //   console.log(currentMethodAnalysisData)
  // }, [currentMethodAnalysisData])

  const getBaseAJDataToForm = useMemo(() => {
    return baseAJData[0]
  }, [])

  return (
    <MethodAnalysisContext.Provider
      value={{
        getBaseAJDataToForm
      }}
    >
      {children}
    </MethodAnalysisContext.Provider>
  )
}

function useMethodAnalysis(): MethodAnalysisContextData {
  const context = useContext(MethodAnalysisContext)

  if (!context)
    throw new Error('useMethodAnalysis must be used within a UserProvider')

  return context
}

export { MethodAnalysisProvider, useMethodAnalysis }
