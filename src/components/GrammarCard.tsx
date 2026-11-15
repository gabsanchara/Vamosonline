import type { Grammar } from '../types';

// Ячейка таблицы: части через «·», у части может быть префикс m:/f:/b:
function Cell({ text }: { text: string }) {
  return (
    <>
      {text.split('·').map((part, i) => {
        // «обычный текст b:выделенный хвост» — маркер может стоять и в середине
        const m = part.match(/^(.*?)(?:^|\s)([mfb]):(.*)$/);
        if (!m) return <span key={i}>{part}</span>;
        const cls = m[2] === 'm' ? 'tm' : m[2] === 'f' ? 'tf' : 'tb';
        return (
          <span key={i}>
            {m[1] && <>{m[1]} </>}
            <span className={cls}>{m[3]}</span>
          </span>
        );
      })}
    </>
  );
}

export default function GrammarCard({
  g,
  onStart,
  onBack,
  label = 'Перейти к заданиям',
}: {
  g: Grammar;
  onStart?: () => void;
  onBack: () => void;
  label?: string;
}) {
  return (
    <div className="screen">
      <button className="back" onClick={onBack}>
        ← Назад
      </button>
      <div className="day-chip">День {g.day} · Разбор</div>
      <h1>
        {g.emoji} {g.title}
      </h1>

      <div className="g-rule">
        {g.rule.map((r, i) => (
          <p key={i}>{r}</p>
        ))}
      </div>

      <h2 className="g-h">Запоминалки</h2>
      <div className="g-mnem">
        {g.mnemonics.map((m, i) => (
          <div className="mnem" key={i}>
            <span className="mnem-icon">{m.icon}</span>
            <span>{m.text}</span>
          </div>
        ))}
      </div>

      {g.tables?.map((t, ti) => (
        <div className="g-table-wrap" key={ti}>
          {t.title && <h2 className="g-h">{t.title}</h2>}
          <table className="g-table">
            <thead>
              <tr>
                {t.head.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.rows.map((r, ri) => (
                <tr key={ri}>
                  {r.map((c, ci) => (
                    <td key={ci}>
                      <Cell text={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {g.examples && g.examples.length > 0 && (
        <>
          <h2 className="g-h">Примеры</h2>
          <div className="g-ex">
            {g.examples.map(([es, ru], i) => (
              <div key={i}>
                <b>{es}</b>
                <em>{ru}</em>
              </div>
            ))}
          </div>
        </>
      )}

      {onStart && (
        <button className="btn primary wide" onClick={onStart}>
          {label}
        </button>
      )}
    </div>
  );
}
