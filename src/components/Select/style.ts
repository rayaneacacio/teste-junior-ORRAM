import styled from "styled-components";

export const Container = styled.div`
  width: 10rem;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY};
  border-radius: 1rem;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  .select {
    padding: 5px 1.5rem;
    display: flex;
    align-items: center;
  }

  svg {
    position: absolute;
    right: 1rem;
  }

  .options {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    width: 10rem;
    position: absolute;
    z-index: 1;
    display: none;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY};
    border-radius: 1rem;

    > button {
      color: ${({ theme }) => theme.COLORS.BLACK};
      width: 100%;
      padding: 1rem;
      text-align: left;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.GRAY_2};
        color: ${({ theme }) => theme.COLORS.WHITE};
        filter: none;
      }
    }
  }

  @media(min-width: 1000px) {
    width: 13.5rem;

    .options {
      width: 13.5rem;
    }
  }
`;