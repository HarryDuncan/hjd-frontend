import styled from "styled-components";

export const ImageContainer = styled.div<{ $backgroundImgUrl: string }>`
  background-image: url(${({ $backgroundImgUrl }) => $backgroundImgUrl});
  width: 100%;
  height: 150px;
  position: fixed;
  display: grid;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: 50% 50%;
  transform-origin: inherit;
  position: relative;
  will-change: transform;
  filter: brightness(70%);
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    width: 100%;
  }
`;

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
export const ImageElement = styled.div<{ $backgroundImgUrl: string }>`
  background-image: url(${({ $backgroundImgUrl }) => $backgroundImgUrl});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
  transform-origin: inherit;
  position: relative;
  grid-area: 1 / 1 / 2 / 2;
  width: 100%;
  height: 100%;
  will-change: transform;
  border-radius: inherit;
  filter: brightness(50%);
`;
