import styled, { keyframes } from "styled-components";
import { NAV_OVERLAY_HEIGHT } from "./navigation.consts";

export const NAV_HEIGHT = "5rem";

export const NavigationContainer = styled.div<{ $isLight?: boolean }>`
  margin: 0 auto;
  left: 0;
  top: 0;
  z-index: 3;
  height: ${NAV_HEIGHT};
  display: flex;
  justify-content: space-between;
  clear: both;
  position: fixed;

  width: 100%;
  a {
    text-decoration: none;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    height: 3rem;
  }
  h1 {
    margin: -0.8rem 2%;
    text-transform: uppercase;
    cursor: pointer;
    color: ${({ $isLight }) => ($isLight ? "white" : "black")};
    text-align: left;
    font-size: ${({ theme }) => theme.font.size.xLarge};
    white-space: nowrap;
    font-weight: ${({ theme }) => theme.font.weight.light};
    font-family: ${({ theme }) => theme.font.alternative.family};

    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.mobile}px) {
      font-size: ${({ theme }) => theme.font.size.mediumLarge};
      margin: -0.2rem 0 0 0;
    }
  }
`;

export const NavBackgroundOverlay = styled.div<{ $isOpen?: boolean }>`
  width: 100%;
  display: block;
  z-index: -1;
  position: fixed;
  background: ${({ theme }) => theme.colors.gradients.dark};
  opacity: 0.95;
  animation-name: ${({ $isOpen }) => ($isOpen ? growNav : shrinkNav)};
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  backdrop-filter: blur(2005px);
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    animation-name: ${({ $isOpen }) =>
      $isOpen ? growNavMobile : shrinkNavMobile};
  }
`;

export const growNav = keyframes`
  from {
    height: 0px;
  }
  to {
    height: ${NAV_OVERLAY_HEIGHT}
  }
`;

export const shrinkNav = keyframes`
  from {
    height: ${NAV_OVERLAY_HEIGHT}
  }
  to {
    height: 0px;
  }
`;

export const growNavMobile = keyframes`
from {
  height: 0px;
}
to {
  height: 3rem;
}
`;

export const shrinkNavMobile = keyframes`
  from {
    height: 3rem;
  }
  to {
    height: 0px;
  }
`;

export const FloatingNavigationContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
`;
