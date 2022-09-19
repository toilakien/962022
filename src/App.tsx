import React from "react";
import Route from "./routes";
// file css
import "./resource/css/base.css";
import Container from '@mui/material/Container'
import JWTcontext from "./context/JWTcontext";


function App() {
  return (
    <JWTcontext>

      <Route />
    </JWTcontext>
  )

}


export default App;
