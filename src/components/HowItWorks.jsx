import React from 'react';
import { Inbox, Cpu, Activity, CheckCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Sensory Ingestion',
      badge: 'Zero Manual Prep',
      icon: Inbox,
      badgeClass: 'badge-neutral',
      description: 'SlothOps detects messy Desktop/Download files, incoming banking CSV exports, and 100+ unread newsletter feeds without you organizing anything.'
    },
    {
      num: '02',
      title: 'Gemma 2 Reasoning',
      badge: 'Open-Weights Core',
      icon: Cpu,
      badgeClass: 'badge-sage',
      description: 'Google Gemma 2 (9B instruction-tuned) semantically parses file contexts, plans execution order, and formulates chore DAGs locally on your machine.'
    },
    {
      num: '03',
      title: 'TabPFN-3.5 Forward-Pass',
      badge: 'Tabular Foundation AI',
      icon: Activity,
      badgeClass: 'badge-bronze',
      description: 'Prior Labs TabPFN-3.5 ingests bank transactions in a single transformer forward pass, detecting price creep and projecting cash burn with zero tuning.'
    },
    {
      num: '04',
      title: 'Effortless Resolution',
      badge: 'Temporal Durability',
      icon: CheckCircle,
      badgeClass: 'badge-neutral',
      description: 'Mastra executes file moves, auto-cancels zombie subscriptions, and narrates an ambient ElevenLabs bedtime audio stream. You just rest.'
    }
  ];

  return (
    <section style={{ marginBottom: '3.5rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
        <span className="badge badge-neutral" style={{ marginBottom: '0.75rem' }}>
          Autonomous Workflow Architecture
        </span>
        <h2 style={{ fontSize: '1.9rem', marginBottom: '0.65rem' }}>
          How SlothOps Does The Work For You
        </h2>
        <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
          A 4-stage pipeline engineered around open-weights, tabular foundation intelligence, and durable self-healing workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="pipeline-step-node">
              <div className="pipeline-step-number">
                {step.num}
              </div>
              <span className={`badge ${step.badgeClass}`} style={{ fontSize: '0.625rem', marginBottom: '0.75rem' }}>
                {step.badge}
              </span>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.45rem', color: '#ffffff' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.815rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
