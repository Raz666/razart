import { HTMLAttributes } from 'react';
import clsx from 'clsx';

export const Divider = ({
  darker = false,
  ...props
}: { darker?: boolean } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      {darker && (
        <div className="h-[1px] bg-gradient-to-r from-black/0 from-35% via-sky-50/5 via-50% to-black/0 to-65%" />
      )}
      <div
        className={clsx(
          'h-[1px] bg-gradient-to-r from-black/0 from-25% via-50%  to-black/0 to-75% ',
          {
            'via-white/30': !darker,
            'via-sky-50/20': darker,
          },
        )}
      />
      <div
        className={clsx(
          'mb-4 h-[1px] bg-gradient-to-r from-black/0 from-25% via-50%  to-black/0 to-75% ',
          {
            'via-black/30': !darker,
            'via-black/50': darker,
          },
        )}
      />
    </div>
  );
};
