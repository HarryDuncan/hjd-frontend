import styled, { keyframes } from "styled-components";

export const CardTitle = styled.h1`
  background: ${({ theme }) => theme.colors.gradients.light};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  position: absolute;
  z-index: 40;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.05em;
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
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    width: 100%;
    margin: 1rem 0rem;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.smallMobile}px) {
    width: 100%;
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

export const CardFooterContainer = styled.div``;

export const CardFooter = styled.div`
  background: ${({ theme }) => theme.colors.gradients.dark};
  padding: 20px;
  color: white;
`;
