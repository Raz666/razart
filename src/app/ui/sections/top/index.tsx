import { useTranslations } from 'next-intl';
import Header from './Header';
import { TopOverlay } from '@components/index';
import HeaderPrintOnly from './HeaderPrintOnly';

export default function Top() {
  const t = useTranslations('Home');

  return (
    <>
    <HeaderPrintOnly />

      {/* <Header />

      <TopOverlay>
        <div
          className="text-md mx-auto px-4 pb-3 pt-4 font-light italic sm:pb-6 
                      sm:pt-6 lg:max-w-screen-md
                    "
        >
          <p className="mb-2 w-4/5 text-left sm:w-3/5">{t('about.line1')}</p>
          <p className="ml-auto w-4/5 text-right sm:w-3/5">
            {t('about.line2')}
          </p>
        </div>
      </TopOverlay> */}
    </>
  );
}
