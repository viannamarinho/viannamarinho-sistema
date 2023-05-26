import React, { createContext, useContext, useState } from 'react'

import { ViewsContextData } from './types'

export const ViewsContext = createContext<ViewsContextData>(
  {} as ViewsContextData
)

const ViewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState([])

  return (
    <ViewsContext.Provider
      value={{
        data
      }}
    >
      {children}
    </ViewsContext.Provider>
  )
}

function useViews(): ViewsContextData {
  const context = useContext(ViewsContext)

  if (!context) throw new Error('useViews must be used within a UserProvider')

  return context
}

export { ViewsProvider, useViews }
