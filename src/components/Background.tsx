import { useEffect, useRef } from 'react';

// Светлый фон с глубиной: небо, солнечный свет и три слоя силуэтов достопримечательностей Испании.
// Дальний слой самый бледный, ближний самый насыщенный. Слои слегка смещаются за курсором.

const crenels = (x0: number, x1: number, y: number, step = 16) => {
  const out: JSX.Element[] = [];
  for (let x = x0; x < x1; x += step) out.push(<rect key={`${x0}-${x}-${y}`} x={x} y={y} width={step / 2} height={9} />);
  return out;
};

// Акведук в Сеговии: два яруса арок вырезаны через evenodd
export function aqueductPath(): string {
  const W = 408;
  let d = `M0 0 H${W} V-62 H0 Z M0 -62 H${W} V-112 H0 Z`;
  for (let i = 0; i < 12; i++) {
    const x = 5 + i * 34;
    d += ` M${x} 0 V-34 A12 12 0 0 1 ${x + 24} -34 V0 Z`;
  }
  for (let i = 0; i < 12; i++) {
    const x = 9 + i * 34;
    d += ` M${x} -62 V-82 A8 8 0 0 1 ${x + 16} -82 V-62 Z`;
  }
  return d;
}

export function Windmill({ x, y, s, r }: { x: number; y: number; s: number; r: number }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <polygon points="-15,0 -9,-52 9,-52 15,0" />
      <polygon points="-12,-52 0,-70 12,-52" />
      <g transform={`translate(0,-58) rotate(${r})`} stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
        <line x1="-46" y1="-46" x2="46" y2="46" />
        <line x1="46" y1="-46" x2="-46" y2="46" />
        <line x1="-46" y1="-46" x2="-34" y2="-52" />
        <line x1="46" y1="-46" x2="52" y2="-34" />
        <line x1="46" y1="46" x2="34" y2="52" />
        <line x1="-46" y1="46" x2="-52" y2="34" />
      </g>
    </g>
  );
}

export function SagradaFamilia() {
  const towers: [number, number][] = [
    [-84, 196],
    [-42, 232],
    [0, 300],
    [42, 232],
    [84, 196],
  ];
  return (
    <g>
      <rect x="-118" y="-80" width="236" height="80" />
      <rect x="-104" y="-96" width="208" height="16" />
      {towers.map(([cx, h]) => (
        <g key={cx}>
          <polygon points={`${cx - 15},-96 ${cx - 10},${-h + 34} ${cx},${-h} ${cx + 10},${-h + 34} ${cx + 15},-96`} />
          <circle cx={cx} cy={-h - 5} r="5" />
        </g>
      ))}
      <rect x="-62" y="-130" width="124" height="34" />
      <rect x="-5" y={-330} width="10" height="40" />
    </g>
  );
}

export function Alhambra() {
  return (
    <g>
      <rect x="0" y="-52" width="430" height="52" />
      {crenels(0, 430, -61)}
      <rect x="40" y="-112" width="64" height="62" />
      {crenels(40, 104, -121, 16)}
      <rect x="318" y="-150" width="58" height="100" />
      {crenels(318, 376, -159, 14.5)}
      <rect x="200" y="-92" width="70" height="42" />
      {crenels(200, 270, -101, 14)}
      <rect x="338" y="-166" width="18" height="16" />
    </g>
  );
}

export function Giralda() {
  return (
    <g>
      <rect x="-32" y="-184" width="64" height="184" />
      <rect x="-26" y="-234" width="52" height="50" />
      <rect x="-17" y="-262" width="34" height="28" />
      <path d="M-15 -262 Q0 -292 15 -262 Z" />
      <rect x="-2" y="-300" width="4" height="22" />
      <circle cx="0" cy="-304" r="6" />
      <g fill="#fff" opacity="0.28">
        <rect x="-8" y="-168" width="16" height="30" rx="8" />
        <rect x="-8" y="-120" width="16" height="30" rx="8" />
        <rect x="-8" y="-72" width="16" height="30" rx="8" />
        <rect x="-14" y="-226" width="10" height="26" rx="5" />
        <rect x="4" y="-226" width="10" height="26" rx="5" />
      </g>
    </g>
  );
}

export function PuertaAlcala() {
  return (
    <g>
      <rect x="-90" y="-74" width="180" height="74" />
      <rect x="-96" y="-96" width="192" height="22" />
      <polygon points="-46,-96 0,-122 46,-96" />
      <rect x="-14" y="-146" width="28" height="24" />
      <g fill="#fff" opacity="0.28">
        <rect x="-18" y="-60" width="36" height="60" rx="18" />
        <rect x="-62" y="-50" width="22" height="50" rx="11" />
        <rect x="40" y="-50" width="22" height="50" rx="11" />
      </g>
    </g>
  );
}

export default function Background() {
  const far = useRef<SVGGElement>(null);
  const mid = useRef<SVGGElement>(null);
  const near = useRef<SVGGElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (far.current) far.current.style.transform = `translateX(${x * -8}px)`;
        if (mid.current) mid.current.style.transform = `translateX(${x * -18}px)`;
        if (near.current) near.current.style.transform = `translateX(${x * -34}px)`;
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="bg" aria-hidden="true">
      <div className="bg-sun" />
      <div className="bg-glow bg-glow-a" />
      <div className="bg-glow bg-glow-b" />
      <svg className="bg-svg" viewBox="0 0 1600 380" preserveAspectRatio="xMidYMax slice">
        <g ref={far} className="layer" style={{ color: '#f1c5ac' }} fill="#f1c5ac" opacity="0.7">
          <path d="M0 380 V318 Q200 292 420 316 T860 304 T1300 318 T1600 300 V380 Z" />
          <g transform="translate(70,352) scale(0.9)">
            <Alhambra />
          </g>
          <g transform="translate(900,350) scale(0.9)">
            <path d={aqueductPath()} fillRule="evenodd" />
          </g>
        </g>
        <g ref={mid} className="layer" style={{ color: '#e6a58b' }} fill="#e6a58b" opacity="0.78">
          <path d="M0 380 V336 Q260 312 520 334 T1040 326 T1600 332 V380 Z" />
          <g transform="translate(470,350)">
            <Giralda />
          </g>
          <g transform="translate(1260,352) scale(0.95)">
            <PuertaAlcala />
          </g>
        </g>
        <g ref={near} className="layer" style={{ color: '#d1806a' }} fill="#d1806a" opacity="0.85">
          <path d="M0 380 V352 Q240 326 480 350 T980 342 T1600 350 V380 Z" />
          <g transform="translate(790,356)">
            <SagradaFamilia />
          </g>
          <path d="M-60 380 Q120 300 300 380 Z" />
          <Windmill x={140} y={330} s={0.85} r={12} />
          <Windmill x={250} y={348} s={0.6} r={40} />
          <path d="M1300 380 Q1470 304 1640 380 Z" />
          <Windmill x={1460} y={335} s={0.8} r={28} />
        </g>
      </svg>
    </div>
  );
}
