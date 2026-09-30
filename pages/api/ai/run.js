import { seedColony } from '../../../lib/hive';
import { runChain } from '../../../lib/runner.mjs';

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/';
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

async function callGemini(model, prompt, apiKey) {
  const res = await fetch(GEMINI_URL + model.providerModel + ':generateContent?key=' + apiKey, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
  });
  if (!res.ok) throw new Error('Gemini HTTP ' + res.status + ' for ' + model.providerModel);
  const j = await res.json();
  const text = j && j.candidates && j.candidates[0] && j.candidates[0].content &&
    j.candidates[0].content.parts && j.candidates[0].content.parts[0] && j.candidates[0].content.parts[0].text;
  if (!text) throw new Error('Gemini returned no text');
  return text;
}

async function callOpenRouter(model, prompt, apiKey) {
  const res = await fetch(OPENROUTER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + apiKey },
    body: JSON.stringify({ model: model.providerModel, messages: [{ role: 'user', content: prompt }] }),
  });
  if (!res.ok) throw new Error('OpenRouter HTTP ' + res.status + ' for ' + model.providerModel);
  const j = await res.json();
  const text = j && j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content;
  if (!text) throw new Error('OpenRouter returned no text');
  return text;
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ env: { gemini: !!process.env.GEMINI_API_KEY, openrouter: !!process.env.OPENROUTER_API_KEY } });
  }
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  try {
    const body = req.body || {};
    const prompt = body.prompt;
    if (!prompt || !String(prompt).trim()) return res.status(400).json({ ok: false, error: 'Prompt is required' });
    const chain = seedColony.chains.find((c) => c.id === body.chainId);
    if (!chain) return res.status(400).json({ ok: false, error: 'Unknown chain: ' + body.chainId });
    const steps = chain.steps.map((mid) => seedColony.models.find((m) => m.id === mid)).filter(Boolean);
    if (!steps.length) return res.status(400).json({ ok: false, error: 'Chain has no models' });

    const started = Date.now();
    const result = await runChain({
      steps,
      prompt: String(prompt),
      timeoutSec: (chain.rules && chain.rules.timeoutSec) || 45,
      retries: (chain.rules && chain.rules.retries) || 0,
      callModel: async (step, p) => {
        if (step.providerId === 'gemini') {
          if (!process.env.GEMINI_API_KEY) throw new Error('No Gemini key in server environment — add GEMINI_API_KEY');
          return callGemini(step, p, process.env.GEMINI_API_KEY);
        }
        if (step.providerId === 'openrouter') {
          if (!process.env.OPENROUTER_API_KEY) throw new Error('No OpenRouter key in server environment — add OPENROUTER_API_KEY');
          return callOpenRouter(step, p, process.env.OPENROUTER_API_KEY);
        }
        throw new Error('No adapter for provider: ' + step.providerId);
      },
    });

    const last = result.attempts[result.attempts.length - 1] || {};
    return res.status(200).json({
      ok: result.ok,
      output: result.ok ? result.output : null,
      usedModel: result.usedModel ? { id: result.usedModel.id, name: result.usedModel.name, providerId: result.usedModel.providerId } : null,
      fallbackUsed: !!result.fallbackUsed,
      attempts: result.attempts,
      durationMs: Date.now() - started,
      error: result.ok ? null : (last.error || 'All steps failed'),
    });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String((e && e.message) || e) });
  }
}
