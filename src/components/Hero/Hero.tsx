import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "../../data/portfolioData";
import MagneticButton from "../ui/MagneticButton";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  const { personalInfo } = portfolioData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Headline lines reveal (clip-path from below)
      tl.fromTo(
        ".hero-line-inner",
        { yPercent: 110 },
        { yPercent: 0, duration: 1.2, stagger: 0.12 },
        0.25
      );

      // 2. Photo reveal
      tl.fromTo(
        ".hero-photo-inner",
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.3, ease: "power2.out" },
        0.5
      );

      tl.fromTo(
        ".hero-photo-frame",
        { clipPath: "inset(100% 0 0 0)" },
        { clipPath: "inset(0% 0 0 0)", duration: 1.1, ease: "power3.inOut" },
        0.4
      );

      // 3. Meta info
      tl.fromTo(
        ".hero-meta-item",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        0.9
      );

      // 4. CTAs
      tl.fromTo(
        ".hero-cta-group",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7 },
        1.1
      );

      // Parallax on scroll
      if (sectionRef.current) {
        gsap.to(".hero-headline-col", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        gsap.to(".hero-photo-frame", {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section" ref={sectionRef}>
      <div className="hero-container">
        {/* Left: Typography */}
        <div className="hero-headline-col" ref={headlineRef}>
          {/* Status */}
          <div className="hero-meta-item hero-status">
            <span className="status-dot-v2" />
            <span>{personalInfo.status.text}</span>
          </div>

          {/* Clean, Commanding, Human-Crafted Editorial Headline */}
          <h1 className="hero-title-v2">
            <span className="hero-line">
              <span className="hero-line-inner">Engineering</span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner text-accent">Enterprise-Grade</span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner">Front-End &</span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner">Real-Time Systems.</span>
            </span>
          </h1>

          {/* Sub info */}
          <div className="hero-meta-block" ref={metaRef}>
            <p className="hero-meta-item hero-bio-v2">
              {personalInfo.title} & {personalInfo.specialty}. Specialized in sub-second
              live data streams (SignalR / MQTT), offline-first component architectures, and
              pixel-perfect Arabic RTL systems.
            </p>
          </div>

          {/* CTAs */}
          <div className="hero-cta-group">
            <MagneticButton className="cta-primary-v2" onClick={scrollToWork}>
              <span>Explore Selected Work</span>
              <svg className="cta-svg-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </MagneticButton>
            <MagneticButton className="cta-secondary-v2" onClick={scrollToContact}>
              <span>Get in Touch</span>
              <svg className="cta-svg-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </MagneticButton>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="hero-photo-col" ref={photoRef}>
          <div className="hero-photo-frame">
            <img
              src="./Images/upscalemedia-transformed.jpeg"
              alt="Mahmoud Doma"
              className="hero-photo-inner"
            />
          </div>
          {/* Refined subtle credential tags */}
          <div className="hero-credential-tag tag-top">
            <span className="credential-dot" />
            <span>Angular Specialist</span>
          </div>
          <div className="hero-credential-tag tag-bottom">
            <span className="credential-dot accent" />
            <span>2+ Years Enterprise</span>
          </div>
        </div>
      </div>
    </section>
  );
}
