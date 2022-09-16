import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import LandingPage from "../Assets/images/LandingPage.jpg"
import FAQ from "./FAQ/FAQ";

const Main=()=>{
    return(
        <>
        <div id="main">
            <main>
            <div className="container">
                <Container maxWidth="md" style={{marginTop:'100px'}}
                sxBackground={{
                    backgroundImage: `url(${LandingPage})`,
                    backgroundColor: '#7fc7d9', // Average color of the background image.
                    backgroundPosition: 'center',
                  }}>
                    <img
                    style={{ display: 'none' }}
                    src={LandingPage}
                    alt="increase priority"
                    />
                    <Typography variant="h2" align="center" gutterBottom>
                        Classroom Scheduler
                    </Typography>
                    <Typography variant="body1" align="center" color={"InfoText"} gutterBottom>
                    Classroom Scheduler is a platform used to keep track between students and teachers, it manages class timetable and assignments.
                    </Typography>
                    <Typography variant="body1" align="center" color={"InfoText"} gutterBottom>
                    It is a web based applictaion it eases the class-coordinator tasks. Class-Coordinator can create timetable and store data of teacher and student.
                    </Typography>
                    <div>
                        <Grid container spacing={"2"} justifyContent="center" sx={{ mt: 4, mb: 2 }} >
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Contact Sales
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary" >
                                    Get Products
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
                <Container>
                    <About></About>
                </Container>
                <Container>
                <Contact></Contact>
                </Container>
                <Container>
                <FAQ></FAQ>
                </Container>
            </div> 
            </main>
        </div>
        </>
    )
}

export default Main;