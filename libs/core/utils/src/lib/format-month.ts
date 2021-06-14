import { locale } from './locale';

export type MonthFormatOption =
  | 'numeric'
  | '2-digit'
  | 'long'
  | 'short'
  | 'narrow';

export const formatMonth = (
  month: number,
  formatOption: MonthFormatOption = 'long'
) => new Date(0, month - 1).toLocaleString(locale, { month: formatOption });
