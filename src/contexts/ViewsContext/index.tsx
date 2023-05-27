'use client'

import React, { createContext, useContext, useState } from 'react'

import { viewsMainMenuData, viewsSecondaryMenuData } from '@/data/viewsData'

import { ViewsContextData } from './types'

export const ViewsContext = createContext<ViewsContextData>(
  {} as ViewsContextData
)

const ViewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeView, setActiveView] = useState(viewsMainMenuData[0].viewId)

  const handleChangeActiveView = (viewId: string) => {
    setActiveView(viewId)
  }

  return (
    <ViewsContext.Provider
      value={{
        activeView,
        handleChangeActiveView
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
