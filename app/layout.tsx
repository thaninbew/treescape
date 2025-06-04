import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { CurrencyProvider } from "@/contexts/CurrencyContext";

const salmaPro = localFont({
  src: "../public/fonts/salmapro.otf",
  variable: "--font-salma-pro",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resort Collection - Treescape & Mountainview",
  description: "Discover luxury accommodations at our Treescape and Mountainview resorts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${salmaPro.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <CurrencyProvider>
          <div className="flex-grow">{children}</div>
        </CurrencyProvider>
      </body>
    </html>
  );
}
