import { myAxios } from "./helper";

export const signUp=(user)=>{
    return myAxios.post('/ClassCoordinator/SignUp',user).then((response)=>response.data)
}

export const adminLogin=(user)=>{
    return myAxios.post('/ClassCoordinator/Login',user).then((response)=>response.data)
}

export const teacherLogin=(user)=>{
    return myAxios.post('/teacher/Login',user).then((response)=>response.data)
}

export const studentLogin=(user)=>{
    return myAxios.post('/student/Login',user).then((response)=>response.data)
}