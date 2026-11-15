import type { Grammar } from '../types.ts';
import { GRAMMAR_B } from './grammar-b.ts';

// Грамматика к урокам 1–14. Ассоциации (мнемоники) — на русском, для запоминания.
export const GRAMMAR: Record<number, Grammar> = {
  1: {
    day: 1,
    title: 'Как читать по-испански',
    emoji: '🔤',
    rule: [
      'Испанский читается почти так, как пишется. Выучите несколько исключений — и можно читать любой текст.',
      'Ударение: если слово кончается на гласную, -n или -s — ударение на предпоследний слог (HAblo). Иначе — на последний (ciuDAD). Исключения отмечены значком ´.',
    ],
    mnemonics: [
      { icon: '🤫', text: 'H — «молчун»: hola читается «ола». Буква есть, звука нет.' },
      { icon: '🍺', text: 'J — это «х», как в слове «Хуан»: jamón = «хамон».' },
      { icon: '🐴', text: 'Ñ — «нь», как в «конь»: España = «эспаНЬя».' },
      { icon: '🔀', text: 'V = B: обе читаются как мягкое «б». Vino звучит как «бино».' },
    ],
    tables: [
      {
        title: 'Буквы-«хитрецы»',
        head: ['Пишем', 'Читаем', 'Пример'],
        rows: [
          ['b:h', 'не читается', 'hola — ола'],
          ['b:j', 'х', 'jamón — хамон'],
          ['b:ll', '«й» (ль-й)', 'calle — калье'],
          ['b:ñ', 'нь', 'año — аньо'],
          ['b:qu', 'к (u молчит)', 'queso — кесо'],
          ['b:ce, ci', 'с (как th в Испании)', 'cena — сена'],
        ],
      },
    ],
    examples: [
      ['Hola', 'Привет (читаем «ола»)'],
      ['Mañana', 'Завтра (читаем «маньяна»)'],
      ['Queso', 'Сыр (читаем «кесо»)'],
    ],
    drills: [
      {
        q: 'Как читается слово «hola»?',
        options: ['ола', 'хола', 'гола'],
        answer: 'ола',
        why: 'Буква H в испанском не читается совсем — «молчун».',
      },
      {
        q: 'Как читается «jamón»?',
        options: ['хамон', 'жамон', 'джамон'],
        answer: 'хамон',
        why: 'J — это звук «х», как в имени Хуан.',
      },
      {
        q: 'Как читается «año»?',
        options: ['аньо', 'ано', 'айо'],
        answer: 'аньо',
        why: 'Ñ с «волной» — мягкое «нь», как в слове «конь».',
      },
      {
        q: 'Как читается «queso»?',
        options: ['кесо', 'куэсо', 'квесо'],
        answer: 'кесо',
        why: 'В сочетании qu буква u молчит: que = «ке», qui = «ки».',
      },
      {
        q: 'Где ударение в слове «hablo»?',
        options: ['HAblo', 'haBLO'],
        answer: 'HAblo',
        why: 'Слово кончается на гласную — значит, ударение на предпоследнем слоге.',
      },
      {
        q: 'Где ударение в слове «ciudad»?',
        options: ['ciuDAD', 'CIUdad'],
        answer: 'ciuDAD',
        why: 'Слово кончается на согласную (не n и не s) — ударение на последнем слоге.',
      },
    ],
  },

  2: {
    day: 2,
    title: 'Вопросы и «ты» или «вы»',
    emoji: '❓',
    rule: [
      'Вопросительные и восклицательные предложения в испанском открываются перевёрнутым знаком: ¿Cómo estás? ¡Hola!',
      'Есть два «вы»: tú — на «ты» (друзья, ровесники), usted — на «вы» (старшие, незнакомые).',
      'Меня зовут: me llamo… (дословно «я зову себя»). Тебя зовут: te llamas. Его/её, вас: se llama.',
    ],
    mnemonics: [
      { icon: '🙃', text: '¿ — «человечек вверх ногами». Вопрос начинается заранее, чтобы вы сразу знали интонацию.' },
      { icon: '🎩', text: 'USTED — «устэд»: звучит солидно, как «ваша светлость». Это «вы».' },
      { icon: '🦙', text: 'Me LLAMo — «лама»! Представьте, что вас зовут Лама: «ме йямо».' },
    ],
    tables: [
      {
        title: 'Llamarse — «называться»',
        head: ['Кто', 'Форма'],
        rows: [
          ['yo (я)', 'me b:llamo'],
          ['tú (ты)', 'te b:llamas'],
          ['usted (вы), él, ella', 'se b:llama'],
        ],
      },
    ],
    examples: [
      ['¿Cómo te llamas?', 'Как тебя зовут?'],
      ['Me llamo Ana.', 'Меня зовут Ана.'],
      ['¿Cómo se llama usted?', 'Как вас зовут? (на «вы»)'],
    ],
    drills: [
      {
        q: 'Выберите правильное окончание: Yo me ___ Pablo.',
        options: ['llamo', 'llamas', 'llama'],
        answer: 'llamo',
        why: 'С «я» (yo) глагол заканчивается на -o: me llamo.',
      },
      {
        q: 'Вы спрашиваете у друга: «Как тебя зовут?»',
        options: ['¿Cómo te llamas?', '¿Cómo se llama?', '¿Cómo me llamo?'],
        answer: '¿Cómo te llamas?',
        why: 'Для «ты» — te llamas. Форма se llama — для «вы» (usted) или «он/она».',
      },
      {
        q: 'Вы спрашиваете у пожилого незнакомца «Как вас зовут?»',
        options: ['¿Cómo se llama usted?', '¿Cómo te llamas?', '¿Cómo me llamo?'],
        answer: '¿Cómo se llama usted?',
        why: 'Usted — вежливое «вы», и глагол идёт в форме на -a: se llama.',
      },
      {
        q: 'Как правильно начать вопрос?',
        options: ['¿Cómo estás?', 'Cómo estás?', 'Cómo estás¿'],
        answer: '¿Cómo estás?',
        why: 'В испанском вопрос открывается знаком ¿ и закрывается ?.',
      },
      {
        q: 'Что вежливее для «вы»?',
        options: ['usted', 'tú'],
        answer: 'usted',
        why: 'Tú — для друзей, usted — для старших и незнакомых.',
      },
    ],
  },

  3: {
    day: 3,
    title: 'Глагол SER — «быть» по сути',
    emoji: '🧬',
    rule: [
      'Ser — «быть» в значении «по своей сути»: имя, национальность, профессия, откуда ты.',
      'Это неправильный глагол — его формы просто надо запомнить. Но они очень частые, поэтому запомнятся быстро.',
      'Местоимение часто опускают: Soy ruso = «(Я) русский». Форма глагола уже говорит, кто это.',
    ],
    mnemonics: [
      { icon: '🧬', text: 'SER ≈ «СУТЬ». Ser — это то, что составляет суть: кто ты и какой ты.' },
      { icon: '🙋', text: 'SOY ≈ «сой» — «сой — это я»: Soy = «я есть», звучит коротко и про себя.' },
      { icon: '✔️', text: 'ES ≈ русское «ЕСТЬ»: Él es — «он есть». Самая лёгкая форма.' },
    ],
    tables: [
      {
        title: 'Ser — «быть»',
        head: ['Кто', 'Форма', 'Пример'],
        rows: [
          ['yo', 'b:soy', 'Soy Ana'],
          ['tú', 'b:eres', 'Eres ruso'],
          ['él / ella / usted', 'b:es', 'Es médico'],
          ['nosotros', 'b:somos', 'Somos amigos'],
          ['vosotros', 'b:sois', 'Sois turistas'],
          ['ellos / ustedes', 'b:son', 'Son de Rusia'],
        ],
      },
    ],
    examples: [
      ['Soy de Rusia.', 'Я из России.'],
      ['Ella es profesora.', 'Она — учительница.'],
      ['Somos amigos.', 'Мы друзья.'],
    ],
    drills: [
      {
        q: 'Yo ___ de Moscú.',
        options: ['soy', 'eres', 'es', 'son'],
        answer: 'soy',
        why: 'С «я» (yo) — soy. Помните: «сой».',
      },
      {
        q: 'Tú ___ muy amable.',
        options: ['eres', 'soy', 'es', 'somos'],
        answer: 'eres',
        why: 'С «ты» (tú) — eres.',
      },
      {
        q: 'Ella ___ médica.',
        options: ['es', 'eres', 'soy', 'son'],
        answer: 'es',
        why: 'Он / она / вы (usted) — es, как русское «есть».',
      },
      {
        q: 'Nosotros ___ amigos.',
        options: ['somos', 'sois', 'son', 'soy'],
        answer: 'somos',
        why: 'С «мы» (nosotros) — somos. Окончание -mos всегда «мы».',
      },
      {
        q: 'Ellos ___ de España.',
        options: ['son', 'somos', 'es', 'eres'],
        answer: 'son',
        why: 'Они (ellos) и вы во мн.ч. (ustedes) — son.',
      },
      {
        q: 'Найдите ошибку.',
        options: ['Yo soy ruso.', 'Yo es ruso.'],
        answer: 'Yo es ruso.',
        why: 'С yo нужно soy, а es — для «он/она».',
      },
    ],
  },

  4: {
    day: 4,
    title: 'Числа и TENER — «иметь»',
    emoji: '🔢',
    rule: [
      'Возраст в испанском «имеют», а не «есть»: Tengo 30 años — дословно «Я имею 30 лет».',
      'Tener — «иметь». У него «ботинок»: в формах yo/tú/él/ellos корень меняется e → ie (tienes, tiene, tienen), а у nosotros/vosotros остаётся e.',
      'Форма yo — особая: tengo (с -g-).',
    ],
    mnemonics: [
      { icon: '🎸', text: 'TENGO ≈ «танго»: «Я танцую танго — я ИМЕЮ ритм». Tengo = «я имею».' },
      { icon: '🥾', text: 'Правило «ботинка»: обведите в таблице формы с ie — получится форма сапога. Внутри сапога — те, что меняются; снаружи (nosotros, vosotros) — без изменений.' },
      { icon: '🎂', text: 'Возраст — «имею лет»: Tengo 25 años. Не «soy 25»!' },
    ],
    tables: [
      {
        title: 'Tener — «иметь» (ботинок e → ie)',
        head: ['Кто', 'Форма'],
        rows: [
          ['yo', 'b:tengo'],
          ['tú', 't·b:ie·nes'],
          ['él / ella / usted', 't·b:ie·ne'],
          ['nosotros', 'tenemos'],
          ['vosotros', 'tenéis'],
          ['ellos / ustedes', 't·b:ie·nen'],
        ],
      },
    ],
    examples: [
      ['Tengo veinte años.', 'Мне двадцать лет.'],
      ['¿Cuántos años tienes?', 'Сколько тебе лет?'],
      ['Tiene un hermano.', 'У него есть брат.'],
    ],
    drills: [
      {
        q: 'Yo ___ treinta años.',
        options: ['tengo', 'tienes', 'soy', 'tiene'],
        answer: 'tengo',
        why: 'Возраст — через tener. С yo — особая форма tengo.',
      },
      {
        q: '¿Cuántos años ___ tú?',
        options: ['tienes', 'tengo', 'eres', 'tenemos'],
        answer: 'tienes',
        why: 'Tú — tienes (e → ie, «ботинок»).',
      },
      {
        q: 'Mi hermano ___ diez años.',
        options: ['tiene', 'tienes', 'tengo', 'es'],
        answer: 'tiene',
        why: 'Он — tiene. В этой форме тоже e → ie.',
      },
      {
        q: 'Nosotros ___ un perro.',
        options: ['tenemos', 'tienemos', 'tienen', 'tengo'],
        answer: 'tenemos',
        why: 'У nosotros нет «ботинка»: корень остаётся ten-, поэтому tenemos, а не tienemos.',
      },
      {
        q: 'Как сказать «Мне 25 лет»?',
        options: ['Tengo veinticinco años.', 'Soy veinticinco años.'],
        answer: 'Tengo veinticinco años.',
        why: 'Возраст в испанском «имеют»: tener, а не ser.',
      },
    ],
  },

  5: {
    day: 5,
    title: 'Заказ, «хочу» и «с / без»',
    emoji: '☕',
    rule: [
      'Когда заказываете, артикль не нужен: Un café, por favor. Quiero agua. Просто называем то, что хотим.',
      'Голод и жажду «имеют»: Tengo hambre (я голоден), tengo sed (хочу пить).',
      'Con — «с», sin — «без»: café con leche (кофе с молоком), café sin azúcar (без сахара).',
    ],
    mnemonics: [
      { icon: '🍽️', text: 'Tengo hambre — «я имею голод». Ничего «быть» тут нет, голод — это то, что у вас «есть».' },
      { icon: '➕', text: 'CON — «кон», как «кон» на столе: что-то прибавили. SIN — «синус минус»: без.' },
      { icon: '🙏', text: 'Por favor — «пор фавор» — как «пожалуйста» от слова «фаворит»: окажите услугу.' },
    ],
    tables: [
      {
        title: 'Con / sin',
        head: ['Испанский', 'Перевод'],
        rows: [
          ['café b:con leche', 'кофе с молоком'],
          ['café b:sin azúcar', 'кофе без сахара'],
          ['té b:con limón', 'чай с лимоном'],
        ],
      },
    ],
    examples: [
      ['Quiero un café, por favor.', 'Я хочу кофе, пожалуйста.'],
      ['Tengo hambre.', 'Я голоден.'],
      ['Un té sin azúcar.', 'Чай без сахара.'],
    ],
    drills: [
      {
        q: 'Вы голодны. Что скажете?',
        options: ['Tengo hambre.', 'Soy hambre.', 'Estoy hambre.'],
        answer: 'Tengo hambre.',
        why: 'Голод «имеют»: tener hambre.',
      },
      {
        q: 'Кофе без сахара:',
        options: ['café sin azúcar', 'café con azúcar'],
        answer: 'café sin azúcar',
        why: 'Sin — «без», con — «с».',
      },
      {
        q: 'Чай с лимоном:',
        options: ['té con limón', 'té sin limón'],
        answer: 'té con limón',
        why: 'Con — «с».',
      },
      {
        q: 'Как вежливо заказать кофе?',
        options: ['Un café, por favor.', 'Soy un café, por favor.'],
        answer: 'Un café, por favor.',
        why: 'При заказе просто называем то, что хотим: Un café, por favor. Глагол «быть» не нужен.',
      },
      {
        q: 'Вам хочется пить:',
        options: ['Tengo sed.', 'Soy sed.'],
        answer: 'Tengo sed.',
        why: 'Жажду, как и голод, «имеют»: tener sed.',
      },
    ],
  },

  6: {
    day: 6,
    title: 'Артикли: el, la, un, una',
    emoji: '🏷️',
    rule: [
      'У каждого существительного в испанском есть род — мужской или женский. Артикль подскажет его.',
      'Определённый артикль («этот самый»): el — мужской, la — женский. Неопределённый («какой-то», «один»): un — мужской, una — женский.',
      'Как угадать род по окончанию: -o → обычно мужской (el libro), -a → обычно женский (la casa). Слова на -dad, -ción — женские (la ciudad, la canción). Слова на -ma — часто мужские (el problema, el tema).',
    ],
    mnemonics: [
      { icon: '👨', text: 'EL — «Эльдар»: мужское имя. LA — «Лада»: женское имя. Представьте, что Эльдар ведёт «его» слова, а Лада — «её».' },
      { icon: '🏙️', text: '-DAD = «-ОСТЬ» и -CIÓN = «-ЦИЯ»: русские слова на -ость и -ция женского рода, и в испанском так же: la ciudad, la información.' },
      { icon: '✋', text: 'Исключение, которое стоит запомнить: la MANO (рука) — с «о», но женского рода. «Рука Ладе» — la mano.' },
    ],
    tables: [
      {
        title: 'Артикли',
        head: ['', 'Мужской', 'Женский'],
        rows: [
          ['определённый', 'm:el libro', 'f:la casa'],
          ['неопределённый', 'm:un libro', 'f:una casa'],
        ],
      },
      {
        title: 'Род по окончанию',
        head: ['Окончание', 'Род', 'Пример'],
        rows: [
          ['-o', 'm:мужской', 'el amigo'],
          ['-a', 'f:женский', 'la amiga'],
          ['-dad, -ción', 'f:женский', 'la ciudad, la canción'],
          ['-ma (часто)', 'm:мужской', 'el problema'],
        ],
      },
    ],
    examples: [
      ['El libro está aquí.', 'Книга здесь.'],
      ['La casa es grande.', 'Дом большой.'],
      ['Quiero un café y una tarta.', 'Хочу кофе и торт.'],
    ],
    drills: [
      {
        q: '___ casa',
        options: ['la', 'el', 'un'],
        answer: 'la',
        why: 'Casa оканчивается на -a — женский род, значит la.',
      },
      {
        q: '___ libro',
        options: ['el', 'la', 'una'],
        answer: 'el',
        why: 'Libro на -o — мужской род, значит el.',
      },
      {
        q: '___ ciudad',
        options: ['la', 'el', 'un'],
        answer: 'la',
        why: 'Слова на -dad женского рода (как «-ость»): la ciudad.',
      },
      {
        q: '___ problema',
        options: ['el', 'la', 'una'],
        answer: 'el',
        why: 'Слова на -ma чаще мужского рода: el problema.',
      },
      {
        q: '___ mano (рука)',
        options: ['la', 'el'],
        answer: 'la',
        why: 'Исключение: mano женского рода, хотя и на -o. «Рука Ладе».',
      },
      {
        q: 'Хочу один кофе (café — мужской):',
        options: ['un café', 'una café'],
        answer: 'un café',
        why: 'Неопределённый артикль мужского рода — un.',
      },
      {
        q: 'Хочу один торт (tarta — женский):',
        options: ['una tarta', 'un tarta'],
        answer: 'una tarta',
        why: 'Tarta на -a, женский род — una.',
      },
    ],
  },

  7: {
    day: 7,
    title: 'Множественное число',
    emoji: '➕',
    rule: [
      'Слово на гласную — добавляем -s: libro → libros, casa → casas.',
      'Слово на согласную — добавляем -es: ciudad → ciudades, canción → canciones.',
      'Артикли тоже меняются: el → los, la → las, un → unos, una → unas.',
    ],
    mnemonics: [
      { icon: '🧩', text: 'Гласная + S, согласная + ES. Как будто согласной «некомфортно» стоять рядом с S, и ей нужна гласная-прокладка E.' },
      { icon: '👥', text: 'LOS и LAS звучат как «лос» и «лас» — «ЛОС-мужчины, ЛАС-женщины». Мужской род во мн.ч. — los, женский — las.' },
    ],
    tables: [
      {
        title: 'Единственное → множественное',
        head: ['Ед. ч.', 'Мн. ч.'],
        rows: [
          ['el libro', 'm:los libros'],
          ['la casa', 'f:las casas'],
          ['la ciudad', 'f:las ciudades'],
          ['un amigo', 'm:unos amigos'],
          ['una amiga', 'f:unas amigas'],
        ],
      },
    ],
    examples: [
      ['Los libros son interesantes.', 'Книги интересные.'],
      ['Las ciudades son grandes.', 'Города большие.'],
      ['Tengo unos amigos.', 'У меня есть несколько друзей.'],
    ],
    drills: [
      {
        q: 'Мн. ч. от «casa»:',
        options: ['casas', 'cases', 'casaes'],
        answer: 'casas',
        why: 'Слово на гласную получает -s.',
      },
      {
        q: 'Мн. ч. от «ciudad»:',
        options: ['ciudades', 'ciudads', 'ciudadas'],
        answer: 'ciudades',
        why: 'Слово на согласную получает -es.',
      },
      {
        q: '___ libros',
        options: ['los', 'las', 'el'],
        answer: 'los',
        why: 'Libro — мужской, во мн. ч. — los.',
      },
      {
        q: '___ casas',
        options: ['las', 'los', 'la'],
        answer: 'las',
        why: 'Casa — женский, во мн. ч. — las.',
      },
      {
        q: 'У меня есть несколько подруг:',
        options: ['unas amigas', 'unos amigas', 'una amigas'],
        answer: 'unas amigas',
        why: 'Amiga — женский, множественный — unas.',
      },
    ],
  },

  8: {
    day: 8,
    title: 'TENER: холод, жара, спешка',
    emoji: '🌡️',
    rule: [
      'Многие состояния в испанском «имеют»: tengo frío (мне холодно), tengo calor (жарко), tengo prisa (я спешу), tengo sueño (хочу спать), tengo miedo (боюсь).',
      'После tener нет артикля и нет слова «очень» — вместо него ставим mucho: Tengo mucho frío.',
    ],
    mnemonics: [
      { icon: '🥶', text: 'FRÍO ≈ «фриз» (морозилка). Tengo frío — «я имею фриз».' },
      { icon: '🔥', text: 'CALOR ≈ «калорифер» (обогреватель). Tengo calor — «я имею калорифер внутри».' },
      { icon: '🏃', text: 'PRISA ≈ «приспичило»: «мне приспичило — я имею спешку».' },
      { icon: '😴', text: 'SUEÑO — «суэньо» — «сон»; tengo sueño — «я имею сон», хочу спать.' },
    ],
    tables: [
      {
        title: 'Tener + состояние',
        head: ['Испанский', 'Перевод'],
        rows: [
          ['tengo b:frío', 'мне холодно'],
          ['tengo b:calor', 'мне жарко'],
          ['tengo b:prisa', 'я спешу'],
          ['tengo b:sueño', 'хочу спать'],
          ['tengo b:miedo', 'мне страшно'],
        ],
      },
    ],
    examples: [
      ['Tengo mucho frío.', 'Мне очень холодно.'],
      ['Tienes prisa.', 'Ты спешишь.'],
      ['Tiene sueño.', 'Он хочет спать.'],
    ],
    drills: [
      {
        q: 'Мне жарко:',
        options: ['Tengo calor.', 'Soy calor.', 'Estoy calor.'],
        answer: 'Tengo calor.',
        why: 'Жара — состояние, которое «имеют»: tener calor.',
      },
      {
        q: 'Мне очень холодно:',
        options: ['Tengo mucho frío.', 'Tengo muy frío.'],
        answer: 'Tengo mucho frío.',
        why: 'После tener говорим mucho (как «много»), а не muy.',
      },
      {
        q: 'Он спешит:',
        options: ['Tiene prisa.', 'Tengo prisa.', 'Es prisa.'],
        answer: 'Tiene prisa.',
        why: 'Он → tiene.',
      },
      {
        q: 'Ты хочешь спать:',
        options: ['Tienes sueño.', 'Tengo sueño.'],
        answer: 'Tienes sueño.',
        why: 'С «ты» — tienes.',
      },
    ],
  },

  9: {
    day: 9,
    title: 'SER или ESTAR?',
    emoji: '⚖️',
    rule: [
      'Оба глагола переводятся «быть». SER — для сути и постоянных признаков, ESTAR — для местоположения и состояния сейчас.',
      'SER отвечает на вопросы: Кто? Что? Какой по сути? Откуда? Который час?',
      'ESTAR отвечает на вопросы: Где? Как сейчас (состояние, настроение)?',
      'Estar: estoy, estás, está, estamos, estáis, están.',
    ],
    mnemonics: [
      { icon: '🧬', text: 'SER ≈ «СУТЬ»: что неизменно. Es alto — «он высокий» (по сути). Soy ruso — «я русский».' },
      { icon: '🧍', text: 'ESTAR ≈ «СТОЯТЬ» (от лат. stare). Estoy ≈ «я стою» — где стою, как стою прямо сейчас: Estoy en casa, Estoy cansado.' },
      { icon: '📍', text: 'Правило-«ГДЕ»: если вопрос «ГДЕ?» — всегда ESTAR (даже для города: Madrid está en España).' },
    ],
    tables: [
      {
        title: 'SER vs ESTAR',
        head: ['', 'SER', 'ESTAR'],
        rows: [
          ['yo', 'soy', 'estoy'],
          ['tú', 'eres', 'estás'],
          ['él / ella / usted', 'es', 'está'],
          ['nosotros', 'somos', 'estamos'],
          ['vosotros', 'sois', 'estáis'],
          ['ellos / ustedes', 'son', 'están'],
        ],
      },
      {
        head: ['Вопрос', 'Глагол', 'Пример'],
        rows: [
          ['Кто? Что? Откуда?', 'b:SER', 'Soy de Rusia.'],
          ['Какой по сути?', 'b:SER', 'Es simpático.'],
          ['Где?', 'b:ESTAR', 'Estoy en Madrid.'],
          ['Как сейчас?', 'b:ESTAR', 'Estoy cansado.'],
        ],
      },
    ],
    examples: [
      ['Soy de Moscú, pero estoy en Madrid.', 'Я из Москвы, но сейчас в Мадриде.'],
      ['Ella es simpática.', 'Она милая (по натуре).'],
      ['Hoy está cansada.', 'Сегодня она устала.'],
    ],
    drills: [
      {
        q: 'Yo ___ en casa. (Где?)',
        options: ['estoy', 'soy'],
        answer: 'estoy',
        why: 'Местоположение — всегда estar.',
      },
      {
        q: 'Yo ___ ruso. (Кто?)',
        options: ['soy', 'estoy'],
        answer: 'soy',
        why: 'Национальность — суть, значит ser.',
      },
      {
        q: 'Hoy ___ muy cansado.',
        options: ['estoy', 'soy'],
        answer: 'estoy',
        why: 'Усталость — временное состояние: estar.',
      },
      {
        q: 'Mi hermana ___ simpática.',
        options: ['es', 'está'],
        answer: 'es',
        why: 'Характер, суть человека — ser.',
      },
      {
        q: '¿Dónde ___ el baño?',
        options: ['está', 'es'],
        answer: 'está',
        why: 'Вопрос «где?» — estar.',
      },
      {
        q: '¿Qué hora ___?',
        options: ['es', 'está'],
        answer: 'es',
        why: 'Время — ser: Son las dos, Es la una.',
      },
      {
        q: 'Nosotros ___ de España.',
        options: ['somos', 'estamos'],
        answer: 'somos',
        why: 'Откуда ты — суть, значит ser.',
      },
    ],
  },

  10: {
    day: 10,
    title: 'Мой, твой, его: mi, tu, su',
    emoji: '👪',
    rule: [
      'Притяжательные стоят перед существительным: mi casa (мой дом), tu amigo (твой друг), su hermana (его/её/ваша сестра).',
      'Согласуются с числом того, что имеют (не с владельцем!): mi hermano → mis hermanos.',
      'Su — одно слово на «его», «её», «их» и «ваш». Понять, кто именно, помогает контекст.',
    ],
    mnemonics: [
      { icon: '🪞', text: 'MI — «ми» (мне/мой, как «мне»). TU — «ту» (тот, который твой). SU — «сю» (чей-то, его).' },
      { icon: '🧭', text: 'Число слушает ПРЕДМЕТ, а не человека: «mis libros» — книг много, поэтому mis, а не mi.' },
    ],
    tables: [
      {
        title: 'Притяжательные',
        head: ['Чей', 'Один предмет', 'Несколько'],
        rows: [
          ['мой', 'mi casa', 'mis casas'],
          ['твой', 'tu casa', 'tus casas'],
          ['его / её / ваш', 'su casa', 'sus casas'],
        ],
      },
      {
        title: 'Семья — парами',
        head: ['Мужской', 'Женский'],
        rows: [
          ['m:padre — отец', 'f:madre — мать'],
          ['m:hermano — брат', 'f:hermana — сестра'],
          ['m:hijo — сын', 'f:hija — дочь'],
          ['m:abuelo — дедушка', 'f:abuela — бабушка'],
        ],
      },
    ],
    examples: [
      ['Mi madre es profesora.', 'Моя мама — учительница.'],
      ['Tus amigos son simpáticos.', 'Твои друзья милые.'],
      ['Su hermana vive en Madrid.', 'Его сестра живёт в Мадриде.'],
    ],
    drills: [
      {
        q: '___ casa (мой дом)',
        options: ['mi', 'mis', 'tu'],
        answer: 'mi',
        why: 'Дом один — mi.',
      },
      {
        q: '___ hermanos (мои братья)',
        options: ['mis', 'mi', 'tus'],
        answer: 'mis',
        why: 'Братьев несколько — mis.',
      },
      {
        q: '¿Dónde está ___ padre? (твой)',
        options: ['tu', 'tus', 'mi'],
        answer: 'tu',
        why: 'Твой + один отец — tu.',
      },
      {
        q: 'Моя сестра: mi ___',
        options: ['hermana', 'hermano'],
        answer: 'hermana',
        why: 'Сестра — женский род: окончание -a.',
      },
      {
        q: 'Его дочь: su ___',
        options: ['hija', 'hijo'],
        answer: 'hija',
        why: 'Дочь — hija (-a — женский род).',
      },
    ],
  },

  11: {
    day: 11,
    title: 'Прилагательные: после слова и в тон роду',
    emoji: '🎨',
    rule: [
      'Прилагательное обычно стоит ПОСЛЕ существительного: una casa grande (большой дом), un coche rojo (красная машина).',
      'Оно согласуется с существительным по роду и числу: -o для мужского (rojo), -a для женского (roja), -s для мн. ч. (rojos, rojas).',
      'Прилагательные на -e или согласную (grande, verde, azul, fácil) не меняются по роду: un libro grande, una casa grande. Во мн. ч. — только добавляем -s / -es.',
    ],
    mnemonics: [
      { icon: '🎭', text: 'Прилагательное — «костюм», который подстраивается под существительное: мужчине — костюм на -o, женщине — на -a.' },
      { icon: '🔄', text: 'Порядок наоборот: по-русски «красная машина», по-испански «машина красная» — coche rojo. Сначала предмет, потом его «ярлык».' },
      { icon: '🧘', text: 'GRANDE, VERDE, AZUL — «ленивые» слова: им лень менять окончание, они одинаковы для обоих родов.' },
    ],
    tables: [
      {
        title: 'Согласование',
        head: ['', 'Мужской', 'Женский'],
        rows: [
          ['ед. ч.', 'm:un coche rojo', 'f:una casa roja'],
          ['мн. ч.', 'm:coches rojos', 'f:casas rojas'],
          ['«ленивое»', 'm:un libro grande', 'f:una casa grande'],
        ],
      },
    ],
    examples: [
      ['Tengo un coche rojo.', 'У меня красная машина.'],
      ['La casa es grande.', 'Дом большой.'],
      ['Mis amigas son simpáticas.', 'Мои подруги милые.'],
    ],
    drills: [
      {
        q: 'Красная машина (coche — мужской):',
        options: ['un coche rojo', 'un rojo coche', 'un coche roja'],
        answer: 'un coche rojo',
        why: 'Прилагательное стоит после существительного и в мужском роде — rojo.',
      },
      {
        q: 'Красный дом (casa — женский): una casa ___',
        options: ['roja', 'rojo', 'rojas'],
        answer: 'roja',
        why: 'Casa женского рода — прилагательное на -a.',
      },
      {
        q: 'Большая ___ (casa) — grande?',
        options: ['una casa grande', 'una casa granda'],
        answer: 'una casa grande',
        why: 'Grande «ленивое»: одинаково для обоих родов, окончание -a не нужно.',
      },
      {
        q: 'Красные машины:',
        options: ['coches rojos', 'coches rojo', 'rojos coches'],
        answer: 'coches rojos',
        why: 'Мн. ч., мужской род — rojos, после существительного.',
      },
      {
        q: 'Мои подруги милые:',
        options: ['Mis amigas son simpáticas.', 'Mis amigas son simpáticos.'],
        answer: 'Mis amigas son simpáticas.',
        why: 'Amigas — женский мн. ч., значит simpáticas.',
      },
    ],
  },

  12: {
    day: 12,
    title: 'HAY или ESTÁ?',
    emoji: '🗺️',
    rule: [
      'HAY — «есть, имеется» (что-то существует). Не меняется ни по лицам, ни по числам: Hay un banco aquí. Hay dos bancos.',
      'ESTÁ / ESTÁN — «находится» (где-то конкретный, известный предмет): El banco está en la calle.',
      'После hay нет определённого артикля (el, la): Hay un café, но НЕ hay el café.',
    ],
    mnemonics: [
      { icon: '🙋', text: 'HAY звучит как «ай!» — «Ай! Тут есть банк!» Вы только что обнаружили что-то новое.' },
      { icon: '🔦', text: 'HAY — «лампочка включилась»: впервые замечаем, что что-то существует. ESTÁ — «вы знаете, о чём речь, и говорите, где оно».' },
    ],
    tables: [
      {
        head: ['', 'Что значит', 'Пример'],
        rows: [
          ['b:hay', 'есть (что-то), существует', 'Hay un banco cerca.'],
          ['b:está / están', 'находится (известное)', 'El banco está allí.'],
        ],
      },
    ],
    examples: [
      ['¿Hay un baño por aquí?', 'Здесь есть туалет?'],
      ['El baño está a la derecha.', 'Туалет справа.'],
      ['Hay dos restaurantes.', 'Есть два ресторана.'],
    ],
    drills: [
      {
        q: '¿___ un banco cerca?',
        options: ['Hay', 'Está', 'Es'],
        answer: 'Hay',
        why: 'Спрашиваем, существует ли такой банк — hay.',
      },
      {
        q: 'El banco ___ en la calle principal.',
        options: ['está', 'hay'],
        answer: 'está',
        why: 'Конкретный известный банк (с el) — где он: está.',
      },
      {
        q: 'En la ciudad ___ muchos museos.',
        options: ['hay', 'están'],
        answer: 'hay',
        why: 'Говорим, что музеи существуют — hay, оно не меняется по числу.',
      },
      {
        q: 'Найдите правильное предложение:',
        options: ['Hay un café aquí.', 'Hay el café aquí.'],
        answer: 'Hay un café aquí.',
        why: 'После hay не ставят определённый артикль el/la.',
      },
      {
        q: '¿Dónde ___ la estación?',
        options: ['está', 'hay'],
        answer: 'está',
        why: 'Вопрос «где?» про известный предмет — está.',
      },
    ],
  },

  13: {
    day: 13,
    title: 'Глагол QUERER — «хотеть»',
    emoji: '💭',
    rule: [
      'Quiero — «я хочу». Хотеть + действие: Quiero comer (хочу есть, глагол остаётся в инфинитиве).',
      'Quiero + существительное: Quiero un café. Так вы говорите, чего хотите.',
      'Querer — «ботинок»: e → ie у yo, tú, él, ellos; у nosotros и vosotros — без изменений.',
      'Quisiera — вежливое «я хотел бы»: Quisiera una mesa.',
    ],
    mnemonics: [
      { icon: '💘', text: 'QUIERO ≈ «кьеро» — «кьеро-вать». Как «ку-ку, я кьеро кофе!»' },
      { icon: '🥾', text: 'Те же «ботинки», что у tener: yo/tú/él/ellos — ie, nosotros/vosotros — нет.' },
      { icon: '🎩', text: 'QUISIERA — для вежливых: «ну, я бы хотел…» Используйте в ресторане и магазине.' },
    ],
    tables: [
      {
        title: 'Querer — «хотеть»',
        head: ['Кто', 'Форма'],
        rows: [
          ['yo', 'qu·b:ie·ro'],
          ['tú', 'qu·b:ie·res'],
          ['él / ella / usted', 'qu·b:ie·re'],
          ['nosotros', 'queremos'],
          ['vosotros', 'queréis'],
          ['ellos / ustedes', 'qu·b:ie·ren'],
        ],
      },
    ],
    examples: [
      ['Quiero un café con leche.', 'Хочу кофе с молоком.'],
      ['¿Qué quieres?', 'Что ты хочешь?'],
      ['Quisiera una mesa para dos.', 'Я бы хотел столик на двоих.'],
    ],
    drills: [
      {
        q: 'Yo ___ un café.',
        options: ['quiero', 'quieres', 'quiere', 'queremos'],
        answer: 'quiero',
        why: 'С yo — quiero (ботинок e → ie).',
      },
      {
        q: '¿Qué ___ tú?',
        options: ['quieres', 'quiero', 'queres'],
        answer: 'quieres',
        why: 'С tú — quieres.',
      },
      {
        q: 'Nosotros ___ comer.',
        options: ['queremos', 'quieremos', 'quieren'],
        answer: 'queremos',
        why: 'У nosotros нет «ботинка»: queremos, а не quieremos.',
      },
      {
        q: 'Ellos ___ agua.',
        options: ['quieren', 'queremos', 'quiere'],
        answer: 'quieren',
        why: 'Ellos — quieren, ботинок e → ie.',
      },
      {
        q: 'Как вежливее попросить столик?',
        options: ['Quisiera una mesa.', 'Quiero una mesa.'],
        answer: 'Quisiera una mesa.',
        why: 'Quisiera — вежливое «я бы хотел».',
      },
      {
        q: 'Хочу есть:',
        options: ['Quiero comer.', 'Quiero como.'],
        answer: 'Quiero comer.',
        why: 'После quiero действие стоит в инфинитиве (-er, -ar, -ir).',
      },
    ],
  },

  14: {
    day: 14,
    title: 'Шпаргалка: всё вместе',
    emoji: '🧠',
    rule: [
      'Повторим главное: артикли и род, ser / estar, tener, hay, querer.',
      'Ser — суть («кто, откуда, какой»). Estar — «где» и «как сейчас». Tener — возраст, голод, холод. Hay — «тут есть».',
    ],
    mnemonics: [
      { icon: '🧬', text: 'SER ≈ «суть». ESTAR ≈ «стоять». TENER ≈ «танго, имею». HAY ≈ «ай, тут есть!». QUERER ≈ «кьеро — хочу».' },
      { icon: '👫', text: 'EL — «Эльдар», LA — «Лада». -dad = «-ость» (женский).' },
    ],
    tables: [
      {
        title: 'Шпаргалка',
        head: ['Что', 'Как', 'Пример'],
        rows: [
          ['Кто / откуда', 'b:ser', 'Soy de Rusia.'],
          ['Где / как сейчас', 'b:estar', 'Estoy cansado.'],
          ['Возраст, голод, холод', 'b:tener', 'Tengo 30 años.'],
          ['Есть / имеется', 'b:hay', 'Hay un banco.'],
          ['Хочу', 'b:querer', 'Quiero café.'],
        ],
      },
    ],
    examples: [
      ['Soy rusa, pero hoy estoy en Madrid y tengo hambre.', 'Я русская, но сегодня в Мадриде, и я голодна.'],
    ],
    drills: [
      {
        q: 'Ella ___ de Barcelona.',
        options: ['es', 'está'],
        answer: 'es',
        why: 'Откуда человек — суть, ser.',
      },
      {
        q: 'Ahora ella ___ en el café.',
        options: ['está', 'es'],
        answer: 'está',
        why: 'Где сейчас — estar.',
      },
      {
        q: 'Yo ___ veinte años.',
        options: ['tengo', 'soy', 'estoy'],
        answer: 'tengo',
        why: 'Возраст — tener.',
      },
      {
        q: '___ ciudad es grande.',
        options: ['La', 'El'],
        answer: 'La',
        why: 'Ciudad на -dad — женский род.',
      },
      {
        q: '¿___ un banco por aquí?',
        options: ['Hay', 'Está', 'Es'],
        answer: 'Hay',
        why: 'Спрашиваем «есть ли вообще» — hay.',
      },
      {
        q: 'Nosotros ___ un café.',
        options: ['queremos', 'quieremos', 'quieren'],
        answer: 'queremos',
        why: 'Nosotros — без «ботинка»: queremos.',
      },
      {
        q: 'Tengo ___ frío.',
        options: ['mucho', 'muy'],
        answer: 'mucho',
        why: 'После tener — mucho, а не muy.',
      },
      {
        q: 'Мн. ч. «una casa roja»:',
        options: ['unas casas rojas', 'unos casas rojas', 'unas casas rojos'],
        answer: 'unas casas rojas',
        why: 'Женский мн. ч.: unas casas rojas.',
      },
      {
        q: 'Mi amigo ___ simpático.',
        options: ['es', 'está'],
        answer: 'es',
        why: 'Характер — ser.',
      },
      {
        q: 'Hoy mi amigo ___ muy contento.',
        options: ['está', 'es'],
        answer: 'está',
        why: 'Настроение сейчас — estar.',
      },
    ],
  },
};

// Полная фраза и перевод для каждого задания (по порядку заданий в дне).
const PHRASES: Record<number, [string, string][]> = {
  1: [['Hola', 'Привет'], ['Jamón', 'Хамон (вяленая ветчина)'], ['Año', 'Год'], ['Queso', 'Сыр'], ['Hablo', 'Я говорю'], ['Ciudad', 'Город']],
  2: [['Yo me llamo Pablo.', 'Меня зовут Пабло.'], ['¿Cómo te llamas?', 'Как тебя зовут?'], ['¿Cómo se llama usted?', 'Как вас зовут?'], ['¿Cómo estás?', 'Как дела?'], ['Usted', 'Вы (вежливо)']],
  3: [['Yo soy de Moscú.', 'Я из Москвы.'], ['Tú eres muy amable.', 'Ты очень любезный.'], ['Ella es médica.', 'Она врач.'], ['Nosotros somos amigos.', 'Мы друзья.'], ['Ellos son de España.', 'Они из Испании.'], ['Yo soy ruso.', 'Я русский.']],
  4: [['Yo tengo treinta años.', 'Мне тридцать лет.'], ['¿Cuántos años tienes tú?', 'Сколько тебе лет?'], ['Mi hermano tiene diez años.', 'Моему брату десять лет.'], ['Nosotros tenemos un perro.', 'У нас есть собака.'], ['Tengo veinticinco años.', 'Мне двадцать пять лет.']],
  5: [['Tengo hambre.', 'Я голоден.'], ['Café sin azúcar.', 'Кофе без сахара.'], ['Té con limón.', 'Чай с лимоном.'], ['Un café, por favor.', 'Кофе, пожалуйста.'], ['Tengo sed.', 'Я хочу пить.']],
  6: [['La casa', 'Дом'], ['El libro', 'Книга'], ['La ciudad', 'Город'], ['El problema', 'Проблема'], ['La mano', 'Рука'], ['Un café', 'Один кофе'], ['Una tarta', 'Один торт']],
  7: [['Casas', 'Дома'], ['Ciudades', 'Города'], ['Los libros', 'Книги'], ['Las casas', 'Дома'], ['Unas amigas', 'Несколько подруг']],
  8: [['Tengo calor.', 'Мне жарко.'], ['Tengo mucho frío.', 'Мне очень холодно.'], ['Tiene prisa.', 'Он спешит.'], ['Tienes sueño.', 'Ты хочешь спать.']],
  9: [['Yo estoy en casa.', 'Я дома.'], ['Yo soy ruso.', 'Я русский.'], ['Hoy estoy muy cansado.', 'Сегодня я очень устал.'], ['Mi hermana es simpática.', 'Моя сестра милая.'], ['¿Dónde está el baño?', 'Где туалет?'], ['¿Qué hora es?', 'Который час?'], ['Nosotros somos de España.', 'Мы из Испании.']],
  10: [['Mi casa', 'Мой дом'], ['Mis hermanos', 'Мои братья'], ['¿Dónde está tu padre?', 'Где твой отец?'], ['Mi hermana', 'Моя сестра'], ['Su hija', 'Его дочь']],
  11: [['Un coche rojo', 'Красная машина'], ['Una casa roja', 'Красный дом'], ['Una casa grande', 'Большой дом'], ['Coches rojos', 'Красные машины'], ['Mis amigas son simpáticas.', 'Мои подруги милые.']],
  12: [['¿Hay un banco cerca?', 'Здесь рядом есть банк?'], ['El banco está en la calle principal.', 'Банк находится на главной улице.'], ['En la ciudad hay muchos museos.', 'В городе много музеев.'], ['Hay un café aquí.', 'Здесь есть кафе.'], ['¿Dónde está la estación?', 'Где вокзал?']],
  13: [['Yo quiero un café.', 'Я хочу кофе.'], ['¿Qué quieres tú?', 'Что ты хочешь?'], ['Nosotros queremos comer.', 'Мы хотим есть.'], ['Ellos quieren agua.', 'Они хотят воды.'], ['Quisiera una mesa.', 'Я бы хотел столик.'], ['Quiero comer.', 'Я хочу есть.']],
  14: [['Ella es de Barcelona.', 'Она из Барселоны.'], ['Ahora ella está en el café.', 'Сейчас она в кафе.'], ['Yo tengo veinte años.', 'Мне двадцать лет.'], ['La ciudad es grande.', 'Город большой.'], ['¿Hay un banco por aquí?', 'Здесь есть банк?'], ['Nosotros queremos un café.', 'Мы хотим кофе.'], ['Tengo mucho frío.', 'Мне очень холодно.'], ['Unas casas rojas', 'Красные дома'], ['Mi amigo es simpático.', 'Мой друг милый.'], ['Hoy mi amigo está muy contento.', 'Сегодня мой друг очень доволен.']],
};

Object.assign(GRAMMAR, GRAMMAR_B);

for (const [day, list] of Object.entries(PHRASES)) {
  const g = GRAMMAR[Number(day)];
  g.drills.forEach((d, i) => {
    if (list[i]) [d.es, d.ru] = list[i];
  });
}
