import type { CharId, Character } from '../../types';

// Голоса ElevenLabs (библиотека, кастильский акцент), утверждены по пробным фразам (npm run voices).
// Если voice пустой, персонаж говорит общим голосом сайта.
export const CHARACTERS: Record<CharId, Character> = {
  hero: {
    id: 'hero',
    name: 'Вы',
    about: 'Новичок в Мадриде, сотрудник турагентства «Viajes Sol».',
    emoji: '🙂',
    color: '#e8453c',
    voice: '9iaRiYAiGlZImkI1Ruyh', // Antonio
    voiceF: 'yiWEefwu5z3DQCM79clN', // Laura López
  },
  lucia: {
    id: 'lucia',
    name: 'Lucía',
    about: 'Соседка. Работает в старом книжном на улице Huertas, обожает тайны.',
    emoji: '👩🏽',
    color: '#c2327d',
    voice: '3DPhHWXDY263XJ1d2EPN', // Linda Fiore
  },
  carlos: {
    id: 'carlos',
    name: 'Carlos',
    about: 'Коллега по агентству. Гурман и балагур.',
    emoji: '🧔🏻',
    color: '#d97a00',
    voice: '7QQzpAyzlKTVrRzQJmTE', // Dani
  },
  pablo: {
    id: 'pablo',
    name: 'Pablo',
    about: 'Друг Лусии, фотограф. Не расстаётся с камерой.',
    emoji: '🧑🏻‍🦱',
    color: '#1f7a8c',
    voice: '1MxuWc12WPRxDkgfT3kj', // Efrayn
  },
  carmen: {
    id: 'carmen',
    name: 'Doña Carmen',
    about: 'Хозяйка квартиры. Строгая, но добрая. Что-то скрывает.',
    emoji: '👵🏻',
    color: '#6b4fa3',
    voice: 'YDDaC9XKjODs7hY78qEW', // MariCarmen
  },
  miguel: {
    id: 'miguel',
    name: 'Miguel',
    about: 'Пожилой фотограф из Барселоны.',
    emoji: '👴🏻',
    color: '#3d6b3a',
    voice: '5egO01tkUjEzu7xSSE8M', // Carmelo
  },
  elena: {
    id: 'elena',
    name: 'Elena',
    about: 'Живёт в Консуэгре, у мельниц.',
    emoji: '👵🏼',
    color: '#a0522d',
    voice: 'RTuKyXJgRGAQSx8Qz8Mf', // Tete
  },
  extraM: {
    id: 'extraM',
    name: 'Прохожий',
    about: 'Эпизодический персонаж.',
    emoji: '🧑',
    color: '#5b6b7a',
    voice: 'WWVK6dYMrl0ZHnHT7cRj', // Alejandro Castellanos
  },
  extraF: {
    id: 'extraF',
    name: 'Прохожая',
    about: 'Эпизодический персонаж.',
    emoji: '👩',
    color: '#5b6b7a',
    voice: 'ERYLdjEaddaiN9sDjaMX', // Gabriela Sainz
  },
};

// Голос, которым звучит реплика: у героя — по выбранному роду.
export function voiceOf(id: CharId, gender: 'm' | 'f' = 'm'): string {
  const c = CHARACTERS[id];
  return id === 'hero' && gender === 'f' ? c.voiceF ?? '' : c.voice;
}
