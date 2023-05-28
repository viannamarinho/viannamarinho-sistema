'use client'

import { useState } from 'react'
import styles from './styles.module.scss'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function SettingsView() {
  const [activeTab, setActiveTab] = useState(0)

  const handleChangeActiveTab = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setActiveTab(newValue)
  }

  return (
    <div className={styles.admin_view__settings}>
      <nav className={styles.admin_view__settings__header}>
        <SettingsViewHeader
          activeTab={activeTab}
          setActiveTab={handleChangeActiveTab}
        />
      </nav>
      <nav className={styles.admin_view__settings__content}>
        <TabPanel value={activeTab} index={0}>
          Configurações Gerais
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          Minha Conta
        </TabPanel>
        <TabPanel value={activeTab} index={2}>
          Controle de Acessos
        </TabPanel>
        {/* <TableListing tableData={tableData} /> */}
      </nav>
      {/* POSSIBILIDADE DE IMPLEMENTAR A PAGINAÇÃO AQUI */}
    </div>
  )
}

interface ISettingsViewHeaderProps {
  activeTab: number
  setActiveTab: (event: React.SyntheticEvent, newValue: number) => void
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

function SettingsViewHeader({
  activeTab,
  setActiveTab
}: ISettingsViewHeaderProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          className={styles.tabs_component}
          value={activeTab}
          onChange={setActiveTab}
          aria-label="Listagem de Menus das Configurações"
        >
          <Tab label="Configurações Gerais" {...a11yProps(0)} />
          <Tab label="Minha Conta" {...a11yProps(1)} />
          <Tab label="Controle de Acessos" {...a11yProps(2)} />
        </Tabs>
      </Box>
    </Box>
  )
}
