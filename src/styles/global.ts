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
    overflow: hidden;

    > div {
      height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
      scroll-behavior: smooth;
      padding: 3rem 2rem 10rem;

      &::-webkit-scrollbar {
        display: none;
      }
    }
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

  @media(min-width: 700px) {
    body > div {
      padding: 3rem 5rem;
    }

    body > div, tbody {
      &::-webkit-scrollbar {
        display: block;
        width: 18px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.GRAY_2};
        border: 5px solid ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 10px;
      }
    }
  }

  @media(min-width: 1000px) {
    body, button, select {
      font-size: 2rem;
    }
  }
`;