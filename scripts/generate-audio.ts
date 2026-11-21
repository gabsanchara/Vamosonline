// Озвучка всех фраз курса через ElevenLabs. Запуск: npm run audio
// Нужен ключ в переменной ELEVENLABS_API_KEY или в файле .env (см. .env.example).
// Уже существующие mp3 пропускаются, платить повторно за них не придётся.
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { COURSE } from '../src/content/course-es.ts';
import { audioSlug } from '../src/engine/slug.ts';
import { READINGS } from '../src/content/readings.ts';
import { GRAMMAR } from '../src/content/grammar.ts';
import { plainText } from '../src/engine/gloss.ts';

const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || 'F0l0zg5A8H7I6s7HBQb9'; // Marta, Испания
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID || 'eleven_multilingual_v2';
const OUT = join(process.cwd(), 'public', 'audio');

function loadEnvFile() {
  const p = join(process.cwd(), '.env');
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

function collectPhrases(): string[] {
  const set = new Set<string>();
  for (const l of COURSE) {
    for (const i of l.items) set.add(i.es);
    for (const t of l.dialogue?.turns ?? []) {
      set.add(t.npcEs);
      for (const o of t.options) set.add(o.es);
    }
  }
  for (const g of Object.values(GRAMMAR)) for (const d of g.drills) if (d.es) set.add(d.es);
  for (const list of Object.values(READINGS)) for (const [es] of list) set.add(plainText(es));
  return [...set];
}

async function synth(text: string, key: string): Promise<Buffer> {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`;
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
  const key = process.env.ELEVENLABS_API_KEY;
  if (!key) {
    console.error('Нет ELEVENLABS_API_KEY. Создайте файл .env (пример в .env.example).');
    process.exit(1);
  }
  mkdirSync(OUT, { recursive: true });
  const phrases = collectPhrases();
  const todo = phrases.filter((p) => !existsSync(join(OUT, `${audioSlug(p)}.mp3`)));
  const chars = todo.reduce((a, p) => a + p.length, 0);
  console.log(`Фраз всего: ${phrases.length}, нужно озвучить: ${todo.length} (~${chars} символов)`);

  let done = 0;
  for (const p of todo) {
    try {
      const buf = await synth(p, key);
      writeFileSync(join(OUT, `${audioSlug(p)}.mp3`), buf);
      done++;
      console.log(`✓ ${done}/${todo.length}  ${p}`);
    } catch (e) {
      console.error(`✗ ${p}: ${(e as Error).message}`);
    }
  }

  const files = readdirSync(OUT)
    .filter((f) => f.endsWith('.mp3'))
    .map((f) => f.replace(/\.mp3$/, ''));
  writeFileSync(join(OUT, 'manifest.json'), JSON.stringify(files));
  console.log(`Готово. В манифесте файлов: ${files.length}`);
}

main();
