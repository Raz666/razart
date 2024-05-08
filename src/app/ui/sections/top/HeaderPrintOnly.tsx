'use client';
import {
  PhoneIcon,
  EnvelopeIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

import { titleFont } from '@/app/ui/fonts';
import { TopOverlay } from '@components/index';
import clsx from 'clsx';
import Image from 'next/image';

export default function HeaderPrintOnly() {
  return (
    <div className="mx-14 ">
      {/* <TopOverlay> */}
      <div className="mx-auto flex justify-between lg:max-w-screen-md">
        <div
          className={clsx(
            `${titleFont.className} mb-7 basis-1/3 px-4 font-light text-white antialiased print:text-black`,
          )}
        >
          {/* <h1 className="pt-0 text-4xl/snug tracking-wide">RazArt</h1> */}
          <h2 className="text-3xl/relaxed font-normal">Gabriela Menkiewicz</h2>
        </div>
        <div className=" mx-6 basis-1/3">
          <Image alt="" width={100} height={100} src="/img/vCard.jpg" />
        </div>
        <div className="mt-2 flex basis-1/3 flex-col gap-2 text-sm font-light">
          <p className="flex items-center gap-2">
            <PhoneIcon className="size-5" />

            <a href="tel:+48 507 165 188">+48 507 165 188</a>
          </p>
          <p className="flex items-center gap-2">
            <EnvelopeIcon className="size-5" />

            <a href="mailto:gabriela.menkiewicz@gmail.com">gabriela.menkiewicz@gmail.com</a>
          </p>
          <p className="flex items-center gap-2">
            <UserCircleIcon className="size-5" />

            <a href="https://www.linkedin.com/in/gabriela-menkiewicz-73836361">
              LinkedIn Profile
            </a>
          </p>
        </div>
      </div>
      {/* </TopOverlay> */}
    </div>
  );
}
