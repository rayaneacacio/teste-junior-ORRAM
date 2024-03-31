import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

type IArrow = {
  isOpen: boolean;
}

export const Container = styled.div`
  width: 10rem;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY};
  border-radius: 1rem;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  .select {
    padding: 9px 1.5rem;
    display: flex;
    align-items: center;
  }

  @media(min-width: 1000px) {
    width: 13.5rem;
  }
`;

export const Arrow = styled(IoIosArrowDown)<IArrow>`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  right: 1rem;
  transition: 0.3s;
  transform: ${({ isOpen }) => isOpen ? "rotateX(180deg)" : "rotateX(0)"};
`;

export const Options = styled.aside`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 10rem;
  position: absolute;
  z-index: 1;
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

  > button:first-of-type {
    border-radius: 1rem 1rem 0 0;
  }

  > button:last-of-type {
    border-radius: 0 0 1rem 1rem;
  }

  @media(min-width: 1000px) {
    width: 13.5rem;
  }
`;