import { useEffect, useRef, useState } from 'react';
import type { Exercise, Item } from '../types';
import { Build, Card, Choose, Dialogue, DrillEx, TypeAnswer } from './Exercises';

export interface PlayerResult {
  xp: number;
  accuracy: number;
  stars: number;
  results: { item: Item; ok: boolean }[];
}

interface Props {
  title: string;
  exercises: Exercise[];
  onExit: () => void;
  onFinish: (r: PlayerResult) => void;
}

function itemOf(ex: Exercise): Item | null {
  return ex.kind === 'dialogue' || ex.kind === 'drill' ? null : ex.item;
}

function idOf(e: Exercise): string {
  if (e.kind === 'dialogue') return e.turn.npcEs;
  if (e.kind === 'drill') return e.drill.q;
  return e.item.id;
}

export default function Player({ title, exercises, onExit, onFinish }: Props) {
  const [queue, setQueue] = useState<Exercise[]>(exercises);
  const [idx, setIdx] = useState(0);
  const [res, setRes] = useState<{ ok: boolean; solution: string; why?: string } | null>(null);
  const [xp, setXp] = useState(0);
  const [done, setDone] = useState<PlayerResult | null>(null);

  // первая попытка по каждому заданию (не карточки) — для точности и SRS
  const firstTry = useRef<Map<string, { item: Item | null; ok: boolean }>>(new Map());
  const attempts = useRef<Set<string>>(new Set());
  const gradedTotal = exercises.filter((e) => e.kind !== 'card').length;

  const fbRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (res) fbRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [res]);

  const ex = queue[idx];
  const progress = Math.min(1, idx / queue.length);

  const keyOf = (e: Exercise, i: number) => `${e.kind}-${idOf(e)}-${i}`;

  const handleAnswer = (ok: boolean, solution: string, why?: string) => {
    if (res) return;
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

  const next = () => {
    setRes(null);
    if (idx + 1 >= queue.length) {
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
      const bonus = stars * 10;
      setDone({ xp: xp + bonus, accuracy, stars, results: [...byItem.values()] });
    } else {
      setIdx(idx + 1);
    }
  };

  if (done) {
    return (
      <div className="screen center">
        <div className="finish">
          <div className="confetti">🎉</div>
          <h1>Урок пройден!</h1>
          <div className="stars">
            {[1, 2, 3].map((s) => (
              <span key={s} className={s <= done.stars ? 'star on' : 'star'}>
                ★
              </span>
            ))}
          </div>
          <div className="stat-row">
            <div className="stat">
              <b>+{done.xp}</b>
              <span>XP</span>
            </div>
            <div className="stat">
              <b>{Math.round(done.accuracy * 100)}%</b>
              <span>точность</span>
            </div>
          </div>
          <button className="btn primary wide" onClick={() => onFinish(done)}>
            Продолжить
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen player">
      <div className="player-top">
        <button className="icon-btn" onClick={onExit} aria-label="Выйти">
          ✕
        </button>
        <div className="bar">
          <div className="bar-fill" style={{ width: `${progress * 100}%` }} />
        </div>
        <span className="xp-pill">⚡ {xp}</span>
      </div>
      <div className="player-title">
        {title} · {gradedTotal} заданий
      </div>

      <div className="player-body" key={keyOf(ex, idx)}>
        {ex.kind === 'card' && <Card ex={ex} onNext={next} />}
        {ex.kind === 'choose' && <Choose ex={ex} locked={!!res} onAnswer={handleAnswer} />}
        {ex.kind === 'build' && <Build ex={ex} locked={!!res} onAnswer={handleAnswer} />}
        {ex.kind === 'type' && <TypeAnswer ex={ex} locked={!!res} onAnswer={handleAnswer} />}
        {ex.kind === 'dialogue' && <Dialogue ex={ex} locked={!!res} onAnswer={handleAnswer} />}
        {ex.kind === 'drill' && <DrillEx ex={ex} locked={!!res} onAnswer={handleAnswer} />}
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
