import { locale } from './locale';

const currencyFormatter = new Intl.NumberFormat(locale, {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});

export const formatPrice = (value: number) => currencyFormatter.format(value);
