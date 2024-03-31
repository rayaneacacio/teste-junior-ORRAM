import { ReactElement, useEffect, useState } from "react";
import { Container, Arrow, Options } from "./style";
import { useCurrency } from "../../hooks/currency";

export default function Select(props: { value: string, setValue: (value: string) => void }): ReactElement {
  const { findCurrencies, currencies } = useCurrency();
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    (async(): Promise<void> => {
      await findCurrencies(controller.signal);
    })();

    return () => {
      controller.abort();
    }

  }, []);

  return (
    <Container onClick={() => setIsOpen(prevState => !prevState) }>
      <div className="select">
        <p>{ props.value }</p>
        <Arrow isOpen={ isOpen } />
      </div>

      {
        isOpen &&
        <Options>
          {
            currencies &&
            Object.keys(currencies).map((currency: string, index: number) => (
              <button key={ index } onClick={() => props.setValue(currency) }>{ currency }</button>
            ))
          }
        </Options>
      }
    </Container>
  )
}