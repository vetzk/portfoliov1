import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Rubik_Mono_One } from "next/font/google";
import Navbar from "@/components/Navbar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const rubikMonoOne = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik-mono-one",
});

export const metadata: Metadata = {
  title: "Alfred",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubikMonoOne.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
