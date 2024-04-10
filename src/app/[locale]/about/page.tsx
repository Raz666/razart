import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <section className="pt-4 text-center text-md italic text-white">
      <p className="mb-2 font-light">{t('content.line1')}</p>
      <p className="mb-2 font-light">{t('content.line2')}</p>
      <p className="font-light">{t('content.line3')}</p>
    </section>
  );
}
