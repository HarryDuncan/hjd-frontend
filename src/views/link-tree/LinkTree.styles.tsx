import { MainTitle } from "components/text/Text";
import styled from "styled-components";

export const LinkTreeItem = styled.div`
  z-index: 4;
  & a {
    text-decoration: none;
  }
  ${MainTitle} {
    font-size: 3rem;
    text-decoration: underline;
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.mobile}px) {
      font-size: 2.5rem;
    }
  }
`;
