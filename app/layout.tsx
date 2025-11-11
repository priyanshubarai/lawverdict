import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { ThemeInit } from "../.flowbite-react/init";
import "./globals.css";
import NavBar from "../components/NavBar";
import { Auth0Provider } from "@auth0/nextjs-auth0/client";

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
      <body className="flex min-h-screen flex-col">
        <Auth0Provider>
          <ThemeInit />
          <NavBar />
          {children}
        </Auth0Provider>
      </body>
    </html>
  );
}
