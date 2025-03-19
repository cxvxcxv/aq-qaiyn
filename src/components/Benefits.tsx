'use client';

import { useOpacity } from '@/hooks/animation/useOpacity';

export function Benefits() {
  const { ref, opacityClass } = useOpacity();

  return (
    <section
      ref={ref}
      className={`flex flex-col items-center text-center ${opacityClass}`}
    >
      {/* <h1>Отдых с пользой для здоровья</h1>
      <h2 className="mb-4 mt-8">5-дневный курс из пантовых ванн:</h2> */}
      {/* <ul className="mb-8 text-left">
        <Li>Укрепляет иммунитет</Li>
        <Li>Восстанавливает мужскую силу</Li>
        <Li>Снимает стресс и усталость</Li>
        <Li>Улучшает работу кишечника</Li>
        <Li>Укрепляет суставы и связки</Li>
        <Li>Тонизирует кожу</Li>
        <Li>Омолаживает снаружи и изнутри</Li>
      </ul> */}
    </section>
  );
}
