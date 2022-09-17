import styled from "styled-components";

export const LinkTreeContainer = styled.div``;

export const LinkTreeItem = styled.div`
  background: ${({ theme }) => theme.colors.gradients.dark};
  & a {
    text-decoration: none;
  }
`;
