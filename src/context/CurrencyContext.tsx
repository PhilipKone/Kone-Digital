import React, { createContext, useContext, useState, useEffect } from 'react';

type Currency = 'GHS' | 'USD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  exchangeRate: number; // GHS to USD
  formatPrice: (amountGHS: number) => string;
  isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);
const RATE_CACHE_KEY = 'kdigital-ghs-usd-rate';

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    const saved = localStorage.getItem('kdigital-currency');
    return (saved as Currency) || 'GHS';
  });

  const [exchangeRate, setExchangeRate] = useState<number>(() => {
    const cached = parseFloat(localStorage.getItem(RATE_CACHE_KEY) || '');
    return Number.isFinite(cached) && cached > 0 ? cached : 0.085;
  });

  const [isLoading, setIsLoading] = useState(true);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem('kdigital-currency', newCurrency);
  };

  useEffect(() => {
    const fetchLiveRate = async (): Promise<number | null> => {
      const providers = [
        async () => {
          const res = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/ghs.json');
          const data = await res.json();
          return data?.ghs?.usd ?? null;
        },
        async () => {
          const res = await fetch('https://open.er-api.com/v6/latest/GHS');
          const data = await res.json();
          return data?.rates?.USD ?? null;
        },
        async () => {
          const res = await fetch('https://api.exchangerate-api.com/v4/latest/GHS');
          const data = await res.json();
          return data?.rates?.USD ?? null;
        }
      ];

      for (const getRate of providers) {
        try {
          const rate = await getRate();
          if (typeof rate === 'number' && rate > 0) return rate;
        } catch {
          // Try next provider
        }
      }
      return null;
    };

    fetchLiveRate().then((liveRate) => {
      if (liveRate) {
        setExchangeRate(liveRate);
        localStorage.setItem(RATE_CACHE_KEY, String(liveRate));
      }
      setIsLoading(false);
    });
  }, []);

  const formatPrice = (amountGHS: number) => {
    if (currency === 'GHS') {
      return `GHS ${amountGHS.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    } else {
      const amountUSD = amountGHS * exchangeRate;
      return `$${amountUSD.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, exchangeRate, formatPrice, isLoading }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
