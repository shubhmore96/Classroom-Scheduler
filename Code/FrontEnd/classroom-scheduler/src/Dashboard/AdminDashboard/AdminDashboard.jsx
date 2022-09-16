import { Button, Grid, Paper,Card,CardActions,Typography,CardContent,CardMedia,Container } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import { CardData } from "./CardData";
//import { createDispatchHook } from "react-redux";
import TeacherTable from "../../Tables/Teacher/TeacherTable";
import CommonHeader from "../Components/CommonHeader";
import Footer from "../../Footer/footer";
import StudentTable from "../../Tables/Student/StudentTable";
import SubjectTable from "../../Tables/Subject/SubjectTable"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    paddingTop:"25%"
  }));


const AdminDashboard=()=>{
const cards=[1,2,3,4];
    return(
        <>
        <div>
           <CommonHeader />
           <Box style={{marginTop:'100px'}}>
            <Container className="cardGrid" maxWidth="md" style={{padding:'20px 0px' }}>
                <Grid container spacing={3}>
                    {CardData.map((card,keyVal)=>(
                       <Grid item key={keyVal} xs={12} sm={6} md={4} lg={3}>
                        <Card className="card" style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                        <CardMedia sx={{paddingLeft:"40%"}}>{card.icon} </CardMedia> 
                       <CardContent className="cardContent" style={{flexGrow:'1'}}>
                            <Typography gutterBottom variant="h5">
                                {card.title}
                            </Typography>
                            <Typography sx={{paddingLeft:"40%"}}>
                               {card.quant}
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
            </Box>
            <Typography variant="h3" color={'GrayText'} sx={{paddingLeft:'40%',mt:4, mb: 0 }}>Teachers Data</Typography>
            <TeacherTable />
            <Typography variant="h3" color={'GrayText'} sx={{paddingLeft:'40%',mt:4, mb: 0 }}>Students Data</Typography>
            <StudentTable />
            <Typography variant="h3" color={'GrayText'} sx={{paddingLeft:'40%',mt:4, mb: 0 }}>Subject Data</Typography>
            <SubjectTable />
            <Typography variant="h3" color={'GrayText'} sx={{paddingLeft:'40%',mt:4, mb: 0 }}>Assignment Data</Typography>
            <SubjectTable />
            <Footer sx={{ mt: 2, mb: 0 }} />
        </div>
        </>
    )
}

export default AdminDashboard;