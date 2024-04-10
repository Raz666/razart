import { titleFont } from '@/app/ui/fonts';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Home');

  return (
    <header className={`${titleFont.className}  text-white antialiased w-full`}>
      <div className="text-center">
        <h1 className="text-6xl/snug "> {t('razart')}</h1>
        <h2 className="text-2xl">{t('gm')}</h2>
      </div>

      <section className="text-md pt-4  text-center italic font-light">
        <p className="mb-2 ">{t('about.line1')}</p>
        <p className="">{t('about.line3')}</p>
      </section>
    </header>
  );
}