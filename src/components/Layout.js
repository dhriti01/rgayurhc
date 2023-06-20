"use client";
import { useState, useEffect } from "react";
import Loading from "../app/loading";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../app/customTheme";
import "../app/globals.css";

export default function Layout(props) {
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
      {isLoading ? <Loading /> : <main>{props.child}</main>}
      <Footer />
    </ThemeProvider>
  );
}
