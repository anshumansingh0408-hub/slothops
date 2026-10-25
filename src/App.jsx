import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { SlothPresets } from './components/SlothPresets';
import { AgentExecutionConsole } from './components/AgentExecutionConsole';
import { TabPFNVisualizer } from './components/TabPFNVisualizer';
import { AudioBriefingPlayer } from './components/AudioBriefingPlayer';
import { DevSubmissionViewer } from './components/DevSubmissionViewer';
import { ArchitectureModal } from './components/ArchitectureModal';
import { Heart, Sparkles, Moon } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('autopilot');
  const [isArchitectureModalOpen, setIsArchitectureModalOpen] = useState(false);
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
    <div className="app-container">
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenArchitecture={() => setIsArchitectureModalOpen(true)}
      />

      {/* Main Tab Content */}
      <main>
        {activeTab === 'autopilot' && (
          <>
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

            <SlothPresets onRunPreset={handleRunPreset} isRunning={isRunning} />

            <AgentExecutionConsole
              executionReport={executionReport}
              isRunning={isRunning}
              activePresetName={activePresetName}
            />
          </>
        )}

        {activeTab === 'tabpfn' && <TabPFNVisualizer />}

        {activeTab === 'audio' && <AudioBriefingPlayer />}

        {activeTab === 'dev-post' && <DevSubmissionViewer />}
      </main>

      {/* Architecture Spec Modal */}
      <ArchitectureModal
        isOpen={isArchitectureModalOpen}
        onClose={() => setIsArchitectureModalOpen(false)}
      />

      {/* Footer */}
      <footer style={{
        marginTop: '4rem',
        padding: '2rem 0',
        borderTop: '1px solid var(--border-subtle)',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.85rem'
      }}>
        <div className="flex items-center justify-center gap-2" style={{ marginBottom: '0.5rem' }}>
          <span>Built with</span>
          <span style={{ color: '#f43f5e' }}>♥</span>
          <span>for <strong>Hacktoberfest 2026 Week 3: Slow and Steady</strong></span>
        </div>
        <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
          Rewarding laziness through open innovation: Google Gemma 2 (Open-Weights), Mastra DAG Orchestration, 
          Prior Labs TabPFN-3.5, Browserbase Stagehand, and Temporal Workflows.
        </p>
      </footer>
    </div>
  );
}
