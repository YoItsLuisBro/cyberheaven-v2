import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cyber Heaven",
    template: "%s | Cyber Heaven",
  },
  description:
    "Cyber Heaven builds focused software products for productivity, finance, business, and developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
