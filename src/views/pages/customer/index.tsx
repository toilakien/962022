import React from 'react'
import { Button, Container, Grid, styled } from '@mui/material'
import InputSearch from '../../../components/inputSearch'
import ButtonFilter from '../../../components/buttonFilter'
import DataTable from './CustomerList'

const Customer = () => {

  console.log(1111);
  
  const AddBtn = styled(Button)({
    border: "1px solid #ddd",
    height: "35px",
    color: "#111",
  })
  return (
    <Container sx={{ mt: 5, backgroundColor: "#eceff1", p: 5 }}>
      <Grid sx={{ display: "flex" }}>
        <InputSearch />
        <ButtonFilter />
        <AddBtn variant='outlined'>Thêm khách hàng</AddBtn>
      </Grid>
      <Grid sx={{ mt: 5 }}>
        <DataTable />
      </Grid>
    </Container>
  )
}

export default Customer;