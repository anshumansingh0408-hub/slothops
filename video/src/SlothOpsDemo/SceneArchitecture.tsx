import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const SceneArchitecture: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 14 },
  });

  const stackItems = [
    {
      name: "Google Gemma 2",
      role: "Open-Weights Reasoning Core",
      badge: "Zero Cloud API Cost",
      desc: "Local/Ollama inference ensuring private personal inbox condensing and zero vendor lock-in.",
      icon: "🧠",
      accent: "#8BAAA6",
    },
    {
      name: "Prior Labs TabPFN-3.5",
      role: "Tabular Foundation Model",
      badge: "Zero-Shot In-Context",
      desc: "Instant anomaly classification on bank exports in a single 42ms forward pass without tuning.",
      icon: "📊",
      accent: "#D4A373",
    },
    {
      name: "Mastra DAG Engine",
      role: "Agent Orchestration",
      badge: "Temporal-Ready Retries",
      desc: "Robust Directed Acyclic Graph chore workflows with step memoization and crash safety.",
      icon: "⚡",
      accent: "#B8C0D0",
    },
    {
      name: "Sentry Agent Tracing",
      role: "Telemetry & Observability",
      badge: "Zero-Overhead Spans",
      desc: "Live span breakdown tracking tool invocation latency, token counts, and error states.",
      icon: "🔍",
      accent: "#E2C39E",
    },
  ];

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#090A0D",
        backgroundImage:
          "radial-gradient(circle at 80% 20%, rgba(212, 163, 115, 0.1) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(58, 64, 78, 0.15) 0%, transparent 50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 80px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        color: "#EDEDED",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "8px 20px",
          borderRadius: 9999,
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          color: "#D4D4D8",
          fontSize: 18,
          fontWeight: 600,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          marginBottom: 20,
        }}
      >
        <span>⚡</span>
        <span>The Open-Source Multiplier Stack</span>
      </div>

      <h2
        style={{
          fontSize: 62,
          fontWeight: 800,
          margin: "0 0 16px 0",
          textAlign: "center",
          letterSpacing: "-0.02em",
          background: "linear-gradient(135deg, #FFFFFF, #E2C39E)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          opacity: titleProgress,
          transform: `translateY(${interpolate(titleProgress, [0, 1], [30, 0])}px)`,
        }}
      >
        Built on Open Innovation
      </h2>

      <p
        style={{
          fontSize: 24,
          color: "#9CA3AF",
          margin: "0 0 45px 0",
          textAlign: "center",
          maxWidth: 900,
        }}
      >
        Zero proprietary cloud model reliance. Offline-first privacy and
        deterministic tabular science.
      </p>

      {/* Grid of 4 Partner Stacks */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          width: "100%",
          maxWidth: 1240,
        }}
      >
        {stackItems.map((item, index) => {
          const itemProgress = spring({
            frame: frame - (20 + index * 10),
            fps,
            config: { damping: 14 },
          });

          return (
            <div
              key={index}
              style={{
                backgroundColor: "rgba(18, 20, 24, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 18,
                padding: "24px 28px",
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
                opacity: itemProgress,
                transform: `translateY(${interpolate(itemProgress, [0, 1], [30, 0])}px)`,
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div
                style={{
                  fontSize: 38,
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  width: 64,
                  height: 64,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 14,
                  border: `1px solid ${item.accent}33`,
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 6,
                  }}
                >
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#F4F4F5",
                    }}
                  >
                    {item.name}
                  </div>
                  <span
                    style={{
                      fontSize: 13,
                      padding: "3px 10px",
                      borderRadius: 9999,
                      backgroundColor: `${item.accent}20`,
                      color: item.accent,
                      border: `1px solid ${item.accent}40`,
                      fontWeight: 600,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: 14,
                    color: item.accent,
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  {item.role}
                </div>

                <div
                  style={{
                    fontSize: 15,
                    color: "#9CA3AF",
                    lineHeight: 1.45,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
