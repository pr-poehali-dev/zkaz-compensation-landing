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
};

const CASES: CaseItem[] = [
  {
    complex: 'ЖК «Зелёный берег»',
    icon: 'Snowflake',
    total: '930 000 ₽',
    term: '5 месяцев',
    title: 'Промерзание стен и плесень',
    problem:
      'В угловой секции систематически промерзали стены, на откосах и в углах появилась чёрная плесень. Застройщик ссылался на «неправильную эксплуатацию».',
    actions:
      'Зафиксировали дефекты актом осмотра с тепловизионным обследованием (перепад температур до 8 °C), подготовили претензию с расчётом ремонта и морального вреда. При отказе подали иск.',
    result: 'Суд взыскал ремонт, неустойку, штраф 50% и моральный вред.',
    breakdown: [
      { label: 'Стоимость ремонта', value: '390 000 ₽' },
      { label: 'Неустойка', value: '210 000 ₽' },
      { label: 'Штраф 50%', value: '300 000 ₽' },
      { label: 'Моральный вред', value: '30 000 ₽' },
    ],
    benefit: 'Доказываем «скрытые» дефекты тепловизором и не даём застройщику свалить вину на жильца.',
  },
  {
    complex: 'ЖК «Северный»',
    icon: 'Wind',
    total: '730 000 ₽',
    term: '4 месяца',
    title: 'Некачественный монтаж окон и продувание',
    problem:
      'Окна продувались по периметру, на подоконниках скапливался конденсат, створки закрывались с усилием. Застройщик утверждал, что «это нормально».',
    actions:
      'Привлекли строительного эксперта, зафиксировали отклонения по ГОСТ 30971-2012. Направили претензию с требованием устранить недостатки или выплатить стоимость замены.',
    result: 'Застройщик не устранил недостатки в срок — дело решили в суде.',
    breakdown: [
      { label: 'Замена окон и откосы', value: '280 000 ₽' },
      { label: 'Неустойка', value: '190 000 ₽' },
      { label: 'Штраф 50%', value: '235 000 ₽' },
      { label: 'Моральный вред', value: '25 000 ₽' },
    ],
    benefit: 'Знание нормативов ГОСТ превращает «мелкий» дефект в крупную компенсацию.',
  },
  {
    complex: 'ЖК «Уютный»',
    icon: 'LayoutGrid',
    total: '400 000 ₽',
    term: '3 месяца',
    title: 'Дефекты стяжки пола и трещины',
    problem:
      'При приёмке выявили трещины в стяжке, отслоение на площади более 40% пола, перепады высот до 15 мм. Застройщик предлагал «подшлифовать» и закрыть вопрос.',
    actions:
      'Провели инструментальное обследование, подготовили расчёт полного демонтажа и устройства новой стяжки. Направили мотивированную претензию.',
    result: 'Через 10 дней после подачи иска застройщик предложил мировое соглашение.',
    breakdown: [
      { label: 'Устранение дефектов', value: '320 000 ₽' },
      { label: 'Расходы на экспертизу', value: '35 000 ₽' },
      { label: 'Юридические расходы', value: '45 000 ₽' },
    ],
    benefit: 'Добиваемся выплат и через мировое соглашение — деньги быстрее, без долгого суда.',
  },
  {
    complex: 'ЖК «Прибрежный»',
    icon: 'CalendarClock',
    total: '975 000 ₽',
    term: '6 месяцев',
    title: 'Просрочка сдачи + дефекты отделки',
    problem:
      'Квартира сдана на 132 дня позже срока. При приёмке выявили неровные стены, отслоение плитки, некачественную укладку ламината. Застройщик отказывался платить и устранять недостатки.',
    actions:
      'Рассчитали неустойку по ст. 6 ФЗ-214 с учётом двойной ставки для граждан, приложили акт осмотра с фотофиксацией и сметой. Направили комплексную претензию.',
    result: 'Дело дошло до суда — взыскали неустойку, ремонт, штраф и моральный вред.',
    breakdown: [
      { label: 'Неустойка за просрочку', value: '410 000 ₽' },
      { label: 'Устранение дефектов отделки', value: '220 000 ₽' },
      { label: 'Штраф 50%', value: '315 000 ₽' },
      { label: 'Моральный вред', value: '30 000 ₽' },
    ],
    benefit: 'Самый «денежный» кейс: берём не только дефекты, но и просрочку — часто это самая большая сумма.',
  },
  {
    complex: 'ЖК «Высотный»',
    icon: 'Wind',
    total: '470 000 ₽',
    term: '5 месяцев',
    title: 'Проблемы вентиляции и обратная тяга',
    problem:
      'На 17-м этаже наблюдалась обратная тяга в вентканалах: запахи из других квартир шли в жильё, на кухне скапливалась влага. Застройщик считал проблему «нормальной для высоток».',
    actions:
      'Провели замеры воздухообмена, зафиксировали несоответствие СП 60.13330.2020. Подготовили техническое заключение и претензию с требованием привести вентиляцию в норму либо выплатить стоимость работ.',
    result: 'Дело дошло до суда — взыскали стоимость работ, неустойку, штраф и моральный вред.',
    breakdown: [
      { label: 'Устранение проблемы', value: '180 000 ₽' },
      { label: 'Неустойка', value: '120 000 ₽' },
      { label: 'Штраф 50%', value: '150 000 ₽' },
      { label: 'Моральный вред', value: '20 000 ₽' },
    ],
    benefit: 'Закрываем редкую, но болезненную проблему — за вентиляцию тоже можно получить деньги.',
  },
  {
    complex: 'ЖК «Семейный»',
    icon: 'DoorClosed',
    total: '150 000 ₽',
    term: '2,5 месяца',
    title: 'Дефекты входной двери и замков',
    problem:
      'Входная дверь имела перекос, неплотное прилегание полотна, замки заедали. Застройщик предлагал «подождать усадку дома».',
    actions:
      'Зафиксировали отклонения по вертикали и горизонтали, проверили работоспособность замков. Подготовили расчёт стоимости замены двери и фурнитуры. Направили претензию.',
    result: 'После подачи иска застройщик добровольно выплатил компенсацию.',
    breakdown: [
      { label: 'Замена двери', value: '95 000 ₽' },
      { label: 'Расходы на экспертизу', value: '25 000 ₽' },
      { label: 'Юридические расходы', value: '30 000 ₽' },
    ],
    benefit: 'Быстрый кейс с понятным дефектом — для тех, кому нужны деньги максимально скоро.',
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

              <DialogContent className="max-w-lg border-border bg-card text-navy">
                <DialogHeader>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">{c.complex} · {c.term}</p>
                  <DialogTitle className="font-display text-xl font-extrabold text-navy">{c.title}</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 text-sm">
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
                    <div className="space-y-2">
                      {c.breakdown.map((b) => (
                        <div key={b.label} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{b.label}</span>
                          <span className="font-semibold text-navy">{b.value}</span>
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
