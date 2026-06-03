import type { Metadata } from "next";
import MaintenanceScreen from "@/components/MaintenanceScreen";
import { cormorant, manrope } from "@/lib/fonts";
import { site } from "@/data/content";
import { siteConfig } from "../../site.config";
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
  const fontClass = `${cormorant.variable} ${manrope.variable}`;

  if (siteConfig.maintenance.enabled) {
    return (
      <html lang="it" className={fontClass}>
        <body>
          <MaintenanceScreen />
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className={fontClass}>
      <body>{children}</body>
    </html>
  );
}
