import * as React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
import Typed from "react-typed";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import Cs from "./Cs";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Courses = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <SchoolRoundedIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Explore Our Courses
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Explore Our Courses
            </Typography>
            <Typed
              style={{ fontSize: "2rem", color: "Black" }}
              strings={[
                "Junior Ui / React Developer",
                "Frontend Developer",
                "React developer",
              ]}
              typeSpeed={300}
              backSpeed={50}
              loop
            ></Typed>
            <Typography color="text.primary">
              "Embark on a journey of knowledge and growth with our wide range
              of courses. Whether you're a passionate learner looking to expand
              your horizons or a professional seeking to enhance your skills,
              our courses are tailored to meet your aspirations. Dive into a
              world of learning, where you'll find expert guidance, interactive
              lessons, and hands-on experiences. Unleash your potential, achieve
              your goals, and shape your future with our diverse selection of
              courses. Explore, learn, and thrive with us."
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* Corrected usage of Link */}
              <Button variant="contained" component={Link} to="/">
                Home
              </Button>
              {/* Corrected usage of Link */}
              <Button variant="outlined" component={Link} to="/About">
                About
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography variant="h3">Adarsh Degree College Courses</Typography>
          <Typography variant="h5">Science and Computer Courses</Typography>
          <Grid container sx={{ marginTop: "3rem" }}>
            <Cs />
          </Grid>
        </Container>
      </main>
      <Box
        sx={{ bgcolor: "background.paper", p: 6 }}
        component="footer"
      >
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default Courses;
