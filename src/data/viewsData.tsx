import BaseAJView from '@/components/admin/views/BaseAJView'
import ResumeView from '@/components/admin/views/ResumeView'
import SearchView from '@/components/admin/views/SearchView'
import SettingsView from '@/components/admin/views/SettingsView'
import {
  HiOutlineChartPie,
  HiOutlineDocumentSearch,
  HiOutlineDatabase,
  HiOutlineCog
} from 'react-icons/hi'

export const viewsMainMenuData = [
  {
    viewsWrapperId: 'menu-wrapper-main',
    viewsWrapperLabel: 'Principal',
    viewsWrapperMenus: [
      {
        viewId: 'view-resume',
        viewPath: 'resume',
        viewLabel: 'Resumo',
        viewTitle: 'Resumo',
        viewLegend: 'Lorem impsum qua quers koda',
        viewIcon: <HiOutlineChartPie />,
        viewComponent: <ResumeView />
      },
      {
        viewId: 'view-search',
        viewPath: 'search',
        viewLabel: 'Busca Completa',
        viewTitle: 'Busca Completa',
        viewLegend: 'Lorem impsum qua quers koda',
        viewIcon: <HiOutlineDocumentSearch />,
        viewComponent: <SearchView />
      }
    ]
  },
  {
    viewsWrapperId: 'menu-wrapper-data',
    viewsWrapperLabel: 'Dados',
    viewsWrapperMenus: [
      {
        viewId: 'view-base-aj',
        viewPath: 'base-aj',
        viewLabel: 'Base AJ',
        viewTitle: 'Base AJ',
        viewLegend: 'Lorem impsum qua quers koda',
        viewIcon: <HiOutlineDatabase />,
        viewComponent: <BaseAJView />
      },
      {
        viewId: 'view-base-vma',
        viewPath: 'base-vma',
        viewLabel: 'Base VMA',
        viewTitle: 'Base VMA',
        viewLegend: 'Lorem impsum qua quers koda',
        viewIcon: <HiOutlineDatabase />,
        viewComponent: <></>
      },
      {
        viewId: 'view-base-oi',
        viewPath: 'base-oi',
        viewLabel: 'Base OI',
        viewTitle: 'Base OI',
        viewLegend: 'Lorem impsum qua quers koda',
        viewIcon: <HiOutlineDatabase />,
        viewComponent: <></>
      },
      {
        viewId: 'view-formulario-digital',
        viewPath: 'formulario-digital',
        viewLabel: 'Formulário Digital',
        viewTitle: 'Formulário Digital',
        viewLegend: 'Lorem impsum qua quers koda',
        viewIcon: <HiOutlineDatabase />,
        viewComponent: <></>
      }
    ]
  }
]

export const viewsSecondaryMenuData = [
  {
    viewId: 'view-settings',
    viewPath: 'settings',
    viewLabel: 'Configurações',
    viewTitle: 'Configurações',
    viewLegend: 'Lorem impsum qua quers koda',
    viewIcon: <HiOutlineCog />,
    viewComponent: <SettingsView />
  }
]
