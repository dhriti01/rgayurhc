import "./globals.css";
import { inter, poppins, proximaNova } from "./fonts";
import Layout from "@/components/Layout";

export const metadata = {
  title: "RG Ayur Healthcare",
  description: "Official site of RG Ayur Healthcare. Pure Ayurvedic solutions for all ailments. Building trustable relationship with patients for 20+ years",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${proximaNova.variable} ${poppins.variable} ${inter.variable}`}
    >
      <body>
        <Layout child={children} />
      </body>
    </html>
  );
}
