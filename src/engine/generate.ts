import type { Exercise, Item, Lesson } from '../types';
import { GRAMMAR } from '../content/grammar.ts';
import { EPISODES, sceneFor } from '../content/story/index.ts';

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[¿?¡!.,;:]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function distractors(item: Item, field: 'es' | 'ru', pool: Item[], near: Item[]): string[] {
  const seen = new Set<string>([item[field]]);
  const out: string[] = [];
  const candidates = [...shuffle(near), ...shuffle(pool)];
  for (const c of candidates) {
    if (out.length >= 3) break;
    if (c.id === item.id || seen.has(c[field])) continue;
    seen.add(c[field]);
    out.push(c[field]);
  }
  return out;
}

export function makeChoose(
  item: Item,
  dir: 'es-ru' | 'ru-es' | 'listen',
  pool: Item[],
  near: Item[] = [],
): Exercise {
  const field = dir === 'es-ru' ? 'ru' : 'es';
  const options = shuffle([item[field], ...distractors(item, field, pool, near)]);
  return { kind: 'choose', dir, item, options, answer: item[field] };
}

// Сколько заданий грамматики показываем как разобранные примеры «Как это работает».
const EXAMPLES = 2;

export function buildLessonExercises(lesson: Lesson, pool: Item[]): Exercise[] {
  const ex: Exercise[] = [];
  const items = lesson.items;
  const g = GRAMMAR[lesson.day];
  const examples = g?.drills.slice(0, EXAMPLES) ?? [];
  const practice = shuffle(g?.drills.slice(EXAMPLES) ?? []);
  const half = Math.ceil(practice.length / 2);

  // 1. Знакомство: карточки по 4 + быстрый тест.
  //    После первой четвёрки — грамматика на примерах предложений.
  for (let i = 0; i < items.length; i += 4) {
    const chunk = items.slice(i, i + 4);
    chunk.forEach((it) => ex.push({ kind: 'card', item: it }));
    shuffle(chunk).forEach((it) => ex.push(makeChoose(it, 'es-ru', pool, items)));
    if (i === 0 && g) {
      examples.forEach((d, k) => ex.push({ kind: 'example', drill: d, topic: g.title, mnemonic: g.mnemonics[k] }));
    }
  }

  // 2. Закрепление разными типами заданий вперемешку с практикой грамматики
  shuffle(items)
    .slice(0, 4)
    .forEach((it) => ex.push(makeChoose(it, 'ru-es', pool, items)));
  practice.slice(0, half).forEach((d) => ex.push({ kind: 'drill', drill: d }));
  shuffle(items)
    .slice(0, 4)
    .forEach((it) => ex.push(makeChoose(it, 'listen', pool, items)));

  // 2а. Открытка из поездки — передышка в середине урока
  const postcard = EPISODES[lesson.id]?.postcard;
  if (postcard) ex.push({ kind: 'postcard', id: postcard });

  shuffle(items)
    .slice(0, 4)
    .forEach((it) => ex.push({ kind: 'type', item: it }));
  practice.slice(half).forEach((d) => ex.push({ kind: 'drill', drill: d }));

  // 3. Сцена эпизода — «миссия» урока
  if (sceneFor(lesson.id).length) ex.push({ kind: 'scene', lessonId: lesson.id });
  return ex;
}

export function buildReviewExercises(due: Item[], pool: Item[]): Exercise[] {
  const out: Exercise[] = [];
  shuffle(due)
    .slice(0, 12)
    .forEach((it, i) => {
      const m = i % 3;
      if (m === 0) out.push(makeChoose(it, 'ru-es', pool));
      else if (m === 1) out.push({ kind: 'type', item: it });
      else out.push(makeChoose(it, 'listen', pool));
    });
  return out;
}
