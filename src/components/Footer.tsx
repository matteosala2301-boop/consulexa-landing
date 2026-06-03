import Link from "next/link";
import { site } from "@/data/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.legal}>
        <span className={styles.company}>{site.legalName}</span>
        <span>{site.vat}</span>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={`mailto:${site.pec}`}>{site.pec}&nbsp;(PEC)</a>
        <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
      </div>
      <div className={styles.right}>
        <span className={styles.brand}>CONSULEXA</span>
        <span>{site.location}</span>
        <span>© {new Date().getFullYear()}</span>
        <Link href="/privacy" className={styles.privacy}>
          Privacy &amp; Cookies
        </Link>
      </div>
    </footer>
  );
}
