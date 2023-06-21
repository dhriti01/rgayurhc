"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Image from "next/image";
import { StyledEngineProvider } from "@mui/material/styles";
// import { HashLink as HLink } from "react-router-hash-link";

export default function HomeIntro() {
  return (
    <StyledEngineProvider injectFirst>
      <Box className="homeIntroBox">
        <Grid container rowSpacing={{ xs: 3, md: 0 }} columnSpacing={{ md: 3 }}>
          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Box sx={{ mt: "auto", mb: "auto" }}>
              <Typography
                variant="mainH3p5"
                component="div"
                sx={{ flexGrow: 1, mb: 3 }}
                className="font-bold"
              >
                Pure Ayurvedic solutions for all ailments
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, mb: 3 }}
                className="text-black-101 font-normal"
              >
                Building trustable relationship with patients for 15+ years
              </Typography>
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
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/HappyDoc.png"
              alt="logo"
              width="0"
              height="0"
              sizes="100vw"
              className="happyDoc"
            />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid
          container
          className="getService"
          rowSpacing={{ xs: 4, lg: 0 }}
          justify="center"
        >
          <Grid
            item
            xs={12}
            lg={7.52}
            align="center"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box sx={{ ml: { xs: "auto", lg: 0 }, mr: "auto" }}>
              <Typography
                variant="H3p5"
                component="div"
                sx={{ flexGrow: 1, textAlign: { xs: "center", sm: "left" } }}
                className="text-white font-semibold"
              >
                How to get our service?
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, textAlign: { xs: "center", sm: "left" } }}
                className="text-white font-normal"
              >
                Just follow these simple steps:
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={2.24}>
            <Paper
              elevation={1}
              className="getServiceCard"
              align="center"
              sx={{
                mr: { xs: "auto", lg: 0 },
                ml: "auto",
                width: { xs: 0.625, sm: 0.786 },
                height: "100%",
              }}
            >
              <Box
                alignItems="center"
                justifyContent="center"
                sx={{ marginBottom: 2 }}
              >
                <Image
                  src="/images/Call.svg"
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="gitLogo"
                />
              </Box>
              <Link
                href="tel:+919815818190"
                className={`font-inter text-black-100 font-semibold no-underline`}
              >
                <Typography
                  variant="H7"
                  align="center"
                  display="block"
                  className={`font-inter text-black-100 font-semibold no-underline`}
                >
                  Call for appointment
                </Typography>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={2.24}>
            <Paper
              elevation={1}
              className="getServiceCard"
              sx={{
                mr: { xs: "auto", lg: 0 },
                ml: "auto",
                width: { xs: 0.625, sm: 0.786 },
                height: "100%",
              }}
            >
              <Box
                alignItems="center"
                justifyContent="center"
                sx={{ marginBottom: 2 }}
              >
                <Image
                  src="/images/Date.svg"
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="gitLogo"
                />
              </Box>
              <Link
                href="https://calendly.com/rgayurhc/appointment"
                className={`font-inter text-black-100 font-semibold no-underline`}
              >
                <Typography
                  variant="H7"
                  align="center"
                  display="block"
                  className={`font-inter text-black-100 font-semibold no-underline`}
                >
                  Book a Date & Slot
                </Typography>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </StyledEngineProvider>
  );
}
