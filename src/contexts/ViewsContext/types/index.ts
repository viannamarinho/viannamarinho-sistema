export interface ViewMenu {
  viewId: string
  viewPath: string
  viewLabel: string
  viewTitle: string
  viewLegend: string
  viewIcon: React.ReactNode
  viewComponent: React.ReactNode
}

export interface ViewsWrapper {
  viewsWrapperId: string
  viewsWrapperLabel: string
  viewsWrapperMenus: ViewMenu[]
}

// Defina o tipo do estado activeViewLabels
export interface ActiveViewLabels {
  viewLabelIcon: React.ReactNode
  viewLabelTitle: string
  viewLabelLegend: string
}

export interface ViewsContextData {
  activeView: string
  handleChangeActiveView: (viewId: string) => void
  activeViewLabels: ActiveViewLabels
}
