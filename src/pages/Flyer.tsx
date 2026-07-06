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
    sum: 'до 450 000 ₽',
    text: 'Доказываем через тепловизор и акт осмотра. Застройщик не может свалить на «неправильную эксплуатацию».',
  },
  {
    icon: 'AppWindow',
    title: 'Окна продуваются, конденсат',
    sum: 'до 730 000 ₽',
    text: 'Фиксируем отклонения по ГОСТ. Считаем полную замену окон и неустойку.',
  },
  {
    icon: 'LayoutPanelTop',
    title: 'Трещины и «бухтение» стяжки пола',
    sum: 'до 400 000 ₽',
    text: 'Инструментальное обследование, расчёт демонтажа и новой стяжки.',
  },
  {
    icon: 'CalendarClock',
    title: 'Просрочка сдачи + дефекты отделки',
    sum: 'до 975 000 ₽',
    text: 'Комплексная претензия: неустойка по ФЗ-214 + стоимость ремонта.',
  },
];

const faq = [
  { q: 'А если суд откажет?', a: 'Мы работаем по результату. Если ничего не получится — вы ничего не платите.' },
  { q: 'Нужны ли мои деньги на старте?', a: 'Нет. Экспертиза, претензия, почтовые расходы — за наш счёт.' },
  { q: 'Как я буду в курсе?', a: 'Раз в месяц присылаем отчёт: что сделано, какие сроки, что дальше.' },
  { q: 'Сколько времени займёт?', a: 'В среднем 4–6 месяцев от первого осмотра до получения денег.' },
];

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
                Право<span className="text-gold">Дольщик</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-center font-display text-[25px] font-black leading-[1.15]">Взыщем компенсацию с застройщика за дефекты квартиры — без предоплаты</h1>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <div className="rounded-xl bg-white/5 p-3 text-center">
                <p className="font-display text-base font-black leading-tight text-gold">280 000–560 000 ₽</p>
                <p className="mt-1 text-[10px] text-white/60">средний размер взыскания</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3 text-center">
                <p className="font-display text-base font-black leading-tight text-gold">4–6 месяцев</p>
                <p className="mt-1 text-[10px] text-white/60">средний срок</p>
              </div>
            </div>

            {/* Photo + signature */}
            <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white/5 p-4">
              <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl border-2 border-gold/50">
                <img src={PHOTO} alt="Юрист" className="h-full w-full object-cover" />
              </div>
              <p className="text-[12px] leading-snug text-white/85 mx-0 px-0 py-0 my-0 text-center">Меня зовут Рустам. Я расскажу про ваши шансы за 10 минут на бесплатной консультации.</p>
            </div>

            {/* How it works */}
            <div className="mt-6 space-y-2.5">
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
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm my-0 py-0">
              <div>
                <p className="font-display text-sm font-bold text-gold">Рассчитать компенсацию за 1 минуту</p>
                <p className="mt-1 text-[11px] text-white/60">Или позвоните: +7 (995) 440-77-50</p>
                <p className="text-[11px] text-white/60">WhatsApp / Telegram: @pravo_dolshchik</p>
              </div>
              <div className="flex h-[25mm] w-[25mm] shrink-0 items-center justify-center rounded-lg bg-white p-1.5">
                <div className="grid h-full w-full grid-cols-5 grid-rows-5 gap-[2px]">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <span key={i} className={`${[0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,12].includes(i) ? 'bg-navy-deep' : ''} rounded-[1px]`} />
                  ))}
                </div>
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
              Какие дефекты реально компенсируют — и сколько денег можно получить
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {caseCards.map((c) => (
                <div key={c.title} className="rounded-xl border border-border bg-card p-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary text-navy">
                      <Icon name={c.icon} size={15} />
                    </span>
                    <p className="font-display text-[11px] font-bold leading-tight text-navy">{c.title}</p>
                  </div>
                  <p className="mt-1.5 font-display text-sm font-black text-gold">{c.sum}</p>
                  <p className="mt-1 text-[10px] leading-snug text-muted-foreground">{c.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Частые вопросы</p>
            <div className="mt-2.5 space-y-2">
              {faq.map((f) => (
                <div key={f.q} className="rounded-xl bg-secondary/60 p-2.5">
                  <p className="font-display text-[12px] font-bold text-navy">{f.q}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto space-y-2 rounded-2xl bg-navy-deep p-4 text-white grain">
              <p className="font-display text-sm font-bold text-gold">Позвоните или напишите: +7 (995) 440-77-50 / @pravo_dolshchik</p>
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

            <p className="mt-3 text-center text-[9px] leading-snug text-muted-foreground">ПравоДольщик · © 2026 · Все права защищены</p>
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