const SkillEntry = ({
  skill,
  children,
}: {
  skill: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <h4 className="text-xl font-extralight tracking-wide">{skill}</h4>

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
    <p className="py-1 text-right text-sm font-medium">{`${startDate} — ${endDate}`}</p>
  </>
);
SkillEntry.Language = ({
  language,
  level,
}: {
  language: string;
  level: string;
}) => (
  <p className="pt-2 text-sm">
    <span className="font-normal">{language}: </span>
    <span className="font-semibold">{level}</span>
  </p>
);
SkillEntry.TitledSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <>
    <h6 className="text-md pb-1 font-normal tracking-wide opacity-95">
      {title}
    </h6>
    <div className="text-sm font-light">{children}</div>
  </>
);

export default SkillEntry;
