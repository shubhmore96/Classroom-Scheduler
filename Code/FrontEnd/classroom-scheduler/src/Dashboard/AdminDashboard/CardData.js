import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';


export const CardData = [
  {
    title: "No of Students",
    icon: <SchoolIcon sx={{fontSize:'36px',color:"rgb(178, 164, 255)"}}/>,
    quant:117,
    link: "/studentData",
  },
  {
    title: "No of Teachers",
    icon: <PeopleIcon sx={{fontSize:'36px',color:"rgb(253, 132, 31)"}}/>,
    quant: 12,
    link: "/teacherData",
  },
  {
    title: "No of Subjects",
    icon: <MenuBookIcon sx={{fontSize:'36px',color:"rgb(212, 217, 37)"}} />,
    quant: 8,
    link: "/subjectData",
  },
  {
    title: "No of Assignments",
    icon: <AssignmentIcon sx={{fontSize:'36px',color:"rgb(255, 238, 99)"}}/>,
    quant: 50,
    link: "/assignmentData",
  },
];
