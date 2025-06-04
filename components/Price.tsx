'use client';
import { useCurrency } from '@/contexts/CurrencyContext';

export default function Price({ amount }: { amount: number }) {
  const { currency } = useCurrency();
  return (
    <>{currency.symbol}{(amount * currency.rate).toLocaleString(undefined, { maximumFractionDigits: 0 })}</>
  );
}
