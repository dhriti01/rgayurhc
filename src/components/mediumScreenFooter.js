"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Link1 from "next/link";
import Image from "next/image";

export const mediumScreenFooter = (
  <Box className="footerBox" sx={{ display: { xs: "none", md: "flex" } }}>
    <Grid container spacing={0}>
      <Grid item xs={12} md={3} className="footerColumn">
        <Paper
          square
          elevation={0}
          className="bg-green-100"
          sx={{ width: 0.645, height: "100%" }}
        >
          <Avatar
            sx={{
              height: 79.85,
              width: 88,
              backgroundColor: "white",
              borderRadius: "8px",
              overflow: "hidden",
            }}
            variant="rounded"
          >
            <Image src="/images/Logo.svg" alt="logo" fill />
          </Avatar>

          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, pt: 4 }}
            className="text-white font-bold font-proximaNova"
          >
            RG Ayur Healthcare
          </Typography>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        md={3.5}
        lg={3}
        align="center"
        className="footerColumn"
        sx={{ border: 1 }}
      >
        <Paper
          square
          elevation={0}
          className="bg-green-100"
          sx={{ width: 0.645, height: "100%" }}
          align="left"
        >
          <Typography
            variant="H4p5"
            component="div"
            sx={{ flexGrow: 1, marginBottom: 5 }}
            className="text-white font-semibold"
          >
            Want to visit our clinic ?
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ flexGrow: 1, marginBottom: 1 }}
            className="text-white font-normal"
          >
            Mon-Sat {"\u00A0\u00A0\u00A0"} 5pm-8pm
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ flexGrow: 1, marginBottom: 1 }}
            className="text-white font-normal"
          >
            Sun {"\u00A0\u00A0\u00A0"} 11am-2pm
          </Typography>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        lg={3.5}
        className="footerColumn"
        align="center"
        sx={{ border: 1 }}
      >
        <Paper
          square
          elevation={0}
          sx={{ width: 0.645, height: "100%" }}
          className="bg-green-100"
          align="left"
        >
          <Typography
            variant="H7"
            component="div"
            sx={{ flexGrow: 1 }}
            className="text-white font-semibold"
          >
            Important Links
          </Typography>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: 3 }}
          >
            <Grid item xs={12} lg={6}>
              <Link href="/blog" className="text-white font-normal">
                Blogs
              </Link>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Link href="#" className="text-white font-normal">
                Instagram
              </Link>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Link href="#" className="text-white font-normal">
                Facebook
              </Link>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Link1
                href="#getInTouch"
                className="text-white font-normal"
                noWrap
              >
                Contact Us
              </Link1>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        md={2.5}
        className="footerColumn"
        align="right"
        style={{ border: 0 }}
      >
        <Paper
          square
          elevation={0}
          sx={{ width: 0.8225, height: "100%" }}
          className="bg-green-100"
          align="left"
        >
          <Typography
            variant="body2"
            component="div"
            sx={{ flexGrow: 1 }}
            className="text-white font-normal"
          >
            Reach out to us at:
          </Typography>

          <Typography
            variant="body1"
            component="div"
            sx={{ flexGrow: 1, marginBottom: 4, marginTop: 3 }}
            className="text-white font-bold"
          >
            rgayurhc@gmail.com
          </Typography>
          <Typography
            variant="H7"
            component="div"
            sx={{ flexGrow: 1 }}
            className="text-white font-bold"
          >
            Address:
          </Typography>

          <Typography
            variant="body1"
            component="div"
            sx={{ flexGrow: 1 }}
            className="text-white font-normal"
          >
            53, Phulkian Enclave, <br />
            Near Mini Secretariat, <br />
            Patiala, Punjab, India
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);
