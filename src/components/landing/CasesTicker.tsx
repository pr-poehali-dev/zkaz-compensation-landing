import Icon from '@/components/ui/icon';
import { CASES } from '@/components/landing/CasesSection';

const items = CASES.filter((c) => c.sourceUrl);

const Row = ({ hidden }: { hidden?: boolean }) => (
  <div className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={hidden}>
    {items.map((c, i) => (
      <a
        key={i}
        href={c.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={hidden ? -1 : 0}
        className="group flex shrink-0 items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm transition hover:border-gold/60 hover:bg-white/10"
      >
        <Icon name="Gavel" size={16} className="text-gold" />
        <span className="font-semibold text-white">{c.complex}</span>
        <span className="font-display font-bold text-gold">{c.total}</span>
        <Icon name="ExternalLink" size={14} className="text-white/50 transition group-hover:text-gold" />
      </a>
    ))}
  </div>
);

const CasesTicker = () => (
  <div className="relative border-t border-white/10 bg-black/20 py-4">
    <p className="container mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
      Реальные решения судов Красноярска
    </p>
    <div className="ticker-mask overflow-hidden">
      <div className="ticker-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  </div>
);

export default CasesTicker;
