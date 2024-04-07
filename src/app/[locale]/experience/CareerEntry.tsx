const CareerEntry = ({
  company,
  children,
}: {
  company: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative mb-6 mt-10 rounded-md bg-black/80 px-4 pb-4 pt-2 text-emerald-50 shadow-lg shadow-black/20">
      <h4
        className="absolute  -top-7 left-2 pb-1 text-xl font-extralight tracking-wide 
      "
      >
        {company}
      </h4>

      {children}
    </div>
  );
};

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
  <div className="flex justify-between">
    <h5 className="text-md font-normal tracking-wide">{position}</h5>
    <div>
      <p className="pb-1 text-right text-sm font-medium text-emerald-300">
        {`${startDate} — ${endDate ? endDate : "present"}`}
      </p>
      <p className="text-right text-xs font-medium text-emerald-500">
        {relationType}, {locationType}
      </p>
    </div>
  </div>
);
CareerEntry.Description = ({ children }: { children: React.ReactNode }) => (
  <p className="py-4 text-sm font-light">{children}</p>
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

export default CareerEntry;
