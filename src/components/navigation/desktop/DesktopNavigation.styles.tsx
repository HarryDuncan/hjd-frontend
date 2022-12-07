import styled from "styled-components";

export const NavItemList = styled.ul`
  display: flex;
  margin-top: 0rem;
  list-style: none;
  margin-right: 2.5%;
  text-align: center;
  border: none;
`;

export const NavItem = styled.li`
  display: table-cell;
  justify-content: right;
  text-decoration: none;
  align-content: right;
  float: right;
  margin-left: 1em;
  cursor: pointer;
  position: relative;
`;

export const NavItemLabel = styled.span<{ $isNavTop: boolean }>`
  text-align: right;
  cursor: pointer;
  font-family: "Harryduncan";
  font-size: 4rem;
  margin: 0;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  width: 0;
  background: ${({ theme, $isNavTop }) =>
    $isNavTop ? theme.colors.gradients.dark : theme.colors.gradients.light};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const NavItemLink = styled.div<{
  $isNavTop: boolean;
  $isActive: boolean;
}>`
  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    bottom: 0.2rem;
    left: 0;
    background-color: ${({ $isNavTop }) => ($isNavTop ? "#000" : "#fff")};
    transform: ${({ $isActive }) => ($isActive ? `scaleX(1)` : `scaleX(0)`)};
    transition: transform 0.3s ease;
  }

  &:hover:before {
    transform: scaleX(1);
  }
`;
