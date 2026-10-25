import { Composition, Folder } from "remotion";
import { HelloWorld } from "./HelloWorld";
import { Logo } from "./HelloWorld/Logo";
import { Title } from "./HelloWorld/Title";
import { SlothOpsDemo } from "./SlothOpsDemo/SlothOpsDemo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Primary Prototype Demo Composition for Hacktoberfest 2026 */}
      <Composition
        id="SlothOpsDemo"
        component={SlothOpsDemo}
        durationInFrames={600}
        fps={30}
        width={1920}
        height={1080}
      />

      <Folder name="Elements">
        <Composition
          id="Logo"
          component={Logo}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            logoColor1: "#91EAE4",
            logoColor2: "#86A8E7",
          }}
        />
        <Composition
          id="Title"
          component={Title}
          durationInFrames={115}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            titleText: "Welcome to Remotion",
            titleColor: "#000000",
          }}
        />
        <Composition
          id="HelloWorld"
          component={HelloWorld}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            titleText: "SlothOps — Autonomous AI Chore Autopilot",
            titleColor: "#ffffff",
          }}
        />
      </Folder>
    </>
  );
};
