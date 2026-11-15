import type { Item, Lesson } from '../types';
import { items, turn } from './helpers.ts';
import { week2 } from './lessons-w2.ts';
import { week3 } from './lessons-w3.ts';
import { week4 } from './lessons-w4.ts';

const full: Lesson[] = [
  {
    id: 'd01',
    day: 1,
    title: 'Привет! Приветствия',
    emoji: '👋',
    goal: 'Здороваться, прощаться и вежливо благодарить',
    tip: {
      title: 'Испанский читается почти как пишется',
      text: 'Буква H не читается: «hola» звучит как «ола». Ударение — на предпоследний слог, если слово заканчивается на гласную, n или s. Остальные случаи отмечены значком ´ (adiós, café).',
    },
    items: items('d01', [
      ['Hola', 'Привет'],
      ['Buenos días', 'Доброе утро', 'Говорят до обеда'],
      ['Buenas tardes', 'Добрый день', 'После обеда и до вечера'],
      ['Buenas noches', 'Добрый вечер / спокойной ночи', 'Говорят и при встрече вечером, и перед сном'],
      ['Adiós', 'До свидания'],
      ['Hasta luego', 'Пока, до скорого'],
      ['Hasta mañana', 'До завтра'],
      ['Por favor', 'Пожалуйста', 'Когда о чём-то просите'],
      ['Gracias', 'Спасибо'],
      ['De nada', 'Не за что'],
      ['Sí', 'Да'],
      ['No', 'Нет'],
      ['Perdón', 'Извините'],
    ]),
    dialogue: {
      scene: 'Вы заходите в кафе утром.',
      npc: 'Carlos',
      turns: [
        turn('¡Buenos días!', 'Доброе утро!', ['Buenos días', 'Доброе утро'], [['Buenas noches', 'Добрый вечер'], ['Adiós', 'До свидания']]),
        turn('Aquí tiene.', 'Вот, пожалуйста.', ['Gracias', 'Спасибо'], [['De nada', 'Не за что'], ['No', 'Нет']]),
        turn('Gracias a usted. ¡Hasta luego!', 'Вам спасибо. До скорого!', ['Hasta luego', 'До скорого'], [['Buenos días', 'Доброе утро'], ['Por favor', 'Пожалуйста']]),
      ],
    },
  },
  {
    id: 'd02',
    day: 2,
    title: 'Знакомство',
    emoji: '🤝',
    goal: 'Назвать имя, спросить «как дела?» и сказать, откуда вы',
    tip: {
      title: 'Знаки ¿ и ¡',
      text: 'В испанском вопрос и восклицание открываются перевёрнутым знаком: ¿Cómo estás? Это сразу показывает интонацию. «Tú» — на «ты», «usted» — вежливое «вы».',
    },
    items: items('d02', [
      ['Me llamo Ana', 'Меня зовут Ана'],
      ['¿Cómo te llamas?', 'Как тебя зовут?'],
      ['Mucho gusto', 'Очень приятно'],
      ['Encantado', 'Рад познакомиться', 'Женщина говорит «encantada»'],
      ['¿Cómo estás?', 'Как дела?'],
      ['Estoy bien', 'У меня всё хорошо'],
      ['Muy bien, gracias', 'Очень хорошо, спасибо'],
      ['¿Y tú?', 'А ты?'],
      ['Más o menos', 'Так себе'],
      ['¿De dónde eres?', 'Откуда ты?'],
      ['Soy de Rusia', 'Я из России'],
    ]),
    dialogue: {
      scene: 'Вы знакомитесь с Пабло на вечеринке.',
      npc: 'Pablo',
      turns: [
        turn('¡Hola! ¿Cómo te llamas?', 'Привет! Как тебя зовут?', ['Me llamo Ana', 'Меня зовут Ана'], [['Estoy bien', 'У меня всё хорошо'], ['Soy de Rusia', 'Я из России']]),
        turn('Mucho gusto. ¿De dónde eres?', 'Очень приятно. Откуда ты?', ['Soy de Rusia', 'Я из России'], [['Me llamo Ana', 'Меня зовут Ана'], ['Hasta mañana', 'До завтра']]),
        turn('¿Cómo estás?', 'Как дела?', ['Muy bien, gracias. ¿Y tú?', 'Очень хорошо, спасибо. А у тебя?'], [['De nada', 'Не за что'], ['Adiós', 'До свидания']]),
      ],
    },
  },
  {
    id: 'd03',
    day: 3,
    title: 'Кто я? Глагол ser',
    emoji: '🪪',
    goal: 'Говорить «я — …», «это — …», представлять людей',
    tip: {
      title: 'Ser = «быть» (постоянное)',
      text: 'soy (я), eres (ты), es (он/она), somos (мы), sois (вы), son (они). В русском «есть» в настоящем времени опускается, в испанском глагол нужен всегда: «Soy estudiante» = «Я студент».',
    },
    items: items('d03', [
      ['Soy estudiante', 'Я студент(ка)'],
      ['Soy ruso', 'Я русский', 'Женщина: «Soy rusa»'],
      ['Eres amable', 'Ты любезный'],
      ['Él es mi amigo', 'Он мой друг'],
      ['Ella es mi amiga', 'Она моя подруга'],
      ['Somos amigos', 'Мы друзья'],
      ['¿Quién es?', 'Кто это?'],
      ['¿Qué es esto?', 'Что это?'],
      ['Es un libro', 'Это книга'],
      ['Es mi hermano', 'Это мой брат'],
      ['Es mi hermana', 'Это моя сестра'],
    ]),
    dialogue: {
      scene: 'Карлос показывает вам фотографии.',
      npc: 'Carlos',
      turns: [
        turn('¿Quién es ella?', 'Кто она?', ['Es mi hermana', 'Это моя сестра'], [['Es un libro', 'Это книга'], ['Soy estudiante', 'Я студент']]),
        turn('¿Qué es esto?', 'Что это?', ['Es un libro', 'Это книга'], [['Es mi amigo', 'Это мой друг'], ['Somos amigos', 'Мы друзья']]),
        turn('¿Y tú? ¿Quién eres?', 'А ты? Кто ты?', ['Soy estudiante', 'Я студент'], [['Es mi hermano', 'Это мой брат'], ['Hasta luego', 'До скорого']]),
      ],
    },
  },
  {
    id: 'd04',
    day: 4,
    title: 'Числа от 0 до 10',
    emoji: '🔢',
    goal: 'Считать до десяти и называть свой возраст',
    tip: {
      title: 'Возраст — «иметь», а не «быть»',
      text: 'По-испански не «мне двадцать лет», а «tengo veinte años» — буквально «я имею двадцать лет». Глагол tener мы подробно разберём на 8-й день.',
    },
    items: items('d04', [
      ['cero', '0'],
      ['uno', '1'],
      ['dos', '2'],
      ['tres', '3'],
      ['cuatro', '4'],
      ['cinco', '5'],
      ['seis', '6'],
      ['siete', '7'],
      ['ocho', '8'],
      ['nueve', '9'],
      ['diez', '10'],
      ['Tengo veinte años', 'Мне двадцать лет'],
      ['¿Cuántos años tienes?', 'Сколько тебе лет?'],
      ['Tengo dos hermanos', 'У меня двое братьев (брат и сестра)'],
    ]),
    dialogue: {
      scene: 'Вас спрашивают про возраст и семью.',
      npc: 'Lucía',
      turns: [
        turn('¿Cuántos años tienes?', 'Сколько тебе лет?', ['Tengo veinte años', 'Мне двадцать лет'], [['Soy de Rusia', 'Я из России'], ['Estoy bien', 'У меня всё хорошо']]),
        turn('¿Tienes hermanos?', 'У тебя есть братья или сёстры?', ['Tengo dos hermanos', 'У меня двое'], [['Es un libro', 'Это книга'], ['Hasta mañana', 'До завтра']]),
      ],
    },
  },
  {
    id: 'd05',
    day: 5,
    title: 'В кафе',
    emoji: '☕',
    goal: 'Заказать напиток, попросить счёт и спросить цену',
    tip: {
      title: 'Quiero — вежливая просьба',
      text: '«Quiero» — «я хочу». Для вежливости добавляйте «por favor». Артикль не нужен, когда вы заказываете: «Un café, por favor», «Con leche».',
    },
    items: items('d05', [
      ['Un café, por favor', 'Кофе, пожалуйста'],
      ['Quiero agua', 'Я хочу воды'],
      ['Quiero un té', 'Я хочу чай'],
      ['Con leche', 'С молоком'],
      ['Sin azúcar', 'Без сахара'],
      ['La cuenta, por favor', 'Счёт, пожалуйста'],
      ['¿Cuánto cuesta?', 'Сколько стоит?'],
      ['Está muy rico', 'Очень вкусно'],
      ['Tengo hambre', 'Я голоден'],
      ['Tengo sed', 'Я хочу пить'],
    ]),
    dialogue: {
      scene: 'Вы в кафе в Мадриде. Подходит официант.',
      npc: 'Camarero',
      turns: [
        turn('Buenas tardes. ¿Qué quiere?', 'Добрый день. Что желаете?', ['Un café, por favor', 'Кофе, пожалуйста'], [['Hasta luego', 'До скорого'], ['Me llamo Ana', 'Меня зовут Ана']]),
        turn('¿Con leche o sin leche?', 'С молоком или без?', ['Con leche', 'С молоком'], [['Soy de Rusia', 'Я из России'], ['Buenos días', 'Доброе утро']]),
        turn('Aquí tiene su café.', 'Вот ваш кофе.', ['Gracias', 'Спасибо'], [['No', 'Нет'], ['Adiós', 'До свидания']]),
      ],
    },
  },
];

const upcoming: [string, string][] = [
  ['Артикли el / la', '🏷️'],
  ['Род и число', '🔀'],
  ['Глагол tener', '🎒'],
  ['Глагол estar: где и как', '📍'],
  ['Семья', '👨‍👩‍👧'],
  ['Цвета и описание', '🎨'],
  ['Дом и комнаты', '🏠'],
  ['Еда и ресторан', '🍽️'],
  ['Закрепление недели 2', '🏆'],
  ['Глаголы на -ar', '🏃'],
  ['Глаголы на -er / -ir', '📖'],
  ['Время и часы', '🕒'],
  ['Дни недели и месяцы', '📅'],
  ['Город и места', '🏙️'],
  ['Как пройти', '🧭'],
  ['Транспорт', '🚇'],
  ['Покупки', '🛍️'],
  ['Одежда и размеры', '👕'],
  ['Погода', '☀️'],
  ['Хобби', '🎸'],
  ['Распорядок дня', '⏰'],
  ['Прошлое время (pretérito)', '⏪'],
  ['Планы: ir a + глагол', '🗓️'],
  ['Отель и путешествия', '🧳'],
  ['Финал: большой диалог', '🎓'],
];

const stubs: Lesson[] = upcoming.map(([title, emoji], i) => ({
  id: `d${String(i + 6).padStart(2, '0')}`,
  day: i + 6,
  title,
  emoji,
  goal: 'Скоро',
  items: [],
}));

const written = new Map<string, Lesson>([...week2, ...week3, ...week4].map((l) => [l.id, l]));

// Написанный урок заменяет заглушку с тем же id; недописанные дни остаются «Скоро».
export const COURSE: Lesson[] = [...full, ...stubs.map((s) => written.get(s.id) ?? s)];

export const ALL_ITEMS: Item[] = COURSE.flatMap((l) => l.items);
