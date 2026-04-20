import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Isa Haameem | Backend Engineer",
  description: "Portfolio of Muhammad Isa Haameem, Backend & Distributed Systems Engineer based in Chennai, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-neutral-200 antialiased selection:bg-accent selection:text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}