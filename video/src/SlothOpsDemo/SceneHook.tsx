import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const SceneHook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const subtitleProgress = spring({
    frame: frame - 25,
    fps,
    config: { damping: 15 },
  });

  const cardsProgress = spring({
    frame: frame - 45,
    fps,
    config: { damping: 12 },
  });

  const badgeOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#090A0D",
        backgroundImage:
          "radial-gradient(circle at 50% 20%, rgba(212, 163, 115, 0.12) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(58, 64, 78, 0.15) 0%, transparent 50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        color: "#EDEDED",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid line effects */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Top Tag Pill */}
      <div
        style={{
          opacity: badgeOpacity,
          transform: `scale(${interpolate(badgeOpacity, [0, 1], [0.85, 1])})`,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 24px",
          borderRadius: 9999,
          backgroundColor: "rgba(212, 163, 115, 0.12)",
          border: "1px solid rgba(212, 163, 115, 0.35)",
          color: "#E2C39E",
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          marginBottom: 36,
        }}
      >
        <span>🦥</span>
        <span>Hacktoberfest 2026 • Slow & Steady Autopilot</span>
      </div>

      {/* Main Title */}
      <h1
        style={{
          fontSize: 88,
          fontWeight: 800,
          margin: 0,
          textAlign: "center",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          opacity: titleProgress,
          transform: `translateY(${interpolate(titleProgress, [0, 1], [40, 0])}px)`,
          background:
            "linear-gradient(135deg, #FFFFFF 20%, #E2C39E 65%, #A8A29E 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        SlothOps
      </h1>

      <p
        style={{
          fontSize: 34,
          fontWeight: 400,
          margin: "18px 0 45px 0",
          textAlign: "center",
          maxWidth: 1000,
          color: "#A1A1AA",
          lineHeight: 1.4,
          opacity: subtitleProgress,
          transform: `translateY(${interpolate(subtitleProgress, [0, 1], [25, 0])}px)`,
        }}
      >
        Why waste human cognitive energy on digital chores?
        <br />
        <span style={{ color: "#E2C39E", fontWeight: 600 }}>
          Zero-effort autonomous intelligence
        </span>{" "}
        that cleans, audits, and briefs while you rest.
      </p>

      {/* 3 Friction Cards transforming to solved */}
      <div
        style={{
          display: "flex",
          gap: 28,
          width: "100%",
          maxWidth: 1280,
          opacity: cardsProgress,
          transform: `translateY(${interpolate(cardsProgress, [0, 1], [30, 0])}px)`,
        }}
      >
        {[
          {
            icon: "📁",
            title: "Cluttered Downloads",
            desc: "24 random untagged files cleaned & filed into dated archives",
            tag: "File Tidier Engine",
          },
          {
            icon: "📬",
            title: "47 Unread Newsletters",
            desc: "Extracted into a 2-bullet executive actionable summary",
            tag: "Gemma 2 LLM Core",
          },
          {
            icon: "💳",
            title: "Zombie SaaS Creep",
            desc: "Detected $89.99 shadow recurring bill before next cycle",
            tag: "TabPFN-3.5 Anomaly Audit",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              backgroundColor: "rgba(22, 24, 29, 0.75)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: 20,
              padding: "28px 24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 40 }}>{item.icon}</span>
              <span
                style={{
                  fontSize: 14,
                  padding: "4px 10px",
                  borderRadius: 6,
                  backgroundColor: "rgba(212, 163, 115, 0.15)",
                  color: "#E2C39E",
                  fontWeight: 600,
                }}
              >
                {item.tag}
              </span>
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#F4F4F5",
                marginTop: 6,
              }}
            >
              {item.title}
            </div>
            <div
              style={{
                fontSize: 16,
                color: "#9CA3AF",
                lineHeight: 1.5,
              }}
            >
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
