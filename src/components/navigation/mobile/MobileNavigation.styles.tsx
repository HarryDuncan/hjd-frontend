import styled, { keyframes, ThemeConsumer } from "styled-components";

export const NavItemContainer = styled.div<{
  $isOpen: boolean;
  $isLight: boolean;
}>`
  margin-top: 4rem;
  width: 100vw;
  height: 100vh;
  background: ${({ $isLight, theme }) =>
    $isLight ? theme.colors.gradients.dark : theme.colors.mono.background};
  opacity: ${({ $isLight }) => ($isLight ? 0.95 : 1)};
  z-index: 300;
  display: flex;
  flex-direction: column;
  position: fixed;
  animation-name: ${({ $isOpen }) => ($isOpen ? growNav : shrinkNav)};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
`;

const growNav = keyframes`
  from {
    width: 0px;
  }
  to {
    width: 100%;
  }
}`;

const shrinkNav = keyframes`
  from {
  width: 100%;
  }
  to {
    width: 0px;
  }
`;
export const MobileText = styled.span<{ $isLight: boolean }>`
  text-align: right;
  cursor: pointer;
  font-family: "HarryDuncan";
  text-transform: uppercase;
  padding-right: 0.5rem;
  background: ${({
    $isLight,
    theme: {
      colors: {
        gradients: { dark, light },
      },
    },
  }) => ($isLight ? dark : light)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4.5rem;
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
