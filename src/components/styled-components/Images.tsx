import { NAV_HEIGHT } from "components/navigation/styledComponents";
import styled, { keyframes } from "styled-components";

const onMouseOut = keyframes`
100% {
    opacity: 0.8;
    transform: scale(1);
  }
`;

const onMouseOver = keyframes`
 100% {
    opacity: 0.7;
    transform: scale(0.7);
  }
`;

const ViewItemIcon = styled.img`
  position: absolute;
  height: 2.5rem;
  cursor: pointer;
  z-index: 2;
  animation-timing-function: ease-in-out;
  -webkit-animation: ${onMouseOut} 500ms 1 forwards;
  &:hover {
    animation-timing-function: ease-in-out;
    -webkit-animation: ${onMouseOver} 500ms 1 forwards;
  }
  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.mobile}px) {
    height: 2rem;
`;
const ScrollIcon = styled(ViewItemIcon)`
  top: 55%;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    top: 85vh;
    height: 2rem;
  }
`;

export const ScrollLeft = styled(ScrollIcon)`
  left: 3%;
`;

export const ScrollRight = styled(ScrollIcon)`
  right: 3%;
`;

export const Exit = styled(ViewItemIcon)`
  right: 3%;
  top: 4rem;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    top: 4rem;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    top: ${NAV_HEIGHT} + 2rem;
  }
`;
