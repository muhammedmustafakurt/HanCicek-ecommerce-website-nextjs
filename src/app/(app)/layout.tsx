
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../../../public/assets/css/leaflet.min.css";
import "../../../public/assets/css/nice-select.min.css";
import "../../../public/assets/css/slick.min.css";
import "../../../public/assets/css/magnific-popup.min.css";
import "../../../public/assets/css/slicknav.min.css";
import "../../../public/assets/css/animate.min.css";
import "../../../public/assets/css/ionicons.min.css";
import "../../../public/assets/css/font-awesome.min.css";
import "../../../public/assets/css/bootstrap.min.css";
import "../../../public/assets/css/style.css";
import "../../../public/assets/css/helper.min.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Han Çiçekçilik & Organizasyon",
  description: "Han Çiçekçilik & Organizasyon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head>
          <title>Han Çiçekcilik & Organizasyon</title>
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          
          <Header />
          {children}
          <Footer />

        </body>
        
      </html>
      

      {/* Modernizr Min Js */}
    </>
  );
}
