import { Grid, Typography } from "@mui/material";
import Logo from "../../../components/Logo";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import React, { useState } from "react";
interface TypoArrType {
    title: string,
    type: string,
    element: JSX.Element;
}
const SideBar = () => {
    const [status, setStatus] = useState<boolean>(false);
    const TypoArr: TypoArrType[] = [
        {
            title: "Tổng quan",
            type: "Home",
            element: <HomeIcon />,
        },
        {
            title: "Đơn hàng",
            type: "Inventory",
            element: <InventoryIcon />,
        },
        {
            title: "Vận chuyển",
            type: "TimeToLeave",
            element: <TimeToLeaveIcon />,
        },
        {
            title: "Khách hàng",
            type: "Person",
            element: <PersonIcon />,
        },
    ];
    return (
        <Grid>
            <Grid>
                <Logo status={status} setStatus={setStatus} />
            </Grid>
            <Grid sx={{ backgroundColor: "#111", height: "calc(100vh - 80px)" }}>
                {TypoArr.map((e, index) => {
                    return (
                        <Link style={{ textDecoration: "none" }} to={e.type}>
                            <Grid container alignItems='center' justifyContent='flex-start' key={index} sx={{ p: 2 }}>
                                <Typography sx={{ color: "#fff" }}>{e.element}</Typography>
                                {!status ? <Typography sx={{ ml: 3, color: "#fff" }} variant="inherit">{e.title}</Typography> : ''}
                            </Grid>
                        </Link>
                    )
                })}
            </Grid>
        </Grid>
    )
};

export default SideBar;
