import styled, { keyframes } from "styled-components";

const scrollTextLeft = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const TextScrollerText = styled.h1<{ $isLight: boolean }>`
  text-transform: uppercase;
  color: ${({ $isLight }) => ($isLight ? "white" : "black")};
  font-size: ${({ theme }) => theme.font.size.mediumLarge};
  font-weight: ${({ theme }) => theme.font.weight.light};
  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.mobile}px) {
      font-size: ${({ theme }) => theme.font.size.mediumSmall};
`;

export const TextScrollerContainer = styled.div<{
  $isAnimating: boolean;
  $verticalPosition: string;
  $direction: "left" | "right";
}>`
  height: 100%;
  pointer-events: none;
  width: fit-content;
  display: flex;
  align-items: ${({ $verticalPosition }) => $verticalPosition};
  justify-content: center;
  overflow: hidden;
  position: absolute;
  z-index: 2;
  margin-top: 0;
  animation: ${scrollTextLeft} 3000s linear infinite;
  & ${TextScrollerText} {
    display: inline-block;
    white-space: pre;
    z-index: 1;
    animation: appear 0.1s ease-out forwards;
  }
`;
