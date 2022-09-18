import React, { useState } from "react";
import {AppBar,Box,Button,Grid,Tab,Tabs,Toolbar, Typography,Modal, useTheme,useMediaQuery, Avatar} from "@mui/material"
import { StudentHeaderData } from "../Components/CommonHeaderData";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import StudentNavbarDrawer from "./StudentNavbarDrawer";
import PersonIcon from '@mui/icons-material/Person';

const StudentHeader=()=>{
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
                <StudentNavbarDrawer  />
                </>
                ) 
              : (
              <Grid container sx={{placeItems:'center'}}>
                    <Grid item xs={1}>
                    <StudentNavbarDrawer />
                    </Grid>
                    {/* <Grid item xs={1} /> */}
                    <Grid item xs={8} style={{ display: "flex", alignItems: "center" }}>
                        <Typography>
                            <ImportContactsIcon />
                        </Typography>
                    </Grid>
                    <Grid item xs={2} display="flex">
                        <Tabs indicatorColor="secondary" textColor="inherit" value={value} onChange={(e,val)=>setValue(val)}>
                            {StudentHeaderData.map((link,index)=>(
                                <Tab key={index} label={link.title} href={link.link}></Tab>
                            ))}
                        </Tabs>
                    </Grid>
                    <Grid item xs={1}>
                        <Box display="flex">
                          {/* <Button variant="contained" onClick={()=>setOpen(true)}>Profile</Button> */}
                            <Avatar>
                            <PersonIcon />
                            </Avatar>
                        </Box>
                    </Grid>
                </Grid>
                )}
            </Toolbar>
        </AppBar>
        </div>
        </>
    )
}

export default StudentHeader;