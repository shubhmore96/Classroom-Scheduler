import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import AdminLogin from "../Main/Login/AdminLogin";
import TeacherLogin from "../Main/Login/TeacherLogin";
import StudentLogin from "../Main/Login/StudentLogin";
import AdminSignUp from "../Main/SignUp/AdminSignUp";
import About from "../Main/About/About";
import Contact from "../Main/Contact/Contact";
import ForgotPassword from "../Main/Login/ForgotPassword";
// import { Provider } from "react-redux";
// import store from './Store/reducer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from "../Dashboard/AdminDashboard";

const App2=()=>{
    return(
        <>
    <BrowserRouter>
    <ToastContainer position="top-center" />
    {/* <Provider store={store}> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/TeacherLogin" element={<TeacherLogin />} />
        <Route path="/StudentLogin" element={<StudentLogin />} />
        <Route path="/AdminSignUp" element={<AdminSignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
      </Routes>
      {/* </Provider> */}
    </BrowserRouter>
        </>
    )
}

export default App2;