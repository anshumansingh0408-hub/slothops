import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const SceneLiveDemo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 14 },
  });

  const step1 = spring({ frame: frame - 15, fps, config: { damping: 12 } });
  const step2 = spring({ frame: frame - 35, fps, config: { damping: 12 } });
  const step3 = spring({ frame: frame - 55, fps, config: { damping: 12 } });

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#090A0D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 80px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        color: "#EDEDED",
        position: "relative",
      }}
    >
      {/* Top Banner */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: 1300,
          marginBottom: 24,
          opacity: titleProgress,
        }}
      >
        <div>
          <span
            style={{
              fontSize: 14,
              color: "#E2C39E",
              letterSpacing: 1.5,
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Live Autonomous Pipeline
          </span>
          <h2
            style={{
              fontSize: 46,
              fontWeight: 800,
              margin: "4px 0 0 0",
              color: "#FFFFFF",
            }}
          >
            Mastra DAG Orchestration in Action
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            backgroundColor: "rgba(34, 197, 94, 0.12)",
            border: "1px solid rgba(34, 197, 94, 0.3)",
            padding: "8px 18px",
            borderRadius: 9999,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#22C55E",
              boxShadow: "0 0 10px #22C55E",
            }}
          />
          <span style={{ color: "#86EFAC", fontWeight: 600, fontSize: 16 }}>
            Gemma 2 + TabPFN Active
          </span>
        </div>
      </div>

      {/* Main Container: 2-column layout */}
      <div
        style={{
          display: "flex",
          gap: 28,
          width: "100%",
          maxWidth: 1300,
          height: 580,
        }}
      >
        {/* Left Column: Live Agent Terminal Trace */}
        <div
          style={{
            flex: 1.2,
            backgroundColor: "#0D0F14",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 18,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
          }}
        >
          {/* Terminal Window Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              paddingBottom: 14,
              marginBottom: 16,
            }}
          >
            <div style={{ display: "flex", gap: 8 }}>
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#EF4444",
                }}
              />
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#F59E0B",
                }}
              />
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#10B981",
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 14,
                color: "#6B7280",
              }}
            >
              sloth-mastra-runner :: trace_id_8f3a9d
            </span>
          </div>

          {/* Terminal Logs */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              fontFamily: "monospace",
              fontSize: 15,
              color: "#D1D5DB",
              overflow: "hidden",
            }}
          >
            <div style={{ opacity: step1 }}>
              <span style={{ color: "#E2C39E" }}>[00:01.02]</span>{" "}
              <span style={{ color: "#3B82F6" }}>INIT</span> Mastra DAG loaded
              with 4 automated chore nodes
            </div>
            <div style={{ opacity: step1 }}>
              <span style={{ color: "#E2C39E" }}>[00:01.44]</span>{" "}
              <span style={{ color: "#10B981" }}>EXEC</span> Gemma 2 reasoning:
              analyzed 47 unread newsletter subjects
            </div>
            <div style={{ opacity: step2 }}>
              <span style={{ color: "#E2C39E" }}>[00:02.15]</span>{" "}
              <span style={{ color: "#8B5CF6" }}>TOOL</span> file_tidier_tool:
              24 cluttered files sorted to /Archive/2026/
            </div>
            <div style={{ opacity: step2 }}>
              <span style={{ color: "#E2C39E" }}>[00:02.68]</span>{" "}
              <span style={{ color: "#F59E0B" }}>TABPFN</span> TabPFN-3.5
              forward pass: 50 financial records evaluated (42ms)
            </div>
            <div
              style={{
                opacity: step3,
                backgroundColor: "rgba(239, 68, 68, 0.12)",
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid rgba(239, 68, 68, 0.3)",
                color: "#FCA5A5",
              }}
            >
              [ALERT] High-Confidence Anomaly Detected: "Cloud Compute -
              Zombie" ($89.99/mo) | Confidence: 96.8%
            </div>
            <div style={{ opacity: step3 }}>
              <span style={{ color: "#E2C39E" }}>[00:03.20]</span>{" "}
              <span style={{ color: "#10B981" }}>VOICE</span> ElevenLabs + Web
              Audio binaural rain track synthesized
            </div>
            <div
              style={{
                opacity: step3,
                color: "#10B981",
                fontWeight: 600,
                paddingTop: 8,
              }}
            >
              ✓ DAG Complete: Human interaction required = 0 minutes.
            </div>
          </div>
        </div>

        {/* Right Column: TabPFN Visualizer Card & Output preview */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {/* Card 1: TabPFN-3.5 In-Context Anomaly Detector */}
          <div
            style={{
              backgroundColor: "rgba(18, 20, 24, 0.8)",
              border: "1px solid rgba(212, 163, 115, 0.25)",
              borderRadius: 18,
              padding: 22,
              boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
              opacity: step2,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700, color: "#F4F4F5" }}>
                📊 Prior Labs TabPFN-3.5 Detection
              </div>
              <span
                style={{
                  fontSize: 12,
                  padding: "3px 8px",
                  borderRadius: 6,
                  backgroundColor: "rgba(239, 68, 68, 0.2)",
                  color: "#F87171",
                  fontWeight: 600,
                }}
              >
                Anomaly Confirmed
              </span>
            </div>

            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 10,
                padding: 14,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 14,
                  color: "#9CA3AF",
                }}
              >
                <span>Target: Cloud Compute Zombie</span>
                <span style={{ color: "#EF4444", fontWeight: 700 }}>
                  $89.99 / mo
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 14,
                  color: "#9CA3AF",
                }}
              >
                <span>Zero-Shot Probability</span>
                <span style={{ color: "#E2C39E", fontWeight: 700 }}>
                  94.2%
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 14,
                  color: "#9CA3AF",
                }}
              >
                <span>Annual Cash Saved</span>
                <span style={{ color: "#34D399", fontWeight: 700 }}>
                  $1,079.88
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Audio Briefing Player Preview */}
          <div
            style={{
              backgroundColor: "rgba(18, 20, 24, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: 18,
              padding: 22,
              boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
              opacity: step3,
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 700, color: "#F4F4F5" }}>
              🎙️ Ambient Bedtime Voice Briefing
            </div>
            <p
              style={{
                fontSize: 14,
                color: "#9CA3AF",
                margin: "8px 0 16px 0",
              }}
            >
              "Good evening. Your inbox is summarized, 24 downloads archived,
              and 1 zombie bill quarantined. Rest easy."
            </p>

            {/* Audio Waveform visualization */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                height: 38,
              }}
            >
              {[18, 32, 14, 26, 38, 22, 16, 34, 20, 36, 28, 14, 30, 22, 18].map(
                (h, i) => {
                  const animatedHeight = interpolate(
                    Math.sin((frame + i * 10) * 0.2),
                    [-1, 1],
                    [8, h]
                  );
                  return (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: animatedHeight,
                        backgroundColor: "#E2C39E",
                        borderRadius: 9999,
                        opacity: 0.8,
                      }}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
