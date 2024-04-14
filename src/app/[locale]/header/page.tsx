import { titleFont } from '@/app/ui/fonts';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Home');

  return (
    <div className="  bg-gradient-to-r from-black/0 from-20% via-black/50 via-50% to-black/0 to-80%  print:from-white ">
      <div className="mx-auto flex flex-col items-start px-4 py-6 md:max-w-screen-md ">
        <header
          className={`${titleFont.className}  w-full text-white antialiased print:text-black `}
        >
          <div className="text-center">
            <h1 className="text-6xl/snug "> {t('razart')}</h1>
            <h2 className="text-2xl">{t('gm')}</h2>
          </div>

          <div className="text-md pt-4 font-light italic">
            <p className="mb-2 w-4/5 sm:w-3/5 text-left">{t('about.line1')}</p>
            <p className="ml-auto w-4/5 sm:w-3/5 text-right">{t('about.line2')}</p>
          </div>
        </header>
      </div>
    </div>
  );
}
