import React, { createContext, useContext, useMemo, useState } from 'react'

import { baseAJData } from '@/data/bases/baseAJ'

interface BaseAJContextData {
  formattedBaseAJData?: any
}

interface BaseAJProviderProps {
  children: React.ReactNode
}

export const BaseAJContext = createContext<BaseAJContextData>(
  {} as BaseAJContextData
)

const BaseAJProvider = ({ children }: BaseAJProviderProps) => {
  // const [data, setData] = useState([])

  const formattedBaseAJData = useMemo(() => {
    return baseAJData
  }, [])

  return (
    <BaseAJContext.Provider
      value={{
        formattedBaseAJData
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
