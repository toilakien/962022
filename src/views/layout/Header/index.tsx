import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from '@mui/icons-material/Person'; 

const Header = () => {
  const HeaderWrapper = styled(Grid)({
    width: "calc(1536px - 250px )",
    // height:"80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom:"1px solid #ddd"
  });
  const MenuWrapper = styled(Grid)({
    display: "flex",
  });
  const ListItem = styled(Box)({
    height: "50px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e1f5fe",
    },
  });
  return (
    <HeaderWrapper>
      <Typography variant="h6" sx={{ml:2 }}>Tổng quan</Typography>
      <MenuWrapper>
        <ListItem>
          <AttachMoneyIcon sx={{color:"#ddd"}}/>
          <Typography sx={{ pr: 2 }}>Vay vốn kinh doanh </Typography>
        </ListItem>
        <ListItem>
          <QuestionMarkIcon  sx={{color:"#ddd"}}/>
          <Typography sx={{ pr: 2 }}>Trợ giúp</Typography>
        </ListItem>
        <ListItem>
          <FavoriteIcon sx={{color:"#ddd"}} />
          <Typography sx={{ pr: 2 }}>Góp ý </Typography>
        </ListItem>
        <ListItem>
          <PersonIcon  sx={{color:"red"}}/>
          <Typography sx={{ pr: 2 }}>Kiên Lê </Typography>
          <KeyboardArrowDownIcon/>
        </ListItem>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
