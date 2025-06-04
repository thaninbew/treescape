'use client';
import { useCurrency } from '@/contexts/CurrencyContext';

interface PriceProps {
  amount: number;
  showFrom?: boolean;
  layout?: 'inline' | 'centered';
}

export default function Price({ amount, showFrom = false, layout = 'inline' }: PriceProps) {
  const { currency } = useCurrency();
  
  const priceText = `${currency.symbol}${(amount * currency.rate).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  
  if (layout === 'centered' && showFrom) {
    return (
      <div className="relative inline-block">
        <span className="absolute -left-8 top-0 text-xs opacity-60 font-normal">from</span>
        <span>{priceText}</span>
      </div>
    );
  }
  
  return (
    <>
      {showFrom && <span className="text-xs opacity-60 font-normal mr-1">from </span>}
      {priceText}
    </>
  );
}
