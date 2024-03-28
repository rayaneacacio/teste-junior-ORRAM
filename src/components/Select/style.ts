import styled from "styled-components";

export const Container = styled.select`
  color: ${({ theme }) => theme.COLORS.GRAY};
  padding: 1rem 4rem 1rem 1rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY};
  cursor: pointer;
  outline: 0;
`;