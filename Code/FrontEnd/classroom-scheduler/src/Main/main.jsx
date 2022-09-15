import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import LandingPage from "../Assets/images/LandingPage.jpg"

const Main=()=>{
    return(
        <>
        <div id="main">
            <main>
            <div className="container">
                <Container maxWidth="sm" style={{marginTop:'100px'}}
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
                    <Typography variant="h2" align="center" color={"GrayText"} gutterBottom>
                        Classroom Scheduler
                    </Typography>
                    <Typography variant="h5" align="center" color={"InfoText"} gutterBottom>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum sit provident adipisci ratione, possimus quasi earum ipsa vitae inventore fugiat, placeat, culpa esse eaque deleniti totam minima modi delectus nostrum.
                    </Typography>
                    <div>
                        <Grid container spacing={"2"} justifyContent="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Contact Sales
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
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
            </div> 
            </main>
        </div>
        </>
    )
}

export default Main;