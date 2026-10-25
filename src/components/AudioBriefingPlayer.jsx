import React, { useState, useRef } from 'react';
import { Volume2, Play, Pause, RotateCcw, Sparkles, Moon, Headphones } from 'lucide-react';

export function AudioBriefingPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedMood, setSelectedMood] = useState('calm-ambient');
  const [customScript, setCustomScript] = useState(
    "Good evening. Your digital world is completely tidy. " +
    "Today, SlothOps sorted 8 cluttered downloads into clean project directories, " +
    "and TabPFN spotted two sneaky subscription price hikes saving you $113 next month. " +
    "Your 113 inbox newsletters were compressed into just two quick thoughts. " +
    "You have nothing else to do today. Close your eyes, breathe slowly, and enjoy the rest of your evening."
  );

  const synthRef = useRef(window.speechSynthesis);

  const togglePlayAudio = () => {
    if (!synthRef.current) return;

    if (isPlaying) {
      synthRef.current.cancel();
      setIsPlaying(false);
    } else {
      synthRef.current.cancel();
      const utterance = new SpeechSynthesisUtterance(customScript);
      utterance.rate = selectedMood === 'calm-ambient' ? 0.85 : 0.95;
      utterance.pitch = 0.9;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      synthRef.current.speak(utterance);
      setIsPlaying(true);
    }
  };

  const resetNarration = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    setIsPlaying(false);
  };

  return (
    <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2.5rem' }}>
      {/* Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="flex items-center gap-2" style={{ marginBottom: '0.25rem' }}>
            <h2 style={{ fontSize: '1.6rem' }}>Sloth Audio Lounge</h2>
            <span className="badge badge-indigo">ElevenLabs Audio API / Ambient TTS</span>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Lie back, close your eyes, and listen. Hands-free audio summaries for effortless mornings and peaceful sleep.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedMood('calm-ambient')}
            className={`badge ${selectedMood === 'calm-ambient' ? 'badge-emerald' : 'badge-subtle'}`}
            style={{ cursor: 'pointer', padding: '0.4rem 0.8rem' }}
          >
            <Moon size={13} />
            <span>Bedtime Wind-Down</span>
          </button>
          <button
            onClick={() => setSelectedMood('morning-fresh')}
            className={`badge ${selectedMood === 'morning-fresh' ? 'badge-amber' : 'badge-subtle'}`}
            style={{ cursor: 'pointer', padding: '0.4rem 0.8rem' }}
          >
            <Sparkles size={13} />
            <span>Morning Fresh</span>
          </button>
        </div>
      </div>

      {/* Main Player Visualizer Card */}
      <div className="glass-card" style={{ padding: '2rem', background: 'rgba(8, 11, 18, 0.9)', marginBottom: '1.5rem', textAlign: 'center' }}>
        {/* Animated Waveform Simulation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', height: '60px', marginBottom: '1.5rem' }}>
          {[18, 36, 52, 28, 44, 58, 32, 22, 48, 54, 30, 42, 60, 24, 38, 50, 26, 16].map((height, i) => (
            <div
              key={i}
              style={{
                width: '5px',
                height: isPlaying ? `${height}px` : '8px',
                backgroundColor: isPlaying ? 'var(--accent-emerald)' : 'rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                transition: 'height 0.2s ease',
                animation: isPlaying ? `pulseGlow 1.${(i % 5) + 2}s infinite alternate` : 'none'
              }}
            />
          ))}
        </div>

        {/* Script Display */}
        <p style={{ fontSize: '1.05rem', color: '#fff', fontStyle: 'italic', maxWidth: '680px', margin: '0 auto 1.75rem', lineHeight: 1.6 }}>
          "{customScript}"
        </p>

        {/* Audio Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={resetNarration}
            className="btn btn-secondary"
            style={{ borderRadius: '50%', width: '44px', height: '44px', padding: 0 }}
            title="Reset Narration"
          >
            <RotateCcw size={16} />
          </button>

          <button
            onClick={togglePlayAudio}
            className="btn btn-primary"
            style={{ borderRadius: 'var(--radius-full)', padding: '0.85rem 2rem', fontSize: '1rem' }}
          >
            {isPlaying ? (
              <>
                <Pause size={18} />
                <span>Pause Sloth Narration</span>
              </>
            ) : (
              <>
                <Play size={18} />
                <span>Play Calming Audio</span>
              </>
            )}
          </button>

          <div className="badge badge-emerald" title="Hands-Free Listening Active">
            <Headphones size={14} />
            <span>0% Screen Glare</span>
          </div>
        </div>
      </div>
    </div>
  );
}
