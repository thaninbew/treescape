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
  isLoading: boolean;
  lastUpdated: Date | null;
}

const CurrencyContext = createContext<CurrencyContextProps>({
  currency: defaultRates.THB,
  setCurrencyCode: () => {},
  rates: defaultRates,
  isLoading: false,
  lastUpdated: null,
});

const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes
const CACHE_KEY = 'currency_rates_cache';
const TIMESTAMP_KEY = 'currency_rates_timestamp';

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currencyCode, setCurrencyCode] = useState<string>('THB');
  const [rates, setRates] = useState<Record<string, CurrencyInfo>>(defaultRates);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Load saved currency preference
  useEffect(() => {
    const saved = localStorage.getItem('currencyCode');
    if (saved && defaultRates[saved]) {
      setCurrencyCode(saved);
    }
  }, []);

  // Load cached rates and fetch fresh ones if needed
  useEffect(() => {
    async function loadRates() {
      // Try to load cached rates first for instant display
      const cachedRates = localStorage.getItem(CACHE_KEY);
      const cachedTimestamp = localStorage.getItem(TIMESTAMP_KEY);
      
      if (cachedRates && cachedTimestamp) {
        try {
          const parsed = JSON.parse(cachedRates);
          const timestamp = new Date(cachedTimestamp);
          setRates(parsed);
          setLastUpdated(timestamp);
          
          // Check if cache is still fresh
          const now = new Date();
          const cacheAge = now.getTime() - timestamp.getTime();
          
          if (cacheAge < CACHE_DURATION) {
            // Cache is fresh, no need to fetch
            return;
          }
        } catch (err) {
          console.error('Failed to parse cached rates', err);
        }
      }

      // Fetch fresh rates (either no cache or stale cache)
      await fetchFreshRates();
    }

    loadRates();
  }, []);

  const fetchFreshRates = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/THB');
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      
      if (data && data.rates) {
        const updated = { ...defaultRates };
        Object.keys(defaultRates).forEach((code) => {
          if (data.rates[code]) {
            updated[code] = { ...updated[code], rate: data.rates[code] };
          }
        });
        
        setRates(updated);
        const now = new Date();
        setLastUpdated(now);
        
        // Cache the results
        localStorage.setItem(CACHE_KEY, JSON.stringify(updated));
        localStorage.setItem(TIMESTAMP_KEY, now.toISOString());
      }
    } catch (err) {
      console.error('Failed to fetch currency rates', err);
      // Keep existing rates (cached or default) on error
    } finally {
      setIsLoading(false);
    }
  };

  // Save currency preference
  useEffect(() => {
    localStorage.setItem('currencyCode', currencyCode);
  }, [currencyCode]);

  return (
    <CurrencyContext.Provider value={{ 
      currency: rates[currencyCode], 
      setCurrencyCode, 
      rates, 
      isLoading,
      lastUpdated 
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
