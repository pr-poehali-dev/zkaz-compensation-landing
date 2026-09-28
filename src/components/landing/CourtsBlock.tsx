import Icon from '@/components/ui/icon';

interface CourtLink {
  name: string;
  url: string;
}

const courts: CourtLink[] = [
  { name: 'Красноярский краевой суд', url: '#' },
  { name: 'Октябрьский районный суд г. Красноярска', url: '#' },
  { name: 'Железнодорожный районный суд г. Красноярска', url: '#' },
  { name: 'Советский районный суд г. Красноярска', url: '#' },
  { name: 'Свердловский районный суд г. Красноярска', url: '#' },
  { name: 'Центральный районный суд г. Красноярска', url: '#' },
  { name: 'Кировский районный суд г. Красноярска', url: '#' },
  { name: 'Ленинский районный суд г. Красноярска', url: '#' },
];

const CourtsBlock = () => {
  return (
    <section className="container py-20 md:py-24">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Полезные ссылки</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">Суды Красноярска</h2>
        <p className="mt-4 text-muted-foreground">Официальные сайты судов, где рассматриваются дела о защите прав потребителей.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courts.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-5 transition hover:border-navy/30 hover:shadow-md"
          >
            <span className="flex items-center gap-3 text-sm font-medium text-navy">
              <Icon name="Landmark" size={20} className="shrink-0 text-gold" />
              {c.name}
            </span>
            <Icon name="ExternalLink" size={16} className="shrink-0 text-muted-foreground" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default CourtsBlock;
