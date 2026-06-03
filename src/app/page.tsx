import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Network from "@/components/Network";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { siteConfig } from "../../site.config";

export default function Home() {
  if (siteConfig.maintenance.enabled) {
    return null;
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Approach />
        <Network />
        <About />
        <Contact />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
