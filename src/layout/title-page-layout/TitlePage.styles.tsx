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
  position: relative;
  top: 0;
  opacity: 0;
  height: 15vh;
  background: ${({ theme }) => theme.colors.gradients.dark};
  z-index: 50;
  ${TextScrollerText} {
    font-size: ${({ theme }) => theme.font.size.large};
  }
  animation: ${growDown} 1s ease-in-out 0.2s forwards;
`;
