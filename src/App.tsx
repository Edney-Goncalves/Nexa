import { useReveal } from "./hooks/useReveal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import CtaBand from "./components/CtaBand";
import Benefits from "./components/Benefits";
import Process from "./components/Process";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <CtaBand />
        <Benefits />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
