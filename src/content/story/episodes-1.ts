import type { Episode } from '../../types';

// Глава 1. «Hola, Madrid» (уроки 1–8)
export const EPISODES_1: Episode[] = [
  {
    lessonId: 'd01',
    title: 'Первое утро',
    place: 'Бар на углу, квартал Литераторов',
    intro: [
      'Вчера вечером {name} прилетел{|а} в Мадрид. Чемодан ещё не разобран, а через неделю — первый рабочий день в турагентстве «Viajes Sol».',
      'Вы живёте в Barrio de las Letras — квартале Литераторов: здесь жили Сервантес и Лопе де Вега, а на мостовой улицы Huertas выложены цитаты из книг. На углу — крошечный бар, оттуда пахнет кофе.',
      'Пора сказать первые слова по-испански.',
    ],
    cast: ['extraM', 'lucia'],
    postcard: 'sol',
    scene: [
      { kind: 'narr', ru: 'Вы заходите в бар. За стойкой — официант с полотенцем на плече.' },
      {
        kind: 'line',
        who: 'extraM',
        as: 'Camarero',
        es: '¡Buenos días!',
        ru: 'Доброе утро!',
        note: 'Ударение — на предпоследний слог, если слово кончается на гласную, -n или -s: BUEnos. В días значок ´ показывает, что ударная — í.',
      },
      {
        kind: 'reply',
        ok: { es: '¡Buenos días!', ru: 'Доброе утро!' },
        bad: [
          { es: '¡Buenas noches!', ru: 'Добрый вечер!', why: 'Buenas noches говорят вечером и перед сном, а сейчас утро.' },
          { es: '¡Adiós!', ru: 'До свидания!', why: 'Adiós — «до свидания». Так прощаются, а вы только пришли.' },
        ],
      },
      { kind: 'narr', ru: 'Вы показываете на кофемашину. Официант кивает и ставит перед вами чашку.' },
      {
        kind: 'line',
        who: 'extraM',
        as: 'Camarero',
        es: 'Aquí tiene.',
        ru: 'Вот, пожалуйста.',
        note: 'Qu читается как «к»: aquí — «аки». Буква u после q не произносится.',
      },
      {
        kind: 'reply',
        ok: { es: 'Gracias.', ru: 'Спасибо.' },
        bad: [
          { es: 'De nada.', ru: 'Не за что.', why: 'De nada — ответ на «спасибо». А благодарить здесь должны вы.' },
          { es: 'Perdón.', ru: 'Извините.', why: 'Perdón — «извините». Извиняться не за что: вам принесли кофе.' },
        ],
      },
      { kind: 'line', who: 'extraM', as: 'Camarero', es: 'De nada.', ru: 'Не за что.' },
      { kind: 'narr', ru: 'Кофе выпит. Пора домой — разбирать чемодан.' },
      {
        kind: 'reply',
        ok: { es: '¡Hasta luego!', ru: 'До скорого!' },
        bad: [
          { es: '¡Buenos días!', ru: 'Доброе утро!', why: 'Это приветствие, а вы уходите.' },
          { es: 'Por favor.', ru: 'Пожалуйста.', why: 'Por favor — «пожалуйста», когда о чём-то просят. А вы прощаетесь.' },
        ],
        note: 'H не читается: hasta — «аста». Буква есть, звука нет.',
      },
      { kind: 'line', who: 'extraM', as: 'Camarero', es: '¡Hasta mañana!', ru: 'До завтра!' },
      { kind: 'narr', ru: 'В дверях в вас врезается девушка с охапкой книг. Книги летят на пол.' },
      { kind: 'line', who: 'lucia', as: 'Chica', es: '¡Ay! ¡Perdón, perdón!', ru: 'Ой! Извините, извините!' },
      { kind: 'narr', ru: 'Вы вместе собираете книги.' },
      { kind: 'line', who: 'lucia', as: 'Chica', es: '¡Gracias!', ru: 'Спасибо!' },
      {
        kind: 'reply',
        ok: { es: 'De nada.', ru: 'Не за что.' },
        bad: [
          { es: 'Gracias.', ru: 'Спасибо.', why: 'Она уже поблагодарила вас. На «gracias» отвечают «de nada».' },
          { es: 'Sí.', ru: 'Да.', why: '«Да» — не ответ на «спасибо». Нужно «не за что»: de nada.' },
        ],
      },
      { kind: 'line', who: 'lucia', as: 'Chica', es: '¡Adiós!', ru: 'До свидания!' },
    ],
    hook: 'Девушка с книгами убегает… и исчезает в вашем подъезде. Кто она — и куда так торопилась?',
  },

  {
    lessonId: 'd02',
    title: 'Вечеринка соседки',
    place: 'Квартира напротив, Barrio de las Letras',
    intro: [
      'Вечер. Чемодан наконец разобран. Из-за стены доносится музыка и смех.',
      'В дверь стучат. На пороге — та самая девушка с книгами. Теперь без книг, зато с улыбкой.',
    ],
    cast: ['lucia', 'pablo'],
    scene: [
      { kind: 'line', who: 'lucia', es: '¡Hola! ¿Cómo estás?', ru: 'Привет! Как дела?' },
      {
        kind: 'reply',
        ok: { es: 'Muy bien, gracias. ¿Y tú?', ru: 'Очень хорошо, спасибо. А ты?' },
        bad: [
          { es: 'Me llamo bien.', ru: 'Меня зовут хорошо.', why: 'Me llamo — «меня зовут». На «как дела?» отвечают: muy bien, gracias.' },
          { es: 'Soy de Rusia.', ru: 'Я из России.', why: 'Это ответ на «откуда ты?». А вас спросили, как дела.' },
        ],
      },
      {
        kind: 'line',
        who: 'lucia',
        es: 'Muy bien. Me llamo Lucía. ¿Cómo te llamas?',
        ru: 'Отлично. Меня зовут Лусия. А тебя как зовут?',
        note: 'Me llamo — «меня зовут», дословно «я зову себя». Te llamas — «тебя зовут». Вопрос начинается с перевёрнутого знака ¿.',
      },
      {
        kind: 'reply',
        ok: { es: 'Mucho gusto. Me llamo {name}.', ru: 'Очень приятно. Меня зовут {name}.' },
        bad: [
          { es: 'Mucho gusto. Te llamo {name}.', ru: 'Очень приятно. Я зову тебя {name}.', why: 'Te llamo — «я зову тебя». О себе говорят: me llamo.' },
          { es: 'Mucho gusto. Se llama {name}.', ru: 'Очень приятно. Его зовут {name}.', why: 'Se llama — «его/её зовут» или «вас зовут». О себе: me llamo.' },
        ],
      },
      { kind: 'line', who: 'lucia', es: '¡Mucho gusto! Hay una fiesta en mi casa. ¡Vamos!', ru: 'Очень приятно! У меня вечеринка. Пошли!' },
      { kind: 'narr', ru: 'Квартира Лусии — сплошные книги: на полках, на стульях, даже на подоконниках. У окна стоит парень с фотоаппаратом.' },
      {
        kind: 'line',
        who: 'pablo',
        es: '¡Hola! Soy Pablo. ¿De dónde eres?',
        ru: 'Привет! Я Пабло. Ты откуда?',
        note: 'Eres — форма ser («быть») для «ты». ¿De dónde eres? — «откуда ты родом?».',
      },
      {
        kind: 'reply',
        ok: { es: 'Soy de Rusia. ¿Y tú?', ru: 'Я из России. А ты?' },
        bad: [
          { es: 'Estoy de Rusia. ¿Y tú?', ru: 'Я нахожусь из России. А ты?', why: 'Происхождение — это ser: soy de Rusia. Estar — где вы сейчас.' },
          { es: 'Eres de Rusia. ¿Y tú?', ru: 'Ты из России. А ты?', why: 'Eres — «ты есть». О себе говорят soy: soy de Rusia.' },
        ],
      },
      { kind: 'line', who: 'pablo', es: 'Soy de Madrid. Encantado.', ru: 'Я из Мадрида. Рад знакомству.' },
      {
        kind: 'reply',
        ok: { es: 'Encantad{o|a}.', ru: 'Рад{|а} знакомству.' },
        bad: [
          {
            es: 'Encantad{a|o}.',
            ru: 'Рад{а|} знакомству.',
            why: 'Encantado / encantada согласуется с тем, кто говорит. {Вы — мужчина, поэтому encantado|Вы — женщина, поэтому encantada}.',
          },
          { es: 'Más o menos.', ru: 'Так себе.', why: '«Так себе» в ответ на знакомство прозвучит обидно 🙂 Скажите «рад(а) познакомиться».' },
        ],
      },
      { kind: 'narr', ru: 'Пабло вежливо улыбается — и тут же оборачивается к Лусии. Весь вечер он не сводит с неё глаз.' },
      { kind: 'line', who: 'lucia', es: '¿Pablo? Es fotógrafo. Es… un amigo.', ru: 'Пабло? Он фотограф. Он… друг.' },
    ],
    hook: '«Él es fotógrafo. Solo un amigo», — шепчет Лусия и почему-то краснеет.',
  },

  {
    lessonId: 'd03',
    title: 'Первый рабочий день',
    place: 'Турагентство «Viajes Sol»',
    intro: [
      'Понедельник. Агентство «Viajes Sol» — две комнаты, карта Испании во всю стену и запах кофе.',
      'Здесь вы будете водить экскурсии для русскоязычных туристов. Осталось познакомиться с коллегами.',
    ],
    cast: ['carlos', 'extraF'],
    scene: [
      {
        kind: 'line',
        who: 'carlos',
        es: '¡Hola! Soy Carlos. ¿Eres {el nuevo|la nueva}?',
        ru: 'Привет! Я Карлос. Ты {новенький|новенькая}?',
        note: 'Soy — «я есть», eres — «ты есть». В испанском глагол «быть» не пропускают: Soy Carlos.',
      },
      {
        kind: 'reply',
        ok: { es: 'Sí, soy yo. Mucho gusto.', ru: 'Да, это я. Очень приятно.' },
        bad: [
          { es: 'Sí, eres yo. Mucho gusto.', ru: 'Да, ты — я. Очень приятно.', why: 'Eres — «ты есть». О себе: soy yo.' },
          { es: 'Sí, es yo. Mucho gusto.', ru: 'Да, он — я. Очень приятно.', why: 'Es — «он/она есть». О себе: soy yo.' },
        ],
      },
      { kind: 'line', who: 'carlos', es: 'Mira, es una foto del equipo. Ella es Isabel, la jefa. Es muy amable.', ru: 'Смотри, это фото команды. Это Исабель, начальница. Она очень любезная.' },
      {
        kind: 'reply',
        ok: { es: '¿Y quién es él?', ru: 'А кто он?' },
        bad: [
          { es: '¿Y qué es él?', ru: 'А что он такое?', why: 'О людях спрашивают quién — «кто». Qué — «что»: ¿Qué es esto?' },
          { es: '¿Y quién eres él?', ru: 'А кто ты он?', why: 'Él — «он», значит глагол es: ¿Quién es él?' },
        ],
      },
      { kind: 'line', who: 'carlos', es: 'Es mi hermano, Toni. Es camarero. Y es muy guapo, como yo.', ru: 'Это мой брат Тони. Он официант. И очень красивый, как я.' },
      { kind: 'narr', ru: 'Карлос показывает следующее фото: маленькая собака в костюме тореадора.' },
      { kind: 'line', who: 'carlos', es: '¿Y qué es esto? ¡Es mi perro, Chorizo!', ru: 'А это что? Это мой пёс, Чорисо!' },
      {
        kind: 'reply',
        ok: { es: '¡Hola, Chorizo! Somos amigos.', ru: 'Привет, Чорисо! Мы друзья.' },
        bad: [
          { es: '¡Hola, Chorizo! Sois amigos.', ru: 'Привет, Чорисо! Вы друзья.', why: 'Sois — «вы (все) есть». «Мы друзья» — somos amigos.' },
          { es: '¡Hola, Chorizo! Son amigos.', ru: 'Привет, Чорисо! Они друзья.', why: 'Son — «они есть». «Мы друзья» — somos amigos.' },
        ],
        note: 'Ser: soy, eres, es, somos, sois, son. «Мы» — всегда somos.',
      },
      { kind: 'line', who: 'carlos', es: '¡Ja, ja! Eres muy simpátic{o|a}.', ru: 'Ха-ха! Ты очень {славный|славная}.' },
      { kind: 'narr', ru: 'В дверях появляется начальница, Исабель, с толстой папкой.' },
      { kind: 'line', who: 'extraF', as: 'Isabel', es: 'Mañana es tu primera excursión: la Plaza Mayor. ¿Vale?', ru: 'Завтра твоя первая экскурсия: Пласа-Майор. Хорошо?' },
      {
        kind: 'reply',
        ok: { es: 'Sí, muy bien.', ru: 'Да, очень хорошо.' },
        bad: [
          { es: 'Sí, soy muy bien.', ru: 'Да, я есть очень хорошо.', why: '«Хорошо» — просто muy bien, без глагола. Soy muy bien по-испански не говорят.' },
          { es: 'Sí, es muy bien.', ru: 'Да, это есть очень хорошо.', why: 'Достаточно muy bien или vale — без es.' },
        ],
      },
    ],
    hook: 'Первая экскурсия — уже завтра, на Пласа-Майор. А вы сами там ещё ни разу не были…',
  },

  {
    lessonId: 'd04',
    title: 'Экскурсия на Пласа-Майор',
    place: 'Plaza Mayor',
    intro: [
      'Первая экскурсия! Десять туристов из Москвы, жаркое солнце и огромная площадь под аркадами.',
      'Всё идёт отлично — пока вы не решаете пересчитать группу. Для практики — по-испански: uno, dos, tres… nueve. Девять?!',
    ],
    cast: ['lucia'],
    postcard: 'plazamayor',
    scene: [
      { kind: 'narr', ru: 'Вы пересчитываете ещё раз: девять. Одного туриста не хватает. И тут вас кто-то окликает.' },
      { kind: 'line', who: 'lucia', es: '¡Hola! ¿Buscas a un turista? Está aquí, con mis libros.', ru: 'Привет! Ищешь туриста? Он здесь, у моих книг.' },
      { kind: 'narr', ru: 'Лусия торгует книгами на ярмарке под аркадами. Десятый турист нашёлся у её прилавка.' },
      {
        kind: 'line',
        who: 'lucia',
        es: 'Oye, ¿cuántos años tienes?',
        ru: 'Слушай, а сколько тебе лет?',
        note: 'Возраст по-испански «имеют»: tengo veinte años — дословно «имею двадцать лет».',
      },
      {
        kind: 'reply',
        ok: { es: 'Tengo veinte años. ¿Y tú?', ru: 'Мне двадцать лет. А тебе?' },
        bad: [
          { es: 'Soy veinte años. ¿Y tú?', ru: 'Я есть двадцать лет. А тебе?', why: 'Возраст — это tener: tengo veinte años.' },
          { es: 'Estoy veinte años. ¿Y tú?', ru: 'Я нахожусь двадцать лет. А тебе?', why: 'Estar — где и как. Возраст — tener: tengo veinte años.' },
        ],
      },
      { kind: 'line', who: 'lucia', es: 'Tengo veintiocho. ¿Tienes hermanos?', ru: 'Мне двадцать восемь. У тебя есть братья или сёстры?' },
      {
        kind: 'reply',
        ok: { es: 'Sí, tengo dos hermanos.', ru: 'Да, у меня двое.' },
        bad: [
          { es: 'Sí, tengo dos hermano.', ru: 'Да, у меня два брат.', why: 'После dos — множественное число: dos hermanos.' },
          { es: 'Sí, tienes dos hermanos.', ru: 'Да, у тебя двое.', why: 'Tienes — «у тебя есть». О себе: tengo.' },
        ],
      },
      { kind: 'line', who: 'lucia', es: 'Yo no. Pero tengo muchos libros. ¡Ja, ja!', ru: 'А у меня нет. Зато у меня много книг. Ха-ха!' },
      {
        kind: 'line',
        who: 'lucia',
        es: 'Mi librería es [la más antigua=самая старая] del barrio. ¡[Ven a verla=приходи посмотреть]!',
        ru: 'Мой книжный — самый старый в квартале. Приходи посмотреть!',
      },
      {
        kind: 'reply',
        ok: { es: '¡Sí, gracias! ¡Hasta mañana!', ru: 'Да, спасибо! До завтра!' },
        bad: [
          { es: '¡Sí, de nada! ¡Hasta mañana!', ru: 'Да, не за что! До завтра!', why: 'Вас пригласили — благодарите: gracias. De nada — ответ на «спасибо».' },
          { es: '¡Sí, gracias! ¡Buenos días!', ru: 'Да, спасибо! Доброе утро!', why: 'Buenos días — приветствие. Прощаются: hasta mañana, adiós.' },
        ],
      },
    ],
    hook: '«Mi librería es la más antigua del barrio. ¡Ven a verla!» — и Лусия убегает к своим книгам. Вы обещаете зайти.',
  },

  {
    lessonId: 'd05',
    title: 'Кофе с Карлосом',
    place: 'Кафе напротив агентства',
    intro: [
      'Обеденный перерыв. Карлос тащит вас в кафе напротив: «¡Primero, un café!»',
      'В Испании кофе заказывают быстро и коротко. Самое время научиться.',
    ],
    cast: ['carlos', 'extraM'],
    scene: [
      { kind: 'line', who: 'extraM', as: 'Camarero', es: 'Buenas tardes. ¿Qué quieren?', ru: 'Добрый день. Что будете?' },
      { kind: 'line', who: 'carlos', es: 'Un café con leche, por favor. ¿Y tú?', ru: 'Кофе с молоком, пожалуйста. А ты?' },
      {
        kind: 'reply',
        ok: { es: 'Un café sin azúcar, por favor.', ru: 'Кофе без сахара, пожалуйста.' },
        bad: [
          { es: 'Un café con sin azúcar, por favor.', ru: 'Кофе с без сахара, пожалуйста.', why: 'Con — «с», sin — «без». Вместе их не ставят: un café sin azúcar.' },
          { es: 'Un café sin azúcar, de nada.', ru: 'Кофе без сахара, не за что.', why: 'De nada — «не за что». В просьбе говорят por favor.' },
        ],
        note: 'Когда заказываете, достаточно назвать блюдо: un café, por favor. Quiero — «я хочу» — тоже вежливо.',
      },
      { kind: 'line', who: 'carlos', es: '¿No tienes hambre? ¡Aquí las tortillas son buenísimas!', ru: 'Ты не голоден? Здесь тортильи — просто объедение!' },
      {
        kind: 'reply',
        ok: { es: 'Sí, tengo hambre. Quiero una tortilla.', ru: 'Да, я голоден. Хочу тортилью.' },
        bad: [
          { es: 'Sí, estoy hambre. Quiero una tortilla.', ru: 'Да, я нахожусь голод. Хочу тортилью.', why: 'Голод по-испански «имеют»: tengo hambre.' },
          { es: 'Sí, tengo hambre. Quiero un tortilla.', ru: 'Да, я голоден. Хочу тортилью.', why: 'Tortilla кончается на -a — женский род: una tortilla.' },
        ],
      },
      { kind: 'narr', ru: 'Через десять минут на тарелке остаются только крошки.' },
      { kind: 'line', who: 'carlos', es: '¿Qué tal? ¿Está rica?', ru: 'Ну как? Вкусная?' },
      {
        kind: 'reply',
        ok: { es: '¡Está muy rica!', ru: 'Очень вкусная!' },
        bad: [
          { es: '¡Tengo muy rica!', ru: 'Имею очень вкусная!', why: 'Tengo — «у меня есть». Про вкус говорят: está muy rica.' },
          { es: '¡Soy muy rica!', ru: 'Я очень вкусная!', why: 'Soy — «я есть» 🙂 Про еду: está muy rica.' },
        ],
      },
      { kind: 'narr', ru: 'Пора возвращаться. Вы машете официанту.' },
      {
        kind: 'reply',
        ok: { es: 'La cuenta, por favor. ¿Cuánto cuesta?', ru: 'Счёт, пожалуйста. Сколько стоит?' },
        bad: [
          { es: 'El cuento, por favor.', ru: 'Сказку, пожалуйста.', why: 'El cuento — «сказка». Счёт — la cuenta.' },
          { es: 'La cuenta, por favor. ¿Cuánto cuestas?', ru: 'Счёт, пожалуйста. Сколько ты стоишь?', why: 'Cuestas — «ты стоишь» 🙂 Про цену: ¿cuánto cuesta?' },
        ],
      },
      { kind: 'line', who: 'extraM', as: 'Camarero', es: 'Son siete euros.', ru: 'Семь евро.' },
      {
        kind: 'line',
        who: 'carlos',
        es: '¡Pago yo! Oye, ¿buscas piso? Conozco a una señora… muy seria.',
        ru: 'Я плачу! Слушай, ищешь квартиру? Я знаю одну сеньору… очень строгую.',
      },
    ],
    hook: '«¿Buscas piso? Conozco a una señora… muy seria». Карлос загадочно поднимает брови.',
  },

  {
    lessonId: 'd06',
    title: 'Мельницы на фото',
    place: 'Крыша дома в квартале Литераторов',
    intro: [
      'Вечер. Лусия дала вам ключ от крыши: «Оттуда лучший вид в Мадриде».',
      'Наверху уже кто-то есть — Пабло фотографирует закат над черепичными крышами.',
    ],
    cast: ['pablo'],
    scene: [
      { kind: 'line', who: 'pablo', es: '¡Hola! ¿Cómo es tu casa en Rusia?', ru: 'Привет! А какой у тебя дом в России?' },
      {
        kind: 'reply',
        ok: { es: 'La casa es grande.', ru: 'Дом большой.' },
        bad: [
          { es: 'El casa es grande.', ru: 'Дом (м. р.) большой.', why: 'Casa кончается на -a — женский род: la casa.' },
          { es: 'La casa está grande.', ru: 'Дом сейчас большой.', why: 'Какой дом сам по себе — ser: la casa es grande.' },
        ],
      },
      { kind: 'line', who: 'pablo', es: '¿Y tienes un perro?', ru: 'А собака у тебя есть?' },
      {
        kind: 'reply',
        ok: { es: 'Sí, tengo un perro.', ru: 'Да, у меня есть собака.' },
        bad: [
          { es: 'Sí, tengo una perro.', ru: 'Да, у меня есть собака.', why: 'Perro кончается на -o — мужской род: un perro.' },
          { es: 'Sí, tengo el perro.', ru: 'Да, у меня есть та самая собака.', why: 'Когда говорим о чём-то впервые — неопределённый артикль: tengo un perro.' },
        ],
      },
      {
        kind: 'line',
        who: 'pablo',
        es: '¡Qué bien! Yo no tengo perro. Tengo una cámara.',
        ru: 'Здорово! А у меня нет собаки. У меня есть фотоаппарат.',
        note: 'Un, una — «какой-то, один»: о чём-то новом. El, la — когда понятно, о чём речь: la cámara de Pablo.',
      },
      { kind: 'line', who: 'pablo', es: 'Mira, es mi foto favorita.', ru: 'Смотри, это моё любимое фото.' },
      { kind: 'narr', ru: 'На экране фотоаппарата — белые мельницы на холме под огромным небом.' },
      {
        kind: 'reply',
        ok: { es: '¡Es muy bonita! ¿Qué es?', ru: 'Очень красивое! Что это?' },
        bad: [
          { es: '¡Es muy bonita! ¿Quién es?', ru: 'Очень красивое! Кто это?', why: 'О предметах и местах спрашивают qué — «что». Quién — о людях.' },
          { es: '¡Es muy bonita! ¿Qué son?', ru: 'Очень красивое! Что они такое?', why: 'Фото одно — es: ¿Qué es?' },
        ],
      },
      { kind: 'line', who: 'pablo', es: 'Son los molinos de La Mancha. Mi lugar favorito.', ru: 'Это мельницы Ла-Манчи. Моё любимое место.' },
    ],
    hook: 'Пабло долго смотрит на фото мельниц. «Mi lugar favorito», — тихо повторяет он. Вы ещё не знаете, как часто будете вспоминать эту фотографию.',
  },

  {
    lessonId: 'd07',
    title: 'Книжный на Huertas',
    place: 'Книжный «La Pluma», улица Huertas',
    intro: [
      'Вы держите обещание и заходите к Лусии. Книжный «La Pluma»: скрипучий пол, полки до потолка и рыжий кот на кассе.',
      'Пахнет старой бумагой. В углу — огромный тёмный шкаф, запертый на ключ.',
    ],
    cast: ['lucia'],
    scene: [
      {
        kind: 'line',
        who: 'lucia',
        es: '¡Hola! ¡Bienvenid{o|a}! Mira: los libros, las mesas… ¡y el gato!',
        ru: 'Привет! Добро пожаловать! Смотри: книги, столы… и кот!',
        note: 'Во множественном числе артикли меняются: el → los, la → las. Los libros, las mesas.',
      },
      {
        kind: 'reply',
        ok: { es: '¿Y cómo se llama el gato?', ru: 'А как зовут кота?' },
        bad: [
          { es: '¿Y cómo se llama la gato?', ru: 'А как зовут кота?', why: 'Gato кончается на -o — мужской род: el gato.' },
          { es: '¿Y cómo te llamas el gato?', ru: 'А как тебя зовут, кот?', why: 'Te llamas — «тебя зовут». Про кота: ¿cómo se llama?' },
        ],
      },
      { kind: 'line', who: 'lucia', es: 'Se llama Quijote. ¡Es el jefe!', ru: 'Его зовут Кихот. Он здесь главный!' },
      {
        kind: 'reply',
        ok: { es: '¡Tienes muchos libros!', ru: 'У тебя столько книг!' },
        bad: [
          { es: '¡Tienes muchas libros!', ru: 'У тебя столько книг!', why: 'Libros — мужской род: muchos libros.' },
          { es: '¡Tienes mucho libros!', ru: 'У тебя много книг!', why: 'Mucho согласуется с существительным: muchos libros.' },
        ],
      },
      { kind: 'line', who: 'lucia', es: 'Sí, y unos libros muy viejos. ¿Tienes amigos en Madrid?', ru: 'Да, и несколько очень старых книг. У тебя есть друзья в Мадриде?' },
      {
        kind: 'reply',
        ok: { es: 'Sí, tengo tres amigos: tú, Pablo y Carlos.', ru: 'Да, у меня три друга: ты, Пабло и Карлос.' },
        bad: [
          { es: 'Sí, tengo tres amigo: tú, Pablo y Carlos.', ru: 'Да, у меня три друг.', why: 'После tres — множественное число: tres amigos.' },
          {
            es: 'Sí, tengo tres amigas: tú, Pablo y Carlos.',
            ru: 'Да, у меня три подруги.',
            why: 'Если в группе есть хоть один мужчина — amigos. Amigas — только если все девушки.',
          },
        ],
      },
      { kind: 'line', who: 'lucia', es: '¿Pablo? ¿Pablo es tu amigo? ¿Y… [habla de mí=говорит обо мне]?', ru: 'Пабло? Пабло — твой друг? А он… говорит обо мне?' },
      { kind: 'narr', ru: 'Лусия вдруг очень внимательно поправляет книги на полке. Потом бросает взгляд на тёмный шкаф в углу.' },
      {
        kind: 'line',
        who: 'lucia',
        es: 'Bueno… Esta librería tiene setenta años. Aquí hay muchos secretos.',
        ru: 'Ну… Этому книжному семьдесят лет. Здесь много секретов.',
      },
    ],
    hook: '«Esta librería tiene setenta años. Aquí hay muchos secretos», — говорит Лусия, глядя на запертый шкаф.',
  },

  {
    lessonId: 'd08',
    title: 'Мадрид в августе',
    place: 'Парк Ретиро',
    intro: [
      'Суббота, августовский Мадрид, +38 в тени. Половина города уехала к морю.',
      'Лусия позвала вас в парк Ретиро — к пруду с лодками и Хрустальному дворцу.',
    ],
    cast: ['lucia', 'carmen'],
    postcard: 'retiro',
    scene: [
      {
        kind: 'line',
        who: 'lucia',
        es: '¡Uf! ¿Tienes calor?',
        ru: 'Уф! Тебе жарко?',
        note: 'Жару, холод, голод и жажду по-испански «имеют»: tengo calor, tengo frío, tengo hambre, tengo sed.',
      },
      {
        kind: 'reply',
        ok: { es: 'Sí, tengo mucho calor.', ru: 'Да, мне очень жарко.' },
        bad: [
          { es: 'Sí, estoy mucho calor.', ru: 'Да, я нахожусь очень жара.', why: 'С ощущениями — tener: tengo calor.' },
          { es: 'Sí, tengo mucho frío.', ru: 'Да, мне очень холодно.', why: 'Frío — «холод». А сейчас +38: tengo calor.' },
        ],
      },
      { kind: 'line', who: 'lucia', es: '¿Tienes sed? Hay agua en mi bolso.', ru: 'Пить хочешь? У меня в сумке вода.' },
      {
        kind: 'reply',
        ok: { es: 'Sí, gracias. Tengo sed.', ru: 'Да, спасибо. Хочу пить.' },
        bad: [
          { es: 'Sí, gracias. Soy sed.', ru: 'Да, спасибо. Я есть жажда.', why: 'Жажду тоже «имеют»: tengo sed.' },
          { es: 'No, gracias. Tengo sed.', ru: 'Нет, спасибо. Хочу пить.', why: 'Если хочется пить, отвечают «да»: sí, tengo sed 🙂' },
        ],
      },
      { kind: 'narr', ru: 'Вы проходите мимо Хрустального дворца. Лусия смотрит на часы и вдруг начинает торопиться.' },
      { kind: 'line', who: 'lucia', es: '¡Ay, tengo prisa! Tengo una cita con… con un amigo.', ru: 'Ой, я спешу! У меня встреча с… с одним другом.' },
      {
        kind: 'reply',
        ok: { es: '¿Con Pablo? ¿Tienes una cita con Pablo?', ru: 'С Пабло? У тебя встреча с Пабло?' },
        bad: [
          { es: '¿Con Pablo? ¿Tengo una cita con Pablo?', ru: 'С Пабло? У меня встреча с Пабло?', why: 'Tengo — «у меня». Вы спрашиваете о ней: ¿tienes una cita?' },
          { es: '¿Con Pablo? ¿Tiene una cita con Pablo?', ru: 'С Пабло? У него встреча с Пабло?', why: 'Tiene — «у него/неё» или «у вас». С Лусией вы на «ты»: ¿tienes?' },
        ],
      },
      { kind: 'line', who: 'lucia', es: '¡No, no! ¡Es solo un amigo! ¡Adiós!', ru: 'Нет-нет! Это просто друг! Пока!' },
      { kind: 'narr', ru: 'Лусия убегает, красная как помидор. А у вас звонит телефон — незнакомый номер.' },
      {
        kind: 'line',
        who: 'carmen',
        es: 'Buenas tardes. Soy Carmen. El piso está libre. ¿Tiene usted tiempo mañana?',
        ru: 'Добрый день. Это Кармен. Квартира свободна. У вас есть время завтра?',
      },
      {
        kind: 'reply',
        ok: { es: 'Sí, tengo tiempo. ¡Gracias!', ru: 'Да, у меня есть время. Спасибо!' },
        bad: [
          { es: 'Sí, tiene tiempo. ¡Gracias!', ru: 'Да, у вас есть время. Спасибо!', why: 'Tiene — «у вас/у него есть». О себе: tengo tiempo.' },
          { es: 'Sí, tengo prisa. ¡Gracias!', ru: 'Да, я спешу. Спасибо!', why: 'Tengo prisa — «я спешу». Вас спрашивают, есть ли время: tengo tiempo.' },
        ],
      },
    ],
    hook: 'Звонила донья Кармен: квартира свободна, смотреть — завтра. «Muy seria», — вспоминаете вы слова Карлоса.',
  },
];
