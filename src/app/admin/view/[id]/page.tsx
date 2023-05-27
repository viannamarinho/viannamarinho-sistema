'use client'

import styles from '@/styles/pages/admin/view.module.scss'

import { viewsMainMenuData, viewsSecondaryMenuData } from '@/data/viewsData'

interface Props {
  params: {
    id: string
  }
}

export default function View({ params }: Props) {
  const getComponentByViewId = (viewId: string) => {
    const mainMenuView = viewsMainMenuData.find(
      (view) => view.viewPath === viewId
    )
    const secondaryMenuView = viewsSecondaryMenuData.find(
      (view) => view.viewPath === viewId
    )

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
