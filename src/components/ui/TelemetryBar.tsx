import { useState, useEffect } from "react";
import { FaTerminal, FaSignal, FaTimes } from "react-icons/fa";
import "./TelemetryBar.css";

export default function TelemetryBar() {
  const [latency, setLatency] = useState(16);
  const [isSpecOpen, setIsSpecOpen] = useState(false);

  // Simulate realistic network jitter for SignalR telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(14 + Math.random() * 8));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="telemetry-bar-dock">
        {/* Left: SignalR Equalizer & Telemetry */}
        <div className="telemetry-left">
          <div className="telemetry-equalizer">
            <span className="eq-bar bar-1" />
            <span className="eq-bar bar-2" />
            <span className="eq-bar bar-3" />
            <span className="eq-bar bar-4" />
            <span className="eq-bar bar-5" />
          </div>
          <div className="telemetry-info">
            <span className="telemetry-status-pill">
              <span className="telemetry-dot" />
              <span className="telemetry-stream">SIGNALR LIVE</span>
            </span>
            <span className="telemetry-latency">{latency}ms latency</span>
          </div>
        </div>

        {/* Center: Editorial Attribution */}
        <div className="telemetry-center">
          <span className="telemetry-statement">
            PRODUCTION ARCHITECTURE ✦ ANGULAR 21 SIGNALS ✦ SUB-SECOND LATENCY
          </span>
        </div>

        {/* Right: Interactive Spec Toggle */}
        <div className="telemetry-right">
          <button
            className="telemetry-spec-btn"
            onClick={() => setIsSpecOpen(!isSpecOpen)}
            title="Inspect Architecture Specs"
          >
            <FaTerminal className="spec-icon" />
            <span>{isSpecOpen ? "Close Spec" : "System Spec"}</span>
          </button>
        </div>
      </div>

      {/* System Architecture Modal Overlay */}
      {isSpecOpen && (
        <div
          className="spec-drawer-backdrop"
          onClick={() => setIsSpecOpen(false)}
        >
          <div
            className="spec-drawer-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="spec-drawer-header">
              <div className="spec-drawer-title">
                <FaSignal className="spec-title-icon" />
                <span>Enterprise Architecture Profile</span>
              </div>
              <button
                className="spec-drawer-close"
                onClick={() => setIsSpecOpen(false)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="spec-grid-stats">
              <div className="spec-stat-card">
                <span className="stat-card-label">Core Engine</span>
                <span className="stat-card-val">Angular 21+</span>
                <span className="stat-card-sub">
                  Signals · Standalone · RxJS
                </span>
              </div>
              <div className="spec-stat-card">
                <span className="stat-card-label">Real-Time</span>
                <span className="stat-card-val">SignalR & MQTT</span>
                <span className="stat-card-sub">Sub-second push updates</span>
              </div>
              <div className="spec-stat-card">
                <span className="stat-card-label">Resilience</span>
                <span className="stat-card-val">Offline First</span>
                <span className="stat-card-sub">IndexedDB · Web Workers</span>
              </div>
              <div className="spec-stat-card">
                <span className="stat-card-label">Localization</span>
                <span className="stat-card-val">Arabic RTL</span>
                <span className="stat-card-sub">Zero layout shifting</span>
              </div>
            </div>

            <div className="spec-code-preview">
              <div className="code-top-line">
                <span className="code-dot red" />
                <span className="code-dot yellow" />
                <span className="code-dot green" />
                <span className="code-filename">
                  signalr.telemetry.stream.ts
                </span>
              </div>
              <pre>
                <code>{`// Production Telemetry Stream
const liveStream$ = inject(SignalRService).connect('/hub/telemetry')
  .pipe(
    filter(packet => packet.latency < 50),
    shareReplay(1)
  );

export const activeTelemetry = toSignal(liveStream$, {
  initialValue: { status: 'ONLINE', latency: 16 }
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
