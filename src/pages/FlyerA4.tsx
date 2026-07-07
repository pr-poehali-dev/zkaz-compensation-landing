import Icon from '@/components/ui/icon';

const howItWorks = [
  { icon: 'FileText', text: 'Осмотр и консультация — бесплатно' },
  { icon: 'Scale', text: 'Экспертиза и претензия — за наш счёт' },
  { icon: 'Wallet', text: 'Вы получаете деньги, мы берём процент' },
];

const defects = [
  { icon: 'ThermometerSnowflake', title: 'Промерзание стен и плесень' },
  { icon: 'AppWindow', title: 'Окна продуваются, конденсат' },
  { icon: 'LayoutPanelTop', title: 'Трещины и «бухтение» стяжки пола' },
  { icon: 'PaintBucket', title: 'Дефекты отделки: обои, покраска, штукатурка' },
  { icon: 'DoorOpen', title: 'Перекошенные двери и проёмы' },
  { icon: 'Zap', title: 'Неисправная электрика и сантехника' },
];

const SITE_URL = 'https://защита.online/';
const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(SITE_URL)}`;

const FlyerA4 = () => {
  return (
    <div className="flyer-root min-h-screen bg-slate-200 py-10 font-sans">
      <div className="no-print sticky top-0 z-10 mb-8 flex justify-center">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-display font-bold text-white shadow-lg transition hover:bg-navy-deep"
        >
          <Icon name="Printer" size={20} /> Скачать / распечатать PDF
        </button>
      </div>

      <div className="flyer-pages flex flex-col items-center">
        <div className="a4-page relative overflow-hidden bg-navy-deep text-white shadow-2xl grain">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-navy-light/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative flex h-full flex-col p-12">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-navy-deep">
                <Icon name="Scale" size={20} />
              </div>
              <span className="font-display text-lg font-extrabold tracking-tight text-white">
                Региональный центр <span className="text-white">защиты прав потребителей</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-8 text-center font-display text-[40px] font-black leading-[1.15]">
              Взыщем компенсацию с застройщика за дефекты квартиры — без предоплаты
            </h1>

            {/* Stats */}
            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 p-4 text-center">
                <p className="font-display text-3xl font-black leading-tight text-gold">250 000–700 000 ₽</p>
                <p className="mt-1 text-sm text-white/60">средний размер компенсации</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 text-center">
                <p className="font-display text-3xl font-black leading-tight text-gold">6–8 месяцев</p>
                <p className="mt-1 text-sm text-white/60">средний срок</p>
              </div>
            </div>

            {/* Warning */}
            <div className="flex items-center gap-3 rounded-xl bg-white/[0.07] p-3.5 py-[5px] my-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-navy-deep">
                <Icon name="AlertTriangle" size={20} />
              </span>
              <p className="text-base leading-snug text-white/90">Дефекты есть в каждой квартире — если не найти их сейчас, они проявятся позже и оплачивать ремонт придётся самостоятельно</p>
            </div>

            {/* Defects grid */}
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold my-3">Что чаще всего компенсируют</p>
            <div className="grid grid-cols-2 gap-3 my-0">
              {defects.map((d) => (
                <div key={d.title} className="flex items-center gap-2.5 rounded-xl bg-white/[0.07] p-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold text-navy-deep">
                    <Icon name={d.icon} size={16} />
                  </span>
                  <p className="text-base leading-snug text-white/90">{d.title}</p>
                </div>
              ))}
            </div>

            {/* How it works */}
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold my-[13px]">Как это работает</p>
            <div className="grid grid-cols-3 gap-3 my-0 py-0 px-0 mx-0">
              {howItWorks.map((s) => (
                <div key={s.text} className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.07] p-3.5 text-center">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-navy-deep">
                    <Icon name={s.icon} size={18} />
                  </span>
                  <p className="text-sm leading-snug text-white/90">{s.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              {/* Rating + address */}
              <div className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-4 py-3 my-2">
                <div className="flex items-center gap-1.5">
                  <Icon name="Star" size={16} className="fill-gold text-gold" />
                  <span className="font-display text-base font-bold text-gold">4,9</span>
                  <span className="text-sm text-white/50">· 214 отзывов на картах</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-white/60">
                  <Icon name="MapPin" size={14} className="text-gold" />
                  г. Красноярск, ул. Красной Гвардии, д. 21
                </div>
              </div>

              {/* CTA + QR */}
              <div className="flex items-center justify-between gap-5 rounded-2xl bg-white/10 p-5 py-0 my-[15px]">
                <div>
                  <p className="font-display text-xl font-bold text-gold">Рассчитать компенсацию за 1 минуту</p>
                  <p className="mt-1.5 text-lg font-bold text-white">Или позвоните: +7 (995) 440-77-50 ; 
+7 (960) 772-48-88</p>
                  <p className="text-base text-white/60">WhatsApp / Telegram: @pravo2026</p>
                </div>
                <div className="flex shrink-0 flex-col items-center gap-1.5">
                  <p className="font-display text-sm font-bold text-gold">Наш сайт: защита.online</p>
                  <div className="flex h-[35mm] w-[35mm] items-center justify-center rounded-lg bg-white p-2">
                    <img src={QR_CODE_URL} alt="QR-код на сайт" className="h-full w-full object-contain" />
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-xs leading-snug text-white/40">
                Результаты индивидуальны. Не является публичной офертой. Данные обезличены в соответствии с 152-ФЗ.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .a4-page {
          width: 210mm;
          height: 297mm;
          border-radius: 12px;
        }
        .a4-page, .a4-page * {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          color-adjust: exact;
        }
        @media print {
          @page { size: A4; margin: 0; }
          html, body { background: white !important; margin: 0 !important; padding: 0 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          body * { visibility: hidden; }
          .flyer-root, .flyer-root * { visibility: visible; }
          .no-print { display: none !important; }
          .flyer-root {
            position: absolute;
            inset: 0;
            padding: 0 !important;
            margin: 0 !important;
            min-height: 0 !important;
          }
          .a4-page {
            border-radius: 0;
            box-shadow: none !important;
            width: 210mm;
            height: 297mm;
            margin: 0 auto;
            overflow: hidden !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FlyerA4;