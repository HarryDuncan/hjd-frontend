import styled from "styled-components";
import { ImageProps } from "./imageHover.types";

export const ImageWrap = styled.div`
  transform-origin: inherit;
  position: relative;
  grid-area: 1 / 1 / 2 / 2;
  width: 100%;
  height: 100%;
  will-change: transform;
  border-radius: inherit;
  overflow: hidden;
`;

export const HoverImageContainer = styled.div<{
  $backgroundImgUrl: string;
  $imageProps: ImageProps;
}>`
  background-image: url(${({ $backgroundImgUrl }) => $backgroundImgUrl});
  width: 100%;
  height: ${({ $imageProps }) =>
    $imageProps.heightPx ? `${$imageProps.heightPx}px` : `100%`};
  display: grid;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: ${({ $imageProps: { positionPercentage } }) =>
    positionPercentage
      ? `${positionPercentage.x}% ${positionPercentage.y}%`
      : `50% 50%`};
  transform-origin: inherit;
  position: relative;
  will-change: transform;
  filter: brightness(50%);
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    width: 100%;
  }
`;

export const DefaultImage = styled.div<{
  $backgroundImgUrl: string;
  $imageProps: ImageProps;
}>`
  background-image: url(${({ $backgroundImgUrl }) => $backgroundImgUrl});
  background-size: cover;
  background-position: ${({ $imageProps: { positionPercentage } }) =>
    positionPercentage
      ? `${positionPercentage.x}% ${positionPercentage.y}%`
      : `50% 50%`};
  transform-origin: inherit;
  position: relative;
  grid-area: 1 / 1 / 2 / 2;
  width: 100%;
  height: ${({ $imageProps }) =>
    $imageProps.heightPx ? `${$imageProps.heightPx}px` : `100%`};
  will-change: transform;
  border-radius: inherit;
  filter: brightness(50%);
`;
