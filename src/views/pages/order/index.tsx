import React from 'react';
import { Autocomplete, Button, Grid, TextField, Typography } from '@mui/material'
import { useStyles } from '../../../styles/globalSlyles'
import { Stack } from '@mui/system';


const Order = () => {
    const classes = useStyles();
    
    return (
        <Grid container padding={5} sx={{ height: "100vh" }}>
            <Grid xs={12} item padding={2} sx={{ backgroundColor: "#f5f5f5", height: "230px", position: "relative" }}>
                <Stack direction="row" >
                    <Grid container alignItems={'center'} >
                        <p style={{ fontSize: "1rem" }}>Đơn hàng cần xử lý</p>
                        <Autocomplete
                            className={classes.selectOder}
                            renderInput={(params) => <TextField  {...params} />}
                            options={["30 ngày", "50 ngày"]}
                        />
                    </Grid>
                    <Button sx={{ width: "300px", fontSize: "0.8rem" }}>Ẩn đơn hàng cần xử lý</Button>
                </Stack>
                <Stack direction={'row'} >
                    <Button variant='outlined' className={classes.boxItem}>
                        <Typography variant='caption'>Chờ duyệt:0</Typography>
                        <Typography>0</Typography>
                    </Button>
                    <Button variant='outlined' className={classes.boxItem}>
                        <Typography variant='caption'>Chờ duyệt:1</Typography>
                        <Typography>0</Typography>
                    </Button>
                    <Button variant='outlined' className={classes.boxItem}>
                        <Typography variant='caption'>Chờ duyệt:0</Typography>
                        <Typography>0</Typography>
                    </Button>
                    <Button variant='outlined' className={classes.boxItem}>
                        <Typography variant='caption'>Chờ duyệt:1</Typography>
                        <Typography>0</Typography>
                    </Button>
                    <Button variant='outlined' className={classes.boxItem}>
                        <Typography variant='caption'>Chờ duyệt:0</Typography>
                        <Typography>0</Typography>
                    </Button>
                    <Button variant='outlined' className={classes.boxItem}>
                        <Typography variant='caption'>Chờ duyệt:1</Typography>
                        <Typography>0</Typography>
                    </Button>
                </Stack>
            </Grid>
            <Grid xs={12} item >
                
            </Grid>
        </Grid>
    )
}

export default Order