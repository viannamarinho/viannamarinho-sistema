import React, { createContext, useContext, useState } from 'react'

interface BaseDigitalFormContextData {
  data?: any
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
  const [data, setData] = useState([])

  return (
    <BaseDigitalFormContext.Provider
      value={{
        data
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
