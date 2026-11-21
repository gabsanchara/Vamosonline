import type { Episode } from '../../types';

// Глава 3. «Работа и город» (уроки 15–22)
export const EPISODES_3: Episode[] = [
  {
    lessonId: 'd15',
    title: 'Новый проект',
    place: 'Турагентство «Viajes Sol»',
    intro: [
      'Понедельник. Исабель раздаёт задания: агентство запускает новый тур «Мадрид и Сеговия» для туристов из разных стран.',
      'Вам с Карлосом готовить его вместе.',
    ],
    cast: ['carlos', 'extraF', 'lucia'],
    scene: [
      { kind: 'line', who: 'extraF', as: 'Isabel', es: 'Carlos y tú trabajáis en un proyecto nuevo: Madrid y Segovia.', ru: 'Вы с Карлосом работаете над новым проектом: Мадрид и Сеговия.' },
      { kind: 'line', who: 'carlos', es: '¡Genial! ¿Hablas inglés? Hay turistas de Londres.', ru: 'Отлично! Ты говоришь по-английски? Есть туристы из Лондона.' },
      {
        kind: 'reply',
        ok: { es: 'Sí, hablo inglés y ruso.', ru: 'Да, я говорю по-английски и по-русски.' },
        bad: [
          { es: 'Sí, hablas inglés y ruso.', ru: 'Да, ты говоришь по-английски и по-русски.', why: 'Hablas — «ты говоришь». О себе: hablo.' },
          { es: 'Sí, hablar inglés y ruso.', ru: 'Да, говорить по-английски и по-русски.', why: 'Hablar — начальная форма. Нужно спрягать: hablo.' },
        ],
        note: 'Hablar: hablo, hablas, habla, hablamos, habláis, hablan. По этому образцу — сотни глаголов на -ar.',
      },
      { kind: 'line', who: 'carlos', es: 'Yo hablo un poco de inglés. Muy poco. Necesito ayuda.', ru: 'Я немного говорю по-английски. Совсем чуть-чуть. Мне нужна помощь.' },
      {
        kind: 'reply',
        ok: { es: 'No pasa nada. Trabajamos juntos.', ru: 'Ничего страшного. Работаем вместе.' },
        bad: [
          { es: 'No pasa nada. Trabajan juntos.', ru: 'Ничего страшного. Они работают вместе.', why: 'Trabajan — «они работают». Вы с Карлосом — «мы»: trabajamos.' },
          { es: 'No pasa nada. Trabajo juntos.', ru: 'Ничего страшного. Я работаю вместе.', why: 'Juntos — «вместе», значит «мы»: trabajamos juntos.' },
        ],
        note: 'Окончание -amos — всегда «мы»: trabajamos, hablamos, estudiamos.',
      },
      { kind: 'line', who: 'carlos', es: '¡Perfecto! Tú hablas con los turistas y yo compro los churros.', ru: 'Отлично! Ты говоришь с туристами, а я покупаю чуррос.' },
      { kind: 'narr', ru: 'Телефон вибрирует. Сообщение от Лусии.' },
      { kind: 'line', who: 'lucia', es: 'Miro los libros viejos de la librería… ¡Tengo un libro de 1978!', ru: 'Разбираю старые книги в магазине… У меня книга 1978 года!' },
      {
        kind: 'reply',
        ok: { es: '¿De 1978? ¡Necesito verlo!', ru: '1978 года? Мне нужно её увидеть!' },
        bad: [
          { es: '¿De 1978? ¡Necesitas verlo!', ru: '1978 года? Тебе нужно её увидеть!', why: 'Necesitas — «тебе нужно». Это нужно вам: necesito.' },
          { es: '¿De 1978? ¡Necesito ver!', ru: '1978 года? Мне нужно видеть!', why: 'Не хватает «её/это»: necesito verlo — «мне нужно это увидеть».' },
        ],
      },
    ],
    hook: 'Лусия нашла в книжном старую книгу учёта 1978 года. Что в ней записано?',
  },

  {
    lessonId: 'd16',
    title: 'Книга учёта',
    place: 'Бар у фотостудии Пабло',
    intro: [
      'Обеденный перерыв вы проводите с Пабло: у его фотостудии есть маленький бар, где все друг друга знают.',
      'Лусия обещала позвонить, как только дочитает старую книгу.',
    ],
    cast: ['pablo', 'lucia'],
    scene: [
      { kind: 'line', who: 'pablo', es: '¿Qué comes? Aquí el bocadillo es muy bueno.', ru: 'Что будешь есть? Тут отличные бутерброды.' },
      {
        kind: 'reply',
        ok: { es: 'Como un bocadillo y bebo agua.', ru: 'Я ем бутерброд и пью воду.' },
        bad: [
          { es: 'Come un bocadillo y bebe agua.', ru: 'Он ест бутерброд и пьёт воду.', why: 'Come, bebe — «он ест, он пьёт». О себе: como, bebo.' },
          { es: 'Comer un bocadillo y beber agua.', ru: 'Есть бутерброд и пить воду.', why: 'Это начальная форма. Нужно спрягать: como, bebo.' },
        ],
        note: 'Глаголы на -er: como, comes, come, comemos, coméis, comen.',
      },
      { kind: 'line', who: 'pablo', es: '¿Y dónde vives ahora? ¿En el piso de doña Carmen?', ru: 'А где ты теперь живёшь? В квартире доньи Кармен?' },
      {
        kind: 'reply',
        ok: { es: 'Sí, vivo en el piso de doña Carmen.', ru: 'Да, я живу в квартире доньи Кармен.' },
        bad: [
          { es: 'Sí, vives en el piso de doña Carmen.', ru: 'Да, ты живёшь в квартире доньи Кармен.', why: 'Vives — «ты живёшь». О себе: vivo.' },
          { es: 'Sí, vivo en la piso de doña Carmen.', ru: 'Да, я живу в квартире…', why: 'Piso — мужской род: el piso.' },
        ],
      },
      { kind: 'narr', ru: 'Звонит Лусия. Голос взволнованный.' },
      {
        kind: 'line',
        who: 'lucia',
        es: '¡Escucha! Leo el libro de 1978.',
        ru: 'Слушай! Я читаю книгу 1978 года.',
        note: 'Глаголы на -er и -ir почти одинаковы: leo, lees, lee / vivo, vives, vive. Отличаются только «мы» и «вы»: leemos / vivimos.',
      },
      {
        kind: 'line',
        who: 'lucia',
        es: 'En 1978 aquí [trabajaba=работала] una chica: Elena, de Consuegra.',
        ru: 'В 1978 году здесь работала девушка: Елена из Консуэгры.',
      },
      {
        kind: 'reply',
        ok: { es: '¿Elena? ¡Como en la carta!', ru: 'Елена? Как в письме!' },
        bad: [
          { es: '¿Elena? ¡Como en el carta!', ru: 'Елена? Как в письме (м. р.)!', why: 'Carta — женский род: la carta.' },
          { es: '¿Elena? ¡Como en la cartas!', ru: 'Елена? Как в письмах!', why: 'Письмо одно: la carta.' },
        ],
      },
      { kind: 'line', who: 'pablo', es: 'Consuegra… ¡Los molinos de la foto!', ru: 'Консуэгра… Мельницы с фотографии!' },
    ],
    hook: 'В 1978 году в книжном работала девушка Елена из Консуэгры — там, где мельницы с фотографии. Совпадение?',
  },

  {
    lessonId: 'd17',
    title: 'Опаздываю!',
    place: 'Бульвар Прадо',
    intro: [
      'Вы договорились встретиться с Лусией у музея Прадо в шесть: последние два часа вход в постоянную экспозицию бесплатный.',
      'Метро задерживается, и вы бежите по бульвару Прадо.',
    ],
    cast: ['extraM', 'lucia', 'pablo'],
    postcard: 'prado',
    scene: [
      { kind: 'line', who: 'extraM', as: 'Señor', es: 'Perdone, ¿qué hora es?', ru: 'Простите, который час?' },
      {
        kind: 'reply',
        ok: { es: 'Son las seis menos cuarto.', ru: 'Без четверти шесть.' },
        bad: [
          { es: 'Es las seis menos cuarto.', ru: 'Есть без четверти шесть.', why: 'Когда часов больше одного — son: son las seis. Es — только для часа: es la una.' },
          { es: 'Son las seis menos cuatro.', ru: 'Шесть без четырёх.', why: 'Четверть — cuarto. Cuatro — «четыре».' },
        ],
        note: 'Время: son las seis y cuarto (6:15), y media (6:30), menos cuarto (без четверти).',
      },
      { kind: 'line', who: 'extraM', as: 'Señor', es: 'Gracias. ¿Y a qué hora cierra el museo?', ru: 'Спасибо. А во сколько закрывается музей?' },
      {
        kind: 'reply',
        ok: { es: 'A las ocho.', ru: 'В восемь.' },
        bad: [
          { es: 'En las ocho.', ru: 'В восемь (не тот предлог).', why: '«В восемь» — a las ocho, с предлогом a.' },
          { es: 'Son las ocho.', ru: 'Сейчас восемь.', why: 'Son las ocho — «сейчас восемь». На «во сколько?» отвечают a las ocho.' },
        ],
      },
      { kind: 'narr', ru: 'Шесть ноль-ноль. Лусии нет. Шесть пятнадцать. Шесть тридцать… Наконец она появляется — и не одна. Рядом Пабло.' },
      { kind: 'line', who: 'lucia', es: '¡Perdón, perdón! ¿Qué hora es? ¿Las seis y media?', ru: 'Прости-прости! Который час? Половина седьмого?' },
      {
        kind: 'reply',
        ok: { es: 'Sí, son las seis y media.', ru: 'Да, половина седьмого.' },
        bad: [
          { es: 'Sí, son las seis y cuarto.', ru: 'Да, четверть седьмого.', why: 'Y cuarto — 6:15. А сейчас половина: y media.' },
          { es: 'Sí, es las seis y media.', ru: 'Да, есть половина седьмого.', why: 'С шестью часами — son: son las seis y media.' },
        ],
      },
      { kind: 'line', who: 'pablo', es: 'Es mi culpa. Estamos… en un café.', ru: 'Это я виноват. Мы были… в кафе.' },
      { kind: 'narr', ru: 'Лусия и Пабло переглядываются. Вы делаете вид, что ничего не заметили, и ведёте их к «Менинам» Веласкеса.' },
    ],
    hook: 'Лусия и Пабло опоздали вместе — и оба очень улыбаются. Кажется, «solo un café» превращается в традицию.',
  },

  {
    lessonId: 'd18',
    title: '20 мая',
    place: 'Кафе на площади Санта-Ана',
    intro: [
      'Кафе на площади Санта-Ана. Лусия раскладывает на столе письмо, фото мельницы и толстую книгу учёта 1978 года.',
      'Пора сопоставить даты.',
    ],
    cast: ['lucia'],
    scene: [
      { kind: 'line', who: 'lucia', es: '¿Qué día es hoy?', ru: 'Какой сегодня день?' },
      {
        kind: 'reply',
        ok: { es: 'Hoy es jueves.', ru: 'Сегодня четверг.' },
        bad: [
          { es: 'Hoy es Jueves.', ru: 'Сегодня Четверг.', why: 'Дни недели в испанском пишутся с маленькой буквы: jueves.' },
          { es: 'Hoy son jueves.', ru: 'Сегодня являются четверг.', why: 'Про день — es: hoy es jueves.' },
        ],
      },
      { kind: 'line', who: 'lucia', es: 'El sábado vamos a Segovia, ¿no? Bien. Ahora, mira la carta.', ru: 'В субботу едем в Сеговию, да? Хорошо. А теперь смотри на письмо.' },
      { kind: 'narr', ru: 'В конце письма, после «Te espero en el molino», стоит дата.' },
      {
        kind: 'line',
        who: 'lucia',
        es: '«Sábado, veinte de mayo». Y en mi libro… Elena trabaja hasta el lunes, veintidós de mayo.',
        ru: '«Суббота, двадцатое мая». А в моей книге… Елена работает до понедельника, двадцать второго мая.',
        note: 'Даты: el veinte de mayo — «двадцатое мая». Дни и месяцы — с маленькой буквы.',
      },
      {
        kind: 'reply',
        ok: { es: 'El sábado es el veinte. ¡Y el lunes, el veintidós!', ru: 'Суббота — двадцатое. А понедельник — двадцать второе!' },
        bad: [
          { es: 'El sábado es el veinte. ¡Y el domingo, el veintidós!', ru: 'Суббота — 20-е, а воскресенье — 22-е!', why: 'Посчитайте: суббота — 20, воскресенье — 21, понедельник — 22.' },
          { es: 'El sábado es el veinte. ¡Y el lunes, el veintiuno!', ru: 'Суббота — 20-е, а понедельник — 21-е!', why: 'Понедельник после субботы 20-го — 22-е: el veintidós.' },
        ],
      },
      {
        kind: 'line',
        who: 'lucia',
        es: 'Exacto. Dos días después de la cita… Elena no trabaja más.',
        ru: 'Именно. Через два дня после назначенной встречи… Елена больше не работает.',
      },
    ],
    hook: 'Письмо назначало встречу на субботу, 20 мая. А в понедельник, 22-го, Елена ушла из книжного навсегда. Что случилось в те выходные?',
  },

  {
    lessonId: 'd19',
    title: 'Соседка снизу',
    place: 'Улица у дома',
    intro: [
      'Утро пятницы. Вы идёте на вокзал за билетами в Сеговию на завтра.',
      'У подъезда — донья Кармен с сумкой на колёсиках.',
    ],
    cast: ['carmen'],
    scene: [
      { kind: 'line', who: 'carmen', es: 'Buenos días. ¿Adónde va usted tan temprano?', ru: 'Доброе утро. Куда это вы так рано?' },
      {
        kind: 'reply',
        ok: { es: 'Voy a la estación. ¿Y usted?', ru: 'Иду на вокзал. А вы?' },
        bad: [
          { es: 'Voy en la estación. ¿Y usted?', ru: 'Иду в вокзале.', why: 'Куда — a: voy a la estación. En — где находишься.' },
          { es: 'Voy a el estación. ¿Y usted?', ru: 'Иду на вокзал (м. р.).', why: 'Estación — женский род: a la estación.' },
        ],
        note: 'После ir ставим a: voy a la estación. А a + el сливаются в al: voy al parque.',
      },
      { kind: 'line', who: 'carmen', es: 'Voy al supermercado y a la farmacia.', ru: 'Я в супермаркет и в аптеку.' },
      {
        kind: 'reply',
        ok: { es: '¿La farmacia está cerca?', ru: 'Аптека близко?' },
        bad: [
          { es: '¿La farmacia es cerca?', ru: 'Аптека является близко?', why: 'Где находится и насколько далеко — estar: está cerca.' },
          { es: '¿El farmacia está cerca?', ru: 'Аптека (м. р.) близко?', why: 'Farmacia — женский род: la farmacia.' },
        ],
      },
      { kind: 'line', who: 'carmen', es: 'Sí, está en la plaza. Muy cerca.', ru: 'Да, на площади. Совсем рядом.' },
      { kind: 'narr', ru: 'Из вашей сумки выскальзывает фото мельницы и падает к её ногам. Донья Кармен поднимает его — и замирает.' },
      { kind: 'line', who: 'carmen', es: '¿De dónde es esta foto?', ru: 'Откуда это фото?' },
      {
        kind: 'reply',
        ok: { es: 'Es de una carta vieja. Está en mi piso.', ru: 'Из старого письма. Оно в моей квартире.' },
        bad: [
          { es: 'Es de una carta vieja. Es en mi piso.', ru: 'Из письма. Оно является в квартире.', why: 'Где находится — está: está en mi piso.' },
          { es: 'Es de un carta vieja. Está en mi piso.', ru: 'Из письма (м. р.).', why: 'Carta — женский род: una carta vieja.' },
        ],
      },
      { kind: 'narr', ru: 'Донья Кармен бледнеет, молча возвращает фото и уходит — забыв свою сумку на колёсиках.' },
    ],
    hook: 'Донья Кармен увидела фото мельницы — и ушла, не сказав ни слова. Она что-то знает.',
  },

  {
    lessonId: 'd20',
    title: 'Турист заблудился',
    place: 'Гран-Виа',
    intro: [
      'Гран-Виа — главная улица Мадрида: театры, кинотеатры, толпы людей.',
      'Вы спешите на вокзал, но вас останавливает растерянная туристка с картой.',
    ],
    cast: ['extraF'],
    scene: [
      { kind: 'line', who: 'extraF', as: 'Turista', es: 'Perdone, ¿cómo llego al Museo del Prado?', ru: 'Простите, как пройти к музею Прадо?' },
      {
        kind: 'reply',
        ok: { es: 'Siga recto y gire a la derecha.', ru: 'Идите прямо и поверните направо.' },
        bad: [
          { es: 'Sigue recto y gira a la derecha.', ru: 'Иди прямо и поверни направо.', why: 'С незнакомыми — на «вы»: siga, gire. Sigue, gira — это на «ты».' },
          { es: 'Siga recto y gire a la derecho.', ru: 'Идите прямо и поверните направо.', why: '«Направо» — a la derecha.' },
        ],
        note: 'Указания на «вы»: siga (идите), gire (поверните). Направо — a la derecha, налево — a la izquierda.',
      },
      { kind: 'line', who: 'extraF', as: 'Turista', es: 'Perdone, ¿puede repetir, por favor?', ru: 'Простите, можете повторить?' },
      {
        kind: 'reply',
        ok: { es: 'Siga recto. Al final de la calle, gire a la derecha.', ru: 'Идите прямо. В конце улицы поверните направо.' },
        bad: [
          { es: 'Siga recto. Al final de la calle, gire a la izquierda.', ru: '…поверните налево.', why: 'Вы только что сказали «направо» — a la derecha. Не путайте туристку 🙂' },
          { es: 'Siga recto. Al final del calle, gire a la derecha.', ru: '…в конце улицы (м. р.)…', why: 'Calle — женский род: de la calle. Del — только перед мужским родом.' },
        ],
      },
      { kind: 'line', who: 'extraF', as: 'Turista', es: '¿Está lejos?', ru: 'Это далеко?' },
      {
        kind: 'reply',
        ok: { es: 'No, está cerca. Diez minutos.', ru: 'Нет, близко. Десять минут.' },
        bad: [
          { es: 'No, es cerca. Diez minutos.', ru: 'Нет, является близко.', why: 'Расстояние — estar: está cerca.' },
          { es: 'No, está lejos. Diez minutos.', ru: 'Нет, далеко. Десять минут.', why: 'Десять минут — это близко: está cerca.' },
        ],
      },
      { kind: 'line', who: 'extraF', as: 'Turista', es: '¡Muchas gracias! Usted es muy amable.', ru: 'Большое спасибо! Вы очень любезны.' },
      { kind: 'narr', ru: 'Туристка уходит. Вы ловите себя на мысли: впервые в Мадриде вы не спрашиваете дорогу, а показываете её.' },
    ],
    hook: 'Вы впервые объяснили дорогу по-испански — и вас поняли! А завтра в восемь утра — поезд в Сеговию.',
  },

  {
    lessonId: 'd21',
    title: 'Поезд в Сеговию',
    place: 'Вокзал Чамартин → Сеговия',
    intro: [
      'Суббота, вокзал Чамартин. Пабло с фотоаппаратом, вы — с конвертом в сумке. Лусия не смогла поехать: в книжном инвентаризация.',
      'Скоростной поезд довезёт до Сеговии меньше чем за полчаса.',
    ],
    cast: ['extraF', 'pablo'],
    postcard: 'segovia',
    scene: [
      { kind: 'line', who: 'extraF', as: 'Taquillera', es: 'Buenos días. ¿Adónde van?', ru: 'Доброе утро. Куда едете?' },
      {
        kind: 'reply',
        ok: { es: 'Dos billetes a Segovia, por favor.', ru: 'Два билета до Сеговии, пожалуйста.' },
        bad: [
          { es: 'Dos billete a Segovia, por favor.', ru: 'Два билет до Сеговии.', why: 'После dos — множественное число: dos billetes.' },
          { es: 'Dos billetes en Segovia, por favor.', ru: 'Два билета в Сеговии.', why: '«В Сеговию» — направление, предлог a: a Segovia.' },
        ],
      },
      { kind: 'line', who: 'extraF', as: 'Taquillera', es: 'Aquí tienen. Andén tres.', ru: 'Пожалуйста. Третья платформа.' },
      {
        kind: 'reply',
        ok: { es: '¿A qué hora sale el tren?', ru: 'Во сколько отправляется поезд?' },
        bad: [
          { es: '¿A qué hora sales el tren?', ru: 'Во сколько ты отправляешься поезд?', why: 'Sales — «ты выходишь». Поезд — он: sale.' },
          { es: '¿Qué hora sale el tren?', ru: 'Который час отправляется поезд?', why: '«Во сколько» — с предлогом: ¿a qué hora…?' },
        ],
      },
      {
        kind: 'line',
        who: 'extraF',
        as: 'Taquillera',
        es: 'A las ocho y diez. Y en Segovia, al centro en autobús.',
        ru: 'В восемь десять. А в Сеговии — до центра на автобусе.',
        note: 'На транспорте — en: en tren, en autobús, en metro. Но пешком — a pie.',
      },
      { kind: 'narr', ru: 'Полчаса в поезде, десять минут на автобусе — и вот он: акведук, арки из серого гранита прямо над площадью.' },
      { kind: 'line', who: 'pablo', es: '¡Increíble! ¡Voy a hacer mil fotos!', ru: 'Невероятно! Сделаю тысячу фотографий!' },
      { kind: 'narr', ru: 'У акведука Пабло достаёт из вашей сумки фото мельницы и долго его рассматривает.' },
      { kind: 'line', who: 'pablo', es: 'Esta foto es de un profesional. Mira la luz.', ru: 'Это фото сделал профессионал. Посмотри на свет.' },
      {
        kind: 'reply',
        ok: { es: '¿Es de un fotógrafo?', ru: 'Его сделал фотограф?' },
        bad: [
          { es: '¿Es un fotógrafo?', ru: 'Это фотограф?', why: 'Es un fotógrafo — «это фотограф». Вы спрашиваете, чьё фото: ¿es de un fotógrafo?' },
          { es: '¿Está de un fotógrafo?', ru: 'Находится от фотографа?', why: 'Чьё — ser de: es de un fotógrafo.' },
        ],
      },
      { kind: 'line', who: 'pablo', es: 'Sí. Como yo… pero mejor.', ru: 'Да. Как я… только лучше.' },
    ],
    hook: '«Esta foto es de un profesional», — говорит Пабло. Значит, «M.» был фотографом?',
  },

  {
    lessonId: 'd22',
    title: 'Сувенирная лавка',
    place: 'Лавка у акведука, Сеговия',
    intro: [
      'После обеда (молочный поросёнок — гордость Сеговии, Пабло съел за двоих) вы заходите в сувенирную лавку.',
      'На полках — магниты, керамика и коробки со старыми открытками.',
    ],
    cast: ['extraM', 'pablo'],
    scene: [
      { kind: 'line', who: 'extraM', as: 'Vendedor', es: 'Buenas tardes. ¿Le gusta algo?', ru: 'Добрый день. Вам что-нибудь понравилось?' },
      {
        kind: 'reply',
        ok: { es: 'Sí, me gusta esta taza. ¿Cuánto cuesta?', ru: 'Да, мне нравится эта чашка. Сколько она стоит?' },
        bad: [
          { es: 'Sí, me gusto esta taza.', ru: 'Да, я себе нравлюсь эта чашка.', why: 'Me gusta — «мне нравится». Me gusto — «я себе нравлюсь» 🙂' },
          { es: 'Sí, me gustan esta taza.', ru: 'Да, мне нравятся эта чашка.', why: 'Чашка одна — gusta. Gustan — если нравятся несколько вещей.' },
        ],
        note: 'Gustar подстраивается под то, что нравится: me gusta la taza, me gustan las tazas.',
      },
      { kind: 'line', who: 'extraM', as: 'Vendedor', es: 'Cuesta doce euros.', ru: 'Двенадцать евро.' },
      {
        kind: 'reply',
        ok: { es: '¿Puedo pagar con tarjeta?', ru: 'Можно оплатить картой?' },
        bad: [
          { es: '¿Puedo pago con tarjeta?', ru: 'Могу плачу картой?', why: 'После puedo — начальная форма: puedo pagar.' },
          { es: '¿Puedo pagar en tarjeta?', ru: 'Можно оплатить в карте?', why: 'Картой — con tarjeta. Наличными — en efectivo.' },
        ],
      },
      { kind: 'line', who: 'extraM', as: 'Vendedor', es: 'Sí, claro.', ru: 'Да, конечно.' },
      { kind: 'narr', ru: 'Пабло тем временем роется в коробке со старыми открытками — и вдруг вытаскивает одну. Та же мельница. Тот же ракурс.' },
      { kind: 'line', who: 'pablo', es: '¡Mira! ¡Es la misma foto!', ru: 'Смотри! Это то же самое фото!' },
      {
        kind: 'line',
        who: 'extraM',
        as: 'Vendedor',
        es: 'Ah, esta foto es muy famosa. Es de un fotógrafo de Madrid. Mire, aquí está su nombre.',
        ru: 'А, это очень известное фото. Его сделал фотограф из Мадрида. Смотрите, вот его имя.',
      },
      { kind: 'narr', ru: 'В углу открытки мелкими буквами: «M. Ortega, 1977».' },
      {
        kind: 'reply',
        ok: { es: '¿M. Ortega? ¡La M de la carta!', ru: 'М. Ортега? Та самая «М» из письма!' },
        bad: [
          { es: '¿M. Ortega? ¡El M de la carta!', ru: '«М» (м. р.) из письма!', why: 'Буквы в испанском женского рода: la eme, la M.' },
          { es: '¿M. Ortega? ¡La M del carta!', ru: '«М» из письма (м. р.)!', why: 'Carta — женский род: de la carta. Del — только перед мужским родом (de + el).' },
        ],
      },
    ],
    hook: 'На старой открытке — та же мельница и подпись «M. Ortega, 1977». Неужели «M.» из письма — это фотограф Ортега?',
  },
];
