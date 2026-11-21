import { useEffect, useMemo, useRef, useState } from 'react';
import type { Reply, StoryLine } from '../types';
import { CHARACTERS, sceneFor, voiceOf } from '../content/story/index';
import { tokenize, plainText } from '../engine/gloss';
import { speak } from '../engine/tts';
import { shuffle } from '../engine/generate';
import { useProfile, usePersonalize } from '../engine/profile';
import { OptKey, Speaker, useNumberKeys } from './Exercises';

// Сцена эпизода в виде переписки. Персонажи говорят своими голосами, герой отвечает выбором.
// Ошибка не отправляет сцену в конец урока: показываем «почему нет» и даём выбрать снова.
// В onDone уходит результат каждой реплики героя: верно ли с первой попытки.

const DEFAULT_WHY = 'Этот ответ здесь не подходит по смыслу. Попробуйте ещё раз.';

// Следующая остановка после индекса from: реплика персонажа, за которой сразу идёт выбор героя,
// кнопки «Дальше» не требует — варианты ответа появляются сразу под ней.
function nextStop(lines: StoryLine[], from: number): number {
  let p = from + 1;
  while (p < lines.length && lines[p].kind !== 'reply' && lines[p + 1]?.kind === 'reply') p++;
  return p;
}

function NpcLine({ line, active }: { line: Extract<StoryLine, { kind: 'line' }>; active: boolean }) {
  const t = usePersonalize();
  const c = CHARACTERS[line.who];
  const es = t(line.es);
  const [showRu, setShowRu] = useState(false);
  const [word, setWord] = useState<number | null>(null);
  const pieces = useMemo(() => tokenize(es), [es]);
  const picked = word !== null ? pieces[word] : null;
  return (
    <div className={`msg npc ${active ? 'active' : ''}`} style={{ ['--who' as string]: c.color }}>
      <div className="msg-avatar" aria-hidden="true">
        {c.emoji}
      </div>
      <div className="msg-body">
        <div className="msg-who">{line.as ?? c.name}</div>
        <div className="msg-es">
          {pieces.map((p, i) => (
            <button
              key={i}
              className={`tw ${word === i ? 'on' : ''}`}
              onClick={() => setWord(word === i ? null : i)}
              aria-label={p.gloss ? `${p.text}: ${p.gloss}` : p.text}
            >
              {p.text}
            </button>
          ))}
        </div>
        {picked?.gloss && (
          <div className="gloss-tip">
            <b>{picked.text.replace(/[¿?¡!.,;:…]/g, '')}</b> — {picked.gloss}
          </div>
        )}
        <div className="msg-tools">
          <Speaker text={plainText(es)} voice={voiceOf(line.who)} />
          <button className="msg-ru-toggle" onClick={() => setShowRu((v) => !v)}>
            {showRu ? 'Скрыть перевод' : 'Перевод'}
          </button>
        </div>
        {showRu && <div className="msg-ru">{t(line.ru)}</div>}
        {line.note && <div className="msg-note">💡 {t(line.note)}</div>}
      </div>
    </div>
  );
}

function HeroLine({ reply, note }: { reply: Reply; note?: string }) {
  const t = usePersonalize();
  const profile = useProfile();
  const c = CHARACTERS.hero;
  const es = t(reply.es);
  return (
    <div className="msg hero" style={{ ['--who' as string]: c.color }}>
      <div className="msg-body">
        <div className="msg-who">{profile?.name || c.name}</div>
        <div className="msg-es plain">{es}</div>
        <div className="msg-tools">
          <Speaker text={es} voice={voiceOf('hero', profile?.gender)} />
        </div>
        <div className="msg-ru">{t(reply.ru)}</div>
        {note && <div className="msg-note">💡 {t(note)}</div>}
      </div>
      <div className="msg-avatar" aria-hidden="true">
        {profile?.gender === 'f' ? '🙋‍♀️' : '🙋‍♂️'}
      </div>
    </div>
  );
}

export default function Scene({ lessonId, onDone }: { lessonId: string; onDone: (results: boolean[]) => void }) {
  const t = usePersonalize();
  const profile = useProfile();
  const lines = useMemo(() => sceneFor(lessonId), [lessonId]);
  const [pos, setPos] = useState(() => nextStop(lines, -1));
  const [results, setResults] = useState<boolean[]>([]);
  const [wrong, setWrong] = useState<string[]>([]); // неверно выбранные варианты текущей реплики
  const [showRu, setShowRu] = useState(false);
  const bottom = useRef<HTMLDivElement>(null);
  const spokenUpTo = useRef(-1);

  const current = lines[pos];
  const finished = pos >= lines.length;

  // Варианты ответа перемешиваем один раз для каждой реплики героя
  const options = useMemo(
    () =>
      lines.map((l) =>
        l.kind === 'reply' ? shuffle([{ ...l.ok, isOk: true }, ...l.bad.map((b) => ({ ...b, isOk: false }))]) : [],
      ),
    [lines],
  );

  // Новая реплика персонажа звучит сама, экран прокручивается вниз
  useEffect(() => {
    for (let i = pos; i > spokenUpTo.current; i--) {
      const l = lines[i];
      if (l?.kind === 'line') {
        speak(plainText(t(l.es)), false, voiceOf(l.who));
        break;
      }
    }
    spokenUpTo.current = Math.max(spokenUpTo.current, pos);
    bottom.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }, [pos, lines, t]);

  const advance = () => {
    setWrong([]);
    setPos(nextStop(lines, pos));
  };

  const pick = (k: number) => {
    if (current?.kind !== 'reply') return;
    const o = options[pos][k];
    if (!o || wrong.includes(o.es)) return;
    if (!o.isOk) {
      setWrong((w) => [...w, o.es]);
      return;
    }
    setResults((r) => [...r, wrong.length === 0]);
    speak(t(o.es), false, voiceOf('hero', profile?.gender));
    advance();
  };

  useNumberKeys(current?.kind === 'reply' ? options[pos].length : 0, pick, current?.kind !== 'reply');

  // Enter — «Дальше»
  const enter = useRef<() => void>(() => {});
  enter.current = () => {
    if (finished) onDone(results);
    else if (current && current.kind !== 'reply') advance();
  };
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' || e.repeat) return;
      e.preventDefault();
      enter.current();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const lastWrong = current?.kind === 'reply' && wrong.length ? options[pos].find((o) => o.es === wrong[wrong.length - 1]) : null;

  return (
    <div className="ex scene">
      <div className="ex-label">🎬 Сцена</div>
      <div className="chat">
        {lines.slice(0, Math.min(pos + 1, lines.length)).map((l, i) => {
          if (l.kind === 'narr') return <div key={i} className="narr">{t(l.ru)}</div>;
          if (l.kind === 'line') return <NpcLine key={i} line={l} active={i === pos} />;
          if (i < pos) return <HeroLine key={i} reply={l.ok} note={l.note} />;
          return null;
        })}
      </div>

      <div ref={bottom} className="scene-controls">
        {current?.kind === 'reply' && (
          <>
            <div className="scene-ask">Ваш ответ:</div>
            <div className="options">
              {options[pos].map((o, k) => (
                <button
                  key={o.es}
                  className={`opt ${wrong.includes(o.es) ? 'bad' : ''}`}
                  disabled={wrong.includes(o.es)}
                  onClick={() => pick(k)}
                >
                  {t(o.es)}
                  {showRu && <span className="opt-sub">{t(o.ru)}</span>}
                  <OptKey n={k + 1} />
                </button>
              ))}
            </div>
            {lastWrong && <div className="why-box">💡 {t(lastWrong.why ?? DEFAULT_WHY)}</div>}
            <button className="hint-toggle" onClick={() => setShowRu((v) => !v)}>
              {showRu ? 'Скрыть перевод вариантов' : 'Показать перевод вариантов'}
            </button>
          </>
        )}
        {current && current.kind !== 'reply' && (
          <button className="btn primary wide" onClick={advance}>
            Дальше
          </button>
        )}
        {finished && (
          <div className="scene-done">
            <b>🎬 Сцена пройдена</b>
            <span className="muted">
              С первой попытки: {results.filter(Boolean).length} из {results.length}
            </span>
            <button className="btn primary wide" onClick={() => onDone(results)}>
              Дальше
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
