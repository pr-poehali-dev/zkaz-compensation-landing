import { useState } from 'react';
import Icon from '@/components/ui/icon';

type Crack = {
  top: string;
  bottom: string;
  rot: number;
  dx: number;
  delay: number;
  shards: { left: number; size: number; dx: number; rot: number; delay: number }[];
};

const rand = (a: number, b: number) => a + Math.random() * (b - a);

const makeCrack = (): Crack => {
  const base = rand(38, 58);
  const pts = [0, 20, 40, 60, 80, 100].map((x, i) => [x, i === 0 || i === 5 ? base + rand(-6, 6) : base + rand(-16, 16)]);
  const line = pts.map(([x, y]) => `${x}% ${y.toFixed(1)}%`).join(', ');
  const back = [...pts].reverse().map(([x, y]) => `${x}% ${y.toFixed(1)}%`).join(', ');
  return {
    top: `polygon(0% 0%, 100% 0%, ${back})`,
    bottom: `polygon(${line}, 100% 100%, 0% 100%)`,
    rot: rand(-35, 35),
    dx: rand(-30, 30),
    delay: rand(0, 0.08),
    shards: Array.from({ length: 4 }, () => ({
      left: rand(5, 85),
      size: rand(5, 11),
      dx: rand(-50, 50),
      rot: rand(-300, 300),
      delay: rand(0, 0.15),
    })),
  };
};

const GlassTitle = ({ text, className }: { text: string; className?: string }) => {
  const [cracks, setCracks] = useState<Record<number, Crack>>({});

  const smash = (i: number) => {
    setCracks((prev) => (prev[i] ? prev : { ...prev, [i]: makeCrack() }));
  };

  const restore = () => setCracks({});

  let index = 0;
  const words = text.split(' ');

  return (
    <>
      <h1 className={className}>
        {words.map((word, w) => (
          <span key={w}>
            <span className="inline-block whitespace-nowrap">
              {word.split('').map((ch) => {
                const i = index++;
                const c = cracks[i];
                return (
                  <span key={i} onClick={() => smash(i)} className="relative inline-block">
                    <span style={c ? { clipPath: c.top } : undefined}>{ch}</span>
                    {c && (
                      <>
                        <span
                          aria-hidden
                          className="glass-fall pointer-events-none absolute inset-0"
                          style={{
                            clipPath: c.bottom,
                            animationDelay: `${c.delay}s`,
                            ['--rot' as string]: `${c.rot}deg`,
                            ['--dx' as string]: `${c.dx}px`,
                          }}
                        >
                          {ch}
                        </span>
                        {c.shards.map((s, k) => (
                          <span
                            key={k}
                            aria-hidden
                            className="glass-fall pointer-events-none absolute bg-white/80"
                            style={{
                              top: '50%',
                              left: `${s.left}%`,
                              width: s.size,
                              height: s.size,
                              clipPath: 'polygon(50% 0%, 100% 100%, 0% 80%)',
                              animationDelay: `${s.delay}s`,
                              ['--rot' as string]: `${s.rot}deg`,
                              ['--dx' as string]: `${s.dx}px`,
                            }}
                          />
                        ))}
                      </>
                    )}
                  </span>
                );
              })}
            </span>
            {w < words.length - 1 && ' '}
          </span>
        ))}
      </h1>
      {Object.keys(cracks).length > 0 && (
        <button
          type="button"
          onClick={restore}
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          <Icon name="RotateCcw" size={16} /> Восстановить вывеску
        </button>
      )}
    </>
  );
};

export default GlassTitle;
