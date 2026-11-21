export interface Item {
  id: string;
  es: string;
  ru: string;
  note?: string;
}

// Старый формат диалога урока. Остаётся только для уроков, у которых ещё нет эпизода истории.
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

// ---- История ----

export type Gender = 'm' | 'f';

export interface Profile {
  name: string;
  gender: Gender;
}

export type CharId = 'hero' | 'lucia' | 'carlos' | 'pablo' | 'carmen' | 'miguel' | 'elena' | 'extraM' | 'extraF';

export interface Character {
  id: CharId;
  name: string; // как подписан в чате
  about: string; // кто это, по-русски
  emoji: string;
  color: string;
  voice: string; // ID голоса ElevenLabs; пусто — общий голос сайта
  voiceF?: string; // только у героя: женский голос
}

// Варианты ответа героя. В тексте можно писать {name} и {м|ж}, например «cansad{o|a}».
export interface Reply {
  es: string;
  ru: string;
  why?: string; // почему этот вариант не подходит (для неверных)
}

export type StoryLine =
  // реплика персонажа: звучит его голосом; as — подпись вместо имени («Camarero», «Chica»)
  | { kind: 'line'; who: Exclude<CharId, 'hero'>; as?: string; es: string; ru: string; note?: string }
  // выбор героя: верный вариант и правдоподобные неверные с объяснением
  | { kind: 'reply'; ok: Reply; bad: Reply[]; note?: string }
  // ремарка рассказчика по-русски
  | { kind: 'narr'; ru: string };

export interface Episode {
  lessonId: string;
  title: string;
  place: string;
  recap?: string; // «Ранее…»; если нет — берётся крючок прошлого эпизода
  intro: string[]; // вступление по-русски
  cast: CharId[];
  postcard?: string; // id открытки
  scene: StoryLine[];
  hook: string; // крючок в конце
}

export type PostcardArt = 'sol' | 'alcala' | 'alhambra' | 'giralda' | 'sagrada' | 'windmill' | 'aqueduct';

export interface Postcard {
  id: string;
  title: string;
  city: string;
  art?: PostcardArt;
  emoji: string; // если силуэта нет
  text: string[]; // 2–3 предложения по-русски
  es: string; // испанская фраза с озвучкой
  ru: string;
}

export interface Chapter {
  n: number;
  title: string;
  ru: string;
  from: number; // номер первого урока
  to: number;
}

// ---- Задания урока ----

export type Exercise =
  | { kind: 'drill'; drill: Drill }
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
  // «Как это работает»: грамматика на примере предложения
  | { kind: 'example'; drill: Drill; topic: string; mnemonic?: { icon: string; text: string } }
  | { kind: 'postcard'; id: string }
  | { kind: 'scene'; lessonId: string };

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
  profile?: Profile;
}
