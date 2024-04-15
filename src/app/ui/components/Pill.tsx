export const Pill = ({ children }: { children: React.ReactNode }) => (
  <div className="shadow-inner-symmetric rounded-full border border-b-sky-200/20 border-x-sky-200/10 border-t-sky-200/10 bg-black/40 px-2 py-1 shadow-black/80 print:bg-neutral-100 print:shadow-none">
    {children}
  </div>
);

export const PillWrap = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-3 flex flex-wrap gap-1 text-xs font-normal tracking-wide">
    {children}
  </div>
);
