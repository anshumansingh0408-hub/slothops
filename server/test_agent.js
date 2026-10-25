import { MastraOrchestrator } from './mastra_orchestrator.js';

async function runSelfTest() {
  console.log("=== SlothOps Agent Self-Test ===");
  const orchestrator = new MastraOrchestrator();

  const presets = [
    {
      name: "Sunday Clutter Sweep",
      prompt: "Tidy up all chaotic downloads and organize my project documents automatically.",
      steps: [{ name: "file_tidier", arguments: { targetFolder: "Downloads" } }]
    },
    {
      name: "Subscription Vampire Slayer (TabPFN)",
      prompt: "Audit my recent transactions CSV with TabPFN to spot sneaky subscription price creep.",
      steps: [{ name: "tabpfn_anomaly_forecaster", arguments: { detectAnomalies: true } }]
    },
    {
      name: "Morning Zero-Effort Briefing",
      prompt: "Give me the morning 2-bullet summary and prepare an audio digest.",
      steps: [
        { name: "inbox_condenser", arguments: { maxBullets: 2 } },
        { name: "voice_digest", arguments: { mood: "calm-ambient" } }
      ]
    }
  ];

  for (const preset of presets) {
    console.log(`\nTesting Preset: ${preset.name}...`);
    const result = await orchestrator.executeWorkflow({
      workflowName: preset.name,
      userPrompt: preset.prompt,
      steps: preset.steps,
      onProgress: (p) => {
        if (p.type === 'step_progress') {
          console.log(`  -> [${p.status}] ${p.step}: ${p.details}`);
        }
      }
    });
    console.log(`Finished ${preset.name}! Total Spans: ${result.telemetry.spanCount}, Est. Tokens: ${result.telemetry.totalTokens}`);
  }

  console.log("\n=== All SlothOps Agent Self-Tests Passed! ===");
}

runSelfTest().catch(console.error);
