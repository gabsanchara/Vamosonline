import type { Drill, Grammar } from '../types.ts';

// Грамматика к урокам 31–40.
const d = (q: string, options: string[], answer: string, why: string, es: string, ru: string): Drill => ({
  q,
  options,
  answer,
  why,
  es,
  ru,
});

export const GRAMMAR_C: Record<number, Grammar> = {
  31: {
    day: 31,
    title: 'Модальные глаголы: нужно, могу, должен',
    emoji: '🙋',
    rule: [
      'После necesitar («нуждаться»), poder («мочь»), deber («быть должным») и tener que («надо») следующий глагол стоит в начальной форме: puedo hablar, debo estudiar.',
      'Спрягается только первый глагол, второй остаётся инфинитивом.',
      'Poder — «ботинок» o → ue: puedo, puedes, puede, podemos, podéis, pueden. Necesitar и deber спрягаются по правилам.',
    ],
    mnemonics: [
      { icon: '🏋️', text: 'PUEDO ≈ «пудо»: пуд — тяжёлая гиря. «Пуд подниму» — «я могу».' },
      { icon: '📒', text: 'DEBER ≈ «дебет»: в бухгалтерии дебет — то, что ты «должен». Debo = «я должен».' },
      { icon: '🆘', text: 'NECESITAR ≈ «нецессити» — «необходимость». Necesito = «мне необходимо».' },
      { icon: '🎒', text: 'TENGO QUE — «имею, что (делать)»: «Мне надо». Tengo que trabajar — «я имею, что работать».' },
    ],
    tables: [
      {
        title: 'Poder — «мочь» (ботинок o → ue)',
        head: ['Кто', 'Форма'],
        rows: [
          ['yo', 'p·b:ue·do'],
          ['tú', 'p·b:ue·des'],
          ['él / ella / usted', 'p·b:ue·de'],
          ['nosotros', 'podemos'],
          ['vosotros', 'podéis'],
          ['ellos / ustedes', 'p·b:ue·den'],
        ],
      },
    ],
    examples: [
      ['Puedo ayudarte.', 'Я могу тебе помочь.'],
      ['Debo estudiar.', 'Я должен учиться.'],
      ['Tengo que trabajar.', 'Мне надо работать.'],
    ],
    drills: [
      d('Yo ___ ayudarte. (poder)', ['puedo', 'podo', 'puede'], 'puedo', 'Poder — «ботинок» o → ue: puedo.', 'Yo puedo ayudarte.', 'Я могу тебе помочь.'),
      d('Nosotros ___ viajar juntos. (poder)', ['podemos', 'puedemos', 'pueden'], 'podemos', 'У nosotros нет «ботинка»: podemos.', 'Nosotros podemos viajar juntos.', 'Мы можем поехать вместе.'),
      d('Tú ___ descansar. (deber)', ['debes', 'debo', 'debe'], 'debes', 'Deber — обычный глагол: tú → debes.', 'Tú debes descansar.', 'Тебе стоит отдохнуть.'),
      d('Tengo ___ trabajar.', ['que', 'de', 'a'], 'que', '«Надо» — tener que + инфинитив.', 'Tengo que trabajar.', 'Мне надо работать.'),
      d('Мне нужно отдохнуть:', ['Necesito descansar', 'Necesito descanso yo'], 'Necesito descansar', 'После necesitar второй глагол — в начальной форме.', 'Necesito descansar.', 'Мне нужно отдохнуть.'),
      d('Найдите предложение с ошибкой.', ['Puedo hablar ahora.', 'Puedo hablo ahora.'], 'Puedo hablo ahora.', 'После puedo нужен инфинитив: hablar.', 'Puedo hablar ahora.', 'Сейчас я могу говорить.'),
    ],
  },

  32: {
    day: 32,
    title: 'Глагол HACER — «делать»',
    emoji: '🛠️',
    rule: [
      'Hacer — «делать, заниматься»: hago, haces, hace, hacemos, hacéis, hacen. Особая только форма «я» — hago.',
      'Устойчивые сочетания: hacer deporte (заниматься спортом), hacer la compra (делать покупки), hacer ejercicio (делать зарядку), hacer una pregunta (задать вопрос).',
      'Погода тоже «делается»: hace frío, hace calor, hace sol.',
    ],
    mnemonics: [
      { icon: '🏭', text: 'HACER и «ФАКТОР», «ФАБРИКА» — одного корня (лат. facere — «делать»). В испанском буква F превратилась в H: facere → hacer.' },
      { icon: '🌡️', text: 'Погода «делает» жару: HACE CALOR = «делает жару». Поэтому в вопросе: ¿Qué tiempo hace?' },
    ],
    tables: [
      {
        title: 'Hacer — «делать»',
        head: ['Кто', 'Форма'],
        rows: [
          ['yo', 'b:hago'],
          ['tú', 'haces'],
          ['él / ella / usted', 'hace'],
          ['nosotros', 'hacemos'],
          ['vosotros', 'hacéis'],
          ['ellos / ustedes', 'hacen'],
        ],
      },
    ],
    examples: [
      ['Hago deporte por la mañana.', 'Утром я занимаюсь спортом.'],
      ['¿Qué haces ahora?', 'Что ты делаешь сейчас?'],
    ],
    drills: [
      d('Yo ___ deporte. (hacer)', ['hago', 'hace', 'hacemos'], 'hago', 'Форма «я» особая: hago.', 'Yo hago deporte.', 'Я занимаюсь спортом.'),
      d('Tú ___ la compra. (hacer)', ['haces', 'hago', 'hace'], 'haces', 'С «ты» — haces.', 'Tú haces la compra.', 'Ты делаешь покупки.'),
      d('Mi madre ___ la cena. (hacer)', ['hace', 'haces', 'hago'], 'hace', 'Она — hace.', 'Mi madre hace la cena.', 'Моя мама готовит ужин.'),
      d('Nosotros ___ ejercicio. (hacer)', ['hacemos', 'hacamos', 'hacen'], 'hacemos', '«Мы» — hacemos.', 'Nosotros hacemos ejercicio.', 'Мы делаем зарядку.'),
      d('Здесь жарко. Aquí ___ calor.', ['hace', 'tiene', 'es'], 'hace', 'Про погоду говорим с hace.', 'Aquí hace calor.', 'Здесь жарко.'),
      d('¿Qué ___ tú ahora?', ['haces', 'hago'], 'haces', 'Вопрос к «ты» — haces.', '¿Qué haces tú ahora?', 'Что ты делаешь сейчас?'),
    ],
  },

  33: {
    day: 33,
    title: 'Глаголы «я-го»: salir, venir, poner, decir',
    emoji: '🚪',
    rule: [
      'У многих частых глаголов форма «я» заканчивается на -go: tengo, hago, salgo (выхожу), vengo (прихожу), pongo (кладу), digo (говорю), traigo (приношу).',
      'Остальные формы почти всегда обычные. У venir и decir «ботинок»: vienes, dices.',
      'De + el склеивается в del: Vengo del trabajo.',
    ],
    mnemonics: [
      { icon: '🏁', text: '«ГО-ГО-ГО, это я!»: у «я» в таких глаголах появляется -GO. Семь глаголов — семь «го»: tengo, hago, salgo, vengo, pongo, digo, traigo.' },
      { icon: '🔌', text: 'DEL — слипшиеся de + el, как a + el = al. С la, los, las не склеивается: de la.' },
    ],
    tables: [
      {
        head: ['Инфинитив', 'Я', 'Ты'],
        rows: [
          ['salir — выходить', 'sal·b:go', 'sales'],
          ['venir — приходить', 'ven·b:go', 'v·b:ie·nes'],
          ['poner — класть', 'pon·b:go', 'pones'],
          ['decir — говорить', 'di·b:go', 'd·b:i·ces'],
          ['traer — приносить', 'trai·b:go', 'traes'],
        ],
      },
    ],
    examples: [
      ['Salgo de casa a las ocho.', 'Я выхожу из дома в восемь.'],
      ['Vengo del trabajo.', 'Я иду с работы.'],
      ['Digo la verdad.', 'Я говорю правду.'],
    ],
    drills: [
      d('Yo ___ de casa a las ocho. (salir)', ['salgo', 'salo', 'sale'], 'salgo', 'Форма «я» — salgo (с -g).', 'Yo salgo de casa a las ocho.', 'Я выхожу из дома в восемь.'),
      d('Yo ___ del trabajo. (venir)', ['vengo', 'vino', 'vienes'], 'vengo', 'Форма «я» — vengo.', 'Yo vengo del trabajo.', 'Я иду с работы.'),
      d('Tú ___ a las nueve. (venir)', ['vienes', 'vengo', 'venes'], 'vienes', 'С «ты» — ботинок e → ie: vienes.', 'Tú vienes a las nueve.', 'Ты приходишь в девять.'),
      d('Yo ___ la verdad. (decir)', ['digo', 'dico', 'dice'], 'digo', 'Форма «я» — digo.', 'Yo digo la verdad.', 'Я говорю правду.'),
      d('¿Qué ___ tú? (decir)', ['dices', 'digo', 'dice'], 'dices', 'С «ты» — dices (e → i).', '¿Qué dices tú?', 'Что ты говоришь?'),
      d('Vengo ___ trabajo.', ['del', 'de el', 'al'], 'del', 'de + el склеивается в del.', 'Vengo del trabajo.', 'Я иду с работы.'),
      d('Yo ___ el libro en la mesa. (poner)', ['pongo', 'pono', 'pone'], 'pongo', 'Форма «я» — pongo.', 'Yo pongo el libro en la mesa.', 'Я кладу книгу на стол.'),
    ],
  },

  34: {
    day: 34,
    title: 'Знать: CONOCER и SABER',
    emoji: '🧠',
    rule: [
      'Conocer — быть знакомым с человеком, местом, вещью: conozco a Ana, conozco Madrid.',
      'Saber — знать факт или уметь что-то делать: sé la respuesta, sé cantar.',
      'Перед человеком после conocer ставится личное a: conozco a mi hermano. Форма «я»: conozco (с -zco) и sé.',
    ],
    mnemonics: [
      { icon: '🤝', text: 'CONOCER ≈ «знакомый»: «ко-но-сер» — вспомните «узнать в лицо». Это про знакомство: человек, город, ресторан.' },
      { icon: '🎓', text: 'SABER ≈ «сабио» (мудрец) — мудрый знает факты и умеет. Saber = «знать, что» и «уметь».' },
      { icon: '🅰️', text: 'Личное A — «рукопожатие» перед человеком: conozco A Ana, но conozco Madrid (город — без a).' },
    ],
    tables: [
      {
        head: ['Кто', 'Conocer', 'Saber'],
        rows: [
          ['yo', 'cono·b:zco', 'b:sé'],
          ['tú', 'conoces', 'sabes'],
          ['él / ella', 'conoce', 'sabe'],
          ['nosotros', 'conocemos', 'sabemos'],
          ['ellos', 'conocen', 'saben'],
        ],
      },
    ],
    examples: [
      ['Conozco a Ana.', 'Я знаком с Аной.'],
      ['Sé hablar español.', 'Я умею говорить по-испански.'],
    ],
    drills: [
      d('___ a Ana. (я знаком)', ['Conozco', 'Sé', 'Conoces'], 'Conozco', 'С человеком — conocer; «я» — conozco.', 'Conozco a Ana.', 'Я знаком с Аной.'),
      d('___ hablar español. (я умею)', ['Sé', 'Conozco', 'Sabo'], 'Sé', 'Уметь — saber, форма «я» — sé.', 'Sé hablar español.', 'Я умею говорить по-испански.'),
      d('¿___ Madrid?', ['Conoces', 'Sabes'], 'Conoces', 'Знать город (быть там) — conocer.', '¿Conoces Madrid?', 'Ты знаешь Мадрид?'),
      d('No ___ la respuesta.', ['sé', 'conozco'], 'sé', 'Ответ — это факт: saber.', 'No sé la respuesta.', 'Я не знаю ответа.'),
      d('¿___ cantar?', ['Sabes', 'Conoces'], 'Sabes', 'Уметь — saber.', '¿Sabes cantar?', 'Ты умеешь петь?'),
      d('Conozco ___ mi hermano.', ['a', 'de', 'en'], 'a', 'Перед человеком ставится личное a.', 'Conozco a mi hermano.', 'Я знаком с моим братом.'),
      d('Знаешь, где аптека?', ['¿Sabes dónde está la farmacia?', '¿Conoces dónde está la farmacia?'], '¿Sabes dónde está la farmacia?', 'Информация — это saber.', '¿Sabes dónde está la farmacia?', 'Ты знаешь, где аптека?'),
    ],
  },

  35: {
    day: 35,
    title: 'Он, она, их: lo, la, los, las',
    emoji: '🔗',
    rule: [
      'Чтобы не повторять существительное, ставим местоимение: lo (его, м.р.), la (её, ж.р.), los (их, м.р.), las (их, ж.р.).',
      'Меня — me, тебя — te, нас — nos.',
      'Местоимение стоит ПЕРЕД глаголом: Lo conozco, La compro, Te veo.',
    ],
    mnemonics: [
      { icon: '👫', text: 'Те же «Эльдар и Лада»: el → lo, la → la. Мужской — lo, женский — la; во мн. числе просто +s: los, las.' },
      { icon: '🧢', text: 'Местоимение — «шапка» глагола: надеваем впереди. Lo compro — «его купил», а не «compro lo».' },
    ],
    tables: [
      {
        head: ['Кого', 'Форма', 'Пример'],
        rows: [
          ['меня', 'b:me', 'Me ves.'],
          ['тебя', 'b:te', 'Te veo.'],
          ['его', 'm:lo', 'Lo conozco.'],
          ['её', 'f:la', 'La conozco.'],
          ['нас', 'b:nos', 'Nos ven.'],
          ['их (м.)', 'm:los', 'Los veo.'],
          ['их (ж.)', 'f:las', 'Las compro.'],
        ],
      },
    ],
    examples: [
      ['¿Tienes el libro? Sí, lo tengo.', 'У тебя есть книга? Да, она у меня есть.'],
      ['La veo cada día.', 'Я вижу её каждый день.'],
    ],
    drills: [
      d('¿Tienes el libro? Sí, ___ tengo.', ['lo', 'la', 'los'], 'lo', 'El libro — мужской, единственное число: lo.', 'Sí, lo tengo.', 'Да, он у меня есть.'),
      d('¿La llave? ___ necesito.', ['La', 'Lo', 'Las'], 'La', 'Llave — женский род, ед. число: la.', 'La necesito.', 'Она мне нужна.'),
      d('¿Los billetes? ___ compro.', ['Los', 'Lo', 'Las'], 'Los', 'Billetes — мужской, мн. число: los.', 'Los compro.', 'Я покупаю их.'),
      d('¿Las camisas? ___ compro.', ['Las', 'Los', 'La'], 'Las', 'Camisas — женский, мн. число: las.', 'Las compro.', 'Я покупаю их.'),
      d('Где стоит местоимение?', ['La veo cada día.', 'Veo la cada día.'], 'La veo cada día.', 'Местоимение ставится перед глаголом.', 'La veo cada día.', 'Я вижу её каждый день.'),
      d('Я тебя вижу: ___ veo.', ['Te', 'Me', 'Lo'], 'Te', 'Кого вижу — тебя: te.', 'Te veo.', 'Я тебя вижу.'),
      d('¿Ves a Ana? Sí, ___ veo.', ['la', 'lo', 'le'], 'la', 'Ана — женщина: la.', 'Sí, la veo.', 'Да, я вижу её.'),
    ],
  },

  36: {
    day: 36,
    title: 'Состояния: занят, уверен, готов',
    emoji: '🎚️',
    rule: [
      'Как человек чувствует себя сейчас — через estar: estoy ocupado, estoy seguro, estoy listo, estoy nervioso, ella está enferma.',
      'Окончание согласуется с полом: ocupado / ocupada, listo / lista, seguro / segura. Во мн. числе — listos / listas.',
      '«Согласен» — estoy de acuerdo, «не согласен» — no estoy de acuerdo.',
    ],
    mnemonics: [
      { icon: '🪖', text: 'OCUPADO ≈ «оккупирован»: тебя «оккупировали» дела — ты занят.' },
      { icon: '🔒', text: 'SEGURO ≈ «секьюрити»: безопасный, надёжный — значит, «уверен».' },
      { icon: '📄', text: 'LISTO ≈ «лист» — готовый «лист»: когда всё готово, подписываем лист.' },
      { icon: '🏥', text: 'ENFERMO ≈ «инфирмария» (лазарет) — больной.' },
    ],
    tables: [
      {
        head: ['Он', 'Она', 'Они'],
        rows: [
          ['m:ocupado', 'f:ocupada', 'ocupados / ocupadas'],
          ['m:listo', 'f:lista', 'listos / listas'],
          ['m:seguro', 'f:segura', 'seguros / seguras'],
        ],
      },
    ],
    examples: [
      ['Estoy ocupado.', 'Я занят.'],
      ['¿Estás lista?', 'Ты готова?'],
    ],
    drills: [
      d('Mi hermana está ___. (занята)', ['ocupada', 'ocupado', 'ocupadas'], 'ocupada', 'Сестра — женский род: ocupada.', 'Mi hermana está ocupada.', 'Моя сестра занята.'),
      d('Nosotros estamos ___. (готовы)', ['listos', 'listo', 'lista'], 'listos', 'Мы (мужчины или смешанно) — listos.', 'Nosotros estamos listos.', 'Мы готовы.'),
      d('No ___ seguro.', ['estoy', 'soy'], 'estoy', 'Уверенность сейчас — состояние: estar.', 'No estoy seguro.', 'Я не уверен.'),
      d('Estoy ___ acuerdo.', ['de', 'con', 'en'], 'de', 'Устойчиво: estar de acuerdo.', 'Estoy de acuerdo.', 'Я согласен.'),
      d('Ella ___ enferma.', ['está', 'es'], 'está', 'Болезнь сейчас — estar.', 'Ella está enferma.', 'Она больна.'),
      d('Ана, ¿estás ___? (готова)', ['lista', 'listo'], 'lista', 'Обращаемся к женщине — lista.', '¿Estás lista?', 'Ты готова?'),
    ],
  },

  37: {
    day: 37,
    title: 'Как это было? FUE и TAN',
    emoji: '🎞️',
    rule: [
      'Fue («был, было») описывает событие целиком: fue interesante, fue difícil, ¿cómo fue?',
      'Fue — от ser; та же форма у ir (fui, fuiste, fue), смысл понятен по контексту.',
      'Tan — «так, такой» перед прилагательным: tan fácil, tan caro. Muy и tan вместе не ставят.',
      '¡Qué + прилагательное! — «Как …!»: ¡Qué difícil!',
    ],
    mnemonics: [
      { icon: '😖', text: 'FUE ≈ «фуэ!» — как «фу, это было…». Так мы оцениваем уже прошедшее: Fue horrible, fue genial.' },
      { icon: '➡️', text: 'TAN ≈ «так» — почти одно слово: tan fácil — «так просто».' },
      { icon: '❗', text: '¡QUÉ + прилагательное! — восклицание: «Что за…!» ¡Qué bien! ¡Qué difícil!' },
    ],
    tables: [
      {
        head: ['Что', 'Фраза'],
        rows: [
          ['Оценка события', 'b:Fue interesante.'],
          ['Вопрос', 'b:¿Cómo fue?'],
          ['Так / такой', 'Es b:tan fácil.'],
          ['Восклицание', 'b:¡Qué difícil!'],
        ],
      },
    ],
    examples: [
      ['La película fue tan buena.', 'Фильм был таким хорошим.'],
      ['Fue una noticia importante.', 'Это была важная новость.'],
    ],
    drills: [
      d('¿Cómo ___ la película?', ['fue', 'es', 'está'], 'fue', 'Событие целиком в прошлом: fue.', '¿Cómo fue la película?', 'Как прошёл фильм?'),
      d('Fue ___ buena idea.', ['una', 'un'], 'una', 'Idea женского рода: una.', 'Fue una buena idea.', 'Это была хорошая идея.'),
      d('Es ___ fácil. (так)', ['tan', 'tanto', 'muy tan'], 'tan', 'Перед прилагательным — tan.', 'Es tan fácil.', 'Это так просто.'),
      d('La película fue ___ buena.', ['tan', 'tanta'], 'tan', 'Tan не меняется по роду.', 'La película fue tan buena.', 'Фильм был таким хорошим.'),
      d('Это было очень весело:', ['Fue muy divertido.', 'Fue muy divertida.'], 'Fue muy divertido.', 'Безличное «это» — мужской род: divertido.', 'Fue muy divertido.', 'Это было очень весело.'),
      d('Как трудно!', ['¡Qué difícil!', '¡Cómo difícil!'], '¡Qué difícil!', 'Восклицание с прилагательным — ¡Qué + прилагательное!', '¡Qué difícil!', 'Как трудно!'),
    ],
  },

  38: {
    day: 38,
    title: 'Приглашения и встречи',
    emoji: '🥂',
    rule: [
      '¿Qué tal si…? — «А что если…?»: ¿Qué tal si salimos? ¿Te apetece…? — «Хочется ли тебе…?»',
      'Quedar — «договориться о встрече»: ¿A qué hora quedamos? Quedamos a las siete.',
      'Согласие: claro que sí, con mucho gusto, me parece bien. Мягкий отказ: lo siento, no puedo; otro día.',
      'Conmigo — «со мной», contigo — «с тобой».',
    ],
    mnemonics: [
      { icon: '🍽️', text: 'APETECER ≈ «аппетит»: «тебе хочется» — твой аппетит.' },
      { icon: '📅', text: 'QUEDAR ≈ «кедр, твёрдо остаться»: «договорились — остаёмся при этом». Quedamos a las siete — «договорились на семь».' },
      { icon: '🙋', text: 'CONMIGO = con + migo: «с» + «мной». Contigo — «с» + «тобой».' },
    ],
    tables: [
      {
        head: ['Что сказать', 'Фраза'],
        rows: [
          ['Предложить', 'b:¿Qué tal si salimos?'],
          ['Спросить мнение', 'b:¿Qué te parece?'],
          ['Согласиться', 'b:Claro que sí.'],
          ['Назначить время', 'b:Quedamos a las siete.'],
          ['Отказать мягко', 'b:Lo siento, no puedo.'],
        ],
      },
    ],
    examples: [
      ['¿Quieres venir conmigo?', 'Хочешь пойти со мной?'],
      ['Quedamos en la plaza.', 'Встретимся на площади.'],
    ],
    drills: [
      d('¿Qué ___ si salimos?', ['tal', 'cómo', 'qué'], 'tal', 'Устойчивое: ¿Qué tal si…?', '¿Qué tal si salimos?', 'Как насчёт того, чтобы прогуляться?'),
      d('¿Te ___ un café?', ['apetece', 'apetezco', 'apetecen'], 'apetece', 'Как gustar: кофе один — apetece.', '¿Te apetece un café?', 'Хочется кофе?'),
      d('¿A qué hora ___?', ['quedamos', 'quedan', 'quedo'], 'quedamos', 'Мы договариваемся — quedamos.', '¿A qué hora quedamos?', 'Во сколько встретимся?'),
      d('¿Quieres venir ___? (со мной)', ['conmigo', 'con yo', 'con mí'], 'conmigo', '«Со мной» — одно слово conmigo.', '¿Quieres venir conmigo?', 'Хочешь пойти со мной?'),
      d('Мягкий отказ:', ['Lo siento, no puedo.', 'Lo siento, no puedes.'], 'Lo siento, no puedo.', 'Отказываетесь вы — «я не могу»: no puedo.', 'Lo siento, no puedo.', 'Извини, я не могу.'),
      d('Согласие:', ['Con mucho gusto.', 'Con muy gusto.'], 'Con mucho gusto.', 'Перед существительным — mucho, а не muy.', 'Con mucho gusto.', 'С удовольствием.'),
    ],
  },

  39: {
    day: 39,
    title: 'Работа и новости',
    emoji: '💼',
    rule: [
      'La noticia — «новость», женский род. Хорошая новость — una buena noticia.',
      'Bueno перед мужским существительным сокращается до buen: un buen trabajo. Перед женским остаётся buena: una buena noticia.',
      'Empezar — «ботинок» e → ie: empiezo, empiezas, empieza… В прошедшем: empecé (с c).',
    ],
    mnemonics: [
      { icon: '🏢', text: 'OFICINA ≈ «офис». JEFE ≈ «шеф». COMPAÑERO ≈ «компаньон». REUNIÓN ≈ «реюнион» — «встреча». Эти слова вы уже знаете!' },
      { icon: '🏁', text: 'TERMINAR ≈ «терминал» — конечная. Termino a las cinco — «моя конечная в пять».' },
      { icon: '✂️', text: 'BUEN — «обрезанный» bueno: перед мужским словом он «стесняется» своей -o и теряет её.' },
    ],
    tables: [
      {
        head: ['Род', 'Форма', 'Пример'],
        rows: [
          ['м.р.', 'm:buen', 'un buen trabajo'],
          ['ж.р.', 'f:buena', 'una buena noticia'],
        ],
      },
    ],
    examples: [
      ['Tengo una buena noticia.', 'У меня хорошая новость.'],
      ['Empiezo a las nueve.', 'Я начинаю в девять.'],
    ],
    drills: [
      d('___ noticia', ['La', 'El'], 'La', 'Noticia женского рода.', 'La noticia', 'Новость'),
      d('Una ___ noticia.', ['buena', 'buen', 'bueno'], 'buena', 'Женский род — buena.', 'Una buena noticia.', 'Хорошая новость.'),
      d('Un ___ trabajo.', ['buen', 'bueno', 'buena'], 'buen', 'Перед мужским существительным bueno сокращается до buen.', 'Un buen trabajo.', 'Хорошая работа.'),
      d('Ayer yo ___ un trabajo nuevo. (empezar)', ['empecé', 'empiezo', 'empezó'], 'empecé', 'Вчера, «я» — empecé.', 'Ayer empecé un trabajo nuevo.', 'Вчера я начал новую работу.'),
      d('Каждый день: ___ a las nueve. (empezar)', ['Empiezo', 'Empecé'], 'Empiezo', 'Сейчас, «я» — empiezo (e → ie).', 'Empiezo a las nueve.', 'Я начинаю в девять.'),
      d('Мой коллега любезный (по характеру):', ['Mi compañero es amable.', 'Mi compañero está amable.'], 'Mi compañero es amable.', 'Характер — ser.', 'Mi compañero es amable.', 'Мой коллега любезный.'),
    ],
  },

  40: {
    day: 40,
    title: 'Длительное прошлое (imperfecto)',
    emoji: '📼',
    rule: [
      'Pretérito — «случилось и закончилось» (ayer fui al parque). Imperfecto — «как было, что обычно делали» (íbamos al parque los domingos).',
      '-AR: -aba, -abas, -aba, -ábamos, -aban (hablaba). -ER / -IR: -ía, -ías, -ía, -íamos, -ían (vivía, comía).',
      'Только два исключения в «обычных» глаголах: ser — era, ir — iba.',
      'Imperfecto описывает фон: погоду, состояние, привычки (hacía frío, estaba cansado, vivía en Moscú).',
    ],
    mnemonics: [
      { icon: '📼', text: 'IMPERFECTO — «плёнка идёт»: действие тянется, и начало и конец не видны. Pretérito — «щёлк!» — фотография.' },
      { icon: '🏛️', text: 'ERA ≈ «эра»: «в ту эру я был…». Era — «был» (давно).' },
      { icon: '🗣️', text: '-ABA — «абаба, давно было»: hablaba, trabajaba, cocinaba — все «абаба».' },
    ],
    tables: [
      {
        head: ['Кто', '-ar (hablar)', '-er/-ir (vivir)', 'ser', 'ir'],
        rows: [
          ['yo', 'habl·b:aba', 'viv·b:ía', 'b:era', 'b:iba'],
          ['tú', 'habl·b:abas', 'viv·b:ías', 'b:eras', 'b:ibas'],
          ['él / ella', 'habl·b:aba', 'viv·b:ía', 'b:era', 'b:iba'],
          ['nosotros', 'habl·b:ábamos', 'viv·b:íamos', 'b:éramos', 'b:íbamos'],
          ['ellos', 'habl·b:aban', 'viv·b:ían', 'b:eran', 'b:iban'],
        ],
      },
    ],
    examples: [
      ['Cuando era niño, vivía en Rusia.', 'Когда я был ребёнком, я жил в России.'],
      ['Hacía frío y llovía.', 'Было холодно, и шёл дождь.'],
    ],
    drills: [
      d('Yo ___ en Moscú. (vivir, раньше)', ['vivía', 'viví', 'vivo'], 'vivía', '«Жил (долго, обычно)» — imperfecto: vivía.', 'Yo vivía en Moscú.', 'Я жил в Москве.'),
      d('Ayer ___ al parque. (ir, один раз)', ['fui', 'iba'], 'fui', 'Один законченный раз — pretérito: fui.', 'Ayer fui al parque.', 'Вчера я ходил в парк.'),
      d('Cuando era niño, ___ al parque.', ['iba', 'fui', 'voy'], 'iba', 'Привычка в детстве — imperfecto: iba.', 'Cuando era niño, iba al parque.', 'Когда я был ребёнком, я ходил в парк.'),
      d('Mi abuela ___ muy bien. (cocinar)', ['cocinaba', 'cocinó', 'cocina'], 'cocinaba', 'Она «обычно готовила» — imperfecto: cocinaba.', 'Mi abuela cocinaba muy bien.', 'Моя бабушка очень вкусно готовила.'),
      d('___ cansado. (был уставшим)', ['Estaba', 'Estuve', 'Estoy'], 'Estaba', 'Состояние как фон — imperfecto: estaba.', 'Estaba cansado.', 'Я был уставшим.'),
      d('Описание: «Было холодно, шёл дождь»', ['Hacía frío y llovía.', 'Hace frío y llueve.'], 'Hacía frío y llovía.', 'Прошлый фон — imperfecto: hacía, llovía.', 'Hacía frío y llovía.', 'Было холодно, и шёл дождь.'),
      d('Nosotros ___ al parque los domingos.', ['íbamos', 'fuimos', 'vamos'], 'íbamos', '«Ходили по воскресеньям» — привычка: íbamos.', 'Nosotros íbamos al parque los domingos.', 'По воскресеньям мы ходили в парк.'),
    ],
  },
};
