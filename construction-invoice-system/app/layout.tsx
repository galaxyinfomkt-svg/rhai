import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calazans Lumina - Invoice & Estimate System",
  description: "Professional invoicing and estimates for painting, construction, and house cleaning services in the USA.",
  keywords: ["invoice", "estimate", "painting", "construction", "house cleaning", "contractor"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
