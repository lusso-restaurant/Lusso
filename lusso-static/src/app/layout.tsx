import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "@/components/layout/header";
import { DEFAULT_THEME } from "@/lib/theme-constants";
import "./globals.css";

// Luxury fonts for Lusso - optimized selection
const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lusso Restaurant",
  description: "Luxury dining experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider defaultTheme={DEFAULT_THEME} storageKey="lusso-theme">
          <Header />
          <main className="relative" style={{ paddingTop: '6rem', zIndex: 1 }}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
