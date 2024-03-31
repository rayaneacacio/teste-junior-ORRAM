import { ReactElement, useState } from "react";
import { Container } from "./style";
import Button from "../../components/Button";
import Span from "../../components/Span";
import Select from "../../components/Select";
import { IVariationCurrency, useCurrency } from "../../hooks/currency";
import Table from "../../components/Table";

export default function Home(): ReactElement {
  const { getVariations, selectedCurrencies, setSelectedCurrencies } = useCurrency();
  const [ variations, setVariations ] = useState<IVariationCurrency[]>([]);

  async function handleVariation15days(): Promise<void> {
    const data = await getVariations();

    if(data) {
      setVariations(data);
    }
  }

  function getBiggestVariations(data: IVariationCurrency[]): IVariationCurrency[] {
    const variationsList = data.map(variation => ({...variation, varBid: Number(variation.varBid)}))
    const variationsDescendingOrder = variationsList.sort((a, b) => b.varBid - a.varBid);
    const biggestVarBidList = variationsDescendingOrder.slice(0, 5);

    return biggestVarBidList;
  }

  const biggestVariations = (() => {
    if (variations.length === 0) return [];

    return getBiggestVariations(variations);
  })();

  const nameCurrencies = (() => {
    if(variations.length === 0) return "Dólar Americano/Real Brasileiro";

    return variations[0].name;
  })();

  function setFirstCurrency (currency: string) {
    setSelectedCurrencies({ ...selectedCurrencies, firstCurrency: currency });
  }

  function setSecondCurrency (currency: string) {
    setSelectedCurrencies({ ...selectedCurrencies, secondCurrency: currency });
  }

  return (
    <Container>
      <div className="selecionarMoeda">
        <Span text="Moeda" />

        <div>
          <div className="divSelects">
            <Select 
              value={ selectedCurrencies.firstCurrency } 
              setValue={ (value: string) => setFirstCurrency(value) } 
            />
            <Span text="para" />
            <Select
              value={ selectedCurrencies.secondCurrency } 
              setValue={ (value: string) => setSecondCurrency(value) } 
            />
          </div>
          <Button text="Analisar" functionOnClick={ handleVariation15days } />
        </div>

        <Span text="Nome" />
        <Span text={ nameCurrencies } />
      </div>
      
      <main>
        <div>
          <h1>Variações dos ultimos 15 dias</h1>
          <Table variations={ variations } />
        </div>

        <div>
          <h1>5 maiores variações</h1>
          <Table variations={ biggestVariations } />
        </div>
      </main>
    </Container>
  )
}