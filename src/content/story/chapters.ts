import type { Chapter } from '../../types';

export const CHAPTERS: Chapter[] = [
  { n: 1, title: 'Hola, Madrid', ru: 'Первые дни в новом городе', from: 1, to: 8 },
  { n: 2, title: 'Своя квартира', ru: 'Поиски жилья и странная находка', from: 9, to: 14 },
  { n: 3, title: 'Работа и город', ru: 'Агентство, улицы Мадрида и первая поездка', from: 15, to: 22 },
  { n: 4, title: 'Дорога на юг', ru: 'Севилья, Гранада и новые подсказки', from: 23, to: 30 },
  { n: 5, title: 'Тайна письма', ru: 'Барселона, Ла-Манча и развязка', from: 31, to: 40 },
];

export function chapterOf(day: number): Chapter | undefined {
  return CHAPTERS.find((c) => day >= c.from && day <= c.to);
}
