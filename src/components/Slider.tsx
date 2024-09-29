'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import { SLIDER_IMAGES } from '@/constants/info.constants';

export function Slider() {
  const [showSwipeText, setShowSwipeText] = useState(true);
  return (
    <div
      className="relative -mx-xs flex aspect-video w-screen snap-x snap-mandatory overflow-x-auto sm:m-0 sm:w-full"
      onTouchMove={() => setShowSwipeText(false)}
      onMouseDown={() => setShowSwipeText(false)}
    >
      {SLIDER_IMAGES.map((image: StaticImageData, index: number) => (
        <Image
          key={index}
          src={image}
          alt=""
          placeholder="blur"
          loading="lazy"
          className={`pointer-events-none aspect-video h-auto w-full snap-start object-cover`}
        />
      ))}
      <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse text-text-light">
        {showSwipeText ? 'swipe' : ''}
      </h2>
    </div>
  );
}
