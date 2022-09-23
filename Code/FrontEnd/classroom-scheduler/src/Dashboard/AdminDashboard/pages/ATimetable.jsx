import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
} from "@mui/material";
import React from "react";
import CommonHeader from "../../Components/CommonHeader";
import ImageIcon from "@mui/icons-material/Image";
import StaticDatePickerLandscape from "../../../components/StaticDatePickerLandscape";
import Timetable from "../../../Tables/Timetable/Timetable";
import { Container } from "react-bootstrap";

const ATimetable = () => {
  return (
    <>
      <div className="ATimetable" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <CommonHeader />
        <div
          className="static-calender"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Container>
          <Box sx={{ mt: 25 }}>
            <Paper elevation={3} sx={{ width: 1200 }}>
              <Box >
                <Timetable />
              </Box>
            </Paper>
          </Box>
          </Container>
          </div>
          {/* <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
          <Container>
          <Box sx={{ mt: 25 }}>
            <Paper elevation={3} sx={{ width: 550, height: 400 }}>
              <Box>
                <StaticDatePickerLandscape />
              </Box>
            </Paper>
          </Box>
          </Container>
        </div> */}
      </div>
    </>
  );
};

export default ATimetable;
