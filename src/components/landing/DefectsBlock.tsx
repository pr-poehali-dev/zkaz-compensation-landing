import Icon from '@/components/ui/icon';

const CONTACT_PHONE = '+79048916888';
const CONTACT_PHONE_DISPLAY = '+7 (904) 891-68-88 / +7 (995) 440-77-50';

const defects = [
  { icon: 'Square', title: 'Окна и стеклопакеты', text: 'Продувание, перекосы, трещины, нарушенный монтажный шов', amount: 'до 120 000 ₽' },
  { icon: 'PaintRoller', title: 'Стены и потолки', text: 'Отклонения от вертикали, неровная штукатурка, трещины', amount: 'до 150 000 ₽' },
  { icon: 'Layers', title: 'Полы и стяжка', text: 'Перепады высот, пустоты, отслоение стяжки', amount: 'до 100 000 ₽' },
  { icon: 'DoorClosed', title: 'Двери и замки', text: 'Перекос коробки, плохое прилегание, неисправные замки', amount: 'до 50 000 ₽' },
  { icon: 'Zap', title: 'Электрика', text: 'Нарушения в проводке, розетках и щитке', amount: 'до 80 000 ₽' },
  { icon: 'Droplets', title: 'Сантехника и отопление', text: 'Протечки, слабый напор, неверный монтаж радиаторов', amount: 'до 90 000 ₽' },
];

const DefectsBlock = () => {
  const handleCallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard?.writeText(CONTACT_PHONE_DISPLAY).catch(() => {});
      window.alert(`Позвоните нам: ${CONTACT_PHONE_DISPLAY}`);
    }
  };

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {defects.map((d) => (
          <div key={d.title} className="flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
              <Icon name={d.icon} fallback="Wrench" size={24} />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-navy">{d.title}</h3>
            <p className="mt-1 flex-1 text-sm text-muted-foreground">{d.text}</p>
            <p className="mt-4 font-display text-xl font-black text-gold">{d.amount}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-navy-deep p-8 text-white sm:flex-row">
        <div>
          <p className="font-display text-xl font-bold">Не уверены, есть ли дефекты у вас?</p>
          <p className="mt-1 text-sm text-white/70">Дефекты есть в каждой квартире — их просто не видно без экспертного осмотра.</p>
        </div>
        <a
          href={`tel:${CONTACT_PHONE}`}
          onClick={handleCallClick}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-gold px-7 py-4 font-display text-base font-bold text-navy-deep transition hover:brightness-110"
        >
          <Icon name="Phone" size={18} />
          Позвонить
        </a>
      </div>
    </div>
  );
};

export default DefectsBlock;