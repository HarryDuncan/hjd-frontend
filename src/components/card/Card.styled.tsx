import styled, { keyframes } from "styled-components";

export const CardTitle = styled.h1`
  color:white;
  opacity: 0;
  position: absolute;
  z-index: 40;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 3em;
  margin-left: 20px;
  top: 0;
  font-weight ${({ theme }) => theme.font.weight.light};
  pointer-events: none;
`;

const showTitle = keyframes`
0% {
}
100% {
  opacity : 1;
}
`;
export const CardImage = styled.img`
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

export const ConfigurableCardWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: auto;
  background-color: black;
  width: 15rem;
  height: 15rem;
  background: transparent;
  position: relative;
  cursor: default;
  &:hover {
    ${CardTitle} {
      animation: ${showTitle} 500ms 1 forwards;
    }
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop}px) {
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    width: 8rem;
    height: 8rem;
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
  margin: 2.5%;
  &:hover {
    ${CardTitle} {
      animation: ${showTitle} 500ms 1 forwards;
    }
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    width: 40%;
    margin: 5%;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    width: calc(100% - 0.4rem);
    margin: 0.5rem 0.2rem;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.smallMobile}px) {
    width: 100%;
  }
`;

export const CardFooterContainer = styled.div``;

export const CardFooter = styled.div`
  background: ${({ theme }) => theme.colors.gradients.dark};
  padding: 20px;
  color: white;
`;
