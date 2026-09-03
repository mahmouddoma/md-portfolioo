import "./TickerStrip.css";

interface TickerStripProps {
  items?: string[];
  theme?: "amber" | "cream" | "subtle";
  direction?: "left" | "right";
  speed?: number;
}

const defaultItems = [
  "ANGULAR 21+ SIGNALS",
  "SUB-SECOND SIGNALR STREAMING",
  "OFFLINE-FIRST INDEXEDDB",
  "ARABIC RTL PRECISION",
  "ENTERPRISE PRODUCTION",
  "MQTT TELEMETRY",
  "9+ SHIPPED CLIENT PLATFORMS",
  "RxJS REACTIVE STREAMS",
];

export default function TickerStrip({
  items = defaultItems,
  theme = "amber",
  direction = "left",
  speed = 25,
}: TickerStripProps) {
  // Duplicate for seamless infinite loop
  const list = [...items, ...items, ...items];

  return (
    <div className={`ticker-strip-wrapper theme-${theme}`}>
      <div
        className={`ticker-track ${direction === "right" ? "reverse" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {list.map((text, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-symbol">✦</span>
            <span className="ticker-text">{text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
