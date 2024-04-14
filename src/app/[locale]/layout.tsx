import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import '@app/globals.css';
import { mainFont } from '@app/ui/fonts';
import Header from '@locale/header/page';
import { Background, Divider } from '@components/index';

export const metadata: Metadata = {
  title: 'RazArt',
  description: 'Resume of Gabriela Menkiewicz',
};

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const t = useTranslations('Home');

  return (
    <html lang={locale}>
      <body
        className={`${mainFont.className} relative bg-black print:bg-white print:text-black`}
      >
        <Background>
          <Header />
          <Divider />

          {children}

          <div className="invisible fixed -left-[18rem] bottom-[20rem] -rotate-90 self-start text-left text-xs opacity-50 print:visible">
            {t('gdpr')}
          </div>
        </Background>
      </body>
    </html>
  );
}
