/**
 * Observability & Sentry Agent Tracing Accounting
 * Monitors spans, token consumption, latency, and step failures.
 */
export class AgentTracer {
  constructor() {
    this.spans = [];
    this.totalPromptTokens = 0;
    this.totalCompletionTokens = 0;
    this.startTime = Date.now();
  }

  startSpan(name, category = 'agent.tool', metadata = {}) {
    const spanId = `span_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    const span = {
      id: spanId,
      name,
      category,
      startTime: Date.now(),
      status: 'running',
      metadata,
      durationMs: null
    };
    this.spans.push(span);
    return span;
  }

  endSpan(spanId, status = 'ok', outputSummary = null, tokens = { prompt: 0, completion: 0 }) {
    const span = this.spans.find(s => s.id === spanId);
    if (span) {
      span.status = status;
      span.endTime = Date.now();
      span.durationMs = span.endTime - span.startTime;
      span.outputSummary = outputSummary;
      span.tokens = tokens;
      this.totalPromptTokens += tokens.prompt || 0;
      this.totalCompletionTokens += tokens.completion || 0;
    }
    return span;
  }

  getTraceSummary() {
    const totalDurationMs = Date.now() - this.startTime;
    return {
      totalDurationMs,
      totalPromptTokens: this.totalPromptTokens,
      totalCompletionTokens: this.totalCompletionTokens,
      totalTokens: this.totalPromptTokens + this.totalCompletionTokens,
      estimatedCloudCostSavedUSD: ((this.totalPromptTokens * 0.003 + this.totalCompletionTokens * 0.015) / 1000).toFixed(4),
      spanCount: this.spans.length,
      spans: this.spans
    };
  }
}
