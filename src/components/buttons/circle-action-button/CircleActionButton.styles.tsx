import styled from "styled-components";

export const CircleButton = styled.button`
  z-index: 15;
  margin: 0 auto;
  position: relative;
  grid-area: 1 / 1 / -1 / -1;
  align-self: center;
  justify-self: center;
  color: #fff;
  font-size: ${({ theme }) => theme.font.size.small};
  background: transparent;
  border: 0;
  padding: 0;
  font: inherit;

  :focus {
    outline: none;
  }
  cursor: pointer;
  font-weight: 200;
  width: 200px;
  height: 200px;
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
    font-weight: 100;
    transition: transform 0.3s ease-out;
  }
  :hover .circle-svg {
    transform: scale3d(1.2, 1.2, 1);
    transition: transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
  }
  :hover h2 {
    transform: translate3d(0, 50%, 0);
    transition: transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    margin: 0 auto;
    margin-top: 25%;
    width: 110px;
    height: 110px;
    position: relative;
    h2 {
      font-size: ${({ theme }) => theme.font.size.medium};
      transition: transform 0.3s ease-out;
    }
  }
`;
export const ButtonText = styled.h2`
  line-height: 1;
  overflow: hidden;
  grid-area: 1 / 1 / -1 / -1;
  display: block;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.mono.darkText};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.large};
  z-index: 5;
`;
