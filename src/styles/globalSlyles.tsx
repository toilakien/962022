import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    typography: {
        paddingRight: 2,
        color: "#111"
    },

    boxItem: {
        width: "calc(100% / 6)",
        height: "80px",
        cursor: "pointer",
        flexDirection: "column",
    },
    selectOder: {
        width: "200px",
        height: "50px",
        p: 0, m: 0,
        '& input': {
            height: "20px"
        },
        '& fieldset': {
            height: "50px",
        },
        '& p': {
            fontSize: "0.8rem"
        },
        '& span': {
            height: "10px"
        }, '& button': {
            height: "10px",
            fontSize: "1rem"
        }
    },
    dataGrid:{
        
    }
})