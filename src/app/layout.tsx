import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechPodCast - Learn while you listen",
  description: "Empower your tech journey with audio-first content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <div className="max-w-6xl min-h-[90vh] mx-auto">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
