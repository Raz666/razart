'use client';

import { titleFont } from '@/app/ui/fonts';
import { TopOverlay } from '@components/index';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function Header() {
  const isPrint = window?.matchMedia('print').matches;

  const [scrollStart, setScrollStart] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollStart(window.scrollY > 0 && !isPrint);
    });
  }, [isPrint]);

  return (
    <div className="sticky top-0 z-10 w-full print:relative">
      <TopOverlay>
        <div
          className=" mx-auto lg:max-w-screen-md
        "
        >
          <header
            className={clsx(
              `${titleFont.className} px-4 text-white antialiased print:text-black`,
              { 'translate-x-0 backdrop-blur-sm': scrollStart },
            )}
          >
            <div
              className={clsx('motion-safe:transition-all', {
                'translate-x-0 motion-safe:duration-[400ms]': scrollStart,
                'translate-x-1/2 motion-safe:duration-[100ms]': !scrollStart,
              })}
            >
              <h1
                className={clsx(
                  `w-fit 
                   motion-safe:transition-all 
                  `,
                  {
                    '-translate-x-1/2 pt-0 text-6xl/snug motion-safe:duration-[100ms]  md:pt-6 ':
                      !scrollStart,
                  },
                  {
                    'translate-x-0 text-3xl motion-safe:duration-[400ms] md:pt-0':
                      scrollStart,
                  },
                )}
              >
                RazArt
              </h1>
            </div>
            <div
              className={clsx('motion-safe:transition-all', {
                'translate-x-0 motion-safe:duration-[400ms]': scrollStart,
                'translate-x-1/2 motion-safe:duration-[100ms]': !scrollStart,
              })}
            >
              <h2
                className={clsx(
                  'w-fit motion-safe:transition-all ',
                  {
                    '-translate-x-1/2 text-2xl motion-safe:duration-[100ms]':
                      !scrollStart,
                  },
                  {
                    'translate-x-0 text-lg motion-safe:duration-[400ms] ':
                      scrollStart,
                  },
                )}
              >
                Gabriela Menkiewicz
              </h2>
            </div>
          </header>
        </div>
      </TopOverlay>
    </div>
  );
}
