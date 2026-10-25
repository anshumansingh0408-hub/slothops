import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { HowItWorks } from './components/HowItWorks';
import { SlothPresets } from './components/SlothPresets';
import { AgentExecutionConsole } from './components/AgentExecutionConsole';
import { ManualVsSloth } from './components/ManualVsSloth';
import { TabPFNVisualizer } from './components/TabPFNVisualizer';
import { AudioBriefingPlayer } from './components/AudioBriefingPlayer';
import { ArchitectureModal } from './components/ArchitectureModal';
import { VideoModal } from './components/VideoModal';
import { Heart, Sparkles, Moon, ShieldCheck, Zap } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('autopilot');
  const [isArchitectureModalOpen, setIsArchitectureModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [activePresetName, setActivePresetName] = useState('');
  const [executionReport, setExecutionReport] = useState(null);

  const handleRunPreset = async (preset) => {
    setIsRunning(true);
    setActivePresetName(preset.name);
    setExecutionReport(null);
    setActiveTab('autopilot');

    try {
      const response = await fetch('/api/agent/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          workflowName: preset.name,
          prompt: preset.prompt,
          steps: preset.steps
        })
      });

      if (response.ok) {
        const data = await response.json();
        setExecutionReport(data);
      } else {
        console.error('Workflow execution error:', await response.text());
      }
    } catch (err) {
      console.error('Agent dispatch failed:', err);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <>
      {/* Ambient Bioluminescent Floating Particles */}
      <div className="ambient-particles-bg">
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
      </div>

      <div className="app-container">
        {/* Navigation */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenArchitecture={() => setIsArchitectureModalOpen(true)}
          onOpenVideo={() => setIsVideoModalOpen(true)}
        />

        {/* Tab Content */}
        <main>
          {activeTab === 'autopilot' && (
            <>
              {/* Hero Banner */}
              <HeroBanner onQuickLaunch={(presetId) => {
                if (presetId === 'complete-sloth-autopilot') {
                  handleRunPreset({
                    name: 'The Ultimate Sloth Cycle',
                    prompt: 'Execute full digital chore autopilot: clean clutter, audit expenses, condense news, and wind down with voice audio.',
                    steps: [
                      { name: 'file_tidier', arguments: {} },
                      { name: 'tabpfn_anomaly_forecaster', arguments: {} },
                      { name: 'inbox_condenser', arguments: { maxBullets: 2 } },
                      { name: 'voice_digest', arguments: { mood: 'sleepy-bedtime' } }
                    ]
                  });
                } else if (presetId === 'tabpfn-vampire-slayer') {
                  handleRunPreset({
                    name: 'Subscription Vampire Slayer',
                    prompt: 'Audit recent bank transactions with TabPFN to spot sneaky subscription price creep.',
                    steps: [{ name: 'tabpfn_anomaly_forecaster', arguments: { detectAnomalies: true } }]
                  });
                }
              }} />

              {/* Execution Console (displays when running or completed) */}
              <AgentExecutionConsole
                executionReport={executionReport}
                isRunning={isRunning}
                activePresetName={activePresetName}
              />

              {/* Presets Grid */}
              <SlothPresets onRunPreset={handleRunPreset} isRunning={isRunning} />

              {/* 4-Stage Autonomous Pipeline */}
              <HowItWorks />

              {/* Manual vs SlothOps Comparison Table */}
              <ManualVsSloth />
            </>
          )}

          {activeTab === 'tabpfn' && <TabPFNVisualizer />}

          {activeTab === 'audio' && <AudioBriefingPlayer />}
        </main>

        {/* Architecture Spec Modal */}
        <ArchitectureModal
          isOpen={isArchitectureModalOpen}
          onClose={() => setIsArchitectureModalOpen(false)}
        />

        {/* Remotion Demo Video Modal */}
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
        />

        {/* Footer */}
        <footer style={{
          marginTop: '5rem',
          padding: '2.5rem 0',
          borderTop: '1px solid var(--border-subtle)',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.85rem'
        }}>
          <div className="flex items-center justify-center gap-2" style={{ marginBottom: '0.65rem' }}>
            <span>Engineered with</span>
            <span style={{ color: '#f43f5e' }}>♥</span>
            <span>for <strong>Hacktoberfest 2026: Slow and Steady</strong></span>
          </div>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Rewarding laziness through open innovation: Google Gemma 2 (Open-Weights), Mastra DAG Orchestration, 
            Prior Labs TabPFN-3.5, Browserbase Stagehand SDK, and Temporal Workflows.
          </p>
          <div className="flex items-center justify-center gap-3" style={{ marginTop: '1rem' }}>
            <span className="badge badge-emerald">100% Offline Capable</span>
            <span className="badge badge-indigo">Zero Data Telemetry Leaks</span>
            <span className="badge badge-amber">$0 Recurring Overhead</span>
          </div>
        </footer>
      </div>
    </>
  );
}
