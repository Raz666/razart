import { useTranslations } from 'next-intl';
import Header from './Header';
import { TopOverlay } from '@components/index';

export default function Top() {
  const t = useTranslations('Home');

  return (
    <>
      <Header />

      <TopOverlay>
        <div
          className="text-md px-4 pb-3 pt-4 font-light italic sm:pb-6 sm:pt-6 
                      lg:max-w-screen-md mx-auto
                    "
        >
          <p className="mb-2 w-4/5 text-left sm:w-3/5">{t('about.line1')}</p>
          <p className="ml-auto w-4/5 text-right sm:w-3/5">
            {t('about.line2')}
          </p>
        </div>
      </TopOverlay>
    </>
  );
}
