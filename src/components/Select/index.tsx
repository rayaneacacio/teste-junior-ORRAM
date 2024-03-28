import { ReactElement } from "react";
import { Container } from "./style";

export default function Select(props: { defaultValue?: string }): ReactElement {
  return (
    <Container defaultValue={ props.defaultValue }>
      <option value="USD">USD</option>
      <option value="BRL">BRL</option>
    </Container>
  )
}