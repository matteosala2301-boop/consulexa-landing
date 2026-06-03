import { site } from "@/data/content";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className="section-pad" id="contact">
      <h2 className={`${styles.headline} reveal`}>Direct contact.</h2>

      <div className={styles.grid}>
        <div className={`${styles.block} reveal`}>
          <span className={styles.name}>{site.person}</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
        </div>
        <div className={`${styles.block} reveal`}>
          <a href={site.linkedin} target="_blank" rel="noopener">
            LinkedIn →
          </a>
          <span className={styles.based}>Based in {site.location}</span>
        </div>
      </div>
    </section>
  );
}
