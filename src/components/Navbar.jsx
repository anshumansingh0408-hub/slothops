import React from 'react';
import { Sparkles, Moon, Cpu, Layers, Activity, Zap } from 'lucide-react';

export function Navbar({ activeTab, setActiveTab, onOpenArchitecture }) {
  const tabs = [
    { id: 'autopilot', label: 'Chore Autopilot', icon: Sparkles },
    { id: 'tabpfn', label: 'TabPFN Financial Auditor', icon: Activity },
    { id: 'audio', label: 'Sloth Audio Lounge', icon: Moon },
  ];

  return (
    <header className="glass-panel" style={{ padding: '0.9rem 1.6rem', marginBottom: '2.25rem', position: 'sticky', top: '1rem', zIndex: 100 }}>
      <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: '1rem' }}>
        {/* Brand & Mascot */}
        <div 
          onClick={() => setActiveTab('autopilot')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.85rem' }}
        >
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(99, 102, 241, 0.25) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.45)',
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            userSelect: 'none'
          }}>
            🦥
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
                Sloth<span className="emerald-gradient-text">Ops</span>
              </span>
              <span className="badge badge-emerald" style={{ fontSize: '0.625rem', padding: '0.2rem 0.55rem' }}>
                v1.0 • Sloth Edition
              </span>
            </div>
            <p style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
              Autonomous Chore Elimination • Open-Weights AI
            </p>
          </div>
        </div>

        {/* Navigation Tabs (Challenge submission removed) */}
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
                  padding: '0.55rem 1.05rem',
                  fontSize: '0.835rem',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <Icon size={15} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* System & Architecture Actions */}
        <div className="flex items-center gap-3">
          <div className="badge badge-indigo" title="Google Gemma 2 Open-Weights Reasoning Active">
            <Cpu size={13} />
            <span>Gemma 2 (9B Local)</span>
          </div>

          <button
            onClick={onOpenArchitecture}
            className="btn btn-secondary"
            style={{ padding: '0.5rem 0.95rem', fontSize: '0.8rem' }}
            title="Inspect Partner Architecture"
          >
            <Layers size={14} />
            <span>Stack Spec</span>
          </button>
        </div>
      </div>
    </header>
  );
}
