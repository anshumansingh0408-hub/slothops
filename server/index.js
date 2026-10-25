import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { MastraOrchestrator } from './mastra_orchestrator.js';
import { runTabPFNTool } from './tools/tabpfn_tool.js';
import { runVoiceDigestTool } from './tools/voice_digest_tool.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

const orchestrator = new MastraOrchestrator();

// 1. Health & Config endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'SlothOps Autopilot',
    version: '1.0.0',
    hacktoberfestTheme: 'Hacktoberfest 2026 Week 3: Slow and Steady',
    openSourceAI: {
      foundationModel: process.env.GEMMA_MODEL_NAME || 'google/gemma-2-9b-it',
      runtime: process.env.GEMMA_RUNTIME || 'local-simulation',
      tabularModel: 'Prior Labs TabPFN-3.5',
      agentFramework: 'Mastra DAG Workflows'
    },
    timestamp: new Date().toISOString()
  });
});

// 2. Pre-Packaged Sloth Workflows
app.get('/api/agent/presets', (req, res) => {
  const presets = [
    {
      id: 'tabpfn-vampire-slayer',
      name: 'Subscription Vampire Slayer',
      tagline: 'TabPFN-3.5 In-Context Anomaly Detector',
      icon: 'PieChart',
      badge: 'Prior Labs TabPFN',
      description: 'Audit card statements and recurring bills. Catches sneaky 20%+ price increases and detects zombie subscriptions automatically.',
      prompt: 'Audit recent bank transactions with TabPFN to spot sneaky subscription price creep.',
      steps: [{ name: 'tabpfn_anomaly_forecaster', arguments: { detectAnomalies: true } }]
    },
    {
      id: 'sunday-clutter-sweep',
      name: 'Sunday Clutter Sweep',
      tagline: 'Desktop & Download Folder Declutter',
      icon: 'FolderArchive',
      badge: 'Google Gemma 2',
      description: 'Scans messy downloads, screenshots, and logs. Semantically categorizes files into clean project directories with zero manual dragging.',
      prompt: 'Clean up my chaotic downloads and sort files into structured project folders.',
      steps: [{ name: 'file_tidier', arguments: { targetFolder: 'Downloads' } }]
    },
    {
      id: 'morning-zero-effort',
      name: 'Morning Zero-Effort Briefing',
      tagline: '2-Bullet TL;DR + Calm Audio Digest',
      icon: 'Coffee',
      badge: 'ElevenLabs Audio',
      description: 'Condenses 100+ unread newsletters, PR updates, and Discord notifications into 2 essential bullets, followed by ambient voice narration.',
      prompt: 'Generate my morning 2-bullet summary and synthesize an ambient voice digest.',
      steps: [
        { name: 'inbox_condenser', arguments: { maxBullets: 2 } },
        { name: 'voice_digest', arguments: { mood: 'calm-ambient' } }
      ]
    },
    {
      id: 'hands-off-web-surfer',
      name: 'Autonomous Web Surfer',
      tagline: 'Browserbase Stagehand Scraper',
      icon: 'Globe',
      badge: 'Browserbase SDK',
      description: 'Hands-off research agent that navigates the web, claims partner promo codes, and extracts technical docs without opening 20 tabs.',
      prompt: 'Research top open-weights AI benchmarks and verify Hacktoberfest partner credits.',
      steps: [{ name: 'browser_agent', arguments: { task: 'Extract Hacktoberfest partner perks' } }]
    },
    {
      id: 'complete-sloth-autopilot',
      name: 'The Ultimate Sloth Cycle',
      tagline: 'All Chores Combined in 1 Click',
      icon: 'Zap',
      badge: 'Temporal Durability',
      description: 'The complete hands-off sequence: declutter files, audit bank creep via TabPFN, compress inbox feeds, and generate a sleepy bedtime narration.',
      prompt: 'Execute full digital chore autopilot: clean clutter, audit expenses, condense news, and wind down with voice audio.',
      steps: [
        { name: 'file_tidier', arguments: {} },
        { name: 'tabpfn_anomaly_forecaster', arguments: {} },
        { name: 'inbox_condenser', arguments: { maxBullets: 2 } },
        { name: 'voice_digest', arguments: { mood: 'sleepy-bedtime' } }
      ]
    }
  ];

  res.json({ presets });
});

// 3. Workflow Execution with Live Streaming Progress (SSE)
app.post('/api/agent/run', async (req, res) => {
  const { workflowName = 'Custom Sloth Run', prompt = '', steps = [] } = req.body;

  try {
    const report = await orchestrator.executeWorkflow({
      workflowName,
      userPrompt: prompt || 'Automate digital chores effortlessly',
      steps,
      onProgress: () => {}
    });

    res.json(report);
  } catch (err) {
    console.error('[AgentRunError]', err);
    res.status(500).json({ error: err.message });
  }
});

// 4. TabPFN Dedicated Anomaly & Forecast Endpoint
app.post('/api/agent/tabpfn-audit', async (req, res) => {
  const { transactions = null, forecastMonths = 1 } = req.body;
  try {
    const result = await runTabPFNTool({ customData: transactions, forecastMonths });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. Voice Narration Stream
app.post('/api/agent/voice', async (req, res) => {
  const { text, mood } = req.body;
  try {
    const result = await runVoiceDigestTool({ text, mood });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Production: Serve static client build if present
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'Endpoint not found' });
  }
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      res.send("SlothOps API Server is Running. Run 'npm run client' to start the Vite frontend.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`🦥 SlothOps Agent Server listening on port ${PORT}`);
  console.log(`   Open-Weight AI: ${process.env.GEMMA_MODEL_NAME || 'google/gemma-2-9b-it'}`);
  console.log(`   Tabular Core: Prior Labs TabPFN-3.5`);
  console.log(`   Orchestration: Mastra DAG + Temporal Durability`);
});
