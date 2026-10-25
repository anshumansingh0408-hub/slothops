import React from 'react';
import { Moon, Sparkles, Cpu, Layers, FileText, Activity } from 'lucide-react';

export function Navbar({ activeTab, setActiveTab, onOpenArchitecture }) {
  const tabs = [
    { id: 'autopilot', label: 'Chore Autopilot', icon: Sparkles },
    { id: 'tabpfn', label: 'TabPFN Financial Auditor', icon: Activity },
    { id: 'audio', label: 'Sloth Audio Lounge', icon: Moon },
    { id: 'dev-post', label: 'DEV Challenge Submission', icon: FileText },
  ];

  return (
    <header className="glass-panel" style={{ padding: '0.85rem 1.5rem', marginBottom: '2rem' }}>
      <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: '1rem' }}>
        {/* Logo & Branding */}
        <div className="flex items-center gap-4">
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(99, 102, 241, 0.25) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem'
          }}>
            🦥
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                Sloth<span className="emerald-gradient-text">Ops</span>
              </span>
              <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>
                Hacktoberfest 2026 Week 3
              </span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Open-Source AI Autopilot • Rewarding Laziness
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-2" style={{ flexWrap: 'wrap' }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`btn ${isActive ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  padding: '0.5rem 0.95rem',
                  fontSize: '0.825rem',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Model Runtime Pill & Architecture Modal */}
        <div className="flex items-center gap-3">
          <div className="badge badge-indigo" title="Google Gemma 2 Open-Weights Active">
            <Cpu size={14} />
            <span>Gemma 2 (9B Open-Weight)</span>
          </div>
          <button
            onClick={onOpenArchitecture}
            className="btn btn-secondary"
            style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
            title="Inspect Partner Architecture"
          >
            <Layers size={15} />
            <span>Stack Spec</span>
          </button>
        </div>
      </div>
    </header>
  );
}
