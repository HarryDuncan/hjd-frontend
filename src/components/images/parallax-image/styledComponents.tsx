import { MainTitle } from "components/styled-components/Text";
import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 95%;
  left: 2.5%;
  height: 250px;
  position: fixed;
  overflow: hidden;
  & ${MainTitle} {
    z-index: 4;
    position: absolute;
    top: 0;
    width: 100%;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    width: calc(100% - 4rem);
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    width: calc(100% - 1rem);
  }
`;
