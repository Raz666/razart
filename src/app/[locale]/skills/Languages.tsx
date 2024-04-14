import { useTranslations } from 'next-intl';
import SkillEntry from './SkillEntry';
import { Divider, Pill, PillWrap } from '@components/index';

export default function Skills() {
  const t = useTranslations('Education');

  return (
    <section className="py-2">
      <SkillEntry skill={t('languages.title')}>
        <SkillEntry.Language
          language={t('languages.english')}
          level={t('languages.proficient')}
        />
        <SkillEntry.Language
          language={t('languages.polish')}
          level={t('languages.native')}
        />
        <SkillEntry.Language
          language={t('languages.japanese')}
          level={t('languages.intermediate')}
        />
      </SkillEntry>
    </section>
  );
}
