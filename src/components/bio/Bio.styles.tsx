import {
  ScrolledTypographyHeader,
  ScrolledTypographyText,
} from "components/animations/scroll-typography/ScrollTypography.styled";
import styled from "styled-components";

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
  }
  ${ScrolledTypographyText} {
    color: white;
    font-family: arial;
    font-size: 1.5rem;
    font-weight: 600;
    white-space: pre-wrap;
    position: relative;
    text-align: center;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    width: calc(100% - 0.5rem);
    left: 0.25rem;
    ${ScrolledTypographyHeader} {
      font-size: 5rem;
    }
    ${ScrolledTypographyText} {
      font-size: 1rem;
    }
  }
`;

export const BioPage = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    width: 100%;
  }
`;
