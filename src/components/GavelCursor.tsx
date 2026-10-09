import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const GavelCursor = () => {
  const posRef = useRef<HTMLDivElement>(null);
  const swingRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;

    document.documentElement.classList.add('gavel-cursor');
    const pos = posRef.current;
    const swing = swingRef.current;
    const ripple = rippleRef.current;
    if (!pos || !swing || !ripple) return;

    const onMove = (e: MouseEvent) => {
      pos.style.opacity = '1';
      pos.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
    };

    const onDown = () => {
      swing.classList.remove('gavel-strike');
      ripple.classList.remove('gavel-ripple');
      void swing.offsetWidth;
      swing.classList.add('gavel-strike');
      ripple.classList.add('gavel-ripple');
    };

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
        <div ref={swingRef} className="gavel-swing" style={{ transformOrigin: '85% 85%' }}>
          <Icon name="Gavel" size={34} className="text-gold drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]" />
        </div>
      </div>
    </>
  );
};

export default GavelCursor;
