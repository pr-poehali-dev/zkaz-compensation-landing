import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const GavelCursor = () => {
  const posRef = useRef<HTMLDivElement>(null);
  const swingRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const pos = posRef.current;
    const swing = swingRef.current;
    const ripple = rippleRef.current;
    if (!pos || !swing || !ripple) return;

    let hideTimer = 0;

    const strike = () => {
      swing.classList.remove('gavel-strike');
      ripple.classList.remove('gavel-ripple');
      void swing.offsetWidth;
      swing.classList.add('gavel-strike');
      ripple.classList.add('gavel-ripple');
    };

    const place = (x: number, y: number) => {
      pos.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
    };

    if (fine) {
      document.documentElement.classList.add('gavel-cursor');

      const onMove = (e: MouseEvent) => {
        pos.style.opacity = '1';
        place(e.clientX, e.clientY);
      };
      const onDown = () => strike();
      const onLeave = () => {
        pos.style.opacity = '0';
      };

      window.addEventListener('mousemove', onMove);
      window.addEventListener('mousedown', onDown);
      document.addEventListener('mouseleave', onLeave);

      return () => {
        document.documentElement.classList.remove('gavel-cursor');
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mousedown', onDown);
        document.removeEventListener('mouseleave', onLeave);
      };
    }

    const onTouch = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') return;
      window.clearTimeout(hideTimer);
      place(e.clientX, e.clientY);
      pos.style.transition = 'none';
      pos.style.opacity = '1';
      strike();
      hideTimer = window.setTimeout(() => {
        pos.style.transition = 'opacity 0.3s';
        pos.style.opacity = '0';
      }, 450);
    };

    window.addEventListener('pointerdown', onTouch);
    return () => {
      window.clearTimeout(hideTimer);
      window.removeEventListener('pointerdown', onTouch);
    };
  }, []);

  return (
    <>
      <div
        ref={rippleRef}
        className="pointer-events-none fixed z-[9998] h-10 w-10 rounded-full border-2 border-gold opacity-0"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={posRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0"
        style={{ willChange: 'transform' }}
      >
        <div ref={swingRef} className="gavel-swing" style={{ transformOrigin: '28px 28px', width: 34, height: 34 }}>
          <div className="block leading-none" style={{ transform: 'scaleX(-1)' }}>
            <Icon name="Gavel" size={34} className="text-gold drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GavelCursor;
