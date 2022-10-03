import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

const Layout = () => {
    return (
        <Grid container flexWrap={'nowrap'}>
            <Grid item xs={2}>
                <SideBar />
            </Grid>
            <Grid item xs={10}>
                <Header />
                
                {<Outlet />}
            </Grid>
        </Grid>
    )
}

export default Layout