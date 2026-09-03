import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CustomCursor from "./components/ui/CustomCursor";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import TickerStrip from "./components/ui/TickerStrip";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Native high-performance scroll with ScrollTrigger refresh
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <Hero />
        <TickerStrip theme="subtle" speed={35} />
        <About />
        <Experience />
        <Projects />
        <TickerStrip
          theme="subtle"
          direction="right"
          speed={40}
          items={[
            "SIGNALR TELEMETRY",
            "ANGULAR 21 SIGNALS",
            "OFFLINE RESILIENCE",
            "ENTERPRISE PRODUCTION",
            "ARABIC RTL SYSTEMS",
            "RxJS ARCHITECTURE",
            "TOUCH & KIOSK POS",
            "9+ CLIENT PLATFORMS",
          ]}
        />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
