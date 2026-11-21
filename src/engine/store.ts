import { useCallback, useEffect, useState } from 'react';
import type { Item, Progress, SrsCard } from '../types';
import { ALL_ITEMS, COURSE } from '../content/course-es';
import { clearAllSessions } from './session';

const KEY = 'vamos-progress-v1';
const VERSION = 2;
export const DAILY_GOAL = 60;

export function dayKey(d = new Date()): string {
  return d.toLocaleDateString('sv-SE');
}

function yesterdayKey(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return dayKey(d);
}

const empty: Progress = { version: VERSION, xp: 0, streak: 0, lastDay: '', completed: {}, srs: {}, log: {} };

// Старые ID фраз были позиционными («d01-3» — третья фраза урока 1).
function positional(oldId: string): Item | undefined {
  const m = oldId.match(/^(d\d+)-(\d+)$/);
  if (!m) return undefined;
  return COURSE.find((l) => l.id === m[1])?.items[Number(m[2]) - 1];
}

// Приводит карточки повторения к текущему курсу:
// переводит старые позиционные ID на постоянные и обновляет текст фраз,
// чтобы правки контента доходили и до тех, кто урок уже прошёл.
function syncSrs(srs: Record<string, SrsCard>): Record<string, SrsCard> {
  const byId = new Map(ALL_ITEMS.map((i) => [i.id, i]));
  const byEs = new Map(ALL_ITEMS.map((i) => [i.es.toLowerCase(), i]));
  const out: Record<string, SrsCard> = {};
  for (const [id, card] of Object.entries(srs ?? {})) {
    const item = byId.get(id) ?? byEs.get(card?.item?.es?.toLowerCase() ?? '') ?? positional(id);
    if (!item) continue; // фразы больше нет в курсе
    const prev = out[item.id];
    if (!prev || card.reps > prev.reps) out[item.id] = { ...card, item };
  }
  return out;
}

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const p: Progress = { ...empty, ...JSON.parse(raw) };
      return { ...p, srs: syncSrs(p.srs), version: VERSION };
    }
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

  useEffect(() => {
    save(p);
  }, [p]);

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
      // ...prev обязателен: иначе теряются поля, которые здесь не меняются (например, прочитанная грамматика)
      return {
        ...prev,
        xp: prev.xp + input.xp,
        streak,
        lastDay: today,
        completed,
        srs,
        log: { ...prev.log, [today]: (prev.log[today] ?? 0) + input.xp },
      };
    });
  }, []);

  const markGrammar = useCallback((day: number) => {
    setP((prev) => (prev.grammarRead?.[day] ? prev : { ...prev, grammarRead: { ...prev.grammarRead, [day]: true } }));
  }, []);

  const reset = useCallback(() => {
    clearAllSessions();
    setP({ ...empty });
  }, []);

  const dueItems = Object.values(p.srs)
    .filter((c) => c.due <= Date.now())
    .map((c) => c.item);

  const todayXp = p.log[dayKey()] ?? 0;
  const streakAlive = p.lastDay === dayKey() || p.lastDay === yesterdayKey();

  return { p, finish, markGrammar, reset, dueItems, todayXp, streak: streakAlive ? p.streak : 0 };
}
