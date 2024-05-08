import { useTranslations } from 'next-intl';

const CareerEntry = ({
  company,
  children,
  relationType = 'contract',
  locationType = 'remote',
}: {
  company: string;
  relationType?: 'contract' | 'fullTime' | 'partTime' | null;
  locationType?: 'remote' | 'hybrid' | 'onSite' | 'stationary';
  children: React.ReactNode;
}) => {
  const t = useTranslations('Experience');

  const relationTypeName = () => {
    switch (relationType) {
      case 'contract':
        return t('relation.contract');
      case 'fullTime':
        return t('relation.fulltime');
      case 'partTime':
        return t('relation.parttime');
    }
  };

  const locationTypeName = () => {
    switch (locationType) {
      case 'remote':
        return t('location.remote');
      case 'hybrid':
        return t('location.hybrid');
      case 'onSite':
        return t('location.onsite');
      case 'stationary':
        return t('location.stationary');
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-baseline justify-between">
        <h4 className="text-xl font-extralight tracking-wide">{company}</h4>
        <p className="ml-auto justify-end text-right text-xs font-medium text-teal-500 opacity-90 print:text-black">
          {relationType && `${relationTypeName()}, `}
          {locationTypeName()}
        </p>
      </div>

      {children}
    </>
  );
};

export const Position = ({
  position,
  startDate,
  endDate,
}: {
  position: string;
  startDate: string;
  endDate?: string;
}) => {
  const t = useTranslations('Experience');

  return (
    <div className="flex flex-wrap items-baseline justify-between">
      <h5 className="text-md font-normal tracking-wide opacity-95 ">
        {position}
      </h5>
      <p className="ml-auto pb-1 text-right text-sm font-medium text-teal-300 opacity-90 print:text-black">{`${startDate} — ${endDate ? endDate : t('present')}`}</p>
    </div>
  );
};

export const Highlights = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  const t = useTranslations('Experience');

  return (
    <>
      <h6 className="pb-1 pt-2 text-sm font-semibold">
        {title ?? t('highlights')}
      </h6>
      <ul className="list-disc pl-5 text-sm font-light leading-relaxed">
        {children}
      </ul>
    </>
  );
};

CareerEntry.Description = ({ children }: { children: React.ReactNode }) => (
  <p className="py-4 text-sm font-light last:pb-0">{children}</p>
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
