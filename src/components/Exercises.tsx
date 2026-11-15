import { useEffect, useRef, useState } from 'react';
import type { Exercise } from '../types';
import { normalize } from '../engine/generate';
import { speak } from '../engine/tts';

export interface ExProps<T extends Exercise = Exercise> {
  ex: T;
  locked: boolean;
  onAnswer: (ok: boolean, solution: string, why?: string) => void;
}

export function DrillEx({ ex, locked, onAnswer }: ExProps<Extract<Exercise, { kind: 'drill' }>>) {
  const [picked, setPicked] = useState<string | null>(null);
  const [opts] = useState(() => [...ex.drill.options].sort(() => Math.random() - 0.5));
  return (
    <div className="ex">
      <div className="ex-label">Грамматика</div>
      <div className="prompt">
        <span className="prompt-text">{ex.drill.q}</span>
      </div>
      {ex.drill.ru && picked === null && <div className="drill-ru">Перевод: {ex.drill.ru}</div>}
      {ex.drill.es && picked !== null && (
        <div className="drill-full">
          <span className="drill-es">{ex.drill.es}</span>
          <Speaker text={ex.drill.es} />
          <div className="drill-ru">{ex.drill.ru}</div>
        </div>
      )}
      <div className="options">
        {opts.map((o) => {
          let cls = 'opt';
          if (picked !== null) {
            if (o === ex.drill.answer) cls += ' ok';
            else if (o === picked) cls += ' bad';
          }
          return (
            <button
              key={o}
              className={cls}
              disabled={locked}
              onClick={() => {
                setPicked(o);
                if (ex.drill.es) speak(ex.drill.es);
                onAnswer(o === ex.drill.answer, ex.drill.answer, ex.drill.why);
              }}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Speaker({ text, big }: { text: string; big?: boolean }) {
  return (
    <span className="speakers">
      <button className={`speaker ${big ? 'big' : ''}`} onClick={() => speak(text)} aria-label="Прослушать">
        🔊
      </button>
      <button className="speaker slow" onClick={() => speak(text, true)} aria-label="Медленно">
        🐢
      </button>
    </span>
  );
}

export function Card({ ex, onNext }: { ex: Extract<Exercise, { kind: 'card' }>; onNext: () => void }) {
  useEffect(() => {
    speak(ex.item.es);
  }, [ex]);
  return (
    <div className="ex">
      <div className="ex-label">Новая фраза</div>
      <div className="card">
        <div className="card-es">{ex.item.es}</div>
        <Speaker text={ex.item.es} big />
        <div className="card-ru">{ex.item.ru}</div>
        {ex.item.note && <div className="card-note">💡 {ex.item.note}</div>}
      </div>
      <button className="btn primary wide" onClick={onNext}>
        Понятно
      </button>
    </div>
  );
}

export function Choose({ ex, locked, onAnswer }: ExProps<Extract<Exercise, { kind: 'choose' }>>) {
  const [picked, setPicked] = useState<string | null>(null);
  useEffect(() => {
    if (ex.dir !== 'ru-es') speak(ex.item.es);
  }, [ex]);

  const label =
    ex.dir === 'es-ru' ? 'Выберите перевод' : ex.dir === 'ru-es' ? 'Как это по-испански?' : 'Что вы услышали?';

  return (
    <div className="ex">
      <div className="ex-label">{label}</div>
      <div className="prompt">
        {ex.dir === 'es-ru' && (
          <>
            <span className="prompt-text">{ex.item.es}</span>
            <Speaker text={ex.item.es} />
          </>
        )}
        {ex.dir === 'ru-es' && <span className="prompt-text">{ex.item.ru}</span>}
        {ex.dir === 'listen' && <Speaker text={ex.item.es} big />}
      </div>
      <div className="options">
        {ex.options.map((o) => {
          let cls = 'opt';
          if (picked !== null) {
            if (o === ex.answer) cls += ' ok';
            else if (o === picked) cls += ' bad';
          }
          return (
            <button
              key={o}
              className={cls}
              disabled={locked}
              onClick={() => {
                setPicked(o);
                onAnswer(o === ex.answer, ex.answer);
              }}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Build({ ex, locked, onAnswer }: ExProps<Extract<Exercise, { kind: 'build' }>>) {
  const [chosen, setChosen] = useState<number[]>([]);
  const tiles = ex.tiles;

  return (
    <div className="ex">
      <div className="ex-label">Соберите фразу</div>
      <div className="prompt">
        <span className="prompt-text">{ex.item.ru}</span>
      </div>
      <div className="answer-line">
        {chosen.map((idx) => (
          <button
            key={idx}
            className="tile"
            disabled={locked}
            onClick={() => setChosen(chosen.filter((c) => c !== idx))}
          >
            {tiles[idx]}
          </button>
        ))}
      </div>
      <div className="tile-bank">
        {tiles.map((t, idx) => (
          <button
            key={idx}
            className={`tile ${chosen.includes(idx) ? 'used' : ''}`}
            disabled={locked || chosen.includes(idx)}
            onClick={() => setChosen([...chosen, idx])}
          >
            {t}
          </button>
        ))}
      </div>
      {!locked && (
        <button
          className="btn primary wide"
          disabled={chosen.length === 0}
          onClick={() => {
            const attempt = chosen.map((i) => tiles[i]).join(' ');
            onAnswer(normalize(attempt) === normalize(ex.item.es), ex.item.es);
          }}
        >
          Проверить
        </button>
      )}
    </div>
  );
}

export function TypeAnswer({ ex, locked, onAnswer }: ExProps<Extract<Exercise, { kind: 'type' }>>) {
  const [value, setValue] = useState('');
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => ref.current?.focus(), [ex]);

  const submit = () => {
    if (!value.trim() || locked) return;
    onAnswer(normalize(value) === normalize(ex.item.es), ex.item.es);
  };

  return (
    <div className="ex">
      <div className="ex-label">Напишите по-испански</div>
      <div className="prompt">
        <span className="prompt-text">{ex.item.ru}</span>
      </div>
      <input
        ref={ref}
        className="text-input"
        value={value}
        disabled={locked}
        placeholder="Введите перевод…"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && submit()}
      />
      <div className="hint-row">Акценты и знаки ¿ ¡ необязательны.</div>
      {!locked && (
        <button className="btn primary wide" disabled={!value.trim()} onClick={submit}>
          Проверить
        </button>
      )}
    </div>
  );
}

export function Dialogue({ ex, locked, onAnswer }: ExProps<Extract<Exercise, { kind: 'dialogue' }>>) {
  const [picked, setPicked] = useState<string | null>(null);
  const [opts] = useState(() => [...ex.turn.options].sort(() => Math.random() - 0.5));
  useEffect(() => {
    speak(ex.turn.npcEs);
  }, [ex]);
  const answer = ex.turn.options.find((o) => o.ok)!;

  return (
    <div className="ex">
      <div className="ex-label">Диалог{ex.first ? ` · ${ex.scene}` : ''}</div>
      <div className="bubble npc">
        <div className="who">{ex.npc}</div>
        <div className="bubble-es">
          {ex.turn.npcEs} <Speaker text={ex.turn.npcEs} />
        </div>
        <div className="bubble-ru">{ex.turn.npcRu}</div>
      </div>
      <div className="options">
        {opts.map((o) => {
          let cls = 'opt';
          if (picked !== null) {
            if (o.ok) cls += ' ok';
            else if (o.es === picked) cls += ' bad';
          }
          return (
            <button
              key={o.es}
              className={cls}
              disabled={locked}
              onClick={() => {
                setPicked(o.es);
                speak(o.es);
                onAnswer(o.ok, answer.es);
              }}
            >
              {o.es}
              <span className="opt-sub">{o.ru}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
