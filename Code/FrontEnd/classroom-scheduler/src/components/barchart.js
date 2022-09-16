import React, { useEffect } from "react";
//import React, {useState, useEffect} from "react";
import Chart from "react-apexcharts";

function Barchart() {

// const [socialName, setsocialName]= useState([]);
// const [socialValue, setSocialValue]= useState([]); 

// useEffect( ()=>{

// const socialMediaName=[];
// const socialMediaValue=[];
// const getSocialrecord= async()=>{
// const dataReq= await fetch("Enter url here");
// const dataRes= await dataReq.json();
// //console.log(dataRes);

// for(let i=0;i<dataRes.length;i++)
// {
//     socialMediaName.push(dataRes[i].socialmedia_title);
//     socialMediaName.push(dataRes[i].socialmedia_subscriber);
// }
// setsocialName(socialMediaName);
// setSocialValue(socialMediaValue);

// }
// getSocialrecord();

// },[]);

  return (
    <React.Fragment>
      <div className="container-fluid mb-5">
        <h3 className="text-center mt-3 mb-3">ClassRoom Scheduler</h3>
        {/* {socialName} to be uncommented later */}

        <Chart
          type="bar"
          width={1380}
          height={700}
          series={[
            {
              name: "Total Assignments Submitted",
              data: [125, 81, 72, 70, 175, 203, 90,50],
              //data:socialValue, to be uncommented later
            },
          ]}
          options={{
            title: {
              text: "Students Assignment Submition graph",
              style: { fontSize: 30 },
            },

            // subtitle: {
            //   text: "This is BarChart Graph",
            //   style: { fontSize: 18 },
            // },

            
            theme: { mode: "dark" },

            xaxis: {
              tickPlacement: "on",
            //   categories:socialName, to be uncommented during dynamic data
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
      </div>
    </React.Fragment>
  );
}

export default Barchart;