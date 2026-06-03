import { principles } from "@/data/content";
import styles from "./Approach.module.css";

export default function Approach() {
  return (
    <section className="section-pad" id="approach">
      <div className="section-label reveal">APPROACH</div>
      <p className="section-intro reveal">A few principles, kept simple.</p>

      <div className={styles.principles}>
        {principles.map((principle) => (
          <div key={principle.title} className={`${styles.principle} reveal`}>
            <h3>{principle.title}</h3>
            <p>{principle.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
