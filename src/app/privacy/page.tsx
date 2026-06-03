import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/data/content";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy & Cookies — CONSULEXA",
  description: "Privacy and cookie policy for consulexa.com.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className={styles.wrap}>
        <div className={styles.label}>LEGAL</div>
        <h1 className={styles.title}>Privacy &amp; Cookies</h1>
        <p className={styles.updated}>Last updated: June 2026</p>

        {/* NOTE: this is a baseline GDPR-aligned notice. Have it reviewed by a
            qualified professional before publishing — content is templated. */}

        <section className={styles.section}>
          <h2>Data controller</h2>
          <p>
            {site.legalName} ({site.vat}), based in {site.location}, is the data controller for
            personal data collected through this website. For any privacy-related request you can
            write to <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What data we collect</h2>
          <p>
            This website is a presentation site and does not require registration. We only process
            personal data that you voluntarily provide — for example your name, email address and
            message when you contact us directly by email or phone.
          </p>
        </section>

        <section className={styles.section}>
          <h2>How we use it</h2>
          <ul>
            <li>To reply to enquiries and provide the requested information.</li>
            <li>To manage a potential or existing professional relationship.</li>
            <li>To comply with legal and accounting obligations.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Legal basis</h2>
          <p>
            Processing is based on your consent and on the legitimate interest in responding to
            your enquiries (Art. 6 GDPR). Data is kept only for as long as necessary to fulfil
            these purposes and applicable legal retention requirements.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Cookies</h2>
          <p>
            This site does not use profiling or third-party advertising cookies. Only technical
            cookies strictly necessary to deliver the page may be used; these do not require prior
            consent. If analytics or other non-essential cookies are introduced in the future, a
            cookie banner with granular consent will be added here.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Your rights</h2>
          <p>
            Under the GDPR you have the right to access, rectify, erase, restrict and port your
            data, and to object to its processing. To exercise these rights, contact{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. You also have the right to lodge a
            complaint with the Italian Data Protection Authority (Garante per la protezione dei
            dati personali).
          </p>
        </section>

        <Link href="/" className={styles.back}>
          ← Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
