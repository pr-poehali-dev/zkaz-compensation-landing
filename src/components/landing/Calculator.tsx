import { useMemo, useState } from 'react';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const LEADS_API_URL = 'https://functions.poehali.dev/cbf16091-3a28-4924-964e-4e3970a40a6b';

const fmt = (n: number) =>
  new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(Math.max(0, Math.round(n)));

const daysBetween = (a: string, b: string) => {
  if (!a || !b) return 0;
  const d = (new Date(b).getTime() - new Date(a).getTime()) / 86400000;
  return Math.max(0, Math.floor(d));
};

const PRICE_PER_ROOM = 30000;
const PRICE_PER_WINDOW = 16000;
const PRICE_PER_SQM = 3000;
const DEFECTS_CAP_RATE = 0.06;

const Calculator = () => {
  const [price, setPrice] = useState<number>(6500000);
  const [plannedDate, setPlannedDate] = useState<string>('');
  const [factDate, setFactDate] = useState<string>('');
  const [rooms, setRooms] = useState<number>(2);
  const [windows, setWindows] = useState<number>(3);
  const [area, setArea] = useState<number>(55);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const result = useMemo(() => {
    const days = daysBetween(plannedDate, factDate);
    const keyRate = 0.16;
    const penalty = price * (1 / 300) * keyRate * days * 2;
    const defectsCap = price * DEFECTS_CAP_RATE;
    const defectsRaw = rooms * PRICE_PER_ROOM + windows * PRICE_PER_WINDOW + area * PRICE_PER_SQM;
    const defects = Math.min(defectsRaw, defectsCap);
    const base = penalty + defects;
    const fine = base * 0.5;
    const moral = 30000;
    const total = base + fine + moral;
    return { days, penalty, defects, defectsCap, fine, moral, total };
  }, [price, plannedDate, factDate, rooms, windows, area]);

  const rows = [
    { label: 'Неустойка за просрочку', value: result.penalty, icon: 'Clock' },
    { label: 'Компенсация за дефекты', value: result.defects, icon: 'Wrench' },
    { label: 'Штраф 50% по закону', value: result.fine, icon: 'Scale' },
    { label: 'Моральный вред', value: result.moral, icon: 'Heart' },
  ];

  const openModal = () => {
    setStatus('idle');
    setErrorMsg('');
    setIsModalOpen(true);
  };

  const submitLead = async () => {
    if (leadName.trim().length < 2) {
      setStatus('error');
      setErrorMsg('Укажите имя');
      return;
    }
    const digits = leadPhone.replace(/\D/g, '');
    if (digits.length < 10) {
      setStatus('error');
      setErrorMsg('Укажите корректный телефон');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch(LEADS_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadName.trim(),
          phone: leadPhone.trim(),
          price,
          days: result.days,
          total_amount: Math.round(result.total),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setStatus('error');
        setErrorMsg(data.error || 'Не удалось отправить заявку. Попробуйте ещё раз.');
        return;
      }
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Не удалось отправить заявку. Попробуйте ещё раз.');
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2 rounded-2xl border border-border bg-card overflow-hidden shadow-[0_20px_60px_-20px_hsl(var(--navy)/0.25)]">
      <div className="p-8 md:p-10 space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-light/70">Калькулятор неустойки</p>
          <h3 className="mt-2 font-display text-2xl font-extrabold text-navy">Введите параметры квартиры</h3>
        </div>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-navy-light">Цена квартиры по ДДУ, ₽</span>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-lg font-semibold text-navy outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-navy-light">Дата передачи по ДДУ</span>
            <input
              type="date"
              value={plannedDate}
              onChange={(e) => setPlannedDate(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-navy outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-navy-light">Фактическая передача</span>
            <input
              type="date"
              value={factDate}
              onChange={(e) => setFactDate(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-navy outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-navy-light">Комнат</span>
            <input
              type="number"
              min={0}
              value={rooms}
              onChange={(e) => setRooms(Number(e.target.value))}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-navy outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-navy-light">Окон</span>
            <input
              type="number"
              min={0}
              value={windows}
              onChange={(e) => setWindows(Number(e.target.value))}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-navy outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-navy-light">Площадь, м²</span>
            <input
              type="number"
              min={0}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-navy outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition"
            />
          </label>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name="Info" size={16} />
          Просрочка: <span className="font-semibold text-navy">{result.days} дн.</span> Расчёт по ключевой ставке 16%.
        </div>
        {result.defects >= result.defectsCap && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="ShieldAlert" size={16} />
            Компенсация за дефекты ограничена 6% от цены квартиры ({fmt(result.defectsCap)} ₽).
          </div>
        )}
      </div>

      <div className="relative bg-navy-deep p-8 md:p-10 text-white grain">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Ваш потенциал взыскания</p>
        <div className="mt-4 mb-6">
          <p className="font-display text-4xl md:text-5xl font-black tabular-nums">{fmt(result.total)} ₽</p>
          <p className="mt-1 text-sm text-white/60">общая сумма к взысканию с застройщика</p>
        </div>

        <div className="space-y-3">
          {rows.map((r) => (
            <div key={r.label} className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3 backdrop-blur-sm">
              <span className="flex items-center gap-3 text-sm text-white/80">
                <Icon name={r.icon} size={18} className="text-gold" />
                {r.label}
              </span>
              <span className="font-semibold tabular-nums">{fmt(r.value)} ₽</span>
            </div>
          ))}
        </div>

        <button
          onClick={openModal}
          className="mt-6 w-full rounded-lg bg-gold px-6 py-4 font-display text-base font-bold text-navy-deep transition hover:brightness-110 hover:shadow-lg hover:shadow-gold/20"
        >
          Получить точный расчёт
        </button>
        <p className="mt-3 text-center text-xs text-white/50">Расчёт ориентировочный. Точную сумму определим после осмотра.</p>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md border-border bg-card text-navy">
          {status === 'success' ? (
            <div className="py-4 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Icon name="Check" size={28} />
              </div>
              <p className="font-display text-xl font-extrabold text-navy">Заявка принята!</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Мы свяжемся с вами в ближайшее время, чтобы уточнить детали и провести бесплатный осмотр.
              </p>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-xl font-extrabold text-navy">Получить точный расчёт</DialogTitle>
              </DialogHeader>

              <div className="space-y-4">
                <div className="rounded-xl bg-secondary/60 p-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Ориентировочная сумма</span>
                    <span className="font-display text-lg font-black text-navy">{fmt(result.total)} ₽</span>
                  </div>
                </div>

                <label className="block space-y-2">
                  <span className="text-sm font-medium text-navy-light">Ваше имя</span>
                  <input
                    type="text"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="Иван Иванов"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-navy outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-sm font-medium text-navy-light">Телефон</span>
                  <input
                    type="tel"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="+7 (900) 000-00-00"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-navy outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition"
                  />
                </label>

                {status === 'error' && (
                  <p className="text-sm text-red-500">{errorMsg}</p>
                )}

                <button
                  onClick={submitLead}
                  disabled={status === 'loading'}
                  className="w-full rounded-lg bg-gold px-6 py-3.5 font-display text-base font-bold text-navy-deep transition hover:brightness-110 disabled:opacity-60"
                >
                  {status === 'loading' ? 'Отправляем...' : 'Отправить заявку'}
                </button>
                <p className="text-center text-xs text-muted-foreground">Нажимая на кнопку, вы соглашаетесь на обработку персональных данных.</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Calculator;