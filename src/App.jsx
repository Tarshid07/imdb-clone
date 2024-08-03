import React from "react";
import NavBar from "./componenets/NavBar";
import Banner from "./componenets/Banner";
import Movies from "./componenets/Movies";

export default function App() {
    return (
        <React.Fragment> 
           <NavBar/>
           <Banner/>
           <Movies/>
        </React.Fragment>
    )
  }