import styled, { keyframes } from "styled-components";

export const Line = styled.div`
  width: 50px;
  height: 5px;
  display: block;
`;

export const MenuButtonContainer = styled.div<{
  $isActive: boolean;
  $isLight: boolean;
}>`
  height: auto;
  display: block;
  margin-right: 1rem;
  margin-top: 0.4rem;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  ${Line} {
    margin: 7px auto;
    background: ${({
      theme: {
        colors: { gradients },
      },
      $isLight,
    }) => ($isLight ? gradients.dark : gradients.light)};
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
`;

export const activeOne = keyframes`
 from {
   
  }
  to {
    transform: translateY(12px) rotate(45deg);
  }
}`;

export const inactiveOne = keyframes`
 from {
    transform: translateY(12px) rotate(45deg);
  }
  to {
    transform: translateY(0) rotate(0);
  }
}`;
export const activeTwo = keyframes`
 from {
   
  }
  to {
    transform: translateY(-12px) rotate(-45deg);
  }
}`;

export const inactiveTwo = keyframes`
 from {
    transform: translateY(-20px) rotate(-45deg);
  }
  to {
    transform: translateY(0) rotate(0);
  }
}`;

// .hamburger {
//   margin: 0.5rem 0.5rem;
// }

// .hamburger:hover {
//   cursor: pointer;
// }

// /* ONE */

// #hamburger-1.is-active .line:nth-child(2) {
//   opacity: 0;
// }

// #hamburger-1.is-active .line:nth-child(1) {

// }

// #hamburger-1.is-active .line:nth-child(3) {
//   -webkit-transform: translateY(-12px) rotate(-45deg);
//   -ms-transform: translateY(-12px) rotate(-45deg);
//   -o-transform: translateY(-12px) rotate(-45deg);
//   transform: translateY(-12px) rotate(-45deg);
// }
