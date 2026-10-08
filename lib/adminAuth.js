import crypto from 'crypto';

const COOKIE_NAME = 'ziramzis_hive_session';
const SESSION_DURATION_SECONDS = 60 * 60 * 12;

function base64url(value) { return Buffer.from(value).toString('base64url'); }

function sign(value) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  return secret ? crypto.createHmac('sha256', secret).update(value).digest('base64url') : null;
}

function readCookie(req, name) {
  const prefix = name + '=';
  const found = String(req.headers.cookie || '').split(';').map((part) => part.trim()).find((part) => part.startsWith(prefix));
  return found ? decodeURIComponent(found.slice(prefix.length)) : null;
}

export function isAdminAuthConfigured() { return Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_SESSION_SECRET); }

export function verifyAdminPassword(password) {
  if (!isAdminAuthConfigured() || typeof password !== 'string') return false;
  const expected = Buffer.from(process.env.ADMIN_PASSWORD);
  const received = Buffer.from(password);
  return expected.length === received.length && crypto.timingSafeEqual(expected, received);
}

export function createAdminSession() {
  const payload = base64url(JSON.stringify({ exp: Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS }));
  const signature = sign(payload);
  return signature ? payload + '.' + signature : null;
}

export function isAdminRequest(req) {
  const value = readCookie(req, COOKIE_NAME);
  if (!value || !isAdminAuthConfigured()) return false;
  const [payload, signature] = value.split('.');
  const expected = sign(payload);
  if (!payload || !signature || !expected) return false;
  const received = Buffer.from(signature);
  const signed = Buffer.from(expected);
  if (received.length !== signed.length || !crypto.timingSafeEqual(received, signed)) return false;
  try { return JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')).exp > Math.floor(Date.now() / 1000); } catch { return false; }
}

export function setAdminSession(res, token) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.setHeader('Set-Cookie', COOKIE_NAME + '=' + encodeURIComponent(token) + '; Path=/; HttpOnly; SameSite=Strict; Max-Age=' + SESSION_DURATION_SECONDS + secure);
}

export function clearAdminSession(res) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.setHeader('Set-Cookie', COOKIE_NAME + '=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0' + secure);
}

