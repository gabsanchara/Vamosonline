import type { Episode, StoryLine } from '../../types';
import { COURSE } from '../course-es.ts';
import { EPISODES_1 } from './episodes-1.ts';
import { EPISODES_2 } from './episodes-2.ts';
import { EPISODES_3 } from './episodes-3.ts';
import { EPISODES_4 } from './episodes-4.ts';
import { EPISODES_5 } from './episodes-5.ts';

export { CHARACTERS, voiceOf } from './characters.ts';
export { CHAPTERS, chapterOf } from './chapters.ts';
export { POSTCARDS } from './postcards.ts';

export const EPISODES: Record<string, Episode> = Object.fromEntries(
  [...EPISODES_1, ...EPISODES_2, ...EPISODES_3, ...EPISODES_4, ...EPISODES_5].map((e) => [e.lessonId, e]),
);

// «Ранее…»: своя запись эпизода или крючок предыдущего эпизода.
export function recapFor(lessonId: string): string | undefined {
  const ep = EPISODES[lessonId];
  if (ep?.recap) return ep.recap;
  const i = COURSE.findIndex((l) => l.id === lessonId);
  return i > 0 ? EPISODES[COURSE[i - 1].id]?.hook : undefined;
}

export function sceneFor(lessonId: string): StoryLine[] {
  return EPISODES[lessonId]?.scene ?? [];
}
