import type { Metadata } from "next";
import { cormorant, manrope } from "@/lib/fonts";
import { isMaintenanceMode } from "@/lib/maintenance";
import { site } from "@/data/content";
import { siteConfig } from "../../site.config";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  if (isMaintenanceMode()) {
    return {
      metadataBase: new URL(site.url),
      title: "In arrivo — CONSULEXA",
      description: siteConfig.maintenance.subtitle,
      robots: { index: false, follow: false },
      icons: {
        icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
      },
    };
  }

  return {
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={isMaintenanceMode() ? "it" : "en"}
      className={`${cormorant.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
