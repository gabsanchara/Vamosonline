import { useState } from 'react';
import type { Postcard, PostcardArt as Art } from '../types';
import { COURSE } from '../content/course-es';
import { EPISODES, POSTCARDS } from '../content/story/index';
import { Alhambra, Giralda, PuertaAlcala, SagradaFamilia, Windmill, aqueductPath } from './Background';
import { Speaker } from './Exercises';

// Пуэрта-дель-Соль: здание Casa de Correos с часовой башней
function CasaCorreos() {
  return (
    <g>
      <rect x="-120" y="-64" width="240" height="64" />
      <rect x="-126" y="-72" width="252" height="10" />
      <rect x="-30" y="-100" width="60" height="30" />
      <rect x="-16" y="-128" width="32" height="30" />
      <path d="M-16 -128 Q0 -150 16 -128 Z" />
      <rect x="-2" y="-162" width="4" height="16" />
      <circle cx="0" cy="-166" r="6" />
      <g fill="#fff" opacity="0.32">
        <circle cx="0" cy="-113" r="9" />
        {[-96, -66, -36, 24, 54, 84].map((x) => (
          <rect key={x} x={x} y="-50" width="12" height="22" rx="2" />
        ))}
      </g>
    </g>
  );
}

const ART: Record<Art, { box: string; draw: () => JSX.Element }> = {
  sol: { box: '-140 -180 280 190', draw: () => <CasaCorreos /> },
  alcala: { box: '-110 -160 220 170', draw: () => <PuertaAlcala /> },
  alhambra: { box: '-10 -180 450 190', draw: () => <Alhambra /> },
  giralda: { box: '-90 -320 180 330', draw: () => <Giralda /> },
  sagrada: { box: '-140 -345 280 355', draw: () => <SagradaFamilia /> },
  aqueduct: { box: '-10 -125 428 135', draw: () => <path d={aqueductPath()} fillRule="evenodd" /> },
  windmill: {
    box: '-170 -125 340 135',
    draw: () => (
      <>
        <Windmill x={-100} y={0} s={0.85} r={15} />
        <Windmill x={0} y={0} s={1} r={40} />
        <Windmill x={100} y={0} s={0.85} r={65} />
      </>
    ),
  },
};

export function PostcardArt({ p }: { p: Postcard }) {
  const a = p.art && ART[p.art];
  if (!a) return <div className="postcard-emoji">{p.emoji}</div>;
  return (
    <svg className="postcard-svg" viewBox={a.box} aria-hidden="true">
      <g fill="currentColor" style={{ color: '#d1806a' }}>
        {a.draw()}
      </g>
    </svg>
  );
}

function PostcardBody({ p }: { p: Postcard }) {
  return (
    <div className="postcard">
      <div className="postcard-art">
        <PostcardArt p={p} />
      </div>
      <div className="postcard-title">{p.title}</div>
      <div className="postcard-city">📍 {p.city}</div>
      {p.text.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
      <div className="postcard-es">
        <div>
          <b>{p.es}</b>
          <em>{p.ru}</em>
        </div>
        <Speaker text={p.es} />
      </div>
    </div>
  );
}

// Открытка внутри урока
export function PostcardCard({ id, onNext }: { id: string; onNext: () => void }) {
  const p = POSTCARDS[id];
  return (
    <div className="ex">
      <div className="ex-label">📮 Открытка из поездки</div>
      {p && <PostcardBody p={p} />}
      {p && <div className="postcard-added">Открытка попадёт в вашу коллекцию, когда вы закончите урок</div>}
      <button className="btn primary wide" onClick={onNext}>
        Дальше
      </button>
    </div>
  );
}

// Все открытки по порядку уроков: какие уже собраны, какие впереди
export function postcardList(): { p: Postcard; lessonId: string; day: number }[] {
  return COURSE.flatMap((l) => {
    const id = EPISODES[l.id]?.postcard;
    return id && POSTCARDS[id] ? [{ p: POSTCARDS[id], lessonId: l.id, day: l.day }] : [];
  });
}

export function PostcardsScreen({ completed, onBack }: { completed: Record<string, unknown>; onBack: () => void }) {
  const list = postcardList();
  const [open, setOpen] = useState<string | null>(null);
  const got = list.filter((x) => completed[x.lessonId]).length;
  return (
    <div className="screen">
      <button className="back" onClick={onBack}>
        ← Назад
      </button>
      <h1>📮 Открытки</h1>
      <p className="muted">
        Достопримечательности Испании, которые вы посетили по сюжету. Собрано: {got} из {list.length}.
      </p>
      <div className="postcards">
        {list.map(({ p, lessonId, day }) =>
          completed[lessonId] ? (
            <div key={p.id} className="postcard-item">
              <button className="postcard-head" onClick={() => setOpen(open === p.id ? null : p.id)}>
                <span className="postcard-thumb">
                  <PostcardArt p={p} />
                </span>
                <span className="lesson-body">
                  <span className="lesson-title">{p.title}</span>
                  <span className="lesson-goal">
                    {p.city} · урок {day}
                  </span>
                </span>
                <span className="go">{open === p.id ? '▲' : '▼'}</span>
              </button>
              {open === p.id && <PostcardBody p={p} />}
            </div>
          ) : (
            <div key={p.id} className="postcard-item locked">
              <span className="postcard-thumb">🔒</span>
              <span className="lesson-body">
                <span className="lesson-title">???</span>
                <span className="lesson-goal">Откроется в уроке {day}</span>
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
