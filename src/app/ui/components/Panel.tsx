import clsx from 'clsx';

export const Panel = ({
  slim = false,
  children,
}: {
  slim?: boolean;
  children: React.ReactNode;
}) => (
  <div className="rounded-md bg-neutral-950/60 shadow-xl shadow-black/50 print:bg-white print:shadow-none">
    <div
      className={clsx(
        'flex flex-col items-start rounded-md border-x border-black/20    print:border-none',
        {
          'px-4 py-2 md:px-6 md:py-4 ': !slim,
          'px-4 py-2': slim,
        },
      )}
    >
      {children}
    </div>
  </div>
);
