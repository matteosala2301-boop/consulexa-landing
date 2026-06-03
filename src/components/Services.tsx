import { services } from "@/data/content";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className="section-pad">
        <div className="section-label reveal">SERVICES</div>
        <p className="section-intro reveal">
          A focused set of services for companies that need a reliable presence between Europe
          and Asia.
        </p>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.title} className={`${styles.item} reveal`}>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
