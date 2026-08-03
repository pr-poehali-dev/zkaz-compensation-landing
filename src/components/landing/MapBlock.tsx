import Icon from '@/components/ui/icon';

const RATING = 4.9;
const REVIEWS = 219;
const YANDEX_MAPS_URL = 'https://yandex.ru/maps/org/regionalny_tsentr_zashchity_prav_potrebiteley/236496153598/';
const ADDRESS = 'г. Красноярск, ул. Красной Гвардии, д. 21';

const Stars = ({ value }: { value: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => {
      const fill = Math.max(0, Math.min(1, value - (i - 1)));
      return (
        <span key={i} className="relative inline-block">
          <Icon name="Star" size={22} className="text-navy/15" />
          <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
            <Icon name="Star" size={22} className="fill-gold text-gold" />
          </span>
        </span>
      );
    })}
  </div>
);

const MapBlock = () => {
  return (
    <section className="container py-20 md:py-24">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Где нас найти</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
          Приезжайте или вызовите на осмотр
        </h2>
      </div>

      <div className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_60px_-20px_hsl(var(--navy)/0.25)] lg:grid-cols-[1fr_1.4fr]">
        {/* Info */}
        <div className="flex flex-col justify-between gap-8 p-8 md:p-10">
          <div className="space-y-6">
            <div className="inline-flex items-baseline gap-3 rounded-xl bg-navy-deep px-5 py-4 text-white grain">
              <span className="font-display text-4xl font-black text-gold">{RATING.toFixed(1)}</span>
              <div>
                <Stars value={RATING} />
                <p className="mt-1 text-xs text-white/60">на основе {REVIEWS} отзывов на картах</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-navy">
                <Icon name="MapPin" size={20} />
              </div>
              <div>
                <p className="font-display font-bold text-navy">Адрес офиса</p>
                <p className="text-sm text-muted-foreground">{ADDRESS}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-navy">
                <Icon name="Clock" size={20} />
              </div>
              <div>
                <p className="font-display font-bold text-navy">Часы работы</p>
                <p className="text-sm text-muted-foreground">Пн–Пт 9:00–20:00 · Сб 10:00–16:00</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-navy">
                <Icon name="Phone" size={20} />
              </div>
              <div>
                <p className="font-display font-bold text-navy">Телефон</p>
                <p className="text-sm text-muted-foreground">+7 (904) 891-68-88; +7 (995) 440-77-50</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={YANDEX_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 font-display font-bold text-white transition hover:bg-navy-deep"
            >
              <Icon name="Navigation" size={18} /> Построить маршрут
            </a>
            <a
              href={YANDEX_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3.5 font-display font-bold text-navy transition hover:bg-secondary"
            >
              <Icon name="Star" size={18} className="text-gold" /> Все отзывы
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="relative min-h-[340px] lg:min-h-full">
          <iframe
            title="Карта офиса"
            src="https://yandex.ru/map-widget/v1/?text=Красноярск%2C%20улица%20Красной%20Гвардии%2C%2021&z=16"
            className="absolute inset-0 h-full w-full grayscale-[0.15]"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default MapBlock;