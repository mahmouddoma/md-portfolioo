import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import "./MagneticButton.css";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
  strength?: number;
  "data-cursor"?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  download,
  strength = 0.35,
  ...rest
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;

    // Only on non-touch devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      });
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [strength]);

  const Tag = href ? "a" : "button";
  const extraProps = href ? { href, target, rel, download } : { onClick };

  return (
    <Tag
      ref={btnRef as any}
      className={`magnetic-btn ${className}`}
      {...extraProps}
      {...rest}
    >
      <span className="magnetic-btn-text">{children}</span>
    </Tag>
  );
}
