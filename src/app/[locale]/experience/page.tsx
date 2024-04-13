import { useTranslations } from 'next-intl';
import { useDateString } from '@app/ui/FormattedDate';
import CareerEntry, { Highlights, Position } from './CareerEntry';
import { Card, Divider, ListElement } from '@components/index';

export default function Experience() {
  const t = useTranslations('Experience');

  return (
    <section className="">
      {/* <h3 className="text-2xl">{t('title')}</h3> */}

      <CareerEntry company={t('company.bc')}>
        <Position
          position={t('position.principal')}
          startDate={useDateString({ year: 2021, month: 6 })}
          endDate={useDateString({ year: 2024, month: 4 })}
        />

        <Card>
          <CareerEntry.Description>{t('bc.fe2.desc')}</CareerEntry.Description>
          <Highlights>
            <ListElement>{t('bc.fe2.hl1')}</ListElement>
            <ListElement>{t('bc.fe2.hl2')}</ListElement>
            <ListElement>{t('bc.fe2.hl3')}</ListElement>
            <ListElement>{t('bc.fe2.hl4')}</ListElement>
          </Highlights>
        </Card>
      </CareerEntry>

      <Divider darker />

      <CareerEntry company={t('company.spaceOS')}>
        <Position
          position={t('position.fe')}
          startDate={useDateString({ year: 2020, month: 5 })}
          endDate={useDateString({ year: 2021, month: 5 })}
        />
        <Card>
          <CareerEntry.Description>{t('spaceOS.desc')}</CareerEntry.Description>
          <Highlights>
            <ListElement>{t('spaceOS.hl1')}</ListElement>
            <ListElement>{t('spaceOS.hl2')}</ListElement>
            <ListElement>{t('spaceOS.hl3')}</ListElement>
            <ListElement>{t('spaceOS.hl4')}</ListElement>
          </Highlights>
          <CareerEntry.TitledSection title={t('tech')}>
            {t('spaceOS.tech')}
          </CareerEntry.TitledSection>
          <CareerEntry.TitledSection title={t('tools')}>
            {t('spaceOS.tools')}
          </CareerEntry.TitledSection>
        </Card>
      </CareerEntry>

      <Divider darker />

      <CareerEntry company={t('company.bc')} locationType="hybrid">
        <Position
          position={t('position.tl')}
          startDate={useDateString({ year: 2019, month: 6 })}
          endDate={useDateString({ year: 2020, month: 5 })}
        />
        <Card>
          <CareerEntry.Description>{t('bc.tl.desc')}</CareerEntry.Description>
          <Highlights>
            <ListElement>{t('bc.tl.hl1')}</ListElement>
            <ListElement>{t('bc.tl.hl2')}</ListElement>
            <ListElement>{t('bc.tl.hl3')}</ListElement>
            <ListElement>{t('bc.tl.hl4')}</ListElement>
            <ListElement>{t('bc.tl.hl5')}</ListElement>
            <ListElement>{t('bc.tl.hl6')}</ListElement>
            <ListElement>{t('bc.tl.hl7')}</ListElement>
            <ListElement>{t('bc.tl.hl8')}</ListElement>
            <ListElement>{t('bc.tl.hl9')}</ListElement>
            <ListElement>{t('bc.tl.hl10')}</ListElement>
            <ListElement>{t('bc.tl.hl11')}</ListElement>
          </Highlights>
        </Card>

        <Divider darker className="my-5" />

        <Position
          position={t('position.fe')}
          startDate={useDateString({ year: 2017, month: 1 })}
          endDate={useDateString({ year: 2019, month: 5 })}
        />
        <Card>
          <CareerEntry.Description>{t('bc.fe1.desc')}</CareerEntry.Description>
          <Highlights>
            <ListElement>{t('bc.fe1.hl1')}</ListElement>
            <ListElement>{t('bc.fe1.hl2')}</ListElement>
            <ListElement>{t('bc.fe1.hl3')}</ListElement>
            <ListElement>{t('bc.fe1.hl4')}</ListElement>
            <ListElement>{t('bc.fe1.hl5')}</ListElement>
            <ListElement>{t('bc.fe1.hl6')}</ListElement>
            <ListElement>{t('bc.fe1.hl7')}</ListElement>
            <ListElement>{t('bc.fe1.hl8')}</ListElement>
          </Highlights>
        </Card>
      </CareerEntry>

      <Divider darker />

      <CareerEntry company={t('company.cegedim')} locationType="onSite">
        <Position
          position={t('position.engineer')}
          startDate={useDateString({ year: 2014, month: 9 })}
          endDate={useDateString({ year: 2016, month: 12 })}
        />
        <Card>
          <CareerEntry.Description>{t('cegedim.desc')}</CareerEntry.Description>
          <Highlights>
            <ListElement>{t('cegedim.hl1')}</ListElement>
            <ListElement>{t('cegedim.hl2')}</ListElement>
            <ListElement>{t('cegedim.hl3')}</ListElement>
            <ListElement>{t('cegedim.hl4')}</ListElement>
            <ListElement>{t('cegedim.hl5')}</ListElement>
          </Highlights>
        </Card>
      </CareerEntry>

      <Divider darker />

      <CareerEntry company={t('company.plum')} locationType="onSite">
        <Position
          position={`${t('position.tester')}, ${t('position.fe')} `}
          startDate={useDateString({ month: 3 })}
          endDate={useDateString({ year: 2014, month: 8 })}
        />
        <Card>
          <CareerEntry.Description>{t('plum.desc')}</CareerEntry.Description>
          <Highlights>
            <ListElement>{t('plum.hl1')}</ListElement>
            <ListElement>{t('plum.hl2')}</ListElement>
            <ListElement>{t('plum.hl3')}</ListElement>
            <ListElement>{t('plum.hl4')}</ListElement>
            <ListElement>{t('plum.hl5')}</ListElement>
          </Highlights>
        </Card>
      </CareerEntry>

      <Divider darker />

      <CareerEntry
        company={t('company.freelance')}
        relationType={null}
        locationType="remote"
      >
        <Position
          position=""
          startDate={useDateString({ year: 2010, month: 9 })}
          endDate={useDateString({ year: 2014, month: 2 })}
        />
        <Card>
          <CareerEntry.Description>
            {t('freelance.desc')}
          </CareerEntry.Description>
        </Card>
      </CareerEntry>

      <Divider darker />

      <CareerEntry
        company={t('company.univox')}
        relationType="partTime"
        locationType="hybrid"
      >
        <Position
          position=""
          startDate={useDateString({ month: 7 })}
          endDate={useDateString({ year: 2010, month: 8 })}
        />
        <Card>
          <CareerEntry.Description>{t('univox.desc')}</CareerEntry.Description>
        </Card>
      </CareerEntry>

      <Divider darker />

      <CareerEntry
        company={t('company.efy')}
        relationType="fullTime"
        locationType="onSite"
      >
        <Position
          position=""
          startDate={useDateString({ month: 7 })}
          endDate={useDateString({ year: 2009, month: 9 })}
        />
        <Card>
          <CareerEntry.Description>{t('efy.desc')}</CareerEntry.Description>
        </Card>
      </CareerEntry>
    </section>
  );
}
