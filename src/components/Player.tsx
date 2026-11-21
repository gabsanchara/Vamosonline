import { useEffect, useRef, useState } from 'react';
import type { Exercise, Item } from '../types';
import { clearSession, freshSession, loadSession, saveSession, type SavedSession } from '../engine/session';
import { Build, Card, Choose, Dialogue, DrillEx, SayEx, TypeAnswer } from './Exercises';

export interface PlayerResult {
  xp: number;
  accuracy: number;
  stars: number;
  results: { item: Item; ok: boolean }[];
}

interface Props {
  sessionKey: string; // под этим ключом незаконченный урок хранится в браузере
  title: string;
  kind: 'lesson' | 'review';
  build: () => Exercise[]; // набор заданий, если сохранённого урока нет
  onExit: () => void;
  onFinish: (r: PlayerResult) => void; // сразу при завершении: сохранить прогресс
  onContinue: () => void; // кнопка «Продолжить» на экране итогов
}

function itemOf(ex: Exercise): Item | null {
  return ex.kind === 'dialogue' || ex.kind === 'drill' ? null : ex.item;
}

function idOf(e: Exercise): string {
  if (e.kind === 'dialogue') return e.turn.npcEs;
  if (e.kind === 'drill') return e.drill.q;
  return e.item.id;
}

export default function Player({ sessionKey, title, kind, build, onExit, onFinish, onContinue }: Props) {
  const [init] = useState<SavedSession>(() => loadSession(sessionKey) ?? freshSession(title, build()));
  const [queue, setQueue] = useState<Exercise[]>(init.queue);
  const [idx, setIdx] = useState(init.idx);
  const [done, setDoneCount] = useState(init.done);
  const [xp, setXp] = useState(init.xp);
  const [res, setRes] = useState<{ ok: boolean; solution: string; why?: string } | null>(null);
  const [result, setResult] = useState<PlayerResult | null>(null);

  // первая попытка по каждому заданию (не карточки) — для точности и SRS
  const firstTry = useRef(new Map(init.firstTry));
  const attempts = useRef(new Set(init.attempts));
  // когда показали результат ответа: тот же Enter, которым ответили, не должен сразу листать дальше
  const answeredAt = useRef(0);

  const fbRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (res) fbRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [res]);

  // Сохраняем урок после каждого шага. Если ответ уже дан, но «Дальше» ещё не нажато,
  // сохраняем так, будто нажато: после возврата не придётся отвечать на то же задание.
  useEffect(() => {
    if (result) return;
    const pending = !!res && idx + 1 < queue.length;
    saveSession(sessionKey, {
      title: init.title,
      total: init.total,
      graded: init.graded,
      queue,
      idx: pending ? idx + 1 : idx,
      done: pending && res!.ok ? done + 1 : done,
      xp,
      firstTry: [...firstTry.current.entries()],
      attempts: [...attempts.current],
      savedAt: Date.now(),
    });
  }, [sessionKey, init, queue, idx, done, xp, res, result]);

  const ex = queue[idx];
  // Прогресс считается по пройденным заданиям, поэтому после ошибки полоса не откатывается назад.
  const progress = Math.min(1, (done + (res?.ok ? 1 : 0)) / init.total);

  const keyOf = (e: Exercise, i: number) => `${e.kind}-${idOf(e)}-${i}`;

  const handleAnswer = (ok: boolean, solution: string, why?: string) => {
    if (res) return;
    answeredAt.current = performance.now();
    setRes({ ok, solution, why });
    const baseKey = `${ex.kind}-${idOf(ex)}`;
    const isFirst = !attempts.current.has(baseKey);
    if (isFirst) {
      attempts.current.add(baseKey);
      firstTry.current.set(baseKey, { item: itemOf(ex), ok });
    }
    if (ok && isFirst) setXp((x) => x + 10);
    if (!ok) setQueue((q) => [...q, ex]);
  };

  const complete = () => {
    const all = [...firstTry.current.values()];
    const correct = all.filter((a) => a.ok).length;
    const accuracy = all.length ? correct / all.length : 1;
    // для SRS: слово считается «правильным», только если все его задания с первой попытки верны
    const byItem = new Map<string, { item: Item; ok: boolean }>();
    for (const a of all) {
      if (!a.item) continue;
      const prev = byItem.get(a.item.id);
      byItem.set(a.item.id, { item: a.item, ok: (prev?.ok ?? true) && a.ok });
    }
    const stars = accuracy >= 0.9 ? 3 : accuracy >= 0.7 ? 2 : 1;
    const r: PlayerResult = { xp: xp + stars * 10, accuracy, stars, results: [...byItem.values()] };
    clearSession(sessionKey);
    setResult(r);
    onFinish(r);
  };

  const next = () => {
    const passed = ex.kind === 'card' || !!res?.ok;
    setRes(null);
    if (idx + 1 >= queue.length) {
      complete();
      return;
    }
    if (passed) setDoneCount((d) => d + 1);
    setIdx(idx + 1);
  };

  // Enter: «Дальше» после ответа, «Понятно» на карточке, «Продолжить» на итогах.
  const keyState = useRef({ next, onContinue, res, result, kind: ex?.kind });
  keyState.current = { next, onContinue, res, result, kind: ex?.kind };
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' || e.repeat || e.isComposing) return;
      if (e.timeStamp <= answeredAt.current) return;
      const s = keyState.current;
      if (s.result) {
        e.preventDefault();
        s.onContinue();
      } else if (s.res || s.kind === 'card') {
        e.preventDefault();
        s.next();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (result) {
    return (
      <div className="screen center">
        <div className="finish">
          <div className="confetti">🎉</div>
          <h1>{kind === 'review' ? 'Повторение завершено!' : 'Урок пройден!'}</h1>
          <div className="stars">
            {[1, 2, 3].map((s) => (
              <span key={s} className={s <= result.stars ? 'star on' : 'star'}>
                ★
              </span>
            ))}
          </div>
          <div className="stat-row">
            <div className="stat">
              <b>+{result.xp}</b>
              <span>XP</span>
            </div>
            <div className="stat">
              <b>{Math.round(result.accuracy * 100)}%</b>
              <span>точность</span>
            </div>
          </div>
          <button className="btn primary wide" onClick={onContinue}>
            Продолжить
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen player">
      <div className="player-top">
        <button className="icon-btn" onClick={onExit} aria-label="Выйти (прогресс урока сохранится)" title="Выйти — прогресс урока сохранится">
          ✕
        </button>
        <div className="bar">
          <div className="bar-fill" style={{ width: `${progress * 100}%` }} />
        </div>
        <span className="xp-pill">⚡ {xp}</span>
      </div>
      <div className="player-title">
        {init.title} · {init.graded} заданий
      </div>

      <div className="player-body" key={keyOf(ex, idx)}>
        {ex.kind === 'card' && <Card ex={ex} onNext={next} />}
        {ex.kind === 'choose' && <Choose ex={ex} locked={!!res} onAnswer={handleAnswer} />}
        {ex.kind === 'build' && <Build ex={ex} locked={!!res} onAnswer={handleAnswer} />}
        {ex.kind === 'type' && <TypeAnswer ex={ex} locked={!!res} onAnswer={handleAnswer} />}
        {ex.kind === 'dialogue' && <Dialogue ex={ex} locked={!!res} onAnswer={handleAnswer} />}
        {ex.kind === 'drill' && <DrillEx ex={ex} locked={!!res} onAnswer={handleAnswer} />}
        {ex.kind === 'say' && <SayEx ex={ex} locked={!!res} onAnswer={handleAnswer} />}
      </div>

      {res && (
        <div ref={fbRef} className={`feedback ${res.ok ? 'ok' : 'bad'}`}>
          <div className="feedback-text">
            <b>{res.ok ? 'Верно! 🎯' : 'Не совсем'}</b>
            {!res.ok && <span>Правильно: {res.solution}</span>}
            {res.why && <span className="why">💡 {res.why}</span>}
          </div>
          <button className={`btn ${res.ok ? 'ok' : 'bad'}`} onClick={next}>
            Дальше
          </button>
        </div>
      )}
    </div>
  );
}
