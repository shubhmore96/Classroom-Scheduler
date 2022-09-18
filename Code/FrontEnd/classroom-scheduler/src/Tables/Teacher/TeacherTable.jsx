import * as React from "react";
import { rows, columns } from "./TeacherData";
import DataTable from "../DataTable";
import { Paper, Box, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { adminLogin, getTeacherData } from "../../Services/user-service";
import { setDate } from "date-fns";
import { DataGrid } from "@mui/x-data-grid";

export default function TeacherTable() {
  const [rows, setRows] = React.useState([]);

  const handleSubmit = (event) => {
    console.log("working");
    getTeacherData(rows)
      .then((response) => {
        console.log(response);
        toast.success("user got successfully");
        console.log(response.at(0).first_name);
        setRows(response);
      })
      .catch((error) => {
        console.log(error);
        console.log("Error Log");
        toast.error("Please input valid credentials");
      });
  };

  return (
    <>
      <Button onClick={handleSubmit}>Get Data</Button>

      <Box
        sx={{
          mt: 4,
          mb: 0,
          paddingLeft: "12.5%",
          height: 400,
          width: "80%",
          "& .theme--header": {
            backgroundColor: "rgb(114, 255, 255)",
          },
        }}
      >
        <DataGrid
          getRowId={(user) => user.teacher_id}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onCellEditCommit={(params) => console.log(params)}
        />
      </Box>
    </>
  );
}
