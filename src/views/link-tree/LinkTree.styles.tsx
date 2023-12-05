import { MainTitle } from "components/text/Text";
import styled from "styled-components";

export const LinkTreeItem = styled.div`
  z-index: 4;
  & a {
    text-decoration: none;
  }
  ${MainTitle} {
    font-size: ${({ theme }) => theme.font.size.medium};
    text-decoration: underline;
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.mobile}px) {
      font-size: ${({ theme }) => theme.font.size.small};
    }
  }
`;
