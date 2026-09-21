'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  BeeIcon, GlobeIcon, BriefcaseIcon, ChartIcon, MapPinIcon,
  WhatsAppIcon, BoltIcon, ArrowRightIcon, CheckRocketIcon,
} from '../../components/Icons';
import BrandLockup from '../../components/BrandLockup';
import { bees, leads, ROLES, SKILLS, summarizeColony, stageLabel } from '../../lib/hive';

const TIER_ORDER = ['leadership', 'planning', 'growth', 'production', 'engagement'];
const TIER_LABEL = { leadership: 'Leadership', planning: 'Planning', growth: 'Growth', production: 'Production', engagement: 'Engagement' };
const TIER_COLOR = { leadership: '#f5c842', planning: '#00dce7', growth: '#59d8ba', production: '#b49cff', engagement: '#00c8d7' };
const STATUS_LABEL = { active: 'Active', idle: 'Idle', resting: 'Resting', blocked: 'Blocked' };
const STATUS_COLOR = { active: '#5ad9bd', idle: '#8497aa', resting: '#b49cff', blocked: '#f5c842' };

const beeName = (id) => (bees.find((b) => b.id === id) || {}).name || 'Unassigned';
const roleName = (roleId) => (ROLES[roleId] || {}).name || roleId;

export default function AdminPage() {
  const [activeView, setActiveView] = useState('Overview');
  const [dayLabel, setDayLabel] = useState('');
  useEffect(() => { setDayLabel(new Date().toLocaleDateString('en-US', { weekday: 'long' })); }, []);

  const colony = summarizeColony();
  const activeBees = bees.filter((b) => b.status === 'active').length;
  const views = ['Overview', 'The Colony', 'Leads', 'Skills'];

  const metrics = [
    { label: 'Bees in the hive', value: String(bees.length), note: 'registered agents', color: 'gold' },
    { label: 'Active now', value: String(activeBees), note: 'working a task', color: 'mint' },
    { label: 'Open leads', value: String(colony.openLeads), note: 'new · qualified · briefing', color: 'cyan' },
    { label: 'In build', value: String(colony.buildingLeads), note: 'active projects', color: 'violet' },
  ];

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
            {views.map((view) => (
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
              <h2>{colony.digest[0]}</h2>
              <p>{colony.digest[1]} {colony.digest[2]}</p>
            </div>
            <button className="admin-primary"><BoltIcon size={17} color="#111" /> Log a new signal</button>
          </div>

          <div className="admin-metrics">
            {metrics.map((m) => (
              <article className={'admin-metric admin-metric--' + m.color} key={m.label}>
                <span>{m.label}</span><strong>{m.value}</strong><small>{m.note}</small>
              </article>
            ))}
          </div>

          {activeView === 'Overview' && (
            <div className="admin-grid admin-grid--main">
              <section className="admin-panel admin-panel--leads">
                <div className="admin-panel__head">
                  <div><span className="admin-panel__eyebrow"><MapPinIcon size={14} /> Top signals</span><h3>Leads worth following</h3></div>
                  <button className="admin-text-button" onClick={() => setActiveView('Leads')}>Open pipeline <ArrowRightIcon size={14} /></button>
                </div>
                <div className="admin-leads">
                  {colony.topLeads.map((lead) => (
                    <article className="admin-lead" key={lead.id}>
                      <div className="admin-lead__score">{lead.score}</div>
                      <div className="admin-lead__body">
                        <div><h4>{lead.name}</h4><p>{lead.area}</p></div>
                        <span className="admin-chip">{stageLabel(lead.stage)}</span>
                        <div className="admin-lead__next"><small>Owner</small><b>{beeName(lead.owner)}</b><ArrowRightIcon size={14} /></div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
              <section className="admin-panel admin-panel--pulse">
                <div className="admin-panel__head">
                  <div><span className="admin-panel__eyebrow"><ChartIcon size={14} /> Skill coverage</span><h3>Where the gaps are</h3></div>
                </div>
                <div className="admin-bar-list" style={{ paddingTop: '0.4rem' }}>
                  {colony.skillCoverage.map((s) => (
                    <div key={s.skill}>
                      <span>{s.skill}</span><b>{s.count} bee{s.count === 1 ? '' : 's'}</b>
                      <i><em style={{ width: Math.min(100, s.count * 25) + '%', background: s.count === 0 ? '#f5c842' : 'linear-gradient(90deg,#f5c842,#00dce7)' }} /></i>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeView === 'The Colony' && (
            <div className="admin-grid">
              {TIER_ORDER.map((tier) => {
                const group = colony.byRole.filter((g) => g.role.tier === tier && g.count > 0);
                if (!group.length) return null;
                return (
                  <section className="admin-panel admin-panel--roles" key={tier} style={{ marginTop: 0 }}>
                    <div className="admin-panel__head">
                      <div>
                        <span className="admin-panel__eyebrow" style={{ color: TIER_COLOR[tier] }}>{TIER_LABEL[tier].toUpperCase()}</span>
                        <h3>{TIER_LABEL[tier]}</h3>
                      </div>
                    </div>
                    <div className="admin-role-grid">
                      {group.flatMap((g) => g.members).map((b) => (
                        <article className="admin-role" key={b.id}>
                          <div className="admin-role__icon"><BeeIcon size={22} color="currentColor" /></div>
                          <div>
                            <h4>{b.name}</h4>
                            <span>{roleName(b.role)}{b.reportsTo ? ' · reports to ' + beeName(b.reportsTo) : ' · reports to the keeper'}</span>
                            <p>{b.task}</p>
                          </div>
                          <small style={{ color: STATUS_COLOR[b.status] }}>● {STATUS_LABEL[b.status]}</small>
                        </article>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}

          {activeView === 'Leads' && (
            <section className="admin-panel admin-panel--leads">
              <div className="admin-panel__head">
                <div><span className="admin-panel__eyebrow"><GlobeIcon size={14} /> Lead pipeline</span><h3>Every signal, owned</h3></div>
                <button className="admin-text-button">Add lead <ArrowRightIcon size={14} /></button>
              </div>
              <div className="admin-leads">
                {leads.map((lead) => (
                  <article className="admin-lead" key={lead.id}>
                    <div className="admin-lead__score">{lead.score}</div>
                    <div className="admin-lead__body">
                      <div><h4>{lead.name}</h4><p>{lead.area}</p></div>
                      <span className="admin-chip">{stageLabel(lead.stage)}</span>
                      <div className="admin-lead__next"><small>Next move</small><b>{lead.next}</b><ArrowRightIcon size={14} /></div>
                      <div className="admin-lead__next" style={{ borderTop: 'none', paddingTop: 0 }}><small>Owner</small><b>{beeName(lead.owner)}</b></div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {activeView === 'Skills' && (
            <section className="admin-panel admin-panel--roles">
              <div className="admin-panel__head">
                <div><span className="admin-panel__eyebrow"><CheckRocketIcon size={14} /> Capability map</span><h3>Skills across the colony</h3></div>
              </div>
              <div className="admin-role-grid">
                {SKILLS.map((skill) => {
                  const holders = bees.filter((b) => b.skills.includes(skill));
                  return (
                    <article className="admin-role" key={skill} style={{ borderColor: holders.length ? undefined : 'rgba(245,200,66,0.45)' }}>
                      <h4>{skill}</h4>
                      <span>{holders.length ? holders.length + ' bee' + (holders.length === 1 ? '' : 's') : 'No bee assigned'}</span>
                      <p>{holders.length ? holders.map((b) => b.name).join(', ') : 'Consider commissioning a bee for this skill.'}</p>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          <footer className="admin-footer">
            <span><span className="admin-footer__signal" /> Inner Hive · private workspace</span>
            <span>Next: connect real lead data and auth</span>
          </footer>
        </section>
      </main>
    </>
  );
}
