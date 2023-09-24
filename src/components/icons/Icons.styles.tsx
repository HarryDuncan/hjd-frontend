import styled from "styled-components";

export const IconContainer = styled.div`
  width: fit-content;
  height: fit-content;

  img {
    position: relative;
    height: 2.5rem;
    cursor: pointer;
    z-index: 2;
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.mobile}px) {
      height: 1.5rem;
    }
  }
`;
