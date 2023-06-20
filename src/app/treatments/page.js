"use client";

import TreatmentBanner from "./components/TreatmentBanner";
import TreatmentsList from "./components/TreatmentsList";
import GetInTouch from "@/components/GetInTouch";

import Box from "@mui/material/Box";

export default function Home() {
  return (
    <>
      <Box className="backgroundBox">
        <TreatmentBanner />
        <TreatmentsList />
        <GetInTouch />
      </Box>
    </>
  );
}
