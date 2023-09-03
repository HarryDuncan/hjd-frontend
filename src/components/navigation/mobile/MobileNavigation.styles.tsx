import styled, { keyframes } from "styled-components";
import { NAV_OVERLAY_HEIGHT } from "../navigation.constants";

export const NavItemContainer = styled.div<{
  $isOpen: boolean;
  $isLight: boolean;
}>`
  width: 0vw;
  height: 100vh;
  background: ${({ $isLight, theme }) =>
    $isLight ? theme.colors.mono.background : theme.colors.gradients.dark};
  opacity: ${({ $isLight }) => ($isLight ? 0.95 : 1)};
  z-index: 300;
  display: flex;
  flex-direction: column;
  position: fixed;
  animation-name: ${({ $isOpen }) => ($isOpen ? growNav : shrinkNav)};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  margin-top: ${NAV_OVERLAY_HEIGHT};
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}px) {
    margin-top: 3rem;
  }
`;

const growNav = keyframes`
  from {
    width: 0px;
  }
  to {
    width: 100vw;
  }
}`;

const shrinkNav = keyframes`
  from {
  width: 100vw;
  }
  to {
    width: 0px;
  }
`;
export const MobileText = styled.span<{ $isLight: boolean }>`
  text-align: right;
  cursor: pointer;
  font-family: "Harryduncan";
  text-transform: uppercase;
  padding-right: 0.5rem;
  color: ${({ $isLight }) => ($isLight ? "white" : "black")};
  font-size: 7rem;
  margin-right: 2.5%;
  a {
    color: ${({ $isLight }) => ($isLight ? "white" : "black")};
  }
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}px) {
    margin: 0.5rem;
    font-size: 6rem;
  }
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}px) {
    margin: 1rem 0.5rem;
    font-size: 4rem;
  }
`;
