import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import UnifiedFooter from "@/components/shared/UnifiedFooter";
import InquiryBanner from "@/components/shared/InquiryBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <InquiryBanner />
        <UnifiedFooter
          currentProject="Black Cockatoo Valley"
          showProjects={true}
          customLinks={[
            { label: "Explore the Map", href: "/map" },
            { label: "Use the Farm", href: "/use-the-farm" },
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
