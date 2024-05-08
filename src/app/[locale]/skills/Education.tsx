import { useTranslations } from 'next-intl';
import SkillEntry from './SkillEntry';
import { useDateString } from '@/app/ui/FormattedDate';
import CareerEntry, { Highlights, Position } from '../experience/CareerEntry';
import { Card, ListElement } from '@/app/ui/components';

export const Education = () => {
  const t = useTranslations('Education');

  return (
    <section className="w-full" id="education">
      <h3 className="mb-4 hidden text-3xl font-light tracking-wide print:block">
        {t('title')}
      </h3>

      <CareerEntry
        company={t('pw.title')}
        locationType="stationary"
        relationType={null}
      >
        <Position
          position={t('pw.fields')}
          startDate={useDateString({ year: 2007, month: 10 })}
          endDate={useDateString({ year: 2013, month: 12 })}
        />
        <Card>
          <Highlights title={t('pw.courses')}>
            <ListElement>{t('pw.master')}</ListElement>
            <ListElement>{t('pw.bachelor')}</ListElement>
          </Highlights>
        </Card>
      </CareerEntry>
    </section>
  );
};
