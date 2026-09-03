import { useState, useRef, useEffect, useCallback } from "react";
import { FaEye } from "react-icons/fa";
import { TbLock } from "react-icons/tb";

interface ProjectThumbnailProps {
  image: string;
  title: string;
  badge: string;
  liveUrl?: string;
}

export default function ProjectThumbnail({
  image,
  title,
  badge,
  liveUrl,
}: ProjectThumbnailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [maxScroll, setMaxScroll] = useState(0);
  const [scrollDuration, setScrollDuration] = useState(6);

  const measureImage = useCallback(() => {
    if (containerRef.current && imgRef.current) {
      const cHeight = containerRef.current.clientHeight;
      const iHeight = imgRef.current.naturalHeight
        ? (imgRef.current.naturalHeight / imgRef.current.naturalWidth) *
          containerRef.current.clientWidth
        : imgRef.current.clientHeight;

      const diff = Math.max(0, iHeight - cHeight);
      setMaxScroll(diff);

      const calculatedDuration = Math.min(Math.max(diff / 170, 6.5), 18);
      setScrollDuration(calculatedDuration);
    }
  }, []);

  useEffect(() => {
    measureImage();
    window.addEventListener("resize", measureImage);
    return () => window.removeEventListener("resize", measureImage);
  }, [measureImage, image]);

  const handleMouseEnter = () => {
    measureImage();
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const displayUrl = liveUrl
    ? liveUrl.replace("https://", "").replace(/\/$/, "")
    : "enterprise.internal.system";

  const canScroll = maxScroll > 25;

  return (
    <div
      className="project-thumbnail-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Browser Mockup Top Bar */}
      <div className="browser-mockup-header">
        <div className="browser-dots">
          <span className="b-dot b-red" />
          <span className="b-dot b-yellow" />
          <span className="b-dot b-green" />
        </div>
        <span className="browser-url-pill" title={displayUrl}>
          <TbLock className="url-lock-icon" />
          <span>{displayUrl}</span>
        </span>
        {canScroll && (
          <span className={`scroll-hint-pill ${isHovered ? "scrolling" : ""}`}>
            <FaEye className="hint-icon" />
            <span>{isHovered ? "Scrolling Page..." : "Hover to Preview"}</span>
          </span>
        )}
      </div>

      {/* Viewport with dynamic CSS transform */}
      <div className="thumbnail-viewport" ref={containerRef}>
        <img
          ref={imgRef}
          src={image}
          alt={title}
          onLoad={measureImage}
          className={`project-scrollable-img ${canScroll ? "is-scrollable" : "is-static"}`}
          style={{
            transform:
              isHovered && canScroll
                ? `translateY(-${maxScroll}px)`
                : "translateY(0px)",
            transition:
              isHovered && canScroll
                ? `transform ${scrollDuration}s linear`
                : "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          loading="lazy"
        />
      </div>

      {/* Badge Overlay */}
      <div className="thumbnail-overlay">
        <span className="overlay-badge">{badge}</span>
      </div>
    </div>
  );
}
