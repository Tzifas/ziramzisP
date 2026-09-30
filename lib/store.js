// lib/store.js — colony storage abstraction.
// v1 adapter: browser localStorage (the panel works today).
// Swap this single file for a Postgres/API adapter later — nothing else changes.

import { seedColony, SCHEMA_VERSION } from './hive';

const KEY = 'inner-hive-colony-v' + SCHEMA_VERSION;
let memoryFallback = null;

export function loadColony() {
  if (typeof window === 'undefined') return seedColony;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return seedColony;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.schemaVersion !== SCHEMA_VERSION || !parsed.data) return seedColony;
    return parsed.data;
  } catch (e) {
    return memoryFallback || seedColony;
  }
}

export function saveColony(data) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify({ schemaVersion: SCHEMA_VERSION, data }));
  } catch (e) {
    memoryFallback = data;
  }
}

export function resetColony() {
  if (typeof window === 'undefined') return;
  try { window.localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
  memoryFallback = null;
}

let seq = 0;
export function nextId(prefix) {
  seq += 1;
  return prefix + '-' + Date.now().toString(36) + '-' + seq;
}
