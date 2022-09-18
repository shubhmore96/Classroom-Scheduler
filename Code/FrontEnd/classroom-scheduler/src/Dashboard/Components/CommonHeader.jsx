import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Modal,
  useTheme,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import { CommonHeaderData } from "./CommonHeaderData";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import CommonNavbarDrawer from "./CommonNavbarDrawer";
import PersonIcon from "@mui/icons-material/Person";
import MouseOverPopover from "../../components/MouseOverPopover";
import CalenderPopover from "../../components/CalenderPopover";



const CommonHeader = () => {
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  console.log(isMatch);

  return (
    <>
      <div id="header">
        <AppBar
          sx={{
            background: "rgb(255, 174, 109)",
          }}
        >
          <Toolbar variant="dense">
            {isMatch ? (
              <>
                <Typography>
                  <ImportContactsIcon />
                </Typography>
                <CommonNavbarDrawer />
              </>
            ) : (
              <Grid container sx={{ placeItems: "center" }}>
                <Grid item xs={1}>
                  <CommonNavbarDrawer />
                </Grid>
                {/* <Grid item xs={1} /> */}
                <Grid
                  item
                  xs={8}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>
                    <ImportContactsIcon sx={{fontSize:'36px'}} />
                  </Typography>
                </Grid>
                <Grid item xs={2} display="flex">
                  <Tabs
                    indicatorColor="secondary"
                    textColor="white"
                    value={value}
                    onChange={(e, val) => setValue(val)}
                  >
                    <CalenderPopover />
                    {/* <TodoPopover /> */}
                  </Tabs>
                </Grid>
                <Grid item xs={1}>
                  <Box display="flex">
                    {/* <Button variant="contained" onClick={()=>setOpen(true)}>Profile</Button> */}
                    <MouseOverPopover />
                  </Box>
                </Grid>
              </Grid>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default CommonHeader;
