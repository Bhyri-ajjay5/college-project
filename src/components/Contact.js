import React, { Component, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SignUp from "./SignUp";
import { Container, Paper, Stack, Typography,Button } from "@mui/material";
import myImg from "../images/contact7.jpeg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Avatar from "@mui/material/Avatar";
import Footer from "./Footer";
import { MapContainer, TileLayer, Marker, Popup,Tooltip,LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import '../css/Contact.css'

const { BaseLayer } = LayersControl;
const customIcon = new L.Icon({//creating a custom httpicon to use in Marker
  iconUrl:"https://i.pinimg.com/564x/4a/7d/8a/4a7d8a25757d30b04c711fdf6c444b1f.jpg",
  iconSize: [25, 35],
  iconAnchor: [10, 30]
});

const Contact = () => {
  const [mapCoordinates,setMapCoordinates] = useState({center:[17.6868, 83.2185]})
  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1}} >
          <Grid container  >
            <Grid item xs={12} md={6} lg={6}>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Stack
                    direction={{ xs: "row", sm: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    sx={{ marginTop: "5rem", marginBottom: "3rem" }} // Add margin-top here
                  >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                      <FacebookRoundedIcon />
                    </Avatar>
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                      <EmailRoundedIcon />
                    </Avatar>
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                      <PhoneRoundedIcon />
                    </Avatar>
                  </Stack>
                </Grid>

                <Grid xs={12} style={{textAlign:"center"}}>
                <img
                  src={myImg}
                  alt="hello"
                  style={{ maxWidth: "90%", maxheight: "80vh"}} // Make the image responsive
                />
                </Grid>
 
            </Grid>
            <Grid item xs={12} md={6} lg={6}>

                <SignUp />

            </Grid>
            <Grid item xs={12}  sx={{m:2}}>
              <MapContainer center={mapCoordinates.center} zoom={18} 
                style={{ height:"30rem", width: "100%"  }}>
                <LayersControl>
                <Marker  icon={customIcon}  position={mapCoordinates.center}>
                  <Tooltip>
                    <Typography>Adarsh Degree College</Typography>
                  </Tooltip>
                </Marker>
                  <BaseLayer  name="OpenStreetMap">
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='OpenStreetMap'
                    />
                  </BaseLayer>
                  <BaseLayer checked name="Satellite View">
                  <TileLayer
                    url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                    maxZoom= {20}
                    subdomains={['mt1','mt2','mt3']}
                  />
                  </BaseLayer>
                </LayersControl>
              </MapContainer> 
            </Grid>
            <Grid item xs={12}>
            <Paper className='bg-overlay'>
              <div style={{textAlign:"center",color:"#ffff"}}>
                <Typography variant="h3" gutterBottom>Your Content Goes Here</Typography>
                <Typography gutterBottom>Additional content can be placed here.</Typography>
                <Button variant="contained">Get Started</Button>
              </div>
            </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};
export default Contact;
