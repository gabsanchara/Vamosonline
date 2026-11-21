import type { Episode } from '../../types';

// Глава 4. «Дорога на юг» (уроки 23–30)
export const EPISODES_4: Episode[] = [
  {
    lessonId: 'd23',
    title: 'Чемодан на юг',
    place: 'Магазин одежды на улице Фуэнкарраль',
    intro: [
      'Агентство отправляет вас с группой туристов в Андалусию: Севилья, потом Гранада. Пабло едет снимать фото для нового каталога.',
      'В Севилье в сентябре ещё лето, а в вашем чемодане — одни свитеры.',
    ],
    cast: ['extraF', 'lucia'],
    scene: [
      { kind: 'line', who: 'extraF', as: 'Dependienta', es: 'Hola. ¿Qué busca?', ru: 'Здравствуйте. Что ищете?' },
      {
        kind: 'reply',
        ok: { es: 'Busco una camiseta y unos pantalones.', ru: 'Ищу футболку и брюки.' },
        bad: [
          { es: 'Busco un camiseta y unos pantalones.', ru: 'Ищу футболку (м. р.) и брюки.', why: 'Camiseta — женский род: una camiseta.' },
          { es: 'Busco una camiseta y unas pantalones.', ru: 'Ищу футболку и брюки (ж. р.).', why: 'Pantalones — мужской род: unos pantalones.' },
        ],
      },
      { kind: 'line', who: 'extraF', as: 'Dependienta', es: '¿Qué talla tiene?', ru: 'Какой у вас размер?' },
      {
        kind: 'reply',
        ok: { es: 'No sé. ¿Puedo probármelos?', ru: 'Не знаю. Можно их примерить?' },
        bad: [
          { es: 'No sé. ¿Puedo probármelo?', ru: 'Не знаю. Можно его примерить?', why: 'Pantalones — множественное число, поэтому los: probármelos.' },
          { es: 'No sé. ¿Puedes probármelos?', ru: 'Не знаю. Ты можешь их на меня примерить?', why: 'Puedes — «ты можешь». Вы спрашиваете о себе: ¿puedo…?' },
        ],
      },
      { kind: 'narr', ru: 'Примерочная. Брюки висят мешком.' },
      { kind: 'line', who: 'extraF', as: 'Dependienta', es: '¿Qué tal?', ru: 'Ну как?' },
      {
        kind: 'reply',
        ok: { es: 'Son demasiado grandes.', ru: 'Слишком большие.' },
        bad: [
          { es: 'Es demasiado grande.', ru: 'Оно слишком большое.', why: 'Pantalones — множественное число: son demasiado grandes.' },
          { es: 'Son demasiado pequeños.', ru: 'Слишком маленькие.', why: 'Брюки висят мешком — они велики: grandes.' },
        ],
        note: 'Demasiado — «слишком»: demasiado grande, demasiado caro.',
      },
      { kind: 'narr', ru: 'Следующие сидят идеально.' },
      {
        kind: 'reply',
        ok: { es: 'Me quedan muy bien. ¡Los compro!', ru: 'Сидят отлично. Беру!' },
        bad: [
          { es: 'Me queda muy bien. ¡Los compro!', ru: 'Сидит отлично. Беру!', why: 'Брюки — множественное число: me quedan.' },
          { es: 'Me quedan muy bien. ¡Lo compro!', ru: 'Сидят отлично. Беру его!', why: 'Брюки — los: los compro.' },
        ],
      },
      { kind: 'narr', ru: 'На выходе звонит Лусия.' },
      {
        kind: 'line',
        who: 'lucia',
        es: '¿Pablo va contigo a Sevilla? [Pregúntale=спроси его]… si tiene novia.',
        ru: 'Пабло едет с тобой в Севилью? Спроси его… есть ли у него девушка.',
      },
    ],
    hook: '«Pregúntale si tiene novia», — шепчет Лусия и тут же кладёт трубку.',
  },

  {
    lessonId: 'd24',
    title: 'Звонок из Мадрида',
    place: 'Севилья, у Хиральды',
    intro: [
      'Севилья. Конец сентября, +34. Вы с группой стоите у Хиральды, и туристы прячутся в тени апельсиновых деревьев.',
      'Звонит Лусия — у неё новости.',
    ],
    cast: ['lucia'],
    postcard: 'giralda',
    scene: [
      { kind: 'line', who: 'lucia', es: '¡Hola! ¿Qué tiempo hace en Sevilla?', ru: 'Привет! Какая погода в Севилье?' },
      {
        kind: 'reply',
        ok: { es: 'Hace mucho calor y hace sol.', ru: 'Очень жарко и солнечно.' },
        bad: [
          { es: 'Tengo mucho calor y tengo sol.', ru: 'Мне жарко и у меня солнце.', why: 'Солнце не «имеют» 🙂 Погода — hace: hace sol.' },
          { es: 'Está mucho calor y hace sol.', ru: 'Находится жарко…', why: 'О погоде — hace: hace calor.' },
        ],
        note: 'Погода — hace: hace calor, hace sol, hace frío. Человеку — tener: tengo calor.',
      },
      { kind: 'line', who: 'lucia', es: 'Aquí en Madrid está nublado. Y llueve.', ru: 'А здесь, в Мадриде, пасмурно. И дождь.' },
      {
        kind: 'reply',
        ok: { es: '¿Llueve en Madrid? Aquí no.', ru: 'В Мадриде дождь? А здесь нет.' },
        bad: [
          { es: '¿Nieva en Madrid? Aquí no.', ru: 'В Мадриде снег?', why: 'Лусия сказала llueve — дождь. Nieva — снег.' },
          { es: '¿Lluve en Madrid? Aquí no.', ru: '(ошибка в глаголе)', why: 'Глагол llover в настоящем времени: llueve — с -ue-.' },
        ],
      },
      {
        kind: 'line',
        who: 'lucia',
        es: 'Oye, tengo noticias. En el libro de la librería… la chica se llama Elena Martín.',
        ru: 'Слушай, у меня новости. В книге учёта… девушку зовут Елена Мартин.',
      },
      {
        kind: 'reply',
        ok: { es: '¿Elena Martín? ¡Tenemos el nombre!', ru: 'Елена Мартин? У нас есть имя!' },
        bad: [
          { es: '¿Elena Martín? ¡Tienen el nombre!', ru: 'У них есть имя!', why: 'Tienen — «у них». У вас с Лусией — «у нас»: tenemos.' },
          { es: '¿Elena Martín? ¡Tenemos la nombre!', ru: 'У нас есть имя (ж. р.)!', why: 'Nombre — мужской род: el nombre.' },
        ],
      },
      { kind: 'line', who: 'lucia', es: 'Y… ¿hablas con Pablo? Ya sabes…', ru: 'А ты… поговоришь с Пабло? Ну, ты знаешь…' },
    ],
    hook: 'Девушку из книжного звали Елена Мартин. А Лусия так и не узнала, есть ли у Пабло девушка. Поручение всё ещё за вами.',
  },

  {
    lessonId: 'd25',
    title: 'Вечер фламенко',
    place: 'Квартал Триана, Севилья',
    intro: [
      'Днём — экскурсия по площади Испании, вечером — квартал Триана за рекой: маленький бар, гитара, фламенко.',
      'Пабло фотографирует танцовщицу. Местный гитарист подсаживается к вам.',
    ],
    cast: ['extraM', 'pablo'],
    postcard: 'plazaespana',
    scene: [
      { kind: 'line', who: 'extraM', as: 'Guitarrista', es: '¿Qué haces en tu tiempo libre? ¿Te gusta el flamenco?', ru: 'Чем занимаешься в свободное время? Тебе нравится фламенко?' },
      {
        kind: 'reply',
        ok: { es: '¡Sí! Me gusta bailar y me encanta la música.', ru: 'Да! Люблю танцевать и обожаю музыку.' },
        bad: [
          { es: '¡Sí! Me gusto bailar y me encanta la música.', ru: 'Я себе нравлюсь танцевать…', why: 'Me gusta + глагол: me gusta bailar.' },
          { es: '¡Sí! Me gustan bailar y me encanta la música.', ru: 'Мне нравятся танцевать…', why: 'С глаголом всегда gusta: me gusta bailar.' },
        ],
        note: 'Me gusta + глагол: me gusta bailar, me gusta leer. Me encanta — «обожаю».',
      },
      { kind: 'line', who: 'extraM', as: 'Guitarrista', es: 'Yo toco la guitarra. ¿Y tu amigo?', ru: 'Я играю на гитаре. А твой друг?' },
      { kind: 'narr', ru: 'Вы поворачиваетесь к Пабло. Самое время выполнить поручение Лусии.' },
      {
        kind: 'reply',
        ok: { es: 'Pablo, ¿y a ti? ¿Qué te gusta?', ru: 'Пабло, а тебе? Что тебе нравится?' },
        bad: [
          { es: 'Pablo, ¿y a tú? ¿Qué te gusta?', ru: 'Пабло, а ты?..', why: 'После a — ti: ¿y a ti?' },
          { es: 'Pablo, ¿y a ti? ¿Qué me gusta?', ru: 'Пабло, а тебе? Что мне нравится?', why: 'Me gusta — «мне нравится». Спрашиваете о нём: ¿qué te gusta?' },
        ],
      },
      { kind: 'line', who: 'pablo', es: 'Me gusta la fotografía. Y… me gusta Lucía.', ru: 'Мне нравится фотография. И… мне нравится Лусия.' },
      { kind: 'line', who: 'pablo', es: '[No le digas nada=не говори ей ничего], ¿vale?', ru: 'Только ничего ей не говори, ладно?' },
      {
        kind: 'reply',
        ok: { es: 'Vale. No digo nada.', ru: 'Ладно. Ничего не скажу.' },
        bad: [
          { es: 'Vale. No dices nada.', ru: 'Ладно. Ты ничего не говоришь.', why: 'Dices — «ты говоришь». Вы обещаете за себя: no digo nada.' },
          { es: 'Vale. No digo algo.', ru: 'Ладно. Не скажу что-то.', why: 'После no — nada: no digo nada. Двойное отрицание в испанском — норма.' },
        ],
      },
    ],
    hook: 'Пабло признался: «Me gusta Lucía». А Лусия ждёт ответа. Как выкрутиться и не выдать ни его, ни её?',
  },

  {
    lessonId: 'd26',
    title: 'День экскурсовода',
    place: 'Завтрак в отеле, Севилья',
    intro: [
      'Утро в отеле. Туристы ещё спят, а вы уже на ногах: в девять — экскурсия в Алькасар.',
      'Звонит Карлос — проверить, как дела.',
    ],
    cast: ['carlos'],
    scene: [
      { kind: 'line', who: 'carlos', es: '¡Buenos días! ¿A qué hora te levantas en Sevilla?', ru: 'Доброе утро! Во сколько ты встаёшь в Севилье?' },
      {
        kind: 'reply',
        ok: { es: 'Me levanto a las siete.', ru: 'Встаю в семь.' },
        bad: [
          { es: 'Levanto a las siete.', ru: 'Поднимаю в семь.', why: 'Встаю «сам себя» — возвратный глагол: me levanto.' },
          { es: 'Te levantas a las siete.', ru: 'Ты встаёшь в семь.', why: 'Te levantas — «ты встаёшь». О себе: me levanto.' },
        ],
        note: 'Возвратные глаголы — действие над собой: me levanto, me ducho, me acuesto.',
      },
      { kind: 'line', who: 'carlos', es: '¿Y desayunas bien? ¡Es lo más importante!', ru: 'А завтракаешь хорошо? Это самое главное!' },
      {
        kind: 'reply',
        ok: { es: 'Sí, desayuno a las ocho: café y tostadas.', ru: 'Да, в восемь: кофе и тосты.' },
        bad: [
          { es: 'Sí, desayunas a las ocho: café y tostadas.', ru: 'Да, ты завтракаешь в восемь.', why: 'Desayunas — «ты». О себе: desayuno.' },
          { es: 'Sí, me desayuno a las ocho: café y tostadas.', ru: '(лишнее me)', why: 'Desayunar — не возвратный глагол: desayuno, без me.' },
        ],
      },
      { kind: 'line', who: 'carlos', es: '¿Y por la tarde? ¿Trabajas mucho?', ru: 'А днём? Много работаешь?' },
      {
        kind: 'reply',
        ok: { es: 'Por la mañana trabajo y por la tarde descanso.', ru: 'Утром работаю, а днём отдыхаю.' },
        bad: [
          { es: 'En la mañana trabajo y en la tarde descanso.', ru: '(не испанский вариант)', why: 'В Испании говорят por la mañana, por la tarde. En la mañana — так говорят в Латинской Америке.' },
          { es: 'Por la mañana trabajo y por la noche desayuno.', ru: 'Утром работаю, а ночью завтракаю.', why: 'Завтракают утром, а не ночью 🙂' },
        ],
      },
      {
        kind: 'line',
        who: 'carlos',
        es: 'Muy bien. Mañana, Granada. Isabel dice: hay un hotel muy bonito al lado de la Alhambra.',
        ru: 'Отлично. Завтра — Гранада. Исабель говорит: там очень красивый отель рядом с Альгамброй.',
      },
    ],
    hook: 'Следующая остановка — Гранада. Чемодан снова в дорогу.',
  },

  {
    lessonId: 'd27',
    title: 'Галерея в Гранаде',
    place: 'Гранада, квартал Альбайсин',
    intro: [
      'Гранада. Белые домики квартала Альбайсин, узкие улочки и вид на Альгамбру.',
      'Утро свободное. Вы с Пабло пьёте кофе на маленькой площади.',
    ],
    cast: ['pablo', 'extraM'],
    scene: [
      { kind: 'line', who: 'pablo', es: '¿Qué hiciste ayer por la noche?', ru: 'Что ты делал{|а} вчера вечером?' },
      {
        kind: 'reply',
        ok: { es: 'Comí en un restaurante y dormí bien.', ru: 'Поел{|а} в ресторане и хорошо выспал{ся|ась}.' },
        bad: [
          { es: 'Como en un restaurante y duermo bien.', ru: 'Ем в ресторане и хорошо сплю.', why: 'Это настоящее время. Про вчера — pretérito: comí, dormí.' },
          { es: 'Comé en un restaurante y dormí bien.', ru: '(ошибка в окончании)', why: 'Глаголы на -er в прошедшем: comí — с -í, а не comé.' },
        ],
        note: 'Pretérito — законченное действие в прошлом: hablé, comí, viví.',
      },
      {
        kind: 'line',
        who: 'pablo',
        es: 'Yo fui a una galería de fotos. ¡Y vi algo increíble!',
        ru: 'А я ходил в фотогалерею. И увидел нечто невероятное!',
        note: 'Fui — «я ходил / я был»: ir и ser в прошедшем совпадают. Vi — «я увидел».',
      },
      {
        kind: 'reply',
        ok: { es: '¿Qué viste?', ru: 'Что ты увидел?' },
        bad: [
          { es: '¿Qué ves?', ru: 'Что ты видишь?', why: 'Это настоящее время. Он увидел вчера: ¿qué viste?' },
          { es: '¿Qué vi?', ru: 'Что я увидел{|а}?', why: 'Vi — «я увидел». Спрашиваете о нём: ¿qué viste?' },
        ],
      },
      { kind: 'narr', ru: 'Пабло ведёт вас в маленькую галерею. На стене — чёрно-белая выставка: «Miguel Ortega. España, 1975–1985». И среди фотографий — та самая мельница.' },
      {
        kind: 'line',
        who: 'extraM',
        as: 'Galerista',
        es: '¿Les gusta? Miguel Ortega es un fotógrafo muy bueno. Vivió en Madrid.',
        ru: 'Нравится? Мигель Ортега — очень хороший фотограф. Он жил в Мадриде.',
      },
      {
        kind: 'reply',
        ok: { es: '¿Y dónde vive ahora?', ru: 'А где он живёт сейчас?' },
        bad: [
          { es: '¿Y dónde vivió ahora?', ru: 'А где он жил сейчас?', why: 'Ahora — «сейчас», значит настоящее время: vive.' },
          { es: '¿Y dónde vives ahora?', ru: 'А где ты живёшь сейчас?', why: 'Vives — «ты живёшь». Спрашиваете о Мигеле: vive.' },
        ],
      },
      { kind: 'line', who: 'extraM', as: 'Galerista', es: 'Ahora vive en Barcelona. Es un hombre muy tranquilo.', ru: 'Сейчас живёт в Барселоне. Очень спокойный человек.' },
    ],
    hook: 'Фотограф Мигель Ортега жил в Мадриде, а теперь — в Барселоне. «M.» — это Мигель?',
  },

  {
    lessonId: 'd28',
    title: 'Планы',
    place: 'Гранада, смотровая площадка Сан-Николас',
    intro: [
      'Закат на смотровой площадке Сан-Николас: напротив — Альгамбра, за ней — снежные вершины Сьерра-Невады.',
      'Звонит Лусия.',
    ],
    cast: ['lucia', 'pablo'],
    scene: [
      {
        kind: 'line',
        who: 'lucia',
        es: '¿Qué vas a hacer el fin de semana?',
        ru: 'Что собираешься делать на выходных?',
        note: 'Ir a + глагол — «собираюсь»: voy a descansar, vamos a viajar.',
      },
      {
        kind: 'reply',
        ok: { es: 'El sábado voy a descansar.', ru: 'В субботу буду отдыхать.' },
        bad: [
          { es: 'El sábado voy descansar.', ru: 'В субботу иду отдыхать (без a).', why: 'Ir a + глагол: voy a descansar. Без a нельзя.' },
          { es: 'El sábado vas a descansar.', ru: 'В субботу ты будешь отдыхать.', why: 'Vas — «ты». О себе: voy a descansar.' },
        ],
      },
      { kind: 'line', who: 'lucia', es: '¿Y después? ¿Vas a buscar a Miguel?', ru: 'А потом? Будешь искать Мигеля?' },
      {
        kind: 'reply',
        ok: { es: 'Sí, vamos a ir a Barcelona.', ru: 'Да, мы поедем в Барселону.' },
        bad: [
          { es: 'Sí, vamos ir a Barcelona.', ru: '(без a)', why: 'Нужен a: vamos a ir.' },
          { es: 'Sí, vamos a ir en Barcelona.', ru: 'Да, поедем в Барселоне.', why: 'Куда — a Barcelona.' },
        ],
      },
      { kind: 'line', who: 'lucia', es: '¿Vamos? ¿Pablo también?', ru: '«Мы»? Пабло тоже?' },
      {
        kind: 'reply',
        ok: { es: 'Sí, Pablo va a venir también.', ru: 'Да, Пабло тоже поедет.' },
        bad: [
          { es: 'Sí, Pablo vas a venir también.', ru: 'Да, Пабло, ты тоже поедешь.', why: 'Pablo — «он»: va a venir.' },
          { es: 'Sí, Pablo va venir también.', ru: '(без a)', why: 'Ir a + глагол: va a venir.' },
        ],
      },
      { kind: 'narr', ru: 'Пабло, сидящий рядом, отчаянно жестикулирует: «Скажи ей… нет, не говори!» Вы кладёте трубку, и он вздыхает.' },
      { kind: 'line', who: 'pablo', es: 'Voy a invitar a Lucía al cine. En Madrid. Sí. Voy a hacerlo.', ru: 'Я приглашу Лусию в кино. В Мадриде. Да. Я это сделаю.' },
    ],
    hook: 'Пабло решился: «Voy a invitar a Lucía al cine». Осталось вернуться в Мадрид — и не струсить.',
  },

  {
    lessonId: 'd29',
    title: 'Ночь в Гранаде',
    place: 'Маленький отель у Альгамбры',
    intro: [
      'Последняя ночь поездки — в маленьком отеле с видом на Альгамбру. Исабель бронировала его лично.',
      'Стойка регистрации. Администратор листает список и хмурится.',
    ],
    cast: ['extraF'],
    postcard: 'alhambra',
    scene: [
      { kind: 'line', who: 'extraF', as: 'Recepcionista', es: 'Buenas noches. ¿En qué puedo ayudarle?', ru: 'Добрый вечер. Чем могу помочь?' },
      {
        kind: 'reply',
        ok: { es: 'Buenas noches. Tengo una reserva.', ru: 'Добрый вечер. У меня бронь.' },
        bad: [
          { es: 'Buenas noches. Tengo un reserva.', ru: 'У меня бронь (м. р.).', why: 'Reserva — женский род: una reserva.' },
          { es: 'Buenas noches. Soy una reserva.', ru: 'Я — бронь.', why: 'Soy — «я есть» 🙂 Бронь «имеют»: tengo una reserva.' },
        ],
      },
      { kind: 'line', who: 'extraF', as: 'Recepcionista', es: 'Mmm… Lo siento, no hay reserva.', ru: 'Хм… Простите, брони нет.' },
      {
        kind: 'reply',
        ok: { es: '¿Puede ayudarme? Quisiera una habitación individual.', ru: 'Можете помочь? Я бы хотел{|а} одноместный номер.' },
        bad: [
          { es: '¿Puedes ayudarme? Quisiera una habitación individual.', ru: 'Можешь помочь?..', why: 'С администратором — на «вы»: ¿puede ayudarme?' },
          { es: '¿Puede ayudarme? Quisiera un habitación individual.', ru: '…номер (м. р.)', why: 'Habitación — женский род: una habitación.' },
        ],
        note: 'Quisiera — «я бы хотел(а)»: самый вежливый способ попросить.',
      },
      { kind: 'line', who: 'extraF', as: 'Recepcionista', es: 'Un momento… Sí, hay una habitación. Con vista a la Alhambra.', ru: 'Минутку… Да, есть номер. С видом на Альгамбру.' },
      {
        kind: 'reply',
        ok: { es: '¡Perfecto! ¿Está incluido el desayuno?', ru: 'Отлично! Завтрак включён?' },
        bad: [
          { es: '¡Perfecto! ¿Es incluido el desayuno?', ru: 'Завтрак является включённым?', why: 'Включён ли — estar: ¿está incluido?' },
          { es: '¡Perfecto! ¿Está incluida el desayuno?', ru: '(не тот род)', why: 'Desayuno — мужской род: incluido.' },
        ],
      },
      { kind: 'line', who: 'extraF', as: 'Recepcionista', es: 'Sí, de siete a diez. Aquí tiene la llave.', ru: 'Да, с семи до десяти. Вот ключ.' },
      { kind: 'narr', ru: 'Ночью вы не можете уснуть. За окном светится Альгамбра. Вы снова достаёте письмо — теперь вы понимаете в нём гораздо больше слов.' },
      { kind: 'narr', ru: 'В последней строчке, после «Te espero en el molino», вы впервые разбираете: «Si no vienes, me voy a Barcelona».' },
    ],
    hook: '«Si no vienes, me voy a Barcelona» — «Если не придёшь, я уеду в Барселону». Елена не пришла… потому что так и не получила письмо?',
  },

  {
    lessonId: 'd30',
    title: 'Снова в Мадриде',
    place: 'Вокзал Аточа',
    intro: [
      'Вокзал Аточа. Под стеклянной крышей старого вокзала растёт настоящий тропический сад.',
      'Вас встречает Карлос с табличкой «¡BIENVENID{O|A}!» и коробкой чуррос.',
    ],
    cast: ['carlos', 'carmen'],
    scene: [
      { kind: 'line', who: 'carlos', es: '¡Hola! ¡Por fin! ¿Qué tal el viaje?', ru: 'Привет! Наконец-то! Как поездка?' },
      {
        kind: 'reply',
        ok: { es: '¡Muy bien! Me encanta España.', ru: 'Отлично! Обожаю Испанию.' },
        bad: [
          { es: '¡Muy bien! Me encantan España.', ru: '(не то число)', why: 'Испания одна: me encanta.' },
          { es: '¡Muy bien! Yo encanta España.', ru: 'Я обожает Испанию.', why: '«Обожаю» — me encanta (дословно «мне очень нравится»).' },
        ],
      },
      { kind: 'line', who: 'carlos', es: 'Oye, estudio ruso. ¿Cómo se dice «gracias» en ruso?', ru: 'Слушай, я учу русский. Как по-русски «gracias»?' },
      {
        kind: 'reply',
        ok: { es: 'Se dice «spasibo».', ru: 'Говорят «спасибо».' },
        bad: [
          { es: 'Se llama «spasibo».', ru: 'Его зовут «спасибо».', why: 'Se llama — «зовут». Как что говорится — se dice.' },
          { es: 'Se dicen «spasibo».', ru: '(не то число)', why: 'Слово одно: se dice.' },
        ],
      },
      { kind: 'line', who: 'carlos', es: '¡Spa-si-bo! ¡Qué difícil!', ru: 'Спа-си-бо! Как сложно!' },
      {
        kind: 'line',
        who: 'carlos',
        es: 'Bueno, mañana, reunión a las nueve. Isabel quiere hablar contigo de un viaje nuevo, de Barcelona y de…',
        ru: 'Так, завтра собрание в девять. Исабель хочет поговорить с тобой о новой поездке, о Барселоне и о…',
      },
      {
        kind: 'reply',
        ok: { es: 'Perdón, no entiendo. ¿Puedes hablar más despacio?', ru: 'Прости, не понимаю. Можешь говорить помедленнее?' },
        bad: [
          { es: 'Perdón, no entiendo. ¿Puedo hablar más despacio?', ru: '…Могу я говорить помедленнее?', why: 'Puedo — «я могу». Просите его: ¿puedes hablar…?' },
          { es: 'Perdón, no entiendes. ¿Puedes hablar más despacio?', ru: 'Прости, ты не понимаешь…', why: 'Не понимаете вы: no entiendo.' },
        ],
      },
      { kind: 'line', who: 'carlos', es: '¡Perdón! Hablo muy rápido. Mañana, a las nueve, en la oficina. ¿Vale?', ru: 'Прости! Я говорю очень быстро. Завтра в девять в офисе. Хорошо?' },
      { kind: 'narr', ru: 'Вечером вы поднимаетесь домой. На лестничной площадке стоит донья Кармен. Похоже, она ждёт давно.' },
      { kind: 'line', who: 'carmen', es: 'Buenas noches. Tenemos que hablar.', ru: 'Добрый вечер. Нам нужно поговорить.' },
    ],
    hook: 'Донья Кармен ждала вас у двери: «Tenemos que hablar». Что она хочет рассказать?',
  },
];
