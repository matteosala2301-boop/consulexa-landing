import type { Metadata } from "next";
import MaintenanceScreen from "@/components/MaintenanceScreen";
import { siteConfig } from "../../../site.config";

export const metadata: Metadata = {
  title: "In arrivo — CONSULEXA",
  description: siteConfig.maintenance.subtitle,
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return <MaintenanceScreen />;
}
