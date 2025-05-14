import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/clash-display.css";
import GridDecoration from "@/components/GridDecoration";
import FontAwesomeSetup from "@/components/FontAwesomeSetup";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "ADIE.AI",
  description: "Web3 automation platform built on the MCP protocol",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <FontAwesomeSetup />
        <GridDecoration />
        <div className="relative z-10 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
