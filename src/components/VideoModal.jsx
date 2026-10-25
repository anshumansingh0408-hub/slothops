import React from 'react';
import { X, Download, Film, Sparkles, CheckCircle2 } from 'lucide-react';

export function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '920px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '1.75rem',
          backgroundColor: '#0D0F14',
          border: '1px solid var(--border-medium)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between" style={{ marginBottom: '1.25rem' }}>
          <div className="flex items-center gap-2">
            <Film size={20} style={{ color: 'var(--accent-champagne)' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
              SlothOps Prototype Demo • Remotion Render
            </h3>
          </div>
          <button
            onClick={onClose}
            className="btn btn-secondary"
            style={{ padding: '0.4rem', borderRadius: '50%' }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Video Player */}
        <div
          style={{
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            backgroundColor: '#000000',
            aspectRatio: '16 / 9',
            position: 'relative',
            marginBottom: '1.25rem',
          }}
        >
          <video
            src="/slothops-demo.mp4"
            controls
            autoPlay
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>

        {/* Footer Details & Download */}
        <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: '1rem' }}>
          <div className="flex items-center gap-3">
            <span className="badge badge-accent">
              <Sparkles size={12} />
              1080p @ 30fps
            </span>
            <span className="badge badge-neutral">
              <CheckCircle2 size={12} />
              Rendered via @remotion/cli
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              20 seconds • 2.05 MB
            </span>
          </div>

          <a
            href="/slothops-demo.mp4"
            download="slothops-demo.mp4"
            className="btn btn-primary"
            style={{ padding: '0.5rem 1.25rem', textDecoration: 'none' }}
          >
            <Download size={14} />
            <span>Download MP4</span>
          </a>
        </div>
      </div>
    </div>
  );
}
