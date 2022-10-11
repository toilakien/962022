import { AlertTitle, Avatar, Box, FormGroup, Grid, ListItemAvatar, ListItemButton, Paper, Table, TableCell, TableRow, TextField, Typography } from '@mui/material'
import React from 'react'

const TabProfile = () => {
    return (
        <Grid container sx={{ border: "1px solid #ddd", backgroundColor: "#cccc", height: "calc(100vh - 280px )" }}>
            <Grid xs={4} >
                <ListItemAvatar sx={{ position: "relative", left: "30%" }}>
                    <Avatar sx={{ width: "100px", height: "100px" }} alt='avata' src='https://static.remove.bg/remove-bg-web/bf2ec228bc55da2aaa8a6978c6fe13e205c3849c/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' />
                    <Typography>Kiên</Typography>
                </ListItemAvatar>
                <Box>
                    <ListItemButton>
                        Basic info
                    </ListItemButton>
                    <ListItemButton>
                        Infomation key
                    </ListItemButton>
                    <ListItemButton>
                        Public acount
                    </ListItemButton>
                </Box>
            </Grid>
            <Grid xs={8}>
                <Paper>
                    <Typography variant='h5' sx={{ ml: 2, mt: 5 }}>Basic info</Typography>
                    <Table>
                        <TableRow>
                            <TableCell>
                                <FormGroup >
                                    <Typography variant='caption'>Email</Typography>
                                    <TextField label="Email" size='small' fullWidth disabled />
                                </FormGroup>
                            </TableCell>
                            <TableCell>
                                <FormGroup >
                                    <Typography variant='caption'>Name</Typography>
                                    <TextField label="Name" size='small' fullWidth disabled />
                                </FormGroup>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <FormGroup >
                                    <Typography variant='caption'>Gender</Typography>
                                    <TextField label="Nam" size='small' fullWidth disabled />
                                </FormGroup>
                            </TableCell>
                            <TableCell>
                                <FormGroup >
                                    <Typography variant='caption'>Status</Typography>
                                    <TextField label="Active" size='small' fullWidth disabled />
                                </FormGroup>
                            </TableCell>
                        </TableRow>
                    </Table>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default TabProfile