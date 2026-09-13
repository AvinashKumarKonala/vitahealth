import type { Metadata } from "next";
import { Outfit, Fraunces, Caveat } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VitaHealth — Your health. One smarter place.",
    template: "%s | VitaHealth",
  },
  description:
    "Shop wellness products, consult verified doctors, track your health, and get AI-powered insights — all in one place.",
  keywords: [
    "health",
    "wellness",
    "supplements",
    "telemedicine",
    "nutrition",
    "VitaHealth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
