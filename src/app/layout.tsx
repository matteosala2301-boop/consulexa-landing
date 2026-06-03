import type { Metadata } from "next";
import { cormorant, manrope } from "@/lib/fonts";
import { site } from "@/data/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "CONSULEXA — Procurement, Sourcing & Advisory | Europe · Asia · ASEAN",
  description:
    "Independent procurement, sourcing and advisory for European companies working with China and ASEAN markets. Walter Galimberti — on the ground when it matters.",
  authors: [{ name: "Walter Galimberti" }],
  openGraph: {
    title: "CONSULEXA — Procurement, Sourcing & Advisory",
    description:
      "Independent consulting for European companies working with China and ASEAN markets. On the ground when it matters.",
    type: "website",
    url: site.url,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
