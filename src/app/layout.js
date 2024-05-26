import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import TopMenu from "@/components/TopMenu";
import Footer from "@/components/Footer";

export const metadata = {
      title: "Appscrip",
      description: "e commerce application front end ",
};
export const viewport = {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
      // Also supported by less commonly used
      // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({ children }) {
      return (
            <html lang="en">
                  <link rel="icon" href="/favicon.svg" sizes="any" />;
                  <link
                        rel="apple-touch-icon"
                        href="/favicon.svg"
                        sizes="any"
                  />
                  <body className=" ">
                        <TopBar></TopBar>
                        <NavBar></NavBar>
                        <TopMenu />
                        {children}
                        <Footer />
                  </body>
            </html>
      );
}
