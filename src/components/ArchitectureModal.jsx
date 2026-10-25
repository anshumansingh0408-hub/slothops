import React from 'react';
import { X, Layers, Cpu, Activity, Globe, HardDrive } from 'lucide-react';

export function ArchitectureModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const stackComponents = [
    {
      category: '1. Open-Weight AI Core',
      icon: Cpu,
      badgeClass: 'badge-sage',
      items: [
        { name: 'Google Gemma 2 (9B/2B)', role: 'Central reasoning, semantic parsing & chore planning', openSource: true },
        { name: 'Mastra DAG Framework', role: 'TypeScript agent execution, tool routing & schema validation', openSource: true },
      ]
    },
    {
      category: '2. Specialized Tabular Foundation Model',
      icon: Activity,
      badgeClass: 'badge-bronze',
      items: [
        { name: 'Prior Labs TabPFN-3.5', role: 'Zero-shot in-context tabular learning for financial anomaly detection & cash burn forecasting', openSource: true }
      ]
    },
    {
      category: '3. Agent Tooling & Multimodal Interaction',
      icon: Globe,
      badgeClass: 'badge-neutral',
      items: [
        { name: 'Browserbase (Stagehand SDK)', role: 'Autonomous headless web research & deal verification', openSource: false },
        { name: 'ElevenLabs Voice API', role: 'Calm ambient narration & wind-down audio stream', openSource: false },
        { name: 'Local File System Tidier', role: 'Automated file sorting, cleaning & archiving', openSource: true }
      ]
    },
    {
      category: '4. Durability, Storage & Observability',
      icon: Layers,
      badgeClass: 'badge-neutral',
      items: [
        { name: 'Temporal Workflows', role: 'State machine durability, step idempotency & exponential backoffs', openSource: true },
        { name: 'Tiger Data / MongoDB Atlas', role: 'PostgreSQL + pgvector long-term user memory & preference store', openSource: true },
        { name: 'Sentry Agent Tracing', role: 'Distributed span tracking, token accounting & latency diagnostics', openSource: true }
      ]
    },
    {
      category: '5. Hosting & Deployment Targets',
      icon: HardDrive,
      badgeClass: 'badge-neutral',
      items: [
        { name: 'Render Web Services', role: '1-Click deployment via render.yaml blueprint', openSource: false },
        { name: 'DigitalOcean GPU Droplet', role: 'Docker containerized runner for local/cloud open-weight execution', openSource: false }
      ]
    }
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1.5rem'
    }}>
      <div className="glass-panel" style={{
        maxWidth: '820px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '2.25rem',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={16} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <div className="flex items-center gap-2" style={{ marginBottom: '0.35rem' }}>
            <span className="badge badge-neutral">System Architecture Spec</span>
            <span className="badge badge-bronze">SlothOps Architecture</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', color: '#fff' }}>SlothOps Partner Stack Blueprint</h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Engineered around open-weight models, tabular foundation AI, and durable workflow execution.
          </p>
        </div>

        {/* Stack Groups */}
        <div className="flex flex-col gap-3.5">
          {stackComponents.map((group, gi) => {
            const GroupIcon = group.icon;
            return (
              <div key={gi} className="glass-card" style={{ padding: '1.25rem' }}>
                <div className="flex items-center gap-2" style={{ marginBottom: '0.75rem', color: '#f3f4f6', fontWeight: 650, fontSize: '0.925rem' }}>
                  <GroupIcon size={16} color="#d1d5db" />
                  <span>{group.category}</span>
                </div>
                <div className="flex flex-col gap-2">
                  {group.items.map((item, ii) => (
                    <div key={ii} className="flex items-center justify-between" style={{ fontSize: '0.815rem', padding: '0.35rem 0', borderBottom: ii < group.items.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                      <div>
                        <strong style={{ color: '#ffffff' }}>{item.name}</strong>
                        <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>— {item.role}</span>
                      </div>
                      <span className={`badge ${item.openSource ? 'badge-sage' : 'badge-neutral'}`} style={{ fontSize: '0.625rem' }}>
                        {item.openSource ? 'Open Source' : 'Partner Stack'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '1.75rem', textAlign: 'center' }}>
          <button onClick={onClose} className="btn btn-primary" style={{ padding: '0.65rem 2.2rem' }}>
            Close Architecture Spec
          </button>
        </div>
      </div>
    </div>
  );
}
