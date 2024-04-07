import { useTranslations } from 'next-intl';

import About from './about/page';
import Experience from './experience/page';
import Skills from './skills/page';
import { titleFont } from '../ui/fonts';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <>
      <section
        className={`${titleFont.className} flex flex-col items-baseline  antialiased `}
      >
        <h1 className="text-6xl"> {t('razart')}</h1>
        <h2 className="pl-1 text-xl">{t('gm')}</h2>
      </section>

      <About />
      <Experience />
      <Skills />
    </>
  );
}
