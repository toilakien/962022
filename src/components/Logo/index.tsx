import { Box, Avatar, styled, IconButton } from '@mui/material'
import React from 'react'
import image from '../../resource/image/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from '../../styles/globalSlyles';
const Logo = ({ status, setStatus }: { status: boolean, setStatus: any }) => {
  const LogoWrapper = styled(Box)({
    backgroundColor: "#111",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "100%",
    borderBottom: "1px solid #fafafa"
  })
  const classes = useStyles();
  return (
    <LogoWrapper>
      <Avatar sx={{ width: "80px", height: "60px", ml: 1 }} alt='logo' src={image} />
      <IconButton className={!status ? classes.hide : classes.show} onClick={() => { setStatus(!status) }}>
        <MenuIcon sx={{ color: "#fff" }} />
      </IconButton>
    </LogoWrapper>
  )
}

export default Logo;