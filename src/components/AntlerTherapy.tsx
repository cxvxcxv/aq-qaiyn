'use client';

import { useOpacity } from '@/hooks/animation/useOpacity';

import { Li } from './ui/Li';

export function AntlerTherapy() {
  const { ref, opacityClass } = useOpacity();

  return (
    <section className="my-24 flex flex-col gap-16 text-center sm:flex-row sm:items-center sm:text-left">
      <div className="-mx-xs sm:m-0">
        <h1 className="mb-1">Пантолечение</h1>
        <video
          className="aspect-square w-screen object-cover sm:m-0 sm:w-full"
          controls={false}
          loop
          muted
          autoPlay
          src="assets/vid/deers.mp4"
        >
          your browser does not support the video tag
        </video>
      </div>
      <div ref={ref} className={opacityClass}>
        <h2 className="my-4 sm:m-0">
          Пантовые ванны незаменимы для укрепления вашего организма в межсезонье
          при следующих симптомах:
        </h2>
        <ul className="text-left">
          <Li>Укрепление имунной системы</Li>
          <Li>Cиндром хронической усталости</Li>
          <Li>Заболевания опорно-двигательного аппарата</Li>
          <Li>Импотенция</Li>
          <Li>Заболевания мочеполовой системы</Li>
          <Li>Расстройства нервной системы</Li>
          <Li>Патологии, связанные с работой ЖКТ</Li>
        </ul>
      </div>
    </section>
  );
}
