import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
const AddCustomer = ({ open, setOpen }: { open: boolean, setOpen: any }) => {
    console.log(open);
    const handleClose = () => {
        setOpen(!open)
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            status: 'true'
        },
        onSubmit: values => {
            console.log(values);

        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
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
                        name='name'
                        label="Name"
                        variant='standard'
                        fullWidth
                        margin='normal'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    <Autocomplete
                        disablePortal
                        id="status"
                        options={['true', 'false']}
                        sx={{ width: 300, marginBottom: "30px" }}
                        renderInput={(params: any) => <TextField {...params} variant="standard" label="Status" fullWidth margin='normal' />}
                        value={formik.values.status}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' fullWidth sx={{ backgroundColor: "#111", "&:hover": { backgroundColor: "#222" } }} >Save</Button>
                </DialogActions>
            </Dialog>
        </form>
    )
}

export default AddCustomer