import Icon from '@/components/ui/icon';
import CallPicker from '@/components/landing/CallPicker';
import { useState } from 'react';

const defects = [
  { icon: 'Square', title: 'Окна и стеклопакеты', text: 'Продувание, перекосы, трещины, нарушенный монтажный шов', amount: 'до 120 000 ₽' },
  { icon: 'PaintRoller', title: 'Стены и потолки', text: 'Отклонения от вертикали, неровная штукатурка, трещины', amount: 'до 150 000 ₽' },
  { icon: 'Layers', title: 'Полы и стяжка', text: 'Перепады высот, пустоты, отслоение стяжки', amount: 'до 100 000 ₽' },
  { icon: 'DoorClosed', title: 'Двери и замки', text: 'Перекос коробки, плохое прилегание, неисправные замки', amount: 'до 50 000 ₽' },
  { icon: 'Zap', title: 'Электрика', text: 'Нарушения в проводке, розетках и щитке', amount: 'до 80 000 ₽' },
  { icon: 'Droplets', title: 'Сантехника и отопление', text: 'Протечки, слабый напор, неверный монтаж радиаторов', amount: 'до 90 000 ₽' },
];

type Coin = { id: number; dx: number; up: number; fall: number; size: number; delay: number; dur: number; spin: number };
type Burst = { id: number; x: number; y: number; coins: Coin[] };

const rand = (a: number, b: number) => a + Math.random() * (b - a);

const makeBurst = (id: number, x: number, y: number): Burst => ({
  id,
  x,
  y,
  coins: Array.from({ length: 16 }, (_, i) => ({
    id: i,
    dx: rand(-110, 110),
    up: rand(50, 130),
    fall: rand(160, 320),
    size: rand(18, 28),
    delay: rand(0, 0.12),
    dur: rand(0.9, 1.4),
    spin: rand(360, 900),
  })),
});

const DefectsBlock = () => {
  const [bursts, setBursts] = useState<Burst[]>([]);

  const drop = (e: React.MouseEvent) => {
    const id = Date.now() + Math.random();
    setBursts((b) => [...b, makeBurst(id, e.clientX, e.clientY)]);
    window.setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 1800);
  };

  return (
    <div>
      <div className="pointer-events-none fixed inset-0 z-[9990] overflow-hidden">
        {bursts.map((b) =>
          b.coins.map((c) => (
            <span
              key={`${b.id}-${c.id}`}
              className="coin-drop"
              style={{
                left: b.x,
                top: b.y,
                width: c.size,
                height: c.size,
                fontSize: c.size * 0.6,
                animationDelay: `${c.delay}s`,
                animationDuration: `${c.dur}s`,
                ['--dx' as string]: `${c.dx}px`,
                ['--up' as string]: `${c.up}px`,
                ['--fall' as string]: `${c.fall}px`,
                ['--spin' as string]: `${c.spin}deg`,
              }}
            >
              ₽
            </span>
          )),
        )}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {defects.map((d) => (
          <div key={d.title} onClick={drop} className="flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
              <Icon name={d.icon} fallback="Wrench" size={24} />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-navy">{d.title}</h3>
            <p className="mt-1 flex-1 text-sm text-muted-foreground">{d.text}</p>
            <p className="mt-4 font-display text-xl font-black text-gold">{d.amount}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-navy-deep p-8 text-white sm:flex-row">
        <div>
          <p className="font-display text-xl font-bold">Не уверены, есть ли дефекты у вас?</p>
          <p className="mt-1 text-sm text-white/70">Дефекты есть в каждой квартире — их просто не видно без экспертного осмотра.</p>
        </div>
        <CallPicker           className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-gold px-7 py-4 font-display text-base font-bold text-navy-deep transition hover:brightness-110">Позвонить</CallPicker>
      </div>
    </div>
  );
};

export default DefectsBlock;