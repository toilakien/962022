import { Box, Avatar, styled, IconButton } from '@mui/material'
import image from '../../resource/image/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
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
  return (
    <LogoWrapper >
      {status === false ? <Avatar sx={{ width: "80px", height: "60px", ml: 1 }} alt='logo' src={image} /> : ""}
      <IconButton sx={{ ml: 1 }} onClick={() => { setStatus(!status) }}  >
        <MenuIcon sx={{ color: "#fff" }} />
      </IconButton>
    </LogoWrapper>
  )
}
export default Logo;