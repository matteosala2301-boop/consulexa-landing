import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.eyebrow}>EUROPE&nbsp;·&nbsp;ASIA&nbsp;·&nbsp;ASEAN</div>
      <h1 className={styles.title}>
        Procurement, sourcing and advisory for European companies working with{" "}
        <em>China and ASEAN</em> markets.
      </h1>
      <p className={styles.sub}>Independent consulting. On the ground when it matters.</p>
      <a href="#contact" className={styles.cta}>
        GET IN TOUCH
        <span className={styles.ctaArrow}>→</span>
      </a>
    </section>
  );
}
