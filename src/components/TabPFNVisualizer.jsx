import React, { useState, useEffect } from 'react';
import { 
  FileSpreadsheet, 
  AlertOctagon, 
  TrendingUp, 
  DollarSign, 
  CheckCircle, 
  HelpCircle,
  Upload,
  RefreshCw
} from 'lucide-react';

export function TabPFNVisualizer() {
  const [auditData, setAuditData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTabPFNAudit = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/agent/tabpfn-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dataset: 'bank_transactions_q3.csv' })
      });
      if (res.ok) {
        const data = await res.json();
        setAuditData(data);
      }
    } catch (err) {
      console.error('Failed to load TabPFN audit:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTabPFNAudit();
  }, []);

  return (
    <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2.5rem' }}>
      {/* Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="flex items-center gap-2" style={{ marginBottom: '0.35rem' }}>
            <h2 style={{ fontSize: '1.6rem' }}>Prior Labs TabPFN-3.5 Financial Auditor</h2>
            <span className="badge badge-amber">Open-Weight Tabular Foundation Model</span>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Zero-shot in-context learning: no cross-validation, no XGBoost hyperparameter tuning, single forward pass.
          </p>
        </div>

        <button
          onClick={fetchTabPFNAudit}
          disabled={loading}
          className="btn btn-secondary"
          style={{ fontSize: '0.85rem' }}
        >
          <RefreshCw size={15} className={loading ? 'animate-spin-slow' : ''} />
          <span>Rerun TabPFN In-Context Audit</span>
        </button>
      </div>

      {auditData && (
        <>
          {/* Top KPI Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4" style={{ marginBottom: '1.75rem' }}>
            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Average Monthly Spend
              </p>
              <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>{auditData.metrics.averageMonthlyBurn}</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Baseline 90-day transactions</p>
            </div>

            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                TabPFN Projected Burn
              </p>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-amber)' }}>{auditData.metrics.projectedNextMonthBurn}</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Nov 2026 forecast (94% conf.)</p>
            </div>

            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Actionable Lazy Savings
              </p>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-emerald)' }}>{auditData.metrics.actionableLazySavings}</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>From auto-flagged creep</p>
            </div>

            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Detected Anomalies
              </p>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-rose)' }}>{auditData.metrics.anomaliesDetectedCount} Items</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Zero-shot classification</p>
            </div>
          </div>

          {/* Anomaly Cards Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertOctagon size={18} color="#f43f5e" />
              <span>Subscription Price Creeps & Anomalies Detected by TabPFN</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {auditData.anomalies?.map((anomaly, idx) => (
                <div key={idx} className="glass-card" style={{ borderLeft: '4px solid #f43f5e', background: 'rgba(244, 63, 94, 0.05)' }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: '0.5rem' }}>
                    <span className="badge badge-rose">{anomaly.type.replace('_', ' ')}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{anomaly.date}</span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>{anomaly.vendor}</h4>
                  
                  {anomaly.previousAmount && (
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Price jumped from <strong style={{ color: '#fff' }}>{anomaly.previousAmount}</strong> to <strong style={{ color: '#f43f5e' }}>{anomaly.currentAmount}</strong> ({anomaly.deltaPercent})
                    </p>
                  )}
                  {!anomaly.previousAmount && (
                    <p style={{ fontSize: '0.85rem', color: '#f43f5e', fontWeight: 600, marginBottom: '0.5rem' }}>
                      Amount: {anomaly.currentAmount}
                    </p>
                  )}

                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem' }}>
                    💡 <strong>Sloth Action:</strong> {anomaly.recommendation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Raw Ingested Statement Table */}
          <div>
            <div className="flex items-center justify-between" style={{ marginBottom: '0.75rem' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                Audited Bank Transactions (Zero Cloud Telemetry Leakage)
              </h4>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {auditData.rowsProcessed} Transactions Processed Locally
              </span>
            </div>

            <div className="terminal-box" style={{ padding: '0', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.8rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-subtle)', background: 'rgba(255,255,255,0.03)' }}>
                    <th style={{ padding: '0.75rem 1rem' }}>Date</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Vendor</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Category</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Amount</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {auditData.rawTransactions?.map((tx, ti) => {
                    const isFlagged = auditData.anomalies?.some(a => a.vendor === tx.vendor && a.date === tx.date);
                    return (
                      <tr key={ti} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: isFlagged ? 'rgba(244, 63, 94, 0.08)' : 'transparent' }}>
                        <td style={{ padding: '0.65rem 1rem', color: 'var(--text-muted)' }}>{tx.date}</td>
                        <td style={{ padding: '0.65rem 1rem', fontWeight: 600, color: '#fff' }}>{tx.vendor}</td>
                        <td style={{ padding: '0.65rem 1rem', color: 'var(--text-secondary)' }}>{tx.category}</td>
                        <td style={{ padding: '0.65rem 1rem', color: isFlagged ? '#f43f5e' : 'var(--accent-emerald)', fontWeight: 600 }}>
                          ${tx.amount.toFixed(2)}
                        </td>
                        <td style={{ padding: '0.65rem 1rem' }}>
                          {isFlagged ? (
                            <span className="badge badge-rose" style={{ fontSize: '0.65rem' }}>Anomalous Spike</span>
                          ) : (
                            <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>Verified Normal</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
