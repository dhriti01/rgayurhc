"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import { inter, poppins, proximaNova } from "./fonts";
import Loading from "./loading";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./customTheme";

export const metadata = {
  title: "RG Ayur Healthcare",
  description: "Official site of RG Ayur Healthcare",
};

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <html
      lang="en"
      className={`${proximaNova.variable} ${poppins.variable} ${inter.variable}`}
    >
      <body>
        <ThemeProvider theme={theme}>
          <Header />
          {isLoading ? <Loading /> : <main>{children}</main>}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
