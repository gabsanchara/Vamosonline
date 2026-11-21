import { useCallback, useEffect, useState } from 'react';

// Экран хранится в адресе (#/lesson/d03/play), поэтому работают кнопка «Назад»,
// жест «назад» на телефоне, обновление страницы и ссылки на конкретный урок.
// Хэш-адреса не требуют настройки сервера — подходят для GitHub Pages.
export type Route =
  | { name: 'home' }
  | { name: 'intro'; lessonId: string }
  | { name: 'grammar'; lessonId: string } // разбор перед уроком
  | { name: 'play'; lessonId: string }
  | { name: 'reading'; lessonId: string }
  | { name: 'grammarList' }
  | { name: 'grammarDay'; day: number } // разбор из списка грамматики
  | { name: 'review' };

export function parseRoute(hash: string): Route {
  const [a, b, c] = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (a === 'lesson' && b) {
    if (!c) return { name: 'intro', lessonId: b };
    if (c === 'grammar' || c === 'play' || c === 'reading') return { name: c, lessonId: b };
  }
  if (a === 'grammar') {
    const day = Number(b);
    return b && Number.isInteger(day) ? { name: 'grammarDay', day } : { name: 'grammarList' };
  }
  if (a === 'review') return { name: 'review' };
  return { name: 'home' };
}

export function routePath(r: Route): string {
  switch (r.name) {
    case 'home':
      return '/';
    case 'intro':
      return `/lesson/${r.lessonId}`;
    case 'grammar':
    case 'play':
    case 'reading':
      return `/lesson/${r.lessonId}/${r.name}`;
    case 'grammarList':
      return '/grammar';
    case 'grammarDay':
      return `/grammar/${r.day}`;
    case 'review':
      return '/review';
  }
}

export function useRoute() {
  const [route, setRoute] = useState<Route>(() => parseRoute(location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parseRoute(location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  // replace — заменить текущую запись истории (например, после урока сразу к чтению,
  // чтобы «Назад» не возвращал в законченный урок).
  const go = useCallback((r: Route, opts?: { replace?: boolean }) => {
    const hash = '#' + routePath(r);
    if (opts?.replace) {
      history.replaceState(null, '', hash);
      setRoute(parseRoute(hash));
    } else if (location.hash !== hash) {
      location.hash = hash;
    } else {
      setRoute(parseRoute(hash));
    }
  }, []);

  return { route, go };
}
