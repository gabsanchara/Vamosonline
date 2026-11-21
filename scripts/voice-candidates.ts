// Кандидаты в голоса персонажей (библиотека ElevenLabs, кастильский акцент — peninsular, es-ES).
// npm run voices — озвучить пробную фразу каждым кандидатом и собрать страницу прослушивания.
import type { CharId } from '../src/types.ts';

export interface Candidate {
  id: string; // voice_id в библиотеке ElevenLabs
  name: string;
  note: string; // какой голос, по-русски
}

export interface Role {
  role: CharId | 'heroF';
  title: string;
  who: string;
  sample: string;
  candidates: Candidate[];
}

export const ROLES: Role[] = [
  {
    role: 'hero',
    title: 'Герой (мужской голос ученика)',
    who: 'Реплики героя, если ученик выбрал «в мужском роде». Естественный, молодой.',
    sample: 'Sí, estoy cansado. Pero Madrid es muy bonito.',
    candidates: [
      { id: 'jtfxplhZxnBzQICVwoQn', name: 'David Martin — Friendly', note: 'молодой, дружелюбный, «от первого лица»' },
      { id: 'Nh2zY9kknu6z4pZy6FhD', name: 'David Martin — Balanced', note: 'молодой, уверенный, ровный' },
      { id: '9iaRiYAiGlZImkI1Ruyh', name: 'Antonio', note: 'молодой, выразительный' },
    ],
  },
  {
    role: 'heroF',
    title: 'Героиня (женский голос ученицы)',
    who: 'Реплики героя, если ученица выбрала «в женском роде». Естественный, молодой.',
    sample: 'Sí, estoy cansada. Pero Madrid es muy bonito.',
    candidates: [
      { id: 'gD1IexrzCvsXPHUuT0s3', name: 'Sara Martin — Young', note: 'молодая, вдумчивая' },
      { id: 'dNjJKg63Fr5AXwIdkATa', name: 'Cristina', note: 'тёплая, мягкая, спокойная' },
      { id: 'yiWEefwu5z3DQCM79clN', name: 'Laura López', note: 'яркая, чёткая, динамичная' },
    ],
  },
  {
    role: 'lucia',
    title: 'Lucía',
    who: 'Соседка из книжного: смешливая, быстрая, обожает тайны.',
    sample: '¡Ay! ¡Perdón, perdón! Me llamo Lucía. ¡Esta librería tiene muchos secretos!',
    candidates: [
      { id: '1eHrpOW5l98cxiSRjbzJ', name: 'Raquel', note: 'молодая, звонкая, весёлая' },
      { id: '3DPhHWXDY263XJ1d2EPN', name: 'Linda Fiore', note: 'живая, задорная, «с перчинкой»' },
      { id: 'SaqYcK3ZpDKBAImA8AdW', name: 'Jane Doe', note: 'тёплая, доверительная, мягкая' },
    ],
  },
  {
    role: 'carlos',
    title: 'Carlos',
    who: 'Коллега-гурман и балагур.',
    sample: '¡Primero, un café! Aquí el café está muy rico. ¿Quieres un churro?',
    candidates: [
      { id: '7QQzpAyzlKTVrRzQJmTE', name: 'Dani', note: 'быстрый, энергичный, разговорный' },
      { id: 'RwzBDEn5f6FIgpAjH9YN', name: 'Gabriel Blanco', note: 'бодрый, обаятельный' },
      { id: 'ZCh4e9eZSUf41K4cmCEL', name: 'Emilio', note: 'тёплый, плотный, постарше' },
    ],
  },
  {
    role: 'pablo',
    title: 'Pablo',
    who: 'Фотограф: спокойный, немногословный, тайно влюблён в Лусию.',
    sample: 'Mi lugar favorito: los molinos de La Mancha. Es muy bonito.',
    candidates: [
      { id: 'y6WtESLj18d0diFRruBs', name: 'David Martin — Calm', note: 'спокойный, ясный, элегантный' },
      { id: '1MxuWc12WPRxDkgfT3kj', name: 'Efrayn', note: 'мягкий, с придыханием, безмятежный' },
      { id: 'HIYif4jehvc9P9A8DYbX', name: 'Pablo — Deep', note: 'низкий, уверенный' },
    ],
  },
  {
    role: 'carmen',
    title: 'Doña Carmen',
    who: 'Хозяйка квартиры: строгая, на «usted», но добрая.',
    sample: 'Pase, pase. Aquí está el salón. ¿Está cansado? Hay muchas escaleras.',
    candidates: [
      { id: 'YDDaC9XKjODs7hY78qEW', name: 'MariCarmen', note: 'ворчливая, торопливая, строгая' },
      { id: '9oWKy782oltLmeuOUdq7', name: 'Alegría Sana', note: 'зрелая, сдержанная, уверенная' },
      { id: 'KHCvMklQZZo0O30ERnVn', name: 'Sara Martin — Layered', note: 'спокойная, дружелюбная, средних лет' },
    ],
  },
  {
    role: 'miguel',
    title: 'Miguel',
    who: 'Автор письма, пожилой фотограф из Барселоны. Тихий.',
    sample: 'Conozco esta carta. Hace muchos años, yo era joven… Llévale la carta.',
    candidates: [
      { id: 'GojDwihhnL1f7RrBuXsJ', name: 'Luis', note: 'тёплый, зрелый, ~60 лет' },
      { id: '5egO01tkUjEzu7xSSE8M', name: 'Carmelo', note: 'зрелый, загадочный, глубокий' },
      { id: '7qXldmK3yFlWBHejdkpP', name: 'Julio', note: 'пожилой, низкий, чёткая дикция' },
    ],
  },
  {
    role: 'elena',
    title: 'Elena',
    who: 'Адресат письма, живёт у мельниц Консуэгры. Тёплая, с юмором.',
    sample: 'Cuando era joven, vivía en Madrid y trabajaba en una librería.',
    candidates: [
      { id: 'RTuKyXJgRGAQSx8Qz8Mf', name: 'Tete', note: 'медленная, мягкая, «с памятью лет»' },
      { id: 'ypIbR1aohyRSdDv25DPr', name: 'Rosa', note: 'пожилая, спокойная, искренняя' },
      { id: 'RgXx32WYOGrd7gFNifSf', name: 'Eva Dorado', note: 'тёплая, мягкая, средних лет' },
    ],
  },
  {
    role: 'extraM',
    title: 'Эпизодические мужчины',
    who: 'Официант, кассир, продавец, галерист, прохожие.',
    sample: '¡Buenos días! Aquí tiene su café. ¡Hasta mañana!',
    candidates: [
      { id: 'dabBScGPxrhZRE621vIm', name: 'Pablo — Upbeat', note: 'приветливый мужчина ~55 лет' },
      { id: 't9LRTh3y1ioN00e9wsNh', name: 'Aaron Abad', note: 'нейтральный, профессиональный' },
      { id: 'WWVK6dYMrl0ZHnHT7cRj', name: 'Alejandro Castellanos', note: 'ясный, уверенный, естественный' },
    ],
  },
  {
    role: 'extraF',
    title: 'Эпизодические женщины',
    who: 'Продавщица, администратор отеля, прохожие.',
    sample: 'Buenas tardes. ¿En qué puedo ayudarle?',
    candidates: [
      { id: 'UOIqAnmS11Reiei1Ytkc', name: 'Carolina', note: 'естественная, нейтральная, ясная' },
      { id: 'ERYLdjEaddaiN9sDjaMX', name: 'Gabriela Sainz', note: 'яркая, профессиональная' },
      { id: 'F0l0zg5A8H7I6s7HBQb9', name: 'Marta (голос сайта сейчас)', note: 'тёплая, чёткая — ей озвучены все фразы курса' },
    ],
  },
];
