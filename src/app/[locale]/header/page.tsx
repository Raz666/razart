import { titleFont } from '@/app/ui/fonts';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Home');

  return (
    <div
      className="
          mx-auto bg-gradient-to-r 
                        from-black/0 
    from-20% via-black/50 via-50% to-black/0 to-80% px-4 lg:max-w-screen-md  print:from-white "
    >
      <div
        className=" 
                    pb-3 pt-0 sm:pb-6 sm:pt-3 
                    md:pt-6 
                  "
      >
        <header
          className={`${titleFont.className}  w-full text-white antialiased print:text-black `}
        >
          <div className="text-center">
            <h1 className="text-6xl/snug ">RazArt</h1>
            <h2 className="text-2xl">Gabriela Menkiewicz</h2>
          </div>

          <div className="text-md pt-4 font-light italic sm:pt-6">
            <p className="mb-2 w-4/5 text-left sm:w-3/5">{t('about.line1')}</p>
            <p className="ml-auto w-4/5 text-right sm:w-3/5">
              {t('about.line2')}
            </p>
          </div>
        </header>
      </div>
    </div>
  );
}
