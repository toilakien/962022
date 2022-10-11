import React from 'react'
import { Box, Button, FormControl, Grid, TextField, Typography } from '@mui/material'

const Login = () => {
    return (
        <Grid>
            <Box width={"450px"} sx={{ p: 5, margin: "10% auto", border: "1px solid #ddd", backgroundColor: "#f5f5f5", borderRadius: "15px" }}>
                <Typography textAlign={'center'} variant='h4'> Login</Typography>
                <Box sx={{ p: 5 }}>
                    <TextField variant='outlined' label="Email" margin='normal' fullWidth />
                    <TextField variant='outlined' label="Password" margin='normal' fullWidth />
                    <Button variant='contained' fullWidth sx={{ mt: 2 }}>Đăng nhập</Button>
                </Box>
            </Box>
        </Grid>
    )
}

export default Login