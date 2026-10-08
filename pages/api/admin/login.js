import { createAdminSession, isAdminAuthConfigured, setAdminSession, verifyAdminPassword } from '../../../lib/adminAuth';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  if (!isAdminAuthConfigured()) return res.status(503).json({ ok: false, error: 'Admin access is not configured yet.' });
  if (!verifyAdminPassword(req.body?.password)) return res.status(401).json({ ok: false, error: 'That password is not correct.' });
  const session = createAdminSession();
  if (!session) return res.status(503).json({ ok: false, error: 'Admin access is not configured yet.' });
  setAdminSession(res, session);
  return res.status(200).json({ ok: true });
}

