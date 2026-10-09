import Icon from '@/components/ui/icon';

const stepsInfo = [
  'Заключаем договор и назначаем дату осмотра квартиры экспертами',
  'Независимые эксперты фиксируют все отклонения от проекта, ГОСТов и СНиПов',
  'Готовим претензию и направляем её застройщику',
  'Если застройщик отказывается платить добровольно, идём в суд',
  'Вы получаете деньги, мы получаем процент от выплаты',
];

const laws = [
  {
    title: 'Ст. 7 Федерального закона № 214-ФЗ',
    text: 'Застройщик обязан передать квартиру надлежащего качества. При недостатках вы вправе требовать безвозмездного устранения, уменьшения цены или возмещения расходов на устранение. Гарантия на квартиру не менее 5 лет, на инженерное оборудование не менее 3 лет.',
  },
  {
    title: 'Ст. 10 Федерального закона № 214-ФЗ',
    text: 'За нарушение обязательств застройщик отвечает неустойкой и возмещает убытки.',
  },
  {
    title: 'Ст. 13 Закона «О защите прав потребителей»',
    text: 'Если застройщик не выполнил требования добровольно, суд взыскивает штраф в пользу потребителя.',
  },
  {
    title: 'Ст. 15 Закона «О защите прав потребителей»',
    text: 'Потребитель вправе получить компенсацию морального вреда при нарушении его прав.',
  },
];

const ProcedureBlock = () => {
  return (
    <section id="how" className="bg-secondary/50 py-20 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">О процедуре</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">Что это за процедура и зачем она нужна</h2>
          <p className="mt-4 text-muted-foreground">
            Новостройки сдаются с отклонениями от норм почти всегда. Закон даёт собственнику право требовать за это деньги, и мы помогаем получить их без предоплаты и хлопот.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                <Icon name="ListChecks" size={22} />
              </div>
              <h3 className="font-display text-xl font-bold text-navy">Как проходит процедура</h3>
            </div>
            <ol className="mt-6 space-y-4">
              {stepsInfo.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/20 font-display text-sm font-bold text-navy">{i + 1}</span>
                  <span className="text-sm text-muted-foreground">{s}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-6">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                  <Icon name="UserCheck" size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">Какая выгода вам</h3>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><Icon name="Check" size={16} className="mt-0.5 shrink-0 text-gold" /> Деньги за дефекты, которые застройщик обязан компенсировать</li>
                <li className="flex gap-2"><Icon name="Check" size={16} className="mt-0.5 shrink-0 text-gold" /> Никаких предоплат: осмотр, экспертиза и претензия за наш счёт</li>
                <li className="flex gap-2"><Icon name="Check" size={16} className="mt-0.5 shrink-0 text-gold" /> Не нужно самим ходить по судам и общаться с застройщиком</li>
                <li className="flex gap-2"><Icon name="Check" size={16} className="mt-0.5 shrink-0 text-gold" /> Штраф и моральный вред в вашу пользу, если застройщик тянет</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                  <Icon name="Handshake" size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">Какая выгода нам</h3>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Мы получаем фиксированный процент только после того, как деньги поступили вам. Поэтому берёмся лишь за дела с реальной перспективой и доводим их до результата.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
              <Icon name="Scale" size={22} />
            </div>
            <h3 className="font-display text-xl font-bold text-navy">На каком законе это основано</h3>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {laws.map((l) => (
              <div key={l.title} className="rounded-xl bg-secondary/60 p-5">
                <p className="font-display text-sm font-bold text-navy">{l.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{l.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Размеры неустойки и штрафа в отдельные периоды ограничиваются постановлениями Правительства РФ. Актуальные условия для вашего случая юрист уточнит на бесплатной консультации.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcedureBlock;