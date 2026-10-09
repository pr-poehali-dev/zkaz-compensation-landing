import { useMemo, useState } from 'react';
import Icon from '@/components/ui/icon';

const TARGET = 'ПРАВДА';
const COLORS = ['#facc15', '#fde047', '#ffffff', '#f59e0b', '#fbbf24'];

type Props = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

const Confetti = () => {
  const pieces = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 1.8 + Math.random() * 1.4,
        color: COLORS[i % COLORS.length],
        rotate: Math.random() * 360,
      })),
    [],
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-[9990] overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
};

const WordGame = ({ text, className, style }: Props) => {
  const [step, setStep] = useState(0);
  const [painted, setPainted] = useState<Set<number>>(new Set());
  const [missed, setMissed] = useState<number | null>(null);
  const [round, setRound] = useState(0);

  const won = step >= TARGET.length;

  const hit = (i: number, ch: string) => {
    if (won || painted.has(i)) return;
    if (ch.toUpperCase() === TARGET[step]) {
      setPainted((prev) => new Set(prev).add(i));
      setStep((s) => s + 1);
    } else {
      setMissed(i);
      window.setTimeout(() => setMissed((m) => (m === i ? null : m)), 350);
    }
  };

  const reset = () => {
    setStep(0);
    setPainted(new Set());
    setMissed(null);
    setRound((r) => r + 1);
  };

  let index = 0;
  const words = text.split(' ');

  return (
    <>
      <h1 className={className} style={style}>
        {words.map((word, w) => (
          <span key={w}>
            <span className="inline-block whitespace-nowrap">
              {word.split('').map((ch) => {
                const i = index++;
                const state = painted.has(i) ? 'text-gold' : missed === i ? 'text-red-400' : '';
                return (
                  <span key={i} onClick={() => hit(i, ch)} className={`transition-colors duration-300 ${state}`}>
                    {ch}
                  </span>
                );
              })}
            </span>
            {w < words.length - 1 && ' '}
          </span>
        ))}
      </h1>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
          Игра: найди в заголовке буквы по порядку
        </span>
        <div className="flex gap-1.5">
          {TARGET.split('').map((ch, i) => (
            <span
              key={i}
              className={`flex h-9 w-9 items-center justify-center rounded-md border font-display text-lg font-black transition ${
                i < step
                  ? 'border-gold bg-gold text-navy-deep'
                  : i === step && !won
                    ? 'border-gold/70 bg-white/5 text-white animate-pulse'
                    : 'border-white/15 bg-white/5 text-white/30'
              }`}
            >
              {ch}
            </span>
          ))}
        </div>
      </div>

      {won && (
        <div key={round} className="mt-4 flex flex-wrap items-center gap-4 animate-scale-in">
          <Confetti />
          <p className="flex items-center gap-2 font-display text-lg font-bold text-gold">
            <Icon name="Trophy" size={20} /> Победа! Правда на вашей стороне
          </p>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Icon name="RotateCcw" size={16} /> Сыграть ещё
          </button>
        </div>
      )}
    </>
  );
};

export default WordGame;
