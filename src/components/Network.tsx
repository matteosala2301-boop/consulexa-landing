import { network } from "@/data/content";
import styles from "./Network.module.css";

export default function Network() {
  return (
    <section className={styles.section} id="network">
      <div className="section-pad">
        <div className="section-label reveal">NETWORK</div>
        <p className="section-intro reveal">
          The partners behind CONSULEXA. Trusted people, in places where it matters.
        </p>

        <div className={styles.grid}>
          {network.map((partner) => (
            <div key={partner.name} className={`${styles.item} reveal`}>
              <div className={styles.country}>{partner.country}</div>
              <h3 className={styles.name}>{partner.name}</h3>
              {partner.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
