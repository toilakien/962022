import React from "react";
import { Grid, List, ListItem, ListItemButton, styled, Tab, Tabs, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import BasicBreadcrumbs from "../../../components/Breadcrumbs";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Profile');
  }
  const ListItemCustom = styled(ListItem)({
    width: "auto"
  })
  return (
    <Grid container alignItems={"center"} sx={{ borderBottom: "1px solid #ddd" }}>
      <Grid container item xs={4}>
        <BasicBreadcrumbs />
      </Grid>
      <Grid item container justifyContent={"flex-end"} xs={8}>
        <List sx={{ display: "flex", m: 0, p: 0 }}>
          <ListItemCustom disablePadding>
            <ListItemButton><AttachMoneyIcon sx={{ color: 'green' }} />Vay vốn</ListItemButton>
          </ListItemCustom>
          <ListItemCustom disablePadding>
            <ListItemButton ><QuestionMarkIcon sx={{ color: 'lightblue' }} />Trợ giúp</ListItemButton>
          </ListItemCustom>
          <ListItemCustom disablePadding>
            <ListItemButton ><FavoriteIcon sx={{ color: 'rebeccapurple' }} />Góp ý </ListItemButton>
          </ListItemCustom>
          <ListItemCustom disablePadding>
            <ListItemButton onClick={handleClick} >Kiên Lê <KeyboardArrowDownIcon /> </ListItemButton>
          </ListItemCustom>
        </List>

      </Grid >
    </Grid>
  );
};

export default Header;
