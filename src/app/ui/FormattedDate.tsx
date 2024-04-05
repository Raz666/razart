import { format } from "date-fns";
import { pl } from "date-fns/locale";

export const dateString = ({
  year,
  month,
}: {
  year?: number;
  month: number;
}) => {
  const fallbackYear = 2020;
  const rawDate = new Date(year ?? fallbackYear, month - 1);
  const dateFormat = year ? "LLLL u" : "LLLL";
  return format(rawDate, dateFormat);
};
