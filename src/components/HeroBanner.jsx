import React from 'react';
import { ShieldCheck, ZapOff, Sparkles, Moon, RefreshCw } from 'lucide-react';

export function HeroBanner({ onQuickLaunch }) {
  return (
    <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background Decorative Glows */}
      <div style={{
        position: 'absolute',
        top: '-40%',
        right: '-10%',
        width: '320px',
        height: '320px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '850px' }}>
        <div className="flex items-center gap-3" style={{ marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span className="badge badge-amber">
            <Moon size={14} />
            Theme: "Slow and Steady" (Sloth Day Celebration)
          </span>
          <span className="badge badge-emerald">
            <ShieldCheck size={14} />
            100% Local Privacy Guaranteed
          </span>
          <span className="badge badge-indigo">
            <ZapOff size={14} />
            $0 Cloud Recurring API Costs
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.75rem)', lineHeight: 1.15, marginBottom: '1.2rem' }}>
          Channel Your Inner Sloth. <br />
          <span className="emerald-gradient-text">Let Open-Source AI Do The Chores.</span>
        </h1>

        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
          Sloths move at their own pace, conserve energy, and do only what matters. <strong>SlothOps</strong> is a 
          resilient autonomous agent powered by <strong>Google Gemma 2</strong>, <strong>Mastra</strong>, and <strong>Prior Labs TabPFN-3.5</strong>. 
          It tidies your cluttered folders, audits bank statements for stealth subscription price creep, condenses 100+ newsletters, 
          and narrates calm bedtime summaries—so you never have to waste energy on chores again.
        </p>

        <div className="flex items-center gap-4" style={{ flexWrap: 'wrap' }}>
          <button
            onClick={() => onQuickLaunch('complete-sloth-autopilot')}
            className="btn btn-primary"
            style={{ padding: '0.85rem 1.6rem', fontSize: '0.95rem' }}
          >
            <Sparkles size={18} />
            <span>One-Click Full Sloth Sweep</span>
          </button>

          <button
            onClick={() => onQuickLaunch('tabpfn-vampire-slayer')}
            className="btn btn-indigo"
            style={{ padding: '0.85rem 1.4rem', fontSize: '0.95rem' }}
          >
            <RefreshCw size={18} />
            <span>Audit Subscriptions with TabPFN</span>
          </button>
        </div>
      </div>
    </section>
  );
}
