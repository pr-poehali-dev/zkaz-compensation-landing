import { useMemo, useState } from 'react';
import Icon from '@/components/ui/icon';

const IMAGE = 'https://cdn.poehali.dev/projects/bc95d7d2-5577-46ab-81ff-ded0d2e4bfc4/files/817d909e-08b3-4929-9f06-867718159b41.jpg';
const COLS = 6;
const ROWS = 6;
const RADIUS = 30;

type Tile = { clip: string; cx: number; cy: number; dx: number; rot: number };

const rand = (a: number, b: number) => a + Math.random() * (b - a);

const buildTiles = (): Tile[] => {
  const pts: [number, number][][] = [];
  for (let r = 0; r <= ROWS; r++) {
    const row: [number, number][] = [];
    for (let c = 0; c <= COLS; c++) {
      const edgeX = c === 0 || c === COLS;
      const edgeY = r === 0 || r === ROWS;
      row.push([
        (c / COLS) * 100 + (edgeX ? 0 : rand(-5, 5)),
        (r / ROWS) * 100 + (edgeY ? 0 : rand(-5, 5)),
      ]);
    }
    pts.push(row);
  }
  const tiles: Tile[] = [];
  const add = (a: [number, number], b: [number, number], c: [number, number]) => {
    tiles.push({
      clip: `polygon(${a[0]}% ${a[1]}%, ${b[0]}% ${b[1]}%, ${c[0]}% ${c[1]}%)`,
      cx: (a[0] + b[0] + c[0]) / 3,
      cy: (a[1] + b[1] + c[1]) / 3,
      dx: rand(-60, 60),
      rot: rand(-120, 120),
    });
  };
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const tl = pts[r][c];
      const tr = pts[r][c + 1];
      const bl = pts[r + 1][c];
      const br = pts[r + 1][c + 1];
      if ((r + c) % 2 === 0) {
        add(tl, tr, br);
        add(tl, br, bl);
      } else {
        add(tl, tr, bl);
        add(tr, br, bl);
      }
    }
  }
  return tiles;
};

const HeroBridge = () => {
  const tiles = useMemo(buildTiles, []);
  const [broken, setBroken] = useState<Map<number, number>>(new Map());

  const smash = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setBroken((prev) => {
      const next = new Map(prev);
      tiles.forEach((t, i) => {
        if (next.has(i)) return;
        const d = Math.hypot(t.cx - x, t.cy - y);
        if (d <= RADIUS) next.set(i, d / RADIUS);
      });
      return next;
    });
  };

  return (
    <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 xl:block">
      <div
        onClick={smash}
        className="relative h-[400px] w-[400px] cursor-pointer overflow-hidden rounded-2xl border border-white/10"
      >
        <img src={IMAGE} alt="Коммунальный мост в Красноярске" className="absolute inset-0 h-full w-full object-cover" />
        {tiles.map((t, i) => {
          const d = broken.get(i);
          const isBroken = d !== undefined;
          return (
            <span
              key={i}
              className={`absolute inset-0 bg-navy-deep ${isBroken ? 'glass-fall pointer-events-none' : ''}`}
              style={{
                clipPath: t.clip,
                animationDelay: isBroken ? `${d * 0.25}s` : undefined,
                ['--rot' as string]: `${t.rot}deg`,
                ['--dx' as string]: `${t.dx}px`,
              }}
            />
          );
        })}
      </div>
      {broken.size > 0 && (
        <button
          type="button"
          onClick={() => setBroken(new Map())}
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          <Icon name="RotateCcw" size={16} /> Восстановить
        </button>
      )}
    </div>
  );
};

export default HeroBridge;
