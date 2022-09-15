import React from "react";
import Header from "./Header/Header"
import Footer from "./Footer/footer"
import Main from "./Main/main"
import { CssBaseline } from "@mui/material";
import "./index.css"


const App=()=>{
    return(
        <>
        <CssBaseline />
        <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        </div>
        </>
    )
}

export default App;