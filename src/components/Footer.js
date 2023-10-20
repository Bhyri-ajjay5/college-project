import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Stack, Typography } from "@mui/material";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "black", color: "white" }}>
      <Container>
        <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
            <p></p>
          {/* About Us */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5">About Us</Typography>
            <p style={{ marginTop: "1rem" }}>
              Adarsh Degree College, located in Vizag (Vishakapatnam), provides
              world-class management education at an affordable range.
            </p>
          </Grid>

          {/* Contact Us */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5">Contact Us</Typography>
            <p></p>
            <Stack direction="column" alignItems="flex-start" spacing={1}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <PlaceRoundedIcon sx={{ color: "yellow" }} />
                <Typography variant="body1">
                  Beside SBI, Pendurthi, <label> Visakhapatnam.</label>
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <EmailRoundedIcon sx={{ color: "yellow" }} />
                <Link href="mailto:info@adarshdc.com" sx={{ color: "yellow" }}>
                  info@adarshdc.com
                </Link>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <PhoneRoundedIcon sx={{ color: "yellow" }} />
                <Typography variant="body1">91+ 90301 99991</Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5">Quick Links</Typography>
            <Stack direction="column">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/About" },
                { label: "Courses", to: "/Courses" },
                { label: "Gallery", to: "/Gallery" },
                { label: "Contact", to: "/Contact" },
              ].map((item, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  style={{ marginTop: "1rem" }}
                >
                  <CheckRoundedIcon
                    sx={{ color: "yellow", marginRight: "8px" }}
                  />
                  <Link to={item.to} style={{ color: "white" }}>
                    {item.label}
                  </Link>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
        <p></p>
      </Container>

      {/* Copyright */}
      <div style={{ backgroundColor: "#121212", color: "white" }}>
        <Typography sx={{ textAlign: "center", padding: "1rem" }}>
          Copyright @ Adarsh Degree College 2023
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
