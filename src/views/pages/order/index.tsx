import React from 'react'
import Container from '@mui/material/Container'
import Table from '../../../components/table'
import { Button, Grid, styled } from '@mui/material';
import ButtonFilter from '../../../components/buttonFilter';
import InputSearch from '../../../components/inputSearch';

const Order = () => {
    const columns = ["STT", "Name", "Code", "Status", "Create_at", "Update_at", "Tools"];
    const rows = [
        {
            name: "DIVISION 1",
            code: "No code",
            status: true,
            create_at: "7/9/2001",
            update_at: "10/9/2001"
        },
        {
            name: "DIVISION 1",
            code: "No code",
            status: true,
            create_at: "7/9/2001",
            update_at: "10/9/2001"
        },
        {
            name: "DIVISION 1",
            code: "No code",
            status: true,
            create_at: "7/9/2001",
            update_at: "10/9/2001"
        },
        {
            name: "DIVISION 1",
            code: "No code",
            status: true,
            create_at: "7/9/2001",
            update_at: "10/9/2001"
        },
        {
            name: "DIVISION 1",
            code: "No code",
            status: true,
            create_at: "7/9/2001",
            update_at: "10/9/2001"
        },
        {
            name: "DIVISION 2",
            code: "code",
            status: true,
            create_at: "7/9/2001",
            update_at: "10/9/2001"
        },
        {
            name: "DIVISION 1",
            code: "No code",
            status: true,
            create_at: "7/9/2001",
            update_at: "10/9/2001"
        },
        {
            name: "DIVISION 1",
            code: "No code",
            status: true,
            create_at: "7/9/2001",
            update_at: "10/9/2001"
        }
    ];
    const AddBtn = styled(Button)({
        border: "1px solid #ddd",
        height: "35px",
        color: "#111",
    })
    return (
        <Container sx={{ backgroundColor: "#f5f5f5", p: 5, mt: 2 }}>
            <Grid sx={{ display: "flex" }}>
                <InputSearch />
                <ButtonFilter />
                <AddBtn variant='outlined'>Thêm khách hàng</AddBtn>
            </Grid>
            <Grid sx={{mt:5 }}>
            <Table columns={columns} rows={rows} />
            </Grid>
        </Container>

    )
}

export default Order