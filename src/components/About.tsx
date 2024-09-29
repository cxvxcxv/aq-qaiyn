'use client';

import Image from 'next/image';

import selfie from '@/assets/img/selfie.png';

import { useOpacity } from '@/hooks/animation/useOpacity';

export function About() {
  const { ref, opacityClass } = useOpacity();

  return (
    <section className="flex flex-col text-center sm:flex-row-reverse sm:items-center sm:gap-8 sm:text-left">
      <span className="-mx-xs sm:m-0 sm:w-1/3">
        <Image
          src={selfie}
          alt=""
          className="aspect-video object-cover object-top sm:aspect-[3/4]"
        />
      </span>
      <div ref={ref} className={`sm:w-2/3 ${opacityClass}`}>
        <h1>О нас</h1>
        <p className="opacity-80">
          Уникальность лечения в санатории «Ак-Кайын» заключается в особой воде
          используемой для пантовых ванн. Она добывается из подземных источников
          родниковых вод глубиной 110 метров. Биохимический состав воды обогащен
          комплексом минералов, а высокая щёлочность (ph-8) нейтрализует
          свободные радикалы, т.е. действует как мощным антиоксидатом, который
          борется с раковыми клетками.
        </p>
        <br />
        <p className="opacity-80">
          Еще одна особенность санатория Ак-Кайын это исключительный состав
          пантовых ванн. В отличие от других пантолечебниц мы готовим ванны на
          основе отвара пант маралов, а так же добавляем отвар уникальных
          целебных растений Алтая.
        </p>
      </div>
    </section>
  );
}
