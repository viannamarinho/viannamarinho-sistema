import React, { createContext, useContext, useState } from 'react'

interface BaseVMAContextData {
  data?: any
}

interface BaseVMAProviderProps {
  children: React.ReactNode
}

export const BaseVMAContext = createContext<BaseVMAContextData>(
  {} as BaseVMAContextData
)

const BaseVMAProvider = ({ children }: BaseVMAProviderProps) => {
  const [data, setData] = useState([])

  return (
    <BaseVMAContext.Provider
      value={{
        data
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
