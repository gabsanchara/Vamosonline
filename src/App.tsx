import { useEffect, useMemo, useRef } from 'react';
import { ALL_ITEMS, COURSE } from './content/course-es';
import { buildLessonExercises, buildReviewExercises } from './engine/generate';
import { DAILY_GOAL, useProgress } from './engine/store';
import { useRoute, routePath, type Route } from './engine/route';
import { clearSession, lessonKey, loadSession, REVIEW_KEY, sessionProgress } from './engine/session';
import { ProfileContext } from './engine/profile';
import { CHAPTERS, EPISODES } from './content/story/index';
import Player from './components/Player';
import Reading, { hasReading } from './components/Reading';
import GrammarCard from './components/GrammarCard';
import EpisodeIntro from './components/EpisodeIntro';
import Onboarding from './components/Onboarding';
import { PostcardsScreen, postcardList } from './components/Postcard';
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
  const { p, finish, markGrammar, setProfile, reset, dueItems, todayXp, streak } = useProgress();
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

  const screen = () => {
    // Первый вход: знакомимся, чтобы история обращалась к ученику по имени и в нужном роде
    if (!p.profile) return <Onboarding onSave={setProfile} />;
    if (route.name === 'profile') {
      return (
        <Onboarding
          initial={p.profile}
          onBack={() => go({ name: 'home' })}
          onSave={(pr) => {
            setProfile(pr);
            go({ name: 'home' });
          }}
        />
      );
    }

    const lesson = 'lessonId' in route ? findLesson(route.lessonId) : undefined;
    if ('lessonId' in route && !lesson) return <Redirect go={go} />;

    if (route.name === 'play' && lesson) {
      const ep = EPISODES[lesson.id];
      return (
        <Player
          key={lessonKey(lesson.id)}
          sessionKey={lessonKey(lesson.id)}
          title={ep ? `Эпизод ${lesson.day} · ${ep.title}` : `Урок ${lesson.day}`}
          kind="lesson"
          build={() => buildLessonExercises(lesson, ALL_ITEMS)}
          onExit={() => go({ name: 'intro', lessonId: lesson.id })}
          onFinish={(r) => finish({ lessonId: lesson.id, xp: r.xp, stars: r.stars, results: r.results })}
          outro={ep && { hook: ep.hook, postcard: ep.postcard }}
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

    // Шпаргалка перед уроком (по желанию)
    if (route.name === 'grammar' && lesson) {
      if (!GRAMMAR[lesson.day]) return <Redirect go={go} to={{ name: 'intro', lessonId: lesson.id }} />;
      return (
        <GrammarCard
          g={GRAMMAR[lesson.day]}
          label="Начать урок"
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

    if (route.name === 'postcards') {
      return <PostcardsScreen completed={p.completed} onBack={() => go({ name: 'home' })} />;
    }

    if (route.name === 'reading' && lesson) {
      return <Reading lesson={lesson} onDone={() => go({ name: 'home' })} />;
    }

    if (route.name === 'intro' && lesson) {
      const l = lesson;
      return (
        <EpisodeIntro
          lesson={l}
          saved={sessionProgress(lessonKey(l.id))}
          onBack={() => go({ name: 'home' })}
          onStart={() => go({ name: 'play', lessonId: l.id })}
          onRestart={() => {
            clearSession(lessonKey(l.id));
            go({ name: 'play', lessonId: l.id });
          }}
          onCheatSheet={GRAMMAR[l.day] ? () => go({ name: 'grammar', lessonId: l.id }) : undefined}
          onReading={p.completed[l.id] && hasReading(l.day) ? () => go({ name: 'reading', lessonId: l.id }) : undefined}
        />
      );
    }

    const nextIdx = COURSE.findIndex((l) => !p.completed[l.id]);
    const reviewSaved = sessionProgress(REVIEW_KEY);
    const postcards = postcardList();
    const gotPostcards = postcards.filter((x) => p.completed[x.lessonId]).length;

    const lessonButton = (l: Lesson) => {
      const i = COURSE.indexOf(l);
      const done = p.completed[l.id];
      const hasContent = l.items.length > 0;
      const unlocked = hasContent && (i === 0 || !!p.completed[COURSE[i - 1].id] || !!done);
      const current = i === nextIdx && unlocked;
      const inProgress = unlocked ? sessionProgress(lessonKey(l.id)) : null;
      const ep = EPISODES[l.id];
      return (
        <button
          key={l.id}
          className={`lesson ${done ? 'done' : ''} ${current ? 'current' : ''} ${unlocked ? '' : 'locked'}`}
          disabled={!unlocked}
          onClick={() => go({ name: 'intro', lessonId: l.id })}
        >
          <span className="lesson-emoji">{unlocked ? l.emoji : '🔒'}</span>
          <span className="lesson-body">
            <span className="lesson-day">
              {ep ? `Эпизод ${l.day} · ${l.title}` : `Урок ${l.day}`}
            </span>
            <span className="lesson-title">{ep ? ep.title : l.title}</span>
            {!ep && <span className="lesson-goal">{hasContent ? l.goal : 'Скоро'}</span>}
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
    };

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

        {postcards.length > 0 && (
          <section className="review">
            <div>
              <b>📮 Открытки</b>
              <div className="muted">
                Достопримечательности из поездок · собрано {gotPostcards} из {postcards.length}
              </div>
            </div>
            <button className="btn" onClick={() => go({ name: 'postcards' })}>
              Открыть
            </button>
          </section>
        )}

        <h2 className="section-title">Ваша история</h2>
        {CHAPTERS.map((ch) => (
          <section key={ch.n} className="chapter">
            <div className="chapter-head">
              <b>
                Глава {ch.n} · {ch.title}
              </b>
              <span className="muted">{ch.ru}</span>
            </div>
            <div className="path">{COURSE.filter((l) => l.day >= ch.from && l.day <= ch.to).map(lessonButton)}</div>
          </section>
        ))}

        <footer className="foot">
          Доступно уроков: {available.length} из {COURSE.length}.{' '}
          <button className="link" onClick={() => go({ name: 'profile' })}>
            Профиль
          </button>{' '}
          ·{' '}
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
  };

  return <ProfileContext.Provider value={p.profile}>{screen()}</ProfileContext.Provider>;
}
