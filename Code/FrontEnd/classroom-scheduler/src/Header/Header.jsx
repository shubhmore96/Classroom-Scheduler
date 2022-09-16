import React, { useState } from "react";
import {AppBar,Box,Button,Grid,Tab,Tabs,Toolbar, Typography,Modal, useTheme,useMediaQuery} from "@mui/material"
import { HeaderData } from "./HeaderData";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Login from "../Main/Login/Login";
import NavbarDrawer from "./NavbarDrawer";

const Header=()=>{
    const [value,setValue]=useState();
    const [open,setOpen]=useState(false);
    const theme=useTheme();
    const isMatch=useMediaQuery(theme.breakpoints.down('md'));

    console.log(isMatch);

    return(
        <>
        <div id="header">
        <AppBar
            sx={{
                backgroundImage:"linear-gradient(23deg, rgba(2,0,36,1) 0%, rgba(19,101,204,0.9026961126247374) 40%, rgba(0,212,255,1) 100%);"
            }}        
        >
            <Toolbar>
              {isMatch ? 
               ( <>
                <Typography>
                     <ImportContactsIcon />
                </Typography>
                <NavbarDrawer />
                </>
                ) 
              : (<Grid container sx={{placeItems:'center'}}>
                    <Grid item xs={6}>
                        <Typography>
                            <ImportContactsIcon />
                        </Typography>
                    </Grid>
                    <Grid item xs={5} display="flex">
                        <Tabs indicatorColor="secondary" textColor="inherit" value={value} onChange={(e,val)=>setValue(val)}>
                            {HeaderData.map((link,index)=>(
                                <Tab key={index} label={link.title} href={link.link}></Tab>
                            ))}
                        </Tabs>
                    </Grid>
                    <Grid item xs={1}>
                        <Box display="flex">
                          <Button variant="contained" onClick={()=>setOpen(true)}>Login</Button>
                        </Box>
                        <Modal className="MuiModal-root" open={open} onClose={()=>setOpen(false)} onBackdropClick>
                        <Box>
                            <Login></Login>
                        </Box>
                        </Modal>
                    </Grid>
                </Grid>)}
            </Toolbar>
        </AppBar>
        </div>
        </>
    )
}

export default Header;