import {
  Button,
  Grid,
  Paper,
  Card,
  CardActions,
  Typography,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { CardData } from "./CardData";
//import { createDispatchHook } from "react-redux";
import TeacherTable from "../../Tables/Teacher/TeacherTable";
import CommonHeader from "../Components/CommonHeader";
import Footer from "../../Footer/footer";
import StudentTable from "../../Tables/Student/StudentTable";
import SubjectTable from "../../Tables/Subject/SubjectTable";
import AssignmentTable from "../../Tables/Assignmnet/AssignmentTable";
import Barchart from "../../components/Barchart";
import Piechart from "../../components/Piechart";
import Linechart from "../../components/Linechart";
// import Todo from "./pages/Todo";

const Item = styled(Paper)(({ theme }) => ({
  background: "rgb(239, 239, 239)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  paddingTop: "25%",
}));

const AdminDashboard = () => {
  const cards = [1, 2, 3, 4];
  return (
    <>
      <CommonHeader />
      <div
        className="admin-dashboard"
        style={{
          background: "rgb(239, 239, 239)",
          padding: "0px",
          paddingTop: 10,
        }}
      >
        <Box style={{ marginTop: "100px" }}>
          <Container className="cardGrid">
            <Grid
              container
              spacing={30}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              {CardData.map((card, keyVal) => (
                <Grid item key={keyVal} xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="card"
                    style={{
                      width: 210,
                      height: 210,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <CardMedia
                      sx={{
                        paddingTop: "20%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      {card.icon}{" "}
                    </CardMedia>
                    <CardContent
                      className="cardContent"
                      style={{ flexGrow: "1" }}
                    >
                      <Typography gutterBottom variant="h5">
                        {card.title}
                      </Typography>
                      <Typography
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        {card.quant}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Subject Data*/}
        <Box p={5} sx={{ mt: 10 }}>
          <Paper elevation={3}>
            <Box p={5}>
              <Typography
                variant="h3"
                color={"GrayText"}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  mt: 4,
                  mb: 0,
                }}
              >
                Subject Data
              </Typography>
              <SubjectTable />
            </Box>
          </Paper>
        </Box>

        <Grid
          container
          spacing={2}
          sx={{
            mt: 5,
            mb: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Grid item xs={12} md={6}>
            <Linechart />
          </Grid>
          <Grid item xs={12} md={6}>
            <Piechart />
          </Grid>
        </Grid>
        <Footer sx={{ mt: 2, mb: 0 }} />
      </div>
    </>
  );
};

export default AdminDashboard;
