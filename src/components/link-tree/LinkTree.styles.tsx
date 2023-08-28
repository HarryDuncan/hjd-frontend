import { NAV_HEIGHT } from "components/navigation/navigation.styles";
import styled from "styled-components";

export const LinkTreeContainer = styled.div`
  position: fixed;
  z-index: 10;
  margin: 0 auto;
  margin-top: ${NAV_HEIGHT};
  width: 100%;
`;

export const LinkTreeItem = styled.div`
  background: ${({ theme }) => theme.colors.gradients.dark};
  & a {
    text-decoration: none;
  }
`;
