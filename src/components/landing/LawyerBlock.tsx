import Icon from '@/components/ui/icon';

const managers = [
  {
    photo: 'https://cdn.poehali.dev/projects/bc95d7d2-5577-46ab-81ff-ded0d2e4bfc4/files/8bd9aacf-0345-4ad9-b039-ccf761761af3.jpg',
    name: 'Анна Соколова',
    role: 'Ведущий менеджер по работе с клиентами',
    text: 'С первого звонка сопровождаю вас лично: собираю документы, слежу за сроками и держу в курсе каждого этапа.',
  },
  {
    photo: 'https://cdn.poehali.dev/projects/bc95d7d2-5577-46ab-81ff-ded0d2e4bfc4/files/cf4bb4e5-0d8b-48f8-bf22-9cc47e30cc09.jpg',
    name: 'Дмитрий Волков',
    role: 'Менеджер по сопровождению дел',
    text: 'Отвечаю за общение с застройщиком и экспертами — вы получаете отчёт о ходе дела без лишних звонков.',
  },
  {
    photo: 'https://cdn.poehali.dev/projects/bc95d7d2-5577-46ab-81ff-ded0d2e4bfc4/files/1e8f66de-1674-4805-a9cf-8232b83cbac0.jpg',
    name: 'Елена Гринько',
    role: 'Менеджер по выплатам',
    text: 'Контролирую поступление денег на ваш счёт и оформляю все документы по итогам дела.',
  },
];

const LawyerBlock = () => {
  return (
    <section className="container py-20 md:py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Кто ведёт ваше дело</p>
        <h2 className="mt-3 font-display text-2xl font-extrabold text-navy md:text-3xl">
          Работаете с закреплённым менеджером, а не с колл-центром
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Никаких безликих операторов. С первого звонка и до получения денег на счёт с вами работает команда, которая закреплена за вашим делом.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {managers.map((m) => (
          <div
            key={m.name}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_60px_-25px_hsl(var(--navy)/0.25)]"
          >
            <div className="relative overflow-hidden">
              <img src={m.photo} alt={m.name} className="aspect-[3/4] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-4">
                <div className="flex items-center gap-1.5 text-gold">
                  <Icon name="Star" size={14} className="fill-gold" />
                  <Icon name="Star" size={14} className="fill-gold" />
                  <Icon name="Star" size={14} className="fill-gold" />
                  <Icon name="Star" size={14} className="fill-gold" />
                  <Icon name="Star" size={14} className="fill-gold" />
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="font-display text-lg font-bold text-navy">{m.name}</p>
              <p className="mt-1 text-sm font-semibold text-gold">{m.role}</p>
              <p className="mt-3 text-sm text-navy-light">{m.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LawyerBlock;
