import React from 'react';
import { Autocomplete, Button, Grid, TextField, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useStyles } from '../../../styles/globalSlyles'


const Order = () => {
    const classes = useStyles();
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,

        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    return (
        <Grid container padding={5} >
            <Grid xs={12} item padding={2} sx={{ backgroundColor: "#f5f5f5" }}>
                <Grid className={classes.flex} xs>
                    <Typography>Đơn hàng cần xử lý</Typography>
                    <Autocomplete className={classes.selectOder} renderInput={(params) => <TextField  {...params} />} options={["30 ngày", "50 ngày"]} />
                    <Button>Ẩn đơn hàng cần xử lý</Button>
                </Grid>
                <Grid className={classes.flex} xs>
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
                </Grid>
            </Grid>
            <Grid xs={12} item>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </Grid>
        </Grid>
    )
}

export default Order