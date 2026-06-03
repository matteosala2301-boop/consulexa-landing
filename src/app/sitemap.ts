import type { MetadataRoute } from "next";
import { site } from "@/data/content";
import { isMaintenanceMode } from "@/lib/maintenance";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const home = {
    url: site.url,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
  };

  if (isMaintenanceMode()) {
    return [home];
  }

  return [
    home,
    {
      url: `${site.url}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
