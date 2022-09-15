import React from "react";
import { Container, Typography } from "@mui/material";

const About=()=>{
    return(
        <>
        <Container sx={{ mt: 4, mb: 4 }}>
        <div className="section-title" id="about">
          <Typography variant="h2" align="center" sx={{padding:'50px'}}>About Us</Typography>
        </div>
        <Typography variant="body1" align="center" color={"InfoText"} gutterBottom>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum sit provident adipisci ratione, possimus quasi earum ipsa vitae inventore fugiat, placeat, culpa esse eaque deleniti totam minima modi delectus nostrum.
        </Typography>
        <Typography variant="body1" align="center" color={"InfoText"} gutterBottom>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum sit provident adipisci ratione, possimus quasi earum ipsa vitae inventore fugiat, placeat, culpa esse eaque deleniti totam minima modi delectus nostrum.
        </Typography>
        </Container>
        </>
    )
}

export default About;