import type { Episode } from '../../types';

// Глава 2. «Своя квартира» (уроки 9–14)
export const EPISODES_2: Episode[] = [
  {
    lessonId: 'd09',
    title: 'Где ты?',
    place: 'Puerta de Alcalá',
    intro: [
      'Донья Кармен назначила встречу у ворот Пуэрта-де-Алькала: «A las doce. Sea puntual». Будьте пунктуальны.',
      'Вы пришли на час раньше и гуляете вокруг ворот. Звонит Пабло.',
    ],
    cast: ['pablo'],
    postcard: 'alcala',
    scene: [
      {
        kind: 'line',
        who: 'pablo',
        es: '¡Hola! ¿Dónde estás?',
        ru: 'Привет! Ты где?',
        note: 'Где кто находится — estar: ¿dónde estás? — estoy aquí.',
      },
      {
        kind: 'reply',
        ok: { es: 'Estoy en la Puerta de Alcalá.', ru: 'Я у ворот Пуэрта-де-Алькала.' },
        bad: [
          { es: 'Soy en la Puerta de Alcalá.', ru: 'Я есть у ворот.', why: 'Место — это estar: estoy en…' },
          { es: 'Está en la Puerta de Alcalá.', ru: 'Он у ворот.', why: 'Está — «он/она находится». О себе: estoy.' },
        ],
      },
      { kind: 'line', who: 'pablo', es: '¿Y cómo estás? ¿Nervios{o|a}?', ru: 'И как ты? Нервничаешь?' },
      {
        kind: 'reply',
        ok: { es: 'Sí, un poco. Pero estoy content{o|a}.', ru: 'Да, немного. Но я {доволен|довольна}.' },
        bad: [
          { es: 'Sí, un poco. Pero soy content{o|a}.', ru: 'Да, немного. Но я по натуре {довольный|довольная}.', why: 'Настроение сейчас — estar: estoy content{o|a}.' },
          {
            es: 'Sí, un poco. Pero estoy content{a|o}.',
            ru: 'Да, немного. Но я {довольна|доволен}.',
            why: 'Окончание — по роду говорящего: {вы мужчина — contento|вы женщина — contenta}.',
          },
        ],
      },
      { kind: 'line', who: 'pablo', es: 'Lucía y yo estamos en el café de la esquina.', ru: 'Мы с Лусией сидим в кафе на углу.' },
      {
        kind: 'reply',
        ok: { es: '¿Estáis juntos? ¡Qué bien!', ru: 'Вы вместе? Здорово!' },
        bad: [
          { es: '¿Sois juntos? ¡Qué bien!', ru: 'Вы по натуре вместе?', why: '«Вместе, рядом» сейчас — estar: estáis juntos.' },
          {
            es: '¿Están juntos? ¡Qué bien!',
            ru: 'Они вместе? Здорово!',
            why: 'В Испании друзьям на «ты» во множественном говорят vosotros: ¿estáis…? Están — «они» или вежливое «вы».',
          },
        ],
      },
      { kind: 'line', who: 'pablo', es: '¡No, no! Bueno… sí. Es un café. Solo un café.', ru: 'Нет-нет! Ну… да. Это просто кофе. Только кофе.' },
      { kind: 'narr', ru: 'Пабло смущённо кашляет в трубку. А к воротам подходит пожилая дама в тёмном костюме и с жемчугом на шее.' },
      { kind: 'line', who: 'pablo', es: 'Cuidado con doña Carmen…', ru: 'Осторожнее с доньей Кармен…' },
    ],
    hook: '«Cuidado con doña Carmen…» — шепчет Пабло. Дама в тёмном костюме уже смотрит прямо на вас.',
  },

  {
    lessonId: 'd10',
    title: 'Донья Кармен',
    place: 'Квартира доньи Кармен',
    intro: [
      'Оказалось, донья Кармен живёт в том же доме, что и Лусия, — этажом ниже квартиры, которую сдаёт.',
      'Её гостиная похожа на музей: кружевные салфетки, часы с маятником и десятки фотографий в рамках.',
    ],
    cast: ['carmen'],
    scene: [
      { kind: 'line', who: 'carmen', es: 'Siéntese. ¿Tiene usted familia en Madrid?', ru: 'Садитесь. У вас есть семья в Мадриде?' },
      {
        kind: 'reply',
        ok: { es: 'No, mi familia está en Rusia.', ru: 'Нет, моя семья в России.' },
        bad: [
          { es: 'No, su familia está en Rusia.', ru: 'Нет, ваша семья в России.', why: 'Su — «его, её, ваш». О своей семье — mi familia.' },
          { es: 'No, mis familia está en Rusia.', ru: 'Нет, мои семья в России.', why: 'Familia — одна: mi familia. Mis — для нескольких: mis padres.' },
        ],
      },
      {
        kind: 'line',
        who: 'carmen',
        es: '¿Y sus padres? ¿Están bien?',
        ru: 'А ваши родители? У них всё хорошо?',
        note: 'Su / sus — «ваш, ваши», когда говорят на «вы» (usted). Sus padres — «ваши родители».',
      },
      {
        kind: 'reply',
        ok: { es: 'Sí, mis padres están bien, gracias.', ru: 'Да, у моих родителей всё хорошо, спасибо.' },
        bad: [
          { es: 'Sí, sus padres están bien, gracias.', ru: 'Да, у ваших родителей всё хорошо.', why: 'Sus padres — «ваши (его) родители». О своих: mis padres.' },
          { es: 'Sí, mi padres están bien, gracias.', ru: 'Да, мой родители…', why: 'Padres — множественное число: mis padres.' },
        ],
      },
      { kind: 'narr', ru: 'На комоде — фотографии: свадьба, дети на пляже, пожилая пара.' },
      { kind: 'line', who: 'carmen', es: 'Esta es mi hija, y este es mi nieto. Mi familia es grande.', ru: 'Это моя дочь, а это мой внук. У меня большая семья.' },
      { kind: 'narr', ru: 'В углу стоит фото молодого человека с фотоаппаратом на шее. Вы показываете на него.' },
      {
        kind: 'reply',
        ok: { es: '¿Y él? ¿Es su hijo?', ru: 'А он? Это ваш сын?' },
        bad: [
          { es: '¿Y él? ¿Es tu hijo?', ru: 'А он? Это твой сын?', why: 'С доньей Кармен вы на «вы»: su hijo, а не tu hijo.' },
          { es: '¿Y él? ¿Es su hija?', ru: 'А он? Это ваша дочь?', why: 'Hija — «дочь». На фото мужчина: hijo.' },
        ],
      },
      { kind: 'line', who: 'carmen', es: 'No… No es nada. Bueno, ¿quiere ver el piso?', ru: 'Нет… Это неважно. Ну что, хотите посмотреть квартиру?' },
      { kind: 'narr', ru: 'Донья Кармен быстро переворачивает фотографию лицом вниз.' },
    ],
    hook: 'Донья Кармен перевернула фото молодого человека с фотоаппаратом лицом вниз. Кто он — и почему о нём нельзя говорить?',
  },

  {
    lessonId: 'd11',
    title: 'Какая она?',
    place: 'Лестница в доме на Huertas',
    intro: [
      'Квартира на последнем этаже вам понравилась. Донья Кармен сказала: «Lo pienso» — «Я подумаю».',
      'Вы спускаетесь по лестнице — и сталкиваетесь с Лусией, которая, конечно, всё хочет знать.',
    ],
    cast: ['lucia'],
    scene: [
      { kind: 'line', who: 'lucia', es: '¿Y? ¿Cómo es el piso? ¿Es grande?', ru: 'Ну что? Какая квартира? Большая?' },
      {
        kind: 'reply',
        ok: { es: 'No, es pequeño, pero muy bonito.', ru: 'Нет, маленькая, но очень красивая.' },
        bad: [
          { es: 'No, es pequeña, pero muy bonita.', ru: 'Нет, маленькая, но красивая.', why: 'Piso — мужской род: pequeño, bonito. (В русском «квартира» — женского, а в испанском el piso.)' },
          { es: 'No, está pequeño, pero muy bonito.', ru: 'Нет, сейчас маленькая…', why: 'Какая квартира сама по себе — ser: es pequeño.' },
        ],
      },
      {
        kind: 'line',
        who: 'lucia',
        es: '¿De qué color son las paredes?',
        ru: 'Какого цвета стены?',
        note: 'Прилагательное стоит после слова и согласуется с ним: las paredes blancas, un libro rojo.',
      },
      {
        kind: 'reply',
        ok: { es: 'Las paredes son blancas.', ru: 'Стены белые.' },
        bad: [
          { es: 'Las paredes son blancos.', ru: 'Стены белые (м. р.).', why: 'Paredes — женский род, множественное число: blancas.' },
          { es: 'Las paredes son blanca.', ru: 'Стены белая.', why: 'Paredes — множественное число: blancas.' },
        ],
      },
      { kind: 'line', who: 'lucia', es: '¿Y los muebles? ¿Son nuevos?', ru: 'А мебель? Новая?' },
      {
        kind: 'reply',
        ok: { es: 'No, son viejos. Hay una cómoda roja.', ru: 'Нет, старая. Там красный комод.' },
        bad: [
          { es: 'No, son viejas. Hay una cómoda roja.', ru: 'Нет, старые (ж. р.).', why: 'Muebles — мужской род: viejos.' },
          { es: 'No, son nuevos. Hay una cómoda roja.', ru: 'Нет, новые.', why: '«Нет, они новые» — противоречие 🙂 Мебель старая: no, son viejos.' },
        ],
      },
      { kind: 'line', who: 'lucia', es: '¿Una cómoda roja? ¡Qué bonita! Una cómoda vieja siempre tiene secretos…', ru: 'Красный комод? Как красиво! У старого комода всегда есть секреты…' },
      { kind: 'narr', ru: 'Вы вспоминаете: нижний ящик красного комода так и не открылся, сколько вы ни тянули.' },
    ],
    hook: 'Донья Кармен звонит вечером: «El piso es suyo» — квартира ваша. А в спальне ждёт старый красный комод с ящиком, который не открывается.',
  },

  {
    lessonId: 'd12',
    title: 'Письмо за ящиком',
    place: 'Новая квартира на последнем этаже',
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

  {
    lessonId: 'd13',
    title: 'Ужин и догадка',
    place: 'Таверна у рынка Сан-Мигель',
    intro: [
      'Вечером Карлос ведёт вас в старую таверну у рынка Сан-Мигель: «Здесь лучшие крокеты Мадрида».',
      'Конверт с письмом лежит у вас в сумке. Вы так и не решились никому его показать.',
    ],
    cast: ['carlos', 'extraM'],
    postcard: 'sanmiguel',
    scene: [
      { kind: 'line', who: 'extraM', as: 'Camarero', es: 'Buenas noches. ¿Cuántos son?', ru: 'Добрый вечер. Сколько вас?' },
      {
        kind: 'reply',
        ok: { es: 'Una mesa para dos, por favor.', ru: 'Столик на двоих, пожалуйста.' },
        bad: [
          { es: 'Un mesa para dos, por favor.', ru: 'Столик на двоих.', why: 'Mesa — женский род: una mesa.' },
          { es: 'Una mesa por dos, por favor.', ru: 'Столик за двоих.', why: '«На двоих» — para dos. Por значит «за, через».' },
        ],
      },
      { kind: 'line', who: 'carlos', es: 'La carta, por favor. ¿Qué recomienda?', ru: 'Меню, пожалуйста. Что посоветуете?' },
      { kind: 'line', who: 'extraM', as: 'Camarero', es: 'Hoy el pescado está muy rico. Y la sopa de la casa.', ru: 'Сегодня очень вкусная рыба. И фирменный суп.' },
      {
        kind: 'reply',
        ok: { es: 'Quiero pescado y una ensalada, por favor.', ru: 'Мне рыбу и салат, пожалуйста.' },
        bad: [
          { es: 'Quiero pescado y un ensalada, por favor.', ru: 'Мне рыбу и салат.', why: 'Ensalada — женский род: una ensalada.' },
          { es: 'Quiero pescados y una ensalada, por favor.', ru: 'Мне рыбы (много) и салат.', why: 'Рыбу как блюдо заказывают в единственном числе: quiero pescado.' },
        ],
        note: 'Quiero — вежливо и обычно, если добавить por favor. Ещё мягче — quisiera («я бы хотел»).',
      },
      { kind: 'line', who: 'carlos', es: 'Para mí, pollo con arroz. ¡Y vino!', ru: 'Мне курицу с рисом. И вина!' },
      { kind: 'narr', ru: 'Пока ждёте еду, вы решаетесь — и показываете Карлосу фотографию из конверта.' },
      { kind: 'line', who: 'carlos', es: '¡Esto es La Mancha! Son los molinos de Consuegra.', ru: 'Это же Ла-Манча! Мельницы Консуэгры.' },
      {
        kind: 'reply',
        ok: { es: '¿Y quién es la chica?', ru: 'А кто эта девушка?' },
        bad: [
          { es: '¿Y qué es la chica?', ru: 'А что такое эта девушка?', why: 'О человеке — quién: ¿quién es la chica?' },
          { es: '¿Y quién es el chica?', ru: 'А кто этот девушка?', why: 'Chica — женский род: la chica.' },
        ],
      },
      { kind: 'line', who: 'carlos', es: 'No sé. Pero es muy guapa. ¿Y quién es Elena?', ru: 'Не знаю. Но она очень красивая. А кто такая Елена?' },
    ],
    hook: '«Los molinos de Consuegra», — сказал Карлос. Но кто такая Елена — не знает никто.',
  },

  {
    lessonId: 'd14',
    title: 'Новоселье',
    place: 'Ваша квартира',
    intro: [
      'Новоселье! В вашей квартире — Лусия и Пабло. На столе суп, хлеб и тортилья от Карлоса: сам он не смог прийти.',
      'Пора показать друзьям находку.',
    ],
    cast: ['lucia', 'pablo'],
    scene: [
      {
        kind: 'line',
        who: 'lucia',
        es: '¡Tu piso es muy bonito! ¿Dónde está la carta?',
        ru: 'У тебя очень красивая квартира! Где письмо?',
        note: 'La carta — и «меню», и «письмо». Что имеется в виду, ясно из ситуации.',
      },
      {
        kind: 'reply',
        ok: { es: 'Está en la cómoda roja, en el dormitorio.', ru: 'В красном комоде, в спальне.' },
        bad: [
          { es: 'Es en la cómoda roja, en el dormitorio.', ru: 'Является в комоде.', why: 'Где находится — estar: está en la cómoda.' },
          { es: 'Hay en la cómoda roja, en el dormitorio.', ru: 'Имеется в комоде.', why: 'Про конкретную вещь (la carta) — está. Hay — когда говорим, что что-то вообще есть.' },
        ],
      },
      { kind: 'narr', ru: 'Вы приносите конверт. Пабло берёт фото мельницы и замирает.' },
      { kind: 'line', who: 'pablo', es: '¿Molinos? ¡Mi lugar favorito!', ru: 'Мельницы? Моё любимое место!' },
      {
        kind: 'reply',
        ok: { es: '¡Sí! Como tu foto favorita.', ru: 'Да! Как на твоём любимом фото.' },
        bad: [
          { es: '¡Sí! Como su foto favorita.', ru: 'Да! Как на его фото.', why: 'С Пабло вы на «ты»: tu foto.' },
          { es: '¡Sí! Como tu fotos favoritas.', ru: 'Да! Как твои фото.', why: 'Фото одно: tu foto favorita.' },
        ],
      },
      { kind: 'line', who: 'lucia', es: 'A ver la carta… ¡Un momento!', ru: 'Дай-ка письмо… Минутку!' },
      { kind: 'narr', ru: 'Лусия подносит конверт к лампе. В углу бумаги — бледная печать в виде пера.' },
      {
        kind: 'line',
        who: 'lucia',
        es: '¡Este papel es de mi librería!',
        ru: 'Это бумага из моего книжного!',
        note: 'Es de — «принадлежит, откуда»: el papel es de mi librería.',
      },
      {
        kind: 'reply',
        ok: { es: '¿De tu librería? ¡Qué misterio!', ru: 'Из твоего книжного? Вот это загадка!' },
        bad: [
          { es: '¿De mi librería? ¡Qué misterio!', ru: 'Из моего книжного?', why: 'Mi — «мой». Книжный её: tu librería.' },
          { es: '¿De su librería? ¡Qué misterio!', ru: 'Из вашего книжного?', why: 'С Лусией вы на «ты»: tu librería.' },
        ],
      },
      { kind: 'line', who: 'lucia', es: 'Sí. Es nuestro papel… de 1978.', ru: 'Да. Это наша бумага… 1978 года.' },
    ],
    hook: 'Письмо написано на фирменной бумаге книжного «La Pluma» — почти полвека назад. Кто его писал — продавец? покупатель?',
  },
];
