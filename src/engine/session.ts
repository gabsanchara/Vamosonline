import type { Exercise, Item } from '../types';

// Незаконченные уроки и повторения. Сохраняются после каждого шага,
// поэтому выход, обновление страницы или жест «назад» не теряют прогресс урока.
const KEY = 'vamos-sessions-v1';

export interface SavedSession {
  title: string;
  total: number; // сколько заданий в уроке изначально (для полосы прогресса)
  graded: number; // сколько из них с проверкой (без карточек)
  queue: Exercise[]; // очередь, включая задания, вернувшиеся после ошибки
  idx: number;
  done: number; // сколько исходных заданий уже пройдено
  xp: number;
  firstTry: [string, { item: Item | null; ok: boolean }][];
  attempts: string[];
  savedAt: number;
}

function readAll(): Record<string, SavedSession> {
  try {
    const raw = localStorage.getItem(KEY);
    const all = raw ? JSON.parse(raw) : {};
    return all && typeof all === 'object' ? all : {};
  } catch {
    return {};
  }
}

function writeAll(all: Record<string, SavedSession>) {
  try {
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    /* хранилище недоступно: урок просто не сохранится */
  }
}

function valid(s: SavedSession | undefined): s is SavedSession {
  return (
    !!s &&
    Array.isArray(s.queue) &&
    s.queue.length > 0 &&
    Number.isInteger(s.idx) &&
    s.idx >= 0 &&
    s.idx < s.queue.length &&
    s.total > 0
  );
}

export function loadSession(key: string): SavedSession | null {
  const s = readAll()[key];
  return valid(s) ? s : null;
}

export function saveSession(key: string, s: SavedSession) {
  const all = readAll();
  all[key] = s;
  writeAll(all);
}

export function clearSession(key: string) {
  const all = readAll();
  if (key in all) {
    delete all[key];
    writeAll(all);
  }
}

export function clearAllSessions() {
  writeAll({});
}

export function freshSession(title: string, exercises: Exercise[]): SavedSession {
  return {
    title,
    total: exercises.length,
    graded: exercises.filter((e) => e.kind !== 'card').length,
    queue: exercises,
    idx: 0,
    done: 0,
    xp: 0,
    firstTry: [],
    attempts: [],
    savedAt: Date.now(),
  };
}

// Доля пройденного в незаконченном уроке или null, если урок не начат.
export function sessionProgress(key: string): number | null {
  const s = loadSession(key);
  return s ? Math.min(1, s.done / s.total) : null;
}

export const lessonKey = (lessonId: string) => `lesson:${lessonId}`;
export const REVIEW_KEY = 'review';
