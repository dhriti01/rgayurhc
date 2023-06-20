"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Image from "next/image";

import { contactDetails } from "../data/contactDetails";

export default function GetInTouch() {
  return (
    <Box className="gitBox" id="getInTouch">
      <Grid container rowSpacing={5}>
        <Grid item xs={12}>
          <Typography
            variant="H3p5"
            component="div"
            sx={{ flexGrow: 1 }}
            className="font-bold"
            align="center"
          >
            Get in touch...
          </Typography>

          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, borderBottom: 2, pt: 3.4, pb: 3.4 }}
            className="text-black-102 font-normal border-black-106"
            align="center"
          >
            Contact us for pure Ayurvedic treatment to your health problems
          </Typography>
        </Grid>

        {contactDetails.map((item, idx) => (
          <Grid item xs={12} md={4} key={item.title} align="center">
            <Paper
              elevation={1}
              className="gitCard"
              sx={{
                width: { xs: 3 / 4, md: 9 / 10, xl: 3 / 4 },
                height: "100%",
              }}
            >
              <Box alignItems="center" justifyContent="center">
                <Image
                  src={item.image}
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="gitLogo"
                />
              </Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, pt: 4, pb: 1.2 }}
                className="text-black-102 font-normal"
                align="center"
              >
                {item.title}
              </Typography>

              <Link
                href={item.link}
                className="text-black font-medium no-underline"
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1, wordWrap: "break-word" }}
                  className="text-black font-medium no-underline"
                  align="center"
                >
                  {item.detail}
                </Typography>
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
