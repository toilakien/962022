import React, { useState } from 'react'
import { Button, Container, Grid, styled } from '@mui/material'
import InputSearch from '../../../components/inputSearch'
import ButtonFilter from '../../../components/buttonFilter'
import DataTable from './CustomerList'
import AddCustomer from './AddCustomer'
import { customerApi } from '../../../fakeApi/apiCustomer'

const Customer = () => {
  const [open, setOpen] = useState<boolean>(false);
  // const customerApi = useSelector(state => state?.customer?.customer);
  const AddBtn = styled(Button)({
    border: "1px solid #ddd",
    height: "35px",
    color: "#111",
  })
  // const getList = async () => {
  //   await dispatch(getAllList());
  // };
  // useEffect(() => {
  //   getList();
  // }, [])
  return (
    <Grid  sx={{ mt: 5, backgroundColor: "#eceff1", p: 5 }}>
      <Grid item sx={{ display: "flex" }}>
        <InputSearch />
        <ButtonFilter />
        <AddBtn onClick={() => setOpen(!open)} variant='outlined'>Thêm khách hàng</AddBtn>
      </Grid>
      <Grid item sx={{ mt: 5 }}>
        <DataTable customerApi={customerApi} />
      </Grid>
      {/* dialog */}
      <AddCustomer open={open} setOpen={setOpen} />
    </Grid>
  )
}

export default Customer;


