'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import { viewsMainMenuData, viewsSecondaryMenuData } from '@/data/viewsData'

import { ViewsContextData } from './types'

export const ViewsContext = createContext<ViewsContextData>(
  {} as ViewsContextData
)

function getLastWordFromPath(path: string) {
  const pathParts = path.split('/')
  const lastWord = pathParts[pathParts.length - 1]
  return lastWord
}

const ADMIN_BASE_URL = '/admin/view/'

const ViewsProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const pathname = usePathname()

  const [activeView, setActiveView] = useState(
    viewsMainMenuData[1].viewsWrapperMenus[0].viewPath
  )

  const handleChangeActiveView = (viewPath: string) => {
    router.push(ADMIN_BASE_URL + viewPath)
  }

  useEffect(() => {
    setActiveView(getLastWordFromPath(pathname))
  }, [router, pathname])

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
