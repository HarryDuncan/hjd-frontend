import { MainTitle } from "components/text/Text";
import styled from "styled-components";

export const LinkTreeContainer = styled.div`
  position: relative;
  z-index: 10;
  margin: 0 auto;
  margin-top: 8rem;
  margin-bottom: 8rem;
  width: 60vw;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    width: 80vw;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

export const LinkTreeItem = styled.div`
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
