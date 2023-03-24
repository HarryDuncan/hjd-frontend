import styled, { keyframes } from "styled-components";

const scrollText = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const TextScrollerText = styled.h1<{ $isLight: boolean }>`
  text-transform: uppercase;
  background: ${({ $isLight, theme }) =>
    $isLight ? theme.colors.gradients.light : theme.colors.gradients.dark};
     -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 5.5rem;
  font-weight ${({ theme }) => theme.font.weight.light}

`;

export const TextScrollerContainer = styled.div<{ $isAnimating: boolean }>`
  height: 100%;
  pointer-events: none;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  z-index: 2;
  animation: ${scrollText} 3000s linear infinite;
  & ${TextScrollerText} {
    display: inline-block;
    white-space: pre;
    z-index: 1;
    animation: appear 0.1s ease-out forwards;
  }
`;
