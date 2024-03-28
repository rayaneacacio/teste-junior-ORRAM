import { ReactElement } from "react";
import { Container } from "./style";
import Button from "../../components/Button";
import Span from "../../components/Span";
import Select from "../../components/Select";

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
      
      <main></main>
    </Container>
  )
}