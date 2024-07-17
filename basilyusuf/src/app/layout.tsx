// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Providers from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Basil Yusuf",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
