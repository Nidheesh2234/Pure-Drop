import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Outfit for headings
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "PureDrop Water Solutions | Premium Water Delivery",
  description: "Ultra-hygienic purified drinking water delivered to homes, offices, and events in Visakhapatnam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, outfit.variable, "font-sans antialiased min-h-screen relative overflow-x-hidden")}>
        <ThemeProvider defaultTheme="system" storageKey="puredrop-theme">
          <div className="noise-bg" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
