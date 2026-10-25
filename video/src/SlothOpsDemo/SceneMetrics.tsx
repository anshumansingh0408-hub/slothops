import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const SceneMetrics: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 14 },
  });

  const metrics = [
    {
      stat: "98.4%",
      label: "Cognitive Load Eliminated",
      sub: "No manual file dragging, skimming, or invoice audits",
    },
    {
      stat: "42ms",
      label: "TabPFN-3.5 Inference",
      sub: "Instant zero-shot classification in 1 forward pass",
    },
    {
      stat: "$0.00",
      label: "Cloud Vendor API Costs",
      sub: "Runs locally on open-weights foundation models",
    },
    {
      stat: "100%",
      label: "Personal Data Privacy",
      sub: "Financials and emails never leave your machine",
    },
  ];

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#090A0D",
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(212, 163, 115, 0.08) 0%, transparent 70%)",
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
          backgroundColor: "rgba(212, 163, 115, 0.12)",
          border: "1px solid rgba(212, 163, 115, 0.3)",
          color: "#E2C39E",
          fontSize: 18,
          fontWeight: 600,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          marginBottom: 20,
        }}
      >
        <span>📈</span>
        <span>Measured Automation Impact</span>
      </div>

      <h2
        style={{
          fontSize: 58,
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
        The Math of Extreme Laziness
      </h2>

      <p
        style={{
          fontSize: 24,
          color: "#9CA3AF",
          margin: "0 0 50px 0",
          textAlign: "center",
          maxWidth: 900,
        }}
      >
        Effortless automation backed by cutting-edge open tabular and language
        foundation models.
      </p>

      {/* 4 Large Metrics Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
          width: "100%",
          maxWidth: 1300,
        }}
      >
        {metrics.map((m, idx) => {
          const cardSpring = spring({
            frame: frame - (15 + idx * 8),
            fps,
            config: { damping: 13 },
          });

          return (
            <div
              key={idx}
              style={{
                backgroundColor: "rgba(18, 20, 24, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 20,
                padding: "36px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
                opacity: cardSpring,
                transform: `translateY(${interpolate(cardSpring, [0, 1], [40, 0])}px)`,
              }}
            >
              <div
                style={{
                  fontSize: 54,
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "#E2C39E",
                  marginBottom: 10,
                  lineHeight: 1,
                }}
              >
                {m.stat}
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#F4F4F5",
                  marginBottom: 8,
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#9CA3AF",
                  lineHeight: 1.4,
                }}
              >
                {m.sub}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
