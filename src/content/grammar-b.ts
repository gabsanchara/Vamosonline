import type { Drill, Grammar } from '../types.ts';

// Грамматика к урокам 15–30.
const d = (q: string, options: string[], answer: string, why: string, es: string, ru: string): Drill => ({
  q,
  options,
  answer,
  why,
  es,
  ru,
});

export const GRAMMAR_B: Record<number, Grammar> = {
  15: {
    day: 15,
    title: 'Глаголы на -AR: один образец на сотни слов',
    emoji: '🏃',
    rule: [
      'Правильные глаголы на -ar (hablar, trabajar, estudiar, comprar…) спрягаются одинаково: отбрасываем -ar и добавляем окончание.',
      'Окончания: -o, -as, -a, -amos, -áis, -an. Выучите их один раз, и вы сможете спрягать любой такой глагол.',
      'Местоимение обычно опускают: Hablo español — уже ясно, что «я».',
    ],
    mnemonics: [
      { icon: '🎵', text: 'Напевайте как считалку: О – АС – А – АМОС – АИС – АН. Через пару раз она сама застрянет в голове.' },
      { icon: '👥', text: 'Окончание -AMOS — это всегда «МЫ» (hablAMOS, trabajAMOS, estudiAMOS): «мы» = «амос».' },
      { icon: '🎓', text: 'ESTUDIAR ≈ «студент» — понятно, что значит. TRABAJAR ≈ «трудиться». COMPRAR ≈ «компра» — «купить».' },
    ],
    tables: [
      {
        title: 'Hablar — «говорить»',
        head: ['Кто', 'Форма'],
        rows: [
          ['yo', 'habl·b:o'],
          ['tú', 'habl·b:as'],
          ['él / ella / usted', 'habl·b:a'],
          ['nosotros', 'habl·b:amos'],
          ['vosotros', 'habl·b:áis'],
          ['ellos / ustedes', 'habl·b:an'],
        ],
      },
    ],
    examples: [
      ['Trabajo en Madrid.', 'Я работаю в Мадриде.'],
      ['Estudiamos español.', 'Мы изучаем испанский.'],
      ['Ella habla inglés.', 'Она говорит по-английски.'],
    ],
    drills: [
      d('Yo ___ español. (hablar)', ['hablo', 'hablas', 'habla', 'hablamos'], 'hablo', 'С «я» окончание -o.', 'Yo hablo español.', 'Я говорю по-испански.'),
      d('Tú ___ en Madrid. (trabajar)', ['trabajas', 'trabajo', 'trabaja'], 'trabajas', 'С «ты» окончание -as.', 'Tú trabajas en Madrid.', 'Ты работаешь в Мадриде.'),
      d('Ella ___ inglés. (hablar)', ['habla', 'hablas', 'hablo'], 'habla', 'Он / она / вы — окончание -a.', 'Ella habla inglés.', 'Она говорит по-английски.'),
      d('Nosotros ___ español. (estudiar)', ['estudiamos', 'estudian', 'estudio'], 'estudiamos', '«Мы» — всегда -amos.', 'Nosotros estudiamos español.', 'Мы изучаем испанский.'),
      d('Ellos ___ música. (escuchar)', ['escuchan', 'escuchamos', 'escucha'], 'escuchan', 'Они — окончание -an.', 'Ellos escuchan música.', 'Они слушают музыку.'),
      d('Найдите предложение с ошибкой.', ['Yo compro pan.', 'Yo compra pan.'], 'Yo compra pan.', 'С yo нужно -o: compro. Форма compra — для «он/она».', 'Yo compro pan.', 'Я покупаю хлеб.'),
    ],
  },

  16: {
    day: 16,
    title: 'Глаголы на -ER и -IR',
    emoji: '📖',
    rule: [
      'Глаголы на -er (comer, beber, leer) и на -ir (vivir, escribir, abrir) спрягаются почти одинаково.',
      'Отличаются только формы «мы» и «вы»: у -er — comemos, coméis; у -ir — vivimos, vivís.',
      'Остальные окончания у них общие: -o, -es, -e, -en.',
    ],
    mnemonics: [
      { icon: '🍞', text: 'COMER ≈ «комок в рот»: ем. BEBER ≈ «бебе» — малыш пьёт.' },
      { icon: '🎉', text: 'VIVIR ≈ «виват!» — «да здравствует!» А жить — это и есть «виват».' },
      { icon: '🔑', text: 'Запомните, где отличие: -EMOS (comemos) — это -er, -IMOS (vivimos) — это -ir. Одна буква решает.' },
    ],
    tables: [
      {
        head: ['Кто', 'Comer — «есть»', 'Vivir — «жить»'],
        rows: [
          ['yo', 'com·b:o', 'viv·b:o'],
          ['tú', 'com·b:es', 'viv·b:es'],
          ['él / ella / usted', 'com·b:e', 'viv·b:e'],
          ['nosotros', 'com·b:emos', 'viv·b:imos'],
          ['vosotros', 'com·b:éis', 'viv·b:ís'],
          ['ellos / ustedes', 'com·b:en', 'viv·b:en'],
        ],
      },
    ],
    examples: [
      ['Como pan.', 'Я ем хлеб.'],
      ['Vivimos en Madrid.', 'Мы живём в Мадриде.'],
      ['Ellos beben vino.', 'Они пьют вино.'],
    ],
    drills: [
      d('Yo ___ pan. (comer)', ['como', 'comes', 'come'], 'como', 'С «я» окончание -o.', 'Yo como pan.', 'Я ем хлеб.'),
      d('Tú ___ agua. (beber)', ['bebes', 'bebe', 'bebo'], 'bebes', 'С «ты» окончание -es.', 'Tú bebes agua.', 'Ты пьёшь воду.'),
      d('Nosotros ___ en Madrid. (vivir)', ['vivimos', 'vivemos', 'viven'], 'vivimos', 'У глаголов на -ir «мы» — -imos.', 'Nosotros vivimos en Madrid.', 'Мы живём в Мадриде.'),
      d('Nosotros ___ pan. (comer)', ['comemos', 'comamos', 'comen'], 'comemos', 'У глаголов на -er «мы» — -emos.', 'Nosotros comemos pan.', 'Мы едим хлеб.'),
      d('Ellos ___ vino. (beber)', ['beben', 'bebemos', 'bebe'], 'beben', 'Они — окончание -en.', 'Ellos beben vino.', 'Они пьют вино.'),
      d('¿Dónde ___ tú? (vivir)', ['vives', 'vivo', 'vive'], 'vives', 'С «ты» — -es.', '¿Dónde vives tú?', 'Где ты живёшь?'),
      d('Найдите предложение с ошибкой.', ['Ella vive en Rusia.', 'Ella vivo en Rusia.'], 'Ella vivo en Rusia.', 'С «она» нужно vive. Форма vivo — только для «я».', 'Ella vive en Rusia.', 'Она живёт в России.'),
    ],
  },

  17: {
    day: 17,
    title: 'Который час?',
    emoji: '🕒',
    rule: [
      'Время — это «женское» слово hora (час): поэтому Es la una (час) и Son las dos (два часа).',
      'Только час дня — «es la una». Все остальные — «son las…».',
      'Полчаса: y media. Четверть: y cuarto. Без четверти: menos cuarto. В какое время: a las…',
    ],
    mnemonics: [
      { icon: '1️⃣', text: 'Один час — один: ES LA UNA. Больше одного — множественное: SON LAS. Как «одна/две» в русском.' },
      { icon: '➖', text: 'MENOS CUARTO ≈ «минус четверть»: Son las cinco menos cuarto — «пять минус четверть». Прямо как «без четверти пять».' },
      { icon: '🎬', text: 'A LAS OCHO — «А ЛАС ОЧО» — «А в восемь!» Предлог a = «в» для времени события.' },
    ],
    tables: [
      {
        head: ['Время', 'Испанский'],
        rows: [
          ['1:00', 'b:Es la una'],
          ['2:00', 'b:Son las dos'],
          ['3:30', 'Son las tres b:y media'],
          ['4:15', 'Son las cuatro b:y cuarto'],
          ['4:45', 'Son las cinco b:menos cuarto'],
          ['в 8:00', 'b:A las ocho'],
        ],
      },
    ],
    examples: [
      ['¿Qué hora es?', 'Который час?'],
      ['La cena es a las nueve.', 'Ужин в девять.'],
    ],
    drills: [
      d('___ la una.', ['Es', 'Son', 'Está'], 'Es', 'Один час — единственное число: es la una.', 'Es la una.', 'Час дня.'),
      d('___ las tres.', ['Son', 'Es', 'Están'], 'Son', 'Все часы, кроме первого, — son las…', 'Son las tres.', 'Три часа.'),
      d('Половина четвёртого:', ['Son las tres y media', 'Son las cuatro y media', 'Son las tres menos media'], 'Son las tres y media', 'Половина четвёртого = три и половина: tres y media.', 'Son las tres y media.', 'Половина четвёртого.'),
      d('Без четверти пять:', ['Son las cinco menos cuarto', 'Son las cinco y cuarto', 'Son las cuatro y cuarto'], 'Son las cinco menos cuarto', '«Без четверти пять» — «пять минус четверть»: cinco menos cuarto.', 'Son las cinco menos cuarto.', 'Без четверти пять.'),
      d('В восемь часов:', ['A las ocho', 'En las ocho', 'Es las ocho'], 'A las ocho', 'Для «во сколько?» используем a las.', 'A las ocho.', 'В восемь.'),
      d('Четверть пятого:', ['Son las cuatro y cuarto', 'Son las cinco y cuarto'], 'Son las cuatro y cuarto', 'Четверть пятого — четыре и четверть.', 'Son las cuatro y cuarto.', 'Четверть пятого.'),
      d('¿___ hora es?', ['Qué', 'Cuál', 'Cuándo'], 'Qué', 'Устойчивая фраза: ¿Qué hora es?', '¿Qué hora es?', 'Который час?'),
    ],
  },

  18: {
    day: 18,
    title: 'Дни недели и месяцы',
    emoji: '📅',
    rule: [
      'Дни и месяцы пишутся с маленькой буквы: lunes, enero.',
      '«В понедельник» — el lunes. «По понедельникам» — los lunes. «Какой сегодня день?» — ¿Qué día es hoy? Отвечаем: Hoy es lunes.',
      'Hoy — сегодня, mañana — завтра, ayer — вчера.',
    ],
    mnemonics: [
      { icon: '🪐', text: 'Дни — это небесные тела: LUNES — луна, MARTES — Марс, MIÉRCOLES — Меркурий, JUEVES — Юпитер, VIERNES — Венера.' },
      { icon: '🌅', text: 'MAÑANA — «маньяна»: и «завтра», и «утро». Всё хорошее откладывается на маньяну.' },
      { icon: '🏠', text: 'DOMINGO ≈ «домой» — в воскресенье сидим дома. SÁBADO ≈ «суббота» — почти одинаково!' },
    ],
    tables: [
      {
        head: ['День', 'Испанский', 'Подсказка'],
        rows: [
          ['понедельник', 'lunes', 'Луна'],
          ['вторник', 'martes', 'Марс'],
          ['среда', 'miércoles', 'Меркурий'],
          ['четверг', 'jueves', 'Юпитер'],
          ['пятница', 'viernes', 'Венера'],
          ['суббота', 'sábado', 'субб-ота'],
          ['воскресенье', 'domingo', 'домой'],
        ],
      },
    ],
    examples: [
      ['Hoy es lunes.', 'Сегодня понедельник.'],
      ['El sábado voy al parque.', 'В субботу я иду в парк.'],
      ['Los lunes trabajo.', 'По понедельникам я работаю.'],
    ],
    drills: [
      d('«В понедельник»:', ['El lunes', 'En lunes', 'A lunes'], 'El lunes', 'С днём недели ставим el.', 'El lunes', 'В понедельник'),
      d('«По понедельникам»:', ['Los lunes', 'El lunes', 'Las lunes'], 'Los lunes', 'Повторяется каждую неделю — los.', 'Los lunes', 'По понедельникам'),
      d('Hoy ___ viernes.', ['es', 'está', 'son'], 'es', 'Дата и день — ser.', 'Hoy es viernes.', 'Сегодня пятница.'),
      d('Как правильно писать?', ['lunes', 'Lunes'], 'lunes', 'Дни недели пишутся с маленькой буквы.', 'Lunes', 'Понедельник'),
      d('¿Qué ___ es hoy?', ['día', 'hora', 'mes'], 'día', 'Спрашиваем про день: ¿Qué día es hoy?', '¿Qué día es hoy?', 'Какой сегодня день?'),
      d('«Вчера»:', ['Ayer', 'Mañana', 'Hoy'], 'Ayer', 'Ayer — вчера, mañana — завтра, hoy — сегодня.', 'Ayer', 'Вчера'),
    ],
  },

  19: {
    day: 19,
    title: 'Глагол IR и предлог A',
    emoji: '🚶',
    rule: [
      'Ir — «идти, ехать». Глагол неправильный: voy, vas, va, vamos, vais, van.',
      'После ir ставим a (в, на): voy a la tienda.',
      'A + el склеивается в al: voy al parque (не «a el parque»). С la, los, las не склеивается: a la, a los, a las.',
      '«Куда?» — adónde: ¿Adónde vas?',
    ],
    mnemonics: [
      { icon: '🐺', text: 'VOY ≈ «вой»: «Вой, пошёл!» — «я иду». VAS — «вас»: «Куда вас?», VA — «ва».' },
      { icon: '🧲', text: 'A + EL = AL — предлог и артикль «слиплись», как магниты. Остальные артикли (la, las, los) не липнут.' },
      { icon: '🎯', text: 'ADÓNDE — «а-дондэ»: «куда» (движение). DÓNDE — просто «где» (место).' },
    ],
    tables: [
      {
        title: 'Ir — «идти»',
        head: ['Кто', 'Форма'],
        rows: [
          ['yo', 'b:voy'],
          ['tú', 'b:vas'],
          ['él / ella / usted', 'b:va'],
          ['nosotros', 'b:vamos'],
          ['vosotros', 'b:vais'],
          ['ellos / ustedes', 'b:van'],
        ],
      },
      {
        title: 'A + артикль',
        head: ['Артикль', 'Результат'],
        rows: [
          ['a + el', 'b:al parque'],
          ['a + la', 'a la tienda'],
          ['a + los', 'a los museos'],
          ['a + las', 'a las tiendas'],
        ],
      },
    ],
    examples: [
      ['Voy al parque.', 'Я иду в парк.'],
      ['Vamos a la estación.', 'Мы идём на вокзал.'],
      ['¿Adónde vas?', 'Куда ты идёшь?'],
    ],
    drills: [
      d('Yo ___ al parque. (ir)', ['voy', 'vas', 'va'], 'voy', 'С «я» — voy.', 'Yo voy al parque.', 'Я иду в парк.'),
      d('Tú ___ a la tienda. (ir)', ['vas', 'voy', 'va'], 'vas', 'С «ты» — vas.', 'Tú vas a la tienda.', 'Ты идёшь в магазин.'),
      d('Nosotros ___ al museo. (ir)', ['vamos', 'van', 'vais'], 'vamos', '«Мы» — vamos.', 'Nosotros vamos al museo.', 'Мы идём в музей.'),
      d('Voy ___ parque.', ['al', 'a el', 'a la'], 'al', 'a + el склеивается в al.', 'Voy al parque.', 'Я иду в парк.'),
      d('Voy ___ tienda.', ['a la', 'al', 'a el'], 'a la', 'С la предлог a не склеивается.', 'Voy a la tienda.', 'Я иду в магазин.'),
      d('¿___ vas?', ['Adónde', 'Dónde', 'Cuándo'], 'Adónde', 'Движение «куда» — adónde, а dónde — «где».', '¿Adónde vas?', 'Куда ты идёшь?'),
      d('Ellos ___ a la estación. (ir)', ['van', 'vamos', 'va'], 'van', 'Они — van.', 'Ellos van a la estación.', 'Они идут на вокзал.'),
    ],
  },

  20: {
    day: 20,
    title: 'Как пройти: команды и стороны',
    emoji: '🧭',
    rule: [
      'Указания в вежливой форме («вы») даются так: siga recto (идите прямо), gire a la derecha (поверните направо), cruce la calle (перейдите улицу).',
      'Где находится: está a la derecha, está a la izquierda, está en la esquina.',
      'После puede («вы можете») ставим глагол в начальной форме: ¿Puede repetir, por favor?',
    ],
    mnemonics: [
      { icon: '↗️', text: 'DERECHA — «держись правее». Корень тот же, что в «директор», «прямо» — derecho.' },
      { icon: '↖️', text: 'IZQUIERDA ≈ «искать» слева: «искерда»; запасной вариант — «изкривлённая левая рука».' },
      { icon: '⬆️', text: 'RECTO — как «ректор» (прямой, правильный человек): siga recto — «идите прямо».' },
    ],
    tables: [
      {
        title: 'Команды (вежливое «вы»)',
        head: ['Что', 'Команда'],
        rows: [
          ['идти дальше', 'b:siga'],
          ['повернуть', 'b:gire'],
          ['перейти', 'b:cruce'],
          ['взять (метро и т. п.)', 'b:tome'],
        ],
      },
    ],
    examples: [
      ['Siga recto y gire a la derecha.', 'Идите прямо и поверните направо.'],
      ['El banco está en la esquina.', 'Банк на углу.'],
    ],
    drills: [
      d('Идите прямо:', ['Siga recto', 'Gire recto', 'Cruce recto'], 'Siga recto', 'Идти дальше — seguir: siga recto.', 'Siga recto.', 'Идите прямо.'),
      d('Поверните направо:', ['Gire a la derecha', 'Gire a la izquierda'], 'Gire a la derecha', 'Derecha — справа, izquierda — слева.', 'Gire a la derecha.', 'Поверните направо.'),
      d('Это слева:', ['Está a la izquierda', 'Está a la derecha'], 'Está a la izquierda', 'Izquierda — слева. Положение — estar.', 'Está a la izquierda.', 'Это слева.'),
      d('Как добраться до музея?', ['¿Cómo llego al museo?', '¿Cómo llego a el museo?'], '¿Cómo llego al museo?', 'a + el склеивается в al.', '¿Cómo llego al museo?', 'Как добраться до музея?'),
      d('Повторите, пожалуйста:', ['¿Puede repetir, por favor?', '¿Puede repito, por favor?'], '¿Puede repetir, por favor?', 'После puede идёт инфинитив: repetir.', '¿Puede repetir, por favor?', 'Повторите, пожалуйста.'),
      d('¿Dónde ___ el banco?', ['está', 'hay', 'es'], 'está', 'Где находится конкретное место — está.', '¿Dónde está el banco?', 'Где банк?'),
    ],
  },

  21: {
    day: 21,
    title: 'Транспорт: EN и A PIE',
    emoji: '🚇',
    rule: [
      '«На чём едем» — предлог en: voy en metro, en autobús, en tren, en coche.',
      'Пешком — a pie: voy a pie. Это исключение.',
      'Спросить цену: ¿Cuánto cuesta…? Время отправления: ¿A qué hora sale…?',
    ],
    mnemonics: [
      { icon: '🚌', text: 'EN — «в/на, внутри»: вы внутри транспорта. Едем «в» метро — voy EN metro.' },
      { icon: '🦶', text: 'A PIE — «а пье»: «а пешком!» Слово pie родственно русскому «пеший», «пешком».' },
      { icon: '💶', text: 'CUESTA ≈ «кость»: «сколько это КОСТИТ?» Почти как «стоить».' },
    ],
    tables: [
      {
        head: ['Транспорт', 'Фраза'],
        rows: [
          ['метро', 'Voy b:en metro'],
          ['автобус', 'Voy b:en autobús'],
          ['поезд', 'Voy b:en tren'],
          ['пешком', 'Voy b:a pie'],
        ],
      },
    ],
    examples: [
      ['Voy en metro.', 'Я еду на метро.'],
      ['¿A qué hora sale el tren?', 'Во сколько отправляется поезд?'],
    ],
    drills: [
      d('Voy ___ metro.', ['en', 'a', 'por'], 'en', 'На транспорте — en.', 'Voy en metro.', 'Я еду на метро.'),
      d('Voy ___ pie.', ['a', 'en', 'por'], 'a', 'Пешком — a pie, это исключение.', 'Voy a pie.', 'Я иду пешком.'),
      d('Я еду на автобусе:', ['Voy en autobús', 'Voy a autobús'], 'Voy en autobús', 'Транспорт всегда с en.', 'Voy en autobús.', 'Я еду на автобусе.'),
      d('___ parada (остановка)', ['La', 'El'], 'La', 'Parada на -a — женский род.', 'La parada', 'Остановка'),
      d('Сколько стоит билет?', ['¿Cuánto cuesta el billete?', '¿Cuántos cuesta el billete?'], '¿Cuánto cuesta el billete?', 'Билет один — cuánto и cuesta в единственном числе.', '¿Cuánto cuesta el billete?', 'Сколько стоит билет?'),
      d('¿A qué hora ___ el tren?', ['sale', 'salgo', 'salen'], 'sale', 'Поезд — «он», значит sale.', '¿A qué hora sale el tren?', 'Во сколько отправляется поезд?'),
    ],
  },

  22: {
    day: 22,
    title: 'GUSTAR: «мне нравится»',
    emoji: '❤️',
    rule: [
      'Gustar — не «любить», а «нравиться». Предмет нравится кому-то: Me gusta el libro — «мне нравится книга».',
      'Глагол подстраивается под то, что нравится: одно — gusta, несколько — gustan. Инфинитив — всегда gusta: Me gusta leer.',
      'Кому: me (мне), te (тебе), le (ему, ей, вам), nos (нам), les (им).',
      'Отрицание ставим перед me: No me gusta.',
    ],
    mnemonics: [
      { icon: '😋', text: 'GUSTAR ≈ «густо / вкусно»: «Мне вкусно!» — me gusta. Сразу видно, что вещь доставляет удовольствие вам.' },
      { icon: '🔄', text: 'Переверните фразу: Me gusta el libro = «Книга нравится мне». Книга — главная, поэтому глагол смотрит на неё: libros → gustan.' },
      { icon: '🚫', text: 'NO всегда прыгает перед ME: No me gusta. Не «me no gusta».' },
    ],
    tables: [
      {
        head: ['Кому', 'Одно / инфинитив', 'Несколько'],
        rows: [
          ['мне', 'b:me gusta', 'b:me gustan'],
          ['тебе', 'b:te gusta', 'b:te gustan'],
          ['ему / ей / вам', 'b:le gusta', 'b:le gustan'],
          ['нам', 'b:nos gusta', 'b:nos gustan'],
        ],
      },
    ],
    examples: [
      ['Me gusta este libro.', 'Мне нравится эта книга.'],
      ['Me gustan las películas.', 'Мне нравятся фильмы.'],
      ['Me gusta bailar.', 'Мне нравится танцевать.'],
    ],
    drills: [
      d('___ gusta este libro.', ['Me', 'Yo', 'Mi'], 'Me', 'Кому нравится — me (мне).', 'Me gusta este libro.', 'Мне нравится эта книга.'),
      d('Me ___ los libros.', ['gustan', 'gusta'], 'gustan', 'Книг несколько — gustan.', 'Me gustan los libros.', 'Мне нравятся книги.'),
      d('Me ___ el café.', ['gusta', 'gustan'], 'gusta', 'Кофе один — gusta.', 'Me gusta el café.', 'Мне нравится кофе.'),
      d('Тебе нравится музыка:', ['Te gusta la música', 'Tú gusta la música'], 'Te gusta la música', 'Кому — te (тебе), а не tú.', 'Te gusta la música.', 'Тебе нравится музыка.'),
      d('Ему нравится футбол:', ['Le gusta el fútbol', 'Se gusta el fútbol'], 'Le gusta el fútbol', 'Ему, ей, вам — le.', 'Le gusta el fútbol.', 'Ему нравится футбол.'),
      d('Me ___ bailar.', ['gusta', 'gustan'], 'gusta', 'После gustar идёт инфинитив — всегда gusta.', 'Me gusta bailar.', 'Мне нравится танцевать.'),
      d('Мне не нравится бегать:', ['No me gusta correr.', 'Me no gusta correr.'], 'No me gusta correr.', 'no ставится перед me.', 'No me gusta correr.', 'Мне не нравится бегать.'),
    ],
  },

  23: {
    day: 23,
    title: 'Одежда: род, размер, «слишком»',
    emoji: '👕',
    rule: [
      'Прилагательное согласуется с одеждой по роду и числу: la camisa pequeña, el abrigo pequeño, los zapatos pequeños.',
      'Los pantalones и los zapatos — всегда во множественном числе, как русские «брюки».',
      'Demasiado + прилагательное = «слишком»: demasiado grande.',
      'Примерить: probármelo (м.р.) или probármela (ж.р.) — по роду вещи.',
    ],
    mnemonics: [
      { icon: '👖', text: 'LOS PANTALONES — «пантолоны»: брюки — всегда мн. ч., и по-русски тоже, и по-испански.' },
      { icon: '⚖️', text: 'DEMASIADO ≈ «де масса» — «из массы», то есть «слишком много/слишком».' },
      { icon: '🧵', text: 'PROBÁRMELO / PROBÁRMELA: LO для el-вещей (el abrigo), LA для la-вещей (la camisa) — повторяет артикль.' },
    ],
    tables: [
      {
        head: ['Вещь', 'Слишком маленький'],
        rows: [
          ['m:el abrigo', 'demasiado pequeño'],
          ['f:la camisa', 'demasiado pequeña'],
          ['m:los zapatos', 'demasiado pequeños'],
          ['f:las camisas', 'demasiado pequeñas'],
        ],
      },
    ],
    examples: [
      ['Busco una camisa azul.', 'Я ищу синюю рубашку.'],
      ['Me queda bien.', 'Мне идёт.'],
    ],
    drills: [
      d('La camisa es demasiado ___.', ['pequeña', 'pequeño', 'pequeñas'], 'pequeña', 'Camisa женского рода — pequeña.', 'La camisa es demasiado pequeña.', 'Рубашка слишком маленькая.'),
      d('El abrigo es demasiado ___.', ['grande', 'granda', 'grandes'], 'grande', 'Grande не меняется по роду.', 'El abrigo es demasiado grande.', 'Пальто слишком большое.'),
      d('Busco una camisa ___.', ['azul', 'azula', 'azules'], 'azul', 'Azul — на согласную, по роду не меняется.', 'Busco una camisa azul.', 'Я ищу синюю рубашку.'),
      d('Примерить рубашку (la camisa):', ['¿Puedo probármela?', '¿Puedo probármelo?'], '¿Puedo probármela?', 'Camisa женского рода — la.', '¿Puedo probármela?', 'Можно её примерить?'),
      d('Los pantalones son ___.', ['negros', 'negro', 'negras'], 'negros', 'Pantalones — мужской род, мн. ч.', 'Los pantalones son negros.', 'Брюки чёрные.'),
      d('«Мне идёт»:', ['Me queda bien', 'Me soy bien'], 'Me queda bien', 'Устойчивое выражение — me queda bien.', 'Me queda bien.', 'Мне идёт.'),
    ],
  },

  24: {
    day: 24,
    title: 'Погода: HACE или TENGO?',
    emoji: '☀️',
    rule: [
      'О погоде на улице говорим с hace: hace frío, hace calor, hace sol, hace viento.',
      'О себе — tener: tengo frío (мне холодно).',
      'Дождь и снег — отдельные глаголы: llueve, nieva. Небо — estar: está nublado.',
    ],
    mnemonics: [
      { icon: '🌡️', text: 'HACE ≈ «асе» от hacer — «делать». Погода «делает» жару или холод. HACE CALOR — «делает жару».' },
      { icon: '🌧️', text: 'LLUEVE ≈ «льёт» — почти по-русски!' },
      { icon: '❄️', text: 'NIEVA ≈ «нива»: снежная нива. Или «ниев» — как «нива, заметённая снегом».' },
    ],
    tables: [
      {
        head: ['Что', 'Испанский'],
        rows: [
          ['На улице холодно', 'b:Hace frío'],
          ['Мне холодно', 'b:Tengo frío'],
          ['Дождь', 'b:Llueve'],
          ['Снег', 'b:Nieva'],
          ['Пасмурно', 'b:Está nublado'],
        ],
      },
    ],
    examples: [
      ['Hoy hace sol.', 'Сегодня солнечно.'],
      ['En invierno nieva.', 'Зимой идёт снег.'],
    ],
    drills: [
      d('На улице холодно: ___ frío.', ['Hace', 'Tengo', 'Es'], 'Hace', 'Про погоду — hace.', 'Hace frío.', 'На улице холодно.'),
      d('Мне холодно:', ['Tengo frío', 'Hace frío'], 'Tengo frío', 'Про человека — tener.', 'Tengo frío.', 'Мне холодно.'),
      d('Идёт дождь:', ['Llueve', 'Hace lluvia', 'Está lluvia'], 'Llueve', 'Для дождя свой глагол — llover.', 'Llueve.', 'Идёт дождь.'),
      d('¿Qué tiempo ___?', ['hace', 'es', 'tiene'], 'hace', 'Устойчивая фраза: ¿Qué tiempo hace?', '¿Qué tiempo hace?', 'Какая погода?'),
      d('Пасмурно:', ['Está nublado', 'Hace nublado', 'Es nublado'], 'Está nublado', 'Состояние неба сейчас — estar.', 'Está nublado.', 'Пасмурно.'),
      d('Me gusta ___ primavera.', ['la', 'el'], 'la', 'Primavera на -a — женский род.', 'Me gusta la primavera.', 'Мне нравится весна.'),
    ],
  },

  25: {
    day: 25,
    title: 'Хобби: gustar, jugar, tocar',
    emoji: '🎸',
    rule: [
      'Me gusta + инфинитив: me gusta leer. Сильнее — me encanta («обожаю»).',
      'Играть в игру — jugar a: juego al fútbol. Играть на инструменте — tocar: toco la guitarra.',
      'Jugar — «ботинок» u → ue: juego, juegas, juega, jugamos, jugáis, juegan.',
    ],
    mnemonics: [
      { icon: '⚽', text: 'JUGAR ≈ «хугар» — как «жонглировать»: играем, жонглируем мячом.' },
      { icon: '🎹', text: 'TOCAR ≈ «тукать» — «стучать по клавишам»: toco el piano.' },
      { icon: '💖', text: 'ME ENCANTA ≈ «меня очаровывает» — «энканта» от «чары».' },
    ],
    tables: [
      {
        title: 'Jugar — «играть» (ботинок u → ue)',
        head: ['Кто', 'Форма'],
        rows: [
          ['yo', 'j·b:ue·go'],
          ['tú', 'j·b:ue·gas'],
          ['él / ella', 'j·b:ue·ga'],
          ['nosotros', 'jugamos'],
          ['vosotros', 'jugáis'],
          ['ellos', 'j·b:ue·gan'],
        ],
      },
    ],
    examples: [
      ['Juego al fútbol.', 'Я играю в футбол.'],
      ['Toco la guitarra.', 'Я играю на гитаре.'],
    ],
    drills: [
      d('Me gusta ___. (читать)', ['leer', 'leo', 'lee'], 'leer', 'После me gusta идёт инфинитив.', 'Me gusta leer.', 'Мне нравится читать.'),
      d('Yo ___ al fútbol. (jugar)', ['juego', 'jugo', 'jugas'], 'juego', 'Jugar — «ботинок»: u → ue.', 'Yo juego al fútbol.', 'Я играю в футбол.'),
      d('Juego ___ fútbol.', ['al', 'el', 'a'], 'al', 'Jugar a + el = al.', 'Juego al fútbol.', 'Я играю в футбол.'),
      d('Toco ___ guitarra.', ['la', 'al', 'a'], 'la', 'С tocar артикль без a: toco la guitarra.', 'Toco la guitarra.', 'Я играю на гитаре.'),
      d('Я обожаю кино:', ['Me encanta el cine', 'Me encantan el cine'], 'Me encanta el cine', 'Кино одно — encanta.', 'Me encanta el cine.', 'Я обожаю кино.'),
      d('Me ___ las películas.', ['gustan', 'gusta'], 'gustan', 'Фильмов несколько — gustan.', 'Me gustan las películas.', 'Мне нравятся фильмы.'),
      d('Мне не нравится бегать:', ['No me gusta correr', 'Me no gusta correr'], 'No me gusta correr', 'no ставится перед me.', 'No me gusta correr.', 'Мне не нравится бегать.'),
    ],
  },

  26: {
    day: 26,
    title: 'Возвратные глаголы: me, te, se',
    emoji: '⏰',
    rule: [
      'Возвратные глаголы описывают действие над собой: levantarse (вставать), ducharse (принимать душ), acostarse (ложиться).',
      'Перед глаголом ставим местоимение: me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan.',
      'Некоторые — «ботинки»: me despierto (e → ie), me acuesto (o → ue).',
    ],
    mnemonics: [
      { icon: '🪞', text: 'ME, TE, SE — «себя»: я себя, ты себя, он себя. «Я поднимаю СЕБЯ» — me levanto.' },
      { icon: '🛏️', text: 'ACOSTARSE ≈ «а-кост-ар-се»: «кости на кровать». Ложусь костями.' },
      { icon: '🚿', text: 'DUCHARSE ≈ «душ» — совсем рядом: me ducho.' },
    ],
    tables: [
      {
        title: 'Levantarse — «вставать»',
        head: ['Кто', 'Форма'],
        rows: [
          ['yo', 'b:me levanto'],
          ['tú', 'b:te levantas'],
          ['él / ella', 'b:se levanta'],
          ['nosotros', 'b:nos levantamos'],
          ['vosotros', 'b:os levantáis'],
          ['ellos', 'b:se levantan'],
        ],
      },
    ],
    examples: [
      ['Me levanto a las siete.', 'Я встаю в семь.'],
      ['Ceno por la noche.', 'Я ужинаю вечером.'],
    ],
    drills: [
      d('Yo ___ levanto temprano.', ['me', 'te', 'se'], 'me', 'Yo → me.', 'Yo me levanto temprano.', 'Я рано встаю.'),
      d('Tú ___ levantas temprano.', ['te', 'me', 'se'], 'te', 'Tú → te.', 'Tú te levantas temprano.', 'Ты рано встаёшь.'),
      d('Ella ___ ducha por la mañana.', ['se', 'me', 'te'], 'se', 'Ella → se.', 'Ella se ducha por la mañana.', 'Она принимает душ утром.'),
      d('Nosotros ___ acostamos tarde.', ['nos', 'se', 'me'], 'nos', 'Nosotros → nos.', 'Nosotros nos acostamos tarde.', 'Мы поздно ложимся.'),
      d('Me ___ a las siete. (despertarse)', ['despierto', 'despertó', 'despertamos'], 'despierto', 'Despertarse — «ботинок» e → ie.', 'Me despierto a las siete.', 'Я просыпаюсь в семь.'),
      d('«Утром»:', ['por la mañana', 'en la mañana de'], 'por la mañana', 'Часть дня: por la mañana / tarde / noche.', 'Por la mañana', 'Утром'),
      d('¿A qué hora ___ levantas?', ['te', 'me'], 'te', 'Вопрос к «ты» — te levantas.', '¿A qué hora te levantas?', 'Во сколько ты встаёшь?'),
    ],
  },

  27: {
    day: 27,
    title: 'Прошедшее время (pretérito)',
    emoji: '⏪',
    rule: [
      'Pretérito — законченное действие в прошлом: «вчера я поговорил».',
      '-AR: -é, -aste, -ó, -amos, -asteis, -aron (hablé, hablaste, habló).',
      '-ER / -IR: -í, -iste, -ió, -imos, -isteis, -ieron (comí, comiste, comió).',
      'IR и SER совпадают: fui, fuiste, fue, fuimos, fuisteis, fueron.',
    ],
    mnemonics: [
      { icon: '✔️', text: 'Ударение на конце (hablÓ, comÍ) — «точка в конце»: действие закончено. Знак ´ как галочка!' },
      { icon: '🏃', text: 'FUI ≈ «фуй, ушёл»: я ходил, уже вернулся.' },
      { icon: '👥', text: '-AMOS у -ar остаётся тем же (hablamos), у -ir — -imos (vivimos). «Мы» узнаём по -mos.' },
    ],
    tables: [
      {
        head: ['Кто', 'Hablar', 'Comer', 'Ir'],
        rows: [
          ['yo', 'habl·b:é', 'com·b:í', 'b:fui'],
          ['tú', 'habl·b:aste', 'com·b:iste', 'b:fuiste'],
          ['él / ella', 'habl·b:ó', 'com·b:ió', 'b:fue'],
          ['nosotros', 'habl·b:amos', 'com·b:imos', 'b:fuimos'],
          ['ellos', 'habl·b:aron', 'com·b:ieron', 'b:fueron'],
        ],
      },
    ],
    examples: [
      ['Ayer hablé con mi madre.', 'Вчера я говорил с мамой.'],
      ['Comí en un restaurante.', 'Я поел в ресторане.'],
      ['Fui al parque.', 'Я ходил в парк.'],
    ],
    drills: [
      d('Ayer yo ___ con mi madre. (hablar)', ['hablé', 'hablo', 'habló'], 'hablé', 'Я + -ar в прошлом: -é.', 'Ayer yo hablé con mi madre.', 'Вчера я говорил с мамой.'),
      d('Ella ___ tarde. (llegar)', ['llegó', 'llega', 'llegué'], 'llegó', 'Он / она + -ar в прошлом: -ó.', 'Ella llegó tarde.', 'Она пришла поздно.'),
      d('Yo ___ en un restaurante. (comer)', ['comí', 'comé', 'como'], 'comí', 'Я + -er в прошлом: -í.', 'Yo comí en un restaurante.', 'Я поел в ресторане.'),
      d('Tú ___ ayer. (comer)', ['comiste', 'comaste', 'comes'], 'comiste', 'Ты + -er в прошлом: -iste.', 'Tú comiste ayer.', 'Ты поел вчера.'),
      d('Ayer ___ al parque. (ir, я)', ['fui', 'voy', 'iré'], 'fui', 'Ir в прошлом, «я» — fui.', 'Ayer fui al parque.', 'Вчера я ходил в парк.'),
      d('Я купил книгу:', ['Compré un libro', 'Compro un libro'], 'Compré un libro', 'Ударное é — это прошлое.', 'Compré un libro.', 'Я купил книгу.'),
      d('Nosotros ___ una película. (ver)', ['vimos', 'vemos', 'viste'], 'vimos', 'Мы + -er в прошлом: -imos.', 'Nosotros vimos una película.', 'Мы посмотрели фильм.'),
    ],
  },

  28: {
    day: 28,
    title: 'Будущее: IR A + глагол',
    emoji: '🗓️',
    rule: [
      'Ir a + инфинитив = «собираюсь сделать»: voy a estudiar, vamos a cenar.',
      'Ir спрягается: voy, vas, va, vamos, vais, van. После a глагол остаётся в начальной форме.',
      'Этой конструкции достаточно, чтобы свободно говорить о будущем.',
    ],
    mnemonics: [
      { icon: '🚶', text: 'VOY A + глагол — «иду делать»: вы буквально «идёте» к действию. Voy a comer — «иду есть».' },
      { icon: '📌', text: 'Глагол не спрягаем! Спрягается только IR: voy a comer, vas a comer, va a comer.' },
    ],
    tables: [
      {
        head: ['Кто', 'Ir a + инфинитив'],
        rows: [
          ['yo', 'b:voy a estudiar'],
          ['tú', 'b:vas a estudiar'],
          ['él / ella', 'b:va a estudiar'],
          ['nosotros', 'b:vamos a estudiar'],
          ['ellos', 'b:van a estudiar'],
        ],
      },
    ],
    examples: [
      ['Mañana voy a trabajar.', 'Завтра я буду работать.'],
      ['¿Qué vas a hacer?', 'Что ты собираешься делать?'],
    ],
    drills: [
      d('Mañana yo ___ a trabajar.', ['voy', 'vas', 'va'], 'voy', 'С «я» — voy.', 'Mañana yo voy a trabajar.', 'Завтра я буду работать.'),
      d('¿Qué ___ a hacer mañana?', ['vas', 'voy', 'vamos'], 'vas', 'Спрашиваем «тебя» — vas.', '¿Qué vas a hacer mañana?', 'Что ты собираешься делать завтра?'),
      d('Nosotros ___ a cenar.', ['vamos', 'vais', 'van'], 'vamos', '«Мы» — vamos.', 'Nosotros vamos a cenar.', 'Мы собираемся ужинать.'),
      d('Voy a ___. (estudiar)', ['estudiar', 'estudio', 'estudié'], 'estudiar', 'После ir a — инфинитив.', 'Voy a estudiar.', 'Я собираюсь учиться.'),
      d('Я собираюсь купить билет:', ['Voy a comprar un billete', 'Voy a compro un billete'], 'Voy a comprar un billete', 'После voy a глагол в инфинитиве.', 'Voy a comprar un billete.', 'Я собираюсь купить билет.'),
      d('Найдите предложение с ошибкой.', ['Ella va a viajar.', 'Ella va a viaja.'], 'Ella va a viaja.', 'После va a нужен инфинитив: viajar.', 'Ella va a viajar.', 'Она собирается путешествовать.'),
    ],
  },

  29: {
    day: 29,
    title: 'Отель: вежливость и «есть ли»',
    emoji: '🧳',
    rule: [
      'Слова на -ción — женского рода: la habitación, la reservación.',
      'Quisiera — вежливое «я бы хотел»: Quisiera una habitación.',
      'Есть ли вообще — hay: ¿Hay wifi? Состояние — estar: ¿Está incluido el desayuno?',
      'Прилагательные на -e (doble) не меняются по роду: una habitación doble.',
    ],
    mnemonics: [
      { icon: '🏨', text: '-CIÓN = «-ЦИЯ»: habitación — как «хабитация», женский род, как «станция» → la estación.' },
      { icon: '🤲', text: 'AQUÍ TIENE ≈ «аки тьене»: «вот держите» (tener = «держать»). Протягиваете паспорт — Aquí tiene.' },
      { icon: '🎩', text: 'QUISIERA — для вежливых: «ну, я бы…». Идеально для стойки регистрации.' },
    ],
    tables: [
      {
        head: ['Ситуация', 'Фраза'],
        rows: [
          ['Вежливая просьба', 'b:Quisiera una habitación'],
          ['Бронь', 'b:Tengo una reserva'],
          ['Есть ли вообще?', 'b:¿Hay wifi?'],
          ['Включено ли?', 'b:¿Está incluido el desayuno?'],
          ['Отдаёте паспорт', 'b:Aquí tiene'],
        ],
      },
    ],
    examples: [
      ['Quisiera una habitación doble.', 'Я бы хотел двухместный номер.'],
      ['¿Hay wifi?', 'Есть вай-фай?'],
    ],
    drills: [
      d('___ habitación', ['La', 'El'], 'La', 'Слова на -ción — женского рода.', 'La habitación', 'Номер'),
      d('Как вежливее попросить номер?', ['Quisiera una habitación', 'Quiero una habitación'], 'Quisiera una habitación', 'Quisiera звучит мягче и вежливее.', 'Quisiera una habitación.', 'Я бы хотел номер.'),
      d('У меня есть бронь:', ['Tengo una reserva', 'Soy una reserva'], 'Tengo una reserva', 'Что-то «имеем» — tener.', 'Tengo una reserva.', 'У меня есть бронь.'),
      d('Есть вай-фай?', ['¿Hay wifi?', '¿Está wifi?'], '¿Hay wifi?', 'Спрашиваем, есть ли вообще, — hay.', '¿Hay wifi?', 'Есть вай-фай?'),
      d('¿___ incluido el desayuno?', ['Está', 'Hay', 'Es'], 'Está', 'Incluido — состояние, estar.', '¿Está incluido el desayuno?', 'Завтрак включён?'),
      d('Вы отдаёте паспорт:', ['Aquí tiene', 'Aquí es'], 'Aquí tiene', 'Вручая что-то, говорят aquí tiene («вот, держите»).', 'Aquí tiene.', 'Вот, пожалуйста.'),
      d('Una habitación ___.', ['doble', 'dobla'], 'doble', 'Doble на -e — не меняется по роду.', 'Una habitación doble.', 'Двухместный номер.'),
    ],
  },

  30: {
    day: 30,
    title: 'Большая шпаргалка',
    emoji: '🎓',
    rule: [
      'Вы прошли основу испанской грамматики. Соберём её в одну шпаргалку.',
      'Два «быть»: ser (суть) и estar (где, как). Tener — «иметь». Hay — «есть». Ir — «идти». Gustar — «нравиться».',
      'Три группы глаголов: -ar, -er, -ir. Прошедшее — pretérito, будущее — ir a + инфинитив.',
    ],
    mnemonics: [
      { icon: '🧬', text: 'SER ≈ «суть», ESTAR ≈ «стоять», TENER ≈ «танго», HAY ≈ «ай, есть!», IR ≈ «идти», GUSTAR ≈ «густо, вкусно».' },
      { icon: '🔤', text: 'Помните: -O, -AS, -A, -AMOS, -ÁIS, -AN — и вы спрягаете сотни глаголов.' },
    ],
    tables: [
      {
        title: 'Шпаргалка',
        head: ['Что', 'Как', 'Пример'],
        rows: [
          ['Кто / откуда', 'b:ser', 'Soy de Rusia.'],
          ['Где / как сейчас', 'b:estar', 'Estoy en casa.'],
          ['Возраст, голод', 'b:tener', 'Tengo hambre.'],
          ['Есть', 'b:hay', 'Hay un banco.'],
          ['Идти / план', 'b:ir', 'Voy a viajar.'],
          ['Нравится', 'b:gustar', 'Me gusta España.'],
          ['Прошлое', 'b:pretérito', 'Fui al parque.'],
        ],
      },
    ],
    examples: [['Me llamo Ana, soy de Rusia y voy a viajar a Madrid.', 'Меня зовут Ана, я из России и собираюсь поехать в Мадрид.']],
    drills: [
      d('Меня зовут Ана:', ['Me llamo Ana', 'Te llamo Ana'], 'Me llamo Ana', 'Я → me llamo.', 'Me llamo Ana.', 'Меня зовут Ана.'),
      d('___ de Rusia. (я)', ['Soy', 'Estoy', 'Tengo'], 'Soy', 'Откуда ты — суть, значит ser.', 'Soy de Rusia.', 'Я из России.'),
      d('Hablo un ___ de español.', ['poco', 'pocos', 'poca'], 'poco', 'Устойчивое выражение: un poco de.', 'Hablo un poco de español.', 'Я немного говорю по-испански.'),
      d('Как правильно?', ['No entiendo.', 'Entiendo no.'], 'No entiendo.', 'Отрицание no ставится перед глаголом.', 'No entiendo.', 'Я не понимаю.'),
      d('Me ___ España.', ['encanta', 'encantan'], 'encanta', 'Испания одна — encanta.', 'Me encanta España.', 'Я обожаю Испанию.'),
      d('Quiero ___ a Madrid.', ['viajar', 'viajo', 'viajé'], 'viajar', 'После quiero — инфинитив.', 'Quiero viajar a Madrid.', 'Я хочу поехать в Мадрид.'),
      d('Mañana voy a ___.', ['viajar', 'viajé', 'viajo'], 'viajar', 'После voy a — инфинитив.', 'Mañana voy a viajar.', 'Завтра я собираюсь ехать.'),
      d('Ayer ___ al parque.', ['fui', 'voy'], 'fui', 'Вчера — прошедшее: fui.', 'Ayer fui al parque.', 'Вчера я ходил в парк.'),
      d('¿Cómo se ___ «gracias» en ruso?', ['dice', 'dices', 'dicen'], 'dice', 'Безличная форма: se dice — «как говорится».', '¿Cómo se dice «gracias» en ruso?', 'Как по-русски «gracias»?'),
      d('Говорите помедленнее, пожалуйста:', ['¿Puede hablar más despacio, por favor?', '¿Puede habla más despacio, por favor?'], '¿Puede hablar más despacio, por favor?', 'После puede — инфинитив: hablar.', '¿Puede hablar más despacio, por favor?', 'Говорите помедленнее, пожалуйста.'),
    ],
  },
};
