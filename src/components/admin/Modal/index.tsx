import { styled } from '@mui/material/styles'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    width: '100%',
    maxWidth: '420px'
  },
  '& .MuiDialogContent-root': {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 15,
    padding: '10px 15px 5px 15px !important',
    border: '1px solid transparent'
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root button': {
    width: 'fit-content'
  }
}))

interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

export function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}
