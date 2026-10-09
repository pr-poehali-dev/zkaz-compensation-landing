import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

type CaseItem = {
  complex: string;
  icon: string;
  total: string;
  term: string;
  title: string;
  problem: string;
  actions: string;
  result: string;
  breakdown: { label: string; value: string }[];
  benefit: string;
  document: string;
  documentLabel: string;
  sourceUrl?: string;
  sourceLabel?: string;
};

const CASES: CaseItem[] = [
  {
    complex: 'ООО УСК «Сибиряк»',
    icon: 'Gavel',
    total: '380 713,54 ₽',
    term: 'Август 2026',
    title: 'Строительные недостатки квартиры',
    problem:
      'В квартире были выявлены строительные недостатки. Застройщик не устранил их и не возместил стоимость исправления добровольно, поэтому потребитель обратился в суд за защитой прав.',
    actions:
      'Провели независимую экспертизу, определившую стоимость устранения недостатков, подготовили и подали исковое заявление в Советский районный суд г. Красноярска.',
    result: 'Суд удовлетворил исковые требования частично и взыскал с застройщика стоимость недостатков, неустойку, штраф, моральный вред и судебные расходы.',
    breakdown: [
      { label: 'Стоимость строительных недостатков', value: '200 000 ₽' },
      { label: 'Неустойка', value: '50 000 ₽' },
      { label: 'Штраф', value: '50 000 ₽' },
      { label: 'Моральный вред', value: '5 000 ₽' },
      { label: 'Юридические услуги', value: '30 000 ₽' },
      { label: 'Услуги эксперта', value: '42 000 ₽' },
      { label: 'Нотариальная доверенность', value: '3 400 ₽' },
      { label: 'Почтовые расходы', value: '313,54 ₽' },
    ],
    benefit: 'Реальное дело из нашей практики — взыскана стоимость недостатков, неустойка, штраф и все судебные расходы.',
    document: 'https://cdn.poehali.dev/projects/bc95d7d2-5577-46ab-81ff-ded0d2e4bfc4/bucket/dcc3be7a-6915-4c15-b5bd-c7affc0d122a.png',
    documentLabel: 'Решение суда · Советский районный суд г. Красноярска',
    sourceUrl: 'https://sovet.krk.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=doc&number=656345537&delo_id=1540005&new=0&text_number=1',
    sourceLabel: 'Ознакомиться с делом на официальном сайте суда',
  },
  {
    complex: 'ООО СЗ «Новый Город»',
    icon: 'Gavel',
    total: '67 000 ₽',
    term: 'Решение суда',
    title: 'Защита прав дольщика в суде',
    problem:
      'Застройщик не удовлетворил требования собственника квартиры в добровольном порядке, поэтому спор был передан в суд.',
    actions:
      'Подготовили и подали исковое заявление в Советский районный суд г. Красноярска, представляли интересы клиента в процессе, суд назначил судебную экспертизу.',
    result: 'Суд удовлетворил исковые требования частично: взыскал в пользу клиента моральный вред, штраф и судебные расходы, а расходы на судебную экспертизу возложил на застройщика.',
    breakdown: [
      { label: 'Моральный вред', value: '6 000 ₽' },
      { label: 'Штраф', value: '300 ₽' },
      { label: 'Судебные расходы', value: '60 700 ₽' },
      { label: 'Судебная экспертиза (оплачивает застройщик)', value: '68 000 ₽' },
    ],
    benefit: 'Реальное дело из нашей практики — судебные расходы клиента возмещены, а экспертизу оплатил застройщик.',
    document: 'https://cdn.poehali.dev/projects/bc95d7d2-5577-46ab-81ff-ded0d2e4bfc4/bucket/412b91b0-8148-43ee-af3b-3a8d6350e832.png',
    documentLabel: 'Решение суда · Советский районный суд г. Красноярска',
    sourceUrl: 'https://sovet.krk.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=doc&number=623592023&delo_id=1540005&new=0&text_number=1',
    sourceLabel: 'Ознакомиться с делом на официальном сайте суда',
  },
];

const CasesSection = () => {
  return (
    <section className="bg-navy-deep py-20 md:py-24 text-white grain">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Наши кейсы</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">Реальные суммы, реальные сроки</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <Dialog key={c.complex}>
              <DialogTrigger asChild>
                <button className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 text-left backdrop-blur-sm transition hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.08]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <Icon name={c.icon} size={22} />
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">{c.term}</span>
                  </div>
                  <p className="mt-5 text-sm text-white/60">{c.complex}</p>
                  <p className="mt-1 font-display text-3xl font-black text-gold">{c.total}</p>
                  <p className="mt-3 flex-1 text-sm text-white/75">{c.title}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition group-hover:text-gold">
                    Подробнее о деле <Icon name="ArrowRight" size={16} />
                  </span>
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-2xl border-border bg-card text-navy max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">{c.complex} · {c.term}</p>
                  <DialogTitle className="font-display text-xl font-extrabold text-navy">{c.title}</DialogTitle>
                </DialogHeader>

                <div className="space-y-5 text-sm">
                  <div>
                    <p className="font-semibold text-navy">Проблема</p>
                    <p className="mt-1 text-muted-foreground">{c.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Что сделали</p>
                    <p className="mt-1 text-muted-foreground">{c.actions}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Результат</p>
                    <p className="mt-1 text-muted-foreground">{c.result}</p>
                  </div>

                  <div className="rounded-xl bg-secondary/60 p-4">
                    <div className="space-y-2.5">
                      {c.breakdown.map((b) => (
                        <div key={b.label} className="grid grid-cols-[1fr_auto] items-baseline gap-x-3 text-sm">
                          <span className="text-muted-foreground">{b.label}</span>
                          <span className="whitespace-nowrap font-semibold text-navy">{b.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                      <span className="font-display font-bold text-navy">Итого</span>
                      <span className="font-display text-lg font-black text-navy">{c.total}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl bg-gold/10 p-4">
                    <Icon name="Sparkles" size={18} className="mt-0.5 shrink-0 text-gold" />
                    <p className="text-navy-light">{c.benefit}</p>
                  </div>

                  <a
                    href={c.document}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/doc flex items-center gap-3 rounded-xl border border-border bg-secondary/40 p-3 transition hover:border-gold/50 hover:bg-secondary/70"
                  >
                    <img
                      src={c.document}
                      alt={c.documentLabel}
                      className="h-16 w-12 shrink-0 rounded-md border border-border object-cover object-top"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-navy">{c.documentLabel}</p>
                      <p className="text-xs text-muted-foreground">Образец документа по делу · открыть в полном размере</p>
                    </div>
                    <Icon name="ExternalLink" size={16} className="shrink-0 text-muted-foreground transition group-hover/doc:text-gold" />
                  </a>

                  {c.sourceUrl && (
                    <a
                      href={c.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 rounded-xl border border-border bg-secondary/40 p-3 text-sm font-medium text-navy transition hover:border-gold/50 hover:bg-secondary/70"
                    >
                      <Icon name="Landmark" size={16} className="shrink-0 text-gold" />
                      {c.sourceLabel}
                      <Icon name="ExternalLink" size={14} className="ml-auto shrink-0 text-muted-foreground" />
                    </a>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;