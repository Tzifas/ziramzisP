import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { isAdminRequest } from '../../lib/adminAuth';

export async function getServerSideProps({ req }) {
  if (isAdminRequest(req)) return { redirect: { destination: '/admin', permanent: false } };
  return { props: {} };
}

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  async function submit(event) {
    event.preventDefault(); setBusy(true); setError('');
    try {
      const response = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Could not sign in.');
      router.replace('/admin');
    } catch (err) { setError(err.message || 'Could not sign in.'); setPassword(''); } finally { setBusy(false); }
  }
  return <><Head><title>Inner Hive — Ziramzis</title><meta name="robots" content="noindex, nofollow" /></Head><main className="admin-login-shell"><form className="admin-login-card" onSubmit={submit}><div className="admin-login-mark" aria-hidden="true">Z</div><p className="admin-login-kicker">Inner Hive</p><h1>Keeper access</h1><p>Enter through the private gate.</p><label htmlFor="admin-password">Password</label><input id="admin-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" autoFocus required />{error && <p className="admin-login-error" role="alert">{error}</p>}<button type="submit" className="hive-btn hive-btn--primary" disabled={busy}>{busy ? 'Entering…' : 'Enter the hive'}</button></form></main></>;
}
