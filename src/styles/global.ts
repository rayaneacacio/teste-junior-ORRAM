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
    font-family: ${({ theme }) => theme.FONTS.DEFAULT};
    font-size: 1.6rem;
  }

  @media(min-width: 1000px) {
    body {
      font-size: 2rem;
    }
  }
`;