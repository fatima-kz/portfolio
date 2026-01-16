import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fatima Khalid | Software Developer",
  description: "Professional portfolio showcasing software development projects, skills, and experience in web development and AI integration.",
  keywords: ["software developer", "web developer", "portfolio", "MERN stack", "AI integration", "Next.js", "React"],
  authors: [{ name: "Fatima Khalid" }],
  creator: "Fatima Khalid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <Navbar />
        <iframe src="https://voice.ailabapp.com/embed/6969fd4a91b5917cc6ac8c31" allow="microphone" style="position: fixed; bottom: 0; right: 0; z-index: 9999; width: 100px; height: 180px; border: none; outline: none; background-color: none; padding-top:40px"></iframe>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
