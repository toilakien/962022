import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

const Layout = () => {
    return (
        <Grid container flexWrap={'nowrap'} xs={12}>

            <Grid xs={2}>
                <SideBar />
            </Grid>
            <Grid xs={10}>
                <Header />
                {<Outlet />}
            </Grid>
        </Grid>
    )
}

export default Layout