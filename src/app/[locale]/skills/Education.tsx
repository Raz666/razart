import { useTranslations } from 'next-intl';
import SkillEntry from './SkillEntry';
import { useDateString } from '@/app/ui/FormattedDate';

export const Education = () => {
  const t = useTranslations('Education');

  return (
    <section id="education">
      <SkillEntry skill={t('pw.title')}>
        <SkillEntry.Education
          field={t('pw.fields')}
          degree={t('pw.degree')}
          startDate={useDateString({ year: 2007, month: 10 })}
          endDate={useDateString({ year: 2013, month: 12 })}
        />

        <SkillEntry.TitledSection title={t('pw.courses')}>
          <li>{t('pw.master')}</li>
          <li>{t('pw.bachelor')}</li>
        </SkillEntry.TitledSection>
      </SkillEntry>
    </section>
  );
};
