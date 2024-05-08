import { useTranslations } from 'next-intl';
import { Card, Divider, ListElement } from '@components/index';

export default function Summary() {
  const t = useTranslations('Home.summary');

  return (
    <section className="text-base font-light tracking-wide">
      <h3 className="mb-4 text-3xl hidden print:block">{t('title')}</h3>
      <p className="mb-3">{t('line1')}</p>
      <p className="mb-3">{t('line2')}</p>
      <p>{t('line3')}</p>
    </section>
  );
}
