import { ReactNode } from 'react';
import Icon from '@/components/ui/icon';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const PHONES = [
  { href: 'tel:+79048916888', label: '+7 (904) 891-68-88' },
  { href: 'tel:+79954407750', label: '+7 (995) 440-77-50' },
];

interface CallPickerProps {
  className?: string;
  children: ReactNode;
}

const CallPicker = ({ className, children }: CallPickerProps) => (
  <Popover>
    <PopoverTrigger asChild>
      <button type="button" className={className}>
        <Icon name="Phone" size={18} />
        {children}
      </button>
    </PopoverTrigger>
    <PopoverContent className="w-72 border-border bg-card p-2">
      <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Выберите номер</p>
      {PHONES.map((p) => (
        <a
          key={p.href}
          href={p.href}
          className="flex items-center gap-3 rounded-lg px-3 py-3 font-display text-base font-bold text-navy transition hover:bg-muted"
        >
          <Icon name="Phone" size={16} className="text-gold" />
          {p.label}
        </a>
      ))}
    </PopoverContent>
  </Popover>
);

export default CallPicker;
