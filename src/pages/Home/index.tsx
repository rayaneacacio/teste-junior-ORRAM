import { ReactElement } from "react";
import { Container } from "./style";
import Button from "../../components/Button";
import Span from "../../components/Span";
import Select from "../../components/Select";
import { IoIosMore } from "react-icons/io";

export default function Home(): ReactElement {
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
          <Button text="Analisar" />
        </div>

        <Span text="Nome" />
        <Span text={ "Dólar Americano/Real Brasileiro" } />
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
          
          <tbody>
            <tr>
              <td>R$ 4.98</td>
              <td>R$ 4.99</td>
              <td> <Span text="20/02/2023" /> </td>
              <td className="coloGray">15%</td>
              <td>
                <button className="coloGray"> <IoIosMore size={ 25 } /> </button>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>R$ 4.98</td>
              <td>R$ 4.99</td>
              <td> <Span text="20/02/2023" /> </td>
              <td className="coloGray">15%</td>
              <td>
                <button className="coloGray"> <IoIosMore size={ 25 } /> </button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </Container>
  )
}