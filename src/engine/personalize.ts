import type { Gender, Profile } from '../types';

// Шаблоны в тексте истории:
//   {name}   — имя ученика (только в тексте: заранее озвучить любое имя нельзя);
//   {м|ж}    — вариант для мужского и женского рода: «cansad{o|a}», «устал{|а}».
const GENDER_G = /\{([^{}|]*)\|([^{}|]*)\}/g;
const GENDER_1 = /\{([^{}|]*)\|([^{}|]*)\}/;

export function pickGender(text: string, gender: Gender): string {
  return text.replace(GENDER_G, (_, m: string, f: string) => (gender === 'f' ? f : m));
}

export function personalize(text: string, profile?: Partial<Profile>): string {
  const name = profile?.name?.trim() || 'вы';
  return pickGender(text.replace(/\{name\}/g, name), profile?.gender ?? 'm');
}

// Варианты текста по роду — для озвучки и проверки контента ({name} остаётся как есть).
export function genderVariants(text: string): { gender: Gender; text: string }[] {
  if (!GENDER_1.test(text)) return [{ gender: 'm', text }];
  return (['m', 'f'] as const).map((gender) => ({ gender, text: pickGender(text, gender) }));
}

export const hasName = (text: string) => text.includes('{name}');

// Шаблон корректен: фигурные скобки только в {name} или {x|y}.
export function templateProblem(text: string): string | null {
  const stripped = text.replace(/\{name\}/g, '').replace(GENDER_G, '');
  return /[{}]/.test(stripped) ? 'непарные или неизвестные фигурные скобки' : null;
}
