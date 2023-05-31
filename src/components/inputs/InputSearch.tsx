'use client'

import { HiOutlineSearch } from 'react-icons/hi'

import { TextField, Button, InputAdornment } from '@mui/material'
import { styled } from '@mui/material/styles'

interface IputProps {
  label?: string
  placeholder?: string
  isPassword?: boolean
  value: string
  error?: boolean
  helperText?: string
  onChange: (e: any) => void
  onClick: () => void
}

const CustomTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    fontSize: '15px',
    padding: '0 5px 0 10px'
  },
  '& svg': {
    fontSize: '20px'
  }
})

export function InputSearch(props: IputProps) {
  const {
    label = 'Pesquisar',
    placeholder,
    error = false,
    helperText,
    value,
    onChange,
    onClick
  } = props

  return (
    <CustomTextField
      InputProps={{
        // readOnly: true,
        classes: {
          root: 'input_search__input',
          input: 'input_search__input'
        },
        startAdornment: (
          <InputAdornment position="start">
            <HiOutlineSearch />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Button
              variant="outlined"
              size="small"
              sx={{ padding: '7px', fontSize: '13px', lineHeight: '13px' }}
              onClick={onClick}
            >
              Pesquisar
            </Button>
          </InputAdornment>
        )
      }}
      // label={label}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      variant="outlined"
      size="small"
      fullWidth
      value={value}
      onChange={(e: any) => onChange(e.target.value)}
    />
  )
}
