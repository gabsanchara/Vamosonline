import type { CharId, Episode, Lesson, StoryLine } from '../../types';
import { COURSE } from '../course-es.ts';
import { EPISODES_1 } from './episodes-1.ts';
import { EPISODES_2 } from './episodes-2.ts';

export { CHARACTERS, voiceOf } from './characters.ts';
export { CHAPTERS, chapterOf } from './chapters.ts';
export { POSTCARDS } from './postcards.ts';

export const EPISODES: Record<string, Episode> = Object.fromEntries(
  [...EPISODES_1, ...EPISODES_2].map((e) => [e.lessonId, e]),
);

// «Ранее…»: своя запись эпизода или крючок предыдущего эпизода.
export function recapFor(lessonId: string): string | undefined {
  const ep = EPISODES[lessonId];
  if (ep?.recap) return ep.recap;
  const i = COURSE.findIndex((l) => l.id === lessonId);
  return i > 0 ? EPISODES[COURSE[i - 1].id]?.hook : undefined;
}

// Уроки, для которых эпизод ещё не написан, показывают старый диалог в том же чате.
const LEGACY_NPC: Record<string, Exclude<CharId, 'hero'>> = {
  Carlos: 'carlos',
  Pablo: 'pablo',
  Lucía: 'lucia',
  Dependienta: 'extraF',
  Recepcionista: 'extraF',
};

function legacyScene(lesson: Lesson): StoryLine[] {
  const d = lesson.dialogue;
  if (!d) return [];
  const who = LEGACY_NPC[d.npc] ?? 'extraM';
  const lines: StoryLine[] = [{ kind: 'narr', ru: d.scene }];
  for (const t of d.turns) {
    lines.push({ kind: 'line', who, as: who.startsWith('extra') ? d.npc : undefined, es: t.npcEs, ru: t.npcRu });
    const ok = t.options.find((o) => o.ok)!;
    lines.push({
      kind: 'reply',
      ok: { es: ok.es, ru: ok.ru },
      bad: t.options.filter((o) => !o.ok).map((o) => ({ es: o.es, ru: o.ru })),
    });
  }
  return lines;
}

export function sceneFor(lessonId: string): StoryLine[] {
  const ep = EPISODES[lessonId];
  if (ep) return ep.scene;
  const lesson = COURSE.find((l) => l.id === lessonId);
  return lesson ? legacyScene(lesson) : [];
}
