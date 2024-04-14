import { useTranslations } from 'next-intl';
import SkillEntry from './SkillEntry';

export function Interests() {
  const t = useTranslations('Interests');

  return (
    <section className="py-2">
      <SkillEntry skill={t('title')}>
        <p className="py-2 text-sm font-light">{t('line1')}</p>
        <p className="text-sm font-light">{t('line2')}</p>
      </SkillEntry>
    </section>
  );
}
