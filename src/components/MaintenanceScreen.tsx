import Logo from "./Logo";
import { site } from "@/data/content";
import { siteConfig } from "../../site.config";
import styles from "./MaintenanceScreen.module.css";

const { maintenance } = siteConfig;

export default function MaintenanceScreen() {
  return (
    <div className={styles.page}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.orb} aria-hidden="true" />
      <div className={styles.orbSecondary} aria-hidden="true" />

      <main className={styles.card}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          In costruzione
        </div>

        <Logo className={styles.logo} />

        <div className={styles.rule} aria-hidden="true">
          <span className={styles.ruleLine} />
          <span className={styles.ruleGem} />
          <span className={styles.ruleLine} />
        </div>

        <h1 className={styles.title}>{maintenance.title}</h1>
        <p className={styles.subtitle}>{maintenance.subtitle}</p>

        <div className={styles.progress} aria-hidden="true">
          <span className={styles.progressBar} />
        </div>

        <div className={styles.dots} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        {maintenance.showContact && (
          <a href={`mailto:${site.email}`} className={styles.contact}>
            {site.email}
          </a>
        )}

        <p className={styles.footer}>
          {site.legalName} · {site.location}
        </p>
      </main>
    </div>
  );
}
