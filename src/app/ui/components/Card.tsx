import { HTMLAttributes } from 'react';

export const Card = ({
  children,
}: { children: React.ReactNode } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="text-white-50 mt-2 mb-6 rounded-md border-x border-black/30 bg-neutral-950/70 px-6 pb-6 pt-2 shadow-lg shadow-black/20 print:bg-white print:text-black print:shadow-none ">
      {children}
    </div>
  );
};
