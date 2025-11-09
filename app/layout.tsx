import {  ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { ThemeInit } from "../.flowbite-react/init";
import "./globals.css";
import NavBar from "../components/NavBar"


export const metadata: Metadata = {
  title: "Law & verdict task 1",
  description: "developed by priyanshu barai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className="flex flex-col min-h-screen">
        <ThemeInit />
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
