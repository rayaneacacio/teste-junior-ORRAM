import { createContext, ReactElement, useContext, useState } from "react";
import { apiEconomy } from "../services/api";

interface ICurrencyContext {
  currencies: ICurrency;
  findCurrencies: (signal: AbortSignal) => {};
}

const initialValue  = {
  currencies: {
    BRL: "",
    USD: "",
    JPY: "",
  },
  findCurrencies: async(): Promise<void> => {}
};

export interface ICurrency {
  BRL: string;
  USD: string;
  JPY: string;
}

export const CurrencyContext = createContext<ICurrencyContext>(initialValue);

function CurrencyProvider(props: { children: ReactElement }) {
  const [ currencies, setCurrencies ] = useState<ICurrency>(initialValue.currencies);

  async function findCurrencies(signal: AbortSignal): Promise<void> {
    try {
      const response = await apiEconomy.get<ICurrency>("/available/uniq", { signal });

      setCurrencies({
        BRL: response.data.BRL,
        USD: response.data.USD,
        JPY: response.data.JPY
      });

    } catch(error) {
      console.error("error find currency");
    };
  };

  return (
    <CurrencyContext.Provider value={{ findCurrencies, currencies }}>
      { props.children }
    </CurrencyContext.Provider>
  )
}

function useCurrency() {
  return useContext(CurrencyContext);
}

export { CurrencyProvider, useCurrency };