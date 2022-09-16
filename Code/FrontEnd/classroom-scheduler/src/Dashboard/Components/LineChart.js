import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js'
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement
)

function App() {
  const [data, setData]= useState(
    {
      labels:["DSA", "COP and OS", ".NET", "Oops with Java","SDM","WPT","WBJ", "DBT",  "Project", "QA and BC"],
      datasets:[
        {
          label:"Duration(in Hrs)",
          data:[82, 66, 84, 104, 84, 108, 100, 72, 120, 80],
          backgroundColor: 'purple'
        }
      ]
    }
  )
  return (
    <div className="App" style={{width: '500px', height: '500px'}}>
     <Line data={data}>Hello</Line>
     
    </div>
  );
}

export default App;
