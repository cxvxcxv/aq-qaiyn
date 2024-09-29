'use client';

import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type TA = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string; //makes href property required
};

export function A({
  children,
  className = '',
  href,
  ...props
}: PropsWithChildren<TA>) {
  return (
    <a
      className={`block w-fit rounded-sm border border-text-light bg-bg-dark px-8 py-4 text-center text-text-light transition-colors hover:border-transparent hover:bg-primary ${className}`}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}
