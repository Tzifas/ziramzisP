// lib/hive.js — The Inner Hive colony schema v2.
// Single source of truth for the whole colony: providers, models, fallback chains,
// skills, roles, bees, tasks, runs, leads, projects, documents, content, approvals.

export const SCHEMA_VERSION = 2;

export const seedColony = {
  providers: [
    { id: 'gemini', name: 'Google Gemini', kind: 'gemini', status: 'not-connected', priority: 1, note: 'Free tier — first in line' },
    { id: 'openrouter', name: 'OpenRouter', kind: 'openrouter', status: 'not-connected', priority: 2, note: 'Broad model access' },
    { id: 'local', name: 'Local (Ollama)', kind: 'local', status: 'planned', priority: 3, note: 'Runs on the VPS — future' },
  ],
  models: [
    { id: 'gemini-flash', providerId: 'gemini', name: 'Gemini Flash', providerModel: 'gemini-flash-latest', tier: 'fast', capabilities: ['text', 'vision'], status: 'available' },
    { id: 'gemini-pro', providerId: 'gemini', name: 'Gemini Pro', providerModel: 'gemini-pro-latest', tier: 'deep', capabilities: ['text', 'vision'], status: 'available' },
    { id: 'or-claude', providerId: 'openrouter', name: 'Claude (OpenRouter)', providerModel: 'anthropic/claude-sonnet-4', tier: 'deep', capabilities: ['text', 'vision'], status: 'available' },
    { id: 'or-llama', providerId: 'openrouter', name: 'Llama (OpenRouter)', providerModel: 'meta-llama/llama-3.3-70b-instruct', tier: 'standard', capabilities: ['text'], status: 'available' },
  ],
  chains: [
    { id: 'chat', name: 'Conversation', steps: ['gemini-flash', 'or-llama', 'or-claude'], rules: { timeoutSec: 45, retries: 1 } },
    { id: 'deep', name: 'Deep work — blueprints, strategy', steps: ['gemini-pro', 'or-claude', 'or-llama'], rules: { timeoutSec: 120, retries: 1 } },
    { id: 'content', name: 'Content drafting', steps: ['gemini-flash', 'or-claude'], rules: { timeoutSec: 90, retries: 1 } },
  ],
  skills: [
    { id: 'design', name: 'Design', tools: ['image generation', 'design system', 'mockups'] },
    { id: 'branding', name: 'Branding', tools: ['logo systems', 'asset kits', 'brand bible'] },
    { id: 'marketing', name: 'Marketing', tools: ['copy', 'campaigns', 'social scheduling'] },
    { id: 'development', name: 'Development', tools: ['code', 'deploy', 'reviews'] },
    { id: 'content', name: 'Content', tools: ['text', 'image', 'audio', 'video'] },
    { id: 'research', name: 'Research', tools: ['web search', 'scraping', 'competitor scans'] },
    { id: 'outreach', name: 'Outreach', tools: ['lead lists', 'pitch drafts', 'WhatsApp (human-gated)'] },
    { id: 'operations', name: 'Operations', tools: ['scheduling', 'reports', 'approvals'] },
  ],
  roles: [
    { id: 'queen', name: 'Queen Bee', tier: 'leadership', summary: 'Directs the colony and owns the final standard on everything that ships.', defaultSkills: ['operations', 'branding'], defaultChainId: 'deep', permissions: ['assign', 'approve-drafts', 'review'] },
    { id: 'secretary', name: 'Secretary Bee', tier: 'leadership', summary: 'Collects every bee report and turns it into one digest for the keeper.', defaultSkills: ['operations', 'content'], defaultChainId: 'chat', permissions: ['read-all', 'compose-digest'] },
    { id: 'hunt', name: 'Lead Hunter Bee', tier: 'growth', summary: 'Finds and qualifies new clients across local and online signals.', defaultSkills: ['outreach', 'research'], defaultChainId: 'chat', permissions: ['scrape-public', 'draft-pitches'] },
    { id: 'research', name: 'Research Bee', tier: 'planning', summary: 'Market scans, competitor sweeps, and the questions worth asking before we build.', defaultSkills: ['research'], defaultChainId: 'deep', permissions: ['read-all'] },
    { id: 'planning', name: 'Planning Bee', tier: 'planning', summary: 'Turns a lead into a blueprint: brief, PRD, MVP scope, architecture, roadmap.', defaultSkills: ['operations', 'branding'], defaultChainId: 'deep', permissions: ['draft-docs'] },
    { id: 'content', name: 'Content Bee', tier: 'production', summary: 'Copy, posts, captions and asset drafts, in the brand voice.', defaultSkills: ['content', 'marketing'], defaultChainId: 'content', permissions: ['draft-content', 'request-assets'] },
    { id: 'landing', name: 'Landing Page Bee', tier: 'engagement', summary: 'Greets visitors on the site and answers the first questions.', defaultSkills: ['marketing', 'content'], defaultChainId: 'chat', permissions: ['answer-visitors', 'collect-briefs'] },
    { id: 'build', name: 'Build Bee', tier: 'production', summary: 'Designs and develops the actual work.', defaultSkills: ['development', 'design'], defaultChainId: 'deep', permissions: ['write-code', 'stage-deploys'] },
    { id: 'care', name: 'Care Bee', tier: 'growth', summary: 'Follow-ups, launch checks, and the next useful touch.', defaultSkills: ['operations'], defaultChainId: 'chat', permissions: ['schedule-followups'] },
  ],
  bees: [
    { id: 'queen', name: 'Queen Bee', roleId: 'queen', skills: ['operations', 'branding'], chainId: 'deep', status: 'active', task: 'Oversee all active builds', reportsTo: null, lastReport: 'Three builds on track; one lead needs a follow-up today.' },
    { id: 'secretary', name: 'Secretary Bee', roleId: 'secretary', skills: ['operations', 'content'], chainId: 'chat', status: 'active', task: 'Assemble the daily digest', reportsTo: 'queen', lastReport: 'Digest ready: 4 open leads, 6 active bees, no blockers.' },
    { id: 'hunt-mba', name: 'Lead Hunter — Mombasa', roleId: 'hunt', skills: ['outreach', 'research'], chainId: 'chat', status: 'active', task: 'Scan local businesses with weak web presence', reportsTo: 'secretary', lastReport: '3 new signals: Mtoni Coffee House, Coastline Dental, Bahari Legal.' },
    { id: 'hunt-online', name: 'Lead Hunter — Online', roleId: 'hunt', skills: ['outreach', 'marketing'], chainId: 'chat', status: 'active', task: 'Qualify inbound WhatsApp enquiries', reportsTo: 'secretary', lastReport: '2 enquiries qualified; 1 needs a portfolio link.' },
    { id: 'research-1', name: 'Research Bee', roleId: 'research', skills: ['research'], chainId: 'deep', status: 'active', task: 'Competitor sweep for a Nyali roastery brief', reportsTo: 'secretary', lastReport: 'Sweep done — pricing and positioning captured.' },
    { id: 'planning-1', name: 'Planning Bee', roleId: 'planning', skills: ['operations', 'branding'], chainId: 'deep', status: 'active', task: 'Blueprint a booking-flow web product', reportsTo: 'secretary', lastReport: 'PRD and MVP scope drafted, awaiting your sign-off.' },
    { id: 'content-1', name: 'Content Bee', roleId: 'content', skills: ['content', 'marketing'], chainId: 'content', status: 'idle', task: 'Standing by for launch copy', reportsTo: 'secretary', lastReport: 'Idle — next task queues at launch.' },
    { id: 'landing-1', name: 'Landing Page Bee', roleId: 'landing', skills: ['marketing', 'content'], chainId: 'chat', status: 'active', task: 'Answer visitor questions on the site', reportsTo: 'secretary', lastReport: '12 conversations this week; 4 moved to a brief.' },
    { id: 'build-1', name: 'Build Bee', roleId: 'build', skills: ['development', 'design'], chainId: 'deep', status: 'active', task: 'Develop the client portal (MVP)', reportsTo: 'secretary', lastReport: 'MVP at 70% — auth and dashboard wired.' },
    { id: 'care-1', name: 'Care Bee', roleId: 'care', skills: ['operations'], chainId: 'chat', status: 'active', task: 'Launch check for the legal site', reportsTo: 'secretary', lastReport: 'Post-launch checks scheduled for Friday.' },
  ],
  tasks: [
    { id: 't1', title: 'Competitor sweep — Nyali roastery', ownerBeeId: 'research-1', status: 'done', priority: 'normal' },
    { id: 't2', title: 'Blueprint — booking flow MVP', ownerBeeId: 'planning-1', status: 'review', priority: 'high' },
    { id: 't3', title: 'Client portal build', ownerBeeId: 'build-1', status: 'in-progress', priority: 'high' },
    { id: 't4', title: 'Launch copy pack', ownerBeeId: 'content-1', status: 'queued', priority: 'normal' },
    { id: 't5', title: 'Friday launch checks — legal site', ownerBeeId: 'care-1', status: 'queued', priority: 'normal' },
  ],
  runs: [
    { id: 'r1', taskId: 't1', beeId: 'research-1', modelId: 'gemini-pro', providerId: 'gemini', durationMs: 18400, outcome: 'ok', fallbackUsed: false, at: '2026-09-29T07:40:00Z' },
    { id: 'r2', taskId: 't2', beeId: 'planning-1', modelId: 'or-claude', providerId: 'openrouter', durationMs: 42300, outcome: 'ok', fallbackUsed: true, at: '2026-09-29T09:15:00Z' },
    { id: 'r3', taskId: 't3', beeId: 'build-1', modelId: 'gemini-flash', providerId: 'gemini', durationMs: 9100, outcome: 'ok', fallbackUsed: false, at: '2026-09-29T11:02:00Z' },
  ],
  leads: [
    { id: 'l1', name: 'Mtoni Coffee House', area: 'Nyali · hospitality', signal: 'Instagram-only presence', stage: 'qualified', score: 92, owner: 'hunt-mba', next: 'Send a 3-screen direction' },
    { id: 'l2', name: 'Coastline Dental', area: 'Bamburi · health', signal: 'No booking path', stage: 'briefing', score: 86, owner: 'planning-1', next: 'Prepare a quick audit' },
    { id: 'l3', name: 'Bahari Legal', area: 'Mombasa CBD · professional', signal: 'Outdated website', stage: 'new', score: 78, owner: 'hunt-mba', next: 'Add to nurture list' },
    { id: 'l4', name: 'Nyali Roastery', area: 'Nyali · retail', signal: 'Direct message via site', stage: 'building', score: 88, owner: 'build-1', next: 'MVP in progress' },
    { id: 'l5', name: 'Mombasa Makers', area: 'Old Town · brand', signal: 'Needs a full identity', stage: 'briefing', score: 81, owner: 'planning-1', next: 'Direction ready' },
  ],
  projects: [
    { id: 'p1', name: 'Nyali Roastery — site + booking', client: 'Nyali Roastery', stage: 'build', docs: ['d1', 'd2', 'd3'] },
    { id: 'p2', name: 'Bahari Legal — identity + site', client: 'Bahari Legal', stage: 'blueprint', docs: ['d4'] },
  ],
  documents: [
    { id: 'd1', projectId: 'p1', type: 'PRD', title: 'Requirement: roastery site + booking', version: 'v1.2', updatedAt: '2026-09-24' },
    { id: 'd2', projectId: 'p1', type: 'MVP', title: 'MVP scope: menu, story, booking', version: 'v1.0', updatedAt: '2026-09-25' },
    { id: 'd3', projectId: 'p1', type: 'Architecture', title: 'Architecture: static + booking API', version: 'v0.9', updatedAt: '2026-09-26' },
    { id: 'd4', projectId: 'p2', type: 'Brief', title: 'Brand brief: Bahari Legal', version: 'v0.4', updatedAt: '2026-09-28' },
  ],
  content: [
    { id: 'c1', format: 'text', title: 'Launch announcement — roastery', status: 'draft', channel: 'site + social', sourceBeeId: 'content-1' },
    { id: 'c2', format: 'image', title: 'Hero visual — booking flow demo', status: 'review', channel: 'site', sourceBeeId: 'content-1' },
    { id: 'c3', format: 'audio', title: 'Voice note — client update', status: 'approved', channel: 'WhatsApp', sourceBeeId: 'care-1' },
    { id: 'c4', format: 'video', title: '30s teaser — inner hive', status: 'draft', channel: 'social', sourceBeeId: 'content-1' },
  ],
  approvals: [
    { id: 'a1', itemType: 'document', itemId: 'd4', title: 'Brand brief — Bahari Legal', status: 'pending', requestedBy: 'planning-1' },
    { id: 'a2', itemType: 'content', itemId: 'c2', title: 'Hero visual — booking flow demo', status: 'pending', requestedBy: 'content-1' },
    { id: 'a3', itemType: 'content', itemId: 'c4', title: '30s teaser — inner hive', status: 'pending', requestedBy: 'content-1' },
  ],
  settings: {
    rules: [
      'No automatic DMs to leads — the keeper sends every pitch by hand.',
      'Nothing ships without keeper approval.',
      'Bees draft, the keeper signs.',
      'Every model call is logged as a Run, including fallbacks.',
    ],
    guardrails: { spendCapPerDay: 'KSh 500', autoDm: false, autoPublish: false },
  },
};

export const STAGES = ['new', 'qualified', 'briefing', 'building', 'won', 'lost'];
export const CONTENT_FORMATS = ['text', 'image', 'audio', 'video'];
export const CONTENT_STATUSES = ['draft', 'review', 'approved', 'scheduled', 'published'];
export const BEE_STATUSES = ['active', 'idle', 'resting', 'blocked'];
export const RUN_OUTCOMES = ['ok', 'fallback', 'failed'];

// The Secretary digest — computed from the live colony, never hardcoded.
export function summarizeColony(c) {
  const colon = c || seedColony;
  const bees = colon.bees || [];
  const leads = colon.leads || [];
  const approvals = colon.approvals || [];
  const content = colon.content || [];
  const runs = colon.runs || [];
  const projects = colon.projects || [];

  const activeBees = bees.filter((b) => b.status === 'active').length;
  const idleBees = bees.filter((b) => b.status === 'idle').length;
  const openLeads = leads.filter((l) => ['new', 'qualified', 'briefing'].includes(l.stage)).length;
  const buildingLeads = leads.filter((l) => l.stage === 'building').length;
  const pendingApprovals = approvals.filter((a) => a.status === 'pending').length;
  const openContent = content.filter((x) => ['draft', 'review'].includes(x.status)).length;
  const fallbackRuns = runs.filter((r) => r.fallbackUsed).length;

  const digest = [
    bees.length + ' bees in the colony, ' + activeBees + ' active' + (idleBees ? ', ' + idleBees + ' idle' : '') + '.',
    openLeads + ' open leads, ' + buildingLeads + ' in build, ' + projects.length + ' projects in production.',
    pendingApprovals + ' items waiting for your approval; ' + openContent + ' content pieces in progress.',
    fallbackRuns ? fallbackRuns + ' run(s) used a fallback model — review the Model Room.' : 'No fallback events — all runs clean.',
  ];

  return { activeBees, idleBees, openLeads, buildingLeads, pendingApprovals, openContent, fallbackRuns, digest };
}

export const stageLabel = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
