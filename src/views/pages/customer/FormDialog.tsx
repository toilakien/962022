import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

const FormDialog = ({ open, setOpen }: { open: boolean, setOpen: any }) => {
    const handleClick = () => {
        setOpen(!open);
    }
    console.log(open);
    const handleSubmit = () => {

    }
    return (
        <Dialog open={open} onClose={() => setOpen(false)} >
            <DialogTitle align='center' color={'black'}>
                Bạn có chắc chắn xóa không ?
            </DialogTitle>
            <DialogContent>
                <DialogContentText>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleSubmit}
                    color="inherit"
                >
                    Agree
                </Button>
                <Button
                    onClick={handleClick}
                    color="inherit"
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default FormDialog