import { siteConfig } from "../../site.config";

/** Read at build time — change site.config.ts then redeploy. */
export function isMaintenanceMode(): boolean {
  return siteConfig.maintenance.enabled;
}
