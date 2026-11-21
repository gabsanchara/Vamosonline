import { voicedSlug } from './slug';

// Только заранее озвученные файлы ElevenLabs (public/audio).
// Браузерный голос не используется: если файла нет, звука не будет.
const base = `${import.meta.env.BASE_URL}audio/`;
let manifest: Set<string> | null = null;
let manifestLoading: Promise<void> | null = null;
let current: HTMLAudioElement | null = null;

function loadManifest(): Promise<void> {
  if (!manifestLoading) {
    manifestLoading = fetch(`${base}manifest.json`, { cache: 'no-cache' })
      .then((r) => (r.ok ? r.json() : []))
      .then((list: string[]) => {
        manifest = new Set(list);
      })
      .catch(() => {
        manifest = new Set();
      });
  }
  return manifestLoading;
}

loadManifest();

export function speak(text: string, slow = false, voice?: string) {
  const play = () => {
    if (current) {
      current.pause();
      current = null;
    }
    // Если голосом персонажа фраза ещё не озвучена, пробуем общий голос.
    const slug = [voicedSlug(text, voice), voicedSlug(text)].find((s) => manifest?.has(s));
    if (!slug) return;
    const a = new Audio(`${base}${slug}.mp3`);
    a.playbackRate = slow ? 0.7 : 1;
    a.preservesPitch = true;
    current = a;
    a.play().catch(() => {
      /* автовоспроизведение заблокировано браузером: ждём клика */
    });
  };
  if (manifest) play();
  else loadManifest().then(play);
}
