export default function SkillEntry({
  skill,
  children,
}: {
  skill: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h4 className="pb-1 pt-2 text-xl font-medium tracking-wide">{skill}</h4>

      {children}
    </>
  );
}

SkillEntry.Language = ({
  language,
  level,
}: {
  language: string;
  level: string;
}) => (
  <>
    <p className="pb-1 pt-2 text-sm font-semibold">{language}</p>
    <p className="text-sm font-light">{level}</p>
  </>
);
SkillEntry.TitledSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <>
    <h6 className="pb-1 pt-2 text-sm font-semibold">{title}</h6>
    <p className="text-sm font-light">{children}</p>
  </>
);
