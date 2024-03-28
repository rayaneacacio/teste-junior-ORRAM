import styled from "styled-components";

export const Container = styled.select`
  color: ${({ theme }) => theme.COLORS.GRAY};
  padding: 1rem 2.5rem 1rem 1.5rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY};
  cursor: pointer;
  outline: 0;
`;