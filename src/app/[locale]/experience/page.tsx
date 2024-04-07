import { useTranslations } from 'next-intl';
import { useDateString } from '../../ui/FormattedDate';
import CareerEntry, { Highlights, Position } from './CareerEntry';

export default function Experience() {
  const t = useTranslations('Experience');

  return (
    <section className="py-4">
      <h3 className="text-2xl">{t('title')}</h3>

      <CareerEntry company={t('company.bc')}>
        <Position
          position={t('position.principal')}
          startDate={useDateString({ year: 2021, month: 6 })}
          endDate={useDateString({ year: 2024, month: 4 })}
        />
        <CareerEntry.Description>{t('bc.fe2.desc')}</CareerEntry.Description>
      </CareerEntry>

      <CareerEntry company={t('company.spaceOS')}>
        <Position
          position={t('position.fe')}
          startDate={useDateString({ year: 2020, month: 5 })}
          endDate={useDateString({ year: 2021, month: 5 })}
        />
        <CareerEntry.Description>{t('spaceOS.desc')}</CareerEntry.Description>
        <Highlights>
          <li>{t('spaceOS.hl1')}</li>
          <li>{t('spaceOS.hl2')}</li>
          <li>{t('spaceOS.hl3')}</li>
          <li>{t('spaceOS.hl4')}</li>
        </Highlights>
        <CareerEntry.TitledSection title={t('tech')}>
          {t('spaceOS.tech')}
        </CareerEntry.TitledSection>
        <CareerEntry.TitledSection title={t('tools')}>
          {t('spaceOS.tools')}
        </CareerEntry.TitledSection>
      </CareerEntry>

      <CareerEntry company={t('company.bc')}>
        <Position
          position={t('position.tl')}
          locationType="hybrid"
          startDate={useDateString({ year: 2019, month: 6 })}
          endDate={useDateString({ year: 2020, month: 5 })}
        />
        <CareerEntry.Description>{t('bc.tl.desc')}</CareerEntry.Description>
        <Highlights>
          <li>{t('bc.tl.hl1')}</li>
          <li>{t('bc.tl.hl2')}</li>
          <li>{t('bc.tl.hl3')}</li>
          <li>{t('bc.tl.hl4')}</li>
          <li>{t('bc.tl.hl5')}</li>
          <li>{t('bc.tl.hl6')}</li>
          <li>{t('bc.tl.hl7')}</li>
          <li>{t('bc.tl.hl8')}</li>
          <li>{t('bc.tl.hl9')}</li>
          <li>{t('bc.tl.hl10')}</li>
          <li>{t('bc.tl.hl11')}</li>
        </Highlights>

        <Position
          position={t('position.fe')}
          locationType="onSite"
          startDate={useDateString({ year: 2017, month: 1 })}
          endDate={useDateString({ year: 2019, month: 5 })}
        />
        <CareerEntry.Description>{t('bc.fe1.desc')}</CareerEntry.Description>
        <Highlights>
          <li>{t('bc.fe1.hl1')}</li>
          <li>{t('bc.fe1.hl2')}</li>
          <li>{t('bc.fe1.hl3')}</li>
          <li>{t('bc.fe1.hl4')}</li>
          <li>{t('bc.fe1.hl5')}</li>
          <li>{t('bc.fe1.hl6')}</li>
          <li>{t('bc.fe1.hl7')}</li>
          <li>{t('bc.fe1.hl8')}</li>
        </Highlights>
      </CareerEntry>

      <CareerEntry company={t('company.cegedim')}>
        <Position
          position={t('position.engineer')}
          locationType="onSite"
          startDate={useDateString({ year: 2014, month: 9 })}
          endDate={useDateString({ year: 2016, month: 12 })}
        />
        <CareerEntry.Description>{t('cegedim.desc')}</CareerEntry.Description>
        <Highlights>
          <li>{t('cegedim.hl1')}</li>
          <li>{t('cegedim.hl2')}</li>
          <li>{t('cegedim.hl3')}</li>
          <li>{t('cegedim.hl4')}</li>
          <li>{t('cegedim.hl5')}</li>
        </Highlights>
      </CareerEntry>

      <CareerEntry company={t('company.plum')}>
        <Position
          position={`${t('position.tester')}, ${t('position.fe')} `}
          locationType="onSite"
          startDate={useDateString({ month: 3 })}
          endDate={useDateString({ year: 2014, month: 8 })}
        />
        <CareerEntry.Description>{t('plum.desc')}</CareerEntry.Description>
        <Highlights>
          <li>{t('plum.hl1')}</li>
          <li>{t('plum.hl2')}</li>
          <li>{t('plum.hl3')}</li>
          <li>{t('plum.hl4')}</li>
          <li>{t('plum.hl5')}</li>
        </Highlights>
      </CareerEntry>

      <CareerEntry company={t('company.freelance')}>
        <Position
          position=""
          relationType={null}
          locationType="remote"
          startDate={useDateString({ year: 2010, month: 9 })}
          endDate={useDateString({ year: 2014, month: 2 })}
        />
        <CareerEntry.Description>{t('freelance.desc')}</CareerEntry.Description>
      </CareerEntry>

      <CareerEntry company={t('company.univox')}>
        <Position
          position=""
          relationType="partTime"
          locationType="hybrid"
          startDate={useDateString({ month: 7 })}
          endDate={useDateString({ year: 2010, month: 8 })}
        />
        <CareerEntry.Description>{t('univox.desc')}</CareerEntry.Description>
      </CareerEntry>

      <CareerEntry company={t('company.efy')}>
        <Position
          position=""
          relationType="fullTime"
          locationType="onSite"
          startDate={useDateString({ month: 7 })}
          endDate={useDateString({ year: 2009, month: 9 })}
        />
        <CareerEntry.Description>{t('efy.desc')}</CareerEntry.Description>
      </CareerEntry>
    </section>
  );
}
