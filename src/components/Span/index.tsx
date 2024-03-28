import { ReactElement } from "react";
import { Container } from "./style";

export default function Span(props: { text: string }): ReactElement {
  return (
    <Container>
      { props.text }
    </Container>
  )
}