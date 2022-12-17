import { NAV_HEIGHT } from "components/navigation/styledComponents";
import styled from "styled-components";

const ViewItemIcon = styled.img`
  position: absolute;
  height: 2.5rem;
  cursor: pointer;
  z-index: 5;
`;
export const ScrollLeft = styled(ViewItemIcon)`
  left: 3%;
  top: 50%;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    top: auto;
  }
`;

export const ScrollRight = styled(ViewItemIcon)`
  right: 3%;
  top: 50%;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    top: auto;
  }
`;

export const Exit = styled(ViewItemIcon)`
  right: 3%;
  top: 4rem;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    top: 8vh;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    top: ${NAV_HEIGHT};
  }
`;
