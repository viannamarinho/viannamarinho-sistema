'use client'

import styles from './styles.module.scss'

import MenuButton from '@/components/admin/MenuButton'

import { useViews } from '@/contexts/ViewsContext'

import { viewsMainMenuData, viewsSecondaryMenuData } from '@/data/viewsData'

interface IMenuData {
  viewId: string
  viewLabel: string
  viewTitle: string
  viewLegend: string
  viewIcon: JSX.Element
}

export default function Menu() {
  const { activeView, handleChangeActiveView } = useViews()

  return (
    <aside className={styles.admin_menu}>
      <div className={styles.admin_menu__logo}>
        <img src="/logo.png" alt="" />
      </div>
      <div className={styles.admin_menu__wrapper_main}>
        {viewsMainMenuData.map((menu: IMenuData) => (
          <MenuButton
            key={menu.viewId}
            label={menu.viewLabel}
            icon={menu.viewIcon}
            isActive={menu.viewId === activeView}
            onClick={() => handleChangeActiveView(menu.viewId)}
          />
        ))}
      </div>
      <div className={styles.admin_menu__wrapper_secondary}>
        {viewsSecondaryMenuData.map((menu: IMenuData) => (
          <MenuButton
            key={menu.viewId}
            label={menu.viewLabel}
            icon={menu.viewIcon}
            isActive={menu.viewId === activeView}
            onClick={() => handleChangeActiveView(menu.viewId)}
          />
        ))}
      </div>
    </aside>
  )
}
