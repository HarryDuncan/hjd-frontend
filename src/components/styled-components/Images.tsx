import styled from "styled-components";

export const ScrollLeft = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  cursor: pointer;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    top: auto;
  }
`;

export const ScrollRight = styled.img`
  position: absolute;
  right: 0;
  top: 50%;
  cursor: pointer;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    top: auto;
  }
`;
