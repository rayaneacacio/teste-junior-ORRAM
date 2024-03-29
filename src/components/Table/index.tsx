import { ReactElement } from "react";
import { Container } from "./style";
import Span from "../Span";
import { IoIosMore } from "react-icons/io";
import { IVariationCurrency } from "../../hooks/currency";

export default function Table(props: { variations: IVariationCurrency[] }): ReactElement {
  return (
    <Container>
      <thead>
        <tr>
          <th>Menor Preço</th>
          <th className="colorGray">Maior Preço</th>
          <th>Timestamp</th>
          <th>Porcentagem</th>
          <th></th>
        </tr>
      </thead>

      {
        props.variations.map((variation: IVariationCurrency, index: number) => (
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
    </Container>
  )
}