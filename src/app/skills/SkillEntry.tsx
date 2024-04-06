const SkillEntry = ({
  skill,
  children,
}: {
  skill: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <h4 className="pb-1 pt-2 text-xl font-medium tracking-wide">{skill}</h4>

      {children}
    </>
  );
};

SkillEntry.Education = ({
  field,
  degree,
  startDate,
  endDate,
}: {
  field: string;
  degree: string;
  startDate: string;
  endDate: string;
}) => (
  <>
    <h5 className="pb-1 pt-2 text-sm font-semibold">{field}</h5>
    <p className=" text-sm font-light">{degree}</p>
    <p className="py-1 text-right text-sm font-medium">
      {`${startDate} — ${endDate ? endDate : "present"}`}
    </p>
  </>
);
SkillEntry.Language = ({
  language,
  level,
}: {
  language: string;
  level: string;
}) => (
  <>
    <p className="pb-1 pt-2 text-sm font-semibold">{language}</p>
    <p className="pb-1 pt-2 text-sm font-semibold">{level}</p>
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
    <div className="text-sm font-light">{children}</div>
  </>
);

export default SkillEntry;
