import React from "react";
import { Grid, Tab, Tabs, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/profile');
  }

  return (
    <Grid container alignItems={"center"} sx={{ borderBottom: "1px solid #ddd" }}>
      <Grid container item xs={2}>
        <Typography variant="h6" sx={{ ml: 2 }}>Tổng quan</Typography>
      </Grid>
      <Grid item container justifyContent={"flex-end"} xs={10}>
        {/* <Tabs >
          <Tab label="Vay vốn kinh doanh" iconPosition="start" icon={<AttachMoneyIcon />} />
          <Tab label="Trợ giúp" iconPosition="start" icon={<QuestionMarkIcon sx={{ color: "darkblue" }} />} />
          <Tab label="Góp ý " iconPosition="start" icon={<FavoriteIcon sx={{ color: "red" }} />} />
          <Tab onClick={handleClick} label="Kiên Lê" iconPosition="end" icon={<KeyboardArrowDownIcon sx={{ color: "#ddd" }} />} />
        </Tabs> */}

      </Grid >
    </Grid>
  );
};

export default Header;
