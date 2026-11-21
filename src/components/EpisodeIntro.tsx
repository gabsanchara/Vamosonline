import type { CharId, Lesson } from '../types';
import { CHARACTERS, EPISODES, chapterOf, recapFor } from '../content/story/index';
import { GRAMMAR } from '../content/grammar';
import { usePersonalize, useProfile } from '../engine/profile';

// Экран перед уроком: эпизод истории, что выучим, кнопки старта.
// Правило урока не навязывается — оно доступно как «Шпаргалка».
export default function EpisodeIntro({
  lesson,
  saved,
  onBack,
  onStart,
  onRestart,
  onCheatSheet,
  onReading,
}: {
  lesson: Lesson;
  saved: number | null; // доля пройденного в незаконченном уроке
  onBack: () => void;
  onStart: () => void;
  onRestart: () => void;
  onCheatSheet?: () => void;
  onReading?: () => void;
}) {
  const t = usePersonalize();
  const profile = useProfile();
  const ep = EPISODES[lesson.id];
  const chapter = chapterOf(lesson.day);
  const recap = recapFor(lesson.id);
  const g = GRAMMAR[lesson.day];
  // В эпизоде персонаж может быть ещё «безымянным» (Chica, Camarero) — берём подпись из сцены
  const label = (id: CharId): string => {
    for (const l of ep?.scene ?? []) if (l.kind === 'line' && l.who === id && l.as) return l.as;
    return CHARACTERS[id].name;
  };

  return (
    <div className="screen">
      <button className="back" onClick={onBack}>
        ← Назад
      </button>
      <div className="intro">
        {chapter && (
          <div className="chapter-chip">
            Глава {chapter.n} · {chapter.title}
          </div>
        )}
        <div className="intro-emoji">{lesson.emoji}</div>
        <div className="day-chip">
          {ep ? `Эпизод ${lesson.day}` : `Урок ${lesson.day}`}
        </div>
        <h1>{ep ? ep.title : lesson.title}</h1>
        {ep && <p className="muted">📍 {ep.place}</p>}
      </div>

      {ep && recap && (
        <div className="recap">
          <b>Ранее…</b> {t(recap)}
        </div>
      )}

      {ep && (
        <div className="story">
          {ep.intro.map((p, i) => (
            <p key={i}>{t(p)}</p>
          ))}
          <div className="cast">
            {ep.cast.map((id) => (
              <span key={id} className="cast-item">
                <span className="cast-emoji">{CHARACTERS[id].emoji}</span>
                {label(id)}
              </span>
            ))}
            <span className="cast-item">
              <span className="cast-emoji">{profile?.gender === 'f' ? '🙋‍♀️' : '🙋‍♂️'}</span>
              {profile?.name || 'Вы'}
            </span>
          </div>
        </div>
      )}

      <div className="tip">
        <b>В этом уроке: {lesson.title}</b>
        <p>{lesson.goal}</p>
        {g && onCheatSheet && (
          <button className="link-btn" onClick={onCheatSheet}>
            📖 Шпаргалка: {g.title}
          </button>
        )}
      </div>

      <div className="words-preview">
        {lesson.items.slice(0, 6).map((it) => (
          <div key={it.id}>
            <span>{it.es}</span>
            <em>{it.ru}</em>
          </div>
        ))}
        {lesson.items.length > 6 && <div className="more">и ещё {lesson.items.length - 6}…</div>}
      </div>

      {saved !== null ? (
        <>
          <button className="btn primary wide" onClick={onStart}>
            Продолжить урок · пройдено {Math.round(saved * 100)}%
          </button>
          <button className="btn wide" onClick={onRestart}>
            Начать заново
          </button>
        </>
      ) : (
        <button className="btn primary wide" onClick={onStart}>
          {ep ? 'Начать эпизод' : 'Начать урок'}
        </button>
      )}
      {onReading && (
        <button className="btn wide" onClick={onReading}>
          Читать предложения урока
        </button>
      )}
    </div>
  );
}
