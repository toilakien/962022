import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
const AddCustomer = ({ open, setOpen }: { open: boolean, setOpen: any }) => {
    console.log(open);
    const handleClose = () => {
        setOpen(!open)
    }
    return (
        <Dialog maxWidth="lg" open={open} onClose={handleClose} sx={{ p: 5 }}>
            <IconButton onClick={handleClose} sx={{ position: "absolute", top: 5, left: "88%", color: "#111", width: "5px", height: "5px", p: 2, border: "1px solid #111" }}>
                <CloseIcon />
            </IconButton>
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
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={["True", "Flase"]}
                    sx={{ width: 300 }}
                    renderInput={(params: any) => <TextField {...params} variant="standard" label="Status" fullWidth margin='normal' />}

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
                <Button variant='contained' fullWidth sx={{ backgroundColor: "#111", "&:hover": { backgroundColor: "#222" } }} >Save</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddCustomer