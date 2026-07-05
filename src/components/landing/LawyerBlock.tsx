import Icon from '@/components/ui/icon';

const points = [
  { icon: 'GraduationCap', text: 'Профильное юридическое образование, специализация — защита прав дольщиков' },
  { icon: 'Briefcase', text: 'Более 100 выигранных дел против застройщиков' },
  { icon: 'MessageSquareText', text: 'Лично веду переговоры и суды — без передачи дела ассистентам' },
];

const LawyerBlock = () => {
  return (
    <section className="container py-20 md:py-24">
      <div className="grid items-center gap-10 rounded-2xl border border-border bg-card p-8 shadow-[0_20px_60px_-25px_hsl(var(--navy)/0.25)] md:p-10 lg:grid-cols-[280px_1fr]">
        <div className="mx-auto w-full max-w-[280px]">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://cdn.poehali.dev/projects/bc95d7d2-5577-46ab-81ff-ded0d2e4bfc4/bucket/781c8f3f-4aeb-4906-8fbe-a819800f524e.jpg"
              alt="Юрист по делам дольщиков"
              className="aspect-[3/4] w-full object-cover"
            />
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
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Кто ведёт ваше дело</p>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-navy md:text-3xl">
            Работаете напрямую с юристом, а не с колл-центром
          </h2>
          <p className="mt-4 text-muted-foreground">
            Никаких безликих менеджеров. С первого звонка и до получения денег на счёт с вами работает один и тот же специалист — он же готовит претензию и представляет интересы в суде.
          </p>

          <div className="mt-6 space-y-4">
            {points.map((p) => (
              <div key={p.text} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-navy">
                  <Icon name={p.icon} size={18} />
                </div>
                <p className="text-sm text-navy-light">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerBlock;
