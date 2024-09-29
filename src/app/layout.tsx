import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { SITE_NAME } from '@/constants/seo.constants';

import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'recreation center',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
