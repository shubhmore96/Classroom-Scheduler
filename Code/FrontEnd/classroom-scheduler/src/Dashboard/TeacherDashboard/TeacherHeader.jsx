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
import { TeacherHeaderData } from "../Components/CommonHeaderData";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import TeacherNavbarDrawer from "./TeacherNavbarDrawer";
import PersonIcon from "@mui/icons-material/Person";

const TeacherHeader = () => {
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
            backgroundImage:
              "linear-gradient(23deg, rgba(2,0,36,1) 0%, rgba(19,101,204,0.9026961126247374) 40%, rgba(0,212,255,1) 100%);",
          }}
        >
          <Toolbar>
            {isMatch ? (
              <>
                <Typography>
                  <ImportContactsIcon />
                </Typography>
                <TeacherNavbarDrawer />
              </>
            ) : (
              <Grid container sx={{ placeItems: "center" }}>
                <Grid item xs={1}>
                  <TeacherNavbarDrawer />
                </Grid>
                {/* <Grid item xs={1} /> */}
                <Grid
                  item
                  xs={8}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>
                    <ImportContactsIcon />
                  </Typography>
                </Grid>
                <Grid item xs={2} display="flex">
                  <Tabs
                    indicatorColor="secondary"
                    textColor="inherit"
                    value={value}
                    onChange={(e, val) => setValue(val)}
                  >
                    {TeacherHeaderData.map((link, index) => (
                      <Tab
                        key={index}
                        label={link.title}
                        href={link.link}
                      ></Tab>
                    ))}
                  </Tabs>
                </Grid>
                <Grid item xs={1}>
                  <Box display="flex">
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
  );
};

export default TeacherHeader;
