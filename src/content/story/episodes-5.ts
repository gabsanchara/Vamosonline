import type { Episode } from '../../types';

// Глава 5. «Тайна письма» (уроки 31–40)
export const EPISODES_5: Episode[] = [
  {
    lessonId: 'd31',
    title: 'Нужно, могу, должен',
    place: 'Турагентство «Viajes Sol»',
    intro: [
      'Вчера разговора так и не случилось. Донья Кармен постояла на площадке, вздохнула: «Estoy cansada. Mañana», — и ушла к себе.',
      'Утро, агентство. Исабель кладёт на стол папку: тур по Барселоне — через неделю.',
    ],
    cast: ['carlos'],
    scene: [
      { kind: 'line', who: 'carlos', es: '¿Qué necesitas? Tienes cara de… problema.', ru: 'Что тебе нужно? У тебя лицо как у… проблемы.' },
      {
        kind: 'reply',
        ok: { es: 'Necesito ir a Barcelona. Pero tengo que trabajar.', ru: 'Мне нужно в Барселону. Но я должен работать.' },
        bad: [
          { es: 'Necesito ir a Barcelona. Pero tengo trabajar.', ru: '…Но имею работать.', why: 'Tener que + глагол: tengo que trabajar. Que обязателен.' },
          { es: 'Necesito voy a Barcelona. Pero tengo que trabajar.', ru: 'Мне нужно еду в Барселону…', why: 'После necesito — начальная форма: necesito ir.' },
        ],
        note: 'После necesito, puedo, debo, tengo que второй глагол — в начальной форме: necesito ir, tengo que trabajar.',
      },
      { kind: 'line', who: 'carlos', es: '¡Puedo ayudarte! Isabel necesita a alguien en Barcelona.', ru: 'Я могу тебе помочь! Исабель нужен кто-то в Барселоне.' },
      {
        kind: 'reply',
        ok: { es: '¿De verdad? ¿Podemos viajar juntos?', ru: 'Правда? Мы можем поехать вместе?' },
        bad: [
          { es: '¿De verdad? ¿Podemos viajamos juntos?', ru: '…можем едем вместе?', why: 'После podemos — начальная форма: podemos viajar.' },
          { es: '¿De verdad? ¿Puedemos viajar juntos?', ru: '(ошибка в форме)', why: 'Poder: puedo, puedes, puede — но podemos, без -ue-.' },
        ],
      },
      { kind: 'line', who: 'carlos', es: 'Yo no puedo. Debo estudiar ruso. ¡Spasibo! Pero Pablo sí puede.', ru: 'Я не могу. Мне нужно учить русский. Спасибо! Но Пабло может.' },
      {
        kind: 'reply',
        ok: { es: 'Tengo que hablar con Pablo.', ru: 'Мне нужно поговорить с Пабло.' },
        bad: [
          { es: 'Tengo que hablo con Pablo.', ru: '…должен говорю с Пабло.', why: 'После tener que — начальная форма: tengo que hablar.' },
          { es: 'Tengo hablar con Pablo.', ru: '(без que)', why: 'Tener que: tengo que hablar.' },
        ],
      },
      { kind: 'narr', ru: 'Вечером под дверью вас ждёт записка. Аккуратный старомодный почерк: «Mañana, a las siete. C.»' },
    ],
    hook: 'Под дверью — записка от доньи Кармен: «Mañana, a las siete. C.» Завтра вы узнаете, что она скрывает.',
  },

  {
    lessonId: 'd32',
    title: 'Что ты делаешь?',
    place: 'Фотостудия Пабло',
    intro: [
      'До встречи с доньей Кармен ещё целый день. Вы заходите к Пабло в студию — договориться о Барселоне.',
      'Проявочная, лампы, а на большом столе — десятки фотографий. На всех — Лусия.',
    ],
    cast: ['pablo'],
    scene: [
      { kind: 'line', who: 'pablo', es: '¡Hola! ¿Qué haces aquí?', ru: 'Привет! Что ты тут делаешь?' },
      {
        kind: 'reply',
        ok: { es: 'Nada. ¿Y tú? ¿Qué haces?', ru: 'Ничего. А ты? Что делаешь?' },
        bad: [
          { es: 'Nada. ¿Y tú? ¿Qué hago?', ru: 'Ничего. А ты? Что я делаю?', why: 'Hago — «я делаю». Спрашиваете его: ¿qué haces?' },
          { es: 'Nada. ¿Y tú? ¿Qué hace?', ru: 'Ничего. А ты? Что он делает?', why: 'Hace — «он делает» или «вы делаете». С Пабло на «ты»: haces.' },
        ],
      },
      {
        kind: 'line',
        who: 'pablo',
        es: 'Hago un libro de fotos. Para Lucía.',
        ru: 'Делаю фотокнигу. Для Лусии.',
        note: 'Hacer — «делать»: hago, haces, hace, hacemos, hacéis, hacen. Особая только форма «я» — hago.',
      },
      {
        kind: 'reply',
        ok: { es: '¡Qué bonito! ¿Hacemos el libro juntos?', ru: 'Как здорово! Сделаем книгу вместе?' },
        bad: [
          { es: '¡Qué bonito! ¿Hacimos el libro juntos?', ru: '(ошибка в форме)', why: '«Мы делаем» — hacemos.' },
          { es: '¡Qué bonito! ¿Hago el libro juntos?', ru: '…Я сделаю книгу вместе?', why: 'Juntos — «вместе», значит «мы»: hacemos.' },
        ],
      },
      { kind: 'line', who: 'pablo', es: 'Sí, gracias. Oye… ¿y tú qué haces con la carta?', ru: 'Да, спасибо. Слушай… а ты что будешь делать с письмом?' },
      {
        kind: 'reply',
        ok: { es: 'No sé qué hacer. Hoy hablo con doña Carmen.', ru: 'Не знаю, что делать. Сегодня поговорю с доньей Кармен.' },
        bad: [
          { es: 'No sé qué hacer. Hoy hablas con doña Carmen.', ru: '…Сегодня ты говоришь с доньей Кармен.', why: 'Hablas — «ты говоришь». О себе: hablo.' },
          { es: 'No sé qué hacer. Hoy hablo a doña Carmen.', ru: '(не тот предлог)', why: 'Говорить с кем-то — hablar con: hablo con doña Carmen.' },
        ],
      },
    ],
    hook: '«¿Y tú qué haces con la carta?» — ответ ждёт за дверью доньи Кармен. Ровно в семь.',
  },

  {
    lessonId: 'd33',
    title: 'Письмо вслух',
    place: 'Квартира доньи Кармен',
    intro: [
      'Ровно семь. Вы спускаетесь на этаж ниже и звоните в дверь.',
      'Донья Кармен открывает сразу — будто стояла за дверью.',
    ],
    cast: ['carmen'],
    scene: [
      { kind: 'line', who: 'carmen', es: 'Pase. ¿De dónde viene usted?', ru: 'Проходите. Откуда вы?' },
      {
        kind: 'reply',
        ok: { es: 'Vengo de la oficina.', ru: 'Я из офиса.' },
        bad: [
          { es: 'Veno de la oficina.', ru: '(ошибка в форме)', why: 'Venir в форме «я» — vengo. Это группа «я-го».' },
          { es: 'Vienes de la oficina.', ru: 'Ты из офиса.', why: 'Vienes — «ты приходишь». О себе: vengo.' },
        ],
        note: 'Группа «я-го»: tengo, hago, vengo, traigo, pongo, digo, salgo. Остальные формы почти обычные.',
      },
      { kind: 'line', who: 'carmen', es: '¿Trae la carta?', ru: 'Письмо принесли?' },
      {
        kind: 'reply',
        ok: { es: 'Sí, traigo la carta y la foto.', ru: 'Да, принес{|ла} письмо и фото.' },
        bad: [
          { es: 'Sí, trao la carta y la foto.', ru: '(ошибка в форме)', why: 'Traer в форме «я» — traigo.' },
          { es: 'Sí, trae la carta y la foto.', ru: 'Да, он приносит…', why: 'Trae — «он приносит» или «вы приносите». О себе: traigo.' },
        ],
      },
      { kind: 'line', who: 'carmen', es: 'Póngala en la mesa, por favor.', ru: 'Положите его на стол, пожалуйста.' },
      {
        kind: 'reply',
        ok: { es: 'La pongo aquí.', ru: 'Кладу сюда.' },
        bad: [
          { es: 'La pono aquí.', ru: '(ошибка в форме)', why: 'Poner в форме «я» — pongo.' },
          { es: 'Lo pongo aquí.', ru: 'Кладу его (м. р.) сюда.', why: 'Carta — женский род: la pongo.' },
        ],
      },
      { kind: 'narr', ru: 'Донья Кармен надевает очки и долго-долго смотрит на конверт. Потом снимает их.' },
      { kind: 'line', who: 'carmen', es: 'Léala, por favor. Yo no puedo.', ru: 'Прочитайте, пожалуйста. Я не могу.' },
      { kind: 'narr', ru: 'Вы читаете вслух: «Querida Elena… Te espero en el molino, el sábado veinte de mayo… Si no vienes, me voy a Barcelona. M.»' },
    ],
    hook: 'Донья Кармен слушает письмо, закрыв глаза. По её щеке катится слеза.',
  },

  {
    lessonId: 'd34',
    title: 'Признание',
    place: 'Квартира доньи Кармен',
    intro: ['Часы с маятником тикают слишком громко. Донья Кармен вытирает глаза кружевным платком.'],
    cast: ['carmen'],
    scene: [
      {
        kind: 'line',
        who: 'carmen',
        es: 'Conozco esta letra. Es de mi hermano. Miguel.',
        ru: 'Я знаю этот почерк. Это мой брат. Мигель.',
        note: 'Conocer — знать человека, место, почерк. Saber — знать факт или уметь.',
      },
      {
        kind: 'reply',
        ok: { es: '¿Su hermano? ¿Miguel Ortega, el fotógrafo?', ru: 'Ваш брат? Мигель Ортега, фотограф?' },
        bad: [
          { es: '¿Tu hermano? ¿Miguel Ortega, el fotógrafo?', ru: 'Твой брат?..', why: 'С доньей Кармен — на «вы»: su hermano.' },
          { es: '¿Su hermana? ¿Miguel Ortega, el fotógrafo?', ru: 'Ваша сестра?..', why: 'Мигель — мужчина: hermano.' },
        ],
      },
      { kind: 'line', who: 'carmen', es: 'Sí. Yo [era=была] una niña. Miguel [tenía=было] veinticinco años.', ru: 'Да. Я была девочкой. Мигелю было двадцать пять.' },
      { kind: 'line', who: 'carmen', es: 'Miguel nunca habla de Elena. Nunca.', ru: 'Мигель никогда не говорит о Елене. Никогда.' },
      {
        kind: 'reply',
        ok: { es: '¿Conoce usted a Elena?', ru: 'Вы знаете Елену?' },
        bad: [
          { es: '¿Sabe usted a Elena?', ru: 'Вы знаете (факт) Елену?', why: 'Человека «знают» через conocer: ¿conoce a Elena?' },
          { es: '¿Conoce usted Elena?', ru: '(без a)', why: 'Перед человеком после conocer ставят a: conoce a Elena.' },
        ],
      },
      { kind: 'line', who: 'carmen', es: 'Sí, la conozco. Era muy simpática. Trabajaba en la librería.', ru: 'Да, я её знаю. Она была очень милой. Работала в книжном.' },
      {
        kind: 'reply',
        ok: { es: '¿Sabe dónde vive ahora?', ru: 'Вы знаете, где она сейчас живёт?' },
        bad: [
          { es: '¿Conoce dónde vive ahora?', ru: '(не тот глагол)', why: 'Факт («где живёт») — saber: ¿sabe dónde vive?' },
          { es: '¿Sabes dónde vive ahora?', ru: 'Ты знаешь, где она живёт?', why: 'С доньей Кармен — на «вы»: ¿sabe?' },
        ],
      },
      { kind: 'line', who: 'carmen', es: 'Sé que vive en Consuegra. Con los molinos.', ru: 'Знаю, что она живёт в Консуэгре. Там, где мельницы.' },
      { kind: 'line', who: 'carmen', es: 'Y sé dónde vive Miguel. En Barcelona.', ru: 'И знаю, где живёт Мигель. В Барселоне.' },
    ],
    hook: 'Кармен — младшая сестра Мигеля. Он в Барселоне, Елена — в Консуэгре. И ни один из них не знает правды. Первая остановка — Барселона.',
  },

  {
    lessonId: 'd35',
    title: 'Барселона',
    place: 'Барселона, квартал Грасия',
    intro: [
      'Барселона, утро. Вы с Пабло выходите из метро — и над домами вырастают башни Саграда Фамилии.',
      'В кармане — адрес, который дала донья Кармен.',
    ],
    cast: ['pablo'],
    postcard: 'sagrada',
    scene: [
      { kind: 'line', who: 'pablo', es: '¿Tienes la carta?', ru: 'Письмо у тебя?' },
      {
        kind: 'reply',
        ok: { es: 'Sí, la tengo.', ru: 'Да, у меня.' },
        bad: [
          { es: 'Sí, lo tengo.', ru: 'Да, он у меня.', why: 'Carta — женский род: la tengo.' },
          { es: 'Sí, tengo la.', ru: '(местоимение после глагола)', why: 'Местоимение ставят перед глаголом: la tengo.' },
        ],
        note: 'Lo, la, los, las заменяют существительное и стоят перед глаголом: ¿la carta? — la tengo.',
      },
      { kind: 'line', who: 'pablo', es: '¿Y la dirección de Miguel?', ru: 'А адрес Мигеля?' },
      {
        kind: 'reply',
        ok: { es: 'Sí, también la tengo.', ru: 'Да, тоже у меня.' },
        bad: [
          { es: 'Sí, también lo tengo.', ru: 'Да, тоже у меня (м. р.).', why: 'Dirección — женский род: la tengo.' },
          { es: 'Sí, la también tengo.', ru: '(не там местоимение)', why: 'Местоимение — прямо перед глаголом: también la tengo.' },
        ],
      },
      { kind: 'narr', ru: 'Узкая улочка в квартале Грасия. Старая деревянная дверь, табличка: «Estudio fotográfico. M. Ortega».' },
      { kind: 'line', who: 'pablo', es: '¿Ves el nombre?', ru: 'Видишь имя?' },
      {
        kind: 'reply',
        ok: { es: 'Sí, lo veo. M. Ortega.', ru: 'Да, вижу. М. Ортега.' },
        bad: [
          { es: 'Sí, la veo. M. Ortega.', ru: 'Да, вижу её.', why: 'Nombre — мужской род: lo veo.' },
          { es: 'Sí, veo lo. M. Ortega.', ru: '(местоимение после глагола)', why: 'Перед глаголом: lo veo.' },
        ],
      },
      { kind: 'narr', ru: 'Вы звоните. Тишина. Потом шаги. Дверь медленно открывается.' },
    ],
    hook: 'Дверь открывает пожилой мужчина с камерой на шее. Тот самый Мигель?',
  },

  {
    lessonId: 'd36',
    title: 'Мигель',
    place: 'Студия Мигеля и парк Гуэль',
    intro: ['Седой мужчина в старом вязаном жилете смотрит на вас поверх очков.'],
    cast: ['miguel', 'pablo'],
    postcard: 'guell',
    scene: [
      { kind: 'line', who: 'miguel', es: '¿Sí? ¿Qué desean?', ru: 'Да? Что вам угодно?' },
      {
        kind: 'reply',
        ok: { es: 'Buenos días. ¿Es usted Miguel Ortega?', ru: 'Добрый день. Вы Мигель Ортега?' },
        bad: [
          { es: 'Buenos días. ¿Está usted Miguel Ortega?', ru: 'Вы находитесь Мигель Ортега?', why: 'Кто вы — ser: ¿es usted…?' },
          { es: 'Buenos días. ¿Eres Miguel Ortega?', ru: 'Ты Мигель Ортега?', why: 'С пожилым незнакомцем — на «вы»: ¿es usted…?' },
        ],
      },
      { kind: 'line', who: 'miguel', es: 'Sí, soy yo. Pero estoy ocupado…', ru: 'Да, это я. Но я занят…' },
      { kind: 'narr', ru: 'Вы молча протягиваете конверт. Мигель узнаёт свой почерк — и бледнеет. Он предлагает пройтись. Парк Гуэль, мозаичная скамья, город внизу. Долгое молчание.' },
      {
        kind: 'line',
        who: 'miguel',
        es: 'Estoy nervioso. Son casi cincuenta años…',
        ru: 'Я волнуюсь. Прошло почти пятьдесят лет…',
        note: 'Состояние «сейчас» — estar: estoy nervioso, estoy ocupado, estoy tranquilo.',
      },
      {
        kind: 'reply',
        ok: { es: 'Tranquilo, Miguel. Estamos aquí.', ru: 'Спокойно, Мигель. Мы рядом.' },
        bad: [
          { es: 'Tranquila, Miguel. Estamos aquí.', ru: '(не тот род)', why: 'Мигель — мужчина: tranquilo.' },
          { es: 'Eres tranquilo, Miguel. Estamos aquí.', ru: 'Ты по натуре спокойный, Мигель.', why: 'Eres tranquilo — «ты спокойный по характеру». А его надо успокоить сейчас: tranquilo.' },
        ],
      },
      { kind: 'line', who: 'miguel', es: '¿Estás segur{o|a}? ¿Elena no sabe nada?', ru: 'Ты {уверен|уверена}? Елена ничего не знает?' },
      {
        kind: 'reply',
        ok: { es: 'Sí, estoy segur{o|a}. No tiene la carta.', ru: 'Да, я {уверен|уверена}. Письма у неё нет.' },
        bad: [
          { es: 'Sí, soy segur{o|a}. No tiene la carta.', ru: 'Да, я по натуре {уверенный|уверенная}.', why: 'Уверенность сейчас — estar: estoy segur{o|a}.' },
          {
            es: 'Sí, estoy segur{a|o}. No tiene la carta.',
            ru: 'Да, я {уверена|уверен}.',
            why: 'Окончание — по вашему роду: {seguro|segura}.',
          },
        ],
      },
      { kind: 'line', who: 'miguel', es: 'Entonces… estoy de acuerdo. [Llévale=отнеси ей] la carta. Yo… no puedo.', ru: 'Тогда… я согласен. Отвезите ей письмо. Я… не могу.' },
    ],
    hook: '«Llévale la carta. Yo… no puedo», — говорит Мигель и отдаёт вам ещё одну фотографию: Елена у мельницы, май 1978-го.',
  },

  {
    lessonId: 'd37',
    title: 'Как это было',
    place: 'Книжный «La Pluma»',
    intro: ['Мадрид. Книжный «La Pluma». Лусия бросается вам навстречу, кот Кихот — следом.'],
    cast: ['lucia'],
    scene: [
      { kind: 'line', who: 'lucia', es: '¡[Cuéntame=расскажи мне]! ¿Cómo fue?', ru: 'Рассказывай! Как всё прошло?' },
      {
        kind: 'reply',
        ok: { es: 'Fue muy emocionante.', ru: 'Это было очень трогательно.' },
        bad: [
          { es: 'Es muy emocionante.', ru: 'Это очень трогательно (сейчас).', why: 'Встреча уже прошла — fue: fue muy emocionante.' },
          { es: 'Fui muy emocionante.', ru: 'Я был{|а} очень трогательн{ым|ой}.', why: 'Fui — «я был». О событии: fue.' },
        ],
        note: 'Fue — «это было» (о событии целиком): fue interesante, fue difícil.',
      },
      { kind: 'line', who: 'lucia', es: '¿Y Miguel? ¿Cómo es?', ru: 'А Мигель? Какой он?' },
      {
        kind: 'reply',
        ok: { es: 'Es tan tranquilo… y tan triste.', ru: 'Такой спокойный… и такой грустный.' },
        bad: [
          { es: 'Es tan muy tranquilo… y tan triste.', ru: '(tan и muy вместе)', why: 'Tan и muy вместе не ставят: tan tranquilo.' },
          { es: 'Es tanto tranquilo… y tanto triste.', ru: '(не то слово)', why: 'Перед прилагательным — tan: tan tranquilo.' },
        ],
        note: 'Tan — «так, такой»: tan tranquilo, tan triste.',
      },
      { kind: 'line', who: 'lucia', es: '¡Qué historia! ¿Y la foto?', ru: 'Вот это история! А фото?' },
      { kind: 'narr', ru: 'Вы показываете фото Елены у мельницы. Лусия долго молчит.' },
      { kind: 'line', who: 'lucia', es: 'Es tan bonita… Vamos todos a Consuegra.', ru: 'Она такая красивая… Едем все в Консуэгру.' },
      {
        kind: 'reply',
        ok: { es: '¡Es una idea muy buena!', ru: 'Очень хорошая идея!' },
        bad: [
          { es: '¡Es una idea muy bueno!', ru: '(не тот род)', why: 'Idea — женский род: buena.' },
          { es: '¡Es un idea muy buena!', ru: '(не тот артикль)', why: 'Idea — женский род: una idea.' },
        ],
      },
    ],
    hook: '«Vamos todos a Consuegra», — решает Лусия. Осталось договориться — и, кажется, не только о поездке.',
  },

  {
    lessonId: 'd38',
    title: 'Приглашение',
    place: 'Книжный «La Pluma»',
    intro: ['Вы с Лусией раскладываете на прилавке карту Ла-Манчи. Кот Кихот лежит прямо на Консуэгре.'],
    cast: ['lucia', 'pablo'],
    scene: [
      { kind: 'line', who: 'lucia', es: '¿Qué tal si vamos el sábado?', ru: 'Как насчёт субботы?' },
      {
        kind: 'reply',
        ok: { es: 'Me parece bien.', ru: 'Меня устраивает.' },
        bad: [
          { es: 'Me parezco bien.', ru: 'Я выгляжу хорошо.', why: '«Мне кажется хорошим» — me parece bien. Me parezco — «я похож».' },
          { es: 'Te parece bien.', ru: 'Тебя устраивает.', why: 'Te parece — «тебе кажется». О себе: me parece bien.' },
        ],
      },
      { kind: 'line', who: 'lucia', es: '¿A qué hora quedamos?', ru: 'Во сколько встречаемся?' },
      {
        kind: 'reply',
        ok: { es: 'Quedamos a las ocho, en la estación.', ru: 'Встречаемся в восемь на вокзале.' },
        bad: [
          { es: 'Quedamos en las ocho, en la estación.', ru: '(не тот предлог времени)', why: 'Время — a las ocho. En — место: en la estación.' },
          { es: 'Quedamos a las ocho, a la estación.', ru: '(не тот предлог места)', why: 'Место встречи — en: en la estación.' },
        ],
        note: 'Quedar — «договориться встретиться»: ¿a qué hora quedamos? — quedamos a las ocho.',
      },
      { kind: 'narr', ru: 'Звякает колокольчик. В книжный заходит Пабло — с букетом. Вы делаете вид, что очень заняты полкой с поэзией.' },
      { kind: 'line', who: 'pablo', es: 'Lucía… ¿te apetece un café? Conmigo. Solo tú y yo.', ru: 'Лусия… хочешь кофе? Со мной. Только ты и я.' },
      {
        kind: 'line',
        who: 'lucia',
        es: 'Con mucho gusto. ¡Claro que sí!',
        ru: 'С удовольствием. Конечно!',
        note: 'Claro que sí — «конечно!», con mucho gusto — «с удовольствием». Мягкий отказ: lo siento, no puedo.',
      },
      { kind: 'line', who: 'pablo', es: '¿Y tú? ¿Quieres venir?', ru: 'А ты? Хочешь с нами?' },
      {
        kind: 'reply',
        ok: { es: 'Lo siento, no puedo. ¡Otro día!', ru: 'Извини, не могу. В другой раз!' },
        bad: [
          { es: 'Lo siento, no quiero. ¡Otro día!', ru: 'Извини, не хочу.', why: 'No quiero — «не хочу», звучит резко. Вежливо: lo siento, no puedo.' },
          { es: 'Con mucho gusto.', ru: 'С удовольствием.', why: 'Это свидание Пабло и Лусии — тут лучше вежливо отказаться 🙂' },
        ],
      },
    ],
    hook: 'Пабло и Лусия идут пить кофе — вдвоём. А в субботу в восемь вы все встречаетесь на вокзале. Следующая остановка — мельницы.',
  },

  {
    lessonId: 'd39',
    title: 'Хорошие новости',
    place: 'Турагентство «Viajes Sol»',
    intro: ['Пятница. Исабель зовёт вас в свой кабинет и закрывает дверь. Сердце уходит в пятки.'],
    cast: ['extraF', 'carlos'],
    scene: [
      { kind: 'line', who: 'extraF', as: 'Isabel', es: 'Tengo una buena noticia: tu contrato es fijo.', ru: 'У меня хорошая новость: твой контракт — постоянный.' },
      {
        kind: 'reply',
        ok: { es: '¡Qué bien! Estoy muy content{o|a} con mi trabajo.', ru: 'Как здорово! Я очень {доволен|довольна} своей работой.' },
        bad: [
          { es: '¡Qué bien! Soy muy content{o|a} con mi trabajo.', ru: '…я по натуре {довольный|довольная}.', why: 'Довольство сейчас — estar: estoy content{o|a}.' },
          {
            es: '¡Qué bien! Estoy muy content{a|o} con mi trabajo.',
            ru: '…я {довольна|доволен}.',
            why: 'Окончание — по вашему роду: {contento|contenta}.',
          },
        ],
      },
      {
        kind: 'line',
        who: 'extraF',
        as: 'Isabel',
        es: 'Y otra noticia: un tour nuevo, «La Mancha de don Quijote». ¿Empiezas mañana?',
        ru: 'И ещё новость: новый тур, «Ла-Манча Дон Кихота». Начнёшь завтра?',
      },
      {
        kind: 'reply',
        ok: { es: 'Sí, empiezo mañana. ¡Voy a Consuegra!', ru: 'Да, начну завтра. Еду в Консуэгру!' },
        bad: [
          { es: 'Sí, empezo mañana. ¡Voy a Consuegra!', ru: '(ошибка в форме)', why: 'Empezar меняет корень: empiezo.' },
          { es: 'Sí, empiezas mañana. ¡Voy a Consuegra!', ru: 'Да, ты начинаешь…', why: 'Empiezas — «ты начинаешь». О себе: empiezo.' },
        ],
        note: 'У некоторых глаголов корень меняется: empezar → empiezo, poder → puedo, querer → quiero.',
      },
      { kind: 'line', who: 'carlos', es: '¡Felicidades! Mi compañer{o es el|a es la} mejor… ¡después de mí!', ru: 'Поздравляю! {Мой коллега — лучший|Моя коллега — лучшая}… после меня!' },
      {
        kind: 'reply',
        ok: { es: 'Gracias, Carlos. Mi compañero también es muy amable.', ru: 'Спасибо, Карлос. Мой коллега тоже очень славный.' },
        bad: [
          { es: 'Gracias, Carlos. Mi compañero también eres muy amable.', ru: '…ты есть славный.', why: 'Mi compañero — «он»: es muy amable.' },
          { es: 'Gracias, Carlos. Mi compañero también está muy amable.', ru: '…сейчас славный.', why: 'Черта характера — ser: es amable.' },
        ],
      },
    ],
    hook: 'Постоянный контракт и новый тур — в Ла-Манчу. Завтра Консуэгра. Завтра письмо наконец дойдёт до Елены.',
  },

  {
    lessonId: 'd40',
    title: 'Мельница',
    place: 'Консуэгра, холм Кальдерико',
    intro: [
      'Консуэгра. Двенадцать белых мельниц на холме, средневековый замок, ветер и бескрайние поля Ла-Манчи.',
      'У самой дальней мельницы на скамейке сидит пожилая женщина и смотрит на дорогу.',
    ],
    cast: ['elena', 'lucia', 'pablo'],
    postcard: 'consuegra',
    scene: [
      { kind: 'line', who: 'elena', es: 'Buenas tardes. ¿Buscan a alguien?', ru: 'Добрый день. Вы кого-то ищете?' },
      {
        kind: 'reply',
        ok: { es: 'Buenas tardes. ¿Es usted Elena Martín?', ru: 'Добрый день. Вы Елена Мартин?' },
        bad: [
          { es: 'Buenas tardes. ¿Eres Elena Martín?', ru: 'Ты Елена Мартин?', why: 'С пожилой незнакомой женщиной — на «вы»: ¿es usted…?' },
          { es: 'Buenas tardes. ¿Está usted Elena Martín?', ru: 'Вы находитесь Елена Мартин?', why: 'Кто вы — ser: ¿es usted…?' },
        ],
      },
      { kind: 'line', who: 'elena', es: 'Sí, soy yo. ¿Y ustedes?', ru: 'Да, это я. А вы кто?' },
      { kind: 'narr', ru: 'Вы протягиваете конверт. Елена узнаёт почерк — и долго не решается его открыть.' },
      {
        kind: 'line',
        who: 'elena',
        es: 'Cuando era joven, vivía en Madrid. Trabajaba en una librería.',
        ru: 'Когда я была молодой, я жила в Мадриде. Работала в книжном.',
        note: 'Imperfecto — «как было раньше»: фон, привычки, описание. Era, vivía, trabajaba.',
      },
      {
        kind: 'line',
        who: 'elena',
        es: 'Miguel venía todos los días. Compraba libros… y no los leía.',
        ru: 'Мигель приходил каждый день. Покупал книги… и не читал их.',
      },
      {
        kind: 'reply',
        ok: { es: '¿Y usted lo esperaba?', ru: 'А вы его ждали?' },
        bad: [
          { es: '¿Y usted lo espera?', ru: 'А вы его ждёте?', why: 'Речь о прошлом, о том, как было, — imperfecto: ¿lo esperaba?' },
          { es: '¿Y usted la esperaba?', ru: 'А вы её ждали?', why: 'Ждала его — Мигеля: lo esperaba.' },
        ],
      },
      { kind: 'line', who: 'elena', es: 'Sí. Un sábado de mayo lo esperaba aquí, en el molino. Pero él no [vino=пришёл].', ru: 'Да. Одной майской субботой я ждала его здесь, у мельницы. Но он не пришёл.' },
      { kind: 'narr', ru: 'Елена читает письмо. Лусия тихо берёт Пабло за руку. Ветер крутит крылья мельницы.' },
      { kind: 'line', who: 'elena', es: 'Él no sabía… Yo no sabía… Todo era un error.', ru: 'Он не знал… Я не знала… Всё было ошибкой.' },
      {
        kind: 'reply',
        ok: { es: 'Miguel vive en Barcelona. Y tiene su foto.', ru: 'Мигель живёт в Барселоне. И у него ваша фотография.' },
        bad: [
          { es: 'Miguel vivía en Barcelona. Y tiene su foto.', ru: 'Мигель жил в Барселоне…', why: 'Он живёт там сейчас — настоящее время: vive.' },
          { es: 'Miguel vive en Barcelona. Y tiene tu foto.', ru: '…И у него твоя фотография.', why: 'С Еленой — на «вы»: su foto.' },
        ],
      },
      { kind: 'narr', ru: 'Елена медленно поднимает глаза.' },
      { kind: 'line', who: 'elena', es: '¿Y Miguel… dónde está ahora? ¿Puedo verlo?', ru: 'А Мигель… где он сейчас? Я могу его увидеть?' },
    ],
    hook: '«¿Y Miguel… dónde está ahora? ¿Puedo verlo?» Письмо, которое ждало почти полвека, наконец дошло. Продолжение следует…',
  },
];
