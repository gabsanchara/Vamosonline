import { useState } from 'react';
import type { Gender, Profile } from '../types';

// Первый вход: имя и род героя истории. Потом их можно поменять в «Профиле».
export default function Onboarding({
  initial,
  onSave,
  onBack,
}: {
  initial?: Profile;
  onSave: (p: Profile) => void;
  onBack?: () => void;
}) {
  const [name, setName] = useState(initial?.name ?? '');
  const [gender, setGender] = useState<Gender | null>(initial?.gender ?? null);
  const ready = name.trim().length > 0 && gender !== null;
  const save = () => ready && onSave({ name: name.trim(), gender: gender! });

  return (
    <div className="screen">
      {onBack && (
        <button className="back" onClick={onBack}>
          ← Назад
        </button>
      )}
      <div className="onb">
        <div className="intro-emoji">{initial ? '🙂' : '👋'}</div>
        <h1>{initial ? 'Профиль' : '¡Hola! Давайте познакомимся'}</h1>
        {!initial && (
          <p className="muted onb-lead">
            Курс — это история: вы переезжаете в Мадрид, заводите друзей, путешествуете по Испании и разгадываете
            тайну старого письма. Главный герой — вы.
          </p>
        )}

        <label className="onb-field">
          <span>Как вас зовут?</span>
          <input
            className="text-input"
            value={name}
            maxLength={24}
            placeholder="Например, Аня"
            autoFocus={!initial}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && save()}
          />
        </label>

        <div className="onb-field">
          <span>Как к вам обращаться?</span>
          <div className="onb-gender">
            <button className={`opt ${gender === 'm' ? 'ok' : ''}`} onClick={() => setGender('m')}>
              В мужском роде
              <span className="opt-sub">Estoy cansado · Я устал</span>
            </button>
            <button className={`opt ${gender === 'f' ? 'ok' : ''}`} onClick={() => setGender('f')}>
              В женском роде
              <span className="opt-sub">Estoy cansada · Я устала</span>
            </button>
          </div>
        </div>

        <button className="btn primary wide" disabled={!ready} onClick={save}>
          {initial ? 'Сохранить' : '¡Vamos!'}
        </button>
      </div>
    </div>
  );
}
