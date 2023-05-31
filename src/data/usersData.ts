export const permissionsData = [
  {
    permissionId: 'access_control',
    permissionLabel: 'Controle de Acesso'
  },
  {
    permissionId: 'base_aj',
    permissionLabel: 'Base AJ'
  },
  {
    permissionId: 'base_vma',
    permissionLabel: 'Base VMA'
  },
  {
    permissionId: 'base_oi',
    permissionLabel: 'Base OI'
  },
  {
    permissionId: 'digital_form',
    permissionLabel: 'Formulário Digital'
  }
]

export const accessLevel = [
  {
    accessLevelId: 'level-basic',
    accessLevelIdentifier: 'Sem Permissões',
    accessLevelPermissions: {
      access_control: false,
      base_aj: false,
      base_vma: false,
      base_oi: false,
      digital_form: false
    }
  },
  {
    accessLevelId: 'level-some',
    accessLevelIdentifier: 'Algumas Permissões',
    accessLevelPermissions: {
      access_control: false,
      base_aj: false,
      base_vma: true,
      base_oi: false,
      digital_form: true
    }
  },
  {
    accessLevelId: 'level-all',
    accessLevelIdentifier: 'Todas Permissões',
    accessLevelPermissions: {
      access_control: true,
      base_aj: true,
      base_vma: true,
      base_oi: true,
      digital_form: true
    }
  }
]

export const usersData = [
  {
    userId: 'user-01',
    userName: 'Henrique Garcia',
    userEmail: 'henriquegarcia@gmail.com',
    userPassoword: 'aklsjdlkajsdlka',
    userAccess: accessLevel[0].accessLevelId
  },
  {
    userId: 'user-02',
    userName: 'Roberto',
    userEmail: 'roberto@gmail.com',
    userPassoword: 'aklsjdlkajsdlka',
    userAccess: accessLevel[1].accessLevelId
  },
  {
    userId: 'user-03',
    userName: 'Frederico',
    userEmail: 'frederico@gmail.com',
    userPassoword: 'aklsjdlkajsdlka',
    userAccess: accessLevel[2].accessLevelId
  }
]

export const activeUser = {
  userId: 'user-01',
  userName: 'Henrique Garcia',
  userEmail: 'henriquegarcia@gmail.com',
  userPassoword: 'aklsjdlkajsdlka',
  userAccess: accessLevel[0].accessLevelId
}
