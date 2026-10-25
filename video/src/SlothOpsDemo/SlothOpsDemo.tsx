import React from "react";
import { Sequence } from "remotion";
import { SceneHook } from "./SceneHook";
import { SceneArchitecture } from "./SceneArchitecture";
import { SceneLiveDemo } from "./SceneLiveDemo";
import { SceneMetrics } from "./SceneMetrics";
import { SceneOutro } from "./SceneOutro";

export const SlothOpsDemo: React.FC = () => {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#090A0D",
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      {/* Scene 1: Hook & Problem Definition (0s - 4s / frames 0 - 120) */}
      <Sequence from={0} durationInFrames={120} name="Hook & Friction">
        <SceneHook />
      </Sequence>

      {/* Scene 2: Open Source AI Architecture (4s - 8s / frames 120 - 240) */}
      <Sequence
        from={120}
        durationInFrames={120}
        name="Open Innovation Stack"
      >
        <SceneArchitecture />
      </Sequence>

      {/* Scene 3: Live Pipeline & TabPFN Execution (8s - 13s / frames 240 - 390) */}
      <Sequence
        from={240}
        durationInFrames={150}
        name="Live Mastra Execution"
      >
        <SceneLiveDemo />
      </Sequence>

      {/* Scene 4: Quantitative Impact & Sloth Metrics (13s - 16.5s / frames 390 - 495) */}
      <Sequence
        from={390}
        durationInFrames={105}
        name="Automation Metrics"
      >
        <SceneMetrics />
      </Sequence>

      {/* Scene 5: Outro & Hacktoberfest Week 3 (16.5s - 20s / frames 495 - 600) */}
      <Sequence
        from={495}
        durationInFrames={105}
        name="Hacktoberfest Outro"
      >
        <SceneOutro />
      </Sequence>
    </div>
  );
};
