import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "./providers/Lenis";
import { ThemeProvider } from "./providers/ThemeProvider";
import TwitterCard from "./components/TwitterCard";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: {
    default: "Vineet Jadhav - Design Engineer & Full-Stack Developer",
    template: "%s | Vineet Jadhav"
  },
  description: "22 y/o dev based in India. I create UIs, build landing pages, and sweat the small details so the product doesn't have to. Full-stack engineer specializing in React, Next.js, and modern web development.",
  keywords: ["Vineet Jadhav", "Design Engineer", "Full-Stack Developer", "React Developer", "Next.js", "UI/UX Designer", "Frontend Developer", "Web Developer India", "CreateXp Labs"],
  authors: [{ name: "Vineet Jadhav", url: "https://vineetop.com" }],
  creator: "Vineet Jadhav",
  metadataBase: new URL("https://vineetop.com"),
  openGraph: {
    title: "Vineet Jadhav - Design Engineer & Full-Stack Developer",
    description: "22 y/o dev based in India. I create UIs, build landing pages, and sweat the small details so the product doesn't have to.",
    type: "website",
    url: "https://vineetop.com",
    siteName: "Vineet Jadhav Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://vineetop.com/og.png",
        width: 1200,
        height: 630,
        alt: "Vineet Jadhav - Design Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vineet Jadhav - Design Engineer",
    description: "22 y/o dev based in India. I create UIs and build landing pages.",
    creator: "@Vineet2OP",
    images: ["https://vineetop.com/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden max-w-full">
      <head>
        <TwitterCard />
      </head>
      <body
        className={`${instrumentSerif.variable} ${inter.variable} antialiased overflow-x-hidden max-w-full`}
      >
        <ThemeProvider>
          {/* <LenisProvider> */}
          {children}
          {/* </LenisProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
