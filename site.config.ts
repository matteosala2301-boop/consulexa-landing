/**
 * Site-wide switches — edit here, then redeploy (`npm run deploy`).
 *
 * maintenance.enabled = true  → every visitor sees the coming-soon screen
 * maintenance.enabled = false → normal marketing site
 */

export const siteConfig = {
  maintenance: {
    enabled: false,
    title: "Qualcosa di nuovo sta arrivando",
    subtitle:
      "Stiamo preparando la nostra nuova presenza online. Torna a trovarci presto.",
    /** Mailto link using the email in src/data/content.ts */
    showContact: true,
  },
} as const;
