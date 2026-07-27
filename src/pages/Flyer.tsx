import Icon from '@/components/ui/icon';

const howItWorks = [
  { icon: 'FileText', text: 'Осмотр и консультация — бесплатно' },
  { icon: 'Scale', text: 'Экспертиза и претензия — за наш счёт' },
  { icon: 'Wallet', text: 'Вы получаете деньги, мы берём процент' },
];

const caseCards = [
  {
    icon: 'ThermometerSnowflake',
    title: 'Промерзание стен и плесень',
    text: 'Доказываем через тепловизор и акт осмотра. Застройщик не может свалить на «неправильную эксплуатацию».',
  },
  {
    icon: 'AppWindow',
    title: 'Окна продуваются, конденсат',
    text: 'Фиксируем отклонения по ГОСТ. Считаем полную замену окон и неустойку.',
  },
  {
    icon: 'LayoutPanelTop',
    title: 'Трещины и «бухтение» стяжки пола',
    text: 'Инструментальное обследование, расчёт демонтажа и новой стяжки.',
  },
  {
    icon: 'PaintBucket',
    title: 'Дефекты отделки: обои, покраска, штукатурка',
    text: 'Пузыри, отслоение, разводы и неровности — фиксируем и считаем стоимость переделки.',
  },
  {
    icon: 'DoorOpen',
    title: 'Перекошенные двери и проёмы',
    text: 'Замеряем отклонения от проекта, включаем в претензию стоимость исправления.',
  },
  {
    icon: 'Zap',
    title: 'Неисправная электрика и сантехника',
    text: 'Проверяем на соответствие проекту, включаем в претензию стоимость устранения.',
  },
];

const faq = [
  { q: 'А если суд откажет?', a: 'Мы работаем по результату. Если ничего не получится — вы ничего не платите.' },
  { q: 'Нужны ли мои деньги на старте?', a: 'Нет. Экспертиза, претензия, почтовые расходы — за наш счёт.' },
  { q: 'А если у меня нет недостатков в квартире?', a: 'На практике дефекты — отклонения от проекта, ГОСТов и норм — находятся практически в каждой квартире, даже если визуально всё выглядит хорошо. Большинство собственников просто не замечают их без экспертного осмотра.' },
];

const SITE_URL = 'https://защита.online/';
const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(SITE_URL)}`;

const Flyer = () => {
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

      <div className="flyer-pages flex flex-col items-center gap-10">
        {/* FRONT SIDE */}
        <div className="a5-page relative overflow-hidden bg-navy-deep text-white shadow-2xl grain">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-navy-light/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative flex h-full flex-col p-7">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold text-navy-deep">
                <Icon name="Scale" size={18} />
              </div>
              <span className="font-display text-sm font-extrabold tracking-tight">
                Региональный центр <span className="text-gold">защиты прав потребителей</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-center font-display text-[25px] font-black leading-[1.15]">Взыщем компенсацию с застройщика за дефекты квартиры — без предоплаты</h1>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <div className="rounded-xl bg-white/5 p-3 text-center">
                <p className="font-display text-base font-black leading-tight text-gold">250 000–700 000 ₽</p>
                <p className="mt-1 text-[10px] text-white/60">средний размер компенсации</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3 text-center">
                <p className="font-display text-base font-black leading-tight text-gold">6–8 месяцев</p>
                <p className="mt-1 text-[10px] text-white/60">средний срок</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl bg-white/[0.07] p-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-navy-deep">
                <Icon name="AlertTriangle" size={16} />
              </span>
              <p className="text-[12.5px] leading-snug text-white/90">Дефекты есть в каждой квартире — если не найти их сейчас, они проявятся позже и оплачивать ремонт придётся самостоятельно</p>
            </div>

            {/* How it works */}
            <div className="mt-3 space-y-2.5">
              {howItWorks.map((s) => (
                <div key={s.text} className="flex items-center gap-3 rounded-xl bg-white/[0.07] p-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-navy-deep">
                    <Icon name={s.icon} size={16} />
                  </span>
                  <p className="text-[12.5px] leading-snug text-white/90">{s.text}</p>
                </div>
              ))}
            </div>

            {/* Rating + address */}
            <div className="flex items-center justify-between gap-3 bg-white/5 py-2.5 my-3 rounded-xl mx-0 px-3">
              <div className="flex items-center gap-1.5">
                <Icon name="Star" size={14} className="fill-gold text-gold" />
                <span className="font-display text-[12px] font-bold text-gold">4,9</span>
                <span className="text-[10px] text-white/50">· 214 отзывов на картах</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-white/60">
                <Icon name="MapPin" size={12} className="text-gold" />
                г. Красноярск, ул. Красной Гвардии, д. 21
              </div>
            </div>

            {/* CTA + QR */}
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 p-4 my-2.5 px-[13px] py-[19px]">
              <div>
                <p className="font-display text-sm font-bold text-gold">Рассчитать компенсацию за 1 минуту</p>
                <p className="text-white/60 my-1 py-0 px-0 text-xl">Или позвоните: +7 (904) 891-68-88</p>
                <p className="text-[11px] text-white/60">MAX / WhatsApp / Telegram</p>
              </div>
              <div className="flex h-[25mm] w-[25mm] shrink-0 items-center justify-center rounded-lg bg-white p-1.5">
                <img src={QR_CODE_URL} alt="QR-код на сайт" className="h-full w-full object-contain" />
              </div>
            </div>

            <p className="mt-3 text-center text-[9px] leading-snug text-white/40">
              Результаты индивидуальны. Не является публичной офертой. Данные обезличены в соответствии с 152-ФЗ.
            </p>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="a5-page relative overflow-hidden bg-background shadow-2xl">
          <div className="flex h-full flex-col p-7">
            <h2 className="text-center font-display text-lg font-extrabold leading-snug text-navy">
              Какие дефекты реально компенсируют — самые частые недостатки
            </h2>

            <div className="mt-5 grid grid-cols-2 grid-rows-3 gap-2.5">
              {caseCards.map((c) => (
                <div key={c.title} className="flex flex-col rounded-xl border border-border bg-card p-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary text-navy">
                      <Icon name={c.icon} size={15} />
                    </span>
                    <p className="font-display text-[11px] font-bold leading-tight text-navy">{c.title}</p>
                  </div>
                  <p className="mt-1.5 text-[10px] leading-snug text-muted-foreground">{c.text}</p>
                </div>
              ))}
            </div>

            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold py-0.5 my-0">Частые вопросы</p>
            <div className="mt-2.5 space-y-2">
              {faq.map((f) => (
                <div key={f.q} className="rounded-xl bg-secondary/60 p-2.5 py-0 my-[11px]">
                  <p className="font-display text-[12px] font-bold text-navy">{f.q}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2 rounded-2xl bg-navy-deep p-4 text-white grain py-2 px-[23px] my-[5px]">
              <p className="font-display text-[11px] font-bold uppercase tracking-wide text-white/70">Позвоните или напишите</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
                <span className="font-display text-sm font-bold text-gold whitespace-nowrap">+7 (904) 891-68-88</span>
                <span className="font-display text-sm font-bold text-gold whitespace-nowrap"></span>
              </div>
              <p className="text-[11px] text-white/70">
                Или отсканируйте QR с лицевой стороны, чтобы рассчитать компенсацию за 1 минуту.
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-white/60">
                <span className="flex items-center gap-1.5">
                  <Icon name="Star" size={12} className="fill-gold text-gold" /> 4,9 · 214 отзывов
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="MapPin" size={12} className="text-gold" /> г. Красноярск, ул. Красной Гвардии, д. 21
                </span>
              </div>
            </div>

            <p className="text-center text-[9px] leading-snug text-muted-foreground py-0 px-0 my-0">Региональный центр защиты прав потребителей · © 2026 · Все права защищены</p>
          </div>
        </div>
      </div>

      <style>{`
        .a5-page {
          width: 148mm;
          height: 210mm;
          border-radius: 12px;
        }
        .a5-page, .a5-page * {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          color-adjust: exact;
        }
        @media print {
          @page { size: A5; margin: 0; }
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
          .flyer-pages {
            gap: 0 !important;
          }
          .a5-page {
            border-radius: 0;
            box-shadow: none !important;
            page-break-after: always;
            break-after: page;
            page-break-inside: avoid;
            break-inside: avoid;
            overflow: hidden !important;
            width: 148mm;
            height: 210mm;
            margin: 0 auto;
          }
          .a5-page:last-child {
            page-break-after: auto;
            break-after: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Flyer;