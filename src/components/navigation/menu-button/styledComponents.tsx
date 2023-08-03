import styled, { keyframes } from "styled-components";

export const Line = styled.div`
  width: 50px;
  height: 8px;
  display: block;
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
  margin: 0.3rem 2.5%;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}px) {
    margin: 0.3rem 0.5rem;
  }
  ${Line} {
    margin: 6px auto;
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
    transform: translateY(18px) rotate(45deg);
  }
}`;

export const inactiveOne = keyframes`
 from {
    transform: translateY(18px) rotate(45deg);
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
