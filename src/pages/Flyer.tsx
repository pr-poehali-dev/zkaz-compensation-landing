import Icon from '@/components/ui/icon';

const stats = [
  { value: '480–920 тыс. ₽', label: 'средний размер взыскания' },
  { value: '4–6 мес.', label: 'средний срок выплаты' },
  { value: '12,3 млн ₽', label: 'взыскали за 2024 год' },
];

const steps = [
  { icon: 'Search', title: 'Осмотр', text: 'Бесплатно фиксируем дефекты' },
  { icon: 'FileText', title: 'Претензия', text: 'Экспертиза за наш счёт' },
  { icon: 'Gavel', title: 'Суд', text: 'Ведём дело под ключ' },
  { icon: 'Wallet', title: 'Выплата', text: 'Деньги вам, процент — нам' },
];

const guarantees = [
  'Всё фиксируем в договоре',
  'Ежемесячные отчёты по делу',
  'Никаких скрытых платежей',
  'Оплата только по результату',
];

const Flyer = () => {
  return (
    <div className="min-h-screen bg-slate-200 py-10 font-sans">
      <div className="no-print sticky top-0 z-10 mb-8 flex justify-center">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-display font-bold text-white shadow-lg transition hover:bg-navy-deep"
        >
          <Icon name="Printer" size={20} /> Скачать / распечатать PDF
        </button>
      </div>

      <div className="flex flex-col items-center gap-10">
        {/* FRONT SIDE */}
        <div className="a5-page relative overflow-hidden bg-navy-deep text-white shadow-2xl grain">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-navy-light/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative flex h-full flex-col p-8">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-navy-deep">
                <Icon name="Scale" size={20} />
              </div>
              <span className="font-display text-lg font-extrabold tracking-tight">
                Право<span className="text-gold">Дольщик</span>
              </span>
            </div>

            <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold">
              <Icon name="ShieldCheck" size={12} /> Без предоплаты
            </span>

            <h1 className="mt-4 font-display text-[28px] font-black leading-[1.15]">
              Взыщем компенсацию за дефекты вашей квартиры
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              От 480 000 до 920 000 ₽ с застройщика. Экспертизу и претензию берём на себя — вы платите процент только после выплаты.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-white/5 p-3 text-center">
                  <p className="font-display text-lg font-black text-gold leading-tight">{s.value}</p>
                  <p className="mt-1 text-[10px] leading-tight text-white/60">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/10 p-5">
              <p className="font-display text-base font-bold text-gold">Реальный кейс</p>
              <p className="mt-1 font-display text-2xl font-black">930 000 ₽</p>
              <p className="mt-1 text-xs text-white/70">ЖК «Зелёный берег» · промерзание стен и плесень · 5 месяцев</p>
            </div>

            <div className="mt-auto flex items-center justify-between pt-8">
              <div className="text-xs text-white/60">
                <p className="font-display text-sm font-bold text-white">Рассчитайте сумму на сайте</p>
                <p className="mt-0.5">Калькулятор неустойки за 1 минуту</p>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-1.5">
                <div className="grid h-full w-full grid-cols-5 grid-rows-5 gap-[2px]">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <span key={i} className={`${[0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,12].includes(i) ? 'bg-navy-deep' : ''} rounded-[1px]`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="a5-page relative overflow-hidden bg-background shadow-2xl">
          <div className="flex h-full flex-col p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Как мы работаем</p>
            <h2 className="mt-2 font-display text-xl font-extrabold text-navy">Четыре шага до выплаты</h2>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {steps.map((s, i) => (
                <div key={s.title} className="rounded-xl border border-border bg-card p-3.5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary text-navy">
                      <Icon name={s.icon} size={15} />
                    </span>
                    <span className="font-display text-xs font-bold text-navy">{i + 1}. {s.title}</span>
                  </div>
                  <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Гарантии</p>
            <div className="mt-3 space-y-2">
              {guarantees.map((g) => (
                <div key={g} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                    <Icon name="Check" size={12} />
                  </span>
                  <span className="text-sm text-navy-light">{g}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-1 rounded-xl bg-navy-deep p-4 text-white grain">
              <Icon name="Star" size={18} className="fill-gold text-gold" />
              <p className="ml-1.5 font-display text-base font-bold">4,9</p>
              <p className="ml-2 text-xs text-white/60">рейтинг на картах · 214 отзывов</p>
            </div>

            <div className="mt-auto space-y-2 border-t border-border pt-5">
              <div className="flex items-center gap-2.5 text-sm text-navy">
                <Icon name="Phone" size={16} className="text-navy" /> +7 (900) 000-00-00
              </div>
              <div className="flex items-center gap-2.5 text-sm text-navy">
                <Icon name="Send" size={16} className="text-navy" /> @pravo_dolshchik
              </div>
              <div className="flex items-center gap-2.5 text-sm text-navy">
                <Icon name="MapPin" size={16} className="text-navy" /> г. Москва, ул. Правовая, 1
              </div>
              <div className="flex items-center gap-2.5 text-sm text-navy">
                <Icon name="Globe" size={16} className="text-navy" /> pravo-dolshchik.ru
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .a5-page {
          width: 148mm;
          height: 210mm;
          border-radius: 12px;
        }
        @media print {
          @page { size: A5; margin: 0; }
          body { background: white !important; }
          .no-print { display: none !important; }
          .a5-page {
            border-radius: 0;
            box-shadow: none !important;
            page-break-after: always;
            width: 148mm;
            height: 210mm;
          }
        }
      `}</style>
    </div>
  );
};

export default Flyer;
