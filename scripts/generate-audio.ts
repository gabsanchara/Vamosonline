// Озвучка всех фраз курса через ElevenLabs. Запуск: npm run audio
//   npm run audio -- --dry   — только посчитать, сколько фраз и символов нужно озвучить (кредиты не тратятся)
// Нужен ключ в переменной ELEVENLABS_API_KEY или в файле .env (см. .env.example).
// Уже существующие mp3 пропускаются, платить повторно за них не придётся.
//
// Обычные фразы курса звучат общим голосом сайта (имя файла — хэш текста).
// Реплики персонажей истории — голосом персонажа (имя файла — хэш «голос|текст»).
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { COURSE } from '../src/content/course-es.ts';
import { voicedSlug } from '../src/engine/slug.ts';
import { READINGS } from '../src/content/readings.ts';
import { GRAMMAR } from '../src/content/grammar.ts';
import { plainText } from '../src/engine/gloss.ts';
import { CHARACTERS, EPISODES, POSTCARDS } from '../src/content/story/index.ts';
import { genderVariants, hasName } from '../src/engine/personalize.ts';

const DEFAULT_VOICE = process.env.ELEVENLABS_VOICE_ID || 'F0l0zg5A8H7I6s7HBQb9'; // Marta, Испания
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID || 'eleven_multilingual_v2';
const OUT = join(process.cwd(), 'public', 'audio');
const DRY = process.argv.includes('--dry');

function loadEnvFile() {
  const p = join(process.cwd(), '.env');
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

interface Job {
  text: string;
  voice: string; // пусто — общий голос сайта
  who: string; // для отчёта
}

function collectJobs(): Job[] {
  const jobs = new Map<string, Job>();
  const add = (text: string, voice = '', who = 'общий') => {
    const t = text.trim();
    if (t) jobs.set(voicedSlug(t, voice), { text: t, voice, who });
  };

  for (const l of COURSE) for (const i of l.items) add(i.es);
  for (const g of Object.values(GRAMMAR)) for (const d of g.drills) if (d.es) add(d.es);
  for (const list of Object.values(READINGS)) for (const [es] of list) add(plainText(es));
  for (const p of Object.values(POSTCARDS)) add(p.es);

  // История: персонажи — своими голосами, верные ответы героя — мужским и женским голосом героя
  const hero = CHARACTERS.hero;
  for (const ep of Object.values(EPISODES)) {
    for (const l of ep.scene) {
      if (l.kind === 'line') {
        for (const v of genderVariants(l.es)) add(plainText(v.text), CHARACTERS[l.who].voice, CHARACTERS[l.who].name);
      }
      if (l.kind === 'reply' && !hasName(l.ok.es)) {
        // Без {м|ж} фраза одна, но звучит двумя голосами; с {м|ж} — каждый вариант своим голосом
        const pick = (g: 'm' | 'f') => genderVariants(l.ok.es).find((v) => v.gender === g)?.text ?? l.ok.es;
        add(pick('m'), hero.voice, 'Герой');
        add(pick('f'), hero.voiceF ?? '', 'Героиня');
      }
    }
  }
  return [...jobs.values()];
}

async function synth(text: string, voice: string, key: string): Promise<Buffer> {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voice || DEFAULT_VOICE}?output_format=mp3_44100_128`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'xi-api-key': key, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
    body: JSON.stringify({
      text,
      model_id: MODEL_ID,
      voice_settings: { stability: 0.6, similarity_boost: 0.8, speed: 0.9 },
    }),
  });
  if (!res.ok) throw new Error(`ElevenLabs ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  loadEnvFile();
  mkdirSync(OUT, { recursive: true });
  const jobs = collectJobs();
  const todo = jobs.filter((j) => !existsSync(join(OUT, `${voicedSlug(j.text, j.voice)}.mp3`)));
  const chars = todo.reduce((a, j) => a + j.text.length, 0);
  console.log(`Фраз всего: ${jobs.length}, нужно озвучить: ${todo.length} (~${chars} символов)`);

  if (DRY) {
    const byWho = new Map<string, { n: number; chars: number }>();
    for (const j of todo) {
      const s = byWho.get(j.who) ?? { n: 0, chars: 0 };
      byWho.set(j.who, { n: s.n + 1, chars: s.chars + j.text.length });
    }
    for (const [who, s] of byWho) console.log(`  ${who}: ${s.n} фраз, ~${s.chars} символов`);
    console.log('Это пробный подсчёт (--dry): ничего не озвучено, кредиты не потрачены.');
    return;
  }

  const key = process.env.ELEVENLABS_API_KEY;
  if (!key) {
    console.error('Нет ELEVENLABS_API_KEY. Создайте файл .env (пример в .env.example).');
    process.exit(1);
  }

  let done = 0;
  for (const j of todo) {
    try {
      const buf = await synth(j.text, j.voice, key);
      writeFileSync(join(OUT, `${voicedSlug(j.text, j.voice)}.mp3`), buf);
      done++;
      console.log(`✓ ${done}/${todo.length}  [${j.who}] ${j.text}`);
    } catch (e) {
      console.error(`✗ [${j.who}] ${j.text}: ${(e as Error).message}`);
    }
  }

  const files = readdirSync(OUT)
    .filter((f) => f.endsWith('.mp3'))
    .map((f) => f.replace(/\.mp3$/, ''));
  writeFileSync(join(OUT, 'manifest.json'), JSON.stringify(files));
  console.log(`Готово. В манифесте файлов: ${files.length}`);
}

main();
