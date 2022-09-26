import React, { useEffect } from 'react'
import { Button, Container, Grid, styled } from '@mui/material'
import InputSearch from '../../../components/inputSearch'
import ButtonFilter from '../../../components/buttonFilter'
import DataTable from './CustomerList'
import { getAllList } from '../../../redux/slice/customer'
import { dispatch, useSelector } from '../../../redux/store'

const Customer = () => {

  const customerApi = useSelector(state => state?.customer?.customer);
  const AddBtn = styled(Button)({
    border: "1px solid #ddd",
    height: "35px",
    color: "#111",
  })
  const getList = async () => {
    await dispatch(getAllList());
  };
  useEffect(() => {
    getList();
  }, [])
  return (
    <Container sx={{ mt: 5, backgroundColor: "#eceff1", p: 5 }}>
      <Grid sx={{ display: "flex" }}>
        <InputSearch />
        <ButtonFilter />
        <AddBtn variant='outlined'>Thêm khách hàng</AddBtn>
      </Grid>
      <Grid sx={{ mt: 5 }}>
        <DataTable customerApi={customerApi} />
      </Grid>
    </Container>
  )
}

export default Customer;

