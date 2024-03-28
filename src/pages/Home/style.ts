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
      gap: 2.5rem;
    }
  }

  .divSelects {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;