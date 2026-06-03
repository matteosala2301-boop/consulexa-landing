import styles from "./Manifesto.module.css";

export default function Manifesto() {
  return (
    <section className={styles.manifesto}>
      <h2 className={`${styles.headline} reveal`}>
        CONSULEXA is <em>a person</em>, not a firm.
      </h2>
      <p className={`${styles.sub} reveal`}>
        Walter Galimberti — twenty years across China and ASEAN, now operating from Europe.
      </p>
    </section>
  );
}
