import styled from "styled-components";
import { IconPosition } from "./Icons.types";

export const IconContainer = styled.div<{
  $position: IconPosition;
  $mobilePosition?: IconPosition;
}>`
  position: ${({ $position }) => $position.positionType ?? "absolute"};
  top: ${({ $position }) => $position.top};
  left: ${({ $position }) => $position.left};
  right: ${({ $position }) => $position.right};
  bottom: ${({ $position }) => $position.bottom};
  width: fit-content;
  height: fit-content;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    position: ${({ $mobilePosition }) =>
      $mobilePosition?.positionType ?? "absolute"};
    top: ${({ $mobilePosition }) => $mobilePosition?.top};
    left: ${({ $mobilePosition }) => $mobilePosition?.left};
    right: ${({ $mobilePosition }) => $mobilePosition?.right};
    bottom: ${({ $mobilePosition }) => $mobilePosition?.bottom};
  }
  img {
    position: relative;
    height: 2.5rem;
    cursor: pointer;
    z-index: 2;
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.mobile}px) {
      height: 1.5rem;
    }
  }
`;
