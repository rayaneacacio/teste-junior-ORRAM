import { ReactElement } from "react";
import { Container } from "./style";

export default function Button(props: { text: string, functionOnClick?: () => void }): ReactElement {
  return (
    <Container onClick={ props.functionOnClick }>
      { props.text }
    </Container>
  )
}