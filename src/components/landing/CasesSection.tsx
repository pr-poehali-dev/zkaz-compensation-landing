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
    complex: 'ООО СЗ СК «ЭкономЖилСтрой»',
    icon: 'Gavel',
    total: '251 900 ₽',
    term: 'Август 2025',
    title: 'Строительные недостатки квартиры',
    problem:
      'В квартире были выявлены строительные недостатки. Застройщик не возместил стоимость их устранения добровольно, поэтому собственник обратился в суд.',
    actions:
      'Провели независимую экспертизу, определившую стоимость устранения недостатков, подготовили иск и представляли интересы клиента в Советском районном суде г. Красноярска.',
    result: 'Суд удовлетворил исковые требования частично и взыскал с застройщика стоимость устранения недостатков, моральный вред и судебные расходы.',
    breakdown: [
      { label: 'Стоимость устранения недостатков', value: '184 800 ₽' },
      { label: 'Моральный вред', value: '5 000 ₽' },
      { label: 'Услуги эксперта', value: '39 000 ₽' },
      { label: 'Услуги представителя', value: '20 000 ₽' },
      { label: 'Нотариальная доверенность', value: '3 100 ₽' },
    ],
    benefit: 'Реальное дело из нашей практики — взыскана стоимость недостатков и все расходы клиента на экспертизу и юристов.',
    document: 'https://cdn.poehali.dev/projects/bc95d7d2-5577-46ab-81ff-ded0d2e4bfc4/bucket/25ecca07-242d-4e94-ac29-ff04b15e0287.png',
    documentLabel: 'Решение суда · Советский районный суд г. Красноярска',
    sourceUrl: 'https://sovet.krk.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=doc&number=528673305&delo_id=1540005&new=0&text_number=1',
    sourceLabel: 'Ознакомиться с делом на официальном сайте суда',
  },
  {
    complex: 'ООО «СЗ «Стасова»',
    icon: 'Gavel',
    total: '230 047,72 ₽',
    term: 'Май 2026',
    title: 'Расходы на устранение недостатков',
    problem:
      'В квартире были обнаружены строительные недостатки. Застройщик не компенсировал расходы на их устранение, поэтому собственник защищал свои права в суде.',
    actions:
      'Провели досудебную экспертизу, подготовили иск и представляли интересы клиента в Октябрьском районном суде г. Красноярска.',
    result: 'Суд удовлетворил иск частично и взыскал с застройщика расходы на устранение недостатков, моральный вред и все судебные расходы клиента.',
    breakdown: [
      { label: 'Расходы на устранение недостатков', value: '159 455 ₽' },
      { label: 'Моральный вред', value: '2 000 ₽' },
      { label: 'Юридические услуги', value: '30 000 ₽' },
      { label: 'Нотариальная доверенность', value: '3 300 ₽' },
      { label: 'Досудебная экспертиза', value: '35 000 ₽' },
      { label: 'Почтовые расходы', value: '292,72 ₽' },
    ],
    benefit: 'Реальное дело из нашей практики — взысканы расходы на устранение недостатков и все затраты клиента.',
    document: 'https://cdn.poehali.dev/projects/bc95d7d2-5577-46ab-81ff-ded0d2e4bfc4/bucket/b9d2aaf0-61e4-4df6-a466-9df888af3792.png',
    documentLabel: 'Решение суда · Октябрьский районный суд г. Красноярска',
    sourceUrl: 'https://oktyabr.krk.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=doc&number=636425090&delo_id=1540005&new=0&text_number=1',
    sourceLabel: 'Ознакомиться с делом на официальном сайте суда',
  },
  {
    complex: 'АО «Фирма «Культбытстрой»',
    icon: 'Gavel',
    total: '508 298,31 ₽',
    term: 'Май 2026',
    title: 'Недостатки, неустойка и штраф',
    problem:
      'В квартире были выявлены строительные недостатки. Застройщик отказался возместить расходы на их устранение, поэтому собственник обратился в суд.',
    actions:
      'Провели судебную экспертизу, подготовили иск и представляли интересы клиента в Октябрьском районном суде г. Красноярска.',
    result: 'Суд удовлетворил иск частично и взыскал с застройщика расходы на устранение недостатков, неустойку, штраф, моральный вред и все судебные расходы клиента.',
    breakdown: [
      { label: 'Расходы на устранение недостатков', value: '151 992,91 ₽' },
      { label: 'Неустойка', value: '200 000 ₽' },
      { label: 'Моральный вред', value: '10 000 ₽' },
      { label: 'Штраф', value: '50 000 ₽' },
      { label: 'Судебная экспертиза', value: '68 000 ₽' },
      { label: 'Услуги представителя', value: '25 000 ₽' },
      { label: 'Почтовые расходы', value: '905,40 ₽' },
      { label: 'Нотариальные услуги', value: '2 400 ₽' },
    ],
    benefit: 'Реальное дело из нашей практики — помимо стоимости недостатков взысканы неустойка, штраф и все затраты клиента.',
    document: 'https://cdn.poehali.dev/projects/bc95d7d2-5577-46ab-81ff-ded0d2e4bfc4/bucket/b773683a-3966-4794-a25c-b6dfb38f7aad.png',
    documentLabel: 'Решение суда · Октябрьский районный суд г. Красноярска',
    sourceUrl: 'https://oktyabr.krk.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=doc&number=633827175&delo_id=1540005&new=0&text_number=1',
    sourceLabel: 'Ознакомиться с делом на официальном сайте суда',
  },
  {
    complex: 'ООО «Новый город»',
    icon: 'Gavel',
    total: '225 537 ₽',
    term: 'Июль 2022',
    title: 'Недостатки и неустойка',
    problem:
      'В квартире были выявлены строительные недостатки, а застройщик не возместил их стоимость и не выплатил неустойку. Собственники обратились в суд.',
    actions:
      'Провели строительно-техническую экспертизу, подготовили иск и представляли интересы клиентов в Ленинском районном суде г. Красноярска.',
    result: 'Суд удовлетворил требования частично: взыскал стоимость недостатков, неустойку, моральный вред и все судебные расходы. Выплата неустойки отсрочена до 31.12.2022.',
    breakdown: [
      { label: 'Стоимость устранения недостатков', value: '88 496 ₽' },
      { label: 'Неустойка (выплата отсрочена)', value: '88 496 ₽' },
      { label: 'Строительно-техническая экспертиза', value: '21 000 ₽' },
      { label: 'Услуги представителя', value: '15 000 ₽' },
      { label: 'Моральный вред', value: '10 000 ₽' },
      { label: 'Нотариальная доверенность', value: '2 300 ₽' },
      { label: 'Почтовые расходы', value: '245 ₽' },
    ],
    benefit: 'Реальное дело из нашей практики — взысканы стоимость недостатков, неустойка и все затраты клиентов.',
    document: 'https://cdn.poehali.dev/projects/bc95d7d2-5577-46ab-81ff-ded0d2e4bfc4/bucket/1e932540-fd7d-49dc-b032-33e3f57b59ac.png',
    documentLabel: 'Решение суда · Ленинский районный суд г. Красноярска',
    sourceUrl: 'https://lenins.krk.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=doc&number=401390605&delo_id=1540005&new=0&text_number=1',
    sourceLabel: 'Ознакомиться с делом на официальном сайте суда',
  },
];

const CasesSection = () => {
  return (
    <section id="cases" className="bg-navy-deep py-20 md:py-24 text-white grain">
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