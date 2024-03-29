import { ReactElement, useState } from "react";
import { Container } from "./style";
import Button from "../../components/Button";
import Span from "../../components/Span";
import Select from "../../components/Select";
import { IVariationCurrency, useCurrency } from "../../hooks/currency";
import Table from "../../components/Table";

export default function Home(): ReactElement {
  const { getVariation15days } = useCurrency();
  const [ nameCurrencies, setNameCurrencies ] = useState<string>("Dólar Americano/Real Brasileiro");
  const [ listVariations, setListVariations ] = useState<IVariationCurrency[]>([]);

  async function handleVariation15days(): Promise<void> {
    const selects: HTMLDivElement[] = Array.from(document.querySelectorAll(".select"));
    const firstCurrency: string = selects[0].innerText;
    const secondCurrency: string = selects[1].innerText;

    const data = await getVariation15days(firstCurrency, secondCurrency);

    if(data) {
      setNameCurrencies(data[0].name);
      setListVariations(data);
    }
  }

  return (
    <Container>
      <div className="selecionarMoeda">
        <Span text="Moeda" />

        <div>
          <div className="divSelects">
            <Select />
            <Span text="para" />
            <Select defaultValue="BRL" />
          </div>
          <Button text="Analisar" functionOnClick={ handleVariation15days } />
        </div>

        <Span text="Nome" />
        <Span text={ nameCurrencies } />
      </div>
      
      <main>
        <Table variations={ listVariations } />
      </main>
    </Container>
  )
}