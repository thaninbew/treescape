'use client';

import { createContext, useContext, useState, useEffect } from 'react';

export type CurrencyInfo = {
  code: string;
  symbol: string;
  rate: number; // multiply THB amount by this rate
};

const defaultRates: Record<string, CurrencyInfo> = {
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
  rates: Record<string, CurrencyInfo>;
}

const CurrencyContext = createContext<CurrencyContextProps>({
  currency: defaultRates.THB,
  setCurrencyCode: () => {},
  rates: defaultRates,
});

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currencyCode, setCurrencyCode] = useState<string>('THB');
  const [rates, setRates] = useState<Record<string, CurrencyInfo>>(defaultRates);

  useEffect(() => {
    const saved = localStorage.getItem('currencyCode');
    if (saved && defaultRates[saved]) {
      setCurrencyCode(saved);
    }
  }, []);

  useEffect(() => {
    async function fetchRates() {
      try {
        const res = await fetch('https://open.er-api.com/v6/latest/THB');
        const data = await res.json();
        if (data && data.rates) {
          setRates((prev) => {
            const updated = { ...prev };
            Object.keys(prev).forEach((code) => {
              if (data.rates[code]) {
                updated[code] = { ...updated[code], rate: data.rates[code] };
              }
            });
            return updated;
          });
        }
      } catch (err) {
        console.error('Failed to fetch currency rates', err);
      }
    }
    fetchRates();
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
