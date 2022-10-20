import styled from "styled-components";

export const ScrollLeft = styled.img`
  position: absolute;
  height: 2rem;
  left: 1rem;
  top: 50%;
  cursor: pointer;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    top: auto;
  }
`;

export const ScrollRight = styled.img`
  position: absolute;
  right: 1rem;
  top: 50%;
  height: 2rem;
  cursor: pointer;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    top: auto;
  }
`;

export const Exit = styled.img`
  position: absolute;
  right: 1rem;
  top: 4rem;
  height: 2rem;
  cursor: pointer;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    top: auto;
  }
`;
