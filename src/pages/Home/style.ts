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
    align-items: center;
    gap: 1rem;
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