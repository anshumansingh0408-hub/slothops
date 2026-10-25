import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Moon, Headphones, CloudRain, Wind, Waves, Coffee } from 'lucide-react';

export function AudioBriefingPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedMood, setSelectedMood] = useState('calm-ambient');
  const [activeSoundscape, setActiveSoundscape] = useState('canopy-rain');
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);
  
  const [customScript, setCustomScript] = useState(
    "Good evening. Your digital world is completely tidy. " +
    "Today, SlothOps sorted 8 cluttered downloads into clean project directories, " +
    "and TabPFN spotted two sneaky subscription price hikes saving you $113 next month. " +
    "Your 113 inbox newsletters were compressed into just two quick thoughts. " +
    "You have nothing else to do today. Close your eyes, breathe slowly, and enjoy the rest of your evening."
  );

  const synthRef = useRef(window.speechSynthesis);
  const audioContextRef = useRef(null);
  const ambientOscillatorRef = useRef(null);

  const soundscapes = [
    { id: 'canopy-rain', name: 'Rain on Canopy', icon: CloudRain },
    { id: 'sleepy-breeze', name: 'Gentle Breeze', icon: Wind },
    { id: 'night-waves', name: 'Midnight Waves', icon: Waves },
  ];

  const togglePlayAudio = () => {
    if (!synthRef.current) return;

    if (isPlaying) {
      synthRef.current.cancel();
      setIsPlaying(false);
    } else {
      synthRef.current.cancel();
      const utterance = new SpeechSynthesisUtterance(customScript);
      utterance.rate = selectedMood === 'calm-ambient' ? 0.85 : 0.98;
      utterance.pitch = 0.92;
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

  // Ambient sound synthesizer using Web Audio API for sleep / wind-down
  const toggleAmbientSound = () => {
    if (isAmbientPlaying) {
      if (ambientOscillatorRef.current) {
        try { ambientOscillatorRef.current.stop(); } catch(e) {}
      }
      setIsAmbientPlaying(false);
    } else {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        audioContextRef.current = ctx;

        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.06, ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        whiteNoise.start();
        ambientOscillatorRef.current = whiteNoise;
        setIsAmbientPlaying(true);
      } catch (err) {
        console.warn('Web Audio error:', err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (synthRef.current) synthRef.current.cancel();
      if (ambientOscillatorRef.current) {
        try { ambientOscillatorRef.current.stop(); } catch(e) {}
      }
    };
  }, []);

  return (
    <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
      {/* Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="flex items-center gap-2" style={{ marginBottom: '0.35rem' }}>
            <h2 style={{ fontSize: '1.75rem' }}>Sloth Audio & Bedtime Lounge</h2>
            <span className="badge badge-neutral">ElevenLabs Audio API / Ambient TTS</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Lie back, close your eyes, and listen. Hands-free audio summaries and soothing soundscapes for zero screen glare.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedMood('calm-ambient')}
            className={`badge ${selectedMood === 'calm-ambient' ? 'badge-neutral' : 'badge-subtle'}`}
            style={{ cursor: 'pointer', padding: '0.45rem 0.9rem', background: selectedMood === 'calm-ambient' ? 'rgba(255,255,255,0.12)' : 'transparent' }}
          >
            <Moon size={13} />
            <span>Bedtime Wind-Down</span>
          </button>
          <button
            onClick={() => setSelectedMood('morning-fresh')}
            className={`badge ${selectedMood === 'morning-fresh' ? 'badge-bronze' : 'badge-subtle'}`}
            style={{ cursor: 'pointer', padding: '0.45rem 0.9rem' }}
          >
            <Coffee size={13} />
            <span>Morning Coffee Digest</span>
          </button>
        </div>
      </div>

      {/* Main Player Visualizer Card */}
      <div className="glass-card" style={{
        padding: '2.5rem',
        background: 'rgba(12, 15, 22, 0.95)',
        marginBottom: '2rem',
        textAlign: 'center',
        border: '1px solid var(--border-medium)'
      }}>
        {/* Animated Titanium Waveform Simulation */}
        <div className="waveform-container" style={{ marginBottom: '1.75rem' }}>
          {[16, 32, 48, 64, 38, 54, 72, 42, 28, 58, 68, 36, 50, 75, 30, 46, 62, 34, 20].map((height, i) => (
            <div
              key={i}
              className="wave-bar"
              style={{
                height: isPlaying ? `${height}px` : '7px',
                backgroundColor: isPlaying ? '#ffffff' : 'rgba(255, 255, 255, 0.2)',
                animation: isPlaying ? `subtleBreathe 1.${(i % 5) + 2}s infinite alternate` : 'none'
              }}
            />
          ))}
        </div>

        {/* Script Display */}
        <p style={{
          fontSize: '1.15rem',
          color: '#f9fafb',
          fontStyle: 'italic',
          maxWidth: '720px',
          margin: '0 auto 2rem',
          lineHeight: 1.7
        }}>
          "{customScript}"
        </p>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4" style={{ flexWrap: 'wrap' }}>
          <button
            onClick={resetNarration}
            className="btn btn-secondary"
            style={{ borderRadius: '50%', width: '46px', height: '46px', padding: 0 }}
            title="Reset Narration"
          >
            <RotateCcw size={17} />
          </button>

          <button
            onClick={togglePlayAudio}
            className="btn btn-primary"
            style={{ borderRadius: 'var(--radius-full)', padding: '0.85rem 2rem', fontSize: '0.975rem' }}
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

          <button
            onClick={toggleAmbientSound}
            className={`btn ${isAmbientPlaying ? 'btn-titanium' : 'btn-secondary'}`}
            style={{ borderRadius: 'var(--radius-full)', padding: '0.85rem 1.6rem', fontSize: '0.9rem' }}
          >
            <CloudRain size={16} />
            <span>{isAmbientPlaying ? 'Stop Ambient Rain' : 'Play Ambient Rain'}</span>
          </button>
        </div>
      </div>

      {/* Ambient Soundscape Presets */}
      <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: '1rem' }}>
        <div className="flex items-center gap-3">
          <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Background Sleep Ambience:</span>
          {soundscapes.map((sound) => {
            const SoundIcon = sound.icon;
            const isSelected = activeSoundscape === sound.id;
            return (
              <button
                key={sound.id}
                onClick={() => setActiveSoundscape(sound.id)}
                className={`badge badge-neutral`}
                style={{ cursor: 'pointer', background: isSelected ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)' }}
              >
                <SoundIcon size={12} />
                <span>{sound.name}</span>
              </button>
            );
          })}
        </div>

        <div className="badge badge-neutral">
          <Headphones size={13} />
          <span>0% Screen Glare • 100% Sloth Approved</span>
        </div>
      </div>
    </div>
  );
}
