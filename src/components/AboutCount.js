import React, { useRef, useState } from "react";
import { Container, Grid, Typography,Box} from "@mui/material";
import CountUp, { startAnimation } from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import BanImg from '../images/staff/bann3.JPG'

const countUpStyles = {
    fontSize:"40px",
    '@media (max-width:600px)':{
      fontSize:"5px",
      border:"1px solid black"
    }
  }
  const styles = {
    backgroundImage: `url(${BanImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: 'auto', // 100% viewport height
    width: '100%',    // 100% width of the container
  };
function AboutCount() {
    const [scrollStatus ,SetScrollStatus] = useState(true)
    const myCountUpRef = useRef(null)
    const onVisibilityChange = isVisible => {
      if (isVisible && scrollStatus) {
        // startAnimation(myCountUpRef.current);
             SetScrollStatus(false);
      }
    }
  return (
    <>
        <div style={styles}>
        <Box
              sx={{
                maxWidth: "60%",
                minHeight: "10vh",
                backgroundColor: 'black',
                padding:"40px",
                textAlign:"left",
                color:"white",
                margin:"1.2rem",
                flexGrow: 1
              }}
        >
        <Grid container rowSpacing={8}>
            <Grid item xs={12} >
                <Typography variant="h3"  >About Us</Typography> 
                <Typography  padding={"20px 0px"} >
                Adarsh Degree College, located in Vizag (Vishakapatnam) has embarked on a journey to provide world class management education 
                at an affordable range. We broaden horizons to pervade our focus on education, research and service and in turn open limitless opportunities 
                to every student.
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} >
                <Box>
                <VisibilitySensor onChange={onVisibilityChange} offset = {{ top: 
                10}} delayedCall>
                <CountUp start={0}  end={20}  redraw={true} duration={3} ref={myCountUpRef} style={countUpStyles}/>
                </VisibilitySensor>
                <Typography variant="h6" color={"Yellow"}>CLASSES</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} >
                <CountUp start={0} end={87} redraw={true} duration={6} style={countUpStyles}/>
                  <Typography variant="h6" color={"Yellow"}>REVIEWS</Typography>
            </Grid>
            <Grid item xs={12} md={6} >
                <CountUp start={0} end={12} redraw={true} duration={12} style={countUpStyles}/>
                  <Typography variant="h6" color={"Yellow"}>ACTIVITES</Typography>
            </Grid>
            <Grid item xs={12} md={6} >
                <CountUp start={0} end={45} redraw={true} duration={7}  style={countUpStyles}/>
                <Typography variant="h6" color={"Yellow"}>PRIZE LAURATES</Typography>
            </Grid>
        </Grid>
      </Box>
      </div>
    </>
  )
}

export default AboutCount