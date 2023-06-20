"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//import Link from "@mui/material/Link";
import Link from "next/link";

const drawerWidth = 240;
const navItems = ["Home", "About Us", "Treatments", "Blog"];

function Header(props) {
  const pathname = usePathname();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText
              disableTypography
              primary={
                <Button
                  variant="contained"
                  className="appointmentButton"
                  href="https://calendly.com/rgayurhc/appointment"
                >
                  <Typography
                    variant="H7"
                    component="div"
                    sx={{ flexGrow: 1 }}
                    className="text-white font-bold capitalize"
                  >
                    Appointment
                  </Typography>
                </Button>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                disableTypography
                primary={
                  <Link
                    key={item}
                    href={`/${
                      item === "Home"
                        ? ""
                        : item.replace(/\s+/g, "").toLowerCase()
                    }`}
                    className="no-underline"
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1 }}
                      className={`navText ${
                        pathname ==
                        (item === "Home"
                          ? "/"
                          : "/" + item.replace(/\s+/g, "").toLowerCase())
                          ? "navActive"
                          : ""
                      }`}
                    >
                      {item}
                    </Typography>
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ alignItems: "center" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "#FFF",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          boxShadow: "none",
          borderBottom: 1,
          borderColor: "rgba(82, 82, 91, 0.25)",
          pt: 2,
          pb: 2,
          pl: { xs: 3, lg: "5.33vw" },
          pr: { xs: 2, lg: "5.33vw" },
        }}
        style={{ left: 0 }}
        className="header"
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              height: 58,
              pr: 1,
            }}
            className="logo"
          >
            <Image src="/images/Logo.svg" alt="logo" width="64" height="64" />
          </Box>
          <Typography
            variant="H4p5"
            component="div"
            sx={{ flexGrow: 1 }}
            className="text-green-100 font-bold font-proximaNova"
          >
            RG Ayur Healthcare
          </Typography>

          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${
                  item === "Home" ? "" : item.replace(/\s+/g, "").toLowerCase()
                }`}
              >
                <Typography
                  variant="h6"
                  sx={{ ml: `${item === "Home" ? 0 : "5.56vw"}` }}
                  className={`navText ${
                    pathname ==
                    (item === "Home"
                      ? "/"
                      : "/" + item.replace(/\s+/g, "").toLowerCase())
                      ? "navActive"
                      : ""
                  }`}
                  noWrap
                >
                  {item}
                </Typography>
              </Link>
            ))}
          </Box>
          <Button
            variant="contained"
            className="appointmentButton"
            href="https://calendly.com/rgayurhc/appointment"
            sx={{ display: { xs: "none", lg: "flex" }, ml: "3.19vw" }}
          >
            <Typography
              variant="H7"
              component="div"
              sx={{ flexGrow: 1 }}
              className="text-white font-bold capitalize"
            >
              Appointment
            </Typography>
          </Button>
          <IconButton
            size="large"
            color="#000"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          PaperProps={{
            style: {
              position: "absolute",
            },
          }}
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
