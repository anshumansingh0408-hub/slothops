import React, { useState } from 'react';
import { 
  PieChart, 
  FolderArchive, 
  Coffee, 
  Globe, 
  ArrowRight, 
  Play, 
  Sparkles,
  Command
} from 'lucide-react';

export function SlothPresets({ onRunPreset, isRunning }) {
  const [customPrompt, setCustomPrompt] = useState('');

  const iconMap = {
    PieChart,
    FolderArchive,
    Coffee,
    Globe
  };

  const presets = [
    {
      id: 'tabpfn-vampire-slayer',
      name: 'Subscription Vampire Slayer',
      tagline: 'TabPFN-3.5 Tabular Foundation Model',
      icon: 'PieChart',
      badge: 'Prior Labs TabPFN',
      badgeClass: 'badge-bronze',
      description: 'Zero-shot tabular AI audits statements for stealth price creep and flags zombie subscriptions without manual spreadsheets.',
      prompt: 'Audit recent bank transactions with TabPFN to spot sneaky subscription price creep.',
      steps: [{ name: 'tabpfn_anomaly_forecaster', arguments: { detectAnomalies: true } }]
    },
    {
      id: 'sunday-clutter-sweep',
      name: 'Sunday Clutter Sweep',
      tagline: 'Local Folder & Download Declutter',
      icon: 'FolderArchive',
      badge: 'Google Gemma 2',
      badgeClass: 'badge-sage',
      description: 'Scans chaotic desktop & downloads folders. Semantically categorizes files into clean directories so you never drag files again.',
      prompt: 'Clean up my chaotic downloads and sort files into structured project folders.',
      steps: [{ name: 'file_tidier', arguments: { targetFolder: 'Downloads' } }]
    },
    {
      id: 'morning-zero-effort',
      name: 'Morning Zero-Effort Briefing',
      tagline: '2-Bullet TL;DR + Calm Audio Digest',
      icon: 'Coffee',
      badge: 'ElevenLabs Audio',
      badgeClass: 'badge-neutral',
      description: 'Condenses 100+ unread newsletters and chats into 2 essential bullets, then synthesizes a calm voice stream for lazy mornings.',
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
      badge: 'Stagehand SDK',
      badgeClass: 'badge-neutral',
      description: 'Agentic browser navigates the web, verifies partner deals, and extracts technical docs without you clicking 20 tabs.',
      prompt: 'Research top open-weights AI benchmarks and verify Hacktoberfest partner credits.',
      steps: [{ name: 'browser_agent', arguments: { task: 'Extract Hacktoberfest partner perks' } }]
    }
  ];

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customPrompt.trim() || isRunning) return;
    onRunPreset({
      name: 'Custom Lazy Instruction',
      prompt: customPrompt,
      steps: []
    });
    setCustomPrompt('');
  };

  return (
    <section style={{ marginBottom: '3.5rem' }}>
      <div className="flex items-center justify-between" style={{ marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Effortless Automation Presets</h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Choose a chore you dread, or tell the agent what to handle while you relax.
          </p>
        </div>
        <span className="badge badge-neutral">Temporal Durability Active</span>
      </div>

      {/* Preset Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" style={{ marginBottom: '1.75rem' }}>
        {presets.map((preset) => {
          const Icon = iconMap[preset.icon] || Sparkles;
          return (
            <div key={preset.id} className="glass-card flex flex-col justify-between" style={{ height: '100%' }}>
              <div>
                <div className="flex items-center justify-between" style={{ marginBottom: '0.85rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#e5e7eb'
                  }}>
                    <Icon size={18} />
                  </div>
                  <span className={`badge ${preset.badgeClass}`} style={{ fontSize: '0.625rem' }}>
                    {preset.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.35rem', color: '#ffffff' }}>{preset.name}</h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 550, marginBottom: '0.75rem' }}>
                  {preset.tagline}
                </p>
                <p style={{ fontSize: '0.815rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  {preset.description}
                </p>
              </div>

              <button
                disabled={isRunning}
                onClick={() => onRunPreset(preset)}
                className="btn btn-secondary"
                style={{ width: '100%', padding: '0.55rem 0.95rem', fontSize: '0.815rem', justifyContent: 'space-between' }}
              >
                <span>Run Autopilot</span>
                <Play size={13} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Custom Chore Prompt Input */}
      <form onSubmit={handleCustomSubmit} className="glass-panel" style={{ padding: '1.1rem 1.35rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <div style={{ color: 'var(--text-muted)', paddingLeft: '0.35rem' }}>
          <Command size={18} />
        </div>
        <input
          type="text"
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
          placeholder="Tell SlothOps to automate any tedious task (e.g. 'Audit cloud invoices and organize downloads folder')..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: '0.925rem',
            fontFamily: 'var(--font-sans)',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          disabled={!customPrompt.trim() || isRunning}
          className="btn btn-primary"
          style={{ padding: '0.6rem 1.25rem', whiteSpace: 'nowrap', fontSize: '0.85rem' }}
        >
          <span>Dispatch Agent</span>
          <ArrowRight size={15} />
        </button>
      </form>
    </section>
  );
}
