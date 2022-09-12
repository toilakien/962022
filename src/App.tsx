import React from "react";

// file css
import "./resource/css/base.css";
//import components
import Footer from "./views/layout/Footer";
import Header from "./views/layout/Header";
import SideBar from "./views/layout/SideBar";
import Customer from "./views/pages/customer";

function App() {
  return (
    <div className="app">
      <div>
        <SideBar />
      </div>
      <div>
        <Header />
        <Customer />
      </div>
    </div>
  );
}

export default App;
