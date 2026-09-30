// Proof: the fallback chain works and context is identical across attempts.
import { runChain } from '../lib/runner.mjs';

const results = [];
const check = (name, cond) => { results.push({ name, pass: !!cond }); };

const prompt = 'Brief: a Nyali coffee house needs a booking page. Draft one line of positioning.';
const steps = [{ id: 'gemini-flash' }, { id: 'or-llama' }, { id: 'or-claude' }];

// Scenario 1: primary fails, fallback-1 succeeds. Context must arrive INTACT at both attempts.
const seen = [];
const r1 = await runChain({
  steps, prompt, timeoutSec: 5,
  callModel: async (step, p) => {
    seen.push({ step: step.id, prompt: p });
    if (step.id === 'gemini-flash') throw new Error('simulated provider outage (503)');
    return 'answer from ' + step.id;
  },
});
check('fallback succeeds after primary failure', r1.ok === true);
check('used model is the fallback step', r1.usedModel && r1.usedModel.id === 'or-llama');
check('fallbackUsed flag set', r1.fallbackUsed === true);
check('exactly two attempts made', seen.length === 2);
check('context identical on both attempts', seen[0].prompt === prompt && seen[1].prompt === prompt);
check('attempt log records the failure reason', r1.attempts[0] && r1.attempts[0].ok === false && String(r1.attempts[0].error).includes('simulated'));

// Scenario 2: first step succeeds — no fallback used.
const r2 = await runChain({
  steps, prompt, timeoutSec: 5,
  callModel: async () => 'first try ok',
});
check('no fallback when primary works', r2.ok === true && r2.fallbackUsed === false && r2.usedModel.id === 'gemini-flash');

// Scenario 3: everything fails — honest failure with full attempt ledger.
const r3 = await runChain({
  steps, prompt, timeoutSec: 5,
  callModel: async () => { throw new Error('all providers down'); },
});
check('reports failure when all steps fail', r3.ok === false);
check('attempt ledger covers all steps', r3.attempts.length === steps.length);

// Scenario 4: timeout counts as failure and moves on.
const r4 = await runChain({
  steps: [steps[0], steps[1]], prompt, timeoutSec: 1,
  callModel: async (step) => {
    if (step.id === 'gemini-flash') return new Promise(() => {}); // never resolves
    return 'rescued after timeout';
  },
});
check('timeout fails over to next step', r4.ok === true && r4.usedModel.id === 'or-llama');

let failed = 0;
for (const r of results) {
  console.log((r.pass ? 'PASS' : 'FAIL') + '  ' + r.name);
  if (!r.pass) failed++;
}
console.log(failed === 0 ? 'ALL RUNNER TESTS PASSED' : failed + ' TEST(S) FAILED');
process.exit(failed === 0 ? 0 : 1);
