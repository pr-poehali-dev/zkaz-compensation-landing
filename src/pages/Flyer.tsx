import Icon from '@/components/ui/icon';

const trust = [
  '480 000–920 000 ₽ — средний размер взыскания',
  '4–6 месяцев — средний срок выплаты',
  '12,3 млн ₽ взыскано в 2024 году для 27 дольщиков',
];

const guaranteeIcons = ['Scale', 'FileCheck2', 'Clock'];

const steps = [
  'Осматриваем квартиру и фиксируем дефекты — бесплатно',
  'Готовим экспертизу и претензию — за наш счёт',
  'Представляем интересы в суде и добиваемся исполнения',
  'Получаете деньги — оплачиваете услуги только после выплат',
];

const cases = [
  '730 000 ₽ — дефекты и просрочка, ЖК «Северный», 5 месяцев',
  '510 000 ₽ — промерзание стен, ЖК «Зелёный берег», 4 месяца',
];

const guarantees = [
  'Сроки и порядок действий фиксируем в договоре',
  'Присылаем ежемесячные отчёты по вашему делу',
];

const BG =
  'https://cdn.poehali.dev/projects/bc95d7d2-5577-46ab-81ff-ded0d2e4bfc4/files/845d0cb4-2104-4951-9607-9189411fec59.jpg';
const PHOTO =
  'https://cdn.poehali.dev/projects/bc95d7d2-5577-46ab-81ff-ded0d2e4bfc4/bucket/781c8f3f-4aeb-4906-8fbe-a819800f524e.jpg';

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
        <div className="a5-page relative overflow-hidden shadow-2xl">
          <img src={BG} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/85 to-navy-deep/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-navy-deep/50" />

          <div className="relative flex h-full flex-col p-7 text-white">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-navy-deep">
                <Icon name="Scale" size={20} />
              </div>
              <span className="font-display text-base font-extrabold tracking-tight">
                Право<span className="text-gold">Дольщик</span>
              </span>
            </div>

            {/* Photo top-right */}
            <div className="absolute right-7 top-7 h-24 w-20 overflow-hidden rounded-xl border-2 border-gold/50 shadow-lg">
              <img src={PHOTO} alt="Ваш юрист" className="h-full w-full object-cover" />
            </div>

            {/* Headline */}
            <div className="mt-10 max-w-[75%]">
              <h1 className="font-display text-[27px] font-black leading-[1.15]">
                Взыщем компенсацию за дефекты вашей квартиры
              </h1>
              <p className="mt-3 text-[14px] font-medium leading-snug text-gold">
                От 480 000 до 920 000 ₽ — оплата только по результату
              </p>
            </div>

            {/* Trust block */}
            <div className="mt-7 space-y-2 border-l-2 border-gold/50 pl-3">
              {trust.map((t) => (
                <p key={t} className="text-[13px] leading-snug text-white/85">{t}</p>
              ))}
            </div>

            {/* Guarantee icons (no text) */}
            <div className="mt-7 flex items-center gap-6">
              {guaranteeIcons.map((name) => (
                <div key={name} className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-white/5">
                  <Icon name={name} size={22} className="text-gold" />
                </div>
              ))}
            </div>

            {/* CTA + QR */}
            <div className="mt-auto flex items-center justify-between gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
              <div>
                <p className="font-display text-sm font-bold text-gold">Рассчитайте компенсацию за 1 минуту</p>
                <p className="mt-0.5 text-[11px] text-white/60">Наведите камеру на QR-код</p>
              </div>
              <div className="flex h-[25mm] w-[25mm] shrink-0 items-center justify-center rounded-lg bg-white p-1.5">
                <div className="grid h-full w-full grid-cols-5 grid-rows-5 gap-[2px]">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <span key={i} className={`${[0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,12].includes(i) ? 'bg-navy-deep' : ''} rounded-[1px]`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Contacts */}
            <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-white/70">
              <span>ПравоДольщик</span>
              <span>·</span>
              <span>pravo-dolshchik.ru</span>
              <span>·</span>
              <span>+7 (900) 000-00-00</span>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="a5-page relative overflow-hidden bg-background shadow-2xl">
          <div className="flex h-full flex-col p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Процесс</p>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-navy">Как мы работаем</h2>

            <div className="mt-5 space-y-3">
              {steps.map((s, i) => (
                <div key={s} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-sm leading-snug text-navy-light">{s}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Кейсы</p>
            <div className="mt-3 space-y-2.5">
              {cases.map((c) => (
                <div key={c} className="flex items-start gap-2.5 rounded-xl bg-secondary/60 p-3">
                  <Icon name="Trophy" size={16} className="mt-0.5 shrink-0 text-gold" />
                  <p className="text-sm leading-snug text-navy">{c}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Гарантии</p>
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

            <div className="mt-auto flex items-center justify-center gap-4 border-t border-border pt-5 text-[11px] text-muted-foreground">
              <span>ПравоДольщик</span>
              <span>·</span>
              <span>pravo-dolshchik.ru</span>
              <span>·</span>
              <span>+7 (900) 000-00-00</span>
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
