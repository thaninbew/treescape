'use client';

import { createContext, useContext, useState, useEffect } from 'react';

export type CurrencyInfo = {
  code: string;
  symbol: string;
  rate: number; // multiply THB amount by this rate
};

const rates: Record<string, CurrencyInfo> = {
  THB: { code: 'THB', symbol: '฿', rate: 1 },
  USD: { code: 'USD', symbol: '$', rate: 0.027 },
  EUR: { code: 'EUR', symbol: '€', rate: 0.025 },
  GBP: { code: 'GBP', symbol: '£', rate: 0.021 },
  JPY: { code: 'JPY', symbol: '¥', rate: 4.3 },
  AUD: { code: 'AUD', symbol: 'A$', rate: 0.041 },
  CAD: { code: 'CAD', symbol: 'C$', rate: 0.037 },
  CNY: { code: 'CNY', symbol: '¥', rate: 0.19 },
  INR: { code: 'INR', symbol: '₹', rate: 2.2 },
};

interface CurrencyContextProps {
  currency: CurrencyInfo;
  setCurrencyCode: (code: string) => void;
  rates: typeof rates;
}

const CurrencyContext = createContext<CurrencyContextProps>({
  currency: rates.THB,
  setCurrencyCode: () => {},
  rates,
});

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currencyCode, setCurrencyCode] = useState<string>('THB');

  useEffect(() => {
    const saved = localStorage.getItem('currencyCode');
    if (saved && rates[saved]) {
      setCurrencyCode(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currencyCode', currencyCode);
  }, [currencyCode]);

  return (
    <CurrencyContext.Provider value={{ currency: rates[currencyCode], setCurrencyCode, rates }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
