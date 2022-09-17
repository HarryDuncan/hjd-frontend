import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
 0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const growSplash = keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: 50%;
  }
`;

export const SplashContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 120;
  width: 100vw;
  height: 100vh;
  display: grid;
  animation-name: ${fadeOut};
  animation-duration: 0.3s;
  animation-delay: 1.7s;
`;

export const Overlay = styled.div`
  position: absolute;
  background-color: white;
  opacity: 1;
  width: 100%;
  height: 100%;
`;

export const DarkOverlay = styled.div`
  position: absolute;
  z-index: 102;
  background: black;
  opacity: 1;
  width: 0;
  height: 100%;
  animation-name: ${growSplash};
  animation-delay: 0.5s;
  animation-duration: 0.5s;
  animation-iteration-count: 2;
  animation-direction: alternate;
  overflow-x: hidden;
`;

export const SplashImage = styled.img`
  z-index: 100;
  position: absolute;
  left: calc(50vw - 10rem);
  width: 20rem;
  top: 20%;
  animation-name: ${fadeIn};
  animation-duration: 0.3s;
`;
