'use client'

import { useState } from 'react'
import styles from './styles.module.scss'

import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]

interface IDataProps {
  valueId: string
  valueLabel: string
}

interface IMultiSelectProps {
  values: IDataProps[]
  activeValue: string[]
  onChange: (value: any) => void
}

export default function MultiSelect({
  values,
  activeValue,
  onChange
}: IMultiSelectProps) {
  const handleChange = (event: SelectChangeEvent<typeof activeValue>) => {
    const {
      target: { value }
    } = event
    onChange(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <FormControl>
      <InputLabel
        shrink
        id="demo-multiple-checkbox-label"
        className="input_label"
      >
        Permissões
      </InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        size="small"
        value={activeValue}
        onChange={handleChange}
        input={<OutlinedInput label="Permissões" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {values?.map((value) => (
          <MenuItem key={value.valueId} value={value.valueId}>
            <Checkbox
              checked={activeValue?.indexOf(value.valueId) > -1}
              size="small"
            />
            <ListItemText primary={value.valueLabel} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
