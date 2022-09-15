import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    flex:1,
    flexDirection:'center',
  };

const Login=()=>{

    return(
        <>
        <Box sx={style}>
        <Link href="/AdminLogin">
        <Button  sx={{ color: '#fff',display:{sm:'block'} }}>
        <Typography variant="h6" color={'#000'}>ClassCoordinator</Typography>
        </Button>
        </Link>
        <Link href="/TeacherLogin">
        <Button  sx={{ color: '#fff',display:{sm:'block'} }}>
        <Typography variant="h6" color={'#000'}>Teacher</Typography>
        </Button>
        </Link>
        <Link href="/StudentLogin">
        <Button  sx={{ color: '#fff',display:{sm:'block'} }}>
        <Typography variant="h6" color={'#000'}>Student</Typography>
        </Button>
        </Link>
        </Box>
        </>
    )
}

export default Login;