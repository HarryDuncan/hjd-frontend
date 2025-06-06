import {
  ScrolledTypographyHeader,
  ScrolledTypographyText,
} from "components/animations/scroll/scroll-typography/ScrollTypography.styles";
import styled, { keyframes } from "styled-components";

export const TextContainer = styled.div`
  position: relative;
  padding: 10%;
  width: 80%;
  color: white;
  text-align: center;
  pointer-events: none;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    width: 95%;
    top: 0%;
    color: white;
    left: 2.5%;
  }
`;

export const BioContentContainer = styled.div<{ $index: number }>`
  left: ${({ $index }) => ($index % 2 === 0 ? 10 : 40)}%;
  top: 0;
  z-index: 5;
  position: absolute;
  top: 15%;
  width: 50%;
  ${ScrolledTypographyHeader} {
    color: white;
    margin: 0 auto;
    text-align: center;
    font-weight: 100;
    font-size: ${({ theme }) => theme.font.size.large};
  }
  ${ScrolledTypographyText} {
    color: white;
    font-family: ${({ theme }) => theme.font.default.family};
    font-size: ${({ theme }) => theme.font.size.small};
    font-weight: 600;
    white-space: pre-wrap;
    position: relative;
    text-align: center;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    width: calc(100% - 3rem);
    left: 1.5rem;

    ${ScrolledTypographyHeader} {
      font-size: ${({ theme }) => theme.font.size.mediumSmall};
    }
    ${ScrolledTypographyText} {
      font-size: ${({ theme }) => theme.font.size.xxsm};
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
export const BioPage = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  min-height: 100vh;
  animation: ${fadeIn} 2.5s ease-in-out;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    width: 100%;
  }
`;
