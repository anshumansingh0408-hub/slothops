import React from 'react';
import { X, Layers, Cpu, ShieldCheck, Zap, HardDrive, Radio, Activity, Globe } from 'lucide-react';

export function ArchitectureModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const stackComponents = [
    {
      category: '1. Open-Weight AI Core',
      icon: Cpu,
      color: 'emerald',
      items: [
        { name: 'Google Gemma 2 (9B/2B)', role: 'Central reasoning, semantic parsing & chore planning', openSource: true },
        { name: 'Mastra DAG Framework', role: 'TypeScript agent execution, tool routing & schema validation', openSource: true },
      ]
    },
    {
      category: '2. Specialized Tabular Foundation Model',
      icon: Activity,
      color: 'amber',
      items: [
        { name: 'Prior Labs TabPFN-3.5', role: 'Zero-shot in-context tabular learning for financial anomaly detection & cash burn forecasting', openSource: true }
      ]
    },
    {
      category: '3. Agent Tooling & Multimodal Interaction',
      icon: Globe,
      color: 'indigo',
      items: [
        { name: 'Browserbase (Stagehand SDK)', role: 'Autonomous headless web research & deal verification', openSource: false },
        { name: 'ElevenLabs Voice API', role: 'Calm ambient narration & wind-down audio stream', openSource: false },
        { name: 'Local File System Tidier', role: 'Automated file sorting, cleaning & archiving', openSource: true }
      ]
    },
    {
      category: '4. Durability, Storage & Observability',
      icon: Layers,
      color: 'purple',
      items: [
        { name: 'Temporal Workflows', role: 'State machine durability, step idempotency & exponential backoffs', openSource: true },
        { name: 'Tiger Data / MongoDB Atlas', role: 'PostgreSQL + pgvector long-term user memory & preference store', openSource: true },
        { name: 'Sentry Agent Tracing', role: 'Distributed span tracking, token accounting & latency diagnostics', openSource: true }
      ]
    },
    {
      category: '5. Hosting & Deployment Targets',
      icon: HardDrive,
      color: 'rose',
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
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1.5rem'
    }}>
      <div className="glass-panel" style={{
        maxWidth: '850px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '2rem',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <div className="flex items-center gap-2" style={{ marginBottom: '0.25rem' }}>
            <span className="badge badge-emerald">System Architecture Spec</span>
            <span className="badge badge-indigo">Hacktoberfest Week 3</span>
          </div>
          <h2 style={{ fontSize: '1.6rem' }}>SlothOps Partner Stack Blueprint</h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Engineered around open-weight models, tabular foundation AI, and durable workflow execution.
          </p>
        </div>

        {/* Stack Groups */}
        <div className="flex flex-col gap-4">
          {stackComponents.map((group, gi) => {
            const GroupIcon = group.icon;
            return (
              <div key={gi} className="glass-card" style={{ padding: '1.25rem' }}>
                <div className="flex items-center gap-2" style={{ marginBottom: '0.75rem', color: `var(--accent-${group.color})`, fontWeight: 700, fontSize: '0.95rem' }}>
                  <GroupIcon size={18} />
                  <span>{group.category}</span>
                </div>
                <div className="flex flex-col gap-2">
                  {group.items.map((item, ii) => (
                    <div key={ii} className="flex items-center justify-between" style={{ fontSize: '0.825rem', padding: '0.4rem 0', borderBottom: ii < group.items.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                      <div>
                        <strong style={{ color: '#fff' }}>{item.name}</strong>
                        <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>— {item.role}</span>
                      </div>
                      <span className={`badge ${item.openSource ? 'badge-emerald' : 'badge-subtle'}`} style={{ fontSize: '0.65rem' }}>
                        {item.openSource ? 'Open Source' : 'Partner Stack'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <button onClick={onClose} className="btn btn-primary" style={{ padding: '0.65rem 2rem' }}>
            Close Architecture Spec
          </button>
        </div>
      </div>
    </div>
  );
}
