import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'

const AddCustomer = ({ open, setOpen }: { open: boolean, setOpen: any }) => {
    console.log(open);
    const handleClose = () => {
        setOpen(!open)
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                ADD CUSTOMER
            </DialogTitle>
            <DialogContent>
                <TextField
                    id="name"
                    label="Name"
                    variant='standard'
                    fullWidth
                    margin='normal'
                />
                <TextField
                    id="status"
                    label="Status"
                    variant='standard'
                    fullWidth
                    margin='normal'
                />
                <TextField
                    id="name"
                    label="Name"
                    variant='standard'
                    fullWidth
                    margin='normal'
                />
            </DialogContent>
            <DialogActions>
                <Button variant='contained' fullWidth>Save</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddCustomer