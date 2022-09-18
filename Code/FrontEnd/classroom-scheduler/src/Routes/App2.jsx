import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import "../index.scss"
import AdminLogin from "../Main/Login/AdminLogin";
import TeacherLogin from "../Main/Login/TeacherLogin";
import StudentLogin from "../Main/Login/StudentLogin";
import AdminSignUp from "../Main/SignUp/AdminSignUp";
import ForgotPassword from "../Main/Login/ForgotPassword";
// import { Provider } from "react-redux";
// import store from './Store/reducer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from "../Dashboard/AdminDashboard/AdminDashboard";
import Login from "../Main/Login/Login";
import TeacherRegister from "../Dashboard/AdminDashboard/Registration/TeacherRegister";
import Calender from "../Dashboard/Components/Calender";
import TeacherDashboard from "../Dashboard/TeacherDashboard/TeacherDashboard";
import StudentDashboard from "../Dashboard/StudentDashboard/StudentDashboard";
import { ThemeProvider } from "@mui/material";
import { theme } from "../Services/theme";
import ATeacher from "../Dashboard/AdminDashboard/pages/ATeacher";
import ATimetable from "../Dashboard/AdminDashboard/pages/ATimetable";
import AStudent from "../Dashboard/AdminDashboard/pages/AStudent";
import ACalender from "../Dashboard/AdminDashboard/pages/ACalender";
import Todo from "../Dashboard/AdminDashboard/pages/Todo";
import CustomDay from "../components/CustomDay"
//import "../Todo.css"
import CalenderPopover from "../components/CalenderPopover";


const App2=()=>{
    return(
        <>
    <BrowserRouter>
    <ToastContainer position="top-center" />
    {/* <Provider store={store}> */}
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/TeacherLogin" element={<TeacherLogin />} />
        <Route path="/StudentLogin" element={<StudentLogin />} />
        <Route path="/AdminSignUp" element={<AdminSignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />

        {/* Admin Dashboard Routing */}
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/Atimetable" element={<ATimetable />} />
        <Route path="/Ateacher" element={<ATeacher />} />
        <Route path="/Astudent" element={<AStudent />} />
        <Route path="/TeacherRegister" element={<TeacherRegister />} />
        <Route path="/Acalender" element={<ACalender />} />
        

        {/* Teacher Dashboard Routing */}
        <Route path="/TeacherDashboard" element={<TeacherDashboard />} />

        {/* Student Dashboard Routing */}
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
        
        
        <Route path="/todo" element={<Todo />} />
        <Route path="/static-calender" element={<CustomDay />} />
        <Route path="/CalenderPopover" element={<CalenderPopover />} />

      </Routes>
      </ThemeProvider>
      {/* </Provider> */}
    </BrowserRouter>
        </>
    )
}

export default App2;