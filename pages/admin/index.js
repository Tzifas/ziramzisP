'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  BeeIcon, MapPinIcon, ChartIcon, ArrowRightIcon, CheckRocketIcon,
  BriefcaseIcon, WhatsAppIcon, BulbIcon,
} from '../../components/Icons';
import BrandLockup from '../../components/BrandLockup';
import {
  summarizeColony, stageLabel, BEE_STATUSES, CONTENT_FORMATS, CONTENT_STATUSES, STAGES,
} from '../../lib/hive';
import { loadColony, saveColony, resetColony, nextId } from '../../lib/store';

const VIEWS = ['Overview', 'The Colony', 'Leads', 'Content', 'Approvals', 'Model Room', 'Roles & Skills', 'Settings'];
const TIER_COLOR = { leadership: '#f5c842', planning: '#00dce7', growth: '#59d8ba', production: '#b49cff', engagement: '#00c8d7' };
const TIER_LABEL = { leadership: 'Leadership', planning: 'Planning', growth: 'Growth', production: 'Production', engagement: 'Engagement' };
const TIER_ORDER = ['leadership', 'planning', 'growth', 'production', 'engagement'];

const fmtTime = (iso) => {
  try { return new Date(iso).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }); }
  catch (e) { return iso; }
};

export default function AdminPage() {
  const [activeView, setActiveView] = useState('Overview');
  const [dayLabel, setDayLabel] = useState('');
  const [colony, setColony] = useState(null);
  const [beeForm, setBeeForm] = useState(null);
  const [leadForm, setLeadForm] = useState(null);
  const [contentForm, setContentForm] = useState(null);
  const [skillDraft, setSkillDraft] = useState('');
  const [keyFor, setKeyFor] = useState(null);
  const [keyVal, setKeyVal] = useState('');

  useEffect(() => {
    setDayLabel(new Date().toLocaleDateString('en-US', { weekday: 'long' }));
    setColony(loadColony());
  }, []);

  function update(mutator) {
    setColony((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      mutator(next);
      saveColony(next);
      return next;
    });
  }

  if (!colony) {
    return (
      <>
        <Head>
          <title>Inner Hive — Ziramzis</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <main className="admin-shell">
          <section className="admin-main">
            <header className="admin-topbar">
              <div>
                <p className="admin-kicker">Loading colony…</p>
                <h1>Inner Hive</h1>
              </div>
            </header>
          </section>
        </main>
      </>
    );
  }

  const summary = summarizeColony(colony);
  const bees = colony.bees;
  const activeBees = summary.activeBees;
  const roleName = (roleId) => {
    const r = colony.roles.find((x) => x.id === roleId);
    return r ? r.name : roleId;
  };
  const beeName = (id) => {
    const b = colony.bees.find((x) => x.id === id);
    return b ? b.name : 'Unassigned';
  };
  const modelName = (id) => {
    const m = colony.models.find((x) => x.id === id);
    return m ? m.name : id;
  };
  const providerName = (id) => {
    const p = colony.providers.find((x) => x.id === id);
    return p ? p.name : id;
  };

  const metrics = [
    { label: 'Bees in the hive', value: String(bees.length), note: activeBees + ' active now', color: 'gold' },
    { label: 'Open leads', value: String(summary.openLeads), note: summary.buildingLeads + ' in build', color: 'cyan' },
    { label: 'Awaiting approval', value: String(summary.pendingApprovals), note: 'your queue', color: 'violet' },
    { label: 'Fallback runs', value: String(summary.fallbackRuns), note: 'all-time', color: 'mint' },
  ];

  const pendingApprovals = colony.approvals.filter((a) => a.status === 'pending');
  const topLeads = [...colony.leads].sort((a, b) => b.score - a.score).slice(0, 3);
  const recentRuns = [...colony.runs].slice(-4).reverse();

  function saveBeeForm() {
    const f = beeForm;
    if (!f || !f.name.trim()) return;
    update((c) => {
      if (f.mode === 'edit') {
        const idx = c.bees.findIndex((b) => b.id === f.id);
        if (idx >= 0) c.bees[idx] = { ...c.bees[idx], name: f.name, roleId: f.roleId, skills: f.skills, chainId: f.chainId, status: f.status, task: f.task };
      } else {
        c.bees.push({ id: nextId('bee'), name: f.name, roleId: f.roleId, skills: f.skills, chainId: f.chainId, status: f.status, task: f.task, reportsTo: 'secretary', lastReport: 'Newly commissioned — first report pending.' });
      }
    });
    setBeeForm(null);
  }

  function removeBee(id) {
    if (typeof window !== 'undefined' && !window.confirm('Remove this bee from the colony?')) return;
    update((c) => { c.bees = c.bees.filter((b) => b.id !== id); });
  }

  function decideApproval(id, status) {
    update((c) => {
      const a = c.approvals.find((x) => x.id === id);
      if (!a) return;
      a.status = status;
      a.decidedAt = new Date().toISOString();
      if (a.itemType === 'content') {
        const item = c.content.find((x) => x.id === a.itemId);
        if (item && status === 'approved') item.status = 'approved';
      }
    });
  }

  function advanceContent(id) {
    update((c) => {
      const item = c.content.find((x) => x.id === id);
      if (!item) return;
      const idx = CONTENT_STATUSES.indexOf(item.status);
      if (idx >= 0 && idx < CONTENT_STATUSES.length - 1) item.status = CONTENT_STATUSES[idx + 1];
    });
  }

  return (
    <>
      <Head>
        <title>Inner Hive — Ziramzis</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="admin-shell">
        <aside className="admin-sidebar">
          <a href="/" className="admin-brand" aria-label="Back to Ziramzis website">
            <BrandLockup priority className="h-10 w-auto" />
          </a>
          <div className="admin-sidebar__eyebrow">Colony control</div>
          <nav className="admin-nav" aria-label="Admin navigation">
            {VIEWS.map((view) => (
              <button key={view} className={activeView === view ? 'is-active' : ''} onClick={() => setActiveView(view)}>
                <span className="admin-nav__dot" />{view}
              </button>
            ))}
          </nav>
          <div className="admin-sidebar__footer">
            <div className="admin-online"><i /> {activeBees} bee{activeBees === 1 ? '' : 's'} online</div>
            <a href="/" className="admin-back"><ArrowRightIcon size={15} /> View public site</a>
          </div>
        </aside>

        <section className="admin-main">
          <header className="admin-topbar">
            <div>
              <p className="admin-kicker">{dayLabel ? dayLabel + ' · Mombasa, Kenya' : 'Mombasa, Kenya'}</p>
              <h1>{activeView}</h1>
            </div>
            <div className="admin-topbar__actions">
              <button className="admin-icon-button" aria-label="Notifications"><span>•</span><span>•</span><span>•</span></button>
              <div className="admin-avatar">Z</div>
            </div>
          </header>

          <div className="admin-welcome">
            <div>
              <span className="admin-welcome__label"><BeeIcon size={15} /> The Secretary’s digest</span>
              <h2>{summary.digest[0]}</h2>
              <p>{summary.digest[1]} {summary.digest[2]}</p>
            </div>
            <button className="admin-primary" onClick={() => setActiveView('Approvals')}>
              <ChartIcon size={16} color="#111" /> {summary.pendingApprovals} awaiting you
            </button>
          </div>

          <div className="admin-metrics">
            {metrics.map((m) => (
              <article className={'admin-metric admin-metric--' + m.color} key={m.label}>
                <span>{m.label}</span><strong>{m.value}</strong><small>{m.note}</small>
              </article>
            ))}
          </div>

          {activeView === 'Overview' && (
            <div className="hive-grid2">
              <section className="admin-panel admin-panel--leads">
                <div className="admin-panel__head">
                  <div><span className="admin-panel__eyebrow"><ChartIcon size={14} /> Waiting for you</span><h3>Approval queue</h3></div>
                  <button className="admin-text-button" onClick={() => setActiveView('Approvals')}>Open <ArrowRightIcon size={14} /></button>
                </div>
                {pendingApprovals.length === 0 && <div className="hive-empty">Nothing pending. The colony is unblocked.</div>}
                {pendingApprovals.slice(0, 3).map((a) => (
                  <div className="hive-card" key={a.id} style={{ marginBottom: '.6rem' }}>
                    <strong style={{ color: '#fff', fontSize: '.9rem' }}>{a.title}</strong>
                    <p className="hive-sub" style={{ marginTop: '.25rem' }}>Requested by {beeName(a.requestedBy)} · {a.itemType}</p>
                    <div className="hive-actions" style={{ marginTop: '.5rem' }}>
                      <button className="hive-btn hive-btn--primary hive-btn--small" onClick={() => decideApproval(a.id, 'approved')}>Approve</button>
                      <button className="hive-btn hive-btn--ghost hive-btn--small" onClick={() => decideApproval(a.id, 'rejected')}>Reject</button>
                    </div>
                  </div>
                ))}
              </section>

              <section className="admin-panel admin-panel--pulse">
                <div className="admin-panel__head">
                  <div><span className="admin-panel__eyebrow"><WhatsAppIcon size={14} /> Recent runs</span><h3>Model activity</h3></div>
                  <button className="admin-text-button" onClick={() => setActiveView('Model Room')}>Model Room <ArrowRightIcon size={14} /></button>
                </div>
                <table className="hive-table">
                  <thead><tr><th>Bee</th><th>Model</th><th>Outcome</th></tr></thead>
                  <tbody>
                    {recentRuns.map((r) => (
                      <tr key={r.id}>
                        <td>{beeName(r.beeId)}</td>
                        <td>{modelName(r.modelId)}</td>
                        <td>{r.fallbackUsed ? <span className="hive-pill hive-pill--pending">fallback</span> : <span className="hive-pill hive-pill--active">ok</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="admin-panel__head" style={{ marginTop: '1.2rem' }}>
                  <div><span className="admin-panel__eyebrow"><MapPinIcon size={14} /> Top signals</span><h3>Leads worth following</h3></div>
                </div>
                {topLeads.map((lead) => (
                  <div className="hive-card" key={lead.id} style={{ marginBottom: '.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '.6rem', alignItems: 'center' }}>
                      <strong style={{ color: '#fff', fontSize: '.88rem' }}>{lead.name}</strong>
                      <span className="hive-pill hive-pill--review">{lead.score}</span>
                    </div>
                    <p className="hive-sub" style={{ marginTop: '.2rem' }}>{lead.area} · {stageLabel(lead.stage)} · owner: {beeName(lead.owner)}</p>
                  </div>
                ))}
              </section>
            </div>
          )}

          {activeView === 'The Colony' && (
            <section className="admin-panel admin-panel--roles">
              <div className="admin-panel__head">
                <div><span className="admin-panel__eyebrow"><BeeIcon size={14} /> The registry</span><h3>{bees.length} bees in the colony</h3></div>
                <button className="hive-btn hive-btn--primary" onClick={() => setBeeForm({ mode: 'add', name: '', roleId: colony.roles[0].id, skills: [], chainId: colony.chains[0].id, status: 'idle', task: '' })}>Add bee</button>
              </div>

              {beeForm && (
                <div className="hive-card" style={{ marginBottom: '1rem' }}>
                  <div className="hive-form-row">
                    <label className="hive-label" htmlFor="bee-name">Bee name</label>
                    <input id="bee-name" className="hive-input" value={beeForm.name} onChange={(e) => setBeeForm({ ...beeForm, name: e.target.value })} placeholder="e.g. Content Bee — Swahili" />
                  </div>
                  <div className="hive-grid2">
                    <div className="hive-form-row">
                      <label className="hive-label" htmlFor="bee-role">Role</label>
                      <select id="bee-role" className="hive-select" value={beeForm.roleId} onChange={(e) => setBeeForm({ ...beeForm, roleId: e.target.value })}>
                        {colony.roles.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
                      </select>
                    </div>
                    <div className="hive-form-row">
                      <label className="hive-label" htmlFor="bee-chain">Model chain</label>
                      <select id="bee-chain" className="hive-select" value={beeForm.chainId} onChange={(e) => setBeeForm({ ...beeForm, chainId: e.target.value })}>
                        {colony.chains.map((ch) => <option key={ch.id} value={ch.id}>{ch.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="hive-grid2">
                    <div className="hive-form-row">
                      <label className="hive-label" htmlFor="bee-status">Status</label>
                      <select id="bee-status" className="hive-select" value={beeForm.status} onChange={(e) => setBeeForm({ ...beeForm, status: e.target.value })}>
                        {BEE_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="hive-form-row">
                      <label className="hive-label" htmlFor="bee-task">Current task</label>
                      <input id="bee-task" className="hive-input" value={beeForm.task} onChange={(e) => setBeeForm({ ...beeForm, task: e.target.value })} placeholder="What this bee is doing" />
                    </div>
                  </div>
                  <div className="hive-form-row">
                    <span className="hive-label">Skills</span>
                    <div className="hive-actions">
                      {colony.skills.map((s) => {
                        const on = beeForm.skills.includes(s.id);
                        return (
                          <button key={s.id} className={'hive-btn hive-btn--small ' + (on ? 'hive-btn--primary' : 'hive-btn--ghost')}
                            onClick={() => setBeeForm({ ...beeForm, skills: on ? beeForm.skills.filter((x) => x !== s.id) : [...beeForm.skills, s.id] })}>
                            {s.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="hive-actions" style={{ marginTop: '.6rem' }}>
                    <button className="hive-btn hive-btn--primary" onClick={saveBeeForm}>{beeForm.mode === 'edit' ? 'Save changes' : 'Commission bee'}</button>
                    <button className="hive-btn hive-btn--ghost" onClick={() => setBeeForm(null)}>Cancel</button>
                  </div>
                </div>
              )}

              <table className="hive-table">
                <thead><tr><th>Bee</th><th>Role</th><th>Skills</th><th>Chain</th><th>Status</th><th></th></tr></thead>
                <tbody>
                  {bees.map((b) => (
                    <tr key={b.id}>
                      <td><strong style={{ color: '#fff' }}>{b.name}</strong><div className="hive-sub" style={{ marginTop: '.2rem' }}>{b.task}</div></td>
                      <td>{roleName(b.roleId)}</td>
                      <td>{b.skills.map((s) => <span className="hive-tag" key={s}>{s}</span>)}</td>
                      <td>{colony.chains.find((ch) => ch.id === b.chainId) ? colony.chains.find((ch) => ch.id === b.chainId).name : b.chainId}</td>
                      <td><span className={'hive-pill hive-pill--' + b.status}>{b.status}</span></td>
                      <td>
                        <div className="hive-actions">
                          <button className="hive-btn hive-btn--ghost hive-btn--small" onClick={() => setBeeForm({ mode: 'edit', id: b.id, name: b.name, roleId: b.roleId, skills: [...b.skills], chainId: b.chainId, status: b.status, task: b.task })}>Edit</button>
                          <button className="hive-btn hive-btn--danger hive-btn--small" onClick={() => removeBee(b.id)}>Remove</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}

          {activeView === 'Leads' && (
            <section className="admin-panel admin-panel--leads">
              <div className="admin-panel__head">
                <div><span className="admin-panel__eyebrow"><MapPinIcon size={14} /> Pipeline</span><h3>{colony.leads.length} leads — every signal owned</h3></div>
                <button className="hive-btn hive-btn--primary" onClick={() => setLeadForm({ name: '', area: '', signal: '', score: 70, owner: 'hunt-mba', stage: 'new' })}>Add lead</button>
              </div>
              {leadForm && (
                <div className="hive-card" style={{ marginBottom: '1rem' }}>
                  <div className="hive-grid2">
                    <div className="hive-form-row"><label className="hive-label" htmlFor="lead-name">Business</label><input id="lead-name" className="hive-input" value={leadForm.name} onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })} /></div>
                    <div className="hive-form-row"><label className="hive-label" htmlFor="lead-area">Area / sector</label><input id="lead-area" className="hive-input" value={leadForm.area} onChange={(e) => setLeadForm({ ...leadForm, area: e.target.value })} placeholder="e.g. Nyali · hospitality" /></div>
                  </div>
                  <div className="hive-grid2">
                    <div className="hive-form-row"><label className="hive-label" htmlFor="lead-signal">Signal</label><input id="lead-signal" className="hive-input" value={leadForm.signal} onChange={(e) => setLeadForm({ ...leadForm, signal: e.target.value })} /></div>
                    <div className="hive-form-row"><label className="hive-label" htmlFor="lead-owner">Owner bee</label>
                      <select id="lead-owner" className="hive-select" value={leadForm.owner} onChange={(e) => setLeadForm({ ...leadForm, owner: e.target.value })}>
                        {bees.filter((b) => ['hunt', 'planning', 'care'].includes(b.roleId)).map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="hive-actions">
                    <button className="hive-btn hive-btn--primary" onClick={() => {
                      if (!leadForm.name.trim()) return;
                      update((c) => { c.leads.push({ id: nextId('l'), name: leadForm.name, area: leadForm.area, signal: leadForm.signal, stage: leadForm.stage, score: Number(leadForm.score) || 70, owner: leadForm.owner, next: 'First contact pending' }); });
                      setLeadForm(null);
                    }}>Add to pipeline</button>
                    <button className="hive-btn hive-btn--ghost" onClick={() => setLeadForm(null)}>Cancel</button>
                  </div>
                </div>
              )}
              <table className="hive-table">
                <thead><tr><th>Business</th><th>Area</th><th>Signal</th><th>Stage</th><th>Owner</th><th>Next move</th></tr></thead>
                <tbody>
                  {colony.leads.map((l) => (
                    <tr key={l.id}>
                      <td><strong style={{ color: '#fff' }}>{l.name}</strong><div className="hive-sub">{l.score} · {l.signal}</div></td>
                      <td>{l.area}</td>
                      <td>{stageLabel(l.stage)}</td>
                      <td><span className="hive-pill hive-pill--review">{stageLabel(l.stage)}</span></td>
                      <td>{beeName(l.owner)}</td>
                      <td>{l.next}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}

          {activeView === 'Content' && (
            <section className="admin-panel">
              <div className="admin-panel__head">
                <div><span className="admin-panel__eyebrow"><BulbIcon size={14} /> The honey store</span><h3>Content in all formats</h3></div>
                <button className="hive-btn hive-btn--primary" onClick={() => setContentForm({ title: '', format: 'text', channel: 'site', sourceBeeId: 'content-1' })}>New draft</button>
              </div>
              {contentForm && (
                <div className="hive-card" style={{ marginBottom: '1rem' }}>
                  <div className="hive-grid2">
                    <div className="hive-form-row"><label className="hive-label" htmlFor="content-title">Title</label><input id="content-title" className="hive-input" value={contentForm.title} onChange={(e) => setContentForm({ ...contentForm, title: e.target.value })} /></div>
                    <div className="hive-form-row"><label className="hive-label" htmlFor="content-format">Format</label>
                      <select id="content-format" className="hive-select" value={contentForm.format} onChange={(e) => setContentForm({ ...contentForm, format: e.target.value })}>
                        {CONTENT_FORMATS.map((f) => <option key={f} value={f}>{f}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="hive-grid2">
                    <div className="hive-form-row"><label className="hive-label" htmlFor="content-channel">Channel</label><input id="content-channel" className="hive-input" value={contentForm.channel} onChange={(e) => setContentForm({ ...contentForm, channel: e.target.value })} /></div>
                    <div className="hive-form-row"><label className="hive-label" htmlFor="content-bee">Source bee</label>
                      <select id="content-bee" className="hive-select" value={contentForm.sourceBeeId} onChange={(e) => setContentForm({ ...contentForm, sourceBeeId: e.target.value })}>
                        {bees.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="hive-actions">
                    <button className="hive-btn hive-btn--primary" onClick={() => {
                      if (!contentForm.title.trim()) return;
                      update((c) => { c.content.push({ id: nextId('c'), title: contentForm.title, format: contentForm.format, status: 'draft', channel: contentForm.channel, sourceBeeId: contentForm.sourceBeeId }); });
                      setContentForm(null);
                    }}>Add draft</button>
                    <button className="hive-btn hive-btn--ghost" onClick={() => setContentForm(null)}>Cancel</button>
                  </div>
                </div>
              )}
              <table className="hive-table">
                <thead><tr><th>Title</th><th>Format</th><th>Channel</th><th>Source bee</th><th>Status</th><th></th></tr></thead>
                <tbody>
                  {colony.content.map((item) => (
                    <tr key={item.id}>
                      <td><strong style={{ color: '#fff' }}>{item.title}</strong></td>
                      <td><span className="hive-tag">{item.format}</span></td>
                      <td>{item.channel}</td>
                      <td>{beeName(item.sourceBeeId)}</td>
                      <td><span className={'hive-pill hive-pill--' + item.status}>{item.status}</span></td>
                      <td>
                        {item.status !== 'published' && (
                          <button className="hive-btn hive-btn--ghost hive-btn--small" onClick={() => advanceContent(item.id)}>
                            Move to {CONTENT_STATUSES[Math.min(CONTENT_STATUSES.indexOf(item.status) + 1, CONTENT_STATUSES.length - 1)]}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}

          {activeView === 'Approvals' && (
            <section className="admin-panel">
              <div className="admin-panel__head">
                <div><span className="admin-panel__eyebrow"><CheckRocketIcon size={14} /> Your gate</span><h3>Nothing ships without you</h3></div>
              </div>
              {colony.approvals.map((a) => (
                <div className="hive-card" key={a.id} style={{ marginBottom: '.6rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div>
                      <strong style={{ color: '#fff' }}>{a.title}</strong>
                      <p className="hive-sub" style={{ marginTop: '.25rem' }}>{a.itemType} · requested by {beeName(a.requestedBy)}{a.decidedAt ? ' · decided ' + fmtTime(a.decidedAt) : ''}</p>
                    </div>
                    <div className="hive-actions">
                      <span className={'hive-pill hive-pill--' + a.status}>{a.status}</span>
                      {a.status === 'pending' && (
                        <>
                          <button className="hive-btn hive-btn--primary hive-btn--small" onClick={() => decideApproval(a.id, 'approved')}>Approve</button>
                          <button className="hive-btn hive-btn--danger hive-btn--small" onClick={() => decideApproval(a.id, 'rejected')}>Reject</button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )}

          {activeView === 'Model Room' && (
            <div className="hive-grid2">
              <section className="admin-panel">
                <div className="admin-panel__head">
                  <div><span className="admin-panel__eyebrow"><ChartIcon size={14} /> Providers</span><h3>Accounts & keys</h3></div>
                </div>
                {colony.providers.map((p) => (
                  <div className="hive-card" key={p.id} style={{ marginBottom: '.6rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '.6rem', flexWrap: 'wrap' }}>
                      <div>
                        <strong style={{ color: '#fff' }}>{p.name}</strong>
                        <p className="hive-sub" style={{ marginTop: '.2rem' }}>{p.note}{p.keyTail ? ' · key ' + p.keyTail : ''}</p>
                      </div>
                      <span className={'hive-pill ' + (p.status === 'connected' ? 'hive-pill--approved' : p.status === 'planned' ? 'hive-pill--idle' : 'hive-pill--pending')}>{p.status}</span>
                    </div>
                    {keyFor === p.id ? (
                      <div className="hive-actions" style={{ marginTop: '.6rem' }}>
                        <input className="hive-input" style={{ maxWidth: 260 }} value={keyVal} onChange={(e) => setKeyVal(e.target.value)} placeholder="Paste API key" />
                        <button className="hive-btn hive-btn--primary hive-btn--small" onClick={() => {
                          const tail = keyVal.trim().slice(-4);
                          update((c) => { const pr = c.providers.find((x) => x.id === p.id); if (pr) { pr.status = 'connected'; pr.keyTail = tail ? '••••' + tail : ''; } });
                          setKeyFor(null); setKeyVal('');
                        }}>Save</button>
                        <button className="hive-btn hive-btn--ghost hive-btn--small" onClick={() => { setKeyFor(null); setKeyVal(''); }}>Cancel</button>
                      </div>
                    ) : (
                      <div className="hive-actions" style={{ marginTop: '.6rem' }}>
                        <button className="hive-btn hive-btn--ghost hive-btn--small" onClick={() => { setKeyFor(p.id); setKeyVal(''); }}>{p.status === 'connected' ? 'Replace key' : 'Connect key'}</button>
                      </div>
                    )}
                  </div>
                ))}
                <p className="hive-sub" style={{ marginTop: '.6rem' }}>Keys are placeholders for now — they will be stored server-side (never in the browser) once the backend lands.</p>
              </section>

              <section className="admin-panel">
                <div className="admin-panel__head">
                  <div><span className="admin-panel__eyebrow"><BriefcaseIcon size={14} /> Fallback chains</span><h3>If one fails, the next takes over</h3></div>
                </div>
                {colony.chains.map((ch) => (
                  <div className="hive-card" key={ch.id} style={{ marginBottom: '.6rem' }}>
                    <strong style={{ color: '#fff', fontSize: '.9rem' }}>{ch.name}</strong>
                    <p className="hive-sub" style={{ marginTop: '.2rem' }}>timeout {ch.rules.timeoutSec}s · {ch.rules.retries} retr{ch.rules.retries === 1 ? 'y' : 'ies'} per step</p>
                    <div className="hive-chain">
                      {ch.steps.map((mId, i) => (
                        <span key={mId + i} style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem' }}>
                          {i > 0 && <span className="hive-chain__arrow">→</span>}
                          <span className="hive-chain__step">{modelName(mId)}</span>
                          {ch.steps.length > 1 && (
                            <button className="hive-btn hive-btn--danger hive-btn--small" style={{ padding: '.1rem .4rem' }}
                              onClick={() => update((c) => { const cc = c.chains.find((x) => x.id === ch.id); if (cc) cc.steps = cc.steps.filter((s, idx) => idx !== i); })}>×</button>
                          )}
                        </span>
                      ))}
                    </div>
                    <div className="hive-actions" style={{ marginTop: '.4rem' }}>
                      {colony.models.filter((m) => !ch.steps.includes(m.id)).map((m) => (
                        <button key={m.id} className="hive-btn hive-btn--ghost hive-btn--small"
                          onClick={() => update((c) => { const cc = c.chains.find((x) => x.id === ch.id); if (cc) cc.steps.push(m.id); })}>+ {m.name}</button>
                      ))}
                    </div>
                  </div>
                ))}
              </section>

              <section className="admin-panel" style={{ gridColumn: '1 / -1' }}>
                <div className="admin-panel__head">
                  <div><span className="admin-panel__eyebrow"><ChartIcon size={14} /> Run log</span><h3>Every model call, audited</h3></div>
                </div>
                <table className="hive-table">
                  <thead><tr><th>When</th><th>Bee</th><th>Model</th><th>Provider</th><th>Outcome</th><th>Fallback</th></tr></thead>
                  <tbody>
                    {[...colony.runs].reverse().map((r) => (
                      <tr key={r.id}>
                        <td>{fmtTime(r.at)}</td>
                        <td>{beeName(r.beeId)}</td>
                        <td>{modelName(r.modelId)}</td>
                        <td>{providerName(r.providerId)}</td>
                        <td><span className={'hive-pill ' + (r.outcome === 'ok' ? 'hive-pill--active' : 'hive-pill--pending')}>{r.outcome}</span></td>
                        <td>{r.fallbackUsed ? 'yes — switched provider' : 'no'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>
          )}

          {activeView === 'Roles & Skills' && (
            <div className="hive-grid2">
              <section className="admin-panel">
                <div className="admin-panel__head">
                  <div><span className="admin-panel__eyebrow"><BeeIcon size={14} /> Roles</span><h3>Bee types of the colony</h3></div>
                </div>
                {TIER_ORDER.map((tier) => (
                  <div key={tier} style={{ marginBottom: '1rem' }}>
                    <p className="hive-label" style={{ color: TIER_COLOR[tier] }}>{TIER_LABEL[tier]}</p>
                    {colony.roles.filter((r) => r.tier === tier).map((r) => (
                      <div className="hive-card" key={r.id} style={{ margin: '.4rem 0 .5rem' }}>
                        <strong style={{ color: '#fff', fontSize: '.9rem' }}>{r.name}</strong>
                        <p className="hive-sub" style={{ marginTop: '.2rem' }}>{r.summary}</p>
                        <div style={{ marginTop: '.4rem' }}>{r.permissions.map((p) => <span className="hive-tag" key={p}>{p}</span>)}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </section>
              <section className="admin-panel">
                <div className="admin-panel__head">
                  <div><span className="admin-panel__eyebrow"><BulbIcon size={14} /> Skills</span><h3>The capability map</h3></div>
                </div>
                {colony.skills.map((s) => (
                  <div className="hive-card" key={s.id} style={{ marginBottom: '.5rem' }}>
                    <strong style={{ color: '#fff', fontSize: '.9rem' }}>{s.name}</strong>
                    <div style={{ marginTop: '.35rem' }}>{s.tools.map((tool) => <span className="hive-tag" key={tool}>{tool}</span>)}</div>
                  </div>
                ))}
                <div className="hive-actions" style={{ marginTop: '.6rem' }}>
                  <input className="hive-input" style={{ maxWidth: 220 }} value={skillDraft} onChange={(e) => setSkillDraft(e.target.value)} placeholder="New skill name" />
                  <button className="hive-btn hive-btn--primary hive-btn--small" onClick={() => {
                    const name = skillDraft.trim();
                    if (!name) return;
                    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    update((c) => { if (!c.skills.find((s) => s.id === id)) c.skills.push({ id, name, tools: [] }); });
                    setSkillDraft('');
                  }}>Add skill</button>
                </div>
              </section>
            </div>
          )}

          {activeView === 'Settings' && (
            <div className="hive-grid2">
              <section className="admin-panel">
                <div className="admin-panel__head">
                  <div><span className="admin-panel__eyebrow"><BriefcaseIcon size={14} /> Operating rules</span><h3>How the colony behaves</h3></div>
                </div>
                {colony.settings.rules.map((r) => (
                  <p key={r} className="hive-sub" style={{ padding: '.45rem 0', borderBottom: '1px solid rgba(255,255,255,.06)', margin: 0 }}>• {r}</p>
                ))}
                <p className="hive-sub" style={{ marginTop: '.8rem' }}>Guardrails: {colony.settings.guardrails.spendCapPerDay} daily cap · auto-DM {colony.settings.guardrails.autoDm ? 'on' : 'off'} · auto-publish {colony.settings.guardrails.autoPublish ? 'on' : 'off'}</p>
              </section>
              <section className="admin-panel">
                <div className="admin-panel__head">
                  <div><span className="admin-panel__eyebrow"><ChartIcon size={14} /> Danger zone</span><h3>Reset</h3></div>
                </div>
                <p className="hive-sub">Everything in this panel is stored in your browser until the backend lands. Reset restores the seed colony.</p>
                <div className="hive-actions" style={{ marginTop: '.8rem' }}>
                  <button className="hive-btn hive-btn--danger" onClick={() => {
                    if (typeof window !== 'undefined' && window.confirm('Reset the colony to the seed state?')) {
                      resetColony();
                      setColony(loadColony());
                    }
                  }}>Reset colony</button>
                </div>
              </section>
            </div>
          )}

          <footer className="admin-footer">
            <span><span className="admin-footer__signal" /> Inner Hive · private workspace</span>
            <span>Next: real data + auth (server-side)</span>
          </footer>
        </section>
      </main>
    </>
  );
}
