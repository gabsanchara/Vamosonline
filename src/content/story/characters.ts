import type { CharId, Character } from '../../types';

// Голоса ElevenLabs подбираются и утверждаются отдельно (этап «Голоса»).
// Пока voice пустой, персонаж говорит общим голосом сайта.
export const CHARACTERS: Record<CharId, Character> = {
  hero: {
    id: 'hero',
    name: 'Вы',
    about: 'Новичок в Мадриде, сотрудник турагентства «Viajes Sol».',
    emoji: '🙂',
    color: '#e8453c',
    voice: '',
    voiceF: '',
  },
  lucia: {
    id: 'lucia',
    name: 'Lucía',
    about: 'Соседка. Работает в старом книжном на улице Huertas, обожает тайны.',
    emoji: '👩🏽',
    color: '#c2327d',
    voice: '',
  },
  carlos: {
    id: 'carlos',
    name: 'Carlos',
    about: 'Коллега по агентству. Гурман и балагур.',
    emoji: '🧔🏻',
    color: '#d97a00',
    voice: '',
  },
  pablo: {
    id: 'pablo',
    name: 'Pablo',
    about: 'Друг Лусии, фотограф. Не расстаётся с камерой.',
    emoji: '🧑🏻‍🦱',
    color: '#1f7a8c',
    voice: '',
  },
  carmen: {
    id: 'carmen',
    name: 'Doña Carmen',
    about: 'Хозяйка квартиры. Строгая, но добрая. Что-то скрывает.',
    emoji: '👵🏻',
    color: '#6b4fa3',
    voice: '',
  },
  miguel: {
    id: 'miguel',
    name: 'Miguel',
    about: 'Пожилой фотограф из Барселоны.',
    emoji: '👴🏻',
    color: '#3d6b3a',
    voice: '',
  },
  elena: {
    id: 'elena',
    name: 'Elena',
    about: 'Живёт в Консуэгре, у мельниц.',
    emoji: '👵🏼',
    color: '#a0522d',
    voice: '',
  },
  extraM: {
    id: 'extraM',
    name: 'Прохожий',
    about: 'Эпизодический персонаж.',
    emoji: '🧑',
    color: '#5b6b7a',
    voice: '',
  },
  extraF: {
    id: 'extraF',
    name: 'Прохожая',
    about: 'Эпизодический персонаж.',
    emoji: '👩',
    color: '#5b6b7a',
    voice: '',
  },
};

// Голос, которым звучит реплика: у героя — по выбранному роду.
export function voiceOf(id: CharId, gender: 'm' | 'f' = 'm'): string {
  const c = CHARACTERS[id];
  return id === 'hero' && gender === 'f' ? c.voiceF ?? '' : c.voice;
}
