import { ReactElement, useState } from "react";
import { Container } from "./style";
import { IoIosArrowDown } from "react-icons/io";

export default function Select(props: { defaultValue?: string }): ReactElement {
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

  return (
    <Container onClick={(event) => handleOpenSelect(event.currentTarget) }>
      <div className="select">
        <p>{ value }</p>
        <IoIosArrowDown size={ 25 } />
      </div>

      <div className="options">
        <button onClick={() => setValue("USD") }>USD</button>
        <button onClick={() => setValue("BRL") }>BRL</button>
      </div>
    </Container>
  )
}