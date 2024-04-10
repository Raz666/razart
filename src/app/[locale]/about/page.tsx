import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <section className="py-4">
      {/* <h3 className="text-2xl">{t('title')}</h3> */}
      <p className="mb-2 text-sm font-light">{t('content.line1')}</p>
      <p className="mb-2 text-sm font-light">{t('content.line2')}</p>
      <p className="text-sm font-light">{t('content.line3')}</p>
    </section>
  );
}
