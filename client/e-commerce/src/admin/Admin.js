import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import TableViewIcon from "@mui/icons-material/TableView";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";
import PaidIcon from "@mui/icons-material/Paid";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import dashLogo from "../assets/logo.png";
import "./Admin.css";
import AddProduct from "./addproduct/AddProduct";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Admin() {
  const [open, setOpen] = React.useState(true);
  const [toggle, setToggle] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
    setToggle(!toggle);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          sx={{ backgroundColor: "#edf1f4" }}
        >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
                color: "black",
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, fontFamily: "Poppins", color: "black" }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon sx={{ color: "black" }} />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <div className="dashboardLogoContainer">
              <div className="dashboardLogo">
                <img src={dashLogo} alt="" />
              </div>
            </div>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <div className="listMainCOntainer">
            <div className="listContainer">
              <div className="firstLink">
                {toggle ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <AddAlarmIcon sx={{ fontSize: "28px" }} />
                    <p>Add Products</p>
                  </div>
                ) : (
                  <AddAlarmIcon sx={{ fontSize: "28px" }} />
                )}
              </div>
              <div className="secondLink">
                {toggle ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {" "}
                    <TableViewIcon sx={{ fontSize: "28px" }} />
                    <p>View Products</p>
                  </div>
                ) : (
                  <TableViewIcon sx={{ fontSize: "28px" }} />
                )}
              </div>
              <div className="thirdLink">
                {toggle ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {" "}
                    <AutoFixHighIcon sx={{ fontSize: "28px" }} />
                    <p>Edit Products</p>
                  </div>
                ) : (
                  <AutoFixHighIcon sx={{ fontSize: "28px" }} />
                )}
              </div>
              <div className="fourthLink">
                {toggle ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {" "}
                    <DeleteForeverIcon sx={{ fontSize: "28px" }} />
                    <p>Delete Products</p>
                  </div>
                ) : (
                  <DeleteForeverIcon sx={{ fontSize: "28px" }} />
                )}
              </div>
              <div className="fifthLink">
                {toggle ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {" "}
                    <FavoriteBorderIcon sx={{ fontSize: "28px" }} />
                    <p>Total Orders</p>
                  </div>
                ) : (
                  <FavoriteBorderIcon sx={{ fontSize: "28px" }} />
                )}
              </div>
              <div className="sixthLink">
                {toggle ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <PaidIcon sx={{ fontSize: "28px" }} />
                    <p>Total Earnings</p>
                  </div>
                ) : (
                  <PaidIcon sx={{ fontSize: "28px" }} />
                )}
              </div>
            </div>
          </div>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <AddProduct />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}></Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
