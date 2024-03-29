import { createContext, ReactElement, useContext, useState } from "react";
import { apiEconomy } from "../services/api";

interface ICurrencyContext {
  currencies: ICurrency;
  findCurrencies: (signal: AbortSignal) => Promise<void>;
  getVariation15days: (firstCurrency: string, secondCurrency: string) => Promise<IVariationCurrency[] | undefined>;
}

const initialValue  = {
  currencies: {
    BRL: "",
    USD: "",
    JPY: "",
  },
  findCurrencies: async(): Promise<void> => {},
  getVariation15days: async(): Promise<IVariationCurrency[]> => [{
    code: "",
    codein: "",
    create_date: "",
    name: "",
    ask: 0,
    bid: 0,
    high: 0,
    low: 0,
    pctChange: 0,
    timestamp: 0,
    varBid: 0,
  }]
};

export interface ICurrency {
  BRL: string;
  USD: string;
  JPY: string;
}

export interface IVariationCurrency {
  code: string;
  codein: string;
  create_date: string;
  name: string
  ask: number;
  bid: number;
  high: number;
  low: number;
  pctChange: number;
  timestamp: number;
  varBid: number;
}

export const CurrencyContext = createContext<ICurrencyContext>(initialValue);

function CurrencyProvider(props: { children: ReactElement }) {
  const [ currencies, setCurrencies ] = useState<ICurrency>(initialValue.currencies);

  async function findCurrencies(signal: AbortSignal): Promise<void> {
    try {
      const response = await apiEconomy.get<ICurrency>("/available/uniq", { signal });
      const { BRL, USD, JPY } = response.data;

      setCurrencies({BRL, USD, JPY});

    } catch(error) {
      console.error("error find currency");
    };
  };

  async function getVariation15days(firstCurrency: string, secondCurrency: string): Promise<IVariationCurrency[] | undefined> {
    try {
      const response = await apiEconomy.get(`/daily/${ firstCurrency }-${ secondCurrency }/15`);
      return response.data;

    } catch(error: any) {
      alert(error.response.data.message);
    }
  }

  return (
    <CurrencyContext.Provider value={{ findCurrencies, currencies, getVariation15days }}>
      { props.children }
    </CurrencyContext.Provider>
  )
}

function useCurrency() {
  return useContext(CurrencyContext);
}

export { CurrencyProvider, useCurrency };