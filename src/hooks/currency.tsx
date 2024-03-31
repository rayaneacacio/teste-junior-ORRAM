import { Dispatch, SetStateAction, createContext, ReactElement, useContext, useState } from "react";
import { apiEconomy } from "../services/api";

interface ICurrencyContext {
  currencies: ICurrency;
  selectedCurrencies: {
    firstCurrency: string,
    secondCurrency: string
  };
  setSelectedCurrencies: Dispatch<SetStateAction<{
    firstCurrency: string;
    secondCurrency: string;
  }>>;
  findCurrencies: (signal: AbortSignal) => Promise<void>;
  getVariations: () => Promise<IVariationCurrency[] | undefined>;
}

const initialValue  = {
  currencies: {
    BRL: "",
    USD: "",
    JPY: "",
  },
  selectedCurrencies: {
    firstCurrency: "USD",
    secondCurrency: "BRL"
  },
  setSelectedCurrencies: () => {},
  findCurrencies: async(): Promise<void> => {},
  getVariations: async(): Promise<IVariationCurrency[]> => [{
    name: "",
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
  name: string
  high: number;
  low: number;
  pctChange: number;
  timestamp: number;
  varBid: number;
}

export const CurrencyContext = createContext<ICurrencyContext>(initialValue);

function CurrencyProvider(props: { children: ReactElement }) {
  const [ currencies, setCurrencies ] = useState<ICurrency>(initialValue.currencies);
  const [ selectedCurrencies, setSelectedCurrencies ] = useState(initialValue.selectedCurrencies)

  async function findCurrencies(signal: AbortSignal): Promise<void> {
    try {
      const response = await apiEconomy.get<ICurrency>("/available/uniq", { signal });
      const { BRL, USD, JPY } = response.data;

      setCurrencies({BRL, USD, JPY});

    } catch(error) {
      console.error("error find currency");
    };
  };

  async function getVariations(): Promise<IVariationCurrency[] | undefined> {
    try {
      const response = await apiEconomy.get(`/daily/${ selectedCurrencies.firstCurrency }-${ selectedCurrencies.secondCurrency }/15`);
      return response.data;

    } catch(error: any) {
      alert(error.response.data.message);
    }
  }

  return (
    <CurrencyContext.Provider value={{ findCurrencies, currencies, getVariations, selectedCurrencies, setSelectedCurrencies }}>
      { props.children }
    </CurrencyContext.Provider>
  )
}

function useCurrency() {
  return useContext(CurrencyContext);
}

export { CurrencyProvider, useCurrency };