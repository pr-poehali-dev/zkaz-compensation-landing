import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

type Msg = { from: 'bot' | 'user'; text: string };

const QUICK = [
  {
    q: 'Правда без предоплаты?',
    a: 'Да. Осмотр и консультация — бесплатно, экспертизу и претензию оплачиваем мы. Вы платите процент только после того, как получите деньги.',
  },
  {
    q: 'Сколько длится процесс?',
    a: 'В среднем 4–6 месяцев: осмотр, экспертиза, претензия, суд и выплата. Точный срок зависит от застройщика и загруженности суда.',
  },
  {
    q: 'Что за штраф 50%?',
    a: 'Если застройщик не удовлетворил претензию добровольно, суд взыскивает штраф 50% от суммы в вашу пользу — это норма закона о защите прав потребителей.',
  },
  {
    q: 'Сколько реально взыскать?',
    a: 'В 2024 году мы взыскали 12,3 млн ₽ для 27 дольщиков. Средний размер взыскания — от 480 000 до 920 000 ₽.',
  },
];

const ChatHelper = () => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: 'bot', text: 'Здравствуйте! Я помощник по взысканию компенсаций. Отвечу на вопросы 24/7. Что вас интересует?' },
  ]);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' });
  }, [msgs, open]);

  const ask = (q: string, a: string) => {
    setMsgs((m) => [...m, { from: 'user', text: q }]);
    setTimeout(() => setMsgs((m) => [...m, { from: 'bot', text: a }]), 450);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-navy text-white shadow-xl shadow-navy/30 transition hover:scale-105 hover:bg-navy-deep"
        aria-label="Открыть чат"
      >
        <Icon name={open ? 'X' : 'MessageCircle'} size={26} />
        {!open && <span className="absolute right-0 top-0 h-4 w-4 rounded-full bg-gold ring-2 ring-background" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[520px] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-scale-in">
          <div className="flex items-center gap-3 bg-navy-deep px-5 py-4 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
              <Icon name="Scale" size={20} className="text-gold" />
            </div>
            <div>
              <p className="font-display font-bold leading-tight">Юрист-помощник</p>
              <p className="flex items-center gap-1.5 text-xs text-white/60">
                <span className="h-2 w-2 rounded-full bg-green-400" /> Онлайн 24/7
              </p>
            </div>
          </div>

          <div ref={bodyRef} className="flex-1 space-y-3 overflow-y-auto bg-secondary/40 px-4 py-4">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.from === 'user'
                      ? 'rounded-br-sm bg-navy text-white'
                      : 'rounded-bl-sm bg-card text-navy shadow-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border bg-card p-3">
            <p className="mb-2 px-1 text-xs font-medium text-muted-foreground">Частые вопросы:</p>
            <div className="flex flex-wrap gap-2">
              {QUICK.map((item) => (
                <button
                  key={item.q}
                  onClick={() => ask(item.q, item.a)}
                  className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-navy transition hover:border-navy hover:bg-navy hover:text-white"
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatHelper;
