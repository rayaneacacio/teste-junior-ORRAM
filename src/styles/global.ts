import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    margin: 3rem 2rem;
    overflow: auto;
  }

  body, button, select {
    font-family: ${({ theme }) => theme.FONTS.DEFAULT};
    font-size: 1.8rem;
  }

  button {
    background: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      filter: brightness(0.7);
    }
  }

  button, select {
    -webkit-tap-highlight-color: transparent;
  }

  @media(min-width: 1000px) {
    body {
      margin: 3rem 5rem;
    }

    body, button, select {
      font-size: 2rem;
    }
  }
`;