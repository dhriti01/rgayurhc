"use client";

import * as React from "react";
import Grid from "@mui/material/Grid";

export default function ImageCard(props) {
  return (
    <Grid
      item
      xs={12}
      md={4.7}
      style={{
        "--image-url": `url(${props.img})`,
      }}
      className="bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-top bg-origin-content bg-clip-content"
      sx={{
        minHeight: { xs: "50vh", md: 0 },
      }}
    ></Grid>
  );
}
