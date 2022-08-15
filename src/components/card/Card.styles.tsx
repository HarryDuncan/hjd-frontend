import Image from "next/image";
import styled, { keyframes } from "styled-components";

export const CardTitle = styled.h2`
  color: rgba(237, 235, 233, 0);
  position: absolute;
  z-index: 40;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.05em;
  font-size: 2em;
  margin-left: 20px;
  font-weight: 400;
  top: 0;
  pointer-events: none;
  &: hover {

  }
`;

export const CardFooter = styled.div``;

const showTitle = keyframes`
0% {
}
100% {
  color: rgba(237, 235, 233, 1);
}
`;

export const CardWrapper = styled.div`
  box-sizing: inherit;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  width: 20%;
  background-color: transparent !important;
  padding-bottom: -4%;
  -webkit-box-shadow: 15px 15px 16px #ccc;
  -moz-box-shadow: 15px 15px 16px #ccc;
  box-shadow: 15px 15px 16px #ccc;
  cursor: pointer;
  margin-bottom: 30px;
  margin-right: 1rem;
  margin-left: 2rem;
  &:hover {
    ${CardTitle} {
      animation: ${showTitle} 500ms 1 forwards;
    }
  }
`;

export const CardImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  min-height: 100px;
  vertical-align: middle;
  &: hover {
    filter: brightness(30%);
    animation-timing-function: ease-in-out;

    -webkit-animation: showTitle 500ms 1 forwards;
  }
`;
