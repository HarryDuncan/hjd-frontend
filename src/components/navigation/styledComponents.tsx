import styled, { keyframes } from "styled-components";

export const NAV_HEIGHT = "10vh";

export const NavigationContainer = styled.div<{}>`
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
`;

export const NavBackgroundOverlay = styled.div<{ $isOpen?: boolean }>`
  width: 100%;
  display: block;
  z-index: -1;
  position: fixed;
  background: ${({ theme }) => theme.colors.gradients.dark};
  opacity: 0.95;
  animation-name: ${({ $isOpen }) => ($isOpen ? growNav : shrinkNav)};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  backdrop-filter: blur(2005px);
`;

export const NavTitle = styled.h1<{ $isDark?: boolean }>`
  margin: 0 2.5%;
  text-transform: uppercase;
  background: ${({ $isDark, theme }) =>
    $isDark ? theme.colors.gradients.dark : theme.colors.gradients.light};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.2rem;
  text-align: left;
  font-size: 4rem;
  font-family: "Harryduncan",
    @media only screen and
      (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 0 0 0 0.5rem;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    font-size: 3.7rem;
    margin: 0.25rem 0.5rem;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.smallMobile}px) {
    font-size: 3.1rem;
    margin: 0.25rem 0.5rem;
  }
`;

export const growNav = keyframes`
  from {
    height: 0px;
  }
  to {
    height: 4em;
  }
}`;

export const shrinkNav = keyframes`
  from {
    height: 4em;
  }
  to {
    height: 0px;
  }
`;

const SiteDownBar = styled.div`
  margin: 0 auto;
  margin-top: 1em;
  padding: 0.5%;
  height: fit-content;
`;
