import { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "text" | "project">("default");
  const [cursorLabel, setCursorLabel] = useState("");

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Dot follows instantly
      cursorX += (mouseX - cursorX) * 0.5;
      cursorY += (mouseY - cursorY) * 0.5;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

      // Ring follows with smooth lag
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;

      requestAnimationFrame(animate);
    };

    // Detect interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("a, button, .magnetic-btn, .project-card-immersive, .skill-node, [data-cursor]");
      
      if (interactiveEl) {
        const cursorType = interactiveEl.getAttribute("data-cursor");
        if (cursorType === "project") {
          setCursorState("project");
          setCursorLabel("View");
        } else if (cursorType === "text") {
          setCursorState("text");
          setCursorLabel("");
        } else {
          setCursorState("hover");
          setCursorLabel("");
        }
      } else {
        setCursorState("default");
        setCursorLabel("");
      }
    };

    // Hide on mobile
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      cursor.style.display = "none";
      follower.style.display = "none";
      return;
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor-dot" />
      <div
        ref={followerRef}
        className={`custom-cursor-ring ${cursorState}`}
      >
        {cursorLabel && <span className="cursor-label">{cursorLabel}</span>}
      </div>
    </>
  );
}
