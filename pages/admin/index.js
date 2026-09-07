'use client';

import { useState } from 'react';
import {
  BeeIcon, GlobeIcon, BriefcaseIcon, ChartIcon, MapPinIcon,
  WhatsAppIcon, BoltIcon, ArrowRightIcon, CheckRocketIcon,
} from '../../components/Icons';

const roles = [
  { name: 'Scout Bee', focus: 'Local business hunt', detail: 'Finds promising Mombasa businesses with a weak digital front door.', tone: 'gold', icon: MapPinIcon, status: '3 new leads' },
  { name: 'Strategy Bee', focus: 'Opportunity mapping', detail: 'Turns a lead into a clear problem, offer and next best action.', tone: 'cyan', icon: ChartIcon, status: '5 briefs in review' },
  { name: 'Build Bee', focus: 'Delivery board', detail: 'Keeps active websites, products and brand systems moving.', tone: 'violet', icon: BriefcaseIcon, status: '4 projects active' },
  { name: 'Care Bee', focus: 'Client follow-up', detail: 'Tracks conversations, launch checks and the next useful touch.', tone: 'mint', icon: WhatsAppIcon, status: '8 follow-ups due' },
];

const leads = [
  { name: 'Mtoni Coffee House', area: 'Nyali · hospitality', signal: 'Instagram-only presence', score: 92, next: 'Send a 3-screen direction' },
  { name: 'Coastline Dental', area: 'Bamburi · health', signal: 'No booking path', score: 86, next: 'Prepare a quick audit' },
  { name: 'Bahari Legal', area: 'Mombasa CBD · professional', signal: 'Outdated website', score: 78, next: 'Add to nurture list' },
];

const pipeline = [
  { label: 'New signals', value: '18', note: 'this month', color: 'gold' },
  { label: 'Conversations', value: '07', note: 'in progress', color: 'cyan' },
  { label: 'Hive briefs', value: '05', note: 'awaiting shape', color: 'violet' },
  { label: 'Building now', value: '04', note: 'active projects', color: 'mint' },
];

const briefs = [
  { client: 'Nyali Roastery', type: 'Business website', stage: 'Discovery', owner: 'Strategy Bee', color: 'cyan' },
  { client: 'Mombasa Makers', type: 'Brand identity', stage: 'Direction ready', owner: 'Build Bee', color: 'gold' },
  { client: 'Coastline Dental', type: 'Booking flow', stage: 'Awaiting reply', owner: 'Care Bee', color: 'mint' },
];

export default function AdminPage() {
  const [activeView, setActiveView] = useState('Overview');
  const views = ['Overview', 'Business hunt', 'Bee roles', 'Briefs'];
  const viewCopy = {
    Overview: ['The hive has useful work to do.', 'One view for the leads, briefs and delivery signals that keep Ziramzis moving.'],
    'Business hunt': ['Find the next good fit.', 'Scout signals from local businesses, then give each lead a thoughtful next move.'],
    'Bee roles': ['Every bee knows the next move.', 'Keep the colony clear on ownership, focus and the work waiting in each lane.'],
    Briefs: ['Turn conversations into shape.', 'See which ideas are being clarified, directed and prepared for build.'],
  }[activeView];

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <a href="/" className="admin-brand" aria-label="Back to Ziramzis website">
          <span className="admin-brand__mark"><span>Z</span></span>
          <span><b>ZIRAMZIS</b><small>THE INNER HIVE</small></span>
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
          <div className="admin-online"><i /> All bees online</div>
          <a href="/" className="admin-back"><ArrowRightIcon size={15} /> View public site</a>
        </div>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar">
          <div><p className="admin-kicker">Tuesday · Mombasa, Kenya</p><h1>{activeView}</h1></div>
          <div className="admin-topbar__actions"><button className="admin-icon-button" aria-label="Notifications"><span>•</span><span>•</span><span>•</span></button><div className="admin-avatar">Z</div></div>
        </header>

        <div className="admin-welcome">
          <div><span className="admin-welcome__label"><BeeIcon size={15} /> Good morning, keeper</span><h2>{viewCopy[0]}</h2><p>{viewCopy[1]}</p></div>
          <button className="admin-primary"><BoltIcon size={17} color="#111" /> Log a new signal</button>
        </div>

        <div className="admin-metrics">
          {pipeline.map((item) => <article className={`admin-metric admin-metric--${item.color}`} key={item.label}><span>{item.label}</span><strong>{item.value}</strong><small>{item.note}</small></article>)}
        </div>

        {activeView !== 'Overview' && <section className="admin-focus-panel"><div className="admin-panel__head"><div><span className="admin-panel__eyebrow"><BoltIcon size={14} /> {activeView} workspace</span><h3>{activeView === 'Business hunt' ? 'Your next local signals' : activeView === 'Bee roles' ? 'Ownership across the colony' : 'Briefs moving through the hive'}</h3></div><button className="admin-primary admin-primary--small">Add new <ArrowRightIcon size={14} /></button></div>{activeView === 'Business hunt' && <div className="admin-focus-grid">{leads.map((lead) => <article className="admin-focus-card" key={lead.name}><div className="admin-focus-card__top"><span className="admin-chip">{lead.score}% fit</span><small>{lead.area}</small></div><h4>{lead.name}</h4><p>{lead.signal}</p><button className="admin-text-button">Open lead <ArrowRightIcon size={14} /></button></article>)}</div>}{activeView === 'Bee roles' && <div className="admin-focus-grid">{roles.map(({ name, focus, status, tone, icon: Icon }) => <article className={`admin-focus-card admin-focus-card--${tone}`} key={name}><div className="admin-role__icon"><Icon size={20} color="currentColor" /></div><h4>{name}</h4><p>{focus}</p><small>{status}</small></article>)}</div>}{activeView === 'Briefs' && <div className="admin-focus-grid">{briefs.map((brief) => <article className={`admin-focus-card admin-focus-card--${brief.color}`} key={brief.client}><div className="admin-focus-card__top"><span className="admin-chip">{brief.stage}</span><small>{brief.owner}</small></div><h4>{brief.client}</h4><p>{brief.type}</p><button className="admin-text-button">View brief <ArrowRightIcon size={14} /></button></article>)}</div>}</section>}

        <div className="admin-grid admin-grid--main">
          <section className="admin-panel admin-panel--leads"><div className="admin-panel__head"><div><span className="admin-panel__eyebrow"><MapPinIcon size={14} /> Local business hunt</span><h3>Signals worth following</h3></div><button className="admin-text-button">Open hunt <ArrowRightIcon size={14} /></button></div><div className="admin-leads">{leads.map((lead) => <article className="admin-lead" key={lead.name}><div className="admin-lead__score">{lead.score}</div><div className="admin-lead__body"><div><h4>{lead.name}</h4><p>{lead.area}</p></div><span className="admin-chip">{lead.signal}</span><div className="admin-lead__next"><small>Next move</small><b>{lead.next}</b><ArrowRightIcon size={14} /></div></div></article>)}</div></section>
          <section className="admin-panel admin-panel--pulse"><div className="admin-panel__head"><div><span className="admin-panel__eyebrow"><GlobeIcon size={14} /> Colony pulse</span><h3>Where attention is going</h3></div></div><div className="admin-pulse"><div className="admin-pulse__orb"><BeeIcon size={42} /><span>72%</span></div><div><h4>Delivery energy</h4><p>Most of the hive is focused on active builds this week.</p></div></div><div className="admin-bar-list"><div><span>Build &amp; launch</span><b>72%</b><i><em style={{ width: '72%' }} /></i></div><div><span>New business</span><b>48%</b><i><em style={{ width: '48%' }} /></i></div><div><span>Care &amp; follow-up</span><b>36%</b><i><em style={{ width: '36%' }} /></i></div></div></section>
        </div>

        <section className="admin-panel admin-panel--roles"><div className="admin-panel__head"><div><span className="admin-panel__eyebrow"><CheckRocketIcon size={14} /> The colony</span><h3>Bees in their roles</h3></div><button className="admin-text-button">Manage roles <ArrowRightIcon size={14} /></button></div><div className="admin-role-grid">{roles.map(({ name, focus, detail, tone, icon: Icon, status }) => <article className={`admin-role admin-role--${tone}`} key={name}><div className="admin-role__icon"><Icon size={22} color="currentColor" /></div><div><h4>{name}</h4><span>{focus}</span><p>{detail}</p></div><small>{status}</small></article>)}</div></section>

        <footer className="admin-footer"><span><span className="admin-footer__signal" /> Hive brief v0.1 · private workspace</span><span>Next: connect real lead data and auth</span></footer>
      </section>
    </main>
  );
}
