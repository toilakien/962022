import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import { useStyles } from "../../../styles/globalSlyles";

const Header = () => {
  
  
  const ListItem = styled(Box)({
    height: "50px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e1f5fe",
    },
  });
  const classes = useStyles();
  return (
    <Grid container sx={{borderBottom:"1px solid #ddd"}}>
      <Grid xs={2}>
        <Typography variant="h6" sx={{ ml: 2 }}>Tổng quan</Typography>
      </Grid>
      <Grid container justifyContent={"flex-end"} xs={10}>
        <ListItem>
          <AttachMoneyIcon sx={{ color: "#ddd" }} />
          <Typography className={classes.typography}>Vay vốn kinh doanh </Typography>
        </ListItem>
        <ListItem>
          <QuestionMarkIcon sx={{ color: "#ddd" }} />
          <Typography className={classes.typography}>Trợ giúp</Typography>
        </ListItem>
        <ListItem>
          <FavoriteIcon sx={{ color: "#ddd" }} />
          <Typography className={classes.typography}>Góp ý </Typography>
        </ListItem>
        <Link style={{ textDecoration: "none" }} to="/profile">
          <ListItem>
            <PersonIcon sx={{ color: "red" }} />
            <Typography className={classes.typography}>Kiên Lê </Typography>
            <KeyboardArrowDownIcon />
          </ListItem>
        </Link>
      </Grid >
    </Grid>
  );
};

export default Header;
