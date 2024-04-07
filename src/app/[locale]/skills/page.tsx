import { useTranslations } from 'next-intl';
import { useDateString } from '../../ui/FormattedDate';
import SkillEntry from './SkillEntry';

export default function Skills() {
  const t = useTranslations('Education');

  return (
    <section className="py-4">
      <h3 className="text-2xl">{t('title')}</h3>

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

      <SkillEntry skill={t('skills')}>
        <SkillEntry.TitledSection title={t('dev')}>
          <li>HTML5, CSS3 [ Bootstrap,Semantic UI ]</li>
          <li>Javascript [ ES6, AngularJS,ReactJS ]</li>
          <li>SQL</li>
        </SkillEntry.TitledSection>

        <SkillEntry.TitledSection title={t('platforms')}>
          <li>Jira, Conuence</li>
          <li>Bitbucket, Azure Devops</li>
          <li>Team City, Octopus</li>
        </SkillEntry.TitledSection>

        <SkillEntry.TitledSection title={t('soft')}>
          <li>Visual Studio Code</li>
          <li>Oracle SQL Developer</li>
          <li>SQL Server Management Studio</li>
          <li>Enterprise Architect</li>
        </SkillEntry.TitledSection>

        <SkillEntry.TitledSection title={t('graphics')}>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
        </SkillEntry.TitledSection>

        <SkillEntry.TitledSection title={t('doc')}>
          <li>MS Ofce</li>
          <li>LaTeX Editor</li>
        </SkillEntry.TitledSection>
      </SkillEntry>

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

      <SkillEntry skill={t('interests')}>
        <SkillEntry.TitledSection title={t('tech')}>
          <li>
            <a href="https://www.youtube.com/@mkbhd">@mkbhd</a> /{' '}
            <a href="https://www.youtube.com/@WaveformClips">@WaveformClips</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@LinusTechTips">@LinusTechTips</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@SciShow">@SciShow</a>
          </li>
        </SkillEntry.TitledSection>

        <SkillEntry.TitledSection title={t('fantasy')}>
          <li>books, movies, tv series — you name it :]</li>
        </SkillEntry.TitledSection>

        <SkillEntry.TitledSection title={t('rpg')}>
          <li>The Witcher, World of Warcraft</li>
          <li>Magic The Gathering</li>
          <li>Various cardboard games</li>
        </SkillEntry.TitledSection>

        <SkillEntry.TitledSection title={t('japanese')}>
          <li>language</li>
          <li>culture</li>
          <li>manga & anime</li>
        </SkillEntry.TitledSection>
      </SkillEntry>
    </section>
  );
}
