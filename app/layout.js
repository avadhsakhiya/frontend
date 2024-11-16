'use client'
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import auth from "@/store/auth";
import { useEffect } from "react";


const geistSans = localFont({
  src: "./fonts/Geist[wght].woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  useEffect(()=>{
    auth.getUser()
  })
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`} 
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
