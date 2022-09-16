import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';


export const CardData = [
  {
    title: "No of Students",
    icon: <SchoolIcon />,
    quant:117,
    link: "/studentData",
  },
  {
    title: "No of Teachers",
    icon: <PeopleIcon />,
    quant: 12,
    link: "/teacherData",
  },
  {
    title: "No of Subjects",
    icon: <MenuBookIcon />,
    quant: 8,
    link: "/subjectData",
  },
  {
    title: "No of Assignments",
    icon: <AssignmentIcon />,
    quant: 50,
    link: "/assignmentData",
  },
];
