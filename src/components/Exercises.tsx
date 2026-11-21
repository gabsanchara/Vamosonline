import { useEffect, useRef, useState } from 'react';
import type { Exercise } from '../types';
import { normalize, shuffle } from '../engine/generate';
import { speak } from '../engine/tts';

export interface ExProps<T extends Exercise = Exercise> {
  ex: T;
  locked: boolean;
  onAnswer: (ok: boolean, solution: string, why?: string) => void;
}

// Выбор варианта клавишами 1–9 на компьютере.
export function useNumberKeys(count: number, onPick: (i: number) => void, disabled: boolean) {
  const pick = useRef(onPick);
  pick.current = onPick;
  useEffect(() => {
    if (disabled) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey || e.repeat) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
      const n = Number(e.key);
      if (Number.isInteger(n) && n >= 1 && n <= count) {
        e.preventDefault();
        pick.current(n - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [count, disabled]);
}

export const OptKey = ({ n }: { n: number }) => (
  <span className="opt-key" aria-hidden="true">
    {n}
  </span>
);

// Выделяет в предложении нужную форму: «Yo me **llamo** Pablo».
function Highlight({ text, part }: { text: string; part: string }) {
  const i = part ? text.toLowerCase().indexOf(part.toLowerCase()) : -1;
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <mark className="ex-mark">{text.slice(i, i + part.length)}</mark>
      {text.slice(i + part.length)}
    </>
  );
}

// «Как это работает»: грамматика на примере предложения — фраза, выделенная форма, объяснение.
export function ExampleCard({ ex, onNext }: { ex: Extract<Exercise, { kind: 'example' }>; onNext: () => void }) {
  const { drill } = ex;
  const es = drill.es ?? '';
  useEffect(() => {
    if (es) speak(es);
  }, [es]);
  return (
    <div className="ex">
      <div className="ex-label">Как это работает · {ex.topic}</div>
      <div className="card example">
        {es && (
          <div className="example-es">
            <Highlight text={es} part={drill.answer} />
          </div>
        )}
        {es && <Speaker text={es} />}
        {drill.ru && <div className="card-ru">{drill.ru}</div>}
        <div className="example-why">💡 {drill.why}</div>
        {ex.mnemonic && (
          <div className="mnem">
            <span className="mnem-icon">{ex.mnemonic.icon}</span>
            <span>{ex.mnemonic.text}</span>
          </div>
        )}
      </div>
      <button className="btn primary wide" onClick={onNext}>
        Понятно
      </button>
    </div>
  );
}

export function DrillEx({ ex, locked, onAnswer }: ExProps<Extract<Exercise, { kind: 'drill' }>>) {
  const [picked, setPicked] = useState<string | null>(null);
  const [opts] = useState(() => shuffle(ex.drill.options));
  const pick = (o: string) => {
    if (locked || picked !== null) return;
    setPicked(o);
    if (ex.drill.es) speak(ex.drill.es);
    onAnswer(o === ex.drill.answer, ex.drill.answer, ex.drill.why);
  };
  useNumberKeys(opts.length, (i) => pick(opts[i]), locked);
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
        {opts.map((o, i) => {
          let cls = 'opt';
          if (picked !== null) {
            if (o === ex.drill.answer) cls += ' ok';
            else if (o === picked) cls += ' bad';
          }
          return (
            <button key={o} className={cls} disabled={locked} onClick={() => pick(o)}>
              {o}
              <OptKey n={i + 1} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Speaker({ text, big, voice }: { text: string; big?: boolean; voice?: string }) {
  return (
    <span className="speakers">
      <button className={`speaker ${big ? 'big' : ''}`} onClick={() => speak(text, false, voice)} aria-label="Прослушать">
        🔊
      </button>
      <button className="speaker slow" onClick={() => speak(text, true, voice)} aria-label="Медленно">
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
        <div className="repeat-hint">🔁 Повторите вслух за озвучкой</div>
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

  const pick = (o: string) => {
    if (locked || picked !== null) return;
    setPicked(o);
    onAnswer(o === ex.answer, ex.answer);
  };
  useNumberKeys(ex.options.length, (i) => pick(ex.options[i]), locked);

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
        {ex.options.map((o, i) => {
          let cls = 'opt';
          if (picked !== null) {
            if (o === ex.answer) cls += ' ok';
            else if (o === picked) cls += ' bad';
          }
          return (
            <button key={o} className={cls} disabled={locked} onClick={() => pick(o)}>
              {o}
              <OptKey n={i + 1} />
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
  useEffect(() => {
    ref.current?.focus();
  }, [ex]);

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
