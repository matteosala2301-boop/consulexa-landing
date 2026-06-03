import { about } from "@/data/content";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={`${styles.label} reveal`}>ABOUT</div>
        <h2 className={`${styles.headline} reveal`}>{about.headline}</h2>
        <div className={styles.body}>
          {about.paragraphs.map((text, i) => (
            <p key={i} className="reveal">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
