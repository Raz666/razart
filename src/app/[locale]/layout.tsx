import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import '@app/globals.css';
import { mainFont } from '@app/ui/fonts';
import Header from '@locale/header/page';
import { Divider } from '@components/index';

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
        className={`${mainFont.className} bg-black   print:bg-white print:text-black`}
      >
        <div
          className={`${mainFont.className} bg-gradient-to-r from-indigo-400 from-10%  via-sky-500/50 via-30% to-emerald-500 to-90%  antialiased  print:from-white print:text-black`}
        >
          <div className="w-100 h-100 bg-gradient-to-b from-indigo-400/30 from-10% via-sky-500/30 via-30% to-emerald-500/30 to-90%  ">
            <div className=" w-100 h-100 bg-gradient-to-r from-black/60 from-20%  via-sky-500/0 to-black/60 to-80% ">
              <div className="striped-bg w-100 h-100">
                <div
                  className=" w-100 h-100 
                            sm:bg-gradient-to-r sm:from-black/10 sm:via-black/0 sm:to-black/10  
                            md:bg-gradient-to-r md:from-black/30 md:via-black/0 md:to-black/30
                            lg:bg-gradient-to-r lg:from-black/60 lg:via-black/0 lg:to-black/60
                            print:bg-white print:from-white print:to-white
                          "
                >
                  <div className="  bg-gradient-to-r from-black/0 from-20% via-black/50 via-50% to-black/0 to-80%  print:from-white ">
                    <div className="mx-auto flex flex-col items-start px-4 py-6 md:max-w-screen-md ">
                      <Header />
                    </div>
                  </div>
                  <Divider />

                  <div className="layout mx-2  bg-neutral-950/60 shadow-xl shadow-black sm:mx-14 md:mx-auto md:max-w-screen-md print:bg-white print:shadow-none">
                    <main className="flex min-h-screen flex-col items-start border-x border-black/20 px-7 py-4  print:mb-40 print:border-none">
                      {children}
                    </main>
                    <div className="invisible fixed bottom-0  text-xs print:visible ">
                      {t('gdpr')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
