import styled from "styled-components";

export const Container = styled.table`
  font-size: 1.6rem;
  width: 100%;

  th {
    text-align: start;
  }

  th, td {
    padding: 1.6rem 1px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY};
  }

  .tdPorcentagem {
    padding-left: 4rem;
  }

  @media(min-width: 600px) {
    button svg {
      width: 2.9rem;
      height: 2.9rem;
    }

    .tdPorcentagem {
      padding-left: 6rem;
    }
  }

  @media(min-width: 1100px) {
    font-size: 1.8rem;

    .selecionarMoeda > div {
      gap: 2.5rem;
    }
  }

  @media(min-width: 1200px) {
    thead, tbody {
      display: block;
    }

    tbody {
      height: 35rem;
      overflow-y: auto;
    }

    th, td {
      width: 15rem;
    }
  }
`;