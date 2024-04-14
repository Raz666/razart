import { DateTimeFormatOptions, useFormatter } from 'next-intl';

export const useDateString = ({
  year,
  month,
}: {
  year?: number;
  month: number;
}) => {
  const format = useFormatter();
  const fallbackYear = 2020;
  const rawDate = new Date(year ?? fallbackYear, month - 1);
  const formatOptions: DateTimeFormatOptions = year
    ? {
        year: 'numeric',
        month: 'long',
      }
    : { month: 'long' };
  return format.dateTime(rawDate, formatOptions);
};
