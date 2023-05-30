import styles from '../styles.module.scss'

import { Table } from 'evergreen-ui'

import { Button } from '@/components/inputs/Button'

import { getAccessLevelById } from '@/functions/getAccessLevelById'
import { activeUser } from '@/data/usersData'

export default function MyAccountView() {
  const accessLevel: any = getAccessLevelById(activeUser.userAccess)
  return (
    <>
      <div className={styles.admin_view__settings__panel_header}>
        <span></span>
        <span>
          <Button label="Editar Senha" />
        </span>
      </div>

      <div className={styles.admin_view__settings__panel_content}>
        <Table height="100%">
          <Table.Head height={40}>
            <Table.TextHeaderCell>Nome</Table.TextHeaderCell>
            <Table.TextHeaderCell>E-mail</Table.TextHeaderCell>
            <Table.TextHeaderCell>Nível de Acesso</Table.TextHeaderCell>
            <Table.TextHeaderCell>Senha</Table.TextHeaderCell>
          </Table.Head>
          <Table.Body height={`calc(100% - 40px)`}>
            <Table.Row
              key={activeUser.userId}
              isSelectable
              height={36}
              // onSelect={() => alert(user.userName)}
            >
              <Table.TextCell>{activeUser.userName}</Table.TextCell>
              <Table.TextCell>{activeUser.userEmail}</Table.TextCell>
              <Table.TextCell>
                {accessLevel.accessLevelIdentifier}
              </Table.TextCell>
              <Table.TextCell>{activeUser.userPassoword}</Table.TextCell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  )
}
