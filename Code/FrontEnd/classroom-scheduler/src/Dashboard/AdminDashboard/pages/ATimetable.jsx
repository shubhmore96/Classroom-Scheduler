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

const ATimetable = () => {
  return (
    <>
      <div className="ATimetable">
        <CommonHeader />
        <div
          className="static-calender"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mt: 25 }}>
            <Paper elevation={3} sx={{ width: 650, height: 400 }}>
              <Box>
                <StaticDatePickerLandscape />
              </Box>
            </Paper>
          </Box>
        </div>
      </div>
    </>
  );
};

export default ATimetable;
