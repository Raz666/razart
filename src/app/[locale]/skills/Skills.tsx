import { useTranslations } from 'next-intl';
import SkillEntry from './SkillEntry';
import { Divider, Pill, PillWrap } from '@components/index';

export function Skills() {
  const t = useTranslations('Education');

  return (
    <section className="py-2">
      <SkillEntry skill={t('skills')}>
        <SkillEntry.TitledSection title={t('dev')}>
          <PillWrap>
            <Pill>React.js</Pill>
            <Pill>TypeScript</Pill>
            <Pill>Next.js</Pill>
            <Pill>Tailwind CSS</Pill>
            <Pill>JavaScript</Pill>
            <Pill>Angular</Pill>
            <Pill>SQL</Pill>
          </PillWrap>
        </SkillEntry.TitledSection>

        <Divider darker className="mt-5 hidden sm:block print:hidden" />

        <SkillEntry.TitledSection title={t('platforms')}>
          <PillWrap>
            <Pill>Jira</Pill>
            <Pill>Confluence</Pill>
            <Pill>GitHub</Pill>
            <Pill>Figma</Pill>
            <Pill>Azure Devops</Pill>
            <Pill>Octopus</Pill>
          </PillWrap>
        </SkillEntry.TitledSection>

        <Divider darker className="mt-5 hidden sm:block print:hidden" />

        <SkillEntry.TitledSection title={t('soft')}>
          <PillWrap>
            <Pill>VS Code</Pill>
            <Pill>Fork</Pill>
            <Pill>Adobe Photoshop</Pill>
            <Pill>Oracle SQL Developer</Pill>
            <Pill>Enterprise Architect</Pill>
            <Pill>MS Office</Pill>
          </PillWrap>
        </SkillEntry.TitledSection>
      </SkillEntry>
    </section>
  );
}
