import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import UnifiedFooter from "@/components/shared/UnifiedFooter";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Curious Tractor Farm | Black Cockatoo Valley",
  description: "Low-impact eco-residencies and R&D prototyping at Black Cockatoo Valley. Immersive conservation-first experiences on Jinibara lands.",
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
        <UnifiedFooter
          currentProject="ACT Farm"
          showProjects={true}
          customLinks={[
            { label: "About", href: "/about" },
            { label: "Activities", href: "/activities" },
            { label: "Residencies", href: "/residencies" },
            { label: "Accommodation", href: "/accommodation" },
            { label: "Connect", href: "/connect" },
          ]}
          contactEmail="hello@acurioustractor.com"
        />
        <ChatWidget />
      </body>
    </html>
  );
}
