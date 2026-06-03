import Nav from "./Nav";
import Hero from "./Hero";
import Manifesto from "./Manifesto";
import Services from "./Services";
import Approach from "./Approach";
import Network from "./Network";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import RevealOnScroll from "./RevealOnScroll";

export default function HomePage() {
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
