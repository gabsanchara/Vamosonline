export interface Item {
  id: string;
  es: string;
  ru: string;
  note?: string;
}

export interface DialogueTurn {
  npcEs: string;
  npcRu: string;
  options: { es: string; ru: string; ok: boolean }[];
}

export interface Lesson {
  id: string;
  day: number;
  title: string;
  emoji: string;
  goal: string;
  tip?: { title: string; text: string };
  items: Item[];
  dialogue?: { scene: string; npc: string; turns: DialogueTurn[] };
}

export interface Drill {
  q: string;
  options: string[]; // включает answer, перемешивается при показе
  answer: string;
  why: string;
  es?: string; // полная испанская фраза (для озвучки и показа после ответа)
  ru?: string; // её перевод
}

export interface Grammar {
  day: number;
  title: string;
  emoji: string;
  rule: string[];
  mnemonics: { icon: string; text: string }[];
  // ячейки: префикс m: (м.р., синий), f: (ж.р., красный), b: (выделение)
  tables?: { title?: string; head: string[]; rows: string[][] }[];
  examples?: [string, string][];
  drills: Drill[];
}

export type Exercise =
  | { kind: 'drill'; drill: Drill }
  | { kind: 'say'; item: Item }
  | { kind: 'card'; item: Item }
  | {
      kind: 'choose';
      dir: 'es-ru' | 'ru-es' | 'listen';
      item: Item;
      options: string[];
      answer: string;
    }
  | { kind: 'build'; item: Item; tiles: string[] }
  | { kind: 'type'; item: Item }
  | { kind: 'dialogue'; npc: string; scene: string; turn: DialogueTurn; first: boolean };

export interface SrsCard {
  item: Item;
  ease: number;
  interval: number; // days
  reps: number;
  due: number; // ms timestamp
}

export interface Progress {
  version?: number; // 2 — постоянные ID фраз
  xp: number;
  streak: number;
  lastDay: string;
  completed: Record<string, { stars: number }>;
  srs: Record<string, SrsCard>;
  log: Record<string, number>; // date -> xp
  grammarRead?: Record<number, boolean>; // разборы, прочитанные до конца
}
