'use client';

import Image from 'next/image';

import { TELS } from '@/constants/info.constants';

import nature from '@/assets/img/nature.png';

import { formatTel } from '@/utils/format-tel';

export function Footer() {
  return (
    <section className="relative flex min-h-[80dvh] flex-col justify-between p-8 text-center text-text-light">
      <Image
        src={nature}
        alt=""
        placeholder="blur"
        fill
        className="-z-10 object-cover brightness-50"
        loading="lazy"
      />
      <div className="items-center justify-around gap-8 md:flex">
        <div className="mb-10 flex-1">
          <h1>Свяжитесь с нами</h1>
          <p className="my-2">Непременно ждем Вашего звонка.</p>
          <h2 className="mb-2 mt-10">Телефоны</h2>
          {TELS.map((tel, index) => (
            <a
              className="m-auto block w-max text-xl"
              href={`tel:${tel}`}
              key={index}
            >
              {formatTel(tel)}
            </a>
          ))}
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.5883124211473!2d85.58034765350001!3d49.17195700493726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42bed3dc42e0baf3%3A0x9e6b3a1b7b9cbaac!2sLok%20%22Ak-Kayyn%22!5e1!3m2!1sen!2skz!4v1742383335070!5m2!1sen!2skz"
          className="h-full w-full flex-1 md:aspect-square"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-2 text-xs">
        Республика Казахстан, Восточно Казахстанская область, Катон-Карагайский
        район,с. Катон-Карагай.
      </p>
    </section>
  );
}
