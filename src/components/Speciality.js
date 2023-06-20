"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { specialities } from "../data/specialities";

export default function Speciality() {
  return (
    <Box className="specBox">
      <Typography
        variant="H3p5"
        component="div"
        sx={{ flexGrow: 1, mb: 8 }}
        className="font-bold"
        align="center"
      >
        Our Specialities
      </Typography>
      <Grid container rowSpacing={{ xs: 2, md: 0 }} columnSpacing={{ md: 10 }}>
        <Grid item xs={12} md={7}>
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  borderBottom: 2,
                  borderColor: "rgba(82, 82, 91, 0.25)",
                  pt: 4,
                  pb: 4,
                  pl: 2,
                }}
                className={`font-inter text-black-102 font-normal`}
              >
                We also offer treatments that improve your lifestyle and solve
                your health problems with the proper diagnosis. We specialise in
                the following treatments.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, pl: 2, pt: 2.5 }}
                className="text-black-104 font-semibold"
              >
                Specialities:
              </Typography>
            </Grid>
            {specialities.map((item) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={item}
                sx={{ alignItems: "center", display: "flex" }}
              >
                <ListItem disablePadding sx={{ paddingLeft: 2 }}>
                  <ListItemIcon>
                    <Image
                      src="/images/Shield.svg"
                      alt="->"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="bullet"
                    />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        className="text-black-102 font-medium"
                      >
                        {item}
                      </Typography>
                    }
                  />
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={5}>
          <Image
            src="/images/Doctor-cuate.svg"
            alt="logo"
            width="0"
            height="0"
            sizes="100vw"
            className="docVector"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
