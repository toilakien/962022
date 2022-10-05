import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

const Layout = () => {
    const [status, setStatus] = useState<boolean>(false)
    return (
        <Grid container flexWrap={'nowrap'}>
            <Grid item xs={status === false ? 2 : 1}>
                <SideBar status={status} setStatus={setStatus} />
            </Grid>
            <Grid item xs={status === false ? 10 : 11}>
                <Header />
                {<Outlet />}
            </Grid>
        </Grid>
    )
}

export default Layout