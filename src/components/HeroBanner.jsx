import React, { useState } from 'react';
import { ShieldCheck, ZapOff, Sparkles, Moon, RefreshCw } from 'lucide-react';

export function HeroBanner({ onQuickLaunch }) {
  const [slothEnergyLevel, setSlothEnergyLevel] = useState(98);

  return (
    <section className="glass-panel" style={{
      padding: '3.25rem 2.75rem',
      marginBottom: '3rem',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid var(--border-medium)',
      boxShadow: 'var(--shadow-card), var(--shadow-inner)'
    }}>
      {/* Refined Atmospheric Backlight (No Neon) */}
      <div style={{
        position: 'absolute',
        top: '-30%',
        right: '-5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(212, 196, 176, 0.02) 40%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '880px' }}>
        {/* Refined Badges */}
        <div className="flex items-center gap-2.5" style={{ marginBottom: '1.35rem', flexWrap: 'wrap' }}>
          <span className="badge badge-bronze">
            <Moon size={13} />
            International Sloth Day Edition
          </span>
          <span className="badge badge-neutral">
            <ShieldCheck size={13} />
            100% On-Device Privacy
          </span>
          <span className="badge badge-sage">
            <ZapOff size={13} />
            $0 Cloud API Overhead
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2.1rem, 4.5vw, 3.35rem)',
          lineHeight: 1.12,
          marginBottom: '1.35rem',
          fontWeight: 800
        }}>
          Conserve Your Energy. <br />
          <span className="champagne-gradient-text">Let Open-Source AI Eliminate Your Chores.</span>
        </h1>

        {/* Narrative Copy */}
        <p style={{
          fontSize: '1.075rem',
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
          lineHeight: 1.65,
          maxWidth: '760px'
        }}>
          Sloths move at their own pace, sleep 20 hours a day, and never stress over paperwork. 
          <strong> SlothOps</strong> is your autonomous lifestyle autopilot powered by 
          <strong> Google Gemma 2</strong>, <strong>Mastra</strong>, and <strong>Prior Labs TabPFN-3.5</strong>. 
          It declutters your messy downloads, audits statements for stealth subscription price creep, 
          condenses 100+ newsletters, and narrates calm bedtime audio—so you can sit back and do absolutely nothing.
        </p>

        {/* Refined Energy Gauge */}
        <div className="glass-card" style={{
          padding: '1.25rem 1.6rem',
          background: 'rgba(14, 17, 24, 0.75)',
          marginBottom: '2.25rem',
          maxWidth: '680px',
          border: '1px solid var(--border-subtle)'
        }}>
          <div className="flex items-center justify-between" style={{ marginBottom: '0.65rem' }}>
            <div className="flex items-center gap-2">
              <span style={{ fontSize: '1.1rem' }}>🦥</span>
              <strong style={{ fontSize: '0.875rem', color: '#ffffff' }}>Human Energy Conserved:</strong>
            </div>
            <span style={{ fontSize: '0.875rem', color: 'var(--accent-champagne)', fontWeight: 600 }}>
              {slothEnergyLevel}% Effortless Autopilot
            </span>
          </div>

          <div className="sloth-gauge">
            <div className="sloth-gauge-fill" style={{ width: `${slothEnergyLevel}%` }} />
          </div>

          <div className="flex items-center justify-between" style={{ marginTop: '0.55rem', fontSize: '0.725rem', color: 'var(--text-muted)' }}>
            <span>Stressed (0% Automated)</span>
            <span>Zero Effort (100% Sloth Autopilot)</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4" style={{ flexWrap: 'wrap' }}>
          <button
            onClick={() => onQuickLaunch('complete-sloth-autopilot')}
            className="btn btn-primary"
            style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem' }}
          >
            <Sparkles size={16} />
            <span>Launch 1-Click Sloth Sweep</span>
          </button>

          <button
            onClick={() => onQuickLaunch('tabpfn-vampire-slayer')}
            className="btn btn-titanium"
            style={{ padding: '0.85rem 1.6rem', fontSize: '0.95rem' }}
          >
            <RefreshCw size={16} />
            <span>Audit Subscriptions with TabPFN</span>
          </button>
        </div>
      </div>
    </section>
  );
}
