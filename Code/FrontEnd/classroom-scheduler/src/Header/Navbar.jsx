import React from "react";
import { Box } from "@mui/system";
import { Button, Modal} from "@mui/material";
import { useState } from "react";
import Login from "../Main/Login/Login";
// import {ExpandLess,ExpandMore} from "@mui/icons-material"


const Navbar=()=>{

    const [open,setOpen]=useState(false);

    return(
        <>
        <div id="navbar">
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button  sx={{ color: '#fff',display:{sm:'inline-block'} }} href="/">Home</Button>
            <Button  sx={{ color: '#fff',display:{sm:'inline-block'} }} href="#about">About</Button>
            <Button  sx={{ color: '#fff',display:{sm:'inline-block'} }} href="#contact">Contact</Button>
            <Button  sx={{ color: '#fff',display:{sm:'inline-block'} }} onClick={()=>setOpen(true)}>Login</Button>
        </Box>
        <Modal open={open} onClose={()=>setOpen(false)}>
            <Box>
                <Login></Login>
            </Box>
        </Modal>
        </div>
        </>
    )
}

export default Navbar;