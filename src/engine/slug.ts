// Имя аудиофайла для фразы: нормализованный текст -> FNV-1a хэш.
export function audioSlug(text: string): string {
  const s = text.trim().toLowerCase().replace(/\s+/g, ' ');
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

// Имя файла для фразы, озвученной конкретным голосом. Без голоса — общий голос сайта
// (так названы все старые файлы, поэтому они продолжают работать).
export function voicedSlug(text: string, voice?: string): string {
  return voice ? audioSlug(`${voice}|${text}`) : audioSlug(text);
}
