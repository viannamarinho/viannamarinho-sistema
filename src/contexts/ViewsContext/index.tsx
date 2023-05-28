'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import { viewsMainMenuData, viewsSecondaryMenuData } from '@/data/viewsData'

import {
  ViewsContextData,
  ViewMenu,
  ViewsWrapper,
  ActiveViewLabels
} from './types'

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

  const [activeView, setActiveView] = useState(pathname)
  const [activeViewLabels, setActiveViewLabels] = useState<ActiveViewLabels>({
    viewLabelIcon: <></>,
    viewLabelTitle: '',
    viewLabelLegend: ''
  })

  const handleChangeActiveView = (viewPath: string) => {
    router.push(ADMIN_BASE_URL + viewPath)
  }

  useEffect(() => {
    setActiveView(getLastWordFromPath(pathname))
  }, [router, pathname])

  useEffect(() => {
    const settingsPath: ViewMenu = viewsSecondaryMenuData[0]

    if (activeView === settingsPath.viewPath) {
      setActiveViewLabels({
        viewLabelIcon: settingsPath.viewIcon,
        viewLabelTitle: settingsPath.viewTitle,
        viewLabelLegend: settingsPath.viewLegend
      })

      return
    }

    const filteredViews: ViewMenu[] = viewsMainMenuData.flatMap(
      (viewsWrapper: ViewsWrapper) =>
        viewsWrapper.viewsWrapperMenus.filter(
          (viewMenu: ViewMenu) => viewMenu.viewPath === activeView
        )
    )

    if (filteredViews.length > 0) {
      const { viewIcon, viewTitle, viewLegend } = filteredViews[0]

      setActiveViewLabels({
        viewLabelIcon: viewIcon,
        viewLabelTitle: viewTitle,
        viewLabelLegend: viewLegend
      })
    }
  }, [activeView, pathname])

  return (
    <ViewsContext.Provider
      value={{
        activeView,
        handleChangeActiveView,
        activeViewLabels
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
