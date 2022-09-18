import React from "react";
import Header from "./Header/Header"
import Footer from "./Footer/footer"
import Main from "./Main/main"
import { CssBaseline } from "@mui/material";
import "./index.scss"


const App=()=>{
    return(
        <>
        <CssBaseline />
        <div className="main" style={{background:'rgb(239, 239, 239)'}}>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        </div>
        </>
    )
}

export default App;