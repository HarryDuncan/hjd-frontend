import styled from "styled-components";
import { NavigationContainer } from "../navigation.styled";

export const InvisibleNavigationContainer = styled(NavigationContainer)`
  h1 {
    margin: -1rem 0.5%;
    text-transform: uppercase;
    cursor: pointer;
    color: white;
    text-align: left;
    font-size: ${({ theme }) => theme.font.size.xLarge};
    white-space: nowrap;
    font-weight: ${({ theme }) => theme.font.weight.light};
    font-family: ${({ theme }) => theme.font.alternative.family};
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.mobile}px) {
      font-size: ${({ theme }) => theme.font.size.large};
      margin: -0.6rem 0 0 0;
    }
  }
`;

export const ScrollerContainer = styled.div`
  position: relative;
`;
