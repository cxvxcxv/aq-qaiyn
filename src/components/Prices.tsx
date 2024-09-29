'use client';

import { PRICES_INFO, TELS } from '@/constants/info.constants';

import { useOpacity } from '@/hooks/animation/useOpacity';

import { A } from './ui/A';
import { Li } from './ui/Li';

export function Prices() {
  const { ref, opacityClass } = useOpacity();

  return (
    <section className="text-center">
      <h1 className="m:text-left">Наши цены</h1>

      <div
        ref={ref}
        className={`my-4 grid grid-cols-1 gap-8 sm:grid-cols-2 ${opacityClass}`}
      >
        {PRICES_INFO.map((option, index) => (
          <div key={index} className="rounded-sm bg-primary/10 p-8">
            <h2>{option.title}</h2>
            <h1 className="my-4">{option.price}</h1>
            <ul className="text-left">
              {option.components.map(component => (
                <Li key={component}>{component}</Li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <A href={`tel:${TELS[0]}`} className="w-full">
        Выберите тур
      </A>
    </section>
  );
}
