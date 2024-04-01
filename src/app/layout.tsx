import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/navbar";
import { chakra, inter } from "./ui/fonts";


export const metadata: Metadata = {
  title: "Pocket Solar System",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <div className={`${chakra.className} antialiased`}>
          {children}
        </div>
      </body>
    </html>
  );
}
