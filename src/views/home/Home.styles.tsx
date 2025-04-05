import {
  TextScrollerContainer,
  TextScrollerText,
} from "components/text-scroller/TextScroller.styles";
import styled, { keyframes } from "styled-components";

const growDown = keyframes`
  from {
    height: 0;
  }
  to {
    height: 30vh; /* Adjust the final height as needed */
  }
`;

export const HomeContainerBottom = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 0;
  height: 0vh;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.gradients.dark};
  z-index: 900;
  ${TextScrollerContainer} {
    position: relative;
    align-items: flex-start;
    justify-content: flex-start;
  }
  ${TextScrollerText} {
    font-size: ${({ theme }) => theme.font.size.small};
    margin: 0;
    color: black;
  }
  animation: ${growDown} 1s ease-in-out 1.5s forwards;
`;
