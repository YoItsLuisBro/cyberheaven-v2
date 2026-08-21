import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cyberheaven.app"),

  title: {
    default: "Cyber Heaven",
    template: "%s | Cyber Heaven",
  },

  description:
    "Cyber Heaven builds focused software products for productivity, finance, business, and developers.",

  applicationName: "Cyber Heaven",

  creator: "Cyber Heaven LLC",
  publisher: "Cyber Heaven LLC",

  openGraph: {
    type: "website",
    siteName: "Cyber Heaven",
    title: "Cyber Heaven",
    description: "Focused software products built with purpose.",
    url: "https://cyberheaven.app",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cyber Heaven",
    description: "Focused software products built with purpose.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />

          <main className="flex-1">{children}</main>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
