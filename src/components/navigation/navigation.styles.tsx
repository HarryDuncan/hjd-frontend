import styled, { keyframes } from "styled-components";
import { NAV_OVERLAY_HEIGHT } from "./navigation.constants";

export const NAV_HEIGHT = "8vh";

export const NavigationContainer = styled.div`
  margin: 0 auto;
  left: 0;
  top: 0;
  z-index: 3;
  max-height: 4rem;
  display: flex;
  justify-content: space-between;
  clear: both;
  position: fixed;
  width: 100%;
  a {
    text-decoration: none;
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
  animation-duration: 0.1s;
  animation-fill-mode: forwards;
  backdrop-filter: blur(2005px);
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    animation-name: ${({ $isOpen }) =>
      $isOpen ? growNavMobile : shrinkNavMobile};
  }
`;

export const NavTitle = styled.h1<{ $isLight?: boolean }>`
  margin: -0.9rem 0.5%;
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ $isLight }) => ($isLight ? "white" : "black")};
  text-align: left;
  font-size: 7rem;
  white-space: nowrap;
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-family: "Harryduncan";
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    margin: 0 0 0 0.5rem;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    font-size: 5rem;
    margin: -0.6rem 0 0 0;
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