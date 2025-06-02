import { TextScrollerText } from "components/text-scroller/TextScroller.styles";
import styled, { keyframes } from "styled-components";

const growDown = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1; 
}
`;

export const PageTitleContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  background: ${({ theme }) => theme.colors.gradients.dark};
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${growDown} 1s ease-in-out 0.2s forwards;
  mask-image: radial-gradient(circle at center, transparent 30vh, black 30vh);
  -webkit-mask-image: radial-gradient(
    circle at center,
    transparent 80vh,
    black 80vh
  );

  ${TextScrollerText} {
    font-size: ${({ theme }) => theme.font.size.large};
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    display: none;
  }
`;
