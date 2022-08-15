import Image from "next/image";
import styled from "styled-components";

export const ImageContainer = styled.div<{ $backgroundImgUrl: string }>`
  background-image: url(${({ $backgroundImgUrl }) => $backgroundImgUrl});
  width: calc(100% - 4rem);
  height: 300px;
  position: fixed;
  max-width: 30vw;
  margin: 0 1vw;
  display: grid;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 285px;
  height: 450px;

  background-size: cover;
  background-position: 50% 50%;
  transform-origin: inherit;
  position: relative;

  will-change: transform;
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
`;
