import React from "react";
import {AppBar,Box,Toolbar, Typography} from "@mui/material"
import Navbar from "./Navbar";


const Header=()=>{
    return(
        <>
        <div id="header">
        <Box sx={{flexGrow:1}}>
        <AppBar>
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow:1}}>Classroom Scheduler</Typography>
            </Toolbar>
            <Navbar />
        </AppBar>
        </Box>
        </div>
        </>
    )
}

export default Header;