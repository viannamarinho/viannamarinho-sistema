'use client'

import styles from './styles.module.scss'

import MenuButton from '@/components/admin/MenuButton'

import { useViews } from '@/contexts/ViewsContext'

import { viewsMainMenuData, viewsSecondaryMenuData } from '@/data/viewsData'

interface IMenuData {
  viewId: string
  viewLabel: string
  viewPath: string
  viewTitle: string
  viewLegend: string
  viewIcon: JSX.Element
  viewComponent: React.ReactNode
}

interface IMenuWrapperData {
  viewsWrapperId: string
  viewsWrapperLabel: string
  viewsWrapperMenus: IMenuData[]
}

export default function Menu() {
  const { activeView, handleChangeActiveView } = useViews()

  return (
    <aside className={styles.admin_menu}>
      <div className={styles.admin_menu__logo}>
        <img src="/logo.png" alt="" />
      </div>
      <div className={styles.admin_menu__wrapper_main}>
        {viewsMainMenuData.map((menuWrapper: IMenuWrapperData) => (
          <span
            key={menuWrapper.viewsWrapperId}
            className={styles.admin_menu__wrapper}
          >
            <h3 className={styles.admin_menu__wrapper_label}>
              {menuWrapper.viewsWrapperLabel}
            </h3>
            {menuWrapper.viewsWrapperMenus.map((menu: IMenuData) => (
              <MenuButton
                key={menu.viewId}
                label={menu.viewLabel}
                icon={menu.viewIcon}
                isActive={menu.viewPath === activeView}
                onClick={() => handleChangeActiveView(menu.viewPath)}
              />
            ))}
          </span>
        ))}
      </div>
      <div className={styles.admin_menu__wrapper_secondary}>
        {viewsSecondaryMenuData.map((menu: IMenuData) => (
          <MenuButton
            key={menu.viewId}
            label={menu.viewLabel}
            icon={menu.viewIcon}
            isActive={menu.viewPath === activeView}
            onClick={() => handleChangeActiveView(menu.viewPath)}
          />
        ))}
      </div>
    </aside>
  )
}
