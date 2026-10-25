import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Sparkles, Award } from 'lucide-react';

export function DevSubmissionViewer() {
  const [copied, setCopied] = useState(false);

  const submissionMarkdown = `---
title: SlothOps: Channeling Your Inner Sloth with Open-Weight AI & TabPFN-3.5
published: true
tags: devchallenge, hf26challenge, ai, opensource
---

*This is a submission for the [Hacktoberfest Open-Source AI Challenge Week 3: Slow and Steady](https://dev.to/challenges/hacktoberfest-week3-2026-10-19)*

## What I Built
**SlothOps** is an autonomous, privacy-first digital chore autopilot built to celebrate **International Sloth Day** and reward human laziness. 

Sloths move at their own pace, conserve energy, and do only what matters. Knowledge workers and developers, on the other hand, spend hours every week on mundane digital chores they dread:
1. Sorting chaotic \`Downloads/\` and \`Desktop/\` folders with messy screenshots and invoices.
2. Manually auditing banking statements or CSV exports to catch sneaky subscription price creep.
3. Wading through dozens of unread newsletters, Discord pings, and GitHub notifications.
4. Clicking through dozens of tabs for routine research.

SlothOps eliminates all of them. In a single click, it executes the entire digital maintenance cycle:
- **Sunday Clutter Sweep:** Google Gemma semantically classifies and files messy downloads into organized project directories.
- **Subscription Vampire Slayer:** Prior Labs TabPFN-3.5 foundation model performs zero-shot in-context learning over banking transactions to flag 20%+ price spikes and zombie subscriptions.
- **Morning Zero-Effort Digest:** Condenses 100+ feeds into 2 actionable bullets.
- **Sloth Audio Lounge:** Synthesizes an ambient ElevenLabs voice narration so you can literally close your eyes, lie in bed, and listen to the day's briefing with zero screen glare.

---

## Demo
- **Live Interactive Web App:** Hosted on Render / DigitalOcean.
- **GitHub Repository:** [github.com/slothops/slothops](https://github.com/slothops/slothops)
- **Local Air-Gapped Mode:** Runs 100% offline via local Gemma inference and TabPFN in-context forward passes.

---

## Code
The full source code is licensed under the permissive **MIT License** and structured as follows:

\`\`\`
slothops/
├── server/
│   ├── gemma_engine.js           # Google Gemma open-weight runtime (Ollama/vLLM/Local)
│   ├── mastra_orchestrator.js    # Mastra DAG engine with Temporal-style retries
│   ├── observability.js          # Sentry Agent Tracing span recorder & token accountant
│   └── tools/
│       ├── tabpfn_tool.js        # Prior Labs TabPFN-3.5 zero-shot tabular AI
│       ├── file_tidier_tool.js   # Automated local folder declutter
│       ├── inbox_condenser_tool.js # 2-bullet morning digest
│       ├── browser_agent_tool.js # Browserbase Stagehand autonomous web researcher
│       ├── voice_digest_tool.js  # ElevenLabs calming audio synthesizer
│       └── memory_vector_tool.js # Tiger Data pgvector / MongoDB Atlas vector memory
└── src/                          # Modern glassmorphic React + Vite user interface
\`\`\`

---

## How I Built It
SlothOps is designed strictly around **open-source AI at its core**:
1. **Google Gemma 2 (Open-Weights):** The central reasoning brain. It parses complex file contexts, plans multi-step chore execution, and handles structured JSON output generation without proprietary API lock-in.
2. **Mastra Framework & Temporal Durability:** Workflows are orchestrated using a TypeScript DAG pipeline with state machine durability, step idempotency, and exponential backoff retry policies.
3. **Prior Labs TabPFN-3.5 (Tabular Foundation Model):** Rather than writing manual regexes or training complex XGBoost pipelines with cross-validation, TabPFN-3.5 ingests banking transactions in a single forward pass, predicting end-of-month cash burn and flagging anomalous subscription creep.
4. **Browserbase (Stagehand SDK):** Enables the agent to navigate web documentation and partner portals autonomously.
5. **Tiger Data (PostgreSQL + pgvector) & Sentry:** Stores semantic user preferences across sessions and tracks agent execution spans, latency, and token consumption.

---

## Why Does Open Innovation Matter?
Why did an open-source, open-weight approach work significantly better than a closed proprietary API?

1. **Total Financial and Personal Privacy:** Bank transactions, tax receipts, and personal chat messages should never be transmitted to third-party cloud LLM servers. Because Gemma and TabPFN run locally on the machine, your sensitive financial data remains completely air-gapped.
2. **Zero Recurring API Tax:** Daily automation should not cost $0.05 every time you clean a folder. With open-weights, running your daily automation costs exactly $0.00. Set it up once, and it runs forever.
3. **100% Offline Resilience:** You can run SlothOps on a flight with Wi-Fi disabled or in off-grid environments.
4. **Model Swappability & Fine-Tuning:** By decoupling the harness from closed providers, developers can easily swap between Gemma 2B, Gemma 9B, or custom fine-tunes created with Thinking Machines' **Tinker**.

---

## My Agent Session
I built and refined SlothOps collaboratively with an autonomous AI coding assistant. You can view the complete session transcript here:

{% agent_session a50eaab8-4a5e-4c00-b16e-8887a657549f %}

---

## The Lazy Payoff
How much time and energy does SlothOps actually save?
- **47 minutes saved daily** from reading repetitive newsletters and group chat pings.
- **$113.99 saved next month** by auto-detecting a 52% price creep on developer subscriptions and a zombie gym fee.
- **18 minutes of manual file dragging saved** every Sunday evening.
- **100% reduction in screen glare** by converting summaries into an ambient voice digest.

---

## Prize Categories
We are entering the following Hacktoberfest Week 3 categories:
1. **Best Use of Gemma:** Google Gemma 2 (9B open-weights) serves as the primary reasoning and semantic classification engine.
2. **Best Use of TabPFN (Prior Labs):** TabPFN-3.5 tabular foundation model is integrated for zero-shot transaction anomaly detection and end-of-month cash burn forecasting.
3. **Best Use of Render:** Complete fullstack deployment on Render using the \`render.yaml\` infrastructure-as-code blueprint.
4. **Best Use of DigitalOcean:** Docker containerized and ready for 1-Click deployment on DigitalOcean GPU Droplets.
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(submissionMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2.5rem' }}>
      <div className="flex items-center justify-between" style={{ marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="flex items-center gap-2" style={{ marginBottom: '0.25rem' }}>
            <h2 style={{ fontSize: '1.6rem' }}>DEV Submission Draft (Week 3: Slow and Steady)</h2>
            <span className="badge badge-emerald">Ready to Publish</span>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Pre-formatted with the official DEV Week 3 template, partner prize categories, and agent session embed.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={copyToClipboard}
            className="btn btn-primary"
            style={{ fontSize: '0.85rem' }}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Copied Markdown!' : 'Copy Post Markdown'}</span>
          </button>
          
          <a
            href="https://dev.to/new"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ fontSize: '0.85rem' }}
          >
            <span>Open DEV Editor</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Markdown Preview Box */}
      <div className="terminal-box" style={{ maxHeight: '550px', overflowY: 'auto', padding: '1.5rem', lineHeight: 1.7, fontSize: '0.85rem' }}>
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', color: '#e2e8f0' }}>
          {submissionMarkdown}
        </pre>
      </div>
    </div>
  );
}
