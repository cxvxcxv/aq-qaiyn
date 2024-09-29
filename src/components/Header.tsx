'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { HEADER_IMAGES } from '@/constants/info.constants';

import { useOpacity } from '@/hooks/animation/useOpacity';

const IMAGE_TRANSITION_DURATION = 4000;

export function Header() {
  const { ref, opacityClass } = useOpacity();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % HEADER_IMAGES.length);
    }, IMAGE_TRANSITION_DURATION);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative h-[80dvh] w-screen">
      <div className="absolute h-full w-full">
        {HEADER_IMAGES.map((src, index) => (
          <Image
            key={index}
            alt=""
            src={src}
            fill
            className={`absolute object-cover transition-opacity duration-500 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
            priority={index === 0}
            loading={
              index === currentImageIndex || index === 0 ? 'eager' : 'lazy'
            }
          />
        ))}
      </div>
      <h1
        ref={ref}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-6xl font-bold text-text-light sm:text-7xl lg:text-8xl ${opacityClass}`}
      >
        Aq Qaiyŋ
      </h1>
    </section>
  );
}
