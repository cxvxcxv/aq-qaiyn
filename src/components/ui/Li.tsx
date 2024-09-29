'use client';

import { Check, LucideProps } from 'lucide-react';
import { ComponentType, LiHTMLAttributes, PropsWithChildren } from 'react';

type TLi = LiHTMLAttributes<HTMLLIElement> & {
  icon?: ComponentType<LucideProps>;
};

export function Li({
  children,
  className = '',
  icon: Icon = Check,
  ...props
}: PropsWithChildren<TLi>) {
  return (
    <li className={`my-3 flex items-center ${className}`} {...props}>
      <Icon
        className="mr-4 h-4 min-h-4 w-4 min-w-4 text-primary"
        strokeWidth={2.5}
      />
      {children}
    </li>
  );
}
