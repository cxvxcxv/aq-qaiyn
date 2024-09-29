'use client';

import { CornerDownLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();

  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <h1>{pathname} - not found</h1>
      <Link href="/" className="mt-4 flex items-center gap-2 text-xl">
        Return Home <CornerDownLeft className="inline-block" />
      </Link>
    </section>
  );
}
