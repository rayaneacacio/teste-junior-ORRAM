import { ReactElement, useState } from "react";
import { Container } from "./style";
import Button from "../../components/Button";
import Span from "../../components/Span";
import Select from "../../components/Select";
import { IoIosMore } from "react-icons/io";
import { IVariationCurrency, useCurrency } from "../../hooks/currency";

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
        <table>
          <thead>
            <tr>
              <th>Menor Preço</th>
              <th className="coloGray">Maior Preço</th>
              <th>Timestamp</th>
              <th>Porcentagem</th>
              <th></th>
            </tr>
          </thead>

          {
            listVariations?.map((variation: IVariationCurrency, index: number) => (
              <tbody key={ index }>
                <tr>
                  <td>
                    { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(variation.low) }
                  </td>

                  <td>
                    { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(variation.high) }
                  </td>

                  <td> 
                    <Span text={ 
                    String(new Intl.DateTimeFormat("pt-br")
                    .format(new Date(variation.timestamp * 1000))
                    ) } />
                  </td>

                  <td className="colorGray tdPorcentagem">
                    { (variation.pctChange * 100).toFixed(0) + "%" }
                  </td>
                  <td>
                    <button className="colorGray"> <IoIosMore size={ 25 } /> </button>
                  </td>
                </tr>
              </tbody>
            ))
          }
        </table>
      </main>
    </Container>
  )
}