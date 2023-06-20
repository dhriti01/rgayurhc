"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";

export default function NoMatch() {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        mb: 5,
      }}
      className="text-black-107 font-normal"
      align="center"
    >
      No matching results.
    </Typography>
  );
}
