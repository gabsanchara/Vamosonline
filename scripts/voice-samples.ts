// Пробные фразы кандидатов в голоса персонажей: npm run voices
//   npm run voices -- --dry  — только посчитать символы
// Результат: public/voice-samples/index.html (открывается на запущенном сайте: /voice-samples/).
// Папка в .gitignore: это временный материал для выбора голосов.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROLES } from './voice-candidates.ts';

const OUT = join(process.cwd(), 'public', 'voice-samples');
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID || 'eleven_multilingual_v2';
const DRY = process.argv.includes('--dry');
const LETTERS = 'ABCDEF';

function apiKey(): string | undefined {
  if (process.env.ELEVENLABS_API_KEY) return process.env.ELEVENLABS_API_KEY;
  const p = join(process.cwd(), '.env');
  if (!existsSync(p)) return undefined;
  return readFileSync(p, 'utf8')
    .match(/^\s*ELEVENLABS_API_KEY\s*=\s*(.+)\s*$/m)?.[1]
    .replace(/^["']|["']$/g, '')
    .trim();
}

async function synth(text: string, voice: string, key: string): Promise<Buffer> {
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_128`, {
    method: 'POST',
    headers: { 'xi-api-key': key, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
    body: JSON.stringify({ text, model_id: MODEL_ID, voice_settings: { stability: 0.6, similarity_boost: 0.8, speed: 0.9 } }),
  });
  if (!res.ok) throw new Error(`ElevenLabs ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return Buffer.from(await res.arrayBuffer());
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function page(): string {
  const roles = ROLES.map(
    (r) => `
    <section>
      <h2>${esc(r.title)}</h2>
      <p class="who">${esc(r.who)}</p>
      <p class="line">«${esc(r.sample)}»</p>
      ${r.candidates
        .map(
          (c, k) => `
        <div class="cand">
          <b class="letter">${LETTERS[k]}</b>
          <div class="meta"><b>${esc(c.name)}</b><span>${esc(c.note)}</span></div>
          <audio controls preload="none" src="${r.role}-${k + 1}.mp3"></audio>
        </div>`,
        )
        .join('')}
    </section>`,
  ).join('');
  return `<!doctype html>
<html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Голоса персонажей</title>
<style>
  :root { --bg:#fff8f0; --surface:#fff; --text:#2a1f1a; --muted:#7c6c62; --line:#eadfd3; --primary:#e8453c; }
  body { margin:0; background:var(--bg); color:var(--text); font-family:'Segoe UI',system-ui,sans-serif; }
  main { max-width:720px; margin:0 auto; padding:24px 16px 80px; }
  h1 { margin:0 0 6px; } .lead { color:var(--muted); line-height:1.5; }
  section { background:var(--surface); border:2px solid var(--line); border-radius:16px; padding:14px 16px; margin:16px 0; }
  h2 { margin:0; font-size:20px; } .who { color:var(--muted); margin:4px 0 8px; }
  .line { font-style:italic; margin:0 0 10px; }
  .cand { display:flex; align-items:center; gap:12px; padding:8px 0; border-top:1px solid var(--line); flex-wrap:wrap; }
  .letter { width:32px; height:32px; border-radius:50%; background:var(--primary); color:#fff; display:grid; place-items:center; flex:none; }
  .meta { display:flex; flex-direction:column; flex:1; min-width:180px; } .meta span { color:var(--muted); font-size:14px; }
  audio { width:100%; max-width:280px; }
</style></head>
<body><main>
  <h1>Голоса персонажей</h1>
  <p class="lead">Каждый кандидат читает одну и ту же фразу своего героя (кастильский акцент). Послушайте и напишите в чат,
  кого выбираете, например: «Lucía — B, Carlos — A». Если никто не подошёл — так и скажите, подберу других.</p>
  ${roles}
</main></body></html>`;
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  const jobs = ROLES.flatMap((r) =>
    r.candidates.map((c, k) => ({ file: join(OUT, `${r.role}-${k + 1}.mp3`), text: r.sample, voice: c.id, label: `${r.title} ${LETTERS[k]}` })),
  );
  const todo = jobs.filter((j) => !existsSync(j.file));
  console.log(`Проб: ${jobs.length}, нужно озвучить: ${todo.length} (~${todo.reduce((a, j) => a + j.text.length, 0)} символов)`);
  writeFileSync(join(OUT, 'index.html'), page());
  if (DRY) return console.log('Пробный подсчёт (--dry): ничего не озвучено.');

  const key = apiKey();
  if (!key) {
    console.error('Нет ELEVENLABS_API_KEY в .env');
    process.exit(1);
  }
  for (const j of todo) {
    try {
      writeFileSync(j.file, await synth(j.text, j.voice, key));
      console.log(`✓ ${j.label}`);
    } catch (e) {
      console.error(`✗ ${j.label}: ${(e as Error).message}`);
    }
  }
  console.log('Готово: откройте /voice-samples/ на запущенном сайте.');
}

main();
