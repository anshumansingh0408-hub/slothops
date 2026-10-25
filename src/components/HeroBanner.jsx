import React, { useState } from 'react';
import { ShieldCheck, ZapOff, Sparkles, Moon, RefreshCw, Flame, HeartHandshake } from 'lucide-react';

export function HeroBanner({ onQuickLaunch }) {
  const [slothEnergyLevel, setSlothEnergyLevel] = useState(98);

  return (
    <section className="glass-panel" style={{
      padding: '3rem 2.5rem',
      marginBottom: '3rem',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(16, 185, 129, 0.25)',
      boxShadow: '0 20px 45px -15px rgba(0, 0, 0, 0.8), 0 0 30px -10px rgba(16, 185, 129, 0.2)'
    }}>
      {/* Dynamic Animated Glow Orbs */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-5%',
        width: '380px',
        height: '380px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 75%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(30px)',
        animation: 'pulseGlow 6s infinite ease-in-out'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '20%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(40px)'
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '880px' }}>
        {/* Pills Header */}
        <div className="flex items-center gap-3" style={{ marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          <span className="badge badge-amber" style={{ animation: 'pulseGlow 4s infinite' }}>
            <Moon size={13} />
            International Sloth Day Edition
          </span>
          <span className="badge badge-emerald">
            <ShieldCheck size={13} />
            100% On-Device Privacy
          </span>
          <span className="badge badge-indigo">
            <ZapOff size={13} />
            $0 Recurring API Overhead
          </span>
        </div>

        {/* Main Title */}
        <h1 style={{
          fontSize: 'clamp(2.1rem, 4.5vw, 3.25rem)',
          lineHeight: 1.12,
          marginBottom: '1.35rem',
          fontWeight: 800
        }}>
          Conserve Your Energy. <br />
          <span className="emerald-gradient-text">Let Open-Source AI Eliminate Your Chores.</span>
        </h1>

        {/* Subtitle / Value Prop */}
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
          lineHeight: 1.65,
          maxWidth: '780px'
        }}>
          Sloths move at their own pace, sleep 20 hours a day, and never stress over paperwork. 
          <strong> SlothOps</strong> is your personal autonomous lifestyle autopilot powered by 
          <strong> Google Gemma 2</strong>, <strong>Mastra</strong>, and <strong>Prior Labs TabPFN-3.5</strong>. 
          It declutters your messy downloads, audits bank statements for stealth subscription price creep, 
          condenses 100+ newsletters, and narrates calm bedtime audio—so you can sit back and do absolutely nothing.
        </p>

        {/* Interactive Sloth Energy Meter */}
        <div className="glass-card" style={{
          padding: '1.15rem 1.5rem',
          background: 'rgba(8, 12, 20, 0.8)',
          marginBottom: '2rem',
          maxWidth: '680px',
          border: '1px solid rgba(255, 255, 255, 0.09)'
        }}>
          <div className="flex items-center justify-between" style={{ marginBottom: '0.65rem' }}>
            <div className="flex items-center gap-2">
              <span style={{ fontSize: '1.1rem' }}>🦥</span>
              <strong style={{ fontSize: '0.875rem', color: '#fff' }}>Human Energy Conserved:</strong>
            </div>
            <span style={{ fontSize: '0.9rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
              {slothEnergyLevel}% Effortless Autopilot
            </span>
          </div>

          <div className="sloth-gauge">
            <div className="sloth-gauge-fill" style={{ width: `${slothEnergyLevel}%` }} />
          </div>

          <div className="flex items-center justify-between" style={{ marginTop: '0.5rem', fontSize: '0.725rem', color: 'var(--text-muted)' }}>
            <span>Stressed Out (0% Automated)</span>
            <span>Zero Effort (100% Sloth Autopilot)</span>
          </div>
        </div>

        {/* Quick Launch Buttons */}
        <div className="flex items-center gap-4" style={{ flexWrap: 'wrap' }}>
          <button
            onClick={() => onQuickLaunch('complete-sloth-autopilot')}
            className="btn btn-primary"
            style={{ padding: '0.9rem 1.8rem', fontSize: '0.985rem' }}
          >
            <Sparkles size={18} />
            <span>Launch 1-Click Sloth Sweep</span>
          </button>

          <button
            onClick={() => onQuickLaunch('tabpfn-vampire-slayer')}
            className="btn btn-indigo"
            style={{ padding: '0.9rem 1.6rem', fontSize: '0.985rem' }}
          >
            <RefreshCw size={17} />
            <span>Audit Subscriptions with TabPFN</span>
          </button>
        </div>
      </div>
    </section>
  );
}
