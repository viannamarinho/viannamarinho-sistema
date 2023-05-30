'use client'

import styles from '@/styles/pages/admin/view.module.scss'

import { viewsMainMenuData, viewsSecondaryMenuData } from '@/data/viewsData'
interface Props {
  params: {
    id: string
  }
}

export default async function View({ params }: Props) {
  const getComponentByViewId = (viewId: string) => {
    let mainMenuView
    let secondaryMenuView

    for (const wrapper of viewsMainMenuData) {
      for (const menu of wrapper.viewsWrapperMenus) {
        if (menu.viewPath === viewId) {
          mainMenuView = menu
        }
      }
    }

    for (const menu of viewsSecondaryMenuData) {
      if (menu.viewPath === viewId) {
        secondaryMenuView = menu
      }
    }

    if (mainMenuView) {
      return mainMenuView.viewComponent
    } else if (secondaryMenuView) {
      return secondaryMenuView.viewComponent
    }

    return <div>View not found</div>
  }

  const viewComponent = getComponentByViewId(params.id)

  return <main className={styles.view}>{viewComponent}</main>
}
