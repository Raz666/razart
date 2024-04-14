import { useTranslations } from 'next-intl';
import SkillEntry from './SkillEntry';

export default function Skills() {
  const t = useTranslations('Languages');

  return (
    <section className="py-2">
      <SkillEntry skill={t('title')}>
        <SkillEntry.Language language={t('english')} level={t('proficient')} />
        <SkillEntry.Language language={t('polish')} level={t('native')} />
        <SkillEntry.Language language={t('japanese')} level={t('elementary')} />
      </SkillEntry>
    </section>
  );
}
