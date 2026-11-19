import { COURSE } from '../content/course-es.ts';
import { GLOSSARY } from '../content/glossary.ts';

// В предложениях для чтения можно вручную задать перевод сочетания: [voy a=я собираюсь]
const CUSTOM = /\[([^\]=]+)=([^\]]+)\]/g;

export function plainText(es: string): string {
  return es.replace(CUSTOM, '$1');
}

export function normWord(w: string): string {
  return w
    .toLowerCase()
    .replace(/^[¿¡«"“(]+/, '')
    .replace(/[?!.,;:»"”)—–-]+$/, '');
}

export function tokensOf(text: string): string[] {
  return plainText(text)
    .split(/\s+/)
    .map(normWord)
    .filter((w) => /\p{L}/u.test(w));
}

// В какой день слово впервые встречается в списке фраз урока.
const tokenDay = new Map<string, number>();
const lessonText: { day: number; text: string }[] = [];
for (const l of COURSE) {
  const joined = l.items.map((i) => ' ' + tokensOf(i.es).join(' ') + ' ').join('|');
  lessonText.push({ day: l.day, text: joined });
  for (const it of l.items) for (const t of tokensOf(it.es)) if (!tokenDay.has(t)) tokenDay.set(t, l.day);
}

const keyDayCache = new Map<string, number>();
export function firstDay(key: string): number {
  const cached = keyDayCache.get(key);
  if (cached !== undefined) return cached;
  let day = Infinity;
  if (!key.includes(' ')) {
    day = tokenDay.get(key) ?? Infinity;
  } else {
    const needle = ' ' + key + ' ';
    const hit = lessonText.find((l) => l.text.includes(needle));
    if (hit) day = hit.day;
    else day = Math.max(...key.split(' ').map((t) => tokenDay.get(t) ?? Infinity));
  }
  keyDayCache.set(key, day);
  return day;
}

export interface Piece {
  text: string;
  key: string;
  gloss: string;
  day: number;
  known: boolean;
}

interface Unit {
  text: string;
  custom?: string;
}

function splitUnits(es: string): Unit[] {
  const out: Unit[] = [];
  const push = (s: string) => {
    for (const w of s.split(/\s+/).filter(Boolean)) {
      // знак препинания, отделённый от слова разметкой, приклеиваем к предыдущему
      if (!/\p{L}/u.test(w) && out.length) out[out.length - 1].text += w;
      else out.push({ text: w });
    }
  };
  let last = 0;
  for (const m of es.matchAll(CUSTOM)) {
    push(es.slice(last, m.index));
    out.push({ text: m[1], custom: m[2] });
    last = (m.index ?? 0) + m[0].length;
  }
  push(es.slice(last));
  return out;
}

const hasTail = (w: string) => /[?!.,;:»"”)]$/.test(w);

export function tokenize(es: string): Piece[] {
  const units = splitUnits(es);
  const pieces: Piece[] = [];
  let i = 0;
  while (i < units.length) {
    const u = units[i];
    if (u.custom) {
      const toks = tokensOf(u.text);
      const day = Math.min(...toks.map((t) => firstDay(t)), Infinity);
      pieces.push({ text: u.text, key: toks.join(' '), gloss: u.custom, day, known: true });
      i++;
      continue;
    }
    let matched = false;
    for (let n = 4; n >= 2 && !matched; n--) {
      const slice = units.slice(i, i + n);
      if (slice.length < n || slice.some((s) => s.custom)) continue;
      if (slice.slice(0, -1).some((s) => hasTail(s.text))) continue;
      const key = slice.map((s) => normWord(s.text)).join(' ');
      if (GLOSSARY[key]) {
        pieces.push({ text: slice.map((s) => s.text).join(' '), key, gloss: GLOSSARY[key], day: firstDay(key), known: true });
        i += n;
        matched = true;
      }
    }
    if (matched) continue;
    const key = normWord(u.text);
    pieces.push({ text: u.text, key, gloss: GLOSSARY[key] ?? '', day: firstDay(key), known: key in GLOSSARY });
    i++;
  }
  return pieces;
}
