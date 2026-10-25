import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export function ManualVsSloth() {
  const comparisons = [
    {
      chore: 'Messy Downloads & Desktop Folders',
      manual: 'Spending 20 mins every Sunday dragging screenshots and PDFs into folders manually.',
      sloth: 'Gemma 2 semantically groups and archives files into project hierarchies with 1 click.'
    },
    {
      chore: 'Auditing Bank & Card Statements',
      manual: 'Opening raw CSVs in Excel, writing VLOOKUPs, or missing stealth 20%+ price increases.',
      sloth: 'Prior Labs TabPFN-3.5 performs zero-shot in-context learning to auto-flag price creeps.'
    },
    {
      chore: 'Information Overload & Newsletters',
      manual: 'Scrolling through 100+ Discord pings and newsletters with cognitive fatigue and eye strain.',
      sloth: 'Mastra condenses chaotic feeds into an ultra-lean 2-bullet executive summary.'
    },
    {
      chore: 'End-of-Day Wind Down',
      manual: 'Staring at a bright screen before bed to catch up on missed alerts and action items.',
      sloth: 'ElevenLabs narrates a calming audio briefing while you lie back with your eyes closed.'
    },
    {
      chore: 'Data Privacy & Cloud Fees',
      manual: 'Sending your private bank statements and chat history to proprietary cloud LLMs ($$$).',
      sloth: '100% on-device open-weights execution with $0 recurring API costs and total privacy.'
    }
  ];

  return (
    <section style={{ marginBottom: '3.5rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
        <span className="badge badge-bronze" style={{ marginBottom: '0.75rem' }}>
          Effort & Energy Comparison
        </span>
        <h2 style={{ fontSize: '1.9rem', marginBottom: '0.65rem' }}>
          The Burnout Way vs. The SlothOps Way
        </h2>
        <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
          See why channeling your inner sloth is the smartest productivity decision you'll make.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '0', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.865rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)', background: 'rgba(255, 255, 255, 0.02)' }}>
              <th style={{ padding: '1.15rem 1.4rem', width: '25%', color: 'var(--text-muted)' }}>Daily Digital Chore</th>
              <th style={{ padding: '1.15rem 1.4rem', width: '37.5%', color: '#e29f99' }}>
                <div className="flex items-center gap-2">
                  <XCircle size={16} />
                  <span>Manual & Stressful</span>
                </div>
              </th>
              <th style={{ padding: '1.15rem 1.4rem', width: '37.5%', color: '#b2c9bc' }}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>SlothOps Autopilot</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((item, idx) => (
              <tr key={idx} style={{
                borderBottom: idx < comparisons.length - 1 ? '1px solid rgba(255, 255, 255, 0.04)' : 'none',
                background: idx % 2 === 0 ? 'rgba(0, 0, 0, 0.15)' : 'transparent'
              }}>
                <td style={{ padding: '1.15rem 1.4rem', fontWeight: 650, color: '#f3f4f6' }}>
                  {item.chore}
                </td>
                <td style={{ padding: '1.15rem 1.4rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  <span style={{ color: '#e29f99' }}>✗</span> {item.manual}
                </td>
                <td style={{ padding: '1.15rem 1.4rem', color: '#e5e7eb', lineHeight: 1.55 }}>
                  <span style={{ color: '#b2c9bc', fontWeight: 700 }}>✓</span> {item.sloth}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
