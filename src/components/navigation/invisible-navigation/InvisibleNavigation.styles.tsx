import styled from "styled-components";
import { NavigationContainer } from "../navigation.styled";

export const InvisibleNavigationContainer = styled(NavigationContainer)`
  h1 {
    margin: -1rem 0.5%;
    text-transform: uppercase;
    cursor: pointer;
    color: white;
    text-align: left;
    font-size: 7rem;
    white-space: nowrap;
    font-weight: ${({ theme }) => theme.font.weight.light};
    font-family: var(--font-hjd);

    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.mobile}px) {
      font-size: 5rem;
      margin: -0.6rem 0 0 0;
    }
  }
`;

export const ScrollerContainer = styled.div`
  position: relative;
`;
