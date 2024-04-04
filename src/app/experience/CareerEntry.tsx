export default function CareerEntry({
  company,
  children,
}: {
  company: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h4 className="pb-1 pt-2 text-xl font-medium tracking-wide">{company}</h4>

      {children}
    </>
  );
}

CareerEntry.Description = ({ children }: { children: React.ReactNode }) => (
  <p className="pt-2 text-sm font-light">{children}</p>
);
CareerEntry.Highlights = ({ children }: { children: React.ReactNode }) => (
  <>
    <h6 className="pb-1 pt-2 text-sm font-semibold">Highlights</h6>
    <ul className="list-disc pl-5 text-sm font-light leading-relaxed">
      {children}
    </ul>
  </>
);
CareerEntry.TitledSection = ({
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
CareerEntry.Position = ({
  position,
  relationType = "contract",
  locationType = "remote",
  startDate,
  endDate,
}: {
  position: string;
  relationType?: "contract" | "fullTime";
  locationType?: "remote" | "hybrid" | "onSite";
  startDate: string;
  endDate?: string;
}) => (
  <>
    <h5 className="text-md font-medium tracking-wide">{position}</h5>
    <p className="py-1 text-right text-sm font-medium">
      {`${startDate} — ${endDate ? endDate : "present"}`}
    </p>
    <p className="text-right text-xs font-medium">
      {relationType}, {locationType}
    </p>
  </>
);

export const getDate = (year: number, month: number) => {
  const rawDate = new Date(year, month - 1);
  return rawDate.toDateString();
};
