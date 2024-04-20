'use client';

import clsx from 'clsx';
import { HTMLAttributes, useEffect, useState } from 'react';

export const MenuContainer = ({
  children,
  ...props
}: { children: React.ReactNode } & HTMLAttributes<HTMLDivElement>) => {
  const [scrollStart, setScrollStart] = useState(false);
  const [scrollContinue, setScrollContinue] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollStart(window.scrollY > 10);
      setScrollContinue(window.scrollY > 300);
    });
  });

  return (
    <div className="sticky top-2 z-10 inline-block w-full text-right font-light tracking-wide print:hidden">
      <div
        className={clsx('w-full motion-safe:transition-all', {
          'translate-x-1/2 motion-safe:duration-[100ms]': !scrollStart,
          'translate-x-full motion-safe:duration-[400ms]': scrollStart,
        })}
      >
        <nav
          className={clsx(
            'mb-4 w-fit rounded-full border bg-neutral-950/70 px-6 py-3 text-white ease-in-out motion-safe:transition-all print:bg-white print:text-black print:shadow-none',
            {
              '-translate-x-1/2 motion-safe:duration-[100ms]': !scrollStart,
              '-translate-x-full motion-safe:duration-[400ms]': scrollStart,

              'border-x-black/30 border-y-black/0 shadow-lg shadow-black/20':
                !scrollContinue,
              'border border-emerald-100/15 border-b-emerald-100/25 shadow-md shadow-emerald-100/10 backdrop-blur-sm':
                scrollContinue,
            },
          )}
        >
          {children}
        </nav>
      </div>
    </div>
  );
};
