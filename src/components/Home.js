import { Avatar, Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react';
import Typed from "react-typed";
import BannerImg from '../images/college2.jpeg'
import BannerImg1 from '../images/college3.jpeg'
import BannerImg2 from '../images/college1.jpeg'
import BannerImg3 from '../images/college.jpeg'
import Logoimg from '../images/adrsLogo.png';
import Carousel from 'react-material-ui-carousel'
import Footer from './Footer';
import ReactWhatsapp from 'react-whatsapp';

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import prImg from "../images/staff/principalsir.JPG";

//icons
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';


import B1 from '../images/staff/bann1.JPG'
import B2 from '../images/staff/bann2.JPG'
import AboutCount from './AboutCount';
// import B3 from '../images/staff/bann3.JPG'




const Home = () => {


  const bannerImages = [
    { name: 'firstImage', img: BannerImg },
    { name: 'secondImage', img: BannerImg1 },
    { name: 'thirdImage', img: BannerImg2 },
    { name: 'fourthImage', img: BannerImg3 },
  ];

  const carouselContainerStyle = {
    height: 'auto', // Adjust the height as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
      height: '300px', // Adjust the height for smaller screens
    },
  };

  const collegeImages = [
    { name: 'firstClImage', img: B1 },
    { name: 'secondClImage', img: B2 },
  ]

  return (
    <>
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5} sx={{ marginTop: '4rem' }}>
            <Grid>
              <Grid item xs={12} md={6} sx={{ marginTop: '4rem' }}>
                <img src={Logoimg} alt="logo" style={{ maxWidth: "100%", height: "auto" }} />
              </Grid>
            </Grid>
            {/* <div>
              <Button>
              <a href="https://wa.me/7989769357" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
              </Button>
            </div> */}
            <Typography sx={{ marginTop: '2rem', fontSize: '2rem' }}>WELCOME TO</Typography>
            <Typed
              style={{ fontSize: "2rem", color: "red", fontWeight: '800' }}
              strings={["ADARSH DEGREE COLLEGE"]}
              typeSpeed={400}
              backSpeed={50}
              loop
            ></Typed>
            <Stack
                    style={{padding:"10px",display:"flex",justifyContent:"center"}}
                    direction={{ xs: "row", md: 'row',sm:'row'}}
                    spacing={{ xs: 4, sm: 4, md: 4 }}
                    // Add margin-top here
                    sx={{ marginTop: "4rem", marginBottom: "3rem" }}
                  >
                    <Avatar sx={{ marginTop: "1rem", bgcolor: "black" }}>
                      <FacebookRoundedIcon />
                    </Avatar>
                    <Avatar sx={{ marginTop: "1rem", bgcolor: "black" }}>
                      <EmailRoundedIcon />
                    </Avatar>
                    <Avatar sx={{ marginTop: "1rem", bgcolor: "black" }}>
                      <PhoneRoundedIcon />
                    </Avatar>
                    <Avatar sx={{ marginTop: "1rem", bgcolor: "black" }}>
                    <SchoolRoundedIcon />
                    </Avatar>
                   
                  </Stack>
          </Grid>
          <Grid item xs={12} md={7} sx={{ marginTop: '4rem' }}>
         
              <Carousel animation="slide" timeout={500} navButtonsAlwaysVisible={false}>
                {bannerImages.map((item, i) => (
                  <div key={item.name} style={carouselContainerStyle}>
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </Carousel>

          </Grid>
        </Grid>
      </Box>
    </Container>
    <div>
    <AboutCount/>
    </div>
    <div>
      <Carousel  fullHeightHover={false} >
        {collegeImages.map((item) => (
        <div key={item.name} style={carouselContainerStyle}>
          <img src={item.img}
          alt={item.name}
          style={{ maxWidth: '100%',maxHeight: '100%' }} />
        </div>
        ))}
      </Carousel>
    </div>
    <WhatsAppWidget
			phoneNo="7989769357"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={true}
			autoOpenTimer={5000}
			messageBox={true}
			// messageBoxTxt="Hi Team, is there any related service available ?"
			iconSize="50"
			iconColor="white"
			iconBgColor="green"
      headerIcon={`${prImg}`}
			headerIconColor="tomato"
			headerTxtColor="black"
			headerBgColor="tomato"
			headerTitle="Adrash Degree College"
			headerCaption="Online"
			bodyBgColor="#bbb"
			chatPersonName="Support"
			chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
			footerBgColor="#999"
			placeholder="Type a message.."
			btnBgColor="black"
			btnTxt="Start Chat"
			btnTxtColor="white"
		/>
    <Footer />
    </>
  )
}

export default Home;
