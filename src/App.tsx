import Route from "./routes";
// file css
import "./resource/css/base.css";
import JWTcontext from "./context/JWTcontext";
import React from "react";
import { CssBaseline } from "@mui/material";


function App() {
   
    return (
        <React.Fragment>
            <CssBaseline />
            <JWTcontext>
                <Route />
            </JWTcontext>
        </React.Fragment>
    )

}


export default App;
