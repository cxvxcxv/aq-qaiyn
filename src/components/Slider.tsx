'use client';

import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import { SLIDER_IMAGES } from '@/constants/info.constants';

export function Slider() {
  const [imageIndex, setImageIndex] = useState(0);
  const goToPreviousImage = () => {
    setImageIndex(
      prev => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length,
    );
  };

  const goToNextImage = () => {
    setImageIndex(prev => (prev + 1) % SLIDER_IMAGES.length);
  };

  return (
    <section className="relative -m-xs">
      <div className="flex aspect-video w-screen overflow-x-hidden sm:m-0 sm:w-full">
        {SLIDER_IMAGES.map((image: StaticImageData, index: number) => (
          <Image
            key={index}
            src={image}
            alt=""
            placeholder="blur"
            loading="lazy"
            className={clsx(
              'pointer-events-none aspect-video w-full object-cover transition-transform',
            )}
            style={{ transform: `translateX(-${100 * imageIndex}%)` }}
          />
        ))}
      </div>
      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 justify-between text-text-light">
        <button onClick={goToPreviousImage}>
          <ChevronLeft className="h-16 w-16 md:h-24 md:w-24" />
        </button>
        <button onClick={goToNextImage}>
          <ChevronRight className="h-16 w-16 md:h-24 md:w-24" />
        </button>
      </div>
    </section>
  );
}
