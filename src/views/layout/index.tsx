import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

const Layout = () => {
    return (
        <div className="app">

            <div>
                <SideBar />
            </div>
            <div>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout