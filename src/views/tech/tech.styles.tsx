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
    font-size: ${({ theme }) => theme.font.size.large};
    position: absolute;
    top: 30vh;
    text-align: center;
    width: 100%;
    color: white;
    font-weight: ${({ theme }) => theme.font.weight.light};
    width: 80%;
    left: 10%;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    ${ScrolledTypographyHeader} {
      font-size: ${({ theme }) => theme.font.size.medium};
      top: 40vh;
    }
  }
`;

export const TechSectionContainer = styled.div`
  min-height: 100vh;
`;

const OFFSET = 5;
export const TechInfoContainer = styled.div<{ $top: number; $isLeft: boolean }>`
  top: 0;
  z-index: 5;
  position: absolute;
  top: ${({ $top }) => $top + OFFSET}%;
  left: ${({ $isLeft }) => ($isLeft === true ? "58%" : "2%")};
  width: 40%;
  ${ScrolledTypographyHeader} {
    color: white;
    margin: 0 auto;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.large};
    font-weight: ${({ theme }) => theme.font.weight.light};
  }
  ${ScrolledTypographyText} {
    color: white;
    font-family: ${({ theme }) => theme.font.default.family}
    font-size: ${({ theme }) => theme.font.size.medium};
    font-weight: 600;
    white-space: pre-wrap;
    position: relative;
    text-align: center;
  }

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.laptop}px) {
    top: ${({ $top }) => $top + OFFSET / 4}%;
    left: 10%;
    width: 80%;

    ${ScrolledTypographyHeader} {
      font-size: ${({ theme }) => theme.font.size.large};
    }
    ${ScrolledTypographyText} {
      font-size: ${({ theme }) => theme.font.size.small};
    }
  }

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.tablet}px) {
    ${ScrolledTypographyHeader} {
      font-size: ${({ theme }) => theme.font.size.medium};
    }
    ${ScrolledTypographyText} {
      font-size: ${({ theme }) => theme.font.size.xSmall};
    }
  }
`;
