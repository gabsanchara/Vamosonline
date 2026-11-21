import { useMemo, useState } from 'react';
import type { Lesson } from '../types';
import { READINGS } from '../content/readings';
import { plainText, tokenize } from '../engine/gloss';
import { Speaker } from './Exercises';

export function hasReading(day: number): boolean {
  return (READINGS[day]?.length ?? 0) > 0;
}

export default function Reading({ lesson, onDone }: { lesson: Lesson; onDone: () => void }) {
  const [hide, setHide] = useState(false);
  // в режиме самопроверки перевод предложения открывается по нажатию
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const sentences = useMemo(
    () =>
      (READINGS[lesson.day] ?? []).map(([es, ru]) => ({
        plain: plainText(es),
        ru,
        pieces: tokenize(es),
      })),
    [lesson.day],
  );

  return (
    <div className="screen">
      <button className="back" onClick={onDone}>
        ← К урокам
      </button>
      <h1>Читаем: урок {lesson.day}</h1>
      <div className="read-intro">
        Слова, которые вы выучили в этом уроке, <span className="mark">выделены</span>. Над остальными стоит перевод. Нажмите 🔊,
        чтобы послушать предложение.
        <div>
          <button
            className="hint-toggle"
            onClick={() => {
              setHide((h) => !h);
              setRevealed(new Set());
            }}
          >
            {hide ? 'Показать подсказки и перевод' : 'Проверить себя: скрыть подсказки и перевод'}
          </button>
        </div>
      </div>

      <div className={hide ? 'hide-gloss' : ''}>
        {sentences.map((s, i) => (
          <div className="read-card" key={i}>
            <div className="read-row">
              <div className="read-words">
                {s.pieces.map((p, j) => {
                  const isNew = p.day === lesson.day;
                  return (
                    <span key={j} className={`gw ${isNew ? 'new' : ''}`}>
                      <span className="g">{isNew ? '' : p.gloss}</span>
                      <span className="w">{p.text}</span>
                    </span>
                  );
                })}
              </div>
              <Speaker text={s.plain} />
            </div>
            {hide && !revealed.has(i) ? (
              <button className="read-ru read-reveal" onClick={() => setRevealed((r) => new Set(r).add(i))}>
                Показать перевод
              </button>
            ) : (
              <div className="read-ru">{s.ru}</div>
            )}
          </div>
        ))}
      </div>

      <button className="btn primary wide" onClick={onDone}>
        Готово
      </button>
    </div>
  );
}
