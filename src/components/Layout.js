"use client";
import { useState, useEffect } from "react";
import Loading from "../app/loading";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./customTheme";

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {isLoading ? <Loading /> : <main>{children}</main>}
      <Footer />
    </ThemeProvider>
  );
}
