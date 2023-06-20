"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { qualifications } from "../../../data/qualifications";

export default function MeetOurExpert() {
  return (
    <Box className="expertBox" sx={{ marginTop: 10 }}>
      <Typography
        variant="H3p5"
        component="div"
        sx={{ flexGrow: 1, marginBottom: 8 }}
        className={`font-inter font-semibold`}
        align="center"
      >
        Meet our Expert
      </Typography>

      <Grid container rowSpacing={6} columnSpacing={8}>
        <Grid
          item
          xs={12}
          md={6}
          className="bg-expert-image1 bg-no-repeat bg-cover bg-top bg-origin-content bg-clip-content"
          sx={{ paddingRight: { md: 0 }, minHeight: { xs: "75vh", md: 0 } }}
        ></Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="H4p5"
            component="div"
            sx={{ flexGrow: 1, mb: 3 }}
            className="font-semibold"
          >
            Qualifications & Experience:
          </Typography>

          {qualifications.map((item, idx) => (
            <ListItem disablePadding alignItems="flex-start" key={idx}>
              <ListItemIcon sx={{ minWidth: 35, marginTop: 0.5 }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1, textAlign: "left" }}
                  className={`font-inter text-black-107 font-light`}
                >
                  {idx + 1}.
                </Typography>
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ flexGrow: 1 }}
                    className={`font-inter text-black-107 font-light`}
                  >
                    {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}

          <Box className="expertCard" sx={{ marginTop: { xs: 6, md: 8 } }}>
            <Typography
              variant="H4pp5"
              component="div"
              sx={{ flexGrow: 1, marginBottom: 2 }}
              className={`font-inter text-white font-semibold`}
            >
              Dr. Rosy Gupta
            </Typography>
            <Typography
              variant="H7"
              component="div"
              sx={{ flexGrow: 1 }}
              className={`font-inter text-white font-semibold`}
            >
              Founder RG Ayur Healthcare
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ flexGrow: 1, marginBottom: 4, mt: 1 }}
              className={`font-inter text-white`}
            >
              B.A.M.S., M.D.{"("}Ay.{")"}, M.B.A.
              <br /> Ex-Prof. at SKSS AMC, Sarabha, Ldh.
              <br /> Associate Prof. at GAC Patiala
            </Typography>
            <Link href="#" sx={{ paddingRight: 1 }}>
              <FacebookIcon
                className="text-white"
                sx={{ fontSize: { xs: 26.7, md: 32 } }}
              />
            </Link>
            <Link href="#">
              <InstagramIcon
                className="text-white"
                sx={{ fontSize: { xs: 24, md: 28.8 } }}
              />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
