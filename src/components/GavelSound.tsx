import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const STORAGE_KEY = 'gavel-sound-muted';

const GavelSound = () => {
  const [muted, setMuted] = useState(() => localStorage.getItem(STORAGE_KEY) === '1');
  const mutedRef = useRef(muted);
  const ctxRef = useRef<AudioContext | null>(null);

  const play = () => {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    if (!ctxRef.current) ctxRef.current = new Ctx();
    const ctx = ctxRef.current;
    if (ctx.state === 'suspended') ctx.resume();

    const t = ctx.currentTime;
    const master = ctx.createGain();
    master.gain.value = 0.55;
    master.connect(ctx.destination);

    const body = ctx.createOscillator();
    const bodyGain = ctx.createGain();
    body.type = 'sine';
    body.frequency.setValueAtTime(210, t);
    body.frequency.exponentialRampToValueAtTime(90, t + 0.12);
    bodyGain.gain.setValueAtTime(1, t);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
    body.connect(bodyGain).connect(master);
    body.start(t);
    body.stop(t + 0.2);

    const len = Math.floor(ctx.sampleRate * 0.04);
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1800;
    filter.Q.value = 0.8;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.9, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    noise.connect(filter).connect(noiseGain).connect(master);
    noise.start(t);
  };

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (mutedRef.current) return;
      if ((e.target as HTMLElement | null)?.closest('[data-sound-toggle]')) return;
      play();
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, []);

  const toggle = () => {
    const next = !muted;
    setMuted(next);
    mutedRef.current = next;
    localStorage.setItem(STORAGE_KEY, next ? '1' : '0');
    if (!next) play();
  };

  return (
    <button
      type="button"
      data-sound-toggle
      onClick={toggle}
      aria-label={muted ? 'Включить звук' : 'Выключить звук'}
      title={muted ? 'Включить звук' : 'Выключить звук'}
      className="fixed bottom-4 left-4 z-[9997] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-navy-deep/90 text-gold shadow-lg backdrop-blur transition hover:scale-110"
    >
      <Icon name={muted ? 'VolumeX' : 'Volume2'} size={18} />
    </button>
  );
};

export default GavelSound;
