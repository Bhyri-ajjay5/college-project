import { Container, Grid, Typography,Paper } from "@mui/material";
import React, { useRef, useState } from "react";
import Footer from "./Footer";
// import AboutImg from '../images/Aboutus.jpeg'
import prImg from "../images/staff/principalsir.JPG";
import BanImg from '../images/staff/bann3.JPG'
// import Typed from "react-typed";
import { Box } from "@mui/system";
// import '../css/About.css'
import Carousel from 'react-material-ui-carousel'
import Data from './AboutData.json'
import AboutCount from "./AboutCount";
import { styled } from '@mui/material/styles';


const styles = {
  backgroundImage: `url(${BanImg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  minHeight: 'auto', 
  width: '100%',   
};

const carouselContainerStyle = {
  height: 'auto', // Adjust the height as needed
  display: 'flex',
  alignItems :'center',
  flexDirection:'column',
  justifyContent: 'center',
  flexGrow:1,
  // border:"1px solid black",
  '@media (max-width: 600px)': {
    height: '100px', // Adjust the height for smaller screens
  },
};

const About = () => {
  return (
    <>
      <Container>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", marginTop: "3rem" }}
        >
          About Us
        </Typography>
        <p></p>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} >
            <Grid item xs={12} md={6} sx={{ padding: "1rem"}}>
              <Typography
                component="h1"
                variant="h4"
                color="red"
                fontWeight="bold"
                textTransform="uppercase"
                gutterBottom
              >
                Welcome To Adarsh
              </Typography>
              <Typography
                variant="body2"
                style={{
                  marginBottom: "1rem",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  fontFamily: "monospace",
                }}
              >
                ADARSH DEGREE COLLEGE was established in 2005 and it is
                affiliated to ANDHRA UNIVERSITY in the same year 2005. In order
                to facilitate a large number of aspiring students from both
                urban and rural regions, the College owns TWO CAMPUSES. Ever
                since, our College has achieved historic SUCCESS IN EDUCATION.
              </Typography>
              <Typography
                variant="body2"
                style={{
                  marginBottom: "1rem",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  fontFamily: "monospace",
                }}
              >
                ADARSH DEGREE COLLEGE is situated at non-polluted and
                non-congested area ‘Beside SBI, BRTS MAIN ROAD, PENDURTHI,
                VISAKHAPATNAM. Both the ‘MAIN CAMPUS’ as well as the NEW CAMPUS’
                are located in a serene environment, and these newly constructed
                ‘College Buildings’ provide spacious classrooms, comfortable
                furniture, hygienic sanitation, and comprehensive SANITIZATION.
              </Typography>
              <Typography
                variant="body2"
                style={{
                  marginBottom: "1rem",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  fontFamily: "monospace",
                }}
              >
                ADARSH DEGREE COLLEGE is well-equipped with comprehensive
                LABORATORY infrastructure, including Physics Lab, Chemistry Lab,
                Computers Lab, Electronics Lab, Bio-Technology Lab, Grand
                Library, Skill Development Centre, and a Sophisticated
                Linguistic Communication Lab for conducting advanced Scientific
                Experiments regularly as per the Daily Time Table and Scheduled
                Practical Time Table as per the UNIVERSITY GUIDELINES, also
                maintaining Practical Records.
              </Typography>
              <Typography
                variant="body2"
                style={{
                  marginBottom: "1rem",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  fontFamily: "monospace",
                }}
              >
                ADARSH DEGREE COLLEGE Campuses are highly sanitized, and all
                preventive precautions have been taken against COVID-19 as per
                the WHO & Govt. of India, and the Campuses adhere to the need
                for maintenance of ‘ENTRY WITH MASK, HAND WASH/SANITIZATION &
                SOCIAL/PHYSICAL DISTANCING & DIGITAL THERMO TEST KIT, etc. All
                Staff & Students follow WHO Guidelines to STAY SAFE.
              </Typography>
              <Typography
                variant="body2"
                style={{
                  marginBottom: "1rem",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  fontFamily: "monospace",
                }}
              >    
                ADARSH DEGREE COLLEGE is accessible to Bus, Train, Auto
                transport facility for both Students and Staff to reach College
                venue in time. The College focuses on ‘Students’ Safety and
                Security’ and vigilant all the time by monitoring the Classes
                and Laboratories through CC Cameras controlled from the
                Principal’s Chamber.
              </Typography>

            
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={prImg}
                alt="sirImg"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <Typography
                variant="body2"
                style={{
                  marginBottom: "1rem",
                  marginTop: '1rem',
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  fontFamily: "monospace",
                }}
              >
                ADARSH DEGREE COLLEGE organizes TRAINING & PLACEMENT Department
                for enabling and empowering Integrated Skills & Employability
                Skills in association with Govt. of India sponsored Skill
                Development Centre ‘APSSDC.’ Large number of students have been
                benefited from these provisions by getting suitable employment
                in Private and Public Sector Organizations, resulting in 66
                Campus Selections for various prestigious multi-national
                companies like Capegemini, Wipro, TCS, Infosys, ICICI,
                Cognizant, Alcance Technologies, VR Solutions, Srikar Labs etc.
                Today our College is studded with 66 CAMPUS SELECTIONS this
                year.
              </Typography>
              <Typography
                variant="body2"
                style={{
                  marginBottom: "1rem",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  fontFamily: "monospace",
                }}
              >
                ADARSH DEGREE COLLEGE is a citadel of quality education,
                traditional culture and scientific temperament that gives every
                individual a glowing personality, shining potential and a hope
                of empowering JOB & EMPLOYMENT while stepping out of College.
              </Typography>
              <Typography
                variant="body2"
                style={{
                  marginBottom: "1rem",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  fontFamily: "monospace",
                }}
              >
                ADARSH DEGREE COLLEGE offers English Medium instruction and the
                Students coming from Telugu Medium are trained in SPOKEN ENGLISH
                who can gradually work, communicate and follow English Medium
                topics within stipulated time.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* <Container> */}
      {/* <div style={styles}> */}
         {/* <Box  >
          <Typography
            variant="body2"
            style={{
              fontSize: "0.9rem",
              fontWeight: "600",
              fontFamily: "monospace",
              color: "black", // You can also add text color here
            }}
          >
            ADARSH DEGREE COLLEGE is well-equipped with comprehensive
            LABORATORY infrastructure, including Physics Lab, Chemistry Lab,
            Computers Lab, Electronics Lab, Bio-Technology Lab, Grand
            Library, Skill Development Centre, and a Sophisticated
            Linguistic Communication Lab for conducting advanced Scientific
            Experiments regularly as per the Daily Time Table and Scheduled
            Practical Time Table as per the UNIVERSITY GUIDELINES, also
            maintaining Practical Records.
          </Typography>  
          <AboutCount/>
         </Box> */}
      {/* </div> */}
      {/* </Container> */}

      <div>
      <AboutCount/>
      </div>


      <Container>
      <Container style={{padding:"20px 0px"}}>
                <Carousel  fullHeightHover={false} >
                  {Data.map((item) => (
                    <>
                    <Grid container>
                    <Grid item xs={12} md={6} style={carouselContainerStyle} >
                    <img src={item.image}
                      alt={item.name}
                      style={{ maxWidth: '260px',height: '40vh',borderRadius:"50%",flexFlow:"1"}}  />
                      <div>
                      <Typography variant="h5" align="center"  sx={{fontSize:"15px"}} style={{padding:"10px"}}>
                            Name : {item.name}
                          </Typography>
                          <Typography variant="h6" sx={{fontSize:"15px"}}  align="center">
                            Subject : {item.subject}
                          </Typography>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6} style={carouselContainerStyle}>
                    <img src={item.subjectImg}
                      alt={item.name}
                      style={{ width: 'auto',height: '40vh'}}
                      />
                      <div>
                      <Typography variant="h5" align="center"  sx={{fontSize:"15px"}} style={{padding :"10px"}}>
                            Description : {item.description}
                          </Typography>
                      </div>
                    </Grid>
                    </Grid>
                  </>
                  ))}
                </Carousel>
          </Container>
      </Container>
      <Footer />
      
    </>
  );
};

export default About;
