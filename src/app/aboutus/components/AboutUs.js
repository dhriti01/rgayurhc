"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function AboutUs() {
  return (
    <>
      <Box className="aboutUsBox" align="center">
        <Box>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, marginBottom: 3 }}
            className="font-semibold"
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: { xs: "center", lg: "justify" },
              textAlignLast: "center",
            }}
            className="text-black-107 font-normal"
          >
            Discover the transformative potential of Ayurveda, the ancient
            science of life and longevity. With the blessings of the Supreme and
            the knowledge envisaged by the great sages, Ayurveda has ever been
            the life nurturing science. At RG Ayur Healthcare, we provide you
            the comprehensive, personalized and holistic care. With a profound
            understanding of Ayurvedic principles, we offer personalized
            consultations, therapeutic treatments and diet management tailored
            to your unique needs. We help you both virtually and in-person to
            achieve optimal health and well-being.
          </Typography>
        </Box>
      </Box>

      <Box className="ourApproachBox">
        <Grid
          container
          rowSpacing={{ xs: 4, lg: 0 }}
          columnSpacing={{ lg: 15 }}
          justify="center"
        >
          <Grid item xs={12} lg={4}>
            <Typography
              variant="h3"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: { xs: "center", lg: "left" },
                mt: { lg: 4.5 },
              }}
              className={`font-inter font-semibold text-white`}
            >
              Our Approach
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={8}
            // sx={{ paddingLeft: { xs: 0, lg: 8 }, paddingBottom: 4 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: { xs: "center", lg: "left" },
                // textAlignLast: { xs: "center", lg: "left" },
              }}
              className={`font-inter text-white-101 font-normal`}
            >
              We aim to serve the community as we believe in treating the root
              cause of imbalance rather than just the symptoms. Our approach to
              healing is based on the fundamental principles of Ayurveda, which
              emphasizes the unique constitution of each individual and the
              importance of restoring harmony between mind, body and spirit.
              Through personalized treatment plans, herbal remedies, lifestyle
              guidance and spirituality, we help you achieve long lasting
              wellness.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
