import { Typography } from "@mui/material";
import React from "react";
import Copyright from "./Copyright";

const Footer=()=>{
    return(
        <>
        <div>
        <footer className="common-footer" style={{backgroundColor:'rgb(255, 174, 109)',padding:'50px 0px',marginTop:'50px'}}>
            <Typography variant="h6" align="center" gutterBottom>@Classroom-Scheduler</Typography>
            <Typography variant="subtitle1" align="center" color='GrayText'>
                        Something to give footer a purpose
            </Typography>
            <Copyright sx={{ mt: 2, mb: 2 }} />
        </footer> 
        </div>
        </>
    )
}

export default Footer;