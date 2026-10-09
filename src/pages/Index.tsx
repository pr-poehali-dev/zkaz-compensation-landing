import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import DefectsBlock from '@/components/landing/DefectsBlock';
import ProcedureBlock from '@/components/landing/ProcedureBlock';
import ChatHelper from '@/components/landing/ChatHelper';
import MapBlock from '@/components/landing/MapBlock';
import CasesSection from '@/components/landing/CasesSection';
import LawyerBlock from '@/components/landing/LawyerBlock';

const stats = [
  { value: '250–700 тыс. ₽', label: 'Средний размер компенсации', icon: 'Banknote' },
  { value: '6–8 месяцев', label: 'Средний срок от осмотра до выплаты денег', icon: 'CalendarClock' },
  { value: 'Оплата по результату', label: 'Платите процент только после выплаты вам', icon: 'BadgeCheck' },
];

const guarantees = [
  { icon: 'FileSignature', title: 'Всё в договоре', text: 'Сроки и порядок действий фиксируем письменно' },
  { icon: 'ClipboardCheck', title: 'Ежемесячные отчёты', text: 'Вы всегда знаете, на какой стадии ваше дело' },
  { icon: 'Eye', title: 'Полная прозрачность', text: 'Никаких скрытых платежей и мелкого шрифта' },
  { icon: 'TrendingUp', title: '14+ лет', text: 'Опыт работы с застройщиками, более 1000 выигранных дел' },
];

const faqs = [
  {
    q: 'Правда без предоплаты?',
    a: 'Да. Осмотр и консультация бесплатны, экспертизу и подготовку претензии мы оплачиваем сами. Вы платите процент только после того, как получите деньги по решению суда.',
  },
  {
    q: 'Сколько времени занимает взыскание?',
    a: 'В среднем 6–8 месяцев. Срок зависит от позиции застройщика и загруженности суда. На каждом этапе мы держим вас в курсе через ежемесячные отчёты.',
  },
  {
    q: 'Что такое штраф 50%?',
    a: 'Если застройщик не удовлетворил вашу претензию добровольно, суд дополнительно взыскивает штраф в размере 50% от присуждённой суммы в вашу пользу. Это норма закона о защите прав потребителей.',
  },
  {
    q: 'Какие документы нужны?',
    a: 'Документы о праве собственности (ДДУ, договор купли-продажи и т.д.), акт приёма-передачи и, по возможности, фотографии на квартиру. Остальное — экспертизу и расчёты — подготовим мы.',
  },
  {
    q: 'А если застройщик обанкротится?',
    a: 'Мы оцениваем перспективы ещё на этапе бесплатной консультации и честно скажем, если взыскание нецелесообразно. Беремся только за дела с реальной перспективой выплаты.',
  },
  {
    q: 'А если у меня нет недостатков в квартире?',
    a: 'На практике дефекты — отклонения от проекта, ГОСТов и норм — находятся практически в каждой квартире, даже если визуально всё выглядит хорошо. Большинство собственников просто не замечают их без экспертного осмотра. Мы бесплатно приедем, проведём инструментальную проверку и честно скажем результат — если дефектов действительно не найдётся, вы ничего не платите.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-navy">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-white">
              <Icon name="Scale" size={20} />
            </div>
            <span className="font-display text-lg font-extrabold tracking-tight text-navy">Региональный центр защиты прав потребителей</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+79048916888" className="hidden items-center gap-2 font-display text-base font-bold text-navy transition hover:text-gold md:inline-flex">
              <Icon name="Phone" size={16} /> +7 (904) 891-68-88
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep text-white grain">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-navy-light/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="container relative py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold animate-fade-in">
              <Icon name="ShieldCheck" size={14} /> Оплата только по результату
            </span>
            <h1 className="mt-6 font-display text-4xl font-black leading-[1.1] text-balance md:text-6xl animate-slide-up">
              Взыщем компенсацию за дефекты вашей квартиры
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70 animate-fade-in" style={{ animationDelay: '0.15s', opacity: 0 }}>От 250 000 до 700 000 ₽ с застройщика — без предоплаты. Экспертизу и претензию берём на себя, вы платите процент только после выплаты.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <a href="#how" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10">
                Как мы работаем
              </a>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/50">Связаться с нами</span>
              <a href="tel:+79048916888" className="inline-flex items-center gap-2 font-display text-lg font-bold text-white transition hover:text-gold">
                <Icon name="Phone" size={18} className="text-gold" /> +7 (904) 891-68-88
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60">
              <span className="flex items-center gap-2"><Icon name="Scale" size={16} className="text-gold" /> Работаем строго по закону</span>
              <span className="flex items-center gap-2"><Icon name="FileCheck2" size={16} className="text-gold" /> Всё фиксируем в договоре</span>
              <span className="flex items-center gap-2"><Icon name="Clock" size={16} className="text-gold" /> Ответ 24/7 в чате</span>
            </div>
          </div>
        </div>
      </section>

      <ProcedureBlock />

      {/* Calculator */}
      <section id="calc" className="container py-20 md:py-24">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Бесплатный осмотр</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">Что мы найдём в вашей квартире</h2>
          <p className="mt-4 text-muted-foreground">Типичные дефекты новостроек и компенсация, которую можно взыскать.</p>
        </div>
        <DefectsBlock />
      </section>

      {/* Stats */}
      <section className="bg-secondary/50 py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-white">
                  <Icon name={s.icon} size={26} />
                </div>
                <p className="font-display text-3xl font-black text-navy">{s.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lawyer */}
      <LawyerBlock />

      {/* Cases */}
      <CasesSection />

      {/* Guarantees */}
      <section className="container py-20 md:py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Гарантии</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">Почему нам доверяют</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-6 transition hover:border-navy/30 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <Icon name={g.icon} size={24} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-navy">{g.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/50 py-20 md:py-24">
        <div className="container max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Частые вопросы</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">Отвечаем прямо</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-card px-5">
                <AccordionTrigger className="text-left font-display font-semibold text-navy hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Map & rating */}
      <MapBlock />

      {/* CTA */}
      <section className="bg-navy-deep py-20 text-center text-white grain">
        <div className="container max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">Готовы узнать свою сумму?</h2>
          <p className="mt-4 text-white/70">Бесплатный осмотр и расчёт</p>
          <a href="tel:+79048916888" className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 font-display text-base font-bold text-navy-deep transition hover:brightness-110">
            <Icon name="Phone" size={20} /> +7 (904) 891-68-88
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-14">
        <div className="container grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-white">
                <Icon name="Scale" size={20} />
              </div>
              <span className="font-display text-lg font-extrabold text-navy my-[3px]">Региональный центр защиты прав потребителей</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Взыскиваем компенсации за дефекты и просрочку с застройщиков. Оплата только по результату.
            </p>
          </div>

          <div>
            <p className="font-display font-bold text-navy">Контакты</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">+7 (904) 891-68-88; +7 (995) 440-77-50</li>
              <li className="flex items-center gap-2">г. Красноярск, ул. Красной гвардии, д. 21</li>
            </ul>
          </div>

          <div>
            <p className="font-display font-bold text-navy">Мы на связи</p>
            <div className="mt-4 flex gap-3">
              {[
                { icon: 'Phone', href: 'tel:+79048916888', label: 'Позвонить' },
                { icon: 'MessageCircle', href: 'https://max.ru/+79048916888', label: 'Max' },
                { icon: 'Send', href: 'https://t.me/+79048916888', label: 'Telegram' },
              ].map((n) => (
                <a key={n.label} href={n.href} aria-label={n.label} title={n.label} className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-navy transition hover:bg-navy hover:text-white">
                  <Icon name={n.icon} size={18} />
                </a>
              ))}
            </div>
            <div className="mt-6 space-y-1 text-xs text-muted-foreground">
              <a href="#" className="block hover:text-navy">Политика конфиденциальности</a>
              <p>© 2026 Региональный центр защиты прав потребителей. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>

      <ChatHelper />
    </div>
  );
};

export default Index;