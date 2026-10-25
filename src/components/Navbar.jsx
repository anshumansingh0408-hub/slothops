import React from 'react';
import { Sparkles, Moon, Cpu, Layers, Activity, Film } from 'lucide-react';

export function Navbar({ activeTab, setActiveTab, onOpenArchitecture, onOpenVideo }) {
  const tabs = [
    { id: 'autopilot', label: 'Chore Autopilot', icon: Sparkles },
    { id: 'tabpfn', label: 'TabPFN Financial Auditor', icon: Activity },
    { id: 'audio', label: 'Sloth Audio Lounge', icon: Moon },
  ];

  return (
    <header className="glass-panel" style={{ padding: '0.85rem 1.6rem', marginBottom: '2.5rem', position: 'sticky', top: '1rem', zIndex: 100 }}>
      <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: '1rem' }}>
        {/* Brand & Minimalist Mascot */}
        <div 
          onClick={() => setActiveTab('autopilot')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.85rem' }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-medium)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            userSelect: 'none'
          }}>
            🦥
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#ffffff' }}>
                Sloth<span className="champagne-gradient-text">Ops</span>
              </span>
              <span className="badge badge-neutral" style={{ fontSize: '0.625rem', padding: '0.18rem 0.5rem' }}>
                v1.0
              </span>
            </div>
            <p style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
              Autonomous Chore Autopilot • Open-Weights
            </p>
          </div>
        </div>

        {/* Navigation Tabs (Apple / Linear minimal pill style) */}
        <nav className="flex items-center gap-1.5" style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '0.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`btn ${isActive ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.825rem',
                  borderRadius: 'var(--radius-sm)',
                  border: isActive ? 'none' : 'transparent'
                }}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* System & Architecture Actions */}
        <div className="flex items-center gap-2.5">
          <div className="badge badge-neutral" title="Google Gemma 2 (9B Local Open-Weights)">
            <Cpu size={13} />
            <span>Gemma 2</span>
          </div>

          <button
            onClick={onOpenVideo}
            className="btn btn-secondary"
            style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem', color: 'var(--accent-champagne)', borderColor: 'rgba(212, 163, 115, 0.35)' }}
            title="Watch Remotion Demo Video"
          >
            <Film size={14} />
            <span>Demo Video</span>
          </button>

          <button
            onClick={onOpenArchitecture}
            className="btn btn-secondary"
            style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
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
