import { TextScrollerText } from "components/text-scroller/TextScroller.styles";
import styled from "styled-components";

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
`;
