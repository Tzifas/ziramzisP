// lib/hive.js — The Inner Hive: the colony's single source of truth.
// Every bee, role, skill, lead and the Secretary/Queen digest live here.
// The admin UI renders FROM this data — no hardcoded mock in the page.

export const SKILLS = [
  'Design', 'Branding', 'Marketing', 'Development',
  'Content', 'Research', 'Outreach', 'Operations',
];

// Role catalogue: what each kind of bee exists to do, and its tier.
export const ROLES = {
  queen: { id: 'queen', name: 'Queen Bee', tier: 'leadership', summary: 'Directs the colony and owns the final standard on everything that ships.' },
  secretary: { id: 'secretary', name: 'Secretary Bee', tier: 'leadership', summary: 'Collects every bee\u2019s report and turns it into one digest for the keeper.' },
  hunt: { id: 'hunt', name: 'Lead Hunter Bee', tier: 'growth', summary: 'Finds and qualifies new clients across local and online signals.' },
  research: { id: 'research', name: 'Research Bee', tier: 'planning', summary: 'Market scans, competitor sweeps, and the questions worth asking before we build.' },
  planning: { id: 'planning', name: 'Planning Bee', tier: 'planning', summary: 'Turns a lead into a blueprint: brief, PRD, MVP scope, architecture, roadmap.' },
  content: { id: 'content', name: 'Content Bee', tier: 'production', summary: 'Copy, posts, captions and asset drafts, in the brand voice.' },
  landing: { id: 'landing', name: 'Landing Page Bee', tier: 'engagement', summary: 'Greets visitors on the site and answers the first questions.' },
  build: { id: 'build', name: 'Build Bee', tier: 'production', summary: 'Designs and develops the actual work.' },
  care: { id: 'care', name: 'Care Bee', tier: 'growth', summary: 'Follow-ups, launch checks, and the next useful touch.' },
};

// The colony registry. Each bee reports to a supervisor (null = the keeper).
export const bees = [
  { id: 'queen', name: 'Queen Bee', role: 'queen', reportsTo: null, skills: ['Operations', 'Branding'], status: 'active', task: 'Oversee all active builds', report: 'Three builds on track; one lead needs a follow-up today.' },
  { id: 'secretary', name: 'Secretary Bee', role: 'secretary', reportsTo: 'queen', skills: ['Operations', 'Content'], status: 'active', task: 'Assemble the daily digest', report: 'Digest ready: 4 open leads, 6 active bees, no blockers.' },
  { id: 'hunt-mba', name: 'Lead Hunter \u2014 Mombasa', role: 'hunt', reportsTo: 'secretary', skills: ['Outreach', 'Research'], status: 'active', task: 'Scan local businesses with weak web presence', report: '3 new signals: Mtoni Coffee House, Coastline Dental, Bahari Legal.' },
  { id: 'hunt-remote', name: 'Lead Hunter \u2014 Online', role: 'hunt', reportsTo: 'secretary', skills: ['Outreach', 'Marketing'], status: 'active', task: 'Qualify inbound WhatsApp enquiries', report: '2 enquiries qualified; 1 needs a portfolio link.' },
  { id: 'research-1', name: 'Research Bee', role: 'research', reportsTo: 'secretary', skills: ['Research'], status: 'active', task: 'Competitor sweep for a Nyali roastery brief', report: 'Sweep done \u2014 pricing and positioning captured.' },
  { id: 'planning-1', name: 'Planning Bee', role: 'planning', reportsTo: 'secretary', skills: ['Operations', 'Branding'], status: 'active', task: 'Blueprint a booking-flow web product', report: 'PRD and MVP scope drafted, awaiting your sign-off.' },
  { id: 'content-1', name: 'Content Bee', role: 'content', reportsTo: 'secretary', skills: ['Content', 'Marketing'], status: 'idle', task: 'Standing by for launch copy', report: 'Idle \u2014 next task queues at launch.' },
  { id: 'landing-1', name: 'Landing Page Bee', role: 'landing', reportsTo: 'secretary', skills: ['Marketing', 'Content'], status: 'active', task: 'Answer visitor questions on the site', report: '12 conversations this week; 4 moved to a brief.' },
  { id: 'build-1', name: 'Build Bee', role: 'build', reportsTo: 'secretary', skills: ['Development', 'Design'], status: 'active', task: 'Develop the client portal (MVP)', report: 'MVP at 70% \u2014 auth and dashboard wired.' },
  { id: 'care-1', name: 'Care Bee', role: 'care', reportsTo: 'secretary', skills: ['Operations'], status: 'active', task: 'Launch check for the legal site', report: 'Post-launch checks scheduled for Friday.' },
];

// Lead pipeline. Stage: new -> qualified -> briefing -> building -> won/lost.
export const leads = [
  { id: 'l1', name: 'Mtoni Coffee House', area: 'Nyali \u00b7 hospitality', signal: 'Instagram-only presence', stage: 'qualified', score: 92, owner: 'hunt-mba', next: 'Send a 3-screen direction' },
  { id: 'l2', name: 'Coastline Dental', area: 'Bamburi \u00b7 health', signal: 'No booking path', stage: 'briefing', score: 86, owner: 'planning-1', next: 'Prepare a quick audit' },
  { id: 'l3', name: 'Bahari Legal', area: 'Mombasa CBD \u00b7 professional', signal: 'Outdated website', stage: 'new', score: 78, owner: 'hunt-mba', next: 'Add to nurture list' },
  { id: 'l4', name: 'Nyali Roastery', area: 'Nyali \u00b7 retail', signal: 'Direct message via site', stage: 'building', score: 88, owner: 'build-1', next: 'MVP in progress' },
  { id: 'l5', name: 'Mombasa Makers', area: 'Old Town \u00b7 brand', signal: 'Needs a full identity', stage: 'briefing', score: 81, owner: 'planning-1', next: 'Direction ready' },
];

const STAGE_LABEL = { new: 'New', qualified: 'Qualified', briefing: 'Briefing', building: 'Building', won: 'Won', lost: 'Lost' };

export const stageLabel = (s) => STAGE_LABEL[s] || s;

// The Secretary/Queen digest: computed from live data, never hardcoded.
export function summarizeColony() {
  const byRole = Object.values(ROLES).map((role) => {
    const members = bees.filter((b) => b.role === role.id);
    return { role, count: members.length, members };
  });

  const byStatus = bees.reduce((acc, b) => {
    acc[b.status] = (acc[b.status] || 0) + 1;
    return acc;
  }, {});

  const skillCoverage = SKILLS.map((skill) => ({
    skill,
    count: bees.filter((b) => b.skills.includes(skill)).length,
  })).sort((a, b) => a.count - b.count);

  const openLeads = leads.filter((l) => ['new', 'qualified', 'briefing'].includes(l.stage)).length;
  const buildingLeads = leads.filter((l) => l.stage === 'building').length;
  const topLeads = [...leads].sort((a, b) => b.score - a.score).slice(0, 3);
  const idleBees = bees.filter((b) => b.status === 'idle');

  const digest = [
    `${bees.length} bees in the colony, ${Object.values(byStatus).reduce((a, b) => a + b, 0)} accounted for.`,
    `${openLeads} open leads and ${buildingLeads} in build.`,
    idleBees.length
      ? `${idleBees.length} bee${idleBees.length > 1 ? 's' : ''} idle and available: ${idleBees.map((b) => b.name).join(', ')}.`
      : 'No idle bees \u2014 the colony is fully assigned.',
  ];

  const weakestSkill = skillCoverage[0];
  if (weakestSkill && weakestSkill.count === 0) {
    digest.push(`Gap: no bee covers ${weakestSkill.skill} \u2014 consider commissioning one.`);
  }

  return { byRole, byStatus, skillCoverage, openLeads, buildingLeads, topLeads, idleBees, digest };
}
