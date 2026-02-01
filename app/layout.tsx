import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Instrument_Serif,
  Ubuntu_Sans,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap", // Optimisation du chargement des polices
});

const ubuntuSans = Ubuntu_Sans({
  subsets: ["latin"],
  variable: "--font-ubuntu-sans",
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Librairy Ui",
  description: "Librairy Ui",
  keywords: "nextjs, react, web development",
  authors: [{ name: "Tegakmd" }],
  openGraph: {
    type: "website",
    locale: "DRC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={cn(
        inter.variable,
        instrumentSerif.variable,
        ubuntuSans.variable,
        "no-scrollbar"
      )}>
      <body
        className={cn(geistSans.variable, geistMono.variable, "antialiased ")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
