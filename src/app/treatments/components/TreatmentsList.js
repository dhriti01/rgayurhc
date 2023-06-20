"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import ImageCard from "./ImageCard";
import DescriptionCard from "./DescriptionCard";
import { treatments } from "../../../data/treatments";

export default function TreatmentsList() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      className="treatmentsBox"
      align="center"
      sx={{ pt: { xs: "7.5vw", md: "5vw" }, pb: { xs: "7.5vw", md: "5vw" } }}
    >
      <Box sx={{ width: { xs: "75vw", md: "80vw" } }} align="left">
        {treatments.map((item, idx) =>
          matches && idx % 2 !== 0 ? (
            <Grid
              key={idx}
              container
              rowSpacing={{ xs: 4, md: 0 }}
              columnSpacing={6}
              sx={{ mt: { xs: 5, md: 10 } }}
            >
              <DescriptionCard item={item} />
              <ImageCard img={item.img} />
            </Grid>
          ) : (
            <Grid
              key={idx}
              container
              rowSpacing={{ xs: 4, md: 0 }}
              columnSpacing={6}
              sx={{
                mt: { xs: 5, md: 10 },
                ...(idx === 0 && { mt: 0 }),
              }}
            >
              <ImageCard img={item.img} />
              <DescriptionCard item={item} />
            </Grid>
          )
        )}
      </Box>
    </Box>
  );
}
