import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rapture Holdings (Pty) Ltd — Office Supply Solutions",
  description:
    "Premium office supplies, printer maintenance, and corporate procurement solutions for businesses across South Africa. Bulk orders, B2B portal, and fast delivery.",
  keywords: [
    "office supplies",
    "printer maintenance",
    "toner cartridges",
    "B2B",
    "corporate procurement",
    "South Africa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
