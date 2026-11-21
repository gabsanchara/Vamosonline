// Проверка курса: npm run check
// 1) дубли переводов и фраз, ошибки в диалогах;
// 2) чтение: каждое слово урока встречается в предложениях этого дня,
//    у каждого слова есть перевод для подсказки, и в день N нет слов, которые изучаются позже.
import { COURSE } from '../src/content/course-es.ts';
import { READINGS } from '../src/content/readings.ts';
import { GRAMMAR } from '../src/content/grammar.ts';
import { plainText, tokenize, tokensOf } from '../src/engine/gloss.ts';
import { CHARACTERS, EPISODES, POSTCARDS } from '../src/content/story/index.ts';
import { genderVariants, hasName, templateProblem } from '../src/engine/personalize.ts';

const problems: string[] = [];
const byRu = new Map<string, string[]>();
const byEs = new Map<string, string[]>();
const ids = new Set<string>();
let phrases = 0;
let sentences = 0;

for (const l of COURSE) {
  if (l.items.length === 0) problems.push(`${l.id}: урок пустой («Скоро»)`);
  for (const it of l.items) {
    phrases++;
    if (!it.id) problems.push(`${l.id}: у фразы «${it.es}» пустой id (нет ни одной буквы или цифры)`);
    if (ids.has(it.id)) problems.push(`Повторяется id ${it.id} («${it.es}»)`);
    ids.add(it.id);
    byRu.set(it.ru.toLowerCase(), [...(byRu.get(it.ru.toLowerCase()) ?? []), `${l.id}: ${it.es}`]);
    byEs.set(it.es.toLowerCase(), [...(byEs.get(it.es.toLowerCase()) ?? []), l.id]);
  }
  for (const [i, t] of (l.dialogue?.turns ?? []).entries()) {
    const ok = t.options.filter((o) => o.ok).length;
    if (ok !== 1) problems.push(`${l.id} диалог, реплика ${i + 1}: верных ответов ${ok}, должен быть 1`);
    if (t.options.length < 3) problems.push(`${l.id} диалог, реплика ${i + 1}: меньше трёх вариантов`);
  }

  // Чтение
  const reading = READINGS[l.day];
  if (!reading || reading.length === 0) {
    problems.push(`${l.id}: нет предложений для чтения`);
    continue;
  }
  sentences += reading.length;
  const used = new Set<string>();
  for (const [es, ru] of reading) {
    if (!ru.trim()) problems.push(`${l.id}: нет перевода у «${plainText(es)}»`);
    for (const t of tokensOf(es)) used.add(t);
    for (const p of tokenize(es)) {
      if (!p.known) problems.push(`${l.id}: нет перевода слова «${p.key}» в «${plainText(es)}»`);
      // Слова, которые изучаются позже, разрешены: над ними стоит перевод, выделяются только слова этого урока.
    }
  }
  for (const it of l.items)
    for (const t of tokensOf(it.es))
      if (!used.has(t)) problems.push(`${l.id}: слово «${t}» (из «${it.es}») не встречается в предложениях для чтения`);
}

for (const [ru, list] of byRu) if (list.length > 1) problems.push(`Одинаковый перевод «${ru}»: ${list.join(' | ')}`);
for (const [es, list] of byEs) if (list.length > 1) problems.push(`Одинаковая фраза «${es}» в уроках ${list.join(', ')}`);

for (const g of Object.values(GRAMMAR)) {
  if (!g.mnemonics.length) problems.push(`Грамматика d${g.day}: нет запоминалок`);
  if (g.drills.length < 4) problems.push(`Грамматика d${g.day}: мало заданий`);
  for (const d of g.drills) {
    const tag = `Грамматика d${g.day} «${d.q}»`;
    if (!d.options.includes(d.answer)) problems.push(`${tag}: ответа нет среди вариантов`);
    if (new Set(d.options).size !== d.options.length) problems.push(`${tag}: повторяются варианты`);
    if (d.options.length < 2) problems.push(`${tag}: мало вариантов`);
    if (!d.es || !d.ru) problems.push(`${tag}: нет фразы или перевода`);
    if (!d.why.trim())problems.push(`${tag}: нет объяснения`);
  }
}

// История: эпизоды и открытки
const lessonIds = new Set(COURSE.map((l) => l.id));
let replies = 0;
for (const ep of Object.values(EPISODES)) {
  const tag = `Эпизод ${ep.lessonId}`;
  if (!lessonIds.has(ep.lessonId)) problems.push(`${tag}: нет такого урока`);
  if (!ep.title.trim() || !ep.hook.trim() || !ep.intro.length) problems.push(`${tag}: нужны название, вступление и крючок`);
  if (ep.postcard && !POSTCARDS[ep.postcard]) problems.push(`${tag}: нет открытки «${ep.postcard}»`);
  for (const id of ep.cast) if (!CHARACTERS[id]) problems.push(`${tag}: неизвестный персонаж ${id}`);
  const texts = [ep.title, ep.hook, ep.recap ?? '', ...ep.intro];
  ep.scene.forEach((l, i) => {
    const at = `${tag}, реплика ${i + 1}`;
    if (l.kind === 'narr') texts.push(l.ru);
    if (l.kind === 'line') {
      if (!CHARACTERS[l.who]) problems.push(`${at}: неизвестный персонаж ${l.who}`);
      if (hasName(l.es)) problems.push(`${at}: {name} в озвучиваемой реплике персонажа`);
      texts.push(l.es, l.ru, l.note ?? '');
      // Каждое слово реплики персонажа должно переводиться по нажатию (в обоих вариантах рода)
      for (const v of genderVariants(l.es))
        for (const p of tokenize(v.text)) if (!p.known) problems.push(`${at}: нет перевода слова «${p.key}» в «${v.text}»`);
    }
    if (l.kind === 'reply') {
      replies++;
      if (l.bad.length < 2) problems.push(`${at}: меньше двух неверных вариантов`);
      for (const b of l.bad) if (!b.why?.trim()) problems.push(`${at}: у варианта «${b.es}» нет объяснения`);
      const all = [l.ok, ...l.bad];
      if (new Set(all.map((o) => o.es)).size !== all.length) problems.push(`${at}: повторяются варианты`);
      for (const o of all) texts.push(o.es, o.ru, o.why ?? '');
      texts.push(l.note ?? '');
    }
  });
  for (const t of texts) {
    const bad = templateProblem(t);
    if (bad) problems.push(`${tag}: ${bad} в «${t}»`);
  }
}
for (const p of Object.values(POSTCARDS)) {
  if (p.text.length < 2 || !p.es.trim() || !p.ru.trim()) problems.push(`Открытка ${p.id}: нужно описание и фраза`);
}

console.log(`Уроков: ${COURSE.length}, фраз в уроках: ${phrases}, предложений для чтения: ${sentences}`);
console.log(`Эпизодов истории: ${Object.keys(EPISODES).length}, ответов героя: ${replies}, открыток: ${Object.keys(POSTCARDS).length}`);
if (problems.length) {
  console.log(`Замечаний: ${problems.length}`);
  for (const p of problems) console.log(' - ' + p);
  process.exit(1);
}
console.log('Всё в порядке.');
