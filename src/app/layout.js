import "./globals.css";
import { inter, poppins, proximaNova } from "./fonts";
import Layout from "@/components/Layout";

export const metadata = {
  title: "RG Ayur Healthcare",
  description: "Official site of RG Ayur Healthcare",
};

export default function RootLayout() {
  return (
    <html
      lang="en"
      className={`${proximaNova.variable} ${poppins.variable} ${inter.variable}`}
    >
      <body>
        <Layout />
      </body>
    </html>
  );
}
