let ctx: AudioContext | null = null;

const isMuted = () => localStorage.getItem('gavel-sound-muted') === '1';

export const playGlass = () => {
  if (isMuted()) return;
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return;
  if (!ctx) ctx = new Ctx();
  if (ctx.state === 'suspended') ctx.resume();

  const t = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.value = 0.5;
  master.connect(ctx.destination);

  const len = Math.floor(ctx.sampleRate * 0.35);
  const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.5);
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  const hp = ctx.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 3500;
  const ng = ctx.createGain();
  ng.gain.setValueAtTime(0.9, t);
  ng.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
  noise.connect(hp).connect(ng).connect(master);
  noise.start(t);

  for (let k = 0; k < 7; k++) {
    const start = t + Math.random() * 0.28;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 2800 + Math.random() * 3800;
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(0.25, start + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, start + 0.12 + Math.random() * 0.1);
    osc.connect(g).connect(master);
    osc.start(start);
    osc.stop(start + 0.25);
  }
};
