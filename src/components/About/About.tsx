import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "../../data/portfolioData";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  const aboutText =
    "I build enterprise Angular systems that handle real-time data streams, work offline, and serve millions. From SignalR-powered live dashboards to Arabic RTL component libraries, I engineer front-end solutions that are production-grade from day one. Every line of code is written for scale, reliability, and speed.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word-by-word reveal on scroll
      if (textRef.current) {
        const words = textRef.current.querySelectorAll(".about-word");
        gsap.fromTo(
          words,
          { opacity: 0.12 },
          {
            opacity: 1,
            duration: 0.3,
            stagger: 0.06,
            ease: "none",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 75%",
              end: "bottom 40%",
              scrub: 1,
            },
          }
        );
      }

      // Pillars horizontal scroll
      if (pillarsRef.current) {
        const cards = pillarsRef.current.querySelectorAll(".pillar-card-v2");
        
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = portfolioData.engineeringPillars || [];

  return (
    <section id="about" className="about-section-v2" ref={sectionRef}>
      <div className="about-container-v2">
        {/* Eyebrow */}
        <span className="about-eyebrow">About</span>

        {/* Word-by-word reveal paragraph */}
        <p className="about-reveal-text" ref={textRef}>
          {aboutText.split(" ").map((word, i) => (
            <span key={i} className="about-word">
              {word}{" "}
            </span>
          ))}
        </p>

        {/* Engineering Pillars */}
        <div className="pillars-grid-v2" ref={pillarsRef}>
          {pillars.map((pillar, i) => (
            <div key={i} className="pillar-card-v2">
              <span className="pillar-index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="pillar-title-v2">{pillar.title}</h3>
              <p className="pillar-desc-v2">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
