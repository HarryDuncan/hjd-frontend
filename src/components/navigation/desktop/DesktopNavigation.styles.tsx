import styled from "styled-components";

export const NavItemList = styled.ul`
  display: flex;
  margin-top: 0rem;
  list-style: none;
  margin-right: 0.5%;
  text-align: center;
  border: none;
  max-width: 50%;
`;

export const NavItem = styled.li`
  display: table-cell;
  justify-content: right;
  text-decoration: none;
  align-content: right;
  float: right;
  margin: 0rem 0 0 1em;
  cursor: pointer;
  position: relative;
  height: 3.8rem;
`;

export const NavItemLabel = styled.span<{ $isLight: boolean }>`
  text-align: right;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.alternative.family};
  font-size: ${({ theme }) => theme.font.size.large};
  text-transform: uppercase;
  color: ${({ $isLight }) => ($isLight ? "white" : "black")};
`;

export const NavItemLink = styled.div<{
  $isLight: boolean;
  $isActive: boolean;
}>`
  :hover {
    .line {
      opacity: 1;
    }
  }
  .line {
    outline: 120px solid transparent;
    opacity: ${({ $isActive }) => ($isActive ? 1.0 : 0.0)};
    position: absolute;
    pointer-events: none;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: ${({ $isLight }) => ($isLight ? "white" : "black")};
  }
`;
