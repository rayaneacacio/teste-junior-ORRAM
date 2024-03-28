import styled from "styled-components";

export const Container = styled.div`
  .selecionarMoeda {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    > div {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }
  }

  .divSelects {
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    svg {
      margin-top: 4px;
    }
  }

  main {
    margin-top: 4rem;
  }

  table {
    font-size: 1.6rem;
    width: 100%;

    th {
      text-align: start;
    }

    th, td {
      padding: 1.5rem 1px;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY};
    }
  }

  .coloGray {
    color: ${({ theme }) => theme.COLORS.GRAY_2};
  }

  .tdPorcentagem {
    padding-left: 4rem;
  }

  @media(min-width: 600px) {
    table button svg {
      width: 2.9rem;
      height: 2.9rem;
    }

    .tdPorcentagem {
      padding-left: 6rem;
    }
  }

  @media(min-width: 1100px) {
    .selecionarMoeda > div {
      gap: 2.5rem;
    }

    table {
      font-size: 1.8rem;
      width: 100rem;
    }
  }
`;