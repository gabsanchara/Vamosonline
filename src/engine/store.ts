import { useCallback, useEffect, useState } from 'react';
import type { Item, Progress } from '../types';

const KEY = 'vamos-progress-v1';
export const DAILY_GOAL = 60;

export function dayKey(d = new Date()): string {
  return d.toLocaleDateString('sv-SE');
}

function yesterdayKey(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return dayKey(d);
}

const empty: Progress = { xp: 0, streak: 0, lastDay: '', completed: {}, srs: {}, log: {} };

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...empty, ...JSON.parse(raw) };
  } catch {
    /* ignore */
  }
  return { ...empty };
}

function save(p: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    /* ignore */
  }
}

export interface FinishInput {
  lessonId?: string;
  xp: number;
  stars?: number;
  results: { item: Item; ok: boolean }[];
}

export function useProgress() {
  const [p, setP] = useState<Progress>(load);

  useEffect(() => save(p), [p]);

  const finish = useCallback((input: FinishInput) => {
    setP((prev) => {
      const today = dayKey();
      let streak = prev.streak;
      if (prev.lastDay !== today) {
        streak = prev.lastDay === yesterdayKey() ? prev.streak + 1 : 1;
      }
      const srs = { ...prev.srs };
      const now = Date.now();
      for (const r of input.results) {
        const c = srs[r.item.id] ?? { item: r.item, ease: 2.3, interval: 0, reps: 0, due: now };
        if (r.ok) {
          const interval = c.reps === 0 ? 1 : c.reps === 1 ? 3 : Math.round(c.interval * c.ease);
          srs[r.item.id] = {
            item: r.item,
            ease: Math.min(2.8, c.ease + 0.05),
            interval,
            reps: c.reps + 1,
            due: now + interval * 864e5,
          };
        } else {
          srs[r.item.id] = {
            item: r.item,
            ease: Math.max(1.3, c.ease - 0.2),
            interval: 0,
            reps: 0,
            due: now,
          };
        }
      }
      const completed = { ...prev.completed };
      if (input.lessonId) {
        const old = completed[input.lessonId]?.stars ?? 0;
        completed[input.lessonId] = { stars: Math.max(old, input.stars ?? 1) };
      }
      return {
        xp: prev.xp + input.xp,
        streak,
        lastDay: today,
        completed,
        srs,
        log: { ...prev.log, [today]: (prev.log[today] ?? 0) + input.xp },
      };
    });
  }, []);

  const reset = useCallback(() => setP({ ...empty }), []);

  const dueItems = Object.values(p.srs)
    .filter((c) => c.due <= Date.now())
    .map((c) => c.item);

  const todayXp = p.log[dayKey()] ?? 0;
  const streakAlive = p.lastDay === dayKey() || p.lastDay === yesterdayKey();

  return { p, finish, reset, dueItems, todayXp, streak: streakAlive ? p.streak : 0 };
}
