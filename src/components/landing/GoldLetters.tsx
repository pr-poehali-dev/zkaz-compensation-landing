import { useState } from 'react';

const GoldLetters = ({ text }: { text: string }) => {
  const [painted, setPainted] = useState<Set<number>>(new Set());

  const paint = (i: number) => {
    setPainted((prev) => {
      const next = new Set(prev);
      next.add(i);
      return next;
    });
  };

  let index = 0;
  const words = text.split(' ');

  return (
    <>
      {words.map((word, w) => (
        <span key={w}>
          <span className="inline-block whitespace-nowrap">
            {word.split('').map((ch) => {
              const i = index++;
              return (
                <span
                  key={i}
                  onClick={() => paint(i)}
                  className={`transition-colors duration-300 ${painted.has(i) ? 'text-gold' : ''}`}
                >
                  {ch}
                </span>
              );
            })}
          </span>
          {w < words.length - 1 && ' '}
        </span>
      ))}
    </>
  );
};

export default GoldLetters;
