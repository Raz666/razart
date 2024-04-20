'use client';

import { ChangeEvent, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const activeLocale = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newLocale = activeLocale === 'en' ? 'pl' : 'en';
    document.cookie = `NEXT_LOCALE=${newLocale}`;
    startTransition(() => router.refresh());
  };

  return (
    <div className="fixed right-0 top-0 z-20">
      <label className="inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={activeLocale === 'en'}
          className="peer sr-only"
          onChange={onSelectChange}
          disabled={isPending}
        />
        <div className="peer relative flex h-6 items-center gap-4 rounded-full   bg-gray-200/10 text-sm after:absolute after:left-1 after:start-[2px] after:top-[2px] after:h-5 after:w-20  after:rounded-full   after:bg-white/20 after:transition-all after:content-['']  peer-checked:after:translate-x-full  rtl:peer-checked:after:-translate-x-full">
          <span className="w-16">Polish</span>
          <span className="w-16">English</span>
        </div>
      </label>
    </div>
  );
}
