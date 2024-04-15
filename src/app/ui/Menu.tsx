'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { HTMLAttributes, useEffect, useState } from 'react';

export const Menu = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  // const t = useTranslations();

  const links = [
    {
      // name: t('Skills.title'),
      name: 'Skills',
      hash: '#skills',
    },
    {
      // name: t('Experience.title'),
      name: 'Experience',
      hash: '#experience',
    },
    {
      // name: t('Education.title'),
      name: 'Education',
      hash: '#education',
    },
  ] as const;

  const [scrollStart, setScrollStart] = useState(false);
  const [scrollContinue, setScrollContinue] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollStart(window.scrollY > 10);
      setScrollContinue(window.scrollY > 300);
    });
  });

  return (
    <div className="sticky top-2 z-10 inline-block w-full text-right font-light tracking-wide ">
      <nav
        className={clsx(
          ' mb-4 inline-block rounded-full border bg-neutral-950/70 px-6 py-3 text-white ease-in-out motion-safe:transition-all print:bg-white print:text-black print:shadow-none',
          { 'mr-60 motion-safe:duration-[100ms]': !scrollStart },
          { 'mr-2 motion-safe:duration-[400ms]': scrollStart },
          {
            'border-x-black/30 border-y-black/0 shadow-lg shadow-black/20':
              !scrollContinue,
          },
          {
            'border border-emerald-100/15 border-b-emerald-100/25 shadow-md shadow-emerald-100/10 backdrop-blur-sm':
              scrollContinue,
          },
        )}
      >
        <ul className="flex gap-6 ">
          {links.map((link) => (
            <li key={link.hash}>
              <Link href={link.hash}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
