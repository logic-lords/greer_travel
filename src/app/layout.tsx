import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./home/components/navBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monitoring CO2",
  description: "Calculate CO2 emisions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <NavBar/>
        </div>
        {children}</body>
    </html>
  );
}
