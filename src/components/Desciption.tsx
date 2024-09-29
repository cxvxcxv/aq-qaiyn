'use client';

import { DESCRIPTION_INFO, TELS } from '@/constants/info.constants';

import { useOpacity } from '@/hooks/animation/useOpacity';

import { Slider } from './Slider';
import { A } from './ui/A';
import { Li } from './ui/Li';

export function Description() {
  const { ref, opacityClass } = useOpacity();
  return (
    <section className="my-24 text-center sm:text-left">
      <div className="w-full">
        <Slider />
        <h1 className="my-4">По-домашнему</h1>
        <p>
          Наш гостиничный корпус состоит из семи номеров на 2-3 спальных места
          каждая. Имеется общая гостиная для проведения досуга, игр и просмотров
          фильмов.
        </p>
        <A href={`tel:${TELS[0]}`} className="my-8 w-full">
          Забронировать номер
        </A>
      </div>
      <h1>Описание</h1>
      <div
        ref={ref}
        className={`my-4 grid grid-cols-3 justify-items-center rounded-sm border border-text-dark/50 dark:border-text-light/50 ${opacityClass}`}
      >
        {DESCRIPTION_INFO.map((item, index) => (
          <div key={index} className="p-4 text-center">
            <item.icon
              width={48}
              height={48}
              strokeWidth={1.5}
              className="mx-auto opacity-50"
            />
            <h3 className="my-2 text-xs font-bold sm:text-base">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="sm:flex sm:justify-between">
        <div>
          <h2>Одна процедура состоит из:</h2>
          <ul className={`text-left ${opacityClass}`}>
            <Li>пантофитовой ванны</Li>
            <Li>пантофитовой сауны</Li>
            <Li>фито-кабинки</Li>
            <Li>чайной церемонии с алтайским мёдом</Li>
          </ul>
        </div>
        <p className="text-xs sm:w-1/3">
          Для принятия процедур допускаются дети с 14 лет. Противопоказания
          общие для водных процедур, тяжелая форма гипертонии.
        </p>
      </div>
    </section>
  );
}
