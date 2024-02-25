import { TextScrollerText } from "components/text-scroller/TextScroller.styles";
import styled, { keyframes } from "styled-components";

const growDown = keyframes`
  from {
    height: 0;
  }
  to {
    height: 20vh; /* Adjust the final height as needed */
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
  animation: ${growDown} 1s ease-in-out 1.5s;
`;
