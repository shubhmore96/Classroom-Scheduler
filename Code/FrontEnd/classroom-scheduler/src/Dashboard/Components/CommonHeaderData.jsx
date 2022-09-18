import GridViewIcon from '@mui/icons-material/GridView';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import EventNoteIcon from '@mui/icons-material/EventNote';

export const CommonHeaderData=[
    {
        title:"Calender",
        link:"/static-calender"
    },
    {
        title:"To Do",
        link:"/todo"
    }
]

export const AdminNavbarData=[
    {
        icon:<GridViewIcon />,
        title:"Dashboard",
        link:'/AdminDashboard'
    },
    {
        icon:<ViewTimelineIcon />,
        title:"Timetable",
        link:"/Atimetable"
    },
    {
        icon:<HelpOutlineIcon />,
        title:"Teacher",
        link:"/Ateacher"
    },
    {
        icon:<PsychologyAltIcon />,
        title:"Student",
        link:"/Astudent"
    },
    {
        icon:<EventNoteIcon />,
        title:"Calender",
        link:"/Acalender"
    },
]

export const StudentHeaderData=[
    {
        title:"To Do",
        link:"#contact"
    },
    {
        title:"Notification",
        link:"#faq"
    }
]

export const StudentNavbarData=[
    {
        title:"Dashboard",
        link:'#dashboard'
    },
    {
        title:"Timetable",
        link:"/timetable"
    },
    {
        title:"Assignment",
        link:"/assignment"
    },
    {
        title:"Calender",
        link:"/calender"
    },
]

export const TeacherHeaderData=[
    {
        title:"To Do",
        link:"#contact"
    },
    {
        title:"Notification",
        link:"#faq"
    }
]

export const TeacherNavbarData=[
    {
        title:"Dashboard",
        link:'#dashboard'
    },
    {
        title:"Timetable",
        link:"/timetable"
    },
    {
        title:"Assignment",
        link:"/assignmentUpload"
    },
    {
        title:"Calender",
        link:"/calender"
    },
]
