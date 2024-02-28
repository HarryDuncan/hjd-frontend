import { TextScrollerText } from "components/text-scroller/TextScroller.styles";
import styled, { keyframes } from "styled-components";

const growDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;
export const PageTitleContainer = styled.div`
  width: 100vw;
  position: relative;
  top: 0;
  height: 20vh;
  background: ${({ theme }) => theme.colors.gradients.dark};
  z-index: 50;
  ${TextScrollerText} {
    font-size: ${({ theme }) => theme.font.size.large};
  }
  animation: ${growDown} 1.5s ease-in-out 0s forwards;
`;
