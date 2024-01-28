import {
  TextScrollerContainer,
  TextScrollerText,
} from "components/text-scroller/TextScroller.styles";
import styled from "styled-components";

export const HomeContainerBottom = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 0;
  height: 30vh;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.gradients.dark};
  z-index: 50;
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
`;
