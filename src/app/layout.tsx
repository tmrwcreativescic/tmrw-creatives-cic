import type { Metadata } from "next";
import { League_Spartan, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tmrwcreatives.co.uk"),
  title: "TMRW Creatives CIC | Medway's Creative Launchpad for Young People",
  description: "TMRW Creatives connects young people aged 12-30 in Medway with real industry access, skills development, and pathways into music and the creative industries.",
  keywords: "music, creative industries, Medway, youth, young people, songwriting, production, mentorship, artist development",
  openGraph: {
    title: "TMRW Creatives CIC",
    description: "The industry starts here. Real skills. Real connections. Real pathways.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TMRW Creatives CIC",
    description: "The industry starts here. Real skills. Real connections. Real pathways.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${leagueSpartan.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
