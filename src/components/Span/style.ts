import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY};
  padding: 6px;
  border-radius: 1rem;

  @media(min-width: 1000px) {
    font-size: 1.6rem;
  }
`;