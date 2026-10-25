import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const SceneOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slothScale = spring({
    frame,
    fps,
    config: { damping: 12 },
  });

  const contentSpring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 14 },
  });

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#090A0D",
        backgroundImage:
          "radial-gradient(circle at 50% 40%, rgba(212, 163, 115, 0.15) 0%, transparent 60%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        color: "#EDEDED",
        position: "relative",
      }}
    >
      {/* Big Sloth Emoji with spring bounce */}
      <div
        style={{
          fontSize: 100,
          transform: `scale(${slothScale})`,
          marginBottom: 20,
          filter: "drop-shadow(0 10px 20px rgba(212, 163, 115, 0.3))",
        }}
      >
        🦥
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: contentSpring,
          transform: `translateY(${interpolate(contentSpring, [0, 1], [30, 0])}px)`,
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: 800,
            margin: "0 0 16px 0",
            letterSpacing: "-0.03em",
            background: "linear-gradient(135deg, #FFFFFF, #E2C39E)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Slow and Steady Wins the Sprint
        </h1>

        <p
          style={{
            fontSize: 26,
            color: "#A1A1AA",
            margin: "0 0 40px 0",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Built for Hacktoberfest 2026 Week 3 • "Slow and Steady"
          <br />
          Honoring International Sloth Day with effortless autonomy.
        </p>

        {/* Stack Highlights pills */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 36,
          }}
        >
          {[
            "Google Gemma 2",
            "Prior Labs TabPFN-3.5",
            "Mastra DAG",
            "Browserbase Stagehand",
            "Sentry Observability",
          ].map((tech, i) => (
            <span
              key={i}
              style={{
                fontSize: 15,
                padding: "8px 18px",
                borderRadius: 9999,
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#E2C39E",
                fontWeight: 600,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          style={{
            fontSize: 18,
            color: "#71717A",
            letterSpacing: 1.2,
            fontWeight: 500,
          }}
        >
          Open-Source MIT License • Local First • Zero Cloud Runtime Cost
        </div>
      </div>
    </div>
  );
};
