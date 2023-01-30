import { MainTitle } from "components/styled-components/Text";
import styled from "styled-components";

export const ParallaxImageContainer = styled.div<{ $height?: number }>`
  width: 100%;
  height: ${({ $height }) => $height || 250}px;
  position: fixed;
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
    height: 500px;
    & ${MainTitle} {
      font-size: 2.5rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    height: 500px;
  }
`;
