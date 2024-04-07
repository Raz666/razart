import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <section className="py-4">
      <h3 className="text-2xl">{t('title')}</h3>
      <p className="text-sm font-light">{t('content')}</p>
    </section>
  );
}
