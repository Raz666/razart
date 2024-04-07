import { useTranslations } from 'next-intl';

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
        className="absolute -top-7 left-2 pb-1 text-xl font-extralight tracking-wide 
      "
      >
        {company}
      </h4>

      {children}
    </div>
  );
};

export const Position = ({
  position,
  relationType = 'contract',
  locationType = 'remote',
  startDate,
  endDate,
}: {
  position: string;
  relationType?: 'contract' | 'fullTime' | 'partTime' | null;
  locationType?: 'remote' | 'hybrid' | 'onSite';
  startDate: string;
  endDate?: string;
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
    }
  };

  return (
    <div className="flex justify-between">
      <h5 className="text-md font-normal tracking-wide">{position}</h5>
      <div>
        <p className="pb-1 text-right text-sm font-medium text-emerald-300">{`${startDate} — ${endDate ? endDate : t('present')}`}</p>
        <p className="text-right text-xs font-medium text-emerald-500">
          {relationType && `${relationTypeName()}, `}
          {locationTypeName()}
        </p>
      </div>
    </div>
  );
};

export const Highlights = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations('Experience');

  return (
    <>
      <h6 className="pb-1 pt-2 text-sm font-semibold">{t('highlights')}</h6>
      <ul className="list-disc pl-5 text-sm font-light leading-relaxed">
        {children}
      </ul>
    </>
  );
};

CareerEntry.Description = ({ children }: { children: React.ReactNode }) => (
  <p className="py-4 text-sm font-light">{children}</p>
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
