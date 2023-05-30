import {
  HiOutlineChartPie,
  HiOutlineDocumentSearch,
  HiOutlineDatabase,
  HiOutlineCog
} from 'react-icons/hi'

import ResumeView from '@/components/admin/views/ResumeView'
import BaseAJView from '@/components/admin/views/BaseAJView'
import BaseOIView from '@/components/admin/views/BaseOIView'
import BaseVMAView from '@/components/admin/views/BaseVMAView'
import BaseDigitalFormView from '@/components/admin/views/DigitalFormView'
import SearchView from '@/components/admin/views/SearchView'
import SettingsView from '@/components/admin/views/SettingsView'

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
        viewLegend:
          'Visão geral dos principais dados e estatísticas da empresa',
        viewIcon: <HiOutlineChartPie />,
        viewComponent: <ResumeView />
      },
      {
        viewId: 'view-search',
        viewPath: 'search',
        viewLabel: 'Busca Completa',
        viewTitle: 'Busca Completa',
        viewLegend: 'Pesquisas detalhadas em toda a base de dados',
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
        viewLegend: 'Base de dados AJ',
        viewIcon: <HiOutlineDatabase />,
        viewComponent: <BaseAJView />
      },
      {
        viewId: 'view-base-vma',
        viewPath: 'base-vma',
        viewLabel: 'Base VMA',
        viewTitle: 'Base VMA',
        viewLegend: 'Base de dados VMA',
        viewIcon: <HiOutlineDatabase />,
        viewComponent: <BaseVMAView />
      },
      {
        viewId: 'view-base-oi',
        viewPath: 'base-oi',
        viewLabel: 'Base OI',
        viewTitle: 'Base OI',
        viewLegend: 'Base de dados OI',
        viewIcon: <HiOutlineDatabase />,
        viewComponent: <BaseOIView />
      },
      {
        viewId: 'view-formulario-digital',
        viewPath: 'formulario-digital',
        viewLabel: 'Formulário Digital',
        viewTitle: 'Formulário Digital',
        viewLegend: 'Base de dados do Formulário Digital',
        viewIcon: <HiOutlineDatabase />,
        viewComponent: <BaseDigitalFormView />
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
    viewLegend:
      'Controle de acesso e personalização das configurações do dashboard',
    viewIcon: <HiOutlineCog />,
    viewComponent: <SettingsView />
  }
]
