import {
  ScrolledTypographyHeader,
  ScrolledTypographyText,
} from "components/animations/scroll/scroll-typography/ScrollTypography.styled";
import styled from "styled-components";

export const TechTitleContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  ${ScrolledTypographyHeader} {
    font-size: 5rem;
    position: absolute;
    top: 50vh;
    text-align: center;
    width: 100%;
    color: white;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    ${ScrolledTypographyHeader} {
      font-size: 2.5rem;
      top: 30vh;
    }
  }
`;

export const TechSectionContainer = styled.div``;

const OFFSET = 3;
export const TechInfoContainer = styled.div<{ $top: number; $isLeft: boolean }>`
  top: 0;
  z-index: 5;
  position: absolute;
  top: ${({ $top }) => $top + OFFSET}%;
  left: ${({ $isLeft }) => ($isLeft === true ? "60%" : "10%")};
  width: 30%;
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
`;
