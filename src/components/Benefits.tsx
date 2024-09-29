'use client';

import { TELS } from '@/constants/info.constants';

import { useOpacity } from '@/hooks/animation/useOpacity';

import { A } from './ui/A';
import { Li } from './ui/Li';

export function Benefits() {
  const { ref, opacityClass } = useOpacity();

  return (
    <section
      ref={ref}
      className={`flex flex-col items-center text-center ${opacityClass}`}
    >
      <h1>Отдых с пользой для здоровья</h1>
      <h2 className="mb-4 mt-8">5-дневный курс из пантовых ванн:</h2>
      <div>
        <ul className="mb-8 text-left">
          <Li>Укрепляет иммунитет</Li>
          <Li>Восстанавливает мужскую силу</Li>
          <Li>Снимает стресс и усталость</Li>
          <Li>Улучшает работу кишечника</Li>
          <Li>Укрепляет суставы и связки</Li>
          <Li>Тонизирует кожу</Li>
          <Li>Омолаживает снаружи и изнутри</Li>
        </ul>
        <A href={`tel:${TELS[0]}`} className="w-full">
          Забронировать курс
        </A>
      </div>
    </section>
  );
}
