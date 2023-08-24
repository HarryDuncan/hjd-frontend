import styled from "styled-components";

export const CircleButton = styled.button`
  z-index: 9;
  bottom: 10vh;
  position: fixed;
  grid-area: 1 / 1 / -1 / -1;
  align-self: center;
  justify-self: center;
  color: #fff;
  font-size: 2rem;

  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  font: inherit;

  :focus {
    outline: none;
  }
  cursor: pointer;
  font-family: ivymode, sans-serif;
  font-weight: 200;
  z-index: 1;
  width: 300px;
  height: 300px;
  display: grid;
  place-items: center;
  .circle-svg {
    width: 100%;
    height: 100%;
    grid-area: 1 / 1 / -1 / -1;
    fill: none;
    stroke: black;
    stroke-width: 1px;
    transition: transform 0.3s ease-out;
  }
  h2 {
    transition: transform 0.3s ease-out;
  }
  :hover .circle-svg {
    transform: scale3d(1.4, 1.4, 1);
    transition: transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
  }
  :hover h2 {
    transform: translate3d(0, 50%, 0);
    transition: transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
  }
`;
export const ButtonText = styled.h2`
  line-height: 1;
  overflow: hidden;
  grid-area: 1 / 1 / -1 / -1;
  display: block;
  padding: 0 0.5rem;
  color: black;
  text-transform: uppercase;
  font-size: 5rem;
`;

export const CircleSVG = styled.svg``;
