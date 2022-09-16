import { Avatar, Drawer, IconButton,Link,List,ListItemButton,ListItemIcon,ListItemText,useTheme} from "@mui/material";
import React, { useState } from "react";
import { AdminNavbarData } from "./CommonHeaderData";
import MenuIcon from '@mui/icons-material/Menu';


const CommonNavbarDrawer=()=>{
    
    const [data,setData]=useState(false);

    return(
        <>
        <Drawer 
        PaperProps={{
          sx:{backgroundColor:"whitesmoke"}  
        }}
        open={data} 
        onClose={()=>setData(false)}
        >
            <List>
               {AdminNavbarData.map((link,val)=>(
                 <ListItemButton href={link.link} key={val} divider onClick={()=>setData(!data)}>
                 <ListItemIcon>
                 <ListItemText>
                    {link.title}
                 </ListItemText>
             </ListItemIcon>
             </ListItemButton>
               ))}
                {/* <ListItemButton href="/Login">
                 <ListItemIcon>
                 <ListItemText>
                    Login
                 </ListItemText>
             </ListItemIcon>
             </ListItemButton> */}
            </List>
        </Drawer>
        <IconButton sx={{marginLeft:"auto",color:"white"}} onClick={()=>setData(!data)}>
            <MenuIcon />
        </IconButton>

        </>
    )
}

export default CommonNavbarDrawer;