'use client';

import Image from 'next/image';

import { ACTIVITIES_INFO } from '@/constants/info.constants';

import { useOpacity } from '@/hooks/animation/useOpacity';

export function Activities() {
  const { ref, opacityClass } = useOpacity();
  return (
    <section
      ref={ref}
      className={`mt-24 grid grid-cols-1 gap-8 text-center sm:grid-cols-3 ${opacityClass}`}
    >
      {ACTIVITIES_INFO.map((activity, index) => (
        <div key={index}>
          <Image
            alt=""
            src={activity.img}
            placeholder="blur"
            className="pointer-events-none aspect-video w-full rounded-sm object-cover"
          />
          <h2 className="my-4">{activity.title}</h2>
          <p className="text-sm opacity-80">{activity.description}</p>
        </div>
      ))}
    </section>
  );
}
