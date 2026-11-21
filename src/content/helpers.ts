import type { DialogueTurn, Item } from '../types';

export type Row = [string, string, string?];

export function items(prefix: string, rows: Row[]): Item[] {
  return rows.map(([es, ru, note], i) => ({ id: `${prefix}-${i + 1}`, es, ru, note }));
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
