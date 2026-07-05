import Icon from '@/components/ui/icon';

const trust = [
  '480 000–920 000 ₽ — средний размер взыскания',
  '4–6 месяцев — средний срок выплаты',
  '12,3 млн ₽ взыскано в 2024 году для 27 дольщиков',
];

const steps = [
  { icon: 'Search', text: 'Осматриваем квартиру и фиксируем дефекты — бесплатно' },
  { icon: 'FileText', text: 'Готовим экспертизу и претензию — за наш счёт' },
  { icon: 'Gavel', text: 'Взыскиваем деньги через суд — вы платите процент по факту' },
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

      <div className="flex justify-center">
        <div className="a5-page relative overflow-hidden shadow-2xl">
          <img src={BG} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/85 to-navy-deep/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-navy-deep/50" />

          {/* decorative watermark icons */}
          <Icon name="Scale" size={110} className="absolute -right-4 top-24 text-white/[0.06]" />
          <Icon name="FileCheck2" size={90} className="absolute right-10 bottom-56 text-white/[0.05]" />
          <Icon name="Clock" size={80} className="absolute right-2 bottom-16 text-white/[0.05]" />

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
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold">
                <Icon name="ShieldCheck" size={11} /> Без предоплаты
              </span>
              <h1 className="mt-3 font-display text-[26px] font-black leading-[1.15]">
                Компенсация за дефекты квартиры — без предоплаты
              </h1>
              <p className="mt-2 text-[13px] leading-snug text-white/75">
                От 480 000 до 920 000 ₽ — оплата только по результату
              </p>
            </div>

            {/* Trust block */}
            <div className="mt-6 space-y-2 border-l-2 border-gold/50 pl-3">
              {trust.map((t) => (
                <p key={t} className="text-[13px] leading-snug text-white/85">{t}</p>
              ))}
            </div>

            {/* Steps */}
            <div className="mt-6 space-y-2.5">
              {steps.map((s, i) => (
                <div key={s.text} className="flex items-start gap-3 rounded-xl bg-white/[0.07] p-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy-deep">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-[13px] leading-snug text-white/90">{s.text}</p>
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
              <span className="flex items-center gap-1.5"><Icon name="Phone" size={13} className="text-gold" /> +7 (900) 000-00-00</span>
              <span className="flex items-center gap-1.5"><Icon name="Send" size={13} className="text-gold" /> @pravo_dolshchik</span>
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
            width: 148mm;
            height: 210mm;
          }
        }
      `}</style>
    </div>
  );
};

export default Flyer;
