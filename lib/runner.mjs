// lib/runner.mjs — the chain runner.
// Tries each step in order; on failure/timeout moves to the NEXT step.
// The SAME assembled request is passed to every attempt — context lives in the caller,
// never in a provider session. That is the no-context-loss guarantee.

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout after ' + ms + 'ms')), ms)),
  ]);
}

export async function runChain({ steps, prompt, callModel, timeoutSec = 45, retries = 0 }) {
  const attempts = [];
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    for (let attempt = 0; attempt <= retries; attempt++) {
      const startedAt = Date.now();
      try {
        const output = await withTimeout(
          Promise.resolve(callModel(step, prompt, attempt)),
          (timeoutSec + attempt * 15) * 1000
        );
        attempts.push({ stepId: step.id, ok: true, ms: Date.now() - startedAt, attempt });
        return { ok: true, output, usedModel: step, fallbackUsed: i > 0, attempts };
      } catch (e) {
        attempts.push({ stepId: step.id, ok: false, ms: Date.now() - startedAt, attempt, error: String((e && e.message) || e) });
      }
    }
  }
  return { ok: false, output: null, usedModel: null, fallbackUsed: attempts.some((a) => !a.ok), attempts, error: 'All steps failed' };
}
