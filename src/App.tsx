import { useEffect, useMemo, useRef } from 'react';
import { ALL_ITEMS, COURSE } from './content/course-es';
import { buildLessonExercises, buildReviewExercises } from './engine/generate';
import { DAILY_GOAL, useProgress } from './engine/store';
import { useRoute, routePath, type Route } from './engine/route';
import { clearSession, lessonKey, loadSession, REVIEW_KEY, sessionProgress } from './engine/session';
import Player from './components/Player';
import Reading, { hasReading } from './components/Reading';
import GrammarCard from './components/GrammarCard';
import { GRAMMAR } from './content/grammar';
import type { Lesson } from './types';

const findLesson = (id: string): Lesson | undefined => COURSE.find((l) => l.id === id && l.items.length > 0);

// Если адрес ведёт в никуда (урока нет, повторять нечего) — тихо уходим на главную или другой экран.
function Redirect({ go, to = { name: 'home' } }: { go: (r: Route, o?: { replace?: boolean }) => void; to?: Route }) {
  const target = routePath(to);
  useEffect(() => {
    go(to, { replace: true });
  }, [go, target]);
  return null;
}

export default function App() {
  const { p, finish, markGrammar, reset, dueItems, todayXp, streak } = useProgress();
  const { route, go } = useRoute();

  // Можно ли открыть повторение, решаем один раз при входе: после завершения
  // повторять уже нечего, но экран итогов должен остаться на месте.
  const reviewOk = useRef(false);
  if (route.name !== 'review') reviewOk.current = false;
  else if (!reviewOk.current) reviewOk.current = !!loadSession(REVIEW_KEY) || dueItems.length > 0;

  // Новый экран всегда открывается сверху
  const path = routePath(route);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const available = useMemo(() => COURSE.filter((l) => l.items.length > 0), []);
  const goalPct = Math.min(100, Math.round((todayXp / DAILY_GOAL) * 100));

  const lesson = 'lessonId' in route ? findLesson(route.lessonId) : undefined;
  if ('lessonId' in route && !lesson) return <Redirect go={go} />;

  if (route.name === 'play' && lesson) {
    return (
      <Player
        key={lessonKey(lesson.id)}
        sessionKey={lessonKey(lesson.id)}
        title={`Урок ${lesson.day}`}
        kind="lesson"
        build={() => buildLessonExercises(lesson, ALL_ITEMS)}
        onExit={() => go({ name: 'intro', lessonId: lesson.id })}
        onFinish={(r) => finish({ lessonId: lesson.id, xp: r.xp, stars: r.stars, results: r.results })}
        // В конце урока сразу открываем чтение с новыми словами
        onContinue={() =>
          go(hasReading(lesson.day) ? { name: 'reading', lessonId: lesson.id } : { name: 'home' }, { replace: true })
        }
      />
    );
  }

  if (route.name === 'review') {
    if (!reviewOk.current) return <Redirect go={go} />;
    return (
      <Player
        key={REVIEW_KEY}
        sessionKey={REVIEW_KEY}
        title="Повторение"
        kind="review"
        build={() => buildReviewExercises(dueItems, ALL_ITEMS)}
        onExit={() => go({ name: 'home' })}
        onFinish={(r) => finish({ xp: r.xp, results: r.results })}
        onContinue={() => go({ name: 'home' }, { replace: true })}
      />
    );
  }

  if (route.name === 'grammar' && lesson) {
    if (!GRAMMAR[lesson.day]) return <Redirect go={go} to={{ name: 'play', lessonId: lesson.id }} />;
    return (
      <GrammarCard
        g={GRAMMAR[lesson.day]}
        onRead={() => markGrammar(lesson.day)}
        onBack={() => go({ name: 'intro', lessonId: lesson.id })}
        onStart={() => go({ name: 'play', lessonId: lesson.id })}
      />
    );
  }

  if (route.name === 'grammarDay') {
    const g = GRAMMAR[route.day];
    if (!g) return <Redirect go={go} />;
    return <GrammarCard g={g} onRead={() => markGrammar(route.day)} onBack={() => go({ name: 'grammarList' })} />;
  }

  if (route.name === 'grammarList') {
    const days = Object.keys(GRAMMAR)
      .map(Number)
      .sort((a, b) => a - b);
    const readCount = days.filter((d) => p.grammarRead?.[d]).length;
    return (
      <div className="screen">
        <button className="back" onClick={() => go({ name: 'home' })}>
          ← Назад
        </button>
        <h1>Грамматика</h1>
        <p className="muted">
          Все разборы открыты всегда. Дочитали до конца — тема отмечается как пройденная. Прочитано: {readCount} из{' '}
          {days.length}.
        </p>
        <div className="path">
          {days.map((d) => {
            const read = !!p.grammarRead?.[d];
            return (
              <button key={d} className={`lesson ${read ? 'done' : ''}`} onClick={() => go({ name: 'grammarDay', day: d })}>
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

  if (route.name === 'reading' && lesson) {
    return <Reading lesson={lesson} onDone={() => go({ name: 'home' })} />;
  }

  if (route.name === 'intro' && lesson) {
    const l = lesson;
    const saved = sessionProgress(lessonKey(l.id));
    const start = () => go(GRAMMAR[l.day] ? { name: 'grammar', lessonId: l.id } : { name: 'play', lessonId: l.id });
    return (
      <div className="screen">
        <button className="back" onClick={() => go({ name: 'home' })}>
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
          {saved !== null ? (
            <>
              <button className="btn primary wide" onClick={() => go({ name: 'play', lessonId: l.id })}>
                Продолжить урок · пройдено {Math.round(saved * 100)}%
              </button>
              <button
                className="btn wide"
                onClick={() => {
                  clearSession(lessonKey(l.id));
                  start();
                }}
              >
                Начать заново
              </button>
            </>
          ) : (
            <button className="btn primary wide" onClick={start}>
              {GRAMMAR[l.day] ? 'Начать: разбор и урок' : 'Начать урок'}
            </button>
          )}
          {p.completed[l.id] && hasReading(l.day) && (
            <button className="btn wide" onClick={() => go({ name: 'reading', lessonId: l.id })}>
              Читать предложения урока
            </button>
          )}
        </div>
      </div>
    );
  }

  const nextIdx = COURSE.findIndex((l) => !p.completed[l.id]);
  const reviewSaved = sessionProgress(REVIEW_KEY);

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

      <section className={`review ${dueItems.length || reviewSaved !== null ? 'due' : ''}`}>
        <div>
          <b>Повторение</b>
          <div className="muted">
            {reviewSaved !== null
              ? `Начатое повторение · пройдено ${Math.round(reviewSaved * 100)}%`
              : dueItems.length
                ? `${dueItems.length} фраз ждут повтора, пока не забылись`
                : 'Пока нечего повторять. Пройдите урок.'}
          </div>
        </div>
        <button
          className="btn primary"
          disabled={!dueItems.length && reviewSaved === null}
          onClick={() => go({ name: 'review' })}
        >
          {reviewSaved !== null ? 'Продолжить' : 'Повторить'}
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
        <button className="btn" onClick={() => go({ name: 'grammarList' })}>
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
          const inProgress = unlocked ? sessionProgress(lessonKey(l.id)) : null;
          return (
            <button
              key={l.id}
              className={`lesson ${done ? 'done' : ''} ${current ? 'current' : ''} ${unlocked ? '' : 'locked'}`}
              disabled={!unlocked}
              onClick={() => go({ name: 'intro', lessonId: l.id })}
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
              {done && inProgress === null && (
                <span className="lesson-stars">
                  {'★'.repeat(done.stars)}
                  <i>{'★'.repeat(3 - done.stars)}</i>
                </span>
              )}
              {inProgress !== null ? (
                <span className="go">Продолжить · {Math.round(inProgress * 100)}%</span>
              ) : (
                current && <span className="go">Начать →</span>
              )}
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
