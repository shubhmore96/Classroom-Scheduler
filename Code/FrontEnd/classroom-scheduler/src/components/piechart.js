import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
function Piechart()
{
   const [stdudentSubject, setStudentsubject]= useState([]);
   const [studentMarks, setStudentMarks]= useState([]);

   useEffect( ()=>{
       const sSubject=[];
       const sMarks=[];
       const getStudentdata= async()=>{
       const reqData= await fetch("http://localhost/reactgraphtutorial/marks");
       const resData= await reqData.json();       
       for(let i=0; i< resData.length; i++)
       {
        sSubject.push(resData[i].subject);
        sMarks.push(parseInt(resData[i].marks));
       }
       setStudentsubject(sSubject);
       setStudentMarks(sMarks);
        //console.log(resData); 
       }

    getStudentdata();

   },[]);

    return(
        <React.Fragment>
            <div className="container-fluid mb-3">
                <h3 className="mt-3">IET Students Modulewise Performance </h3>
                <Chart 
                type="pie"
                width={1349} 
                height={550}
  
                series={[23,43,50,54,65,72,90]}
               // series={ studentMarks }  //to be uncommented              

                options={{
                        title:{ text:"Student Result PieChart"
                        } , 
                       noData:{text:"Empty Data"},                        
                      // colors:["#f90000","#f0f"],
                     // labels:stdudentSubject     // to be uncommented
                     labels:['Cop/os','DSA','Core Java','Advance Java','DBT','SDM','.NET']                  

                 }}
                >
                </Chart>
            </div>
        </React.Fragment>
    );
}
export default Piechart;