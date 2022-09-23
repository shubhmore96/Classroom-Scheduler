import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import img1 from '../../Assets/images/student.png'  
import img2 from '../../Assets/images/Teacher.jpg'
import img3 from '../../Assets/images/s.png';
import img4 from '../../Assets/images/Assignments.jpg';  


export const CardData = [
  {
    title: "No of Students",
    icon: '../../Assets/images/student.png',
    quant:117,
    link: "/studentData",
  },
  {
    title: "No of Teachers",
    icon: '../../Assets/images/student.png',
    quant: 12,
    link: "/teacherData",
  },
  {
    title: "No of Subjects",
    icon: '../../Assets/images/student.png',
    quant: 8,
    link: "/subjectData",
  },
  {
    title: "No of Assignments",
    icon:'../../Assets/images/student.png',
    quant: 50,
    link: "/assignmentData",
  },
];
