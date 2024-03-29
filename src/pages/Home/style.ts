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
      gap: 1rem;
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

  .colorGray {
    color: ${({ theme }) => theme.COLORS.GRAY_2};
  }

  @media(min-width: 600px) {
    .selecionarMoeda > div {
      gap: 1.5rem;
    }
  }

  @media(min-width: 1100px) {
    .selecionarMoeda > div {
      gap: 2.5rem;
    }
  }
`;