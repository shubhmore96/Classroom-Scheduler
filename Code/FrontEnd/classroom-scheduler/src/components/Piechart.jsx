import { Box, Paper } from "@mui/material";
import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
function Piechart()
{
   const [stdudentSubject, setStudentsubject]= useState([]);
   const [studentMarks, setStudentMarks]= useState([]);

//    useEffect( ()=>{
//        const sSubject=[];
//        const sMarks=[];
//        const getStudentdata= async()=>{
//        const reqData= await fetch("http://localhost/reactgraphtutorial/marks");
//        const resData= await reqData.json();       
//        for(let i=0; i< resData.length; i++)
//        {
//         sSubject.push(resData[i].subject);
//         sMarks.push(parseInt(resData[i].marks));
//        }
//        setStudentsubject(sSubject);
//        setStudentMarks(sMarks);
//        }

//     getStudentdata();

//    },[]);

    return(
        <React.Fragment>
           <Box pr={5}>
        <Paper elevation={3}>
            <Box p={5}>
            <div className="container-fluid mb-3">
                <Chart 
                type="pie"
                width={400} 
                height={335}
  
                series={[23,43,50,54,65,72,90]}          

                options={{
                        title:{ text:"Student Result PieChart"
                        } , 
                       noData:{text:"Empty Data"},                        
                     labels:['Cop/os','DSA','Core Java','Advance Java','DBT','SDM','.NET']                  

                 }}
                >
                </Chart>
            </div>
            </Box>
            </Paper>
            </Box>
        </React.Fragment>
    );
}
export default Piechart;