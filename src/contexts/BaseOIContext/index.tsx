import React, { createContext, useContext, useState } from 'react'

interface BaseOIContextData {
  data?: any
}

interface BaseOIProviderProps {
  children: React.ReactNode
}

export const BaseOIContext = createContext<BaseOIContextData>(
  {} as BaseOIContextData
)

const BaseOIProvider = ({ children }: BaseOIProviderProps) => {
  const [data, setData] = useState([])

  return (
    <BaseOIContext.Provider
      value={{
        data
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
