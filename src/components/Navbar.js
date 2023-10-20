import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";
import AdrsLogo from "../images/logo11.png";
import '../App.css'

const pages = [
  "Home",
  "About",
  "Courses",
  "Projects",
  "Admissions",
  "Gallery",
  "contact",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <AppBar position="sticky"
    sx={{
      backgroundColor: scrolled ? "black" : "primary",
      transition: "background-color 0.3s",
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img
      src={AdrsLogo}
      alt="Logo"
      style={{
       height:'40px',
        marginRight: '1px',
        display: 'none', // Default to 'none'
      }}
      sx={{
        display: { xs: 'none', md: 'flex' }, // Override display for xs and md screens
      }}
    />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ADARSH
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "center", // Center-align the links,
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu 
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none"}
              }}
            >
              <Box style={{backgroundColor:"white",flexGrow:"1"}}>
                {pages.map((page) => (
  <Button
    key={page}
    onClick={handleCloseNavMenu}
    sx={{
      my: 2,
      color: "black",
      display: "block",
    }}
  >
    <NavLink
      to={`/${page}`}
      style={{ textDecoration: "none", color: "black"}}
      activeClassName="active-link" // Add this line to apply the class for the active link
    >
      {page}
    </NavLink>
  </Button>
))} 
              </Box>
              {/* {pages.map((page) => (
  <Button
    key={page}
    onClick={handleCloseNavMenu}
    sx={{
      my: 2,
      color: "black",
      display: "block",
    }}
  >
    <NavLink
      to={`/${page}`}
      style={{ textDecoration: "none", color: "black"}}
      activeClassName="active-link" // Add this line to apply the class for the active link
    >
      {page}
    </NavLink>
  </Button>
))} */}

            </Menu>
          </Box>
          <img src={AdrsLogo} alt="Logo" style ={{height: "40px"}} sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ADARSH
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center", // Center-align the links
              
            }}
          >
            {pages.map((page) => (
  <Button
    key={page}
    onClick={handleCloseNavMenu}
    sx={{
      my: 2,
      display: "block",
    }}
    style={{color:"black"}}
  >
    <NavLink
      to={`/${page}`}
      style={{ textDecoration: "none", color: "white" }}
      activeClassName="active-link" // Add this line to apply the class for the active link
    >
      {page}
    </NavLink>
  </Button>
))}

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>A</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
