import type { Metadata } from "next";
import { Fraunces, Source_Serif_4, Work_Sans } from "next/font/google";
import "./globals.css";
import UnifiedFooter from "@/components/shared/UnifiedFooter";
import InquiryBanner from "@/components/shared/InquiryBanner";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Black Cockatoo Valley | Workshops, Events & Retreats on Jinibara Country",
  description: "150 acres of threatened species habitat available for workshops, events, weddings, retreats, and R&D residencies. On Jinibara Country, Sunshine Coast Hinterland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${sourceSerif.variable} ${workSans.variable} antialiased`}
      >
        <main className="min-h-screen">
          {children}
        </main>
        <InquiryBanner />
        <UnifiedFooter
          currentProject="Black Cockatoo Valley"
          showProjects={true}
          customLinks={[
            { label: "Stay", href: "/stay" },
            { label: "Explore the Map", href: "/map" },
            { label: "Use the Farm", href: "/use-the-farm" },
            { label: "Gallery", href: "/gallery" },
            { label: "Stories", href: "/stories" },
            { label: "June's Patch", href: "/junes-patch" },
            { label: "About", href: "/about" },
            { label: "Get in Touch", href: "/connect" },
          ]}
          contactEmail="hello@acurioustractor.com"
        />
      </body>
    </html>
  );
}
