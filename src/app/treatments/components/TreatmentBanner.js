"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function TreatmentBanner() {
  return (
    <Box
      align="center"
      sx={{
        minHeight: "36.76vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pb: 4,
        pt: 5,
      }}
    >
      <Box sx={{ width: "71.1vw", ml: "auto", mr: "auto" }}>
        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 1, marginBottom: 3 }}
          className="font-semibold"
        >
          Treatments
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
          Our experienced team of Ayurvedic practitioners is committed to your
          well-being. With ancient wisdom and best treatments, we provide a
          holistic approach to health that suits your individual needs
        </Typography>
      </Box>
    </Box>
  );
}
