"use client";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    //
    <Box
      //className="bg-green-104"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      // style={{
      //   width: "100vw",
      //   position: "relative",
      //   left: `calc(-50vw + 50%)`,
      // }}
    >
      <Backdrop open={true} className="bg-green-104">
        <CircularProgress size="4rem" sx={{ color: "#02843F" }} />
      </Backdrop>
    </Box>
  );
}
