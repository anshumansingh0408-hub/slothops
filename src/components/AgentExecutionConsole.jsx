import React from 'react';
import { 
  Terminal, 
  CheckCircle2, 
  Clock, 
  Cpu, 
  ShieldCheck, 
  DollarSign, 
  Volume2, 
  Layers,
  AlertTriangle,
  FolderCheck,
  FileSpreadsheet
} from 'lucide-react';

export function AgentExecutionConsole({ executionReport, isRunning, activePresetName }) {
  if (!executionReport && !isRunning) {
    return null;
  }

  const telemetry = executionReport?.telemetry;

  return (
    <section className="glass-panel" style={{ padding: '2rem', marginBottom: '3rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
      {/* Header & Status Indicator */}
      <div className="flex items-center justify-between" style={{ marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div className="flex items-center gap-3">
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: isRunning ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)',
            border: isRunning ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(16, 185, 129, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isRunning ? 'var(--accent-amber)' : 'var(--accent-emerald)'
          }}>
            {isRunning ? <Clock size={18} className="animate-spin-slow" /> : <CheckCircle2 size={18} />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 style={{ fontSize: '1.25rem' }}>
                {isRunning ? `Autopilot Running: ${activePresetName || 'Workflow'}` : `Completed: ${executionReport?.workflowName || 'Workflow'}`}
              </h3>
              <span className={`badge ${isRunning ? 'badge-amber' : 'badge-emerald'}`}>
                {isRunning ? 'Temporal Executing' : 'All Chores Complete'}
              </span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Orchestrated with Mastra DAG • Google Gemma 2 9B (Open-Weights) • Sentry Span Tracing
            </p>
          </div>
        </div>

        {/* Telemetry Metric Badges */}
        {telemetry && (
          <div className="flex items-center gap-2" style={{ flexWrap: 'wrap' }}>
            <div className="badge badge-emerald" title="Tokens used locally for $0">
              <Cpu size={13} />
              <span>{telemetry.totalTokens} Local Tokens</span>
            </div>
            <div className="badge badge-indigo" title="Estimated cloud API fees saved">
              <DollarSign size={13} />
              <span>${telemetry.estimatedCloudCostSavedUSD} API Tax Saved</span>
            </div>
            <div className="badge badge-amber" title="Workflow duration">
              <Clock size={13} />
              <span>{telemetry.totalDurationMs}ms Latency</span>
            </div>
            <div className="badge badge-rose" title="Sentry Spans">
              <Layers size={13} />
              <span>{telemetry.spanCount} Spans Monitored</span>
            </div>
          </div>
        )}
      </div>

      {/* Running State Spinner */}
      {isRunning && (
        <div style={{
          padding: '2.5rem',
          textAlign: 'center',
          background: 'rgba(0, 0, 0, 0.25)',
          borderRadius: 'var(--radius-md)',
          border: '1px dashed var(--border-subtle)',
          marginBottom: '1.5rem'
        }}>
          <div className="animate-spin-slow" style={{ fontSize: '2rem', display: 'inline-block', marginBottom: '0.75rem' }}>
            🦥
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Conserving energy. SlothOps is executing your chore pipeline locally...
          </p>
        </div>
      )}

      {/* Execution Results View */}
      {executionReport && !isRunning && (
        <div className="flex flex-col gap-4">
          {/* Step Results List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {executionReport.results?.map((res, idx) => {
              const toolOutput = res.output;
              return (
                <div key={idx} className="glass-card" style={{ background: 'rgba(10, 14, 22, 0.85)' }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: '0.75rem' }}>
                    <div className="flex items-center gap-2">
                      <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                        Step {idx + 1}: {res.tool}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>
                      ✓ Retries: {res.attempts}/3
                    </span>
                  </div>

                  {/* Tool-specific rich rendering */}
                  {res.tool === 'tabpfn_anomaly_forecaster' && (
                    <div>
                      <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem', color: '#f59e0b', fontSize: '0.85rem', fontWeight: 600 }}>
                        <FileSpreadsheet size={16} />
                        <span>TabPFN-3.5 Anomaly Audit Summary</span>
                      </div>
                      <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                        Processed {toolOutput.rowsProcessed} transactions via in-context tabular forward-pass.
                      </p>
                      <div className="flex gap-2" style={{ flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                        <span className="badge badge-rose">{toolOutput.metrics.anomaliesDetectedCount} Price Creeps Detected</span>
                        <span className="badge badge-emerald">Save {toolOutput.metrics.actionableLazySavings}</span>
                      </div>
                    </div>
                  )}

                  {res.tool === 'file_tidier' && (
                    <div>
                      <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem', color: 'var(--accent-emerald)', fontSize: '0.85rem', fontWeight: 600 }}>
                        <FolderCheck size={16} />
                        <span>{toolOutput.summary}</span>
                      </div>
                      <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                        Organized {toolOutput.spaceOrganizedMB} without manual dragging. 
                        <strong> Saved:</strong> {toolOutput.lazyEffortSaved}.
                      </p>
                    </div>
                  )}

                  {res.tool === 'inbox_condenser' && (
                    <div>
                      <p style={{ fontSize: '0.825rem', color: 'var(--accent-indigo)', fontWeight: 600, marginBottom: '0.5rem' }}>
                        Condensed {toolOutput.itemsProcessed} feeds (Saved {toolOutput.readingTimeSavedMinutes} min of reading):
                      </p>
                      <ul style={{ paddingLeft: '1.25rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {toolOutput.bullets?.map((b, bi) => (
                          <li key={bi} style={{ marginBottom: '0.35rem' }}>
                            <strong style={{ color: '#fff' }}>[{b.badge}]:</strong> {b.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {res.tool === 'voice_digest' && (
                    <div>
                      <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem', color: 'var(--accent-purple)', fontSize: '0.85rem', fontWeight: 600 }}>
                        <Volume2 size={16} />
                        <span>{toolOutput.voiceName}</span>
                      </div>
                      <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                        "{toolOutput.narrationScript}"
                      </p>
                      <span className="badge badge-indigo">Hands-Free Audio Ready</span>
                    </div>
                  )}

                  {res.tool === 'browser_agent' && (
                    <div>
                      <p style={{ fontSize: '0.825rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.35rem' }}>
                        Browserbase Stagehand Scraper:
                      </p>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {toolOutput.lazyBenefit} (Saved {toolOutput.clicksSaved} manual clicks).
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sentry Spans & Trace View (Collapsible details) */}
          <div className="terminal-box">
            <div className="flex items-center justify-between" style={{ marginBottom: '0.5rem' }}>
              <div className="flex items-center gap-2" style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>
                <Terminal size={14} />
                <span>Sentry Agent Tracing • Span Diagnostics</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Zero Cloud Telemetry Leakage
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {telemetry?.spans?.map((span) => (
                <div key={span.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem' }}>
                  <span>
                    <span style={{ color: span.status === 'ok' ? '#34d399' : '#f87171' }}>●</span> {span.name} [{span.category}]
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>
                    {span.durationMs ? `${span.durationMs}ms` : 'running'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
