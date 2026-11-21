import type { DialogueTurn, Item } from '../types';

export type Row = [string, string, string?];

// Постоянный ID фразы: строится из самого испанского текста, а не из позиции в уроке.
// Можно вставлять, удалять и переставлять фразы — история повторений учеников не сдвинется.
// Если поменять сам текст фразы, у неё будет новый ID (это уже другая фраза).
export function phraseId(es: string): string {
  return es
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Первый аргумент (id урока) оставлен для читаемости контента, в ID фразы он не входит:
// фразу можно перенести в другой урок без потери истории.
export function items(_lesson: string, rows: Row[]): Item[] {
  return rows.map(([es, ru, note]) => ({ id: phraseId(es), es, ru, note }));
}

export function turn(
  npcEs: string,
  npcRu: string,
  ok: [string, string],
  bad: [string, string][],
): DialogueTurn {
  return {
    npcEs,
    npcRu,
    options: [
      { es: ok[0], ru: ok[1], ok: true },
      ...bad.map(([es, ru]) => ({ es, ru, ok: false })),
    ],
  };
}
