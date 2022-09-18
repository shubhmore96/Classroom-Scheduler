import { Box, Paper } from "@mui/material";
import React, { useEffect } from "react";
import Chart from "react-apexcharts";

function Barchart() {

  return (
    <React.Fragment>
      <div className="container-fluid mb-5">
        {/* <h3 className="text-center mt-3 mb-3">ClassRoom Scheduler</h3> */}
        <Box p={5}>
        <Paper elevation={3}>
            <Box p={5}>
        <Chart
          type="bar"
          width={600}
          height={450}
          series={[
            {
              name: "Total Assignments Submitted",
              data: [125, 81, 72, 70, 175, 203, 90,50],
            },
          ]}
          options={{
            title: {
              text: "Students Assignment Submission",
              style: { fontSize: 30 },
            },
      
            theme: { mode: "dark" },

            xaxis: {
              tickPlacement: "on",
              categories: [
                "Cop/Os",
                "DSA",
                "Core-Java",
                "Advanced Java",
                "DBT",
                "SDM",
                "WPT",
                "DotNet",
              ],
              title: {
                text: "Modules",
                style: { color: "#f90000", fontSize: 30 },
              },
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["#f90000"] },
              },
              title: {
                text: "Total assignments",
                style: { color: "#f90000", fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
        </Box>
        </Paper>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default Barchart;