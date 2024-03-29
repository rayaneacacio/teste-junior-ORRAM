import { ReactElement, useEffect, useState } from "react";
import { Container } from "./style";
import { IoIosArrowDown } from "react-icons/io";
import { useCurrency } from "../../hooks/currency";

export default function Select(props: { defaultValue?: string }): ReactElement {
  const { findCurrencies, currencies } = useCurrency();
  const [ value, setValue ] = useState<string>(props.defaultValue ?? "USD");

  function handleOpenSelect(container: HTMLDivElement): void {
    const options = container.querySelector(".options")! as HTMLDivElement;
    const svg = container.querySelector("svg")! as SVGElement;

    if(options.style.display == "none") {
      options.style.display = "block";
      svg.style.transform = "rotateX(180deg)";
    } else {
      options.style.display = "none";
      svg.style.transform = "rotateX(0)";
    }
  }

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
    <Container onClick={(event) => handleOpenSelect(event.currentTarget) }>
      <div className="select">
        <p>{ value }</p>
        <IoIosArrowDown size={ 25 } />
      </div>

      <div className="options">
        {
          currencies &&
          Object.keys(currencies).map((currency: string, index: number) => (
            <button key={ index } onClick={() => setValue(currency) }>{ currency }</button>
          ))
        }
      </div>
    </Container>
  )
}