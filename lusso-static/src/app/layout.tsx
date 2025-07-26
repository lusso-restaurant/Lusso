import type { Metadata } from "next";
import { DM_Serif_Display, Lato } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "@/components/layout/header";
import "./globals.css";

// Luxury fonts for Lusso - optimized selection
const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
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
        className={`${dmSerifDisplay.variable} ${lato.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="light" storageKey="lusso-theme">
          <Header />
          <main className="relative" style={{ paddingTop: '6rem', zIndex: 1 }}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
