import { Box, Grid, styled, Typography } from "@mui/material";
import Logo from "../../../components/Logo";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
const SideBar = () => {
    const SideBarWrapper = styled(Grid)({
        width: "250px",
        maxWidth: "250px",
        height: "100vh",
        maxHeight: "100vh",
        backgroundColor: "#111",
    });
    const SideBarContent = styled(Box)({
        display: "block",
    });
    const ListItem = styled(Box)({
        display: "flex",
        backgroundColor: "#111",
        justifyContent: "start",
        alignItems: "center",
        // borderTop: "1px solid #fff",
        height: "60px",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#333",
        },
        "&:active": {
            backgroundColor: "blue",
        },
    });
    const TypoArr = [
        {
            title: "Tổng quan",
            type: "Home",
            down: false,
        },
        {
            title: "Đơn hàng",
            type: "Inventory",
            down: false,
        },
        {
            title: "Vận chuyển",
            type: "TimeToLeave",
            down: false,
        },
        {
            title: "Khách hàng",
            type: "Person",
            down: false,
        },
    ];
    const CusIcon = (type: any) => {
        switch (type) {
            case TypoArr[0].type:
                return <HomeIcon sx={{ ml: 2, color: "#fff" }} />;
            case TypoArr[1].type:
                return <InventoryIcon sx={{ ml: 2, color: "#fff" }} />;

            case TypoArr[2].type:
                return <TimeToLeaveIcon sx={{ ml: 2, color: "#fff" }} />;
            case TypoArr[3].type:
                return <PersonIcon sx={{ ml: 2, color: "#fff" }} />;

            default:
                break;
        }
    };
    const handleClick = (e: any) => {
        e = true;
    };
    return (
        <SideBarWrapper>
            <Logo />
            <SideBarContent>
                {TypoArr.map((e, index) => {
                    return (
                        <Link key={index} style={{textDecoration:"none"}} to={e.type}>
                            <ListItem
                                key={index}
                                onClick={() => {
                                    handleClick(e.down);
                                }}
                            >
                                {CusIcon(e?.type)}
                                <Typography sx={{ ml: 5, color: "#fff", fontSize: "0.9rem" }}>
                                    {e?.title}
                                </Typography>
                                {!e?.down ? (
                                    <NavigateNextIcon
                                        sx={{ color: "#fff", position: "absolute", left: "210px" }}
                                    />
                                ) : (
                                    <KeyboardArrowDownIcon
                                        sx={{ color: "#fff", position: "absolute", left: "210px" }}
                                    />
                                )}
                            </ListItem>
                        </Link>
                    );
                })}
            </SideBarContent>
        </SideBarWrapper>
    );
};

export default SideBar;
