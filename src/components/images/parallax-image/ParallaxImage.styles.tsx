import { MainTitle } from "components/text/Text";
import styled from "styled-components";

export const ParallaxImageContainer = styled.div<{ $height?: number }>`
  width: 100%;
  height: ${({ $height }) => $height || 250}px;
  position: absolute;
  overflow: hidden;
  & ${MainTitle} {
    z-index: 4;
    position: absolute;
    top: 5rem;
    width: 100%;
    margin: 0 auto;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    & ${MainTitle} {
      font-size: ${({ theme }) => theme.font.size.small};
    }
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
  }
`;
