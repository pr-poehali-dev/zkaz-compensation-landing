import { useEffect, useRef, useState } from 'react';

type Counter = {
  to: number;
  from?: number;
  decimals?: number;
  suffix: string;
  label: string;
};

const COUNTERS: Counter[] = [
  { to: 24, suffix: '/7', label: 'Отвечаем на ваши вопросы в чате' },
  { to: 1000, suffix: '+', label: 'Выигранных дел' },
  { to: 14, suffix: '+ лет', label: 'Опыта работы с застройщиками' },
];

const DURATION = 1800;

const useCountUp = (to: number, decimals: number, start: boolean, from = 0) => {
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / DURATION, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(from + (to - from) * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to, from, start]);

  return value.toLocaleString('ru-RU', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

const CounterItem = ({ to, from, decimals = 0, suffix, label, start }: Counter & { start: boolean }) => {
  const text = useCountUp(to, decimals, start, from);
  return (
    <div>
      <p className="font-display text-3xl font-black text-gold md:text-4xl">
        {text}
        {suffix}
      </p>
      <p className="mt-1 text-xs text-white/60 md:text-sm">{label}</p>
    </div>
  );
};

const HeroCounters = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mt-12 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3"
    >
      {COUNTERS.map((c) => (
        <CounterItem key={c.label} {...c} start={start} />
      ))}
    </div>
  );
};

export default HeroCounters;
