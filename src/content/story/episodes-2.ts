import type { Episode } from '../../types';

// Глава 2. «Своя квартира» (уроки 9–14)
export const EPISODES_2: Episode[] = [
  {
    lessonId: 'd12',
    title: 'Письмо за ящиком',
    place: 'Новая квартира на последнем этаже',
    recap: 'Донья Кармен согласилась сдать вам квартиру на последнем этаже. В спальне стоит старый красный комод — его нижний ящик не открывается.',
    intro: [
      'Донья Кармен ведёт вас наверх. Ключ поворачивается в замке со скрипом.',
      'Квартира старая, но светлая: высокие потолки, деревянные ставни и вид на черепичные крыши квартала.',
    ],
    cast: ['carmen'],
    scene: [
      { kind: 'narr', ru: 'Пять этажей без лифта. Донья Кармен поднимается быстрее вас.' },
      {
        kind: 'line',
        who: 'carmen',
        es: '¿Está cansad{o|a}?',
        ru: 'Вы устали?',
        note: 'Está — форма estar для «вы» (usted). Донья Кармен обращается к вам на «вы».',
      },
      {
        kind: 'reply',
        ok: { es: 'Sí, estoy cansad{o|a}.', ru: 'Да, я устал{|а}.' },
        bad: [
          {
            es: 'Sí, soy cansad{o|a}.',
            ru: 'Да, я по натуре устал{ый|ая}.',
            why: 'Усталость — это состояние «сейчас», поэтому estar: estoy cansad{o|a}. Ser — для постоянного: soy ruso.',
          },
          {
            es: 'Sí, tengo cansad{o|a}.',
            ru: 'Да, имею усталость.',
            why: 'Cansado — прилагательное, с ним нужен estar. С tener говорят: tengo sueño, tengo frío.',
          },
        ],
      },
      { kind: 'line', who: 'carmen', es: 'Pase, pase. Aquí está el salón.', ru: 'Проходите, проходите. Вот гостиная.' },
      {
        kind: 'line',
        who: 'carmen',
        es: 'Hay una mesa y dos sillas.',
        ru: 'Здесь есть стол и два стула.',
        note: 'Hay — «есть, имеется». Одно слово на всё: hay una mesa, hay dos sillas.',
      },
      {
        kind: 'reply',
        ok: { es: '¿Hay una cocina?', ru: 'А кухня есть?' },
        bad: [
          {
            es: '¿Está una cocina?',
            ru: 'Кухня находится?',
            why: 'Есть ли что-то вообще — спрашивают через hay. Estar — где находится конкретная вещь: ¿Dónde está la cocina?',
          },
          {
            es: '¿Es una cocina?',
            ru: 'Это кухня?',
            why: '¿Es una cocina? — «Это кухня?». А вы хотите узнать, есть ли кухня: ¿Hay una cocina?',
          },
        ],
      },
      { kind: 'line', who: 'carmen', es: 'Sí, claro. La cocina es pequeña, pero bonita.', ru: 'Да, конечно. Кухня маленькая, но красивая.' },
      {
        kind: 'line',
        who: 'carmen',
        es: 'El dormitorio está aquí. Hay una cama grande.',
        ru: 'Спальня здесь. Там большая кровать.',
        note: 'Сравните: el dormitorio está aquí — где находится известная комната (estar). Hay una cama — что в ней есть (hay).',
      },
      {
        kind: 'reply',
        ok: { es: '¿Y el baño? ¿Dónde está?', ru: 'А ванная? Где она?' },
        bad: [
          {
            es: '¿Y el baño? ¿Dónde hay?',
            ru: 'А ванная? Где имеется?',
            why: 'Про конкретную вещь (el baño) спрашивают «где» через estar: ¿Dónde está?',
          },
          {
            es: '¿Y el baño? ¿Dónde es?',
            ru: 'А ванная? Где является?',
            why: 'Где что находится — это estar, а не ser: ¿Dónde está?',
          },
        ],
      },
      { kind: 'line', who: 'carmen', es: 'Está al lado de la cocina.', ru: 'Рядом с кухней.' },
      { kind: 'narr', ru: 'В спальне у стены стоит старый красный комод. Нижний ящик не открывается.' },
      {
        kind: 'reply',
        ok: { es: 'La cómoda es muy bonita.', ru: 'Комод очень красивый.' },
        bad: [
          { es: 'El cómoda es muy bonita.', ru: 'Комод очень красивый.', why: 'Cómoda — женского рода, значит артикль la: la cómoda.' },
          {
            es: 'La cómoda es muy bonito.',
            ru: 'Комод очень красивый.',
            why: 'Прилагательное согласуется с существительным: la cómoda — bonita.',
          },
        ],
      },
      {
        kind: 'line',
        who: 'carmen',
        es: 'Sí. Es vieja. Es de mi familia.',
        ru: 'Да. Он старый. Это вещь моей семьи.',
        note: 'Es vieja — ser описывает, какая вещь сама по себе. Es de mi familia — ser de: «чья».',
      },
      { kind: 'line', who: 'carmen', es: 'Bueno… ¿Quiere el piso?', ru: 'Ну что… Берёте квартиру?' },
      {
        kind: 'reply',
        ok: { es: 'Sí, quiero el piso. ¡Gracias!', ru: 'Да, беру квартиру. Спасибо!' },
        bad: [
          { es: 'Sí, quiero la piso.', ru: 'Да, хочу квартиру.', why: 'Piso — мужского рода: el piso.' },
          {
            es: 'Sí, tengo el piso.',
            ru: 'Да, у меня есть квартира.',
            why: 'Tengo — «у меня есть». Квартира ещё не ваша — вы её хотите: quiero el piso.',
          },
        ],
      },
      { kind: 'line', who: 'carmen', es: 'Muy bien. Aquí tiene las llaves.', ru: 'Хорошо. Вот ключи.' },
      { kind: 'narr', ru: 'Донья Кармен уходит вниз. Вы дёргаете упрямый ящик комода — и он с грохотом вылетает на пол.' },
      { kind: 'narr', ru: 'За ящиком, в пыли, лежит старый конверт. Пожелтевшая бумага, аккуратный почерк: «Querida Elena…»' },
    ],
    hook: 'В конверте — письмо, подписанное одной буквой «M.», и фотография: мельница и смеющаяся девушка. Внизу дата: «Madrid, mayo de 1978». Кто такая Елена? И почему письмо так и не отправили?',
  },
];
