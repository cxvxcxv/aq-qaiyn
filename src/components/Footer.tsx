'use client';

import Image from 'next/image';

// Replace with your background image path
import { TELS } from '@/constants/info.constants';

import nature from '@/assets/img/nature.png';

import { formatTel } from '@/utils/format-tel';

export function Footer() {
  return (
    <section className="relative flex min-h-[80dvh] w-screen flex-col justify-between p-8 text-center text-text-light">
      <Image
        src={nature}
        alt=""
        placeholder="blur"
        fill
        className="-z-10 object-cover brightness-50"
        priority
      />
      <div className="relative mb-10">
        <h1>Свяжитесь с нами</h1>
        <p className="my-2">Непременно ждем Вашего звонка.</p>
        <h2 className="mb-2 mt-10">Телефоны</h2>
        {TELS.map((tel, index) => (
          <a className="block text-xl" href={`tel:${tel}`} key={index}>
            {formatTel(tel)}
          </a>
        ))}
      </div>
      <p className="relative text-xs">
        Республика Казахстан, Восточно Казахстанская область, Катон-Карагайский
        район,с. Катон-Карагай.
      </p>
    </section>
  );
}
