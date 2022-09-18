import * as React from "react";
import { rows, columns } from "./SubjectData";
import DataTable from "../DataTable";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSubjectData } from "../../Services/user-service";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";

export default function SubjectTable() {
  const [rows, setRows] = React.useState([]);

  const handleSubmit = (event) => {
    console.log("working");
    getSubjectData(rows)
      .then((response) => {
        console.log(response);
        toast.success("user got successfully");
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
          height: 400,
          width: "40%",
          "& .theme--header": {
            backgroundColor: "rgb(0, 215, 255)",
          },
        }}
      >
        <DataGrid
          getRowId={(rows) => rows.subject_id}
          rows={rows}
          columns={columns}
          height={400}
          width={"40%"}
          padding={"30%"}
          color={"rgb(0, 215, 255)"}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onCellEditCommit={(params) => console.log(params)}
        />
      </Box>
    </>
  );
}
