import { Box,Avatar, styled } from '@mui/material'
import React from 'react'
import image from '../../resource/image/logo.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Logo = () => {
    const LogoWrapper=styled(Box)({
        backgroundColor:"#111",
        height:"80px",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        maxWidth:"100%"
    })
  return (
    <LogoWrapper>
        <Avatar sx={{width:"80px",height:"60px",ml:1}} alt='logo' src={image}/>
        <MoreVertIcon  sx={{color:"#fff",cursor:"pointer"}}/>
    </LogoWrapper>
  )
}

export default Logo