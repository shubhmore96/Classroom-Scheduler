import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

function Linechart() {
  const [data, setData] = useState({
    labels: [
      "DSA",
      "COP and OS",
      ".NET",
      "Oops with Java",
      "SDM",
      "WPT",
      "WBJ",
      "DBT",
      "Project",
      "QA and BC",
    ],
    datasets: [
      {
        label: "Duration(in Hrs)",
        data: [82, 66, 84, 104, 84, 108, 100, 72, 120, 80],
        backgroundColor: "purple",
      },
    ],
  });
  return (
    <div className="line-chart" style={{ width: 620, height: '269px' }}>
      <Box pl={5}>
        <Paper elevation={3}>
          <Box p={5}>
            <Line data={data}></Line>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}

export default Linechart;
