import styled, { keyframes } from "styled-components";

export const Line = styled.div`
  width: 5rem;
  height: 1rem;
  display: block;
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}px) {
    width: 3.5rem;
    height: 0.65rem;
  }
`;

export const MenuButtonContainer = styled.div<{
  $isActive: boolean;
  $isLight: boolean;
}>`
  height: auto;
  display: block;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin: 0.1rem 0.5%;

  ${Line} {
    margin: 0 0 0.3rem 0;
    background-color: ${({ $isLight }) => ($isLight ? "black" : "white")};
  }
  & :first-child {
    animation-name: ${({ $isActive }) => ($isActive ? activeOne : inactiveOne)};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
  & :nth-child(2) {
    opacity: ${({ $isActive }) => ($isActive ? 0 : 1)};
  }
  & :last-child {
    animation-name: ${({ $isActive }) => ($isActive ? activeTwo : inactiveTwo)};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}px) {
    margin: 0.2rem 0.65rem;
  }
`;

export const activeOne = keyframes`
 from {
   
  }
  to {
    transform: translateY(1rem) rotate(45deg);
    margin:0;
    width: 3rem;
  }
}`;

export const inactiveOne = keyframes`
 from {
    transform: translateY(1rem) rotate(45deg);
  }
  to {
    transform: translateY(0) rotate(0);
  }
}`;
export const activeTwo = keyframes`
 from {
   
  }
  to {
    transform: translateY(-0.7rem) rotate(-45deg);
    margin: 0;
    width: 3rem;
  }
}`;

export const inactiveTwo = keyframes`
 from {
    transform: translateY(-0.7rem) rotate(-45deg);
  }
  to {
    transform: translateY(0) rotate(0);
  }
}`;
