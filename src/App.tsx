import { useMemo, useState } from 'react';
import { ALL_ITEMS, COURSE } from './content/course-es';
import { buildLessonExercises, buildReviewExercises } from './engine/generate';
import { DAILY_GOAL, useProgress } from './engine/store';
import Player from './components/Player';
import Reading, { hasReading } from './components/Reading';
import GrammarCard from './components/GrammarCard';
import { GRAMMAR } from './content/grammar';
import type { Exercise, Lesson } from './types';

type View =
  | { name: 'home' }
  | { name: 'grammar'; lesson: Lesson; thenPlay: boolean }
  | { name: 'grammarList' }
  | { name: 'intro'; lesson: Lesson }
  | { name: 'reading'; lesson: Lesson }
  | { name: 'play'; lessonId?: string; title: string; exercises: Exercise[] };

export default function App() {
  const { p, finish, markGrammar, reset, dueItems, todayXp, streak } = useProgress();
  const [view, setView] = useState<View>({ name: 'home' });

  const available = useMemo(() => COURSE.filter((l) => l.items.length > 0), []);
  const goalPct = Math.min(100, Math.round((todayXp / DAILY_GOAL) * 100));

  if (view.name === 'play') {
    return (
      <Player
        title={view.title}
        exercises={view.exercises}
        onExit={() => setView({ name: 'home' })}
        onFinish={(r) => {
          finish({ lessonId: view.lessonId, xp: r.xp, stars: r.stars, results: r.results });
          const lesson = COURSE.find((l) => l.id === view.lessonId);
          // В конце урока сразу открываем чтение с новыми словами
          setView(lesson && hasReading(lesson.day) ? { name: 'reading', lesson } : { name: 'home' });
        }}
      />
    );
  }

  const startLesson = (l: Lesson) =>
    setView({
      name: 'play',
      lessonId: l.id,
      title: `Урок ${l.day}`,
      exercises: buildLessonExercises(l, ALL_ITEMS),
    });

  if (view.name === 'grammar') {
    const l = view.lesson;
    return (
      <GrammarCard
        g={GRAMMAR[l.day]}
        onRead={() => markGrammar(l.day)}
        onBack={() => setView(view.thenPlay ? { name: 'intro', lesson: l } : { name: 'grammarList' })}
        onStart={view.thenPlay ? () => startLesson(l) : undefined}
      />
    );
  }

  if (view.name === 'grammarList') {
    const days = Object.keys(GRAMMAR)
      .map(Number)
      .sort((a, b) => a - b);
    const readCount = days.filter((d) => p.grammarRead?.[d]).length;
    return (
      <div className="screen">
        <button className="back" onClick={() => setView({ name: 'home' })}>
          ← Назад
        </button>
        <h1>Грамматика</h1>
        <p className="muted">
          Все разборы открыты всегда. Дочитали до конца — тема отмечается как пройденная. Прочитано: {readCount} из{' '}
          {days.length}.
        </p>
        <div className="path">
          {days.map((d) => {
            const l = COURSE.find((x) => x.day === d)!;
            const read = !!p.grammarRead?.[d];
            return (
              <button
                key={d}
                className={`lesson ${read ? 'done' : ''}`}
                onClick={() => setView({ name: 'grammar', lesson: l, thenPlay: false })}
              >
                <span className="lesson-emoji">{GRAMMAR[d].emoji}</span>
                <span className="lesson-body">
                  <span className="lesson-title">{GRAMMAR[d].title}</span>
                </span>
                <span className="lesson-stars">{read ? '✓ Пройдено' : ''}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (view.name === 'reading') {
    return <Reading lesson={view.lesson} onDone={() => setView({ name: 'home' })} />;
  }

  if (view.name === 'intro') {
    const l = view.lesson;
    return (
      <div className="screen">
        <button className="back" onClick={() => setView({ name: 'home' })}>
          ← Назад
        </button>
        <div className="intro">
          <div className="intro-emoji">{l.emoji}</div>
          <div className="day-chip">Урок {l.day}</div>
          <h1>{l.title}</h1>
          <p className="muted">{l.goal}</p>
          {GRAMMAR[l.day] && (
            <div className="tip">
              <b>
                {GRAMMAR[l.day].emoji} Грамматика урока: {GRAMMAR[l.day].title}
              </b>
              <p>Сначала короткий разбор с запоминалками, затем слова и тренажёры.</p>
            </div>
          )}
          {!GRAMMAR[l.day] && l.tip && (
            <div className="tip">
              <b>{l.tip.title}</b>
              <p>{l.tip.text}</p>
            </div>
          )}
          <div className="words-preview">
            {l.items.slice(0, 6).map((it) => (
              <div key={it.id}>
                <span>{it.es}</span>
                <em>{it.ru}</em>
              </div>
            ))}
            {l.items.length > 6 && <div className="more">и ещё {l.items.length - 6}…</div>}
          </div>
          <button
            className="btn primary wide"
            onClick={() =>
              GRAMMAR[l.day] ? setView({ name: 'grammar', lesson: l, thenPlay: true }) : startLesson(l)
            }
          >
            {GRAMMAR[l.day] ? 'Начать: разбор и урок' : 'Начать урок'}
          </button>
          {p.completed[l.id] && hasReading(l.day) && (
            <button className="btn wide" onClick={() => setView({ name: 'reading', lesson: l })}>
              Читать предложения урока
            </button>
          )}
        </div>
      </div>
    );
  }

  const nextIdx = COURSE.findIndex((l) => !p.completed[l.id]);

  return (
    <div className="screen home">
      <header className="top">
        <div className="logo">
          ¡Vamos!<small>изучение испанского языка</small>
        </div>
        <div className="pills">
          <span className={`pill ${streak ? 'hot' : ''}`} title="Дней подряд">
            🔥 {streak}
          </span>
          <span className="pill" title="Всего XP">
            ⚡ {p.xp}
          </span>
        </div>
      </header>

      <section className="goal">
        <div className="goal-head">
          <b>Цель на сегодня</b>
          <span>
            {Math.min(todayXp, DAILY_GOAL)} / {DAILY_GOAL} XP
          </span>
        </div>
        <div className="bar">
          <div className="bar-fill" style={{ width: `${goalPct}%` }} />
        </div>
        {goalPct >= 100 && <div className="goal-done">Цель выполнена — отлично! 🎉</div>}
      </section>

      <section className={`review ${dueItems.length ? 'due' : ''}`}>
        <div>
          <b>Повторение</b>
          <div className="muted">
            {dueItems.length
              ? `${dueItems.length} фраз ждут повтора, пока не забылись`
              : 'Пока нечего повторять. Пройдите урок.'}
          </div>
        </div>
        <button
          className="btn primary"
          disabled={!dueItems.length}
          onClick={() =>
            setView({
              name: 'play',
              title: 'Повторение',
              exercises: buildReviewExercises(dueItems, ALL_ITEMS),
            })
          }
        >
          Повторить
        </button>
      </section>

      <section className="review">
        <div>
          <b>🧠 Грамматика</b>
          <div className="muted">
            Правила и запоминалки · прочитано{' '}
            {Object.keys(GRAMMAR).filter((d) => p.grammarRead?.[Number(d)]).length} из {Object.keys(GRAMMAR).length}
          </div>
        </div>
        <button className="btn" onClick={() => setView({ name: 'grammarList' })}>
          Открыть
        </button>
      </section>

      <h2 className="section-title">Ваш путь</h2>
      <div className="path">
        {COURSE.map((l, i) => {
          const done = p.completed[l.id];
          const hasContent = l.items.length > 0;
          const unlocked = hasContent && (i === 0 || !!p.completed[COURSE[i - 1].id] || !!done);
          const current = i === nextIdx && unlocked;
          return (
            <button
              key={l.id}
              className={`lesson ${done ? 'done' : ''} ${current ? 'current' : ''} ${unlocked ? '' : 'locked'}`}
              disabled={!unlocked}
              onClick={() => setView({ name: 'intro', lesson: l })}
            >
              <span className="lesson-emoji">{unlocked ? l.emoji : '🔒'}</span>
              <span className="lesson-body">
                <span className="lesson-day">Урок {l.day}</span>
                <span className="lesson-title">{l.title}</span>
                {hasContent ? (
                  <span className="lesson-goal">{l.goal}</span>
                ) : (
                  <span className="lesson-goal">Скоро</span>
                )}
              </span>
              {done && (
                <span className="lesson-stars">
                  {'★'.repeat(done.stars)}
                  <i>{'★'.repeat(3 - done.stars)}</i>
                </span>
              )}
              {current && <span className="go">Начать →</span>}
            </button>
          );
        })}
      </div>

      <footer className="foot">
        Доступно уроков: {available.length} из {COURSE.length}.{' '}
        <button
          className="link"
          onClick={() => {
            if (confirm('Сбросить весь прогресс?')) reset();
          }}
        >
          Сбросить прогресс
        </button>
      </footer>
    </div>
  );
}
